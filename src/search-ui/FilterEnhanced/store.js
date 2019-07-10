/**
 * @file store.js 简单的状态管理器
 * @author wangkai<wangkai37@baidu.com>
 */

export default class Store {
    constructor() {
        this.rootVM = null;
        this.state = {
            // 全部数据
            list: null,
            // 备份数据，用于取消时数据恢复
            listBak: null,
            // 底部的数据
            bottomData: null,
            // 当前选中的 tag 的索引
            curTagIndex: -1,
            // 错误信息
            errorInfo: null
        };
    }
    // 设置根 vm 实例
    setRootVM(vm) {
        this.rootVM = vm;
    }
    // 设置全部数据
    setListAction(list) {
        // 更新 store 里的 state
        this.state.list = list;
        // 备份数据
        this.state.listBak = JSON.parse(JSON.stringify(this.state.list));
        // 更新 Filter 组件里的 state，由于 atom 和 vue 有区别
        this.rootVM.$set(this.rootVM.state, 'list', list);
    }
    // 设置当前选中的 tag 的索引
    setCurTagIndexAction(curTagIndex) {
        this.state.curTagIndex = curTagIndex;
        this.rootVM.$set(this.rootVM.state, 'curTagIndex', curTagIndex);
    }
    // 设置底部数据
    setBottomDataAction(bottomData) {
        // 原底部数据
        const originBottomData = this.state.bottomData;
        this.state.bottomData = bottomData;
        this.rootVM.$set(this.rootVM.state, 'bottomData', bottomData);
        // 如果底部数据存在，并且原底部数据不存在
        if (this.state.bottomData && !originBottomData) {
            // 触发蒙层打开事件
            this.rootVM.onMaskOpen();
        }
        // 如果底部数据不存在，并且原底部数据存在
        if (!this.state.bottomData && originBottomData) {
            // 触发蒙层关闭事件
            this.rootVM.onMaskClose();
        }
    }

    /**
     * 关闭底部区域
     * @param {boolean} isConfirm 是否确认
     * @param {Object} currentChange 当前改变数据
     */
    closeBottomLayoutAction(isConfirm, currentChange) {
        // 清空底部数据
        this.setBottomDataAction(null);
        // 重置选中 tag 索引
        this.setCurTagIndexAction(-1);
        // 如果确认
        if (isConfirm && currentChange) {
            this.confirmAction(currentChange);
        }
        // 如果取消
        else if (currentChange) {
            this.cancelAction(currentChange);
        }
    }
    // 改变列表项数据
    changeListItemAction(tagIndex, listItem) {
        this.state.list[tagIndex] = listItem;
        const listCopy = JSON.parse(JSON.stringify(this.state.list));
        this.rootVM.$set(this.rootVM.state, 'list', listCopy);
    }
    // 设置错误信息
    setErrorInfoAction(errorInfo) {
        this.state.errorInfo = errorInfo;
    }

    /**
     * 确认
     * @param {Object} currentChange 当前改变数据
     */
    confirmAction(currentChange) {
        // 备份数据
        this.state.listBak = JSON.parse(JSON.stringify(this.state.list));
        // 传出去的数据
        const emitObj = {
            allResults: this.getAllResults(),
            currentChange
        };
        // 主动触发顶层组件 Filter 的 change 方法
        this.rootVM.onChange(emitObj);
    }
    // 取消
    cancelAction(currentChange) {
        // 从备份里恢复数据
        this.state.list = JSON.parse(JSON.stringify(this.state.listBak));
        this.rootVM.$set(this.rootVM.state, 'list', this.state.list);
        // 主动触发顶层组件 Filter 的 change 方法
        this.rootVM.onCancel(currentChange);
    }

    // 自定义重置
    customResetBtnClick() {
        this.rootVM.onCustomReset();
    }
    // 自定义确认
    customConfirmBtnClick() {
        this.rootVM.onCustomConfirm();
        this.setCurTagIndexAction(-1);
        this.setBottomDataAction(null);
    }
    // 恢复数据
    recoveryData() {
        // 从备份里恢复数据
        this.state.list = JSON.parse(JSON.stringify(this.state.listBak));
        this.rootVM.$set(this.rootVM.state, 'list', this.state.list);
    }
    // 得到所有值
    getAllResults() {
        const self = this;
        const allResults = {};
        this.state.list.forEach(item => {
            // 递归找
            self.getResultRecursion(item, allResults);
        });
        /* eslint-disable */
        // 这里因为 fecs 校验强制使用 for of 而不是 for in，所以加上了 eslint-disable 注释，已咨询骁哥同意
        // 这里使用 for in 而不是 for of 是因为在 iPhone4s 及低端 Android 上，for of 编译后的代码存在 Symbol 类型，浏览器不支持导致报错；长线需要修改 search-ui babel 配置，短线已 for in 兼容；
        for (let key in allResults) {
            // 这里由于 input 组件的缺陷（value 和 defaultValue 没有区分开，导致回调轮询触发），需要兼容一下 ',' 这种值
            if (allResults[key] === ',') {
                allResults[key] = '';
            }
        }
        /* eslint-enable */
        return allResults;
    }
    // 递归得到数据
    getResultRecursion(item, allResults) {
        const self = this;
        if (!item.options) {
            return;
        }
        // 如果是 tag 的话，是没有 key 的
        if (item.key) {
            allResults[item.key] = item.defaultValue || '';
        }
        item.options.forEach(optionItem => {
            // 如果匹配到了，则终止当前函数，进入下一级
            if (optionItem.value === item.defaultValue) {
                self.getResultRecursion(optionItem, allResults);
            }
        });
    }
    // 触发多选项点击事件
    emitCheckboxClick(obj) {
        this.rootVM.handleCheckboxClick(obj);
    }
}
