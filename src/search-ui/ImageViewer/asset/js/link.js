/**
 * @file 图片拉链和图集数据管理
 * @author rongweiwei@baidu.com
 */
import lodash from '@baidu/ala-util';

class LinkStore {
    constructor(list) {
        this.link = [];
        this.adGap = 15;
        this.adStartIndex = 5;
        this.adItems = [];
        this.nextAdMaps = {};
        this.prevAdMaps = {};
        this.switchCount = this.adGap * 10000 - this.adStartIndex;
        this.updateList(list);
    }

    destroy() {
        this.link.forEach((item, index) => {
            delete item.isLinkItem;
            delete item.index;
            delete item.setIndex;

            if (item.setNum) {
                item.setList.forEach(setItem => {
                    delete setItem.index;
                    delete setItem.setIndex;
                    delete setItem.setNum;
                });
            }
        });

        this.link = null;
        this.setMap = null;
    }

    has(index) {
        return 0 <= index && index < this.link.length;
    }

    count() {
        return this.link.length;
    }

    get(index, setIndex = 0) {
        if (setIndex === 0 && this.has(index)) {
            return this.link[index];
        }

        if (setIndex > 0 && this.has(index)) {
            let item = this.link[index];
            if (item.setNum > setIndex && item.setList[setIndex]) {
                return item.setList[setIndex];
            }

            // 容错：如果没有套图数据，使用套图封面
            return item;
        }

        return null;
    }
    setNextAdMaps(adItem, item) {
        let adItemCopy = lodash.extend({}, adItem);
        adItemCopy.index = item.index;
        adItemCopy.setIndex = item.setIndex;
        adItemCopy.isLinkItem = item.isLinkItem;
        adItemCopy.setList = item.setList;
        this.nextAdMaps[item.index * 10000 + item.setIndex] = adItemCopy;
    }
    getNextAdItem(item) {
        return this.nextAdMaps[item.index * 10000 + item.setIndex];
    }
    setPrevAdMaps(adItem, item) {
        let adItemCopy = lodash.extend({}, adItem);
        adItemCopy.index = item.index;
        adItemCopy.setIndex = item.setIndex;
        adItemCopy.isLinkItem = item.isLinkItem;
        adItemCopy.setList = item.setList;
        this.prevAdMaps[item.index * 10000 + item.setIndex] = adItemCopy;
    }
    getPrevAdItem(item) {
        return this.prevAdMaps[item.index * 10000 + item.setIndex];
    }
    getNext(item) {
        let adItem;
        if (!item) {
            return null;
        }
        let nextImgItem = this.getNextItem(item);
        if (item.hasNextAd && this.getNextAdItem(item)) {
            return this.getNextAdItem(item);
        }

        if (!item.isAd && !item.hasShow && (this.switchCount % this.adGap === 0)) {

            if (this.adItems.length) {
                adItem = this.adItems.shift();
                adItem.id = +new Date();
                this.setNextAdMaps(adItem, item);
                item.hasNextAd = 1;
                if (nextImgItem) {
                    this.setPrevAdMaps(adItem, nextImgItem);
                    nextImgItem.hasPrevAd = 1;
                }
                return this.getNextAdItem(item);
            }
        }
        if (item) {
            item.hasShow = 1;
        }
        return nextImgItem;
    }

