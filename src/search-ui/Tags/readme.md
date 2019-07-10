---
name: Tags
title: 标签
category: 导航类
owner: 姚昌
---

## 使用场景

> 请参考UE规范：[D11【基础组件】-【Tag】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Tags.html)

## 示例

### 标签组件

```atom 标签页组件
<template>
<div>
    <c-aladdin touchable title="整卡可点的 aladdin 卡">
        <div>tags</div>
        <c-tags
            :label-list="list"
            :selected-index="-1"
            a-on:change="select"
        >
        </c-tags>
    </c-aladdin>

    <c-aladdin>
        <div> 滑动tag </div>
        <c-tags
            :label-list="list"
            :selected-index="selected"
            :allow-scroll="true"
            a-on:change="select"
            a-on:toggle="toggle"
            @scrollEnd="scrollEnd"
        >
        </c-tags>
        <div>无下拉箭头</div>
        <c-tags
            :label-list="list"
            :selected-index="selected"
            :allow-scroll="true"
            :is-expand="false"
            a-on:change="select"
            a-on:toggle="toggle"
        >
        </c-tags>
        <div>自定义上下间距</div>
        <c-tags
            :label-list="list"
            :selected-index="selected"
            :allow-scroll="true"
            :gap="{top: '.30rem', bottom: '.3rem'}"
            a-on:change="select"
            a-on:toggle="toggle"
        >
        </c-tags>
        <div>自定义下拉菜单内容</div>
        <c-tags
            :label-list="list"
            :selected-index="selected"
            :allow-scroll="true"
            @change="select"
            @toggle="toggle"
            ref="tags"
        >
            <div style="background: #fff; padding: 0.17rem">
                自定义内容区域
                <br>
                可以给对应 tag 组件一个 ref，使用 this.$refs[refname].toggleChange(index) 实现切换选项卡
            </div>
        </c-tags>
    </c-aladdin>
</div>
</template>

<script type="config">
    {
        props: [
            'url', 'title'
        ],
        data: {
            list: [
                {
                    name: '澳大利亚',
                    type: 'default'
                },
                {
                    name: '中国',
                    type: 'negative'
                },
                {
                    name: '法兰西',
                    type: 'default'
                },
                {
                    name: '印度尼西亚今天天气不错',
                    type: 'negative'
                },
                {
                    name: '俄罗斯',
                    type: 'negative'
                }
            ],
            selected: 2
        },
        components: {
            'c-tags': 'search-ui/Tags/Tags',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            select: function (index) {
                console.log('select', index);
            },
            toggle: function (value) {
                console.log(value);
            },
            scrollEnd() {
                console.log('search-ui scrollEnd');
            }
        }
    }
</script>
```

```atom 点击跳转
<template>
    <c-aladdin>
        <c-tags
            :label-list="list"
            @change="select"
        >
        </c-tags>
        <c-tags
            :label-list="list"
            disable-event
            @change="select"
        >
        </c-tags>
        <c-tags
            :label-list="list"
            allow-scroll
            @change="select"
        >
        </c-tags>
        <c-tags
            :label-list="list"
            :is-expand="false"
            allow-scroll
            disable-event
            @change="select"
        >
        </c-tags>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        list: [
            {
                name: '澳大利亚',
                type: 'default',
                tagParams: {
                    type: 'tc',
                    tcUrl: 'http://m.baidu.com'
                }
            },
            {
                name: '中国',
                type: 'negative',
                tagUrl: 'http://m.baidu.com'
            },
            {
                name: '法兰西',
                type: 'default',
                tagUrl: 'http://m.baidu.com'
            },
            {
                name: '印度尼西亚今天天气不错',
                type: 'negative',
                tagUrl: 'http://m.baidu.com'
            },
            {
                name: '俄罗斯',
                type: 'negative',
                tagUrl: 'http://m.baidu.com'
            }
        ],
        selected: 2
    },
    components: {
        'c-tags': 'search-ui/Tags/Tags',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
module.exports = {
    methods: {
        select: function (index) {
            console.log(index);
        },
        toggle: function (value) {
            console.log(value);
        }
    }
}
</script>
```

