---
name: KgHeader
title: KG头部组件
category: 框架类
owner: 王凯
---

## 使用场景

> 参考UE规范：[F2 【智库规范】-【头部区】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Result_KG.html)

## 示例

### 强弱样式

```atom 强样式
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            @navclick="handleNavClick"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tabList:[
            {
                txt: '导航项1',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项2',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项3',
                url: 'https://www.baidu.com'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>

<script>
export default {
    methods: {
        handleNavClick() {
            console.log('handleNavClick');
        }
    }
}
</script>
```

```atom 弱样式
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            is-weaken
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tabList:[
            {
                txt: '导航项1',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项2',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项3',
                url: 'https://www.baidu.com'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>
```

### 导航项点击直接跳转，不改变选中项

```atom 强样式；导航项点击直接跳转，不改变选中项
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            disable-event
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tabList:[
            {
                txt: '导航项1',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项2',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项3',
                url: 'https://www.baidu.com'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>
```

```atom 弱样式；导航项点击直接跳转，不改变选中项
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            disable-event
            is-weaken
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tabList:[
            {
                txt: '导航项1',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项2',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项3',
                url: 'https://www.baidu.com'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>
```

### 增加图片

```atom 左侧图片
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :header-img="headerImg"
            @navclick="handleNavClick"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        headerImg: 'http://img0.imgtn.bdimg.com/it/u=254677773,3851942355&fm=26&gp=0.jpg',
        tabList:[
            {
                txt: '导航项1'
            },
            {
                txt: '导航项2'
            },
            {
                txt: '导航项3'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>

<script>
export default {
    methods: {
        handleNavClick(obj) {
            console.log('handleNavClick', obj);
        }
    }
}
</script>
```

```atom 左侧图片；控制图片比例并设置为居中
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :header-img="headerImg"
            :header-img-type="headerImgType"
            header-img-align="v-center"
            @navclick="handleNavClick"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        headerImg: 'http://img0.imgtn.bdimg.com/it/u=3232191588,3684573292&fm=26&gp=0.jpg',
        headerImgType: 'w',
        tabList:[
            {
                txt: '导航项1'
            },
            {
                txt: '导航项2'
            },
            {
                txt: '导航项3'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>

<script>
export default {
    methods: {
        handleNavClick(obj) {
            console.log('handleNavClick', obj);
        }
    }
}
</script>
```

```atom 左侧图片；弱样式
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :header-img="headerImg"
            is-weaken
            @navclick="handleNavClick"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        headerImg: 'http://img0.imgtn.bdimg.com/it/u=254677773,3851942355&fm=26&gp=0.jpg',
        tabList:[
            {
                txt: '导航项1'
            },
            {
                txt: '导航项2'
            },
            {
                txt: '导航项3'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>

<script>
export default {
    methods: {
        handleNavClick(obj) {
            console.log('handleNavClick', obj);
        }
    }
}
</script>
```

```atom 修改背景色
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :bg-color="backgroundColor"
            @navclick="handleNavClick"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        backgroundColor: '#842485',
        tabList:[
            {
                txt: '导航项1'
            },
            {
                txt: '导航项2'
            },
            {
                txt: '导航项3'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>

<script>
export default {
    methods: {
        handleNavClick(obj) {
            console.log('handleNavClick', obj);
        }
    }
}
</script>
```

```atom 添加背景图（只有强样式可以，弱样式不支持）
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :bg-color="backgroundColor"
            :bg-img="backgroundImg"
            @navclick="handleNavClick"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        backgroundImg: 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/728da9773912b31b325384178d18367adab4e1d5.jpg',
        backgroundColor: '#842485',
        tabList:[
            {
                txt: '导航项1'
            },
            {
                txt: '导航项2'
            },
            {
                txt: '导航项3'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>

<script>
export default {
    methods: {
        handleNavClick(obj) {
            console.log('handleNavClick', obj);
        }
    }
}
</script>
```

```atom 背景色渐变（背景色渐变时不带底部选项卡）
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :bg-color="backgroundColor"
            background="linear-gradient(to right, #e8198b 0%, #c7eafd 100%)"
            @navclick="handleNavClick"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        backgroundColor: '#842485',
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>

<script>
export default {
    methods: {
        handleNavClick(obj) {
            console.log('handleNavClick', obj);
        }
    }
}
</script>
```

