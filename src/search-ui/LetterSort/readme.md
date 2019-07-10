---
name: LetterSort
title: 字母排序组件
category: 交互类
owner: 张兵，王凯
---

## 示例

```atom 默认 (可切换组件的打开/关闭状态)
<template>
    <c-aladdin>
        <c-row>
            <c-span col="6">
                <c-button
                    text="点我显示字母排序组件"
                    @click="onClickBtn"/>
            </c-span>
            <c-span col="6"/>
            <c-letter-sort
                @clickItem="click"
                @clickLetter="clickLetter"
                @handleTouchEnd="handleTouchEnd"
                :is-open="isOpen"
                :is-move="isMove"
                :z-index="zIndex"
                :letter-data="letterData | decode"
                :color="color">
                <div slot="diyContent">
                    <div class="bar c-font-small c-color-gray c-line-top" @click="closeComponent">热门城市（自定义标题，点击关闭组件）</div>
                    <div class="c-row c-gap-inner-top diy-margin">
                        <c-span><c-slink url="//m.baidu.com" text="北京" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="上海" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="广州" type="strong" /></c-span>
                    </div>
                    <div class="c-row c-gap-inner-bottom-large diy-margin">
                        <c-span><c-slink url="//m.baidu.com" text="武汉" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="长沙" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="西安" type="strong" /></c-span>
                    </div>
                </div>
            </c-letter-sort>
        </c-row>
    </c-aladdin>
</template>

<config>
{
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-span': 'search-ui/Row/Span',
        'c-row': 'search-ui/Row/Row',
        'c-slink': 'search-ui/Slink/Slink',
        'c-button': 'search-ui/Button/Button',
        'c-letter-sort': 'search-ui/LetterSort/LetterSort'
    },
    data: {
        isOpen: false,
        isMove: true,
        zIndex: '600',
        letterData: '[{"label":"热","isDiy":"true"},{"label":"A","item":[{"name":"阿城(可点击链接)","url":"","params":{}},{"name":"爱辉(点击获取信息)","url":"","params":{}},{"name":"鞍山","url":"","params":{}},{"name":"鞍山铁西","url":"","label":{}},{"name":"阿拉善盟","url":"","params":{}},{"name":"安次","url":"","params":{}},{"name":"安康","url":"","params":{}},{"name":"安丘","url":"","params":{}},{"name":"阿克苏","url":"","params":{}},{"name":"阿勒泰","url":"","params":{}},{"name":"阿图什","url":"","params":{}},{"name":"阿里","url":"","params":{}}]},{"label":"B","item":[{"name":"北京","url":"","params":{}}]},{"label":"C","item":[{"name":"大连（辽宁）","url":"","params":{}}]},{"label":"D","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"E","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"F","item":[{"name":"佛山（广东）","url":"","params":{}}]},{"label":"G","item":[{"name":"广州（广东）","url":"","params":{}},{"name":"贵阳","url":"","params":{}}]},{"label":"H","item":[{"name":"呼和浩特（内蒙古）","url":"","params":{}},{"name":"合肥（安徽）","url":"","params":{}},{"name":"海口（海南）","url":"","params":{}}]},{"label":"I","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"J","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"K","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"O","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]}]'
    }
}
</config>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    methods: {
        onClickBtn() {
            this.isOpen = true;
        },
        click(e) {
            console.log(e);
        },
        clickLetter(e) {
            console.log(e);
        },
        handleTouchEnd(){
            console.log('touchend');
        },
        closeComponent() {
            this.isOpen = false;
        }
    }
};
</script>

<script type="php">
function filter_decode($json) {
    return json_decode($json, true);
}
</script>

<style>
.bar {
    width: 100%;
    height: 33px;
    padding-top: 15px;
    text-indent: .17rem;
    background: #fff;
}
.diy-margin {
    padding-left: .17rem;
    padding-right: .17rem;
}
</style>
```