```atom 配合标签（Tags）组件；内容区增加点击态
<template>
    <c-aladdin
        title="测试卡片"
        touchable
        show-right-url="http://www.baidu.com"
        show-right-text="右侧文案"
        show-left-text="左侧文案"
    >
        <c-tags
            :label-list="tagsList"
            @change="handleTagsChange"
        />
        <c-content
            :selected-index="selectedIndex"
            :horizontal-transition="false"
        >
            <div a-for="(tagsItem, index) in tagsList" :key="index">
                <div
                    a-for="(item, idx) in tagsItem.list"
                    :key="idx"
                    class="c-line-bottom"
                >
                    <c-touchable-feedback
                        :left="-.17"
                        :right="-.17"
                    >
                        <div
                            class="c-gap-inner-top c-gap-inner-bottom"
                        >
                            <div class="c-color-link" clamp="1">
                                {{ item.text }}
                            </div>
                        </div>
                    </c-touchable-feedback>
                </div>
            </div>
        </c-content>
        <div class="c-gap-top-small"/>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        tagsList: [
            {
                name: '第一个',
                list: [
                    {
                        text: 11111111
                    },
                    {
                        text: 22222222
                    },
                    {
                        text: 33333333
                    }
                ]
            },
            {
                name: '第二个',
                list: [
                    {
                        text: 4444444
                    },
                    {
                        text: 5555555
                    }
                ]
            },
            {
                name: '第三个',
                list: [
                    {
                        text: 666666
                    },
                    {
                        text: 777777
                    },
                    {
                        text: 888888
                    }
                ]
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tags': 'search-ui/Tags/Tags',
        'c-content': 'search-ui/Content/Content',
        'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback'
    }
}
</script>

<script>
export default {
    methods: {
        handleTagsChange(obj) {
            console.log(obj);
            this.selectedIndex = obj.current;
        }
    }
};
</script>
```

### 展开收起配合标签 SpreadTags