### 自定义标题栅格

```atom 强样式；自定义标题为 7n
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :title-column-number="7"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :bg-img="bgImg"
            :bg-color="bgColor"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        bgImg: 'https://ss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch3/png/hancheng.png',
        bgColor: 'rgb(67,55,49)',
        tabList:[
            {
                txt: '导航项1',
            },
            {
                txt: '导航项2',
            },
            {
                txt: '导航项3',
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>
```

### 宣发样式

```atom 宣发
<template>
    <c-aladdin>
        <c-kg-header
            title="如懿传"
            url="https://www.baidu.com"
            abstract="“金秋时节，你我共赴深宫之约。”"
            :tab-list="tabList"
            bg-color="#c14427"
            bg-img="https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/0823dd54564e9258ef43e8c79782d158ccbf4ea7.jpg"
            disperse>
            <div slot="extInfo">
                <c-row>
                    <c-span>这里是拓展功能区</c-span>
                </c-row>
            </div>
        </c-kg-header>
    </c-aladdin>
</template>

<config>
    {
        data: {
            tabList:[
                {
                    txt: '概览'
                },
                {
                    txt: '专题'
                },
                {
                    txt: '演员表'
                },
                {
                    txt: '剧照'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-kg-header': 'search-ui/KgHeader/KgHeader',
            'c-kg-footer': 'search-ui/KgFooter/KgFooter'
        }
    }
</config>
```

```atom 宣发样式，并且使用了第二层背景
<template>
    <div class="c-container">
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :bg-color="backgroundColor"
            :bg-img="backgroundImg"
            :bg-size="backgroundSize"
            :bg2="background2"
            :tab-bg-color="tabBgColor"
            :tab-color="tabColor"
            :feedback-color="{tabs:'rgba(0,0,0,0.08)'}"
            disperse
        >
        </c-kg-header>
    </div>
</template>

<config>
    {
        props: [],
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            abstract: '测试用的abstract，测试用的abstract，测试用的abstract，测试用的abstract',
            headerImg: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3163261706,1028326403&fm=58&s=3AA2E50040C292AD22209D630300E0E1',
            tabList:[
                {
                    txt: 'select1'
                },
                {
                    txt: 'select2'
                },
                {
                    txt: 'select3'
                }
            ],
            backgroundImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509093628841&di=80d42f58edb94f622dcef23f48d82e3d&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F64%2F40%2F12bOOOPICc3_1024.jpg',
            backgroundSize: 'auto 100%',
            background2: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517925068212&di=a8b35d32602b035dfb498ddf76434faa&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3D902f9e35c5cec3fd8b6baf71e3b8f809%2F2e2eb9389b504fc2fc5fd3fce3dde71191ef6dc2.jpg) no-repeat 90% center / auto 50%',
            backgroundColor: '#842485',
            tabBgColor: '#f5f5f5',
            tabColor: '#000'
        },
        components: {
            'c-kg-header': 'search-ui/KgHeader/KgHeader'
        }
    }
</config>
```

### 自定义区域 slot

``` atom 使用自定义区域 slot 展示标题、描述、其他信息、分享
<template>
    <c-aladdin>
        <c-kg-header
            :url="url"
            :params="urlParams"
            :tab-list="tabList"
            disperse>
            <span slot="title">
                {{ title }}
            </span>
            <span slot="abstract">
                {{ abstract }}
            </span>
            <div slot="extInfo">
                <c-row>
                    <c-span>这里是拓展功能区</c-span>
                </c-row>
            </div>
            <span
                slot="share"
                style="font-size: 22px;"
                @click="shareClick"
            >
                <c-icon type="share_thick" class="WA_LOG_OTHER"/>
            </span>
        </c-kg-header>
        <c-share
            :show="show"
            :use-popup="trans"
            :use-fusion="false"
            url="https://m.baidu.com"
            title="分享的标题"
            content="content"
            iconUrl="http://m.baidu.com/static/searchbox/po/act/avengers/wxshare.jpg"
            @close="close"
        />
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'http://www.baidu.com',
            title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
            abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
            tabList:[
                {
                    txt: '导航项1'
                },
                {
                    txt: '导航项2'
                },
                {
                    txt: '导航项3'
                }
            ],
            show: false
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-kg-header': 'search-ui/KgHeader/KgHeader',
            'c-span': 'search-ui/Row/Span',
            'c-row': 'search-ui/Row/Row',
            'c-icon': 'search-ui/Icon/Icon',
            'c-share': 'search-ui/Share/Share'
        }
    }
</config>

<script>
export default {
    methods: {
        shareClick(e) {
            // 必须，阻止外层 a 链接默认跳转事件
            e.cancelable && e.preventDefault();
            // 必须，阻止冒泡，避免 sf 控制跳转
            e.stopPropagation();
            this.show = true;
        },
        close() {
            this.show = false;
        }
    }
};
</script>
```