```atom 自定义选中字体颜色和提示浮层背景颜色;自定义距离页面顶部高度和底部高度
<template>
    <c-aladdin>
        <c-row>
            <c-span col="6">
                <c-button
                    text="点我显示字母排序组件"
                    @click="onClickBtn"/>
            </c-span>
            <c-span col="6"/>
            <c-letter-sort
                @clickItem="click"
                :is-open="isOpen"
                :top="top"
                :bottom="bottom"
                :letter-data="letterData | decode"
                :color="color">
                <div slot="diyContent">
                    <div class="bar c-font-small c-color-gray c-line-top">热门城市（自定义标题）</div>
                    <div class="c-row c-gap-inner-top diy-margin">
                        <c-span><c-slink url="//m.baidu.com" text="北京" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="上海" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="广州" type="strong" /></c-span>
                    </div>
                    <div class="c-row c-gap-inner-bottom-large diy-margin">
                        <c-span><c-slink url="//m.baidu.com" text="武汉" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="长沙" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="西安" type="strong" /></c-span>
                    </div>
                </div>
            </c-letter-sort>
        </c-row>
    </c-aladdin>
</template>

<style>
    .bar {
        width: 100%;
        height: 33px;
        padding-top: 15px;
        text-indent: .17rem;
        background: #fff;
    }
    .diy-margin {
        padding-left: .17rem;
        padding-right: .17rem;
    }
</style>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-row': 'search-ui/Row/Row',
            'c-slink': 'search-ui/Slink/Slink',
            'c-button': 'search-ui/Button/Button',
            'c-letter-sort': 'search-ui/LetterSort/LetterSort'
        },
        data: {
            isOpen: false,
            top: '44px',
            bottom: '60px',
            color: 'rgba(3, 139, 128, .8)',
            letterData: '[{"label":"热","isDiy":"true"},{"label":"A","item":[{"name":"阿城(可点击链接)","url":"","params":{}},{"name":"爱辉(点击获取信息)","url":"","params":{}},{"name":"鞍山","url":"","params":{}},{"name":"鞍山铁西","url":"","label":{}},{"name":"阿拉善盟","url":"","params":{}},{"name":"安次","url":"","params":{}},{"name":"安康","url":"","params":{}},{"name":"安丘","url":"","params":{}},{"name":"阿克苏","url":"","params":{}},{"name":"阿勒泰","url":"","params":{}},{"name":"阿图什","url":"","params":{}},{"name":"阿里","url":"","params":{}}]},{"label":"B","item":[{"name":"北京","url":"","params":{}}]},{"label":"C","item":[{"name":"大连（辽宁）","url":"","params":{}}]},{"label":"D","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"E","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"F","item":[{"name":"佛山（广东）","url":"","params":{}}]},{"label":"G","item":[{"name":"广州（广东）","url":"","params":{}},{"name":"贵阳","url":"","params":{}}]},{"label":"H","item":[{"name":"呼和浩特（内蒙古）","url":"","params":{}},{"name":"合肥（安徽）","url":"","params":{}},{"name":"海口（海南）","url":"","params":{}}]},{"label":"I","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"J","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"K","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]},{"label":"O","item":[{"name":"鄂尔多斯（内蒙古）","url":"","params":{}},{"name":"鄂州（湖北）","url":"","params":{}}]}]'
        }
    }
</config>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<script>
    export default {
        filters: {
            decode(json) {
                return JSON.parse(json);
            }
        },
        methods: {
            onClickBtn() {
                this.isOpen = true;
            },
            click(e) {
                console.log(e);
            }
        }
    };
</script>
```