```atom SpreadTags 单选
<template>
    <c-aladdin>
        <c-spread-tags
            :label="label"
            :default-value="defaultValue"
            :options="options"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        "noSpread": "true",
        "label": "超级英雄",
        "type": "radio",
        "defaultValue": "钢铁侠",
        "key": "avenger",
        "options": [
            {
                "text": "钢铁侠",
                "value": "钢铁侠",
                "icon": "baidu"
            }, {
                "text": "雷神",
                "value": "雷神"
            }, {
                "text": "美国队长",
                "value": "美国队长"
            }, {
                "text": "黑寡妇",
                "value": "黑寡妇"
            }, {
                "text": "鹰眼",
                "value": "鹰眼"
            }, {
                "text": "绯红女巫",
                "value": "绯红女巫"
            }, {
                "text": "幻视",
                "value": "幻视"
            }, {
                "text": "冬日战士",
                "value": "冬日战士"
            }, {
                "text": "黑豹",
                "value": "黑豹"
            }, {
                "text": "奇异博士",
                "value": "奇异博士"
            }, {
                "text": "绿巨人",
                "value": "绿巨人"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-spread-tags': 'search-ui/Tags/SpreadTags'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

```atom SpreadTags 多选
<template>
    <c-aladdin>
        <c-spread-tags
            :label="label"
            :options="options"
            :default-value="defaultValue"
            type="checkbox"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        "noSpread": "true",
        "label": "超级英雄",
        "type": "radio",
        "defaultValue": "钢铁侠, 雷神",
        "key": "avenger",
        "options": [
            {
                "text": "钢铁侠",
                "value": "钢铁侠"
            }, {
                "text": "雷神",
                "value": "雷神"
            }, {
                "text": "美国队长",
                "value": "美国队长"
            }, {
                "text": "黑寡妇",
                "value": "黑寡妇"
            }, {
                "text": "鹰眼",
                "value": "鹰眼"
            }, {
                "text": "绯红女巫",
                "value": "绯红女巫"
            }, {
                "text": "幻视",
                "value": "幻视"
            }, {
                "text": "冬日战士",
                "value": "冬日战士"
            }, {
                "text": "黑豹",
                "value": "黑豹"
            }, {
                "text": "奇异博士",
                "value": "奇异博士"
            }, {
                "text": "绿巨人",
                "value": "绿巨人"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-spread-tags': 'search-ui/Tags/SpreadTags'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

```atom SpreadTags 使用 size 控制大小
<template>
    <c-aladdin>
        <c-spread-tags
            :label="label"
            :options="options"
            :default-value="defaultValue"
            size="normal"
            type="checkbox"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        "noSpread": "true",
        "label": "超级英雄",
        "type": "radio",
        "defaultValue": "钢铁侠, 雷神",
        "key": "avenger",
        "options": [
            {
                "text": "钢铁侠",
                "value": "钢铁侠"
            }, {
                "text": "雷神",
                "value": "雷神"
            }, {
                "text": "美国队长",
                "value": "美国队长"
            }, {
                "text": "黑寡妇",
                "value": "黑寡妇"
            }, {
                "text": "鹰眼",
                "value": "鹰眼"
            }, {
                "text": "绯红女巫",
                "value": "绯红女巫"
            }, {
                "text": "幻视",
                "value": "幻视"
            }, {
                "text": "冬日战士",
                "value": "冬日战士"
            }, {
                "text": "黑豹",
                "value": "黑豹"
            }, {
                "text": "奇异博士",
                "value": "奇异博士"
            }, {
                "text": "绿巨人",
                "value": "绿巨人"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-spread-tags': 'search-ui/Tags/SpreadTags'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

```atom SpreadTags 设置颜色
<template>
    <c-aladdin>
        <c-spread-tags
            :label="label"
            :options="options"
            :default-value="defaultValue"
            type="checkbox"
            primary-color="#01b7c9"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        "noSpread": "true",
        "label": "超级英雄",
        "type": "radio",
        "defaultValue": "钢铁侠, 雷神",
        "key": "avenger",
        "options": [
            {
                "text": "钢铁侠",
                "value": "钢铁侠"
            }, {
                "text": "雷神",
                "value": "雷神"
            }, {
                "text": "美国队长",
                "value": "美国队长"
            }, {
                "text": "黑寡妇",
                "value": "黑寡妇"
            }, {
                "text": "鹰眼",
                "value": "鹰眼"
            }, {
                "text": "绯红女巫",
                "value": "绯红女巫"
            }, {
                "text": "幻视",
                "value": "幻视"
            }, {
                "text": "冬日战士",
                "value": "冬日战士"
            }, {
                "text": "黑豹",
                "value": "黑豹"
            }, {
                "text": "奇异博士",
                "value": "奇异博士"
            }, {
                "text": "绿巨人",
                "value": "绿巨人"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-spread-tags': 'search-ui/Tags/SpreadTags'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

```atom SpreadTags 单选；强制加对勾样式
<template>
    <c-aladdin>
        <c-spread-tags
            :label="label"
            :default-value="defaultValue"
            :options="options"
            force-check
            @itemclick="handleSpreadTagsItemClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        "noSpread": "true",
        "label": "超级英雄",
        "type": "radio",
        "defaultValue": "钢铁侠",
        "key": "avenger",
        "options": [
            {
                "text": "钢铁侠",
                "value": "钢铁侠"
            }, {
                "text": "雷神",
                "value": "雷神"
            }, {
                "text": "美国队长",
                "value": "美国队长"
            }, {
                "text": "黑寡妇",
                "value": "黑寡妇"
            }, {
                "text": "鹰眼",
                "value": "鹰眼"
            }, {
                "text": "绯红女巫",
                "value": "绯红女巫"
            }, {
                "text": "幻视",
                "value": "幻视"
            }, {
                "text": "冬日战士",
                "value": "冬日战士"
            }, {
                "text": "黑豹",
                "value": "黑豹"
            }, {
                "text": "奇异博士",
                "value": "奇异博士"
            }, {
                "text": "绿巨人",
                "value": "绿巨人"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-spread-tags': 'search-ui/Tags/SpreadTags'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
        handleSpreadTagsItemClick(obj) {
            console.log('handleSpreadTagsItemClick', obj);
        }
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

```atom SpreadTags 默认展开
<template>
    <c-aladdin>
        <c-spread-tags
            :label="label"
            :options="options"
            :spread-opts="{
                show: true,
                spread: true
            }"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        "noSpread": "true",
        "label": "超级英雄",
        "type": "radio",
        "defaultValue": "钢铁侠",
        "key": "avenger",
        "options": [
            {
                "text": "钢铁侠",
                "value": "钢铁侠"
            }, {
                "text": "雷神",
                "value": "雷神"
            }, {
                "text": "美国队长",
                "value": "美国队长"
            }, {
                "text": "黑寡妇",
                "value": "黑寡妇"
            }, {
                "text": "鹰眼",
                "value": "鹰眼"
            }, {
                "text": "绯红女巫",
                "value": "绯红女巫"
            }, {
                "text": "幻视",
                "value": "幻视"
            }, {
                "text": "冬日战士",
                "value": "冬日战士"
            }, {
                "text": "黑豹",
                "value": "黑豹"
            }, {
                "text": "奇异博士",
                "value": "奇异博士"
            }, {
                "text": "绿巨人",
                "value": "绿巨人"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-spread-tags': 'search-ui/Tags/SpreadTags'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

```atom SpreadTags 显示标签，不显示展开收起
<template>
    <c-aladdin>
        <c-spread-tags
            :label="label"
            :options="options"
            :spread-opts="{
                show: false,
                spread: true
            }"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        "noSpread": "true",
        "label": "超级英雄",
        "type": "radio",
        "defaultValue": "钢铁侠",
        "key": "avenger",
        "options": [
            {
                "text": "钢铁侠",
                "value": "钢铁侠"
            }, {
                "text": "雷神",
                "value": "雷神"
            }, {
                "text": "美国队长",
                "value": "美国队长"
            }, {
                "text": "黑寡妇",
                "value": "黑寡妇"
            }, {
                "text": "鹰眼",
                "value": "鹰眼"
            }, {
                "text": "绯红女巫",
                "value": "绯红女巫"
            }, {
                "text": "幻视",
                "value": "幻视"
            }, {
                "text": "冬日战士",
                "value": "冬日战士"
            }, {
                "text": "黑豹",
                "value": "黑豹"
            }, {
                "text": "奇异博士",
                "value": "奇异博士"
            }, {
                "text": "绿巨人",
                "value": "绿巨人"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-spread-tags': 'search-ui/Tags/SpreadTags'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

```atom SpreadTags 不显示标签，不显示展开收起
<template>
    <c-aladdin>
        <c-spread-tags
            :options="options"
            :spread-opts="{
                show: false,
                spread: true
            }"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        "noSpread": "true",
        "type": "radio",
        "defaultValue": "钢铁侠",
        "key": "avenger",
        "options": [
            {
                "text": "钢铁侠",
                "value": "钢铁侠"
            }, {
                "text": "雷神",
                "value": "雷神"
            }, {
                "text": "美国队长",
                "value": "美国队长"
            }, {
                "text": "黑寡妇",
                "value": "黑寡妇"
            }, {
                "text": "鹰眼",
                "value": "鹰眼"
            }, {
                "text": "绯红女巫",
                "value": "绯红女巫"
            }, {
                "text": "幻视",
                "value": "幻视"
            }, {
                "text": "冬日战士",
                "value": "冬日战士"
            }, {
                "text": "黑豹",
                "value": "黑豹"
            }, {
                "text": "奇异博士",
                "value": "奇异博士"
            }, {
                "text": "绿巨人",
                "value": "绿巨人"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-spread-tags': 'search-ui/Tags/SpreadTags'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

### 标签项 TagItem

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

```atom 标签项 TagItem
<template>
    <c-aladdin>
        <div class="c-gap-inner-top-small c-gap-inner-bottom-small">
            标签
        </div>
        <c-row>
            <c-span>
                <c-tag-item
                    negative
                    text="负向未选中负向未选中负向未选中负向未选中负向未选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    text="未选中未选中未选中未选中未选中未选中未选中未选中未选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    selected
                    text="单选选中单选选中单选选中单选选中单选选中单选选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    selected
                    type="checkbox"
                    text="多选选中多选选中多选选中多选选中多选选中多选选中"
                />
            </c-span>
        </c-row>
        <div class="c-gap-inner-top-small c-gap-inner-bottom-small">
            大号
        </div>
        <c-row>
            <c-span>
                <c-tag-item
                    negative
                    size="large"
                    text="负向未选中负向未选中负向未选中负向未选中负向未选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    size="large"
                    text="未选中未选中未选中未选中未选中未选中未选中未选中未选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    selected
                    size="large"
                    text="单选选中单选选中单选选中单选选中单选选中单选选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    selected
                    type="checkbox"
                    size="large"
                    text="多选选中多选选中多选选中多选选中多选选中多选选中"
                />
            </c-span>
        </c-row>
        <div class="c-gap-inner-top-small c-gap-inner-bottom-small">
            大号灰色主题
        </div>
        <c-row>
            <c-span>
                <c-tag-item
                    negative
                    theme="gray"
                    size="large"
                    text="负向未选中负向未选中负向未选中负向未选中负向未选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    theme="gray"
                    size="large"
                    text="未选中未选中未选中未选中未选中未选中未选中未选中未选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    selected
                    theme="gray"
                    size="large"
                    text="单选选中单选选中单选选中单选选中单选选中单选选中"
                />
            </c-span>
            <c-span>
                <c-tag-item
                    selected
                    theme="gray"
                    type="checkbox"
                    size="large"
                    text="多选选中多选选中多选选中多选选中多选选中多选选中"
                />
            </c-span>
        </c-row>
        <div class="c-gap-inner-top-small c-gap-inner-bottom-small">
            自适应
        </div>
        <div>
            <c-tag-item
                auto
                negative
                text="负向未选中"
            />
            <c-tag-item
                auto
                text="未选中"
                class="c-gap-left-middle"
            />
            <c-tag-item
                auto
                selected
                text="单选选中"
                class="c-gap-left-middle"
            />
            <c-tag-item
                auto
                selected
                type="checkbox"
                text="多选选中"
                class="c-gap-left-middle"
            />
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-tag-item': 'search-ui/Tags/TagItem',
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```



## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
labelList | array | - | 必选 | 数据数组 | -
>> labelList[].name | string | - | - | 标签名 | -
>> labelList[].type | string | 'default' | - | 标签类型；'default'&nbsp;默认类型；'negative'&nbsp;消极 | -
>> labelList[].tagUrl | string | - | - | 链接；这个加&nbsp;tag&nbsp;前缀是为了保证线上稳定 | -
>> labelList[].tagParams | object | - | - | 链接参数；这个加&nbsp;tag&nbsp;前缀是为了保证线上稳定 | -
selectedIndex | number | 0 | 可选 | 选中的标签索引 | -
allowScroll | boolean | false | 可选 | 是否允许tags滑动 | -
toggleLabel | string | 请选择分类 | 可选 | 下拉显示后的引导文字 | -
isExpand | boolean | true | 可选 | 是否有下拉箭头，是否可展开 | -
gap | object | {"top":".1rem","bottom":".1rem"} | 可选 | 上下间隙大小 | -
disableEvent | boolean | false | 可选 | 是否触发点击事件改选定选项 | -

#### SpreadTags

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
label | string | - | 可选 | 标签 | -
type | string | radio | 可选 | 类型；'radio'&nbsp;单选；'checkbox'&nbsp;多选 | -
defaultValue | string | - | 可选 | 默认值；多个值请使用&nbsp;','&nbsp;区分，如：'选项1,选项2' | -
spreadOpts | object | {"show":true,"spread":false,"threshold":1} | 可选 | 展开收起配置 | -
col | number | 4 | 可选 | 单项所占栅格数 | -
size | string | large | 可选 | 大小；'normal'&nbsp;正常；'large'&nbsp;大号 | -
theme | string | gray | 可选 | 主题；'normal'&nbsp;正常；'gray'&nbsp;灰色主题 | -
options | array | [] | 可选 | 范围输入的预置选项 | -
>> options[].text | string | - | - | 选项的文案 | -
>> options[].value | string | - | - | 选项的值 | -
>> options[].icon | string | - | - | 选项的图标 | -
forceCheck | boolean | false | 可选 | 是否强制显示对勾的样式 | -
marginInner | string |  | 可选 | 内部&nbsp;margin，为了解决在某些&nbsp;Android&nbsp;浏览器上边线消失的问题 | -
ins | object | - | 可选 | 外部实例；外部传入的实例，在部分场景下，需要把&nbsp;vnode&nbsp;挂载到外部传入的实例上 | -
primaryColor | string | - | 可选 | 主颜色 | -

#### TagItem

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
text | string | - | 可选 | 文案 | -
icon | string |  | 可选 | 图标 | -
type | string | radio | 可选 | 类型；radio&nbsp;单选；checkbox&nbsp;多选 | -
theme | string | normal | 可选 | 主题；normal&nbsp;正常；gray&nbsp;灰色主题 | -
size | string | normal | 可选 | 大小；normal&nbsp;正常；large&nbsp;大号； | -
auto | boolean | false | 可选 | 是否自适应 | -
selected | boolean | false | 可选 | 是否被选中 | -
negative | boolean | false | 可选 | 是否是负向文字 | -
disable | boolean | false | 可选 | 是否禁用 | -
color | string | #000 | 可选 | 文字颜色 | -
borderColor | string | #eee | 可选 | 边框颜色 | -
selectedColor | string | #555 | 可选 | 选中颜色；选中颜色需要和文字颜色相同 | -
forceCheck | boolean | false | 可选 | 强制显示对勾；不论是&nbsp;radio&nbsp;还是&nbsp;checkbox，显示对勾就完事了 | -

#### TagsContent

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
selected | number \| string | 0 | 必选 | - | -
innerHeight | number | 0 | 可选 | - | -
loadingData | array | - | 可选 | - | -

#### TagsItem

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
label | string | - | 可选 | - | -
icon | string |  | 可选 | - | -
isLoading | boolean | false | 可选 | - | -
logContent | object | {} | 可选 | - | -
params | object | {} | 可选 | - | -

#### TagsWrapper

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
selected | number | 0 | 可选 | - | -
allowScroll | boolean | false | 可选 | - | -
bottom | boolean | false | 可选 | - | -
noContent | boolean | false | 可选 | - | -
tagLabelList | array | - | 可选 | - | -
isExpand | boolean | false | 可选 | - | -
innerHeight | number | 0 | 可选 | - | -
contentTouchableStop | boolean | true | 可选 | - | -

### Slots



名称 | 描述
--- | ---
default | 自定义下拉内容，可以给对应&nbsp;tag&nbsp;组件一个&nbsp;ref，使用&nbsp;this.$refs[refname].toggleChange(index)&nbsp;实现切换选项卡

#### SpreadTags

名称 | 描述
--- | ---
default | 默认&nbsp;slot

#### TagsContent

名称 | 描述
--- | ---
'__c__' + index | -

#### TagsItem

名称 | 描述
--- | ---
default | -

#### TagsWrapper

名称 | 描述
--- | ---
'__c__' + index | -

### Events


- **scrollEnd**: 当tags横划时触发，主要用于日志.
	无参数

- **toggle**: 当滑动tags展开关闭时触发.

名称 | 类型 | 描述
--- | --- | ---
${param1} | boolean | 为true是为展开，为false时为关闭

- **change**: 选项卡改变时触发.

名称 | 类型 | 描述
--- | --- | ---
${param1} | number | 选中的标签的索引
  ${param2} | string | 选中的标签的文字


#### SpreadTags


- **itemclick**: click event.

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 选项
  ${param1}.indexnumber | number | 选项的索引
  ${param1}.typestring | function | 选项的类型
  ${param1}.selectedArrarray | function | 选中项索引的数组
  ${param1}.valueArrarray | function | 选中项值的数组
  ${param1}.valueStrstring | function | 选中项值的字符串，以','分隔
  ${param1}.clickItemobject | function | 被点击的项

- **spreadchange**: 展开收起状态改变后触发的回调

名称 | 类型 | 描述
--- | --- | ---
spread | boolean | 是否展开
  type | string | 当前展开收起的类型
  height | number | 当前高度
  diffHeight | number | 相较于上一次变化的高度，主要用来配合外侧元素动态计算高度

- **spreadbtnclick**: 展开收起按钮点击事件

名称 | 类型 | 描述
--- | --- | ---
lastSpread | boolean | 上一次展开收起的状态，true&nbsp;展开，false&nbsp;收起



