---
name: SpreadEnhanced
title: 展开收起组件
category: 交互类
owner: 王凯
---

## 使用场景

> 参考UE规范：[D9 【基础组件】-【展开收起】](http://sfe.baidu.com:8186/ue-guide/spread.html)

## 示例

### 三种类型

#### 列表类型 list

```atom 列表类型 list
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 列表类型；当默认 threshold 大于总行数时，隐藏展开收起按钮
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :spread-step="1"
            :threshold="6"
            @change="handleChange"
            @spreadbtnclick="handleSpreadBtnClick"
        >
            <c-row
                a-for="(i, index) in 5"
                :key="index"
            >
                <c-span
                    col="12"
                >
                    第 {{ index }} 行
                </c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-spread': 'search-ui/SpreadEnhanced/Spread',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>

<script>
export default {
    methods: {
        handleSpreadBtnClick() {
            console.log('handleSpreadBtnClick 展开按钮点击');
        },
        handleChange(obj) {
            console.log('handleChange', obj);
        }
    }
}
</script>
```

```atom 列表类型；阶段展开，每次展开 n 行
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :spread-step="1"
            @change="handleChange"
            @spreadbtnclick="handleSpreadBtnClick"
        >
            <c-row
                a-for="(i, index) in 10"
                :key="index"
            >
                <c-span
                    col="12"
                >
                    第 {{ index }} 行
                </c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-spread': 'search-ui/SpreadEnhanced/Spread',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>

<script>
export default {
    methods: {
        handleSpreadBtnClick() {
            console.log('handleSpreadBtnClick 展开按钮点击');
        },
        handleChange(obj) {
            console.log('handleChange', obj);
        }
    }
};
</script>
```

```atom 列表类型；展开后不收起
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :bottom-btn="bottomBtn"
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }],
            bottomBtn: {
                isShow: true
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('handleChange', obj);
            if (obj.spread) {
                this.bottomBtn.isShow = false;
            }
        }
    }
}
</script>
```

```atom 默认展开；列表类型
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            spread
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">
                    {{item.key}}
                </c-span>
                <c-span col="9">
                    {{item.value}}
                </c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 动态改变 threshold
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        threshold {{ threshold }}
        <br>
        <c-row
        >
            <c-span
                a-for="i in 3"
                :key="i"
            >
                <c-btn
                    :text="'' + i"
                    @click="handleBtnClick({
                        index: i - 1
                    })"
                >
                </c-btn>
            </c-span>
        </c-row>
        <c-spread
            :threshold="threshold"
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }],
            paragraph: '故宫位于北京城的正中心，在市内可以通过公交，地铁等方式到达。地铁：乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。（故宫博物院的南门）  PS：故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。',
            threshold: 1
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            },
            handleBtnClick(obj) {
                this.threshold = obj.index + 1;
            }
        }
    }
</script>
```

#### 段落类型 paragraph

```atom 段落类型 paragraph
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :threshold="2"
            type="paragraph"
            @change="handleChange"
        >
            <p>
                {{ paragraph }}
            </p>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            paragraph: '故宫位于北京城的正中心，在市内可以通过公交，地铁等方式到达。地铁：乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。（故宫博物院的南门）  PS：故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 内容可点；段落类型
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :bottom-btn="{
                isShow: false
            }"
            :threshold="2"
            content-click
            type="paragraph"
            @change="handleChange"
        >
            <p>
                {{ paragraph }}
            </p>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            paragraph: '故宫位于北京城的正中心，在市内可以通过公交，地铁等方式到达。地铁：乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。（故宫博物院的南门）  PS：故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 内容可点；段落类型；底部按钮（文案在左侧）
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :bottom-btn="{
                isShow: true,
                textAlign: 'left'
            }"
            :threshold="2"
            content-click
            type="paragraph"
            @change="handleChange"
        >
            <p>
                {{ paragraph }}
            </p>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            paragraph: '故宫位于北京城的正中心，在市内可以通过公交，地铁等方式到达。地铁：乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。（故宫博物院的南门）  PS：故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

#### 高度类型 height

```atom 高度类型 height
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :fold-height="72"
            type="height"
            @change="handleChange"
        >
            {{ content }}
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            content: '故宫位于北京城的正中心，在市内可以通过公交，地铁等方式到达。  公交：市区乘坐1路、2路、52路、59路、82路、99路、120路、126路、观光1线、夜17路、夜1路、夜2路、专2路在“天安门东”站下车然后步行约900米到达午门。或，乘坐1路、5路、52路、99路、观光1线、夜1路、专2路公共汽车在“天安门西”下车，然后步行约1000米从午门进入。  地铁：乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。（故宫博物院的南门）  PS：故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 高度类型 height；高度大于最大高度时，不显示展开收起按钮
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :fold-height="300"
            type="height"
            @change="handleChange"
        >
            {{ content }}
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            content: '故宫位于北京城的正中心，在市内可以通过公交，地铁等方式到达。  公交：市区乘坐1路、2路、52路、59路、82路、99路、120路、126路、观光1线、夜17路、夜1路、夜2路、专2路在“天安门东”站下车然后步行约900米到达午门。或，乘坐1路、5路、52路、99路、观光1线、夜1路、专2路公共汽车在“天安门西”下车，然后步行约1000米从午门进入。  地铁：乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。（故宫博物院的南门）  PS：故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 默认展开；高度类型
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :fold-height="72"
            spread
            type="height"
            @change="handleChange"
        >
            <p>
                {{ paragraph }}
            </p>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            paragraph: '故宫位于北京城的正中心，在市内可以通过公交，地铁等方式到达。  公交：市区乘坐1路、2路、52路、59路、82路、99路、120路、126路、观光1线、夜17路、夜1路、夜2路、专2路在“天安门东”站下车然后步行约900米到达午门。或，乘坐1路、5路、52路、99路、观光1线、夜1路、专2路公共汽车在“天安门西”下车，然后步行约1000米从午门进入。  地铁：乘坐地铁1号线在“天安门东”站下车，步行约900米，即可从午门进入故宫。（故宫博物院的南门）  PS：故宫不设停车场，周边的公共停车场也较远，故不建议驾车前来。'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

### 三种不同位置的按钮

三种不同位置的按钮，可与任意类型搭配使用，这里使用列表类型作为示例

#### 底部按钮 bottomBtn

```atom 底部按钮
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 底部按钮（文案在左边）
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :bottom-btn="{
                isShow: true,
                textAlign: 'left'
            }"
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 底部按钮上下分割线
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :threshold="5"
            :bottom-btn="bottomBtn"
            @change="handleChange"
            @spreadbtnclick="handleSpreadBtnClick"
        >
            <c-row
                a-for="(i, index) in 10"
                :key="index"
            >
                <c-span
                    col="12"
                >
                    第 {{ index }} 行
                </c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        bottomBtn: {
            isShow: true,
            borderTop: true,
            borderBottom: true
        }
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-spread': 'search-ui/SpreadEnhanced/Spread',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>

<script>
export default {
    methods: {
        handleSpreadBtnClick() {
            console.log('handleSpreadBtnClick 展开按钮点击');
        },
        handleChange(obj) {
            console.log('handleChange', obj);
        }
    }
}
</script>
```

```atom 底部按钮；修改颜色
<template>
    <c-aladdin
        :style="{
            backgroundColor: 'red',
            color: '#fff'
        }"
        hide-header
        hide-footer
    >
        <c-spread
            :threshold="5"
            :bottom-btn="bottomBtn"
            @change="handleChange"
            @spreadbtnclick="handleSpreadBtnClick"
        >
            <c-row
                a-for="(i, index) in 10"
                :key="index"
            >
                <c-span
                    col="12"
                >
                    第 {{ index }} 行
                </c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        bottomBtn: {
            isShow: true,
            iconColor: '#fff',
            bgColor: 'red'
        }
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-spread': 'search-ui/SpreadEnhanced/Spread',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>

<script>
export default {
    methods: {
        handleSpreadBtnClick() {
            console.log('handleSpreadBtnClick 展开按钮点击');
        },
        handleChange(obj) {
            console.log('handleChange', obj);
        }
    }
}
</script>
```

#### 顶部按钮 topBtn

```atom 顶部按钮（添加左侧文案）
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :top-btn="{
                isShow: true,
                leftText: '故宫游览介绍'
            }"
            :threshold="0"
            @change="handleChange"
        >
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 顶部按钮（添加左侧文案）
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :top-btn="{
                isShow: true,
                leftText: '故宫游览介绍'
            }"
            :threshold="0"
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 顶部按钮（添加左侧文案，清空展开、收起文案）
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :top-btn="{
                isShow: true,
                leftText: '故宫游览介绍',
                spreadText: '',
                foldText: ''
            }"
            :threshold="0"
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 顶部按钮；横滑；顶部文字 slot
<template>
    <c-aladdin
        :style="{
            'padding': '0'
        }"
        hide-header
        hide-footer
    >
        <c-spread
            :top-btn="{
                isShow: true,
                paddingLeft: '.17rem',
                paddingRight: '.17rem',
                touchableFeedbackLeft: '0',
                touchableFeedbackRight: '0'
            }"
            :threshold="0"
            @change="handleChange"
        >
            <div
                :style="{
                    color: 'red',
                    fontSize: '16px'
                }"
                slot="top-left"
            >
                顶部文字 slot
            </div>
            <div
                :style="{
                    paddingLeft: '.17rem',
                    paddingRight: '.17rem'
                }"
            >
                <c-scroll>
                    <c-scroll-item
                        a-for="(i, index) in 8"
                        :col="4"
                        :key="index"
                    >
                        <c-img
                            hack-white-stroke
                        />
                        <div>
                            二级标题 {{ index}}
                        </div>
                        <div>
                            辅助功能 {{ index}}
                        </div>
                    </c-scroll-item>
                </c-scroll>
            </div>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
            'c-img': 'search-ui/Image/Image',
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

#### 右下方按钮 rightBottomBtn

```atom 右下方按钮
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :right-bottom-btn="{
                isShow: true,
                textAlign: 'left'
            }"
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）暑期除外暑期。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>
```

```atom 右下方按钮；修改颜色；背景颜色必须使用 rgb(xx,xx,xx) 的格式；不可使用十六进制
<template>
    <c-aladdin
        :style="{
            color: '#fff',
            backgroundColor: '#263B8B'
        }"
        hide-header
        hide-footer
    >
        <c-spread
            :right-bottom-btn="{
                isShow: true,
                textAlign: 'left',
                bgColor: 'rgb(38, 59, 139)',
                iconColor: '#fff'
            }"
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）暑期除外暑期。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>

