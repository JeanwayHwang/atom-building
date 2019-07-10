---
name: Navs
title: 导航
category: 导航类
owner: 姚昌
---

## 使用场景

> 参考UE规范：[G3.1/G3.2 【情景页规范】-【组件】-【一级Tab/二级Tab】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Navs.html)

## 示例

```atom 等分一级navs
<template>
    <section>
        <c-aladdin>
		    <c-row>
                <c-span>
                    <c-btn
                        text="点我改变数量"
                        @click="handleBtnClick"
                    >
                    </c-btn>
                </c-span>
            </c-row>
            <div>默认样式</div>
            <c-navs
                :label-list="list1"
                @change="select"
            >
            </c-navs>
            <div class="c-gap-top">点击直接跳转</div>
            <c-navs
                :label-list="list2"
                :selected-index="selected"
                selected-color="#02b7ca"
                @change="select"
            >
            </c-navs>
            <div class="c-gap-top">禁止点击事件，直接跳转，不更改选中选项（无动画）</div>
            <c-navs
                :label-list="list2"
                selected-color="#02b7ca"
                disable-event
                @change="select"
            >
            </c-navs>
            <div class="c-gap-top">更改选中字体颜色</div>
            <c-navs
                :label-list="list1"
                :selected-index="selected"
                selected-color="#02b7ca"
                @change="select"
            >
            </c-navs>
            <div class="c-gap-top c-gap-bottom-small">更改默认字体颜色、透明度，及背景颜色</div>
            <c-navs
                :label-list="list1"
                :selected-index="selected"
                :log-content="logContent"
                selected-color="#fff"
                :item-style="{
                    color: '#fff',
                    opacity: '.6'
                }"
                background-color="#02b7ca"
                @change="select"
            >
            </c-navs>
        </c-aladdin>
    </section>
</template>

<script type="config">
    {
        data: {
            list: ['中国', '美国', '新西兰', '澳大利亚', '法兰西', '印度尼西亚', '俄罗斯'],
            list1: ['澳亚', '中国', '印度', '俄', '印尼'],
            list2:[
                {
                    txt:"中国",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"美国",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"新西兰",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"澳利亚",
                    url:"https://www.baidu.com"
                },
            ],
            selected: 0,
            logContent: {
                logList: [
                    {key: 0},
                    {key: 1},
                    {key: 2},
                    {key: 3}
                ]
            }
        },
        components: {
            'c-navs': 'search-ui/Navs/Navs',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            select: function(index) {
                console.log('select', index);
            },
            toggle: function(value) {
                console.log(value);
            },
            onScrollEnd: function () {
                console.log('scroll end');
            },
            handleBtnClick() {
                if (this.list1.length > 4) {
                    this.list1.splice(4, 1);
                }
                else {
                    this.list1.push('德玛西亚');
                }
            }
        },
        mounted(){
            let that= this;
            setInterval(function () {
                that.selected = (that.selected + 1) % 2;
            }, 10000);
        }

    }
</script>
```

```atom 等分二级 navs
<template>
    <section>
        <c-aladdin>
            <div></div>
            <c-navs
                :label-list="list1"
                type="navSub"
                @change="select"
            >
            </c-navs>
        </c-aladdin>
    </section>
</template>

<script type="config">
    {
        data: {
            list: ['中国', '美国', '新西兰', '澳大利亚', '法兰西', '印度尼西亚', '俄罗斯'],
            list1: ['澳亚', '中国', '印度', '俄', '印尼'],
            list2:[
                {
                    txt:"中国",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"美国",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"新西兰",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"澳利亚",
                    url:"https://www.baidu.com"
                },
            ],
            selected: 0,
            logContent: {
                logList: [
                    {key: 0},
                    {key: 1},
                    {key: 2},
                    {key: 3}
                ]
            }
        },
        components: {
            'c-navs': 'search-ui/Navs/Navs',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            select: function(index) {
                console.log(index);
            },
            toggle: function(value) {
                console.log(value);
            },
            onScrollEnd: function () {
                console.log('scroll end');
            }
        },
        mounted(){
            console.log(this.selected);
            let that= this;
            setInterval(function () {
                that.selected = (that.selected + 1) % 2;
            }, 10000);
        }

    }
</script>
```

