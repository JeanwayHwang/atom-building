---
name: FilterEnhanced
title: 筛选
category: 交互类
owner: 王凯
---

## 使用场景

> 参考UE规范：[【筛选】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Filter.html)

## 示例

```atom 筛选框架 FilterFrame
<template>
    <c-aladdin>
        <c-filter-frame
            :options="options"
            class="filter c-row-tile"
            @taglayoutclick="handleTagLayoutClick"
            @maskclick="handleMaskClick"
        >
            <div>
                1111111111
            </div>
            <div>
                222222
                <br>
                222222
            </div>
            <div>
                333
                <br>
                333333
                <br>
                333333333
            </div>
            <div>
                44
                <br>
                444444
                <br>
                444444444
                <br>
                4444444444444
            </div>
        </c-filter-frame>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            options: [
                {
                    text: '标签0'
                },
                {
                    text: '标签1',
                },
                {
                    text: '标签2',
                    type: 'order'
                },
                {
                    text: '标签3',
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-frame': 'search-ui/FilterEnhanced/FilterFrame',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
        handleTagLayoutClick(obj) {
            console.log('handleTagLayoutClick', obj);
        },
        handleMaskClick(obj) {
            console.log('handleMaskClick', obj);
        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<style module>
    .filter {
    }
</style>
```

```atom 筛选 Filter；fixed 布局
<template>
    <c-aladdin>
        <div class="filter-wrapper">
            <c-filter-enhanced
                ref="filterEnhanced"
                :selections="selections"
                :row-tile="false"
                class="filter"
                @change="handleChange"
                @taglayoutclick="handleTagLayoutClick"
                @spreadtagsitemclick="handleSpreadTagsItemClick"
                @btnresetclick="handleBtnResetClick"
                @maskclick="handleMaskClick"
                @cascaderitemclick="handleCascaderItemClick"
            />
        </div>
        <div>
            看网页顶部
        </div>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            selections: [
                {
                    'text': '单列',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '1',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '1'
                        }, {
                            'text': '文案2',
                            'value': '2'
                        }, {
                            'text': '文案3',
                            'value': '3'
                        }, {
                            'text': '文案4',
                            'value': '4'
                        }, {
                            'text': '文案5',
                            'value': '5'
                        }, {
                            'text': '文案6',
                            'value': '6'
                        }, {
                            'text': '文案7',
                            'value': '7'
                        }, {
                            'text': '文案8',
                            'value': '8'
                        }, {
                            'text': '文案9',
                            'value': '9'
                        }, {
                            'text': '文案10',
                            'value': '10'
                        }
                    ]
                }, {
                    'text': '双列',
                    'type': 'list',
                    'column': '2',
                    'key': 'position',
                    'defaultValue': 'xiaoshou',
                    'options': [
                        {
                            'text': '热门职位',
                            'value': 'remen',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '不限',
                                    'value': null
                                },
                                {
                                    'text': '司机',
                                    'value': '司机'
                                }, {
                                    'text': '快递员',
                                    'value': '快递员'
                                }, {
                                    'text': '装修工',
                                    'value': '装修工'
                                }, {
                                    'text': '保安',
                                    'value': '保安'
                                }, {
                                    'text': '厨师',
                                    'value': '厨师'
                                }, {
                                    'text': '普工',
                                    'value': '普工'
                                }, {
                                    'text': '小时工',
                                    'value': '小时工'
                                }, {
                                    'text': '会计',
                                    'value': '会计'
                                }
                            ]
                        }, {
                            'text': '销售',
                            'value': 'xiaoshou',
                            'defaultValue': 'dianhua',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '销售代表',
                                    'value': 'daibiao'
                                }, {
                                    'text': '电话销售',
                                    'value': 'dianhua'
                                }, {
                                    'text': '销售经理',
                                    'value': 'jingli'
                                }, {
                                    'text': '销售总监',
                                    'value': 'zongjian'
                                }, {
                                    'text': '汽车销售',
                                    'value': 'qiche'
                                }, {
                                    'text': '医药销售',
                                    'value': 'yiyao'
                                }, {
                                    'text': '器械销售',
                                    'value': 'qixie'
                                }, {
                                    'text': '网络销售',
                                    'value': 'wangluo'
                                }, {
                                    'text': '区域销售',
                                    'value': 'qvyu'
                                }, {
                                    'text': '客户经理',
                                    'value': 'jehu'
                                }, {
                                    'text': '销售顾问',
                                    'value': 'guwen'
                                }
                            ]
                        }, {
                            'text': '司机',
                            'value': 'siji',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '商务司机',
                                    'value': '商务司机'
                                }, {
                                    'text': '客车司机',
                                    'value': '客车司机'
                                }, {
                                    'text': '货车司机',
                                    'value': '货车司机'
                                }, {
                                    'text': '出租车司机',
                                    'value': '出租车司机'
                                }, {
                                    'text': '班车司机',
                                    'value': '班车司机'
                                }, {
                                    'text': '驾校教练',
                                    'value': '驾校教练'
                                }, {
                                    'text': '带车司机',
                                    'value': '带车司机'
                                }
                            ]
                        }, {
                            'text': '客服',
                            'value': 'kefu',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '客服专员',
                                    'value': '客服专员'
                                }, {
                                    'text': '电话客服',
                                    'value': '电话客服'
                                }, {
                                    'text': '客服经理',
                                    'value': '客服经理'
                                }, {
                                    'text': '售后服务',
                                    'value': '售后服务'
                                }, {
                                    'text': '客户关系',
                                    'value': '客户关系'
                                }, {
                                    'text': '客服总监',
                                    'value': '客服总监'
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "复合",
                    "type": "multi",
                    "options": [
                        {
                            "label": "金钱",
                            "type": "radio",
                            "defaultValue": "美元",
                            "key": "money",
                            "forceCheck": true,
                            "options": [
                                {
                                    "text": "美元",
                                    "value": "美元",
                                    "icon": "baidu"
                                }, {
                                    "text": "欧元",
                                    "value": "欧元"
                                }
                            ]
                        }, {
                            "label": "英雄",
                            "type": "checkbox",
                            "defaultValue": "盖伦, 拉克丝",
                            "key": "hero",
                            "options": [
                                {
                                    "text": "盖伦",
                                    "value": "盖伦"
                                }, {
                                    "text": "卡特",
                                    "value": "卡特"
                                }, {
                                    "text": "拉克丝",
                                    "value": "拉克丝"
                                }, {
                                    "text": "大锤",
                                    "value": "大锤"
                                }, {
                                    "text": "贾克斯",
                                    "value": "贾克斯"
                                }, {
                                    "text": "香克斯",
                                    "value": "香克斯"
                                }, {
                                    "text": "杰克斯",
                                    "value": "杰克斯"
                                }, {
                                    "text": "金克斯",
                                    "value": "金克斯"
                                }, {
                                    "text": "半藏",
                                    "value": "半藏"
                                }, {
                                    "text": "德玛西亚",
                                    "value": "德玛西亚"
                                }, {
                                    "text": "诺克萨斯",
                                    "value": "诺克萨斯"
                                }, {
                                    "text": "弗雷尔卓德",
                                    "value": "弗雷尔卓德"
                                }
                            ]
                        }, {
                            "label": "价格",
                            "type": "rangeInput",
                            "key": "price",
                            "forceCheck": true,
                            "input": {
                                "errorTips": "价格需填写完整，且输入合法值",
                                "unit": "元",
                                "min": {
                                    "placeholder": "最小值"
                                },
                                "max": {
                                    "placeholder": "最大值"
                                }
                            },
                            "options": [
                                {
                                    "text": "100-500",
                                    "value": "100, 500"
                                }, {
                                    "text": "1000-5000",
                                    "value": "1000,5000"
                                }, {
                                    "text": "10000-50000",
                                    "value": "10000,50000"
                                }, {
                                    "text": "50000-100000",
                                    "value": "50000,100000"
                                }
                            ]
                        }, {
                            "label": "食物（不带展开收起）",
                            "noSpread": true,
                            "type": "checkbox",
                            "defaultValue": "",
                            "key": "weapon",
                            "options": [
                                {
                                    "text": "重庆火锅",
                                    "value": "重庆火锅"
                                }, {
                                    "text": "日本料理",
                                    "value": "日本料理"
                                }, {
                                    "text": "红烧狮子头",
                                    "value": "红烧狮子头"
                                }, {
                                    "text": "土豆烧牛肉",
                                    "value": "土豆烧牛肉"
                                }, {
                                    "text": "韩国烤肉",
                                    "value": "韩国烤肉"
                                }, {
                                    "text": "意大利面",
                                    "value": "意大利面"
                                }, {
                                    "text": "炸鸡",
                                    "value": "炸鸡"
                                }
                            ]
                        }
                    ]
                },
                {
                    'text': '排序',
                    'type': 'order',
                    "key": "key_arrow",
                    "defaultValue": "从低到高",
                    "options": [
                        {
                            "text": "从低到高",
                            "value": "从低到高"
                        }, {
                            "text": "从高到低",
                            "value":"从高到低"
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-enhanced': 'search-ui/FilterEnhanced/FilterEnhanced'
        }
    }
</script>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    mounted() {
    },
    methods: {
        // 改变事件
        handleChange(obj) {
            console.log('改变事件 handleChange', obj);
        },
        // 标签栏点击
        handleTagLayoutClick(obj) {
            // console.log('标签栏点击 handleTagLayoutClick', obj);
        },
        // 复合类型 选项点击
        handleSpreadTagsItemClick(obj) {
            // console.log('复合类型 选项点击 handleSpreadTagsItemClick', obj);
        },
        // 复合类型 重置事件点击
        handleBtnResetClick(obj) {
            // console.log('复合类型 重置事件点击 handleBtnResetClick', obj);
        },
        // 蒙层点击
        handleMaskClick(obj) {
            // console.log('蒙层点击 handleMaskClick', obj);
        },
        // 级联项点击
        handleCascaderItemClick(obj) {
            // console.log('级联项点击 handleCascaderItemClick', obj);
        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<style module>
    .filter-wrapper {
        position: fixed;
        width: 100%;
        top: 55px;
        left: 0;
        /* 必须加一个 z-index 值 */
        z-index: 1;
    }
</style>
```

