---
name: Cascader
title: 级联选择器
category: 表单类
owner: 王凯
---

## 使用场景

## 示例

```atom 一级级联
<template>
    <c-aladdin
        :style="{
            padding: 0
        }"
        hide-header
        hide-footer
    >
        <c-cascader
            :column="1"
            :options="options"
            :default-value="defaultValue"
            @itemclick="handleItemClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            defaultValue: "",
            options: [
                {
                    "text": "不限",
                    "value": ""
                }, {
                    "text": "文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1",
                    "value": "文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1"
                }, {
                    "text": "文案2",
                    "value": "文案2"
                }, {
                    "text": "文案3",
                    "value": "文案3"
                }, {
                    "text": "文案4",
                    "value": "文案4"
                }, {
                    "text": "文案5",
                    "value": "文案5"
                }, {
                    "text": "文案6",
                    "value": "文案6"
                }, {
                    "text": "文案7",
                    "value": "文案7"
                }, {
                    "text": "文案8",
                    "value": "文案8"
                }, {
                    "text": "文案9",
                    "value": "文案9"
                }, {
                    "text": "文案10",
                    "value": "文案10"
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-cascader': 'search-ui/Cascader/Cascader',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        }
    }
};
</script>

```

```atom 二级级联
<template>
    <c-aladdin
        :style="{
            padding: 0
        }"
        hide-header
        hide-footer
    >
        <c-cascader
            :column="2"
            :options="options"
            :default-value="defaultValue"
            default-value-type="combine"
            @itemclick="handleItemClick"
            @lastcolumnitemclick="handleLastColumnItemClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            defaultValue: '传奇职业, 德玛西亚之力',
            options: [
                {
                    "text": "热门职位",
                    "value": "热门职位",
                    "key": "part",
                    "options": [
                        {
                            "text": "司机",
                            "value": "司机"
                        }, {
                            "text": "快递",
                            "value": "快递"
                        }, {
                            "text": "装修",
                            "value": "装修"
                        }, {
                            "text": "保安",
                            "value": "保安"
                        }, {
                            "text": "厨师",
                            "value": "厨师"
                        }, {
                            "text": "普工",
                            "value": "普工"
                        }, {
                            "text": "小时工",
                            "value": "小时工"
                        }, {
                            "text": "会计",
                            "value": "会计"
                        }, {
                            "text": "不限",
                            "value": "不限"
                        }
                    ]
                }, {
                    "text": "销售",
                    "value": "销售",
                    "key": "part",
                    "options": [
                        {
                            "text": "销售代表",
                            "value": "销售代表",
                            "extend": "描述"
                        }, {
                            "text": "电话销售",
                            "value": "电话销售",
                            "extend": "描述描述描述描述描述描述描述描述描述描述描述描述描述描述"
                        }, {
                            "text": "销售经理",
                            "value": "销售经理",
                            "extend": "描述"
                        }, {
                            "text": "销售总监",
                            "value": "销售总监",
                            "extend": "描述"
                        }, {
                            "text": "汽车销售",
                            "value": "汽车销售",
                            "extend": "描述"
                        }, {
                            "text": "医药销售",
                            "value": "医药销售",
                            "extend": "描述"
                        }, {
                            "text": "器械销售",
                            "value": "器械销售",
                            "extend": "描述"
                        }, {
                            "text": "网络销售",
                            "value": "网络销售",
                            "extend": "描述"
                        }, {
                            "text": "区域销售",
                            "value": "区域销售",
                            "extend": "描述"
                        }, {
                            "text": "客户经理",
                            "value": "客户经理",
                            "extend": "描述"
                        }, {
                            "text": "销售顾问",
                            "value": "销售顾问",
                            "extend": "描述"
                        }
                    ]
                }, {
                    "text": "司机司机司机司机司机司机司机司机司机司机司机",
                    "value": "司机司机司机司机司机司机司机司机司机司机司机",
                    "key": "part",
                    "options": [
                        {
                            "text": "商务司机",
                            "value": "商务司机"
                        }, {
                            "text": "客车司机",
                            "value": "客车司机"
                        }, {
                            "text": "货车司机货车司机货车司机货车司机货车司机货车司机",
                            "value": "货车司机货车司机货车司机货车司机货车司机货车司机"
                        }, {
                            "text": "出租车司机",
                            "value": "出租车司机"
                        }, {
                            "text": "班车司机",
                            "value": "班车司机"
                        }, {
                            "text": "驾校教练",
                            "value": "驾校教练"
                        }, {
                            "text": "带车司机",
                            "value": "带车司机"
                        }
                    ]
                }, {
                    "text": "好玩职业",
                    "value": "好玩职业",
                    "key": "part",
                    "options": [
                        {
                            "text": "酒店试睡员",
                            "value": "酒店试睡员"
                        }, {
                            "text": "美食品尝师",
                            "value": "美食品尝师"
                        }, {
                            "text": "旅游体验师",
                            "value": "旅游体验师"
                        }, {
                            "text": "职业拥抱师",
                            "value": "职业拥抱师"
                        }, {
                            "text": "狗粮试吃员",
                            "value": "狗粮试吃员"
                        }, {
                            "text": "手模",
                            "value": "手模"
                        }, {
                            "text": "陪跑族",
                            "value": "陪跑族"
                        }, {
                            "text": "网购砍价师",
                            "value": "网购砍价师"
                        }, {
                            "text": "色彩搭配师",
                            "value": "色彩搭配师"
                        }, {
                            "text": "品酒师",
                            "value": "品酒师"
                        }
                    ]
                }, {
                    "text": "传奇职业",
                    "value": "传奇职业",
                    "key": "part",
                    "options": [
                        {
                            "text": "德玛西亚之力",
                            "value": "德玛西亚之力"
                        }, {
                            "text": "诺克萨斯之手",
                            "value": "诺克萨斯之手"
                        }, {
                            "text": "死亡骑士",
                            "value": "死亡骑士"
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-cascader': 'search-ui/Cascader/Cascader',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        },
        handleLastColumnItemClick(obj) {
            console.log('handleLastColumnItemClick', obj);
        }
    }
};
</script>
```