### 内容异步加载

```atom 带内容切换动画，支持内容异步加载
<template>
    <div class="c-container">
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            @navclick="onClick">
        </c-kg-header>
        <c-content
            :selected-index="selected"
            :list="tabList"
            class="c-gap-top"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535038146186&di=c67fdeb846fced916b2d0beb8e00990b&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa8ec8a13632762d04e42fdf4a7ec08fa513dc679.jpg"
                    type="z"
                />
                两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
            </div>
            <div>
                沿对革，异对同，白叟对黄童。江风对海雾，牧子对渔翁。颜巷陋，阮途穷，冀北对辽东。池中濯足水，门外打头风。梁帝讲经同泰寺，汉皇置酒未央宫。尘虑萦心，懒抚七弦绿绮；霜华满鬓，羞看百炼青铜。
                <br>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530199702668&di=5a2eb2bb392afe97869ebc075d61e63f&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F279759ee3d6d55fb70532f6d6a224f4a21a4dde0.jpg"
                    type="z"
                />
                贫对富，塞对通，野叟对溪童。鬓皤对眉绿，齿皓对唇红。天浩浩，日融融，佩剑对弯弓。半溪流水绿，千树落花红。野渡燕穿杨柳雨，芳池鱼戏芰荷风。女子眉纤，额下现一弯新月；男儿气壮，胸中吐万丈长虹。
            </div>
            <div>
                春对夏，秋对冬，暮鼓对晨钟。观山对玩水，绿竹对苍松。冯妇虎，叶公龙，舞蝶对鸣蛩。衔泥双紫燕，课蜜几黄蜂。春日园中莺恰恰，秋天塞外雁雍雍。秦岭云横，迢递八千远路；巫山雨洗，嵯峨十二危峰。
                <br>
                明对暗，淡对浓，上智对中庸。镜奁对衣笥，野杵对村舂。花灼烁，草蒙茸，九夏对三冬。台高名戏马，斋小号蟠龙。手擘蟹螯从毕卓，身披鹤氅自王恭。五老峰高，秀插云霄如玉笔；三姑石大，响传风雨若金镛。
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535632942&di=874efbceb202a5bc38f3c5cf4b424846&imgtype=jpg&er=1&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F3812b31bb051f8193909739cddb44aed2e73e73c.jpg"
                    type="z"
                />
                仁对义，让对恭，禹舜对羲农。雪花对云叶，芍药对芙蓉。陈后主，汉中宗，绣虎对雕龙。柳塘风淡淡，花圃月浓浓。春日正宜朝看蝶，秋风那更夜闻蛩。战士邀功，必借干戈成勇武；逸民适志，须凭诗酒养踈慵。
            </div>
        </c-content>
    </div>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            abstract: '测试用的abstract，测试用的abstract，测试用的abstract，测试用的abstract',
            tabList:[
                {
                    txt: 'select1',
                    loading: false
                },
                {
                    txt: 'select2',
                    loading: true
                },
                {
                    txt: '异步 tab',
                    loading: true
                }
            ],
            selected: 0
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-content': 'search-ui/Content/Content',
            'c-kg-header': 'search-ui/KgHeader/KgHeader',
            'c-tabs-content': 'search-ui/Tabs/TabsContent',
            'c-tabs-item': 'search-ui/Tabs/TabsItem'
        }
    }
</config>

<script>
export default {
    methods: {
        onClick(value) {
            this.selected = value.index;
            setTimeout(() => {
                this.tabList[this.selected].loading = false;
            }, 1000);
        }
    }
}
</script>
```