```atom 筛选 Filter；自定义区域
<template>
    <c-aladdin>
        <c-filter-enhanced
            :selections="selections"
            class="filter"
            @change="handleChange"
            @taglayoutclick="handleTagLayoutClick"
            @spreadtagsitemclick="handleSpreadTagsItemClick"
            @btnresetclick="handleBtnResetClick"
            @maskclick="handleMaskClick"
            @cascaderitemclick="handleCascaderItemClick"
        >
            <div slot="custom3">
                自定义区域
            </div>
        </c-filter-enhanced>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            selections: [
                {
                    'text': '单列',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '1',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '1'
                        }, {
                            'text': '文案2',
                            'value': '2'
                        }, {
                            'text': '文案3',
                            'value': '3'
                        }, {
                            'text': '文案4',
                            'value': '4'
                        }, {
                            'text': '文案5',
                            'value': '5'
                        }, {
                            'text': '文案6',
                            'value': '6'
                        }, {
                            'text': '文案7',
                            'value': '7'
                        }, {
                            'text': '文案8',
                            'value': '8'
                        }, {
                            'text': '文案9',
                            'value': '9'
                        }, {
                            'text': '文案10',
                            'value': '10'
                        }
                    ]
                }, {
                    'text': '双列',
                    'type': 'list',
                    'column': '2',
                    'key': 'position',
                    'defaultValue': 'xiaoshou',
                    'options': [
                        {
                            'text': '热门职位',
                            'value': 'remen',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '不限',
                                    'value': null
                                },
                                {
                                    'text': '司机',
                                    'value': '司机'
                                }, {
                                    'text': '快递员',
                                    'value': '快递员'
                                }, {
                                    'text': '装修工',
                                    'value': '装修工'
                                }, {
                                    'text': '保安',
                                    'value': '保安'
                                }, {
                                    'text': '厨师',
                                    'value': '厨师'
                                }, {
                                    'text': '普工',
                                    'value': '普工'
                                }, {
                                    'text': '小时工',
                                    'value': '小时工'
                                }, {
                                    'text': '会计',
                                    'value': '会计'
                                }
                            ]
                        }, {
                            'text': '销售',
                            'value': 'xiaoshou',
                            'defaultValue': 'dianhua',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '销售代表',
                                    'value': 'daibiao'
                                }, {
                                    'text': '电话销售',
                                    'value': 'dianhua'
                                }, {
                                    'text': '销售经理',
                                    'value': 'jingli'
                                }, {
                                    'text': '销售总监',
                                    'value': 'zongjian'
                                }, {
                                    'text': '汽车销售',
                                    'value': 'qiche'
                                }, {
                                    'text': '医药销售',
                                    'value': 'yiyao'
                                }, {
                                    'text': '器械销售',
                                    'value': 'qixie'
                                }, {
                                    'text': '网络销售',
                                    'value': 'wangluo'
                                }, {
                                    'text': '区域销售',
                                    'value': 'qvyu'
                                }, {
                                    'text': '客户经理',
                                    'value': 'jehu'
                                }, {
                                    'text': '销售顾问',
                                    'value': 'guwen'
                                }
                            ]
                        }, {
                            'text': '司机',
                            'value': 'siji',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '商务司机',
                                    'value': '商务司机'
                                }, {
                                    'text': '客车司机',
                                    'value': '客车司机'
                                }, {
                                    'text': '货车司机',
                                    'value': '货车司机'
                                }, {
                                    'text': '出租车司机',
                                    'value': '出租车司机'
                                }, {
                                    'text': '班车司机',
                                    'value': '班车司机'
                                }, {
                                    'text': '驾校教练',
                                    'value': '驾校教练'
                                }, {
                                    'text': '带车司机',
                                    'value': '带车司机'
                                }
                            ]
                        }, {
                            'text': '客服',
                            'value': 'kefu',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '客服专员',
                                    'value': '客服专员'
                                }, {
                                    'text': '电话客服',
                                    'value': '电话客服'
                                }, {
                                    'text': '客服经理',
                                    'value': '客服经理'
                                }, {
                                    'text': '售后服务',
                                    'value': '售后服务'
                                }, {
                                    'text': '客户关系',
                                    'value': '客户关系'
                                }, {
                                    'text': '客服总监',
                                    'value': '客服总监'
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "复合",
                    "type": "multi",
                    "options": [
                        {
                            "label": "金钱",
                            "type": "radio",
                            "defaultValue": "美元",
                            "key": "money",
                            "forceCheck": true,
                            "options": [
                                {
                                    "text": "美元",
                                    "value": "美元",
                                    "icon": "baidu"
                                }, {
                                    "text": "欧元",
                                    "value": "欧元"
                                }
                            ]
                        }, {
                            "label": "英雄",
                            "type": "checkbox",
                            "defaultValue": "盖伦, 拉克丝",
                            "key": "hero",
                            "options": [
                                {
                                    "text": "盖伦",
                                    "value": "盖伦"
                                }, {
                                    "text": "卡特",
                                    "value": "卡特"
                                }, {
                                    "text": "拉克丝",
                                    "value": "拉克丝"
                                }, {
                                    "text": "大锤",
                                    "value": "大锤"
                                }, {
                                    "text": "贾克斯",
                                    "value": "贾克斯"
                                }, {
                                    "text": "香克斯",
                                    "value": "香克斯"
                                }, {
                                    "text": "杰克斯",
                                    "value": "杰克斯"
                                }, {
                                    "text": "金克斯",
                                    "value": "金克斯"
                                }, {
                                    "text": "半藏",
                                    "value": "半藏"
                                }, {
                                    "text": "德玛西亚",
                                    "value": "德玛西亚"
                                }, {
                                    "text": "诺克萨斯",
                                    "value": "诺克萨斯"
                                }, {
                                    "text": "弗雷尔卓德",
                                    "value": "弗雷尔卓德"
                                }
                            ]
                        }, {
                            "label": "价格",
                            "type": "rangeInput",
                            "key": "price",
                            "forceCheck": true,
                            "input": {
                                "errorTips": "价格需填写完整，且输入合法值",
                                "unit": "元",
                                "min": {
                                    "placeholder": "最小值"
                                },
                                "max": {
                                    "placeholder": "最大值"
                                }
                            },
                            "options": [
                                {
                                    "text": "100-500",
                                    "value": "100, 500"
                                }, {
                                    "text": "1000-5000",
                                    "value": "1000,5000"
                                }, {
                                    "text": "10000-50000",
                                    "value": "10000,50000"
                                }, {
                                    "text": "50000-100000",
                                    "value": "50000,100000"
                                }
                            ]
                        }, {
                            "label": "食物（不带展开收起）",
                            "noSpread": true,
                            "type": "checkbox",
                            "defaultValue": "",
                            "key": "weapon",
                            "options": [
                                {
                                    "text": "重庆火锅",
                                    "value": "重庆火锅"
                                }, {
                                    "text": "日本料理",
                                    "value": "日本料理"
                                }, {
                                    "text": "红烧狮子头",
                                    "value": "红烧狮子头"
                                }, {
                                    "text": "土豆烧牛肉",
                                    "value": "土豆烧牛肉"
                                }, {
                                    "text": "韩国烤肉",
                                    "value": "韩国烤肉"
                                }, {
                                    "text": "意大利面",
                                    "value": "意大利面"
                                }, {
                                    "text": "炸鸡",
                                    "value": "炸鸡"
                                }
                            ]
                        }
                    ]
                },
                {
                    'text': '自定义',
                    'type': 'custom'
                },
                {
                    'text': '排序',
                    'type': 'order',
                    "key": "key_arrow",
                    "defaultValue": "从低到高",
                    "options": [
                        {
                            "text": "从低到高",
                            "value": "从低到高"
                        }, {
                            "text": "从高到低",
                            "value":"从高到低"
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-enhanced': 'search-ui/FilterEnhanced/FilterEnhanced'
        }
    }
</script>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    mounted() {
    },
    methods: {
        // 改变事件
        handleChange(obj) {
            // console.log('改变事件 handleChange', obj);
        },
        // 标签栏点击
        handleTagLayoutClick(obj) {
            // console.log('标签栏点击 handleTagLayoutClick', obj);
        },
        // 复合类型 选项点击
        handleSpreadTagsItemClick(obj) {
            // console.log('复合类型 选项点击 handleSpreadTagsItemClick', obj);
        },
        // 复合类型 重置事件点击
        handleBtnResetClick(obj) {
            // console.log('复合类型 重置事件点击 handleBtnResetClick', obj);
        },
        // 蒙层点击
        handleMaskClick(obj) {
            // console.log('蒙层点击 handleMaskClick', obj);
        },
        // 级联项点击
        handleCascaderItemClick(obj) {
            // console.log('级联项点击 handleCascaderItemClick', obj);
        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<style module>
    .filter {
    }
</style>
```