```atom 滑动一级 navs
<template>
    <section>
        <c-aladdin>
            <div class="c-gap-top">默认样式 携带mask图层</div>
            <c-navs
                :label-list="list"
                :selected-index="selected"
                :allow-scroll="true"
                :log-content="logContent"
                @change="select"
                @toggle="toggle"
                @scrollEnd="onScrollEnd"
            >
            </c-navs>
            <div class="c-gap-top">默认样式 携带mask图层 可自定义弹层</div>
            <c-navs
                :label-list="list"
                :selected-index="selected"
                :allow-scroll="true"
                :log-content="logContent"
                @change="select"
                @toggle="toggle"
                @scrollEnd="onScrollEnd"
            >
                <div style="background: #fff; padding: 0.17rem">
                    自定义内容区域
                    可以给对应 nav 组件一个 ref，使用 this.$refs[refname].toggleChange(index) 实现切换选项卡
                </div>
            </c-navs>
            <div class="c-gap-top"> 无下拉按钮</div>
            <c-navs
                :label-list="list"
                :selected-index="selected"
                :allow-scroll="true"
                :is-expand="false"
                @change="select"
                @toggle="toggle"
            >
            </c-navs>
            <div class="c-gap-top">更改选定样式</div>
            <c-navs
                :label-list="list"
                :allow-scroll="true"
                :toggle-label="'请选择'"
                :has-mask="true"
                selected-color="#02b7ca"
                @change="select"
                @toggle="toggle"
            >
            </c-navs>
            <div class="c-gap-top">自定义背景色（不支持有弹层的情况）</div>
            <c-navs
                :label-list="list"
                :selected-index="selected"
                :allow-scroll="true"
                :has-mask="false"
                :is-expand="false"
                selected-color="#fff"
                :item-style="{
                    color: '#fff',
                    opacity: '.6'
                }"
                backgroundColor="#02b7ca"
                @change="select"
            >
            </c-navs>
        </c-aladdin>
    </section>
</template>

<script type="config">
    {
        data: {
            list: ['中国', '美国', '新西兰', '澳大利亚', '法兰西', '印度尼西亚', '俄罗斯'],
            list1: ['澳亚', '中国', '印度', '俄', '印尼'],
            list2:[
                {
                    txt:"中国",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"美国",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"新西兰",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"澳利亚",
                    url:"https://www.baidu.com"
                },
            ],
            selected: 0,
            logContent: {
                logList: [
                    {key: 0},
                    {key: 1},
                    {key: 2},
                    {key: 3}
                ]
            }
        },
        components: {
            'c-navs': 'search-ui/Navs/Navs',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            select: function(index) {
                console.log(index);
            },
            toggle: function(value) {
                console.log(value);
            },
            onScrollEnd: function () {
                console.log('scroll end');
            }
        },
        mounted(){
            console.log(this.selected);
            let that= this;
            /*
            setInterval(function () {
                that.selected = (that.selected + 1) % 2;
            }, 10000);
            */
        }

    }
</script>
```