```atom 三级级联
<template>
    <c-aladdin
        :style="{
            padding: 0
        }"
        hide-header
        hide-footer
    >
        <c-cascader
            :column="3"
            :options="options"
            :default-value="defaultValue"
            default-value-type="combine"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            defaultValue: '第一列文案2, 第二列文案4, 第三列文案12',
            options: [
                {
                    "text": "第一列文案1第一列文案1第一列文案1第一列文案1第一列文案1",
                    "value": "第一列文案1第一列文案1第一列文案1第一列文案1第一列文案1",
                    "key": "key3_2",
                    "options": [
                        {
                            "text": "第二列文案1第二列文案1第二列文案1第二列文案1第二列文案1",
                            "value": "第二列文案1第二列文案1第二列文案1第二列文案1第二列文案1",
                            "key": "key3_3",
                            "options": [
                                {
                                    "text": "第三列文案1第三列文案1第三列文案1第三列文案1第三列文案1",
                                    "value": "第三列文案1第三列文案1第三列文案1第三列文案1第三列文案1"
                                }, {
                                    "text": "第三列文案2",
                                    "value": "第三列文案2"
                                }, {
                                    "text": "第三列文案3",
                                    "value": "第三列文案3"
                                }
                            ]
                        }, {
                            "text": "第二列文案2",
                            "value": "第二列文案2",
                            "key": "key3_3",
                            "options": [
                                {
                                    "text": "第三列文案4",
                                    "value": "第三列文案4"
                                }, {
                                    "text": "第三列文案5",
                                    "value": "第三列文案5"
                                }, {
                                    "text": "第三列文案6",
                                    "value": "第三列文案6"
                                }
                            ]
                        }, {
                            "text": "第二列文案3",
                            "value": "第二列文案3",
                            "key": "key3_3",
                            "options": [
                                {
                                    "text": "第三列文案7",
                                    "value": "第三列文案7"
                                }, {
                                    "text": "第三列文案8",
                                    "value": "第三列文案8"
                                }, {
                                    "text": "第三列文案9",
                                    "value": "第三列文案9"
                                }
                            ]
                        }
                    ]
                }, {
                    "text": "第一列文案2",
                    "value": "第一列文案2",
                    "key": "key3_2",
                    "options": [
                        {
                            "text": "第二列文案4",
                            "value": "第二列文案4",
                            "key": "key3_3",
                            "options": [
                                {
                                    "text": "第三列文案10",
                                    "value": "第三列文案10"
                                }, {
                                    "text": "第三列文案11",
                                    "value": "第三列文案11"
                                }, {
                                    "text": "第三列文案12",
                                    "value": "第三列文案12"
                                }
                            ]
                        }, {
                            "text": "第二列文案5",
                            "value": "第二列文案5",
                            "key": "key3_3",
                            "options": [
                                {
                                    "text": "第三列文案13",
                                    "value": "第三列文案13"
                                }, {
                                    "text": "第三列文案14",
                                    "value": "第三列文案14"
                                }, {
                                    "text": "第三列文案15",
                                    "value": "第三列文案15"
                                }
                            ]
                        }, {
                            "text": "第二列文案6",
                            "value": "第二列文案6",
                            "key": "key3_3",
                            "options": [
                                {
                                    "text": "第三列文案16",
                                    "value": "第三列文案16"
                                }, {
                                    "text": "第三列文案17",
                                    "value": "第三列文案17"
                                }, {
                                    "text": "第三列文案18",
                                    "value": "第三列文案18"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-cascader': 'search-ui/Cascader/Cascader',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
    },
    computed: {
    }
};
</script>

```