```atom 筛选 Filter；内容未达到最大高度限制；增加标签栏 slot
<template>
    <c-aladdin>
        <c-filter-enhanced
            :selections="selections"
            class="filter"
        >
            <div
                slot="tagLayout"
                class="icon"
            >
                <c-icon
                    :type="iconType"
                    @click="handleIconClick"
                />
            </div>
        </c-filter-enhanced>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            iconType: 'list',
            selections: [
                {
                    'text': '单列',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '文案2',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }
                    ]
                },
                {
                    "text": "复合范围输入",
                    "type": "multi",
                    "options": [
                        {
                            "label": "价格",
                            "type": "rangeInput",
                            "key": "price",
                            "forceCheck": true,
                            "input": {
                                "errorTips": "价格需填写完整，且输入合法值",
                                "unit": "元",
                                "min": {
                                    "placeholder": "最小值"
                                },
                                "max": {
                                    "placeholder": "最大值"
                                }
                            },
                            "options": [
                                {
                                    "text": "100-500",
                                    "value": "100, 500"
                                }, {
                                    "text": "1000-5000",
                                    "value": "1000,5000"
                                }, {
                                    "text": "10000-50000",
                                    "value": "10000,50000"
                                }, {
                                    "text": "50000-100000",
                                    "value": "50000,100000"
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "复合单选框",
                    "type": "multi",
                    "options": [
                        {
                            "label": "食物",
                            "type": "radio",
                            "defaultValue": "",
                            "key": "weapon",
                            "options": [
                                {
                                    "text": "重庆火锅",
                                    "value": "重庆火锅"
                                }, {
                                    "text": "日本料理",
                                    "value": "日本料理"
                                }, {
                                    "text": "红烧狮子头",
                                    "value": "红烧狮子头"
                                }, {
                                    "text": "土豆烧牛肉",
                                    "value": "土豆烧牛肉"
                                }, {
                                    "text": "韩国烤肉",
                                    "value": "韩国烤肉"
                                }, {
                                    "text": "意大利面",
                                    "value": "意大利面"
                                }, {
                                    "text": "炸鸡",
                                    "value": "炸鸡"
                                }
                            ]
                        }
                    ]
                },
                {
                    'text': '排序',
                    'type': 'order'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-enhanced': 'search-ui/FilterEnhanced/FilterEnhanced',
            'c-icon': 'search-ui/Icon/Icon'
        }
    }
</script>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    mounted() {
    },
    methods: {
        handleIconClick() {
            console.log('handleIconClick', this.iconType);
            if (this.iconType === 'list') {
                this.iconType = 'menu';
            }
            else {
                this.iconType = 'list';
            }
        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<style lang="less" module>
    .icon {
        display: inline-block;
        // 强制设置宽度；避免图标加载完成时页面抖动；避免切换图标时由于大小不一致导致的页面抖动
        width: 14px;
    }
</style>
```

