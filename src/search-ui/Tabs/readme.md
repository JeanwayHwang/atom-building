---
name: Tabs
title: 选项卡
category: 导航类
owner: 姚昌
---

## 使用场景

> 请参考UE规范：[D10.1 【基础组件】-【Tab】-【一级Tab】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Tabs.html)


## 示例

```atom 选项卡

<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        普通：
        <c-tabs
            :selected="0"
            has-slide-animation
            @change="onChange">
            <c-tabs-item
                a-for="(tab, index) in tabs"
                :key="index"
                :label="tab.label"
                :log-content="{'key': 'value'}">
                <div ref="tabs">
                    {{ tab.content }}
                </div>
            </c-tabs-item>
        </c-tabs>
        <c-divider />
        没有上边距，content 不屏蔽整卡点击态：
        <c-tabs
            :selected="0"
            :contentTouchableStop="false"
            class="c-gap-top-zero"
            has-slide-animation>
            <c-tabs-item
                a-for="(tab, index) in tabs"
                :key="index"
                :label="tab.label">
                {{ tab.content }}
            </c-tabs-item>
        </c-tabs>
        <c-divider />
        横滑：
        <c-tabs
            :selected="0"
            :allow-scroll="allowScroll"
            has-slide-animation
            @onTabScrollEnd="onTabScrollEnd">
            <c-tabs-item
                a-for="(tab, index) in tabs2"
                :key="index"
                :label="tab.label">
                {{ tab.content }}
            </c-tabs-item>
        </c-tabs>
        <c-divider />
        底部：
        <c-tabs
            :selected="selected"
            bottom
            has-slide-animation>
            <c-tabs-item
                a-for="(tab, index) in tabs3"
                :key="index"
                :label="tab.label"
                :icon="tab.icon">
                {{ tab.content }}
            </c-tabs-item>
        </c-tabs>
        <c-divider />
        普调tab切换：
        <c-tabs :selected="selected4" has-slide-animation>
            <c-tabs-item
                a-for="(tab, index) in tabs"
                :key="index"
                :label="tab.label">
                {{ tab.content }}
            </c-tabs-item>
        </c-tabs>
        <c-divider />
        只有一个 Tab 时，可以设置是否显示 Tab 头部:
        <br>
        1) 默认显示
        <c-tabs :selected="selected4">
            <c-tabs-item
                a-for="(tab, index) in tabs4"
                :key="index"
                :label="tab.label">
                {{ tab.content }}
            </c-tabs-item>
        </c-tabs>
        <br>
        2）设置不显示
        <c-tabs :selected="selected4" hide-nav>
            <c-tabs-item
                a-for="(tab, index) in tabs4"
                :key="index"
                :label="tab.label">
                这个 Tab 组件只有内容，没有 Nav
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem',
            'c-divider': 'search-ui/Divider/Divider'
        },
        data: {
            tabs: [{
                label: 'Tab 1',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 2',
                content: '而天气现象则是指发生在大气中的各种自然现象，即某瞬时内大气中各种气象要素（如气温、气压、湿度、风、云、雾、雨、闪、雪、霜、雷、雹、霾等）空间分布的综合表现。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 3',
                content: '天气过程就是一定地区的天气现象随时间的变化过程。各种天气系统都具有一定的空间尺度和时间尺度，而且各种尺度系统间相互交织、相互作用。许多天气系统的组合，构成大范围的天气形势，构成半球甚至全球的大气环流。天气系统总是处在不断新生、发展和消亡过程中，在不同发展阶段有着其相对应的天气现象分布。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }],
            tabs2: [{
                label: 'Tab 1',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 2',
                content: '而天气现象则是指发生在大气中的各种自然现象，即某瞬时内大气中各种气象要素（如气温、气压、湿度、风、云、雾、雨、闪、雪、霜、雷、雹、霾等）空间分布的综合表现。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 3',
                content: '天气过程就是一定地区的天气现象随时间的变化过程。各种天气系统都具有一定的空间尺度和时间尺度，而且各种尺度系统间相互交织、相互作用。许多天气系统的组合，构成大范围的天气形势，构成半球甚至全球的大气环流。天气系统总是处在不断新生、发展和消亡过程中，在不同发展阶段有着其相对应的天气现象分布。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 4',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 5',
                content: '而天气现象则是指发生在大气中的各种自然现象，即某瞬时内大气中各种气象要素（如气温、气压、湿度、风、云、雾、雨、闪、雪、霜、雷、雹、霾等）空间分布的综合表现。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 6',
                content: '天气过程就是一定地区的天气现象随时间的变化过程。各种天气系统都具有一定的空间尺度和时间尺度，而且各种尺度系统间相互交织、相互作用。许多天气系统的组合，构成大范围的天气形势，构成半球甚至全球的大气环流。天气系统总是处在不断新生、发展和消亡过程中，在不同发展阶段有着其相对应的天气现象分布。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 7',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }],
            tabs3: [{
                label: '百度音乐',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: '网易云音乐',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: '酷狗音乐',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }],
            selected: 0,
            allowScroll: true,
            bottom: true,
            tabs4: [{
                label: 'Tab',
                content: '这里是内容',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }],
            selected4: 0
        }
    }
</script>

<script>
export default {
    methods: {
        onChange(newVal, oldVal) {
            console.log(newVal, oldVal);
        },
        onTabScrollEnd() {
            console.log('tab scroll end');
        }
    }
};
</script>
```