<style module lang="less">
</style>
```

```atom 右下方按钮；修改间距
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            :right-bottom-btn="{
                isShow: true,
                bottom: '-24px'
            }"
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="3">{{item.key}}</c-span>
                <c-span col="9">{{item.value}}</c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [{
                key: '开放时间',
                value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）暑期除外暑期。'
            }, {
                key: '游玩时长',
                value: '建议0.5-1天'
            }, {
                key: '门票信息',
                value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
            }, {
                key: '最佳季节',
                value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
            }, {
                key: '官网',
                value: 'http://www.dpm.org.cn'
            }, {
                key: '电话',
                value: '01085007421'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    }
</script>

<style module lang="less">
</style>
```

### 特殊：Tab 嵌套展开收起

```atom Tabs 嵌套展开收起（列表类型）；使用 TabsItem 组件
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-tabs
            ref="tabs"
            :selected="selected"
            :inner-height="innerHeight"
            :force-height-transition="forceHeightTransition"
            has-slide-animation
            @change="handleTabsChange"
            @transitionend="handleContentWrapperTransitionEnd"
        >
            <c-tabs-item
                ref="tabItem"
                a-for="(tab, tabIndex) in tabs"
                :key="tabIndex"
                :label="tab.label"
                :log-content="{'key': 'value'}">
                <div>
                    <c-spread
                        :threshold="tab.threshold"
                        @change="handleSpreadChange"
                    >
                        <div
                            a-for="(item, index) in 5"
                            :key="index"
                        >
                            Tab{{ tabIndex }} 第{{index}}行 测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容
                        </div>
                    </c-spread>
                </div>
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            selected: 0,
            innerHeight: 0,
            // 强制开启 TabsContent 高度变化 transition
            forceHeightTransition: false,
            tabs: [{
                label: 'Tab 0',
                threshold: 1
            }, {
                label: 'Tab 1',
                threshold: 2
            }, {
                label: 'Tab 2',
                threshold: 3
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tabs': 'search-ui/Tabs/Tabs',
            'c-tabs-item': 'search-ui/Tabs/TabsItem',
            'c-spread': 'search-ui/SpreadEnhanced/Spread',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            // Tabs 改变的回调
            handleTabsChange(newVal, oldVal) {
                console.log('handleTabsChange', newVal, oldVal);
                this.selected = newVal;
                this.innerHeight = this.$refs.tabItem[this.selected].$el.offsetHeight;
            },
            // 展开收起状态改变的回调
            handleSpreadChange(obj) {
                console.log('handleSpreadChange', obj);

                // TODO:如果是 Android 低版本 Chrome 内核或者是 iPhone 小屏机，包括4, 4s, 5, 5s, se 等，需要强制打开 Tabs 的高度动效开关
                if (this.isIosSmall() || this.isLowChrome()) {
                    // 强制开启 TabsContent 高度变化 transition
                    this.forceHeightTransition = true;
                }

                // 这里 +5 是因为 c-tabs-content-inner 自带 0.05rem 的 margin-top
                this.innerHeight = obj.height + 5;
            },
            // 动画结束的回调
            handleContentWrapperTransitionEnd() {
                console.log('TabsContent 动画结束');
                if (this.isIosSmall() || this.isLowChrome()) {
                    if (this.forceHeightTransition) {
                        // 关闭 TabsContent 高度变化 transition，恢复降级效果
                        this.forceHeightTransition = false;
                    }
                }
            },
            // 判断手机型号为 iPhone 小屏机，包括4, 4s, 5, 5s, se 等
            isIosSmall() {
                let isIphone = /iphone/.test(navigator.userAgent.toLowerCase());
                let width = window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth;
                return width < 321 && isIphone;
            },
            // Android 低版本 Chrome 内核
            isLowChrome() {
                let ua = navigator.userAgent.toLowerCase();
                let isAndroid = /android/.test(ua);
                if (isAndroid) {
                    let chromeReg = /chrome\/(\w*)/g;
                    let chromeos = ua.match(chromeReg);
                    if (chromeos && chromeos[0]) {
                        chromeos = parseInt(chromeos[0].substring(7), 10);
                        if (chromeos > 52) {
                            return false;
                        }
                        return true;
                    }
                }
                return false;
            }
        }
    }
</script>
```

### 特殊：通过 js 控制展开收起

```atom 不显示按钮，通过 js 控制展开收起
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            ref="spread"
            :bottom-btn="bottomBtn"
            spread
            @change="handleChange"
        >
            <c-row
                a-for="(item, index) in list"
                :key="index"
            >
                <c-span col="10">{{ item.value }}</c-span>
                <c-span
                    a-if="index === 0"
                    col="2"
                >
                    <c-switch
                        value
                        @change="handleSwitchChange"
                    />
                </c-span>
            </c-row>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        list: [{
            key: '开放时间',
            value: '旺季（4-10月）8:30-16:10，16:00停止售票，17:00清场；淡季（11月-次年3月）8:30-15:40，15:30停止售票，16:30清场；周一闭馆（法定节假日、暑期除外）。'
        }, {
            key: '游玩时长',
            value: '建议0.5-1天'
        }, {
            key: '门票信息',
            value: '旺季（4月1日-10月31日）60元，淡季（11月1日-次年3月31日）40元；内部珍宝馆另收门票10元，钟表馆10元。其它优惠及免票政策请见官网。'
        }, {
            key: '最佳季节',
            value: '四季皆宜。春季气候舒适，在故宫赏花是不错的选择；夏季炎热，可在室内参观；秋季，北京秋高气爽，红叶满地，游览故宫非常合适；冬季虽然寒冷，但是故宫的雪景确实美不胜收。'
        }, {
            key: '官网',
            value: 'http://www.dpm.org.cn'
        }, {
            key: '电话',
            value: '01085007421'
        }],
        bottomBtn: {
            isShow: false
        }
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-spread': 'search-ui/SpreadEnhanced/Spread',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-switch': 'search-ui/Switch/Switch'
    }
}
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('handleChange', obj);
        },
        handleSwitchChange(isOpen) {
            console.log('handleSwitchChange', isOpen);
            if (isOpen) {
                this.$refs.spread.spreadFun();
            }
            else {
                this.$refs.spread.foldFun();
            }
        }
    }
}
</script>
```

```atom 不加日志类
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-spread
            ref="spread"
            :bottom-btn="bottomBtn"
            :log-class="false"
            :threshold="5"
            @change="handleChange"
        >
            <div
                a-for="(item, index) in 10"
                :key="index"
            >
                第 {{ index }} 行
            </div>
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-spread': 'search-ui/SpreadEnhanced/Spread'
    }
}
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('handleChange', obj);
        }
    }
}
</script>
```

## 注意事项

1. 使用时请这样引用：`search-ui/SpreadEnhanced/Spread` 即可引用新的展开收起组件；

## API
### Props

#### Spread

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | list | 可选 | 展开收起类型，目前支持3种类型，列表类型&nbsp;list，文字段落类型&nbsp;paragraph，自定义收起高度类型&nbsp;height； | -
spread | boolean | false | 可选 | 展开收起状态，展开为&nbsp;true，收起为&nbsp;false | -
contentClick | boolean | false | 可选 | 内容区域是否可点击 | -
bottomBtn | object | {"isShow":true,"textAlign":"center"} | 可选 | 底部按钮配置 | -
>> bottomBtn.isShow | boolean | true | - | 是否显示按钮 | -
>> bottomBtn.textAlign | string | center | - | 底部按钮文字方向 | -
>> bottomBtn.spreadText | string | 展开 | - | 展开文案 | -
>> bottomBtn.foldText | string | 收起 | - | 收起文案 | -
>> bottomBtn.paddingTop | string | .1rem | - | 上间距 | -
>> bottomBtn.paddingBottom | string | .1rem | - | 下间距 | -
>> bottomBtn.touchableFeedbackTop | string \| number | - | - | 点击态顶部偏移量 | -
>> bottomBtn.touchableFeedbackBottom | string \| number | - | - | 点击态低部偏移量 | -
>> bottomBtn.touchableFeedbackLeft | string \| number | -0.17 | - | 点击态左部偏移量 | -
>> bottomBtn.touchableFeedbackRight | string \| number | -0.17 | - | 点击态右部偏移量 | -
>> bottomBtn.borderTop | boolean | - | - | 是否有上边距 | -
>> bottomBtn.borderBottom | boolean | - | - | 是否有下边距 | -
>> bottomBtn.iconColor | string | #555 | - | 右下角按钮箭头图标颜色 | -
>> bottomBtn.bgColor | string | - | - | 右下角按钮背景颜色；背景颜色必须使用&nbsp;rgb(xx,xx,xx)&nbsp;的格式，不可使用十六进制 | -
>> bottomBtn.iconColor | boolean | #555 | - | 右下角按钮箭头图标颜色 | -
topBtn | object | {"isShow":false} | 可选 | 顶部按钮配置 | -
>> topBtn.isShow | boolean | true | - | 是否显示按钮 | -
>> topBtn.spreadText | string | 展开 | - | 展开文案 | -
>> topBtn.foldText | string | 收起 | - | 收起文案 | -
>> topBtn.paddingTop | string | .1rem | - | 上间距 | -
>> topBtn.paddingBottom | string | .1rem | - | 下间距 | -
>> topBtn.paddingLeft | string | - | - | 左间距 | -
>> topBtn.paddingRight | string | - | - | 右间距 | -
>> topBtn.touchableFeedbackTop | string \| number | - | - | 点击态顶部偏移量 | -
>> topBtn.touchableFeedbackBottom | string \| number | - | - | 点击态低部偏移量 | -
>> topBtn.iconColor | string | #555 | - | 右下角按钮箭头图标颜色 | -
>> topBtn.bgColor | string | - | - | 右下角按钮背景颜色；背景颜色必须使用&nbsp;rgb(xx,xx,xx)&nbsp;的格式，不可使用十六进制 | -
>> topBtn.iconColor | boolean | #555 | - | 右下角按钮箭头图标颜色 | -
rightBottomBtn | object | {"isShow":false,"spreadText":"展开","foldText":"收起"} | 可选 | 右下角按钮配置 | -
>> rightBottomBtn.isShow | boolean | true | - | 是否显示按钮 | -
>> rightBottomBtn.spreadText | string | 展开 | - | 展开文案 | -
>> rightBottomBtn.foldText | string | 收起 | - | 收起文案 | -
>> rightBottomBtn.iconColor | string | #555 | - | 右下角按钮箭头图标颜色 | -
>> rightBottomBtn.bgColor | string | - | - | 右下角按钮背景颜色；背景颜色必须使用&nbsp;rgb(xx,xx,xx)&nbsp;的格式，不可使用十六进制 | -
>> rightBottomBtn.iconColor | boolean | #555 | - | 右下角按钮箭头图标颜色 | -
>> rightBottomBtn.bottom | string | - | - | 相对于底部的距离 | -
>> rightBottomBtn.right | string | - | - | 相对于右边的距离 | -
rowTile | boolean | false | 可选 | 是否是通栏（即增加&nbsp;margin-left:&nbsp;-.17rem,&nbsp;margin-right:&nbsp;-.17rem） | -
logClass | boolean | true | 可选 | 是否增加日志类 | -
threshold | number | 1 | 可选 | 收起状态时的高度：当&nbsp;type&nbsp;为&nbsp;list&nbsp;时，代表显示的&nbsp;item&nbsp;数量；当&nbsp;type&nbsp;为&nbsp;paragraph&nbsp;时，代表需要显示的文字行数；当&nbsp;type&nbsp;为&nbsp;height&nbsp;时，threshold&nbsp;无意义 | -
spreadStep | number | - | 可选 | 阶段展开间隔；每次点击展开展开&nbsp;n&nbsp;个元素（仅限列表类型&nbsp;type&nbsp;===&nbsp;'list'&nbsp;时有意义） | -
foldHeight | number | 24 | 可选 | 设置收起状态时的高度（当&nbsp;type&nbsp;为&nbsp;height&nbsp;时生效） | -

### Slots

#### Spread

名称 | 描述
--- | ---
top-left | 顶部按钮左侧&nbsp;slot
list{{index}} | 列表
paragraph | 段落
default | 内容

### Events

#### Spread


- **spreadbtnclick**: 展开收起按钮点击事件

名称 | 类型 | 描述
--- | --- | ---
lastSpread | boolean | 上一次展开收起的状态，true&nbsp;展开，false&nbsp;收起

- **change**: 展开收起状态改变后触发的回调

名称 | 类型 | 描述
--- | --- | ---
spread | boolean | 是否展开
  type | string | 当前展开收起的类型
  height | number | 当前高度
  diffHeight | number | 相较于上一次变化的高度，主要用来配合外侧元素动态计算高度