```atom 自定义列表元素内容
<template>
    <c-aladdin>
        <c-row>
            <c-span col="6">
                <c-button
                    text="点我显示字母排序组件"
                    @click="onClickBtn"/>
            </c-span>
            <c-span col="6"/>
            <c-letter-sort
                @clickItem="click"
                :is-open="isOpen"
                :top="top"
                :letter-data="letterData"
                :color="color">
                <div slot="diyContent">
                    <div class="bar c-font-small c-color-gray c-line-top">热门城市（自定义标题）</div>
                    <div class="c-row c-gap-inner-top diy-margin">
                        <c-span><c-slink url="//m.baidu.com" text="北京" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="上海" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="广州" type="strong" /></c-span>
                    </div>
                    <div class="c-row c-gap-inner-bottom-large diy-margin">
                        <c-span><c-slink url="//m.baidu.com" text="武汉" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="长沙" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="西安" type="strong" /></c-span>
                    </div>
                </div>
                <template slot="cont" scope="props">
                    <c-row>
                        <c-span col="1">
                            <c-img is-round src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518336176996&di=9a7573e12cb3f845aad593be9ecc176a&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201511%2F21%2F20151121142853_sQyUu.jpeg"/>
                        </c-span>
                        <c-span col="11" class="imgWidthTop">
                            {{ letterData[props.$index].item[props.$key].name }}
                        </c-span>
                    </c-row>
                </template>
            </c-letter-sort>
        </c-row>
    </c-aladdin>
</template>

<style>
    .bar {
        width: 100%;
        height: 33px;
        padding-top: 15px;
        text-indent: .17rem;
        background: #fff;
    }
    .diy-margin {
        padding-left: .17rem;
        padding-right: .17rem;
    }
    .imgWidth {
        width: 24px;
    }
    .imgWidthTop {
        position: relative;
        top: 5px;
    }
</style>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-row': 'search-ui/Row/Row',
            'c-slink': 'search-ui/Slink/Slink',
            'c-img': 'search-ui/Image/Image',
            'c-button': 'search-ui/Button/Button',
            'c-letter-sort': 'search-ui/LetterSort/LetterSort'
        },
        data: {
            isOpen: false,
            letterData: [
                {
                    label: "热",
                    isDiy: true
                },
                {
                    label: 'A',
                    item: [
                        {name:'阿城(可点击链接)',url:'',params:{}},
                        {name:'爱辉(点击获取信息)',url:'',params:{}},
                        {name:'鞍山',url:'',params:{}},
                        {name:'鞍山铁西',url:'',params:{}},
                        {name:'阿拉善盟',url:'',params:{}},
                        {name:'安次',url:'',params:{}},
                        {name:'安康',url:'',params:{}},
                        {name:'安丘',url:'',params:{}},
                        {name:'阿克苏',url:'',params:{}},
                        {name:'阿勒泰',url:'',params:{}},
                        {name:'阿图什',url:'',params:{}},
                        {name:'阿里',url:'',params:{}}
                    ]
                },
                {
                    label: 'B',
                    item: [
                        {name:'北京',url:'',params:{}}
                    ]
                }
            ]
        }
    }
</config>

<script>
    export default {
        methods: {
            onClickBtn() {
                this.isOpen = true;
            },
            click(e) {
                console.log(e);
            }
        }
    };
</script>
```