    getPrev(item) {
        let adItem;
        if (!item) {
            return null;
        }
        let prevImgItem = this.getPrevItem(item);
        if (item.hasPrevAd && this.getPrevAdItem(item)) {
            return this.getPrevAdItem(item);
        }

        if (!item.isAd && !item.hasShow && this.switchCount % this.adGap === 0) {
            if (this.adItems.length) {
                adItem = this.adItems.shift();
                // 根据 id 删除广告
                adItem.id = +new Date();
                this.setPrevAdMaps(adItem, item);
                item.hasPrevAd = 1;
                if (prevImgItem) {
                    this.setNextAdMaps(adItem, prevImgItem);
                    prevImgItem.hasNextAd = 1;
                }
                return this.getPrevAdItem(item);
            }
        }
        if (item) {
            item.hasShow = 1;
        }
        return prevImgItem;
    }
    getPrevItem(item) {
        if (item && item.isLinkItem) {
            let prev = this.get(item.index - 1);
            if (prev && prev.setList.length) {
                return prev.setList[prev.setList.length - 1];
            }
            else if (prev) {
                return prev;
            }
        }
        else if (item) {
            let linkItem = this.get(item.index);
            if (linkItem && item.setIndex > 1 && linkItem.setList[item.setIndex - 1]) {
                return linkItem.setList[item.setIndex - 1];
            }
            else if (linkItem && item.setIndex === 1) {
                return linkItem;
            }
        }
    }
    getNextItem(item) {
        if (item && item.isLinkItem) {
            if (item.setList[1]) {
                return item.setList[1];
            }
            else if (this.has(item.index + 1)) {
                return this.get(item.index + 1);
            }
        }
        else if (item) {
            let linkItem = this.get(item.index);
            if (linkItem && linkItem.setList[item.setIndex + 1]) {
                return linkItem.setList[item.setIndex + 1];
            }
            else if (this.has(item.index + 1)) {
                return this.get(item.index + 1);
            }
        }
    }
    updateSetInfo(index, setInfo) {
        let item = this.get(index);
        if (!item || item.setNum < 2 || item.setList.length
            || !setInfo.list || setInfo.list.length !== item.setNum) {
            return false;
        }

        let list = setInfo.list.slice(0);
        list.forEach((setItem, setIndex) => {
            if (setItem === item) {
                return;
            }
            setItem.index = index;
            setItem.setIndex = setIndex;
            setItem.setNum = item.setNum;
        });

        item.setList = list;
        return true;
    }
    updateList(list, startIndex) {
        if (typeof startIndex !== 'number') {
            startIndex = this.link.length;
        }

        if (!list || !list.length || startIndex < 0 || startIndex > this.link.length) {
            return false;
        }

        // 更新link
        if (startIndex === this.link.length) {
            this.link.splice(startIndex, 0, ...list);
        }
        else {
            this.link.splice(startIndex, list.length, ...list);
        }

        let index = startIndex;
        // 再填充默认字段
        list.forEach(item => {
            let setList = item.setList;
            item.isLinkItem = true;
            item.index = index;
            item.setIndex = 0;
            item.setNum = item.setNum || 0;
            item.setList = [];

            if (setList && setList.length) {
                this.updateSetInfo(index, {list: setList});
            }

            index++;
        });

        return true;
    }

    updateItem(index, setIndex, data) {
        const item = this.get(index, setIndex || 0);

        if (!item || !data) {
            return false;
        }

        const keys = ['src', 'width', 'height'];

        keys.forEach(key => {
            if (key in data && data[key] !== '') {
                item[key] = data[key];
            }
        });

        return true;
    }
    setAdGap(gap, index) {
        this.adGap = gap || 15;
        this.adStartIndex = index || 5;
        this.switchCount = this.adGap * 10000  - this.adStartIndex;
    }
    updateAdItem(adDataList) {
        if (adDataList.length) {
            this.adItems = this.adItems.concat(adDataList);
        }
    }
    countSwitch(direction = 0) {
        this.switchCount += direction;

        return this.switchCount;

    }
    removeAdItem(item) {
        Object.keys(this.nextAdMaps).forEach(val => {
            if (this.nextAdMaps[val].id === item.id) {
                this.nextAdMaps[val] = null;
            }
        });
        Object.keys(this.prevAdMaps).forEach(val => {
            if (this.prevAdMaps[val].id === item.id) {
                this.prevAdMaps[val] = null;
            }
        });
    }
}

export default {
    create(list) {
        const store = new LinkStore(list);
        return {
            count() {
                return store.count();
            },
            get(index, setIndex) {
                return store.get(index, setIndex);
            },
            getNext(item) {
                return store.getNext(item);
            },
            getPrev(item) {
                return store.getPrev(item);
            },
            updateSetInfo(index, setInfo) {
                return store.updateSetInfo(index, setInfo);
            },
            updateList(startIndex, list) {
                return store.updateList(list, startIndex);
            },
            updateItem(index, setIndex, data) {
                return store.updateItem(index, setIndex, data);
            },
            append(list) {
                return store.updateList(list);
            },
            destroy() {
                store.destroy();
            },
            setAdGap(gap, index) {
                store.setAdGap(gap, index);
            },
            updateAdItem(adList) {
                store.updateAdItem(adList);
            },
            countSwitch(direction) {
                store.countSwitch(direction);
            },
            removeAdItem(item) {
                store.removeAdItem(item);
            }
        };
    }
};
