---
name: Selector
title: 选择框组件
category: 筛选类
owner: 王凯，李宇航
---



## 示例

```atom 选择框
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="打开底部选择器"
                    @click="openFilter"
                />
            </c-span>
        </c-row>
        <!--标题居中-->
        <c-selector
            :title="title"
            :data="data"
            :open="open"
            @select="select"
            @close="close"
        >
        </c-selector>
    </c-aladdin>
</template>

<script type="config">
    {
        props: [],
        data: {
            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            data: [
                {"text":"按时间升序按时间升序按时间升序按时间升序按时间升序按时间升序","value":"1","selected":true},
                {"text":"按时间降序","value":"2"},
                {"text":"发车时间降序","value":"3"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"}
            ],
            open: false,
        },
        components: {
            'c-selector': 'search-ui/Selector/Selector',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            close () {
                this.open = false;
            },
            openFilter () {
                this.open = true;
            },
            // 选择条目时触发
            select: function (selectedItem) {
                // 选择条目的索引
                console.log('select-> ', selectedItem);
                this.data.forEach((item, index) => {
                    item.selected = false;
                });
                this.data[selectedItem.index].selected = true;
            }
        }
    }
</script>
```

```atom 选择框，左对齐
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="标题左对齐"
                    @click="openFilter"
                />
            </c-span>
        </c-row>
        <!--标题左对齐-->
        <c-selector
            :title="title"
            :data="data"
            title-align="left"
            :open="open"
            @select="select"
            @close="close">
        </c-selector>
    </c-aladdin>
</template>

<script type="config">
    {
        props: [],
        data: {
            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            data: [
                {"text":"按时间升序按时间升序按时间升序按时间升序按时间升序按时间升序","value":"1","selected":true},
                {"text":"按时间降序","value":"2"},
                {"text":"发车时间降序","value":"3"},
                {"text":"发车时间升序","value":"4"},
                {"text":"发车时间升序","value":"4"},
            ],
            open: false,
        },
        components: {
            'c-selector': 'search-ui/Selector/Selector',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            close () {
                this.open = false;
            },
            openFilter () {
                this.open = true;
            },
            // 选择条目时触发
            select: function (selectedItem) {
                // 选择条目的索引
                console.log('select-> ', selectedItem);
                this.data.forEach((item, index) => {
                    item.selected = false;
                });
                this.data[selectedItem.index].selected = true;
            }
        }
    }
</script>
```

```atom 选择框，内容不足时
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="内容不足时的底部选择器"
                    @click="openFilter"
                />
            </c-span>
        </c-row>
        <!--内容不足时-->
        <c-selector
            :title="title"
            :data="data"
            :open="open"
            @select="select"
            @close="close">
        </c-selector>
    </c-aladdin>
</template>

<script type="config">
    {
        props: [],
        data: {
            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            data: [
                {"text":"按时间升序按时间升序按时间升序按时间升序按时间升序按时间升序","value":"1","selected":true},
            ],
            open: false,
        },
        components: {
            'c-selector': 'search-ui/Selector/Selector',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            close () {
                this.open = false;
            },
            openFilter () {
                this.open = true;
            },
            // 选择条目时触发
            select: function (selectedItem) {
                // 选择条目的索引
                console.log('select-> ', selectedItem);
                this.data.forEach((item, index) => {
                    item.selected = false;
                });
                this.data[selectedItem.index].selected = true;
            }
        }
    }
</script>
```

```atom 选择框 多选框
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="打开底部选择器"
                    @click="openFilter"
                />
            </c-span>
        </c-row>
        <!--标题居中-->
        <c-selector
            :title="title"
            :data="data"
            :open="open"
            type="multi"
            left-text="全部"
            right-text="保存"
            @select="select"
            @close="close"
            @clickItem="click"
        >
        </c-selector>
    </c-aladdin>
</template>
<script type="config">
    {
        props: [],
        data: {
            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            data: [
                {"text":"高铁","value":"1"},
                {"text":"动车","value":"2"},
                {"text":"城际","value":"3"},
                {"text":"直达","value":"4"},
                {"text":"特快","value":"5"},
                {"text":"普快","value":"6"}
            ],
            open: false,
        },
        components: {
            'c-selector': 'search-ui/Selector/Selector',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>
<script>
    module.exports = {
        methods: {
            close () {
                this.open = false;
            },
            openFilter () {
                this.open = true;
            },
            select: function (selectedItem) {
                console.log('select-> ', selectedItem);
            },
            click (value) {
                console.log(value)
            }
        }
    }
</script>
```

## 注意事项

1. open属性可以在调用组件时控制组件打开/关闭


## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
title | string |  | 可选 | 标题的文本 | -
type | string | radio | 可选 | 选框类型&nbsp;'radio'单选&nbsp;'multi'多选 | -
leftText | string | 全选 | 可选 | 标题左侧文字 | -
rightText | string | 保存 | 可选 | 标题右侧文字 | -
data | array | - | 必选 | 选项数据 | -
>> data[].text | string | - | - | 文案 | -
>> data[].value | string | - | - | 值 | -
>> data[].selected | boolean | - | - | 是否选中 | -
open | boolean | false | 可选 | 是否打开 | -
titleAlign | string | center | 可选 | 标题位置；居中：center；左对齐：left | -

### Slots



名称 | 描述
--- | ---
default | 按钮区域

### Events


- **select**: 选择条目时触发（若为多选，则为确定时触发）

名称 | 类型 | 描述
--- | --- | ---
${param1} | object \| array | 多选时，是形如&nbsp;[0,&nbsp;1,&nbsp;3]&nbsp;的数组，内容为多选选中序号；单选时是对象
  ${param1}.index | number | 选择条目的序号
  ${param1}.text | string | 选择条目的文案
  ${param1}.value | string | 选择条目的值

- **clickItem**: 点击选项
	无参数

- **close**: 关闭浮层
	无参数

- **open**: 打开浮层
	无参数