```atom 筛选 Filter；复合类型隐藏按钮栏，仅在复合只有一个单选框的时候支持
<template>
    <c-aladdin>
        <c-filter-enhanced
            :selections="selections"
            class="filter"
        >
            <div
                slot="tagLayout"
                class="icon"
            >
                <c-icon
                    :type="iconType"
                    @click="handleIconClick"
                />
            </div>
        </c-filter-enhanced>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            iconType: 'list',
            selections: [
                {
                    'text': '单列',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '文案2',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }
                    ]
                }, {
                    'text': '双列',
                    'type': 'list',
                    'column': '2',
                    'key': 'position',
                    'defaultValue': '热门职位',
                    'options': [
                        {
                            'text': '热门职位',
                            'value': '热门职位',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '司机',
                                    'value': '司机'
                                }, {
                                    'text': '快递',
                                    'value': '快递'
                                }, {
                                    'text': '装修',
                                    'value': '装修'
                                }, {
                                    'text': '保安',
                                    'value': '保安'
                                }, {
                                    'text': '厨师',
                                    'value': '厨师'
                                }, {
                                    'text': '普工',
                                    'value': '普工'
                                }, {
                                    'text': '小时工',
                                    'value': '小时工'
                                }, {
                                    'text': '会计',
                                    'value': '会计'
                                }, {
                                    'text': '不限',
                                    'value': '不限'
                                }
                            ]
                        }, {
                            'text': '销售',
                            'value': '销售',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '销售代表',
                                    'value': '销售代表'
                                }, {
                                    'text': '电话销售',
                                    'value': '电话销售'
                                }, {
                                    'text': '销售经理',
                                    'value': '销售经理'
                                }
                            ]
                        }, {
                            'text': '司机',
                            'value': '司机',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '商务司机',
                                    'value': '商务司机'
                                }, {
                                    'text': '客车司机',
                                    'value': '客车司机'
                                }, {
                                    'text': '货车司机',
                                    'value': '货车司机'
                                }, {
                                    'text': '出租车司机',
                                    'value': '出租车司机'
                                }, {
                                    'text': '班车司机',
                                    'value': '班车司机'
                                }, {
                                    'text': '驾校教练',
                                    'value': '驾校教练'
                                }, {
                                    'text': '带车司机',
                                    'value': '带车司机'
                                }
                            ]
                        }, {
                            'text': '客服',
                            'value': '客服',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '客服专员',
                                    'value': '客服专员'
                                }, {
                                    'text': '电话客服',
                                    'value': '电话客服'
                                }, {
                                    'text': '客服经理',
                                    'value': '客服经理'
                                }, {
                                    'text': '售后服务',
                                    'value': '售后服务'
                                }, {
                                    'text': '客户关系',
                                    'value': '客户关系'
                                }, {
                                    'text': '客服总监',
                                    'value': '客服总监'
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "复合",
                    "type": "multi",
                    "hideBtnLayout": true,
                    "options": [
                        {
                            "label": "食物（不带展开收起）",
                            "noSpread": true,
                            "type": "radio",
                            "defaultValue": "",
                            "key": "weapon",
                            "options": [
                                {
                                    "text": "重庆火锅",
                                    "value": "重庆火锅"
                                }, {
                                    "text": "日本料理",
                                    "value": "日本料理"
                                }, {
                                    "text": "红烧狮子头",
                                    "value": "红烧狮子头"
                                }, {
                                    "text": "土豆烧牛肉",
                                    "value": "土豆烧牛肉"
                                }, {
                                    "text": "韩国烤肉",
                                    "value": "韩国烤肉"
                                }, {
                                    "text": "意大利面",
                                    "value": "意大利面"
                                }, {
                                    "text": "炸鸡",
                                    "value": "炸鸡"
                                }
                            ]
                        }
                    ]
                },
                {
                    'text': '排序',
                    'type': 'order'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-enhanced': 'search-ui/FilterEnhanced/FilterEnhanced',
            'c-icon': 'search-ui/Icon/Icon'
        }
    }
</script>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    mounted() {
    },
    methods: {
        handleIconClick() {
            console.log('handleIconClick', this.iconType);
            if (this.iconType === 'list') {
                this.iconType = 'menu';
            }
            else {
                this.iconType = 'list';
            }
        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<style lang="less" module>
    .icon {
        display: inline-block;
        // 强制设置宽度；避免图标加载完成时页面抖动；避免切换图标时由于大小不一致导致的页面抖动
        width: 14px;
    }
</style>
```