```atom 反馈、评价和分享
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :abstract="abstract"
            :tab-list="tabList"
            :feedback="feedbackContent"
            :evaluate="evaluate"
            :share-params="shareParams"
            @navclick="handleNavClick"
            @feedbackclick="handleFeedbackClick"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tabList:[
            {
                txt: '导航项1',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项2',
                url: 'https://www.baidu.com'
            },
            {
                txt: '导航项3',
                url: 'https://www.baidu.com'
            }
        ],
        feedbackContent: {
            suggest: {
                is_show: 1,
                title: "您遇到了什么问题",
                feedback_type: "",
                content: {
                    "0": {
                        "appid": 219412,
                        "text": "内容不是最新的",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33945
                    },
                    "1": {
                        "appid": 219412,
                        "text": "内容中有错误信息",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33946
                    },
                    "2": {
                        "appid": 219412,
                        "text": "这条结果与搜索词无关",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33840
                    },
                    "3": {
                        "appid": 219412,
                        "text": "变形、错乱、乱码等问题",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29452
                    },
                    "4": {
                        "appid": 219412,
                        "text": "其他问题及建议",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29462,
                        "reason2": 30688
                    }
                }
            }
        },
        evaluate: {
            url: 'https://m.baidu.com',
            params: {
            }
        },
        shareParams: {
            url: 'https://m.baidu.com',
            title: '分享的标题',
            content: '分享的内容',
            iconUrl: 'http://m.baidu.com/static/searchbox/po/act/avengers/wxshare.jpg'
        }
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>

<script>
export default {
    methods: {
        handleNavClick() {
            console.log('handleNavClick');
        },
        handleFeedbackClick(obj) {
            console.log('handleFeedbackClick obj', obj);
        }
    }
};
</script>
```


### 实体属性头部

```atom 实体属性头部
<template>
    <c-aladdin>
        <div class="c-gap-inner-top-large c-font-big">
            <span class="c-color-link c-gap-right-small">实体名称</span>
            <span class="c-color-gray">/</span>
            <span class="c-gap-left-small c-color-gray">属性名称</span>
        </div>
        <section class="c-gap-top-small c-gap-inner-bottom">
            <c-img-content
                img-src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3515181095,2934747526&fm=58&s=F8A2BD52D6C390A4662119230300E0E1">
                <c-line
                    class="c-color-link c-font-sigma"
                    :clamp="1">
                    刘德华
                </c-line>
                <div>生日：1961年9月27日</div>
            </c-img-content>
        </section>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-kg-header': 'search-ui/KgHeader/KgHeader',
            'c-kg-footer': 'search-ui/KgFooter/KgFooter'
        }
    }
</config>
```

### 可滑动样式

```atom 强样式
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :tab-scroll="true"
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tabList:[
            {
                txt: '导航项1'
            },
            {
                txt: '导航项2'
            },
            {
                txt: '导航项3'
            },
            {
                txt: '导航项4'
            },
            {
                txt: '导航项5'
            },
            {
                txt: '导航项6'
            },
            {
                txt: '导航项7'
            },
            {
                txt: '导航项8'
            },
            {
                txt: '导航项9'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>
```

```atom 弱样式
<template>
    <c-aladdin>
        <c-kg-header
            :title="title"
            :url="url"
            :params="urlParams"
            :abstract="abstract"
            :tab-list="tabList"
            :tab-scroll="true"
            is-weaken
        />
    </c-aladdin>
</template>

<config>
{
    data: {
        url: 'https://www.baidu.com',
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tabList:[
            {
                txt: '导航项1'
            },
            {
                txt: '导航项2'
            },
            {
                txt: '导航项3'
            },
            {
                txt: '导航项4'
            },
            {
                txt: '导航项5'
            },
            {
                txt: '导航项6'
            },
            {
                txt: '导航项7'
            },
            {
                txt: '导航项8'
            },
            {
                txt: '导航项9'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</config>
```

## 注意事项