```atom 点击直接跳转

<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <div> 禁止点击事件，阻止更改选定项目</div>
        <c-tabs
            :selected="0"
            has-slide-animation
            disable-event
            a-on:change="loading">
            <c-tabs-item
                a-for="(tab, index) in tabList"
                :key="index"
                :label="tab.label"
                :log-content="tab.log"
                :params="tab.params"
            >
                {{tab.content}}
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>

</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem',
            'c-divider': 'search-ui/Divider/Divider'
        },
        data: {
            tabList: [{
                label: 'Tab 1',
                params: {
                    url: 'http://m.baidu.com/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                    linkOption: {
                        type: 'sf',
                        sfUrl: '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                        options: '{"view":{"_hold":2}}'
                    }

                },
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif',
            }, {
                label: 'Tab 2',
                content: '而天气现象则是指发生在大气中的各种自然现象，即某瞬时内大气中各种气象要素（如气温、气压、湿度、风、云、雾、雨、闪、雪、霜、雷、雹、霾等）空间分布的综合表现。',
                params: {
                    url: 'http://m.baidu.com/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                    linkOption: {
                        type: 'sf',
                        sfUrl: '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                        options: '{"view":{"_hold":2}}'
                    }

                }
            }, {
                label: 'Tab 3',
                params: {
                    url: 'http://m.baidu.com/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                    linkOption: {
                        type: 'sf',
                        sfUrl: '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                        options: '{"view":{"_hold":2}}'
                    }

                },
                content: '天气过程就是一定地区的天气现象随时间的变化过程。各种天气系统都具有一定的空间尺度和时间尺度，而且各种尺度系统间相互交织、相互作用。许多天气系统的组合，构成大范围的天气形势，构成半球甚至全球的大气环流。天气系统总是处在不断新生、发展和消亡过程中，在不同发展阶段有着其相对应的天气现象分布。',
            }, {
                label: 'Tab 4',
                params: {
                    url: 'http://m.baidu.com/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                    linkOption: {
                        type: 'sf',
                        sfUrl: '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                        options: '{"view":{"_hold":2}}'
                    }

                },
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif',
            }]
        }
    }
</script>
<script>
export default {
    methods: {
        loading(index) {
            setTimeout(() => {
                this.tabList[index].isLoading = false;
            }, 200);
        }
    }
}
</script>

```