```atom 自定义主颜色；通过 option.size 控制单/多选按钮大小
<template>
    <c-aladdin>
        <c-filter-enhanced
            :selections="selections"
            primary-color="#01b7c9"
            class="filter"
        >
        </c-filter-enhanced>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            iconType: 'list',
            selections: [
                {
                    'text': '单列',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '文案2',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }
                    ]
                }, {
                    'text': '双列',
                    'type': 'list',
                    'column': '2',
                    'key': 'position',
                    'defaultValue': '热门职位',
                    'options': [
                        {
                            'text': '热门职位',
                            'value': '热门职位',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '司机',
                                    'value': '司机',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }, {
                                    'text': '快递',
                                    'value': '快递',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }, {
                                    'text': '装修',
                                    'value': '装修',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }, {
                                    'text': '保安',
                                    'value': '保安',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }, {
                                    'text': '厨师',
                                    'value': '厨师',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }, {
                                    'text': '普工',
                                    'value': '普工',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }, {
                                    'text': '小时工',
                                    'value': '小时工',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }, {
                                    'text': '会计',
                                    'value': '会计',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }, {
                                    'text': '不限',
                                    'value': '不限',
                                    'extend': '描述描述描述描述描述描述描述描述'
                                }
                            ]
                        }, {
                            'text': '销售',
                            'value': '销售',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '销售代表',
                                    'value': '销售代表'
                                }, {
                                    'text': '电话销售',
                                    'value': '电话销售'
                                }, {
                                    'text': '销售经理',
                                    'value': '销售经理'
                                }
                            ]
                        }, {
                            'text': '司机',
                            'value': '司机',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '商务司机',
                                    'value': '商务司机'
                                }, {
                                    'text': '客车司机',
                                    'value': '客车司机'
                                }, {
                                    'text': '货车司机',
                                    'value': '货车司机'
                                }, {
                                    'text': '出租车司机',
                                    'value': '出租车司机'
                                }, {
                                    'text': '班车司机',
                                    'value': '班车司机'
                                }, {
                                    'text': '驾校教练',
                                    'value': '驾校教练'
                                }, {
                                    'text': '带车司机',
                                    'value': '带车司机'
                                }
                            ]
                        }, {
                            'text': '客服',
                            'value': '客服',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '客服专员',
                                    'value': '客服专员'
                                }, {
                                    'text': '电话客服',
                                    'value': '电话客服'
                                }, {
                                    'text': '客服经理',
                                    'value': '客服经理'
                                }, {
                                    'text': '售后服务',
                                    'value': '售后服务'
                                }, {
                                    'text': '客户关系',
                                    'value': '客户关系'
                                }, {
                                    'text': '客服总监',
                                    'value': '客服总监'
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "复合",
                    "type": "multi",
                    "options": [
                        {
                            "label": "金钱",
                            "type": "radio",
                            "defaultValue": "美元",
                            "key": "money",
                            "size": "normal",
                            "forceCheck": true,
                            "options": [
                                {
                                    "text": "美元",
                                    "value": "美元",
                                    "icon": "baidu"
                                }, {
                                    "text": "欧元",
                                    "value": "欧元"
                                }
                            ]
                        }, {
                            "label": "英雄",
                            "type": "checkbox",
                            "defaultValue": "盖伦, 拉克丝",
                            "key": "hero",
                            "options": [
                                {
                                    "text": "盖伦",
                                    "value": "盖伦"
                                }, {
                                    "text": "卡特",
                                    "value": "卡特"
                                }, {
                                    "text": "拉克丝",
                                    "value": "拉克丝"
                                }, {
                                    "text": "大锤",
                                    "value": "大锤"
                                }, {
                                    "text": "贾克斯",
                                    "value": "贾克斯"
                                }, {
                                    "text": "香克斯",
                                    "value": "香克斯"
                                }, {
                                    "text": "杰克斯",
                                    "value": "杰克斯"
                                }, {
                                    "text": "金克斯",
                                    "value": "金克斯"
                                }, {
                                    "text": "半藏",
                                    "value": "半藏"
                                }, {
                                    "text": "德玛西亚",
                                    "value": "德玛西亚"
                                }, {
                                    "text": "诺克萨斯",
                                    "value": "诺克萨斯"
                                }, {
                                    "text": "弗雷尔卓德",
                                    "value": "弗雷尔卓德"
                                }
                            ]
                        }, {
                            "label": "价格",
                            "type": "rangeInput",
                            "key": "price",
                            "forceCheck": true,
                            "input": {
                                "errorTips": "价格需填写完整，且输入合法值",
                                "unit": "元",
                                "min": {
                                    "placeholder": "最小值"
                                },
                                "max": {
                                    "placeholder": "最大值"
                                }
                            },
                            "options": [
                                {
                                    "text": "100-500",
                                    "value": "100, 500"
                                }, {
                                    "text": "1000-5000",
                                    "value": "1000,5000"
                                }, {
                                    "text": "10000-50000",
                                    "value": "10000,50000"
                                }, {
                                    "text": "50000-100000",
                                    "value": "50000,100000"
                                }
                            ]
                        }, {
                            "label": "食物（不带展开收起）",
                            "noSpread": true,
                            "type": "checkbox",
                            "defaultValue": "",
                            "key": "weapon",
                            "options": [
                                {
                                    "text": "重庆火锅",
                                    "value": "重庆火锅"
                                }, {
                                    "text": "日本料理",
                                    "value": "日本料理"
                                }, {
                                    "text": "红烧狮子头",
                                    "value": "红烧狮子头"
                                }, {
                                    "text": "土豆烧牛肉",
                                    "value": "土豆烧牛肉"
                                }, {
                                    "text": "韩国烤肉",
                                    "value": "韩国烤肉"
                                }, {
                                    "text": "意大利面",
                                    "value": "意大利面"
                                }, {
                                    "text": "炸鸡",
                                    "value": "炸鸡"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-enhanced': 'search-ui/FilterEnhanced/FilterEnhanced',
            'c-icon': 'search-ui/Icon/Icon'
        }
    }
</script>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    mounted() {
    },
    methods: {
        handleIconClick() {
            console.log('handleIconClick', this.iconType);
            if (this.iconType === 'list') {
                this.iconType = 'menu';
            }
            else {
                this.iconType = 'list';
            }
        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<style lang="less" module>
    .icon {
        display: inline-block;
        // 强制设置宽度；避免图标加载完成时页面抖动；避免切换图标时由于大小不一致导致的页面抖动
        width: 14px;
    }
</style>
```