```atom letterData数据动态添加
<template>
    <c-aladdin>
        <c-row>
            <c-span col="6">
                <c-button
                    text="点我显示字母排序组件"
                    @click="onClickBtn"/>
            </c-span>
            <c-span col="6"/>
            <c-letter-sort
                @clickItem="click"
                @clickLetter="clickLetter"
                @handleTouchEnd="handleTouchEnd"
                :is-open="isOpen"
                :is-move="isMove"
                :z-index="zIndex"
                :letter-data="letterData"
                :color="color">
                <div slot="diyContent">
                    <div class="bar c-font-small c-color-gray c-line-top" @click="closeComponent">热门城市（自定义标题，点击关闭组件）</div>
                    <div class="c-row c-gap-inner-top diy-margin">
                        <c-span><c-slink url="//m.baidu.com" text="北京" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="上海" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="广州" type="strong" /></c-span>
                    </div>
                    <div class="c-row c-gap-inner-bottom-large diy-margin">
                        <c-span><c-slink url="//m.baidu.com" text="武汉" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="长沙" type="strong" /></c-span>
                        <c-span><c-slink url="//m.baidu.com" text="西安" type="strong" /></c-span>
                    </div>
                </div>
            </c-letter-sort>
        </c-row>
    </c-aladdin>
</template>

<style>
    .bar {
        width: 100%;
        height: 33px;
        padding-top: 15px;
        text-indent: .17rem;
        background: #fff;
    }
    .diy-margin {
        padding-left: .17rem;
        padding-right: .17rem;
    }
</style>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-row': 'search-ui/Row/Row',
            'c-slink': 'search-ui/Slink/Slink',
            'c-button': 'search-ui/Button/Button',
            'c-letter-sort': 'search-ui/LetterSort/LetterSort'
        },
        data: {
            isOpen: false,
            isMove: true,
            zIndex: '600',
            letterData: []
        }
    }
</config>

<script>
    export default {
        methods: {
            onClickBtn() {
                this.isOpen = true;
                this.letterData = [
                {
                    label: '热',
                    isDiy: true
                },
                {
                    label: 'A',
                    item: [
                        {name:'阿城(可点击链接)',url:'',params:{}},
                        {name:'爱辉(点击获取信息)',url:'',params:{}},
                        {name:'鞍山',url:'',params:{}},
                        {name:'鞍山铁西',url:'',params:{}},
                        {name:'阿拉善盟',url:'',params:{}},
                        {name:'安次',url:'',params:{}},
                        {name:'安康',url:'',params:{}},
                        {name:'安丘',url:'',params:{}},
                        {name:'阿克苏',url:'',params:{}},
                        {name:'阿勒泰',url:'',params:{}},
                        {name:'阿图什',url:'',params:{}},
                        {name:'阿里',url:'',params:{}}
                    ]
                },
                {
                    label: 'B',
                    item: [
                        {name:'北京',url:'',params:{}}
                    ]
                },
                {
                    label: 'C',
                    item: [
                        {name:'大连（辽宁）',url:'',params:{}}
                    ]
                },
                {
                    label: 'D',
                    item: [
                        {name:'鄂尔多斯（内蒙古）',url:'',params:{}},
                        {name:'鄂州（湖北）',url:'',params:{}}
                    ]
                },
                {
                    label: 'E',
                    item: [
                        {name:'鄂尔多斯（内蒙古）',url:'',params:{}},
                        {name:'鄂州（湖北）',url:'',params:{}}
                    ]
                },
                {
                    label: 'F',
                    item: [
                        {name:'佛山（广东）',url:'',params:{}}
                    ]
                },
                {
                    label: 'G',
                    item: [
                        {name:'广州（广东）',url:'',params:{}},
                        {name:'贵阳',url:'',params:{}}
                    ]
                },
                {
                    label: 'H',
                    item: [
                        {name:'呼和浩特（内蒙古）',url:'',params:{}},
                        {name:'合肥（安徽）',url:'',params:{}},
                        {name:'海口（海南）',url:'',params:{}}
                    ]
                },
                {
                    label: 'I',
                    item: [
                        {name:'鄂尔多斯（内蒙古）',url:'',params:{}},
                        {name:'鄂州（湖北）',url:'',params:{}}
                    ]
                },
                {
                    label: 'J',
                    item: [
                        {name:'鄂尔多斯（内蒙古）',url:'',params:{}},
                        {name:'鄂州（湖北）',url:'',params:{}}
                    ]
                },
                {
                    label: 'K',
                    item: [
                        {name:'鄂尔多斯（内蒙古）',url:'',params:{}},
                        {name:'鄂州（湖北）',url:'',params:{}}
                    ]
                },
                {
                    label: 'O',
                    item: [
                        {name:'鄂尔多斯（内蒙古）',url:'',params:{}},
                        {name:'鄂州（湖北）',url:'',params:{}}
                    ]
                },
                {
                    label: 'P',
                    item: [
                        {name:'莆田（福建）',url:'',params:{}}
                    ]
                },
                {
                    label: 'Q',
                    item: [
                        {name:'鄂尔多斯（内蒙古）',url:'',params:{}},
                        {name:'鄂州（湖北）',url:'',params:{}}
                    ]
                },
                {
                    label: 'R',
                    item: [
                        {name:'日照（山东）',url:'',params:{}},
                        {name:'清远（广东）',url:'',params:{}},
                        {name:'钦州（广西）',url:'',params:{}}
                    ]
                },
                {
                    label: 'S',
                    item: [
                        {name:'上海（沪）',url:'',params:{}},
                        {name:'深圳（广东）',url:'',params:{}},
                        {name:'天津',url:'',params:{}}
                    ]
                },
                {
                    label: 'T',
                    item: [
                        {name:'日照（山东）',url:'',params:{}},
                        {name:'清远（广东）',url:'',params:{}},
                        {name:'钦州（广西）',url:'',params:{}}
                    ]
                },
                {
                    label: 'O',
                    item: [
                        {name:'日照（山东）',url:'',params:{}},
                        {name:'清远（广东）',url:'',params:{}}
                    ]
                },
                {
                    label: 'V',
                    item: [
                        {name:'日照（山东）',url:'',params:{}}
                    ]
                },
                {
                    label: 'W',
                    item: [
                        {name:'武汉（湖北',url:'',params:{}},
                        {name:'无锡（江苏）',url:'',params:{}}
                    ]
                },
                {
                    label: 'X',
                    item: [
                        {name:'西安（陕西）',url:'',params:{}}
                    ]
                },
                {
                    label: 'Y',
                    item: [
                        {name:'烟台（山东）',url:'',params:{}}
                    ]
                },
                {
                    label: 'Z',
                    item: [
                        {name:'郑州（河南）',url:'',params:{}}
                    ]
                }];
            },
            click(e) {
                console.log(e);
            },
            clickLetter(e) {
                console.log(e);
            },
            handleTouchEnd(){
                console.log('touchend');
            },
            closeComponent() {
                this.isOpen = false;
            }
        }
    };
</script>
```