```atom 异步加载示例，包含切换及高度变化过渡动画

<template>
    <c-aladdin touchable title="整卡可点的Aladdin卡">
        <c-tabs
            :selected="0"
            has-slide-animation
            a-on:change="loading">
            <c-tabs-item
                a-for="(tab, index) in tabList"
                :key="index"
                :label="tab.label"
                :log-content="tab.log"
                :isLoading="tab.isLoading">
                {{tab.content}}
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>

</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem'
        },
        data: {
            tabList: [{
                label: 'Tab 1',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif',
                isLoading: false
            }, {
                label: 'Tab 2',
                content: '而天气现象则是指发生在大气中的各种自然现象，即某瞬时内大气中各种气象要素（如气温、气压、湿度、风、云、雾、雨、闪、雪、霜、雷、雹、霾等）空间分布的综合表现。',
                isLoading: true
            }, {
                label: 'Tab 3',
                content: '天气过程就是一定地区的天气现象随时间的变化过程。各种天气系统都具有一定的空间尺度和时间尺度，而且各种尺度系统间相互交织、相互作用。许多天气系统的组合，构成大范围的天气形势，构成半球甚至全球的大气环流。天气系统总是处在不断新生、发展和消亡过程中，在不同发展阶段有着其相对应的天气现象分布。',
                isLoading: true
            }, {
                label: 'Tab 4',
                content: '简介：天气是指某一个地区距离地表较近的大气层在短时间内的具体状态。',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif',
                isLoading: true
            }]
        }
    }

</script>
<script>
export default {
    methods: {
        loading(index) {
            setTimeout(() => {
                this.tabList[index].isLoading = false;
            }, 2000);
        }
    }

}
</script>

```

```atom Tabs 中嵌套 Scroll 的示例
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        tab 内嵌套了横滑组件
        <c-tabs has-slide-animation>
            <c-tabs-item
                a-for="(tab, i) in tabs"
                :key="i"
                :label="tab.label">
                <c-scroll>
                    <c-scroll-item
                        a-for="(item, index) in tab.content"
                        :key="index"
                        :col="item.col"
                    >
                        <c-link :url="item.url">
                            <div :class="['c-img', i ? 'c-img-s' : 'c-img-y']">
                                <img :src="item.src" />
                            </div>
                            <div>
                                {{item.title}}
                            </div>
                        </c-link>
                    </c-scroll-item>
                </c-scroll>
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>

<script type="config">
{
    props: [],
    data: {
        tabs: [
            {
                label: 'Tab 1',
                content: [
                    {
                        title:'No.1',
                        src:'http://t11.baidu.com/it/u=2449199128,3149482180&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.2',
                        src:'http://t11.baidu.com/it/u=2191790527,2980566346&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.3',
                        src:'http://t12.baidu.com/it/u=2291840303,3093565849&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.4',
                        src:'http://t10.baidu.com/it/u=2381758935,3185577301&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.5',
                        src:'http://t12.baidu.com/it/u=2282732264,2970382254&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    }
                ],
                urlSfParams: {
                    tcUrl: '//m.baidu.com'
                }
            },
            {
                label: 'Tab 2',
                content: [
                    {
                        title:'No.1',
                        src:'http://t11.baidu.com/it/u=2191790527,2980566346&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.2',
                        src:'http://t12.baidu.com/it/u=2282732264,2970382254&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.3',
                        src:'http://t10.baidu.com/it/u=2238370428,3010663118&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.4',
                        src:'http://t10.baidu.com/it/u=2403631863,3216184749&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.5',
                        src:'http://t12.baidu.com/it/u=2802404672,3598542773&fm=58&w=200&h=150&img.JPEG',
                        url: 'http://m.baidu.com',
                        col: 4
                    }
                ],
                urlSfParams: {
                    tcUrl: '//m.baidu.com'
                }
            },
            {
                label: 'Tab 3',
                content: [
                    {
                        title:'No.1',
                        src:'http://t11.baidu.com/it/u=2449199128,3149482180&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.2',
                        src:'http://t12.baidu.com/it/u=2291840303,3093565849&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.3',
                        src:'http://t10.baidu.com/it/u=2381758935,3185577301&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.4',
                        src:'http://t12.baidu.com/it/u=2223056825,3015043629&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    },
                    {
                        title:'No.5',
                        src:'http://t11.baidu.com/it/u=2343862918,3125342533&fm=58',
                        url: 'http://m.baidu.com',
                        col: 4
                    }
                ],
                urlSfParams: {
                    tcUrl: '//m.baidu.com'
                }
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tabs': 'search-ui/Tabs/Tabs',
        'c-tabs-item': 'search-ui/Tabs/TabsItem',
        'c-scroll': 'search-ui/Scroll/Scroll',
        'c-scroll-item': 'search-ui/Scroll/ScrollItem',
        'c-link': 'search-ui/Link/Link'
    }
}
</script>
```