```atom 主动调用 init 方法主动改变筛选项；主动调用 close 方法关闭弹层
<template>
    <c-aladdin>
        <c-row>
            <c-btn
                text="点我关闭"
                @click="handleCloseBtnClick"
            />
        </c-row>
        <c-row>
            <c-btn
                text="点我切换"
                @click="handleBtnClick"
            />
        </c-row>
        <c-filter-enhanced
            ref="filter"
            :selections="selections"
            class="filter"
        >
            <div
                slot="tagLayout"
                class="icon"
            >
                <c-icon
                    :type="iconType"
                    @click="handleIconClick"
                />
            </div>
        </c-filter-enhanced>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            iconType: 'list',
            type: 1,
            selections: [
                {
                    'text': '单列',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '文案2',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }
                    ]
                }
            ],
            selections1: [
                {
                    'text': '单列',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '文案2',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }
                    ]
                },
                {
                    'text': 'two column',
                    'type': 'list',
                    'column': '2',
                    'key': 'position',
                    'defaultValue': 'hotjob',
                    'options': [
                        {
                            'text': 'hotjob',
                            'value': 'hotjob',
                            'defaultValue': 'zhuangxiu',
                            'key': 'part',
                            'options': [
                                {
                                    'text': 'siji',
                                    'value': 'siji'
                                }, {
                                    'text': 'kuaidi',
                                    'value': 'kuaidi'
                                }, {
                                    'text': 'zhuangxiu',
                                    'value': 'zhuangxiu'
                                }, {
                                    'text': 'baoan',
                                    'value': 'baoan'
                                }, {
                                    'text': 'chushi',
                                    'value': 'chushi'
                                }, {
                                    'text': 'pugong',
                                    'value': 'pugong'
                                }, {
                                    'text': 'xiaoshigong',
                                    'value': 'xiaoshigong'
                                }, {
                                    'text': 'kuanji',
                                    'value': 'kuanji'
                                }, {
                                    'text': 'buxian',
                                    'value': 'buxian'
                                }
                            ]
                        }, {
                            'text': '销售',
                            'value': '销售',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '销售代表',
                                    'value': '销售代表'
                                }, {
                                    'text': '电话销售',
                                    'value': '电话销售'
                                }, {
                                    'text': '销售经理',
                                    'value': '销售经理'
                                }
                            ]
                        }, {
                            'text': '司机',
                            'value': '司机',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '商务司机',
                                    'value': '商务司机'
                                }, {
                                    'text': '客车司机',
                                    'value': '客车司机'
                                }, {
                                    'text': '货车司机',
                                    'value': '货车司机'
                                }, {
                                    'text': '出租车司机',
                                    'value': '出租车司机'
                                }, {
                                    'text': '班车司机',
                                    'value': '班车司机'
                                }, {
                                    'text': '驾校教练',
                                    'value': '驾校教练'
                                }, {
                                    'text': '带车司机',
                                    'value': '带车司机'
                                }
                            ]
                        }, {
                            'text': '客服',
                            'value': '客服',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '客服专员',
                                    'value': '客服专员'
                                }, {
                                    'text': '电话客服',
                                    'value': '电话客服'
                                }, {
                                    'text': '客服经理',
                                    'value': '客服经理'
                                }, {
                                    'text': '售后服务',
                                    'value': '售后服务'
                                }, {
                                    'text': '客户关系',
                                    'value': '客户关系'
                                }, {
                                    'text': '客服总监',
                                    'value': '客服总监'
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "复合",
                    "type": "multi",
                    "options": [
                        {
                            "label": "金钱",
                            "type": "radio",
                            "defaultValue": "美元",
                            "key": "money",
                            "forceCheck": true,
                            "options": [
                                {
                                    "text": "美元",
                                    "value": "美元",
                                    "icon": "baidu"
                                }, {
                                    "text": "欧元",
                                    "value": "欧元"
                                }
                            ]
                        }, {
                            "label": "英雄",
                            "type": "checkbox",
                            "defaultValue": "盖伦, 拉克丝",
                            "key": "hero",
                            "options": [
                                {
                                    "text": "盖伦",
                                    "value": "盖伦"
                                }, {
                                    "text": "卡特",
                                    "value": "卡特"
                                }, {
                                    "text": "拉克丝",
                                    "value": "拉克丝"
                                }, {
                                    "text": "大锤",
                                    "value": "大锤"
                                }, {
                                    "text": "贾克斯",
                                    "value": "贾克斯"
                                }, {
                                    "text": "香克斯",
                                    "value": "香克斯"
                                }, {
                                    "text": "杰克斯",
                                    "value": "杰克斯"
                                }, {
                                    "text": "金克斯",
                                    "value": "金克斯"
                                }, {
                                    "text": "半藏",
                                    "value": "半藏"
                                }, {
                                    "text": "德玛西亚",
                                    "value": "德玛西亚"
                                }, {
                                    "text": "诺克萨斯",
                                    "value": "诺克萨斯"
                                }, {
                                    "text": "弗雷尔卓德",
                                    "value": "弗雷尔卓德"
                                }
                            ]
                        }, {
                            "label": "价格",
                            "type": "rangeInput",
                            "key": "price",
                            "forceCheck": true,
                            "input": {
                                "errorTips": "价格需填写完整，且输入合法值",
                                "unit": "元",
                                "min": {
                                    "placeholder": "最小值"
                                },
                                "max": {
                                    "placeholder": "最大值"
                                }
                            },
                            "options": [
                                {
                                    "text": "100-500",
                                    "value": "100, 500"
                                }, {
                                    "text": "1000-5000",
                                    "value": "1000,5000"
                                }, {
                                    "text": "10000-50000",
                                    "value": "10000,50000"
                                }, {
                                    "text": "50000-100000",
                                    "value": "50000,100000"
                                }
                            ]
                        }, {
                            "label": "食物（不带展开收起）",
                            "noSpread": true,
                            "type": "checkbox",
                            "defaultValue": "",
                            "key": "weapon",
                            "options": [
                                {
                                    "text": "重庆火锅",
                                    "value": "重庆火锅"
                                }, {
                                    "text": "日本料理",
                                    "value": "日本料理"
                                }, {
                                    "text": "红烧狮子头",
                                    "value": "红烧狮子头"
                                }, {
                                    "text": "土豆烧牛肉",
                                    "value": "土豆烧牛肉"
                                }, {
                                    "text": "韩国烤肉",
                                    "value": "韩国烤肉"
                                }, {
                                    "text": "意大利面",
                                    "value": "意大利面"
                                }, {
                                    "text": "炸鸡",
                                    "value": "炸鸡"
                                }
                            ]
                        }
                    ]
                }
            ],
            selections2: [
                {
                    'text': '单列',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '文案2',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }
                    ]
                },
                {
                    'text': '双列',
                    'type': 'list',
                    'column': '2',
                    'key': 'position',
                    'options': [
                        {
                            'text': '热门职位',
                            'value': '热门职位',
                            'defaultValue': '装修',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '司机',
                                    'value': '司机'
                                }, {
                                    'text': '快递',
                                    'value': '快递'
                                }, {
                                    'text': '装修',
                                    'value': '装修'
                                }, {
                                    'text': '保安',
                                    'value': '保安'
                                }, {
                                    'text': '厨师',
                                    'value': '厨师'
                                }, {
                                    'text': '普工',
                                    'value': '普工'
                                }, {
                                    'text': '小时工',
                                    'value': '小时工'
                                }, {
                                    'text': '会计',
                                    'value': '会计'
                                }, {
                                    'text': '不限',
                                    'value': '不限'
                                }
                            ]
                        }, {
                            'text': '销售',
                            'value': '销售',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '销售代表',
                                    'value': '销售代表'
                                }, {
                                    'text': '电话销售',
                                    'value': '电话销售'
                                }, {
                                    'text': '销售经理',
                                    'value': '销售经理'
                                }
                            ]
                        }, {
                            'text': '司机',
                            'value': '司机',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '商务司机',
                                    'value': '商务司机'
                                }, {
                                    'text': '客车司机',
                                    'value': '客车司机'
                                }, {
                                    'text': '货车司机',
                                    'value': '货车司机'
                                }, {
                                    'text': '出租车司机',
                                    'value': '出租车司机'
                                }, {
                                    'text': '班车司机',
                                    'value': '班车司机'
                                }, {
                                    'text': '驾校教练',
                                    'value': '驾校教练'
                                }, {
                                    'text': '带车司机',
                                    'value': '带车司机'
                                }
                            ]
                        }, {
                            'text': '客服',
                            'value': '客服',
                            'key': 'part',
                            'options': [
                                {
                                    'text': '客服专员',
                                    'value': '客服专员'
                                }, {
                                    'text': '电话客服',
                                    'value': '电话客服'
                                }, {
                                    'text': '客服经理',
                                    'value': '客服经理'
                                }, {
                                    'text': '售后服务',
                                    'value': '售后服务'
                                }, {
                                    'text': '客户关系',
                                    'value': '客户关系'
                                }, {
                                    'text': '客服总监',
                                    'value': '客服总监'
                                }
                            ]
                        }
                    ]
                },
                {
                    "text": "复合",
                    "type": "multi",
                    "options": [
                        {
                            "label": "金钱",
                            "type": "radio",
                            "defaultValue": "美元",
                            "key": "money",
                            "forceCheck": true,
                            "options": [
                                {
                                    "text": "美元",
                                    "value": "美元",
                                    "icon": "baidu"
                                }, {
                                    "text": "欧元",
                                    "value": "欧元"
                                }
                            ]
                        }, {
                            "label": "英雄",
                            "type": "checkbox",
                            "defaultValue": "盖伦, 拉克丝",
                            "key": "hero",
                            "options": [
                                {
                                    "text": "盖伦",
                                    "value": "盖伦"
                                }, {
                                    "text": "卡特",
                                    "value": "卡特"
                                }, {
                                    "text": "拉克丝",
                                    "value": "拉克丝"
                                }, {
                                    "text": "大锤",
                                    "value": "大锤"
                                }, {
                                    "text": "贾克斯",
                                    "value": "贾克斯"
                                }, {
                                    "text": "香克斯",
                                    "value": "香克斯"
                                }, {
                                    "text": "杰克斯",
                                    "value": "杰克斯"
                                }, {
                                    "text": "金克斯",
                                    "value": "金克斯"
                                }, {
                                    "text": "半藏",
                                    "value": "半藏"
                                }, {
                                    "text": "德玛西亚",
                                    "value": "德玛西亚"
                                }, {
                                    "text": "诺克萨斯",
                                    "value": "诺克萨斯"
                                }, {
                                    "text": "弗雷尔卓德",
                                    "value": "弗雷尔卓德"
                                }
                            ]
                        }, {
                            "label": "价格",
                            "type": "rangeInput",
                            "key": "price",
                            "forceCheck": true,
                            "input": {
                                "errorTips": "价格需填写完整，且输入合法值",
                                "unit": "元",
                                "min": {
                                    "placeholder": "最小值"
                                },
                                "max": {
                                    "placeholder": "最大值"
                                }
                            },
                            "options": [
                                {
                                    "text": "100-500",
                                    "value": "100, 500"
                                }, {
                                    "text": "1000-5000",
                                    "value": "1000,5000"
                                }, {
                                    "text": "10000-50000",
                                    "value": "10000,50000"
                                }, {
                                    "text": "50000-100000",
                                    "value": "50000,100000"
                                }
                            ]
                        }, {
                            "label": "食物（不带展开收起）",
                            "noSpread": true,
                            "type": "checkbox",
                            "defaultValue": "",
                            "key": "weapon",
                            "options": [
                                {
                                    "text": "重庆火锅",
                                    "value": "重庆火锅"
                                }, {
                                    "text": "日本料理",
                                    "value": "日本料理"
                                }, {
                                    "text": "红烧狮子头",
                                    "value": "红烧狮子头"
                                }, {
                                    "text": "土豆烧牛肉",
                                    "value": "土豆烧牛肉"
                                }, {
                                    "text": "韩国烤肉",
                                    "value": "韩国烤肉"
                                }, {
                                    "text": "意大利面",
                                    "value": "意大利面"
                                }, {
                                    "text": "炸鸡",
                                    "value": "炸鸡"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-enhanced': 'search-ui/FilterEnhanced/FilterEnhanced',
            'c-icon': 'search-ui/Icon/Icon',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    mounted() {
    },
    methods: {
        handleIconClick() {
            console.log('handleIconClick', this.iconType);
            if (this.iconType === 'list') {
                this.iconType = 'menu';
            }
            else {
                this.iconType = 'list';
            }
        },
        handleBtnClick() {
            if (this.type === 1) {
                this.type = 2;
                let json = JSON.parse(JSON.stringify(this.selections2));
                this.selections = json;
                this.$refs.filter.init(json);
            }
            else {
                this.type = 1;
                let json = JSON.parse(JSON.stringify(this.selections1));
                this.selections = json;
                this.$refs.filter.init(json);
            }
        },
        handleCloseBtnClick() {
            console.log('onClickClose');
            this.$refs.filter.close();
        }
    },
    computed: {
    },
    watch: {
    }
};
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<style lang="less" module>
    .icon {
        display: inline-block;
        // 强制设置宽度；避免图标加载完成时页面抖动；避免切换图标时由于大小不一致导致的页面抖动
        width: 14px;
    }
</style>
```