## 注意事项

- 字母排序组件的实际应用场景需要开发者自己灵活运用。


## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
letterData | array | [] | 必选 | 内容数据 | -
>> letterData[].label | string | - | - | 右侧导航字母 | -
>> letterData[].item | Array | - | - | 数据项具体显示内容 | -
>> letterData[].isDiy | boolean | - | - | 该数据项是否是自定义内容，目前仅支持一个自定义内容列表项 | -
>> letterData[].item[].name | string | - | - | 数据项具体显示的名称 | -
>> letterData[].item[].url | string | - | - | 数据项的跳转链接 | -
>> letterData[].item[].params | object | - | - | 数据项的跳转链接所需参数，见[Link](./Link#API) | -
color | string | rgba(0, 0, 0, .8) | 可选 | 自定义字母选中颜色和`Toast`背景颜色 | -
top | string | - | 可选 | 自定义距离浏览器窗口的距离，默认为0，置顶 | -
bottom | string | - | 可选 | 自定义距离浏览器窗口底部的距离，默认为0 | -
isOpen | boolean | false | 可选 | 是否显示 | -
isMove | boolean | false | 可选 | 是否启用字母上下滑动事件，默认关闭，注意（在ios手百滑动偶尔会卡顿，数据量大于150条不建议开启） | -
zIndex | string | 500 | 可选 | 自定义元素CSS中的z-index值 | -

### Slots



名称 | 描述
--- | ---
diyContent | 热门区域的自定义内容
cont | 内容区域的列表自定义内容

### Events


- **handleTouchEnd**: 字母`touchend`事件
	无参数

- **clickLetter**: 字母点击事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.letterIndex | number | 点击索引
  ${param1}.value | object | 点击元素的值

- **clickItem**: 列表项点击事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.listIndex | number | 列表项索引
  ${param1}.itemIndex | number | 列表项子元素的索引
  ${param1}.valueObj | object | 子元素的值
  ${param1}.isOpen | boolean | 组件显示状态