```atom Tabs 中嵌套Tabs 主要用在kgheader组件中 （现在只支持内部tabs高度不变的情况）
<template>
    <c-aladdin hide-footer touchable title="整卡可点的 Aladdin 卡" class="c-gap-inner-bottom-zero">
        <c-tabs
            has-slide-animation
            ref="tabsOut"
            @change="onChange">
            <c-tabs-item label="label1">
                <p>你好，欢迎查看search-ui 文档</p>
            </c-tabs-item>
            <c-tabs-item
                ref="tabs"
                label="label2"
                :log-content="{'key': 'value'}">
                <c-tabs
                    ref="tabsInner"
                    has-slide-animation>
                    <c-tabs-item
                        label="tab1"
                        :log-content="{'key': 'value'}">
                        <div>
                            <p>你好这里是tab1</p>
                            <p>欢迎查看search-ui文档</p>
                        </div>
                    </c-tabs-item>
                    <c-tabs-item
                        label="tab2"
                        :log-content="{'key': 'value'}">
                        <div>
                            <p>你好这里是tab2</p>
                            <p>欢迎查看search-ui文档</p>
                        </div>
                    </c-tabs-item>
                    <c-tabs-item
                        label="tab3"
                        :log-content="{'key': 'value'}">
                        <div>
                            <p>你好这里是tab3</p>
                            <p>欢迎查看search-ui文档</p>
                        </div>
                    </c-tabs-item>
                    <c-tabs-item
                        label="tab4"
                        :log-content="{'key': 'value'}">
                        <div>
                            <p>你好这里是tab4</p>
                            <p>欢迎查看search-ui文档</p>
                        </div>
                    </c-tabs-item>
                </c-tabs>
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem'
        }
    }
</script>

<script>
export default {
    methods: {
        onChange(newVal, oldVal) {
            this.$nextTick(() => {
                this.$refs.tabsInner.refresh();
                this.$nextTick(() => {
                    this.$refs.tabsOut.contentRefresh();
                });
            })
        }
    }
};
</script>
```