```atom 一级级联；阻止滚动穿透
<template>
    <c-aladdin
        :style="{
            padding: 0
        }"
        hide-header
        hide-footer
    >
        <c-cascader
            :column="1"
            :options="options"
            :default-value="defaultValue"
            stop-scroll-through
            @itemclick="handleItemClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            defaultValue: "",
            options: [
                {
                    "text": "不限",
                    "value": ""
                }, {
                    "text": "文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1",
                    "value": "文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1文案1"
                }, {
                    "text": "文案2",
                    "value": "文案2"
                }, {
                    "text": "文案3",
                    "value": "文案3"
                }, {
                    "text": "文案4",
                    "value": "文案4"
                }, {
                    "text": "文案5",
                    "value": "文案5"
                }, {
                    "text": "文案6",
                    "value": "文案6"
                }, {
                    "text": "文案7",
                    "value": "文案7"
                }, {
                    "text": "文案8",
                    "value": "文案8"
                }, {
                    "text": "文案9",
                    "value": "文案9"
                }, {
                    "text": "文案10",
                    "value": "文案10"
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-cascader': 'search-ui/Cascader/Cascader',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        },
        handleLastColumnItemClick(obj) {
            console.log('handleLastColumnItemClick', obj);
        }
    }
};
</script>
```