```atom 滑动二级 navs
<template>
    <section>
        <c-aladdin>
            <c-navs
                :label-list="list"
                :allow-scroll="true"
                :has-mask="true"
                type="navSub"
                @change="select"
                @toggle="toggle"
                @scrollEnd="onScrollEnd"
            >
            </c-navs>
        </c-aladdin>
    </section>
</template>

<script type="config">
    {
        data: {
            list: ['中国', '美国', '新西兰', '澳大利亚', '法兰西', '印度尼西亚', '俄罗斯'],
            list1: ['澳亚', '中国', '印度', '俄', '印尼'],
            list2:[
                {
                    txt:"中国",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"美国",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"新西兰",
                    url:"https://www.baidu.com"
                },
                {
                    txt:"澳利亚",
                    url:"https://www.baidu.com"
                },
            ],
            selected: 0,
            logContent: {
                logList: [
                    {key: 0},
                    {key: 1},
                    {key: 2},
                    {key: 3}
                ]
            }
        },
        components: {
            'c-navs': 'search-ui/Navs/Navs',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            select: function(index) {
                console.log(index);
            },
            toggle: function(value) {
                console.log(value);
            },
            onScrollEnd: function () {
                console.log('scroll end');
            }
        },
        mounted(){
            console.log(this.selected);
            let that= this;
            /*
            setInterval(function () {
                that.selected = (that.selected + 1) % 2;
            }, 10000);
            */
        }
    }
</script>
```

## 注意事项

1. select-index 的取值范围为：大于0 小于label-list的长度，超出范围会出现没有选定项目

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
labelList | array | - | 必选 | 标签数组 | -
>> labelList[].txt | string | - | - | 每个项目的文字 | -
>> labelList[].url | string | - | - | 可直接跳转的地址，若无则不可直接跳转 | -
>> labelList[].params | Object | - | - | 跳转链接所需参数 | -
>> labelList[].dataModule | string | - | - | 区块统计参数 | -
selectedIndex | number | 0 | 可选 | 选中的标签索引 | -
allowScroll | boolean | false | 可选 | 是否允许navs滑动 | -
toggleLabel | string | 请选择分类 | 可选 | 下拉显示后的引导文字 | -
type | string | nav | 可选 | 判断nav类型可选项为&nbsp;nav、navSub | -
selectedColor | string | #333 | 可选 | 选中项目字体颜色，边框线（如果有）颜色 | -
backgroundColor | string | #fff | 可选 | 更改背景色仅支持无弹层的navs | -
itemStyle | object | {"color":"#666","opacity":"1"} | 可选 | navs&nbsp;item&nbsp;未选择项颜色和透明度 | -
disableEvent | boolean | false | 可选 | 是否触发点击事件改选定选项 | -
feedbackColor | string | rgba(0, 0, 0, .08) | 可选 | 点击态颜色 | -
isExpand | boolean | true | 可选 | 是否可展开，有下拉按钮 | -
hasMask | boolean | true | 可选 | 是否有遮罩 | -
isOpenLog | boolean | true | 可选 | 是否发送日志 | -
logContent | object | {"logList":[]} | 可选 | 日志内容&nbsp;logList为labelList每一个label的自定义日志，&nbsp;其中数组中每一个元素为object类型&nbsp;内容为json&nbsp;key&nbsp;value&nbsp;格式 | -
bottomLine | boolean | true | 可选 | 用于设置是否添加下边1px&nbsp;黑线，默认存在 | -

#### ListMore

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
labelList | array | - | 必选 | - | -
selectedIndex | number | 0 | 可选 | - | -
toggleLabel | string | 请选择分类 | 可选 | - | -
selectedColor | string | #333 | 可选 | - | -
isOpen | boolean | false | 可选 | - | -
isOpenLog | boolean | true | 可选 | - | -
logContent | object | {} | 可选 | - | -

### Slots



名称 | 描述
--- | ---
default | 自定义下拉内容，可以给对应&nbsp;nav&nbsp;组件一个&nbsp;ref，使用&nbsp;this.$refs[refname].toggleChange(index)&nbsp;实现切换选项卡

### Events


- **scrollEnd**: scrollEnd event.
	无参数

- **toggle**: toggle event.

名称 | 类型 | 描述
--- | --- | ---
${param1}.toggle | object | isMoreOpen

- **change**: change event.

名称 | 类型 | 描述
--- | --- | ---
${param1}.current | object | 序号
  ${param1}.text | object | 文本
  ${param1}.old | object | 改变前序号

- **clickItem**: clickItem event.

名称 | 类型 | 描述
--- | --- | ---
${param1}.index | object | 序号