1. 在自定义标题栅格为 7n 时，根据标题字数和屏幕大小，会有以下策略：
![](http://agroup-bos.cdn.bcebos.com/0c7749bfeba893da960978f951215aa8b0f37659)

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
title | string | - | 可选 | 标题文案 | -
titleColumnNumber | number | 11 | 可选 | 标题所占栅格数 | -
rightColumnNumber | number | 1 | 可选 | 右侧`slot`所占栅格数 | -
url | string |  | 可选 | 跳转链接 | -
params | object | - | 可选 | 跳转链接所需参数 | See [Link](./Link#API) `params`
abstract | string | - | 可选 | 摘要 | -
headerImg | string | - | 可选 | 头图区图片地址 | -
headerImgType | string | s | 可选 | 头图比例，值有（s,l,w,x,y） | See [栅格图片](http://pmd.baidu.com/doc/#image)
headerImgAlign | string | - | 可选 | 头图对齐方式 | -
background | string | - | 可选 | css&nbsp;background&nbsp;主要用来实现背景色渐变 | -
bgColor | string | #7d7d7d | 可选 | 头图区背景颜色 | -
bgImg | string | - | 可选 | 头图区背景图，最好保持和背景颜色同一色调，图片尺寸要求:<br>-&nbsp;宣发样式高度&nbsp;>=&nbsp;164px,&nbsp;非宣发样式高度&nbsp;>=&nbsp;88px<br>-&nbsp;非半图模式下，background-size采用cover铺满<br>-&nbsp;半图模式下，background-size采用auto&nbsp;100%，高度撑满，宽度自适应<br>-&nbsp;合理控制图片大小 | -
bgSize | string | - | 可选 | 背景拉伸方式 | -
bg2 | string |  | 可选 | 头图区第二层背景，在第一层背景之上，可以配合第一层实现一些特殊样式 | -
halfBg | boolean | false | 可选 | 背景图是否为半图（占屏宽1/2），只有设置背景图之后才有意义<br>同时影响title展现，半图title最多展现2行，占屏幕宽度1/2 | -
color | string | #fff | 可选 | 字体颜色 | -
tabList | array | - | 可选 | 一级导航数据 | -
>> tabList[].txt | string | - | - | 文案 | -
>> tabList[].url | string | - | - | 跳转链接 | -
>> tabList[].params | string | - | - | 跳转链接所需参数 | -
>> tabList[].dataModule | string | - | - | 统计区块名称 | -
tabColor | string | - | 可选 | tab区字体颜色，未设置时和color保持着一致 | -
tabBgColor | string | - | 可选 | tab区背景颜色，未设置时和bgColor保持着一致 | -
selectedIndex | number | 0 | 可选 | 一级导航默认选中项 | -
isWeaken | boolean | false | 可选 | 是否为弱化样式，弱化样式下样式固定，背景图，背景色，字体颜色，分享设置等无效 | -
disableEvent | boolean | false | 可选 | 禁用tab点击事件 | -
disperse | boolean | false | 可选 | 宣发样式，高度更高，tab特殊样式 | -
feedbackColor | object | {"header":"rgba(225,225,225,0.08)","tabs":"rgba(225,225,225,0.08)"} | 可选 | 设置头部和tab区域的点击态颜色 | -
tabScroll | boolean | false | 可选 | 导航栏是否滚动 | -
feedback | object | - | 可选 | 反馈参数；详情请参考：[Atom&nbsp;卡片反馈功能开发规范](http://sfe.baidu.com:8188/standard/feedback.md) | -
evaluate | object | - | 可选 | 评价数据；详见&nbsp;[TooltipFuncBtn&nbsp;组件文档](http://soy.baidu-int.com/component/TooltipFuncBtn) | -
>> evaluate.url | string | - | - | 评价跳转链接 | -
>> evaluate.params | object | - | - | 评价跳转链接的&nbsp;urlParams | -
shareParams | object | - | 可选 | 分享参数；详情请参考：[Share&nbsp;分享组件](http://soy.baidu-int.com/component/Share) | -
titleDataModule | string |  | 可选 | 顶部标题区域的data-module属性 | -

### Slots



名称 | 描述
--- | ---
title | 标题支持拓展，拓展将覆盖title属性文本
abstract | 摘要描述支持拓展，拓展将覆盖abstract属性文本
share | 分享拓展，可以配合`Share`组件实现分享功能
extInfo | 额外的拓展信息，位置在描述信息下一行，一般使用在宣发样式下

### Events


- **navclick**: tab点击时触发

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件对象
  ${param1}.index | number | 点击项的索引