```atom 二级级联；与 Popup 配合使用
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-row>
            <c-span>
                <c-btn
                    text="点我打开 popup"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-popup
            :is-open="isOpen"
            @close="handleClose"
        >
            <div class="c-row-tile">
                <c-cascader
                    :column="2"
                    :options="options"
                    :default-value="defaultValue"
                    default-value-type="combine"
                    @itemclick="handleItemClick"
                    @lastcolumnitemclick="handleLastColumnItemClick"
                />
            </div>
        </c-popup>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isOpen: false,
            defaultValue: '传奇职业, 德玛西亚之力',
            options: [
                {
                    "text": "热门职位",
                    "value": "热门职位",
                    "key": "part",
                    "options": [
                        {
                            "text": "司机",
                            "value": "司机"
                        }, {
                            "text": "快递",
                            "value": "快递"
                        }, {
                            "text": "装修",
                            "value": "装修"
                        }
                    ]
                }, {
                    "text": "销售",
                    "value": "销售",
                    "key": "part",
                    "options": [
                        {
                            "text": "销售代表",
                            "value": "销售代表"
                        }, {
                            "text": "电话销售",
                            "value": "电话销售"
                        }, {
                            "text": "销售经理",
                            "value": "销售经理"
                        }, {
                            "text": "销售总监",
                            "value": "销售总监"
                        }
                    ]
                }, {
                    "text": "好玩职业",
                    "value": "好玩职业",
                    "key": "part",
                    "options": [
                        {
                            "text": "酒店试睡员",
                            "value": "酒店试睡员"
                        }, {
                            "text": "美食品尝师",
                            "value": "美食品尝师"
                        }, {
                            "text": "旅游体验师",
                            "value": "旅游体验师"
                        }, {
                            "text": "职业拥抱师",
                            "value": "职业拥抱师"
                        }, {
                            "text": "狗粮试吃员",
                            "value": "狗粮试吃员"
                        }, {
                            "text": "手模",
                            "value": "手模"
                        }, {
                            "text": "陪跑族",
                            "value": "陪跑族"
                        }, {
                            "text": "网购砍价师",
                            "value": "网购砍价师"
                        }, {
                            "text": "色彩搭配师",
                            "value": "色彩搭配师"
                        }, {
                            "text": "品酒师",
                            "value": "品酒师"
                        }
                    ]
                }, {
                    "text": "传奇职业",
                    "value": "传奇职业",
                    "key": "part",
                    "options": [
                        {
                            "text": "德玛西亚之力",
                            "value": "德玛西亚之力"
                        }, {
                            "text": "诺克萨斯之手",
                            "value": "诺克萨斯之手"
                        }, {
                            "text": "死亡骑士",
                            "value": "死亡骑士"
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-cascader': 'search-ui/Cascader/Cascader',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-popup': 'search-ui/Popup/Popup'
        }
    }
</script>

<script>
export default {
    methods: {
        handleBtnClick() {
            console.log('handleBtnClick 点击按钮');
            this.isOpen = true;
        },
        handleClose() {
            console.log('handleClose 关闭 popup');
            this.isOpen = false;
        },
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        },
        handleLastColumnItemClick(obj) {
            console.log('handleLastColumnItemClick', obj);
            this.isOpen = false;
        }
    }
};
</script>
```

## 注意事项

1. 默认值判定类型 defaultValueType = 'separate' 目前存在问题，建议使用 'combine'

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
column | number \| string | 1 | 可选 | 列数 | -
defaultValue | string | - | 可选 | 默认值 | -
defaultValueType | string | separate | 可选 | 默认值类型；combine&nbsp;合并，合在一个字符串里，以逗号区分；separate&nbsp;分离，分级写在每一个级联项里； | -
defaultColor | string | #666 | 可选 | 默认颜色 | -
selectedColor | string | #333 | 可选 | 选中项颜色 | -
options | array | - | 可选 | 选项数组 | -
>> options[].text | string | - | - | 选项的文案 | -
>> options[].value | string | - | - | 选项的值 | -
transitionOpts | object | {"heightTransition":"height .3s cubic-bezier(0.4, 0.0, 0.2, 1)"} | 可选 | 动效配置 | -
>> transitionOpts.heightTransition | string | height .3s cubic-bezier(0.4, 0.0, 0.2, 1) | - | height高度变化动效参数 | -
stopScrollThrough | boolean | false | 可选 | 是否阻止滚动穿透 | -
deepCopy | boolean | true | 可选 | 是否深复制数据 | -



### Events


- **lastcolumnitemclick**: 最后一列项点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 同`itemclick`事件

- **itemclick**: 项点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 点击项信息
  ${param1}.column | number | 列数
  ${param1}.columnIndex | number | 当前列数的索引
  ${param1}.optionIndex | number | 当前选中项索引
  ${param1}.option | Object | 当前选中项
  ${param1}.options | Array.&lt;Object&gt; | 当前列选中项数组
  ${param1}.vnode | Object | 级联选择器`vnode`实例
  ${param1}.height | number | 级联选择器高度