```atom Tabs 中嵌套 PageScroll 并且数据异步请求的示例
<template>
    <c-aladdin hide-footer touchable title="整卡可点的 Aladdin 卡" class="c-gap-inner-bottom-zero">
        <c-tabs
            :selected="tabSelect"
            hide-nav
            @change="changeTab"
        >
            <c-tabs-item
                a-for="(tab, indexTab) in tabs"
                :key="indexTab"
                :label="tab"
                :isLoading="loading[indexTab].isLoading"
            >
                <c-page-scroll
                    a-if="tabData[indexTab]"
                    class="c-row-tile c-gap-bottom"
                    :page="page"
                    :isShow="indexTab === tabSelected"
                    @scrollEnd="onScrollEnd"
                >
                    <c-page-scroll-item
                        a-for="page in tabData[indexTab]"
                        :key="indexScroll"
                    >
                        {{ page.title }}
                    </c-page-scroll-item>
                </c-page-scroll>
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            tabs: ['今日推荐', '经典老歌', '欧美'],
            tabData: [
                [{
                    title: '双卡双待'
                }, {
                    title: '人蜡像馆！'
                }, {
                    title: '北京+故宫'
                }],
                null,
                null
            ],
            tabSelected: 0,
            loading: [{
                isLoading: false
            }, {
                isLoading: true
            }, {
                isLoading: true
            }],
            page: 0
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem',
            'c-page-scroll': 'search-ui/PageScroll/PageScroll',
            'c-page-scroll-item': 'search-ui/PageScroll/PageScrollItem'
        }
    }
</script>

<script>
export default {
    methods: {
        changeTab(index) {
            if (this.loading[index].isLoading) {
                // 用于模拟异步请求，这里的 setTimeout 相当于 fetch
                setTimeout(() => {
                    // 由于 loading 动画的时长至少为640ms，当异步请求返回数据的时间小于640ms 时，PageScroll 组件 就不能正常初始化导致翻页失败并报错，这时应该使用 setTimeout 延迟更新数据的时间，这样翻页功能就正常了。
                    setTimeout(() => {
                        this.tabData[index] = [{
                            title: '人蜡像馆！'
                        }, {
                            title: '北京+故宫'
                        }];
                        this.loading[index].isLoading = false;
                    }, 800);
                }, 100);
            }
        },
        onScrollEnd(page) {
            this.page = page;
        }
    }
};
</script>
```

### 一级 Tab

```atom 一级 Tab
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <div
            class="c-gap-bottom"
            style="color: #2b99ff">
            2等分：最多支持8个字
        </div>
        <c-tabs
            :selected="0"
            has-slide-animation
            @change="handleChange">
            <c-tabs-item
                a-for="(tab, index) in tabs2"
                :key="index"
                :label="tab.label"
                :log-content="{'key': 'value'}">
            </c-tabs-item>
        </c-tabs>
        <div
            class="c-gap-bottom c-gap-top"
            style="color: #2b99ff">
            3等分：最多支持6个字
        </div>
        <c-tabs
            :selected="0"
            has-slide-animation
            @change="handleChange">
            <c-tabs-item
                a-for="(tab, index) in tabs3"
                :key="index"
                :label="tab.label"
                :log-content="{'key': 'value'}">
            </c-tabs-item>
        </c-tabs>
        <div
            class="c-gap-bottom c-gap-top"
            style="color: #2b99ff">
            4等分：最多支持4个字
        </div>
        <c-tabs
            :selected="0"
            has-slide-animation
            @change="handleChange">
            <c-tabs-item
                a-for="(tab, index) in tabs4"
                :key="index"
                :label="tab.label"
                :log-content="{'key': 'value'}">
            </c-tabs-item>
        </c-tabs>
        <div
            class="c-gap-bottom c-gap-top"
            style="color: #2b99ff">
            5等分：最多支持3个字
        </div>
        <c-tabs
            :selected="0"
            has-slide-animation
            @change="handleChange">
            <c-tabs-item
                a-for="(tab, index) in tabs5"
                :key="index"
                :label="tab.label"
                :log-content="{'key': 'value'}">
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>
<style scoped>
</style>
<config>
    {
        data: {
            tabs2: [{
                label: 'Tab 1',
            }, {
                label: 'Tab 2',
            }],
            tabs3: [{
                label: 'Tab 1',
            }, {
                label: 'Tab 2',
            }, {
                label: 'Tab 3',
            }],
            tabs4: [{
                label: 'Tab 1',
            }, {
                label: 'Tab 2',
            }, {
                label: 'Tab 3',
            }, {
                label: 'Tab 4',
            }],
            tabs5: [{
                label: 'Tab 1',
            }, {
                label: 'Tab 2',
            }, {
                label: 'Tab 3',
            }, {
                label: 'Tab 4',
            }, {
                label: 'Tab 5',
            }],
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
        }
    }
</config>
<script>
export default {
    methods: {
        handleChange(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    }
};
</script>
```

### 资源方 Tab

