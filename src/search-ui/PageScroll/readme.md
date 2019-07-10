---
name: PageScroll
title: 翻页横滑
category: 交互类
owner: 姚昌
---

## 使用场景

> 参考UE规范：[D13【基础组件】-【翻页】](http://soy.baidu-int.com:8905/static/specification/ue-guide/PageScroll.html)

## 示例

```atom 翻页横滑，并实现翻页的控制
<template>
    <c-aladdin 
        touchable
        title="整卡可点的 Aladdin 卡"
        show-right-url="http://www.baidu.com" 
        show-right-text="跳转百度" 
    >
        <c-page-scroll 
            class="c-row-tile c-gap-top-large c-gap-bottom" 
            :page="page" 
            @scrollend="onChange">
            <c-page-scroll-item a-for="i in math_ceil(length / cols)" >
                <c-row>
                    <c-span 
                        col="3" 
                        a-for="(j,index) in cols" 
                        a-if="list[(i-1)*cols + (j-1)]"
                        >
                        {{ list[index].title }}
                    </c-span>
                    <c-span col="3" a-else></c-span>
                </c-row>
                <c-divider/>
            </c-page-scroll-item>
        </c-page-scroll>
        <c-row>
            <c-btn 
                @click="page = 3" 
                text="跳转到第四页" 
            />
        </c-row>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-divider': 'search-ui/Divider/Divider',
            'c-span': 'search-ui/Row/Span',
            'c-page-scroll-item': 'search-ui/PageScroll/PageScrollItem',
            'c-page-scroll': 'search-ui/PageScroll/PageScroll',
            'c-btn': 'search-ui/Button/Button'
        },
        data: {
            cols: 4,
            list: [
                {
                    title: '双卡双待',
                }, {
                    title: '人蜡像馆！',
                }, {
                    title: '北京+故宫',
                }, {
                    title: '北京5日4日游',
                }, {
                    title: '北京5日4国子监',
                }, {
                    title: '人蜡像馆！',
                }, {
                    title: '北京+故宫',
                }, {
                    title: '北京5日4日游',
                }, {
                    title: '北京5日4国子监',
                }, {
                    title: '北京5日4国子监',
                }, {
                    title: '北京5日4国子监',
                }, {
                    title: '北京5日4国子监',
                }, {
                    title: '北京5日4国子监',
                }, {
                    title: '北京5日4国子监',
                }
            ],
            length: 14,
            page: 0
        }
    }
</config>

<script>
export default {
    methods: {
        onChange(page) {
            this.page = page;
        }
    }
};
</script>
```

```atom 隐藏翻页指示器 indicator, 不屏蔽整卡点击态
<template>
    <c-aladdin 
        touchable
        title="整卡可点的 Aladdin 卡"
        show-right-url="http://www.baidu.com" 
        show-right-text="跳转百度" 
    >
    <c-page-scroll 
        class="c-row-tile c-gap-top-large c-gap-bottom" 
        :indicator="false"
        :contentTouchableStop="false"
    >
        <c-page-scroll-item a-for="i in math_ceil(length / cols)" >
            <c-row>
                <c-span 
                    col="3" 
                    a-for="(j, index) in cols" 
                    a-if="list[(i - 1) * cols + (j - 1)]"
                >
                    <c-line align="center">{{ list[index].title }}</c-line>
                </c-span>
                <c-span col="3" a-else></c-span>
            </c-row>
        <c-divider />
        </c-page-scroll-item>
    </c-page-scroll>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-divider': 'search-ui/Divider/Divider',
            'c-line': 'search-ui/Line/Line',
            'c-span': 'search-ui/Row/Span',
            'c-page-scroll-item': 'search-ui/PageScroll/PageScrollItem',
            'c-page-scroll': 'search-ui/PageScroll/PageScroll'
        },
        data: {
            cols: 3,
            list: [
                {
                    title: '双卡双待',
                }, {
                    title: '人蜡像馆！',
                }, {
                    title: '北京+故宫',
                }, {
                    title: '北京5日4日游',
                }, {
                    title: '北京5日4国子监',
                }, {
                    title: '人蜡像馆！',
                }
            ],
            length: 6
        }
    }
</config>
```

``` atom Tabs 中嵌套 PageScroll
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tabs 
            :selected="0" 
            @change="changeTab"
        >
        <c-tabs-item 
            a-for="(tab, index) in tabs" 
            :tid="index" 
            :label="tab.label"
        >
        <c-page-scroll 
            class="c-row-tile c-gap-top-large c-gap-bottom" 
            :isShow="index === tabSelected ? true : false"
        >
            <c-page-scroll-item a-for="i in math_ceil(length / cols)" >
            <c-row>
                <c-span 
                    col="3" 
                    a-for="(j, index) in cols" 
                    a-if="list[(i - 1) * cols + (j - 1)]"
                >
                    <c-line align="center">{{ list[index].title }}</c-line>
                </c-span>
                <c-span col="3" a-else></c-span>
            </c-row>
            <c-divider />
            </c-page-scroll-item>
        </c-page-scroll>
        </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            rows: 3,
            tabSelected: 0,
            tabs: [
                {
                    label: 'Tab 1',
                    content: '这里是推荐新闻1111',
                    icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
                },
                {
                    label: 'Tab 2',
                    content: '这里是推荐新闻22222'
                },
                {
                    label: 'Tab 3',
                    content: '这里是推荐新闻3333'
                }
            ],
            cols: 3,
            list: [
                {
                    title: '双卡双待',
                }, {
                    title: '人蜡像馆！',
                }, {
                    title: '北京+故宫',
                }, {
                    title: '北京5日4日游',
                }, {
                    title: '北京5日4国子监',
                }, {
                    title: '人蜡像馆！',
                }
            ],
            length: 6
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-divider': 'search-ui/Divider/Divider',
            'c-page-scroll': 'search-ui/PageScroll/PageScroll',
            'c-page-scroll-item': 'search-ui/PageScroll/PageScrollItem',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem',
            'c-row': 'search-ui/Row/Row',
            'c-line': 'search-ui/Line/Line',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        mounted() {
        },
        methods: {
            changeTab(index) {
                var self = this;
                this.tabSelected = index;
                this.list.forEach(function (value) {
                    value.title += self.tabSelected + 1;
                });
            }
        }
    };
</script>
```

```atom 示例
<template>
    <c-aladdin touchable
        title="读书的名人名言_百度汉语"
        show-left-text="百度汉语"
        show-right-url="//www.baidu.com">
        <c-page-scroll>
            <c-page-scroll-item
                a-for="(pageItem, pageIndex) in math_ceil(list.length / rowNum)"
                :key="pageIndex">
                <template
                    a-for="(item, index) in list">
                    <c-link
                        a-if="index >= pageIndex * rowNum && index < (pageIndex + 1) * rowNum"
                        :key="index"
                        url="http://www.baidu.com"
                    >
                        <c-row
                            class="c-gap-top">
                            <c-span>
                                {{item.text}}
                            </c-span>
                        </c-row>
                        <c-row>
                            <c-span
                                class="c-color-gray c-line-bottom c-gap-inner-bottom">
                                --{{item.author}}
                            </c-span>
                        </c-row>
                    </c-link>
                </template>
            </c-page-scroll-item>
        </c-page-scroll>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            // 每行显示3条
            rowNum: 3,
            list: [
                {
                    text: '读书不是为了雄辩和驳斥，也不是为了轻信和盲从，而是为了思考和权衡。',
                    author: '培根'
                },
                {
                    text: '读书补天然之不足，经验又补读书之不足。',
                    author: '培根'
                },
                {
                    text: '腹有诗书气自华，读书万卷始通神。',
                    author: '苏轼'
                },
                {
                    text: '读书使人充实，思考使人深邃，交谈使人清醒。',
                    author: '富兰克林'
                },
                {
                    text: '光明给我们经验，读书给我们知识。',
                    author: '奥斯特洛夫斯基'
                },
                {
                    text: '要么旅行，要么读书，身体和灵魂必须有一个在路上。',
                    author: '张小现'
                },
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-divider': 'search-ui/Divider/Divider',
            'c-page-scroll': 'search-ui/PageScroll/PageScroll',
            'c-page-scroll-item': 'search-ui/PageScroll/PageScrollItem',
            'c-row': 'search-ui/Row/Row',
            'c-line': 'search-ui/Line/Line',
            'c-span': 'search-ui/Row/Span',
            'c-link': 'search-ui/Link/Link'
        }
    }
</script>

<script>
    export default {
        methods: {
            changeTab(index) {
                const self = this;
                this.tabSelected = index;
                this.list.forEach(function (value) {
                    value.title += self.tabSelected + 1;
                });
            }
        }
    };
</script>
```

## API

### Props

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| momentum | boolean | false | 滑动势能开关 |
| page | number | 0 | 页码 |
| indicator | boolean | true | 是否显示翻页指示器 |
| isShow | boolean | true | 当前 PageScroll 组件是否被隐藏，默认为 true 表示不被隐藏。当 PageScroll 由隐藏状态变为展示状态时，会触发 IScroll 的 refresh 方法，重新初始化变量。适用于 PageScroll 被嵌套在 Tab 中等情况。 |
| contentTouchableStop | boolean | true | 否 | content 是否屏蔽整卡点击态 |
| overflow | string | 'hidden' | 否 | PageScroll 的 overflow 属性 |

### Slots

| 名称 | 描述 |
| --- |   --- |
| default | 选项卡容器，只能是多个 `c-page-scroll-item` |

### Event

| 名称 | 描述 |
| --- |   --- |
| scrollend | 翻页事件 |