```atom 筛选 Filter；通过 preventDefault 字段阻止 TagLayout 默认点击弹出浮层的行为
<template>
    <c-aladdin>
        <c-filter-enhanced
            :selections="selections"
            class="filter"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            selections: [
                {
                    'text': '标签1',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }, {
                            'text': '文案3',
                            'value': '文案3'
                        }
                    ]
                }, {
                    'text': '阻止默认行为',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': null,
                    'preventDefault': true,
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }, {
                            'text': '文案3',
                            'value': '文案3'
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-enhanced': 'search-ui/FilterEnhanced/FilterEnhanced'
        }
    }
</script>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    mounted() {
    },
    methods: {
    },
    computed: {
    },
    watch: {
    }
};
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<style module>
    .filter {
    }
</style>
```

```atom 筛选 Filter；通过 ref.setSelectedIndex 方法主动设置 selectedIndex
<template>
    <c-aladdin>
        <c-filter-enhanced
            ref="filterEnhanced"
            :selections="selections"
            class="filter"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            selections: [
                {
                    'text': '标签1',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': '',
                    'options': [
                        {
                            'text': '不限',
                            'value': null
                        }, {
                            'text': '文案1',
                            'value': '文案1'
                        }, {
                            'text': '文案2',
                            'value': '文案2'
                        }, {
                            'text': '文案3',
                            'value': '文案3'
                        }
                    ]
                }, {
                    'text': '标签2',
                    'type': 'list',
                    'column': '1',
                    'key': 'key1',
                    'defaultValue': null,
                    'options': [
                        {
                            'text': '德玛西亚',
                            'value': null
                        }, {
                            'text': '诺克萨斯',
                            'value': '诺克萨斯'
                        }, {
                            'text': '艾欧尼亚',
                            'value': '艾欧尼亚'
                        }, {
                            'text': '转身离开有话说不出来',
                            'value': '转身离开有话说不出来'
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-enhanced': 'search-ui/FilterEnhanced/FilterEnhanced'
        }
    }
</script>

<script>
export default {
    filters: {
        decode(json) {
            return JSON.parse(json);
        }
    },
    mounted() {
        setTimeout(() => {
            this.$refs.filterEnhanced.setSelectedIndex(0);
        }, 0);
    },
    methods: {
    },
    computed: {
    },
    watch: {
    }
};
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<style module>
    .filter {
    }
</style>
```

```atom 占位
<template>
    <c-aladdin>
        <div
            a-for="i in 100"
            :key="i"
        >
            {{ i }}
        </div>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>
```

### 需要清空模板使用，然后删除的文件