```atom 资源方 Tab
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <div
            class="c-gap-bottom"
            style="color: #2b99ff">
            资源方 Tab 纯文字
        </div>
        <c-tabs
            :selected="0"
            bottom
            has-slide-animation
            @change="handleChange">
            <c-tabs-item
                a-for="(tab, index) in tabs2"
                :key="index"
                :label="tab.label"
                :log-content="{'key': 'value'}">
            </c-tabs-item>
        </c-tabs>
        <div
            class="c-gap-bottom c-gap-top"
            style="color: #2b99ff">
            资源方 Tab 带logo
        </div>
        <c-tabs
            :selected="0"
            bottom
            has-slide-animation
            @change="handleChange">
            <c-tabs-item
                a-for="(tab, index) in tabs3"
                :key="index"
                :label="tab.label"
                :icon="tab.icon"
                :log-content="{'key': 'value'}">
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>
<style scoped>
</style>
<config>
    {
        data: {
            tabs2: [{
                label: 'Tab 1',
            }, {
                label: 'Tab 2',
            }],
            tabs3: [{
                label: 'Tab 1',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 2',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }, {
                label: 'Tab 3',
                icon: 'https://www.baidu.com/cache/global/img/aladdinIcon-1.0.gif'
            }],
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
        }
    }
</config>
<script>
export default {
    methods: {
        handleChange(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    }
};
</script>
```

## 注意事项

1. Tab 头部和内容之间的空白间距为10px，如不满足需求，可以在 Tab 内部自行调整
2. 当 Tab 内部包含横滑组件（如 Scroll 等）时，切换 Tab 时内容没有横滑效果，这时需要手动将`has-slide-animation`设置为 false
3. Tab 内容切换在 iOS 小屏机下降级，即使设置了`has-slide-animation`参数也无过渡动画
4. 支持 Tab 切换异步请求数据，支持 loading 动画，无需自定义 loading 效果
5. Tab 内容异步加载时，不管异步加载数据返回时间长短，loading 动画都至少展示 640ms，以避免 loading 动画展示时间太短而导致的闪动
6. selected 和 len 两个字段都支持动态更新，不过不能同时被修改，否则会出现 Tab 内容空白的情况
7. Android 下由于机型众多，在部分机型和浏览器中存在兼容性问题，问题现象及解决办法如下：
    1. 部分机型浏览器下边线存在不显示的问题（将下边线上移1px解决，副作用是 mounted 以后可能会带来下边线的抖动问题）
    2. 小米 Max UC 浏览器中下边线通栏显示（完全降级，切换时下边线去掉动画）
    3. 华为 p10 自带浏览器中下边线显示错乱（完全降级，切换时下边线去掉动画）
8. 在横滑 Tab 下无点击态；在 Tab 为可跳转链接时，只有链接默认点击态
9. 当 Tab 在初始化为 display：none 隐藏状态时，offsetHeight 获取不到高度，需在展示时调用 refresh 函数更新高度
10. 当 Tab 中嵌套 PageScroll 等 scroll 类组件并且数据是异步加载时，需要为更新数据增加延迟时间（> 700ms），防止 iscroll 初始化失败导致翻页滑动错误，具体使用方法请看下面示例

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
selected | number | 0 | 可选 | 选中选项卡的索引 | -
allowScroll | boolean | false | 可选 | tabnav是否允许滚动 | -
bottom | boolean | false | 可选 | 导航在底部 | -
hasSlideAnimation | boolean | false | 可选 | 内容区切换是否带过渡效果，默认没有过渡效果 | -
isOpenLog | boolean | true | 可选 | 是否打开日志，&nbsp;默认为打开 | -
hideNav | boolean | false | 可选 | 当只有一个&nbsp;tab&nbsp;时设置是否隐藏&nbsp;Nav&nbsp;只显示内容，默认显示，true&nbsp;表示隐藏。当&nbsp;tab&nbsp;数量超过1个时，这个设置失效 | -
innerHeight | number | 0 | 可选 | 当&nbsp;tab&nbsp;内容高度发生变化时（如&nbsp;tab&nbsp;中套展开收起），需要将变化后的高度传入&nbsp;inner-height&nbsp;字段 | -
disableEvent | boolean | false | 可选 | 是否触发点击事件改选定选项 | -
noContent | boolean | false | 可选 | 设置&nbsp;true&nbsp;时表示没有内容，只有头部。可用于&nbsp;kgheader&nbsp;等组件中 | -
gapTop | boolean | true | 可选 | 设置&nbsp;tab&nbsp;上方是否自带5px间距，默认有 | -
gapBottom | boolean | true | 可选 | 设置&nbsp;tab&nbsp;下方是否自带5px间距，默认有 | -
contentGapTop | boolean | true | 可选 | 设置&nbsp;tab&nbsp;内容上方是否自带间距，默认有 | -
contentTouchableStop | boolean | true | 可选 | content&nbsp;是否屏蔽整卡点击态 | -
forceHeightTransition | boolean | - | 可选 | 强制开启&nbsp;TabsContent&nbsp;高度变化&nbsp;transition | -

#### TabsContent

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
selected | number | 0 | 可选 | 需要显示的&nbsp;tab&nbsp;序号 | -
hasSlideAnimation | boolean | false | 可选 | 内容区切换是否带过渡效果，默认没有过渡效果 | -
innerHeight | number | 0 | 可选 | 当&nbsp;tab&nbsp;内容高度发生变化时（如&nbsp;tab&nbsp;中套展开收起），需要将变化后的高度传入&nbsp;inner-height&nbsp;字段 | -
contentGapTop | boolean | true | 可选 | 设置&nbsp;tab&nbsp;内容上方是否自带5px间距，默认有 | -
loadingData | array | - | 可选 | - | -
forceHeightTransition | boolean | - | 可选 | 强制开启高度&nbsp;transition | -

#### TabsItem

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
label | string | - | 可选 | 选项卡的标题 | -
icon | string |  | 可选 | tabbar上的图标，宽高14px | -
isLoading | boolean | false | 可选 | 是否为正在加载中，主要用于异步加载组件 | -
logContent | object | {} | 可选 | 自定义日志内容,格式为{key,&nbsp;value} | -
params | object | {} | 可选 | 携带参数 | -
>> params.url | string | - | - | 不为空点击头部可直接跳转，参数为跳转链接地址&nbsp;默认值&nbsp;'' | -
>> params.linkOption | object | - | - | 跳转链接参数&nbsp;默认值&nbsp;'' | -
>> params.linkOption.type | string | - | - | 链接的类型，sf&nbsp;表示跳转情景页&nbsp;可选&nbsp;'normal'&nbsp;'sf'&nbsp;默认值&nbsp;normal | -
>> params.linkOption.tsfUrl | string | - | - | data-sf-href所需地址&nbsp;默认值&nbsp;'' | -
>> params.linkOption.toptions | string | - | - | data-sf-options所需&nbsp;默认值&nbsp;'' | -
tabDataModule | string |  | 可选 | 统计区块名称 | -

### Slots



名称 | 描述
--- | ---
default | 多个c-tabs-item

#### TabsContent

名称 | 描述
--- | ---
default | 某个选项卡的内容区域

#### TabsItem

名称 | 描述
--- | ---
default | 某个选项卡的内容区域

### Events


- **transitionend**: transitionend event.
	无参数

- **onTabScrollEnd**: 选项卡nav滑动结束触发.
	无参数

- **change**: 改变选定项时触发.

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 新&nbsp;tab&nbsp;序号
  ${param2} | object | 旧&nbsp;tab&nbsp;序号

- **clickHeaderItem**: 点击组件头部时可选项时触发.

名称 | 类型 | 描述
--- | --- | ---
${param1}.index | object | 点击&nbsp;tab&nbsp;序号


#### TabsContent


- **transitionend**: transitionend event.
	无参数