./BottomLayout.atom
./Checkbox.atom
./CustomLayout.atom
./Filter.atom
./ListLayout.atom
./Mask.atom
./MultiCheckbox.atom
./MultiRangeInput.atom
./store.js
./TagLayout.atom

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
selections | array | [] | 必选 | 选项集 | -
>> selections[].type | string | 'list' | - | 筛选项的类型：`list`（级联类型），`multi`（复合类型）、`order`（排序类型） | -
>> selections[].text | string | - | - | 筛选项标签的文案 | -
>> selections[].key | string | - | - | 筛选项的唯一标识；仅支持&nbsp;`list`、`order`&nbsp;类型 | -
>> selections[].defaultValue | string | - | - | 当前筛选项的默认值；仅支持&nbsp;`list`、`order`&nbsp;类型 | -
>> selections[].column | number | 1 | - | 当前级联筛选的级数（或者叫列数）；仅支持&nbsp;`list`&nbsp;类型 | -
>> selections[].hideBtnLayout | boolean | - | - | 是否隐藏按钮栏；仅支持&nbsp;`multi`&nbsp;类型 | -
>> selections[].options | Array | - | - | 当前筛选项的子选项们 | -
>> selections[].options[].text | string | - | - | 子选项的文案 | -
>> selections[].options[].value | string | - | - | 子选项的值 | -
>> selections[].options[].extend | string | - | - | 子选项的扩展说明 | -
>> selections[].options[].key | string | - | - | 当前子选项的唯一标识 | -
>> selections[].options[].defaultValue | string | - | - | 当前子选项的默认值，多个选项需要用`,`分隔开 | -
>> selections[].options[].label | string | - | - | 子选项的标签；仅支持&nbsp;`multi`&nbsp;类型 | -
>> selections[].options[].noSpread | boolean | - | - | 子选项大于3个是否不需要展开收起，默认为&nbsp;false | -
>> selections[].options[].type | string | 'radio' | - | 子选项的类型；仅支持&nbsp;`multi`&nbsp;类型：`radio`（单选框）、`checkbox`（多选框）、`rangeInput`（范围输入框） | -
>> selections[].options[].forceCheck | boolean | - | - | 是否不论单选多选都强制使用箭头选中样式；这里的背景是，单选和多选的标签样式，其实单选是不带右下角箭头的，多选是带的，但这里需求需要单选样式也带箭头，所以会有这个属性，强行让单选也变成有箭头 | -
>> selections[].options[].size | boolean | large | - | 设置多选按钮的大小：'large'&nbsp;大按钮，'normal'&nbsp;正常按钮 | -
>> selections[].options[].icon | string | - | - | 第二级选项的图标，仅支持&nbsp;`multi`&nbsp;类型 | -
>> selections[].options[].options | Array | - | - | 子选项的子选项们，与`selections[].options`完全一致，仅支持&nbsp;`list`&nbsp;类型，多级级联时使用 | -
>> selections[].options[].input | object | - | - | 输入框配置；仅支持&nbsp;`multi`&nbsp;类型，`rangeInput`（范围输入框） | -
>> selections[].options[].input.unit | string | - | - | 输入框单位；仅支持&nbsp;`multi`&nbsp;类型，`rangeInput`（范围输入框） | -
>> selections[].options[].input.min | object | - | - | 最小值配置；仅支持&nbsp;`multi`&nbsp;类型，`rangeInput`（范围输入框） | -
>> selections[].options[].input.min.placeholder | string | - | - | 最小值&nbsp;placeholder；仅支持&nbsp;`multi`&nbsp;类型，`rangeInput`（范围输入框） | -
>> selections[].options[].input.max | object | - | - | 最大值配置；仅支持&nbsp;`multi`&nbsp;类型，`rangeInput`（范围输入框） | -
>> selections[].options[].input.max.placeholder | string | - | - | 最大值&nbsp;placeholder；仅支持&nbsp;`multi`&nbsp;类型，`rangeInput`（范围输入框） | -
>> selections[].options[].input.errorTips | string | '错误提示' | - | 输入错误提示信息；仅支持&nbsp;`multi`&nbsp;类型，`rangeInput`（范围输入框） | -
multiOpts | object | {"maxHeight":0.7} | 可选 | 复合类型的配置 | -
>> multiOpts.maxHeight | string | '0.7' | - | 复合类型弹层屏幕高度占比 | -
rowTile | boolean | true | 可选 | 是否是通栏 | -
stopScrollThrough | boolean | true | 可选 | 是否阻止滚动穿透；如果在结果页里使用，则建议不阻止 | -
showMask | boolean | true | 可选 | 是否显示蒙层；如果在结果页里使用，则建议不显示 | -
zIndex | number \| string | - | 可选 | 组件的`z-index`层级 | -
primaryColor | string | - | 可选 | 主颜色 | -

#### FilterFrame

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
options | array | - | 可选 | - | -
zIndex | number \| string | 1 | 可选 | 组件的`z-index`层级 | -
rowTile | boolean | true | 可选 | 是否是通栏 | -
horizontalTransition | boolean | false | 可选 | 水平切换动效开关 | -
opacityTransition | boolean | false | 可选 | 透明度动效开关 | -
transitionOpts | object | {"downTransition":"all .3s cubic-bezier(0.42, 0, 0.52, 1)","upTransition":"all .16s cubic-bezier(0.46, 0, 1, 1)","heightTransition":"height .3s cubic-bezier(0.4, 0.0, 0.2, 1)","horizontalTransition":"left .24s cubic-bezier(.18,.74,.78,.96),opacity .5s cubic-bezier(.18,0,.26,1)","opacityTransition":"opacity .08s cubic-bezier(0,0,1,1)"} | 可选 | 动效配置 | -
backgroundColor | string | #fff | 可选 | 背景颜色 | -
stopScrollThrough | boolean | true | 可选 | 是否阻止滚动穿透；如果在结果页里使用，则不建议阻止 | -
showMask | boolean | true | 可选 | 是否显示蒙层；如果在结果页里使用，则建议不显示 | -
primaryColor | string | - | 可选 | 主颜色 | -

### Slots



名称 | 描述
--- | ---
tagLayout | 标签栏右侧的自定义区域
'custom' + selectionIndex | -

#### FilterFrame

名称 | 描述
--- | ---
tagLayout | -
default | 筛选浮层内容，顺序排列

### Events


- **spreadtagsitemclick**: 复合类型，二级项点击

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件参数
  ${param1}.option | object | 点击的一级选项
  ${param1}.optionIndex | number | 点击的一级选项的索引
  ${param1}.section | object | 当前筛选项的实例
  ${param1}.tagItem | object | 点击的二级选项

- **cascaderitemclick**: 级联类型项点击

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件参数
  ${param1}.item | object | 点击的级联项
  ${param1}.section | object | 当前筛选项

- **maskclick**: 蒙层阴影点击

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件参数
  ${param1}.selectedIndex | number | 选中项的索引

- **taglayoutclick**: 上方标签项点击

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件参数
  ${param1}.direction | string | 方向
  ${param1}.lastSelectedIndex | number | 上一次被选中的索引
  ${param1}.option | object | 被选中的选项
  ${param1}.selectedIndex | number | 选中项的索引
  ${param1}.selection | object | 当前筛选项的实例
  ${param1}.type | string | 筛选项类型


#### FilterFrame


- **maskclick**: 蒙层阴影点击

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件参数
  ${param1}.selectedIndex | number | 选中项的索引

- **taglayoutclick**: 上方标签项点击

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件参数
  ${param1}.direction | string | 方向
  ${param1}.lastSelectedIndex | number | 上一次被选中的索引
  ${param1}.option | object | 被选中的选项
  ${param1}.selectedIndex | number | 选中项的索引
  ${param1}.selection | object | 当前筛选项的实例
  ${param1}.type | string | 筛选项类型


### Methods


- **init**: 初始化，可在主动修改数据时主动调用该方法

名称 | 类型 | 描述
--- | --- | ---
selections | Array | 筛选数据


#### FilterFrame


- **setHeight**: 设置内容高度，带动效

名称 | 类型 | 描述
--- | --- | ---
height | number | 高度

- **close**: 主动关闭蒙层
	无参数

