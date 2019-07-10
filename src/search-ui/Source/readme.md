---
name: Source
title: 来源组件
category: 展示元素类
owner: 陈骁
---

## 使用场景

> 参考UE规范：[D19.1 【基础组件】-【熊掌号&服务号】-【熊掌号来源】](http://sfe.baidu.com:8186/ue-guide/follow.html)

## 示例

### 小程序来源

```atom 单个小程序
<template>
    <c-aladdin
        touchable
        hide-footer
    >
        <c-source-multi
            :list="list"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    icon: 'http://img1.imgtn.bdimg.com/it/u=3159708968,61693733&fm=26&gp=0.jpg',
                    text: '减减鸭',
                    url: 'https://m.baidu.com'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source-multi': 'search-ui/Source/SourceMulti'
        }
    }
</script>

<script>
export default {
    methods: {
    }
};
</script>
```

```atom 多个小程序
<template>
    <c-aladdin
        touchable
        hide-footer
    >
        <c-source-multi
            :list="list"
            :selected-index="selectedIndex"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    icon: 'http://img1.imgtn.bdimg.com/it/u=3159708968,61693733&fm=26&gp=0.jpg',
                    text: '减减鸭',
                    url: 'https://m.baidu.com'
                },
                {
                    icon: 'http://img2.imgtn.bdimg.com/it/u=108649693,3804342541&fm=26&gp=0.jpg',
                    text: '飞常准查航班',
                    url: 'https://m.baidu.com'
                },
                {
                    icon: 'http://img3.imgtn.bdimg.com/it/u=86442609,3870122082&fm=26&gp=0.jpg',
                    text: '百度识图',
                    url: 'https://m.baidu.com'
                },
                {
                    icon: 'http://img5.imgtn.bdimg.com/it/u=2239716434,1910925687&fm=26&gp=0.jpg',
                    text: '你好',
                    url: 'https://m.baidu.com'
                },
            ],
            selectedIndex: 0
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source-multi': 'search-ui/Source/SourceMulti'
        }
    }
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('handleChange', obj);
            // 重置选中项索引
            this.selectedIndex = obj.index;
        }
    }
};
</script>
```

```atom 多个小程序；反馈；箭头
<template>
    <c-aladdin
        touchable
        hide-footer
    >
        <c-source-multi
            :list="list"
            :feedback="feedbackContent"
            :selected-index="selectedIndex"
            more
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    icon: 'http://img1.imgtn.bdimg.com/it/u=3159708968,61693733&fm=26&gp=0.jpg',
                    text: '减减鸭',
                    url: 'https://m.baidu.com'
                },
                {
                    icon: 'http://img2.imgtn.bdimg.com/it/u=108649693,3804342541&fm=26&gp=0.jpg',
                    text: '飞常准查航班',
                    url: 'https://m.baidu.com'
                },
                {
                    icon: 'http://img3.imgtn.bdimg.com/it/u=86442609,3870122082&fm=26&gp=0.jpg',
                    text: '百度识图',
                    url: 'https://m.baidu.com'
                },
            ],
            selectedIndex: 0,
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
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source-multi': 'search-ui/Source/SourceMulti'
        }
    }
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('handleChange', obj);
            // 重置选中项索引
            this.selectedIndex = obj.index;
        }
    }
};
</script>
```


```atom 传入熊掌号数据
<template>
    <c-aladdin
        touchable
        title="整卡可点"
        hide-footer>
        <c-source
            :xzh-info="xzhInfo"
            @click="handleSourceClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            xzhInfo: {
                appid: "1596082251433427",
                des: "百度AI首款智能视频音箱",
                logo: "https://cambrian-images.cdn.bcebos.com/e3321ee33a66b493b002cbcbae602689_1522205454430.jpeg@w_100,h_100",
                next: "1",
                otime: "1522142650",
                pauid: "17592191638838",
                platform: 3,
                showurl: 0,
                title: "小度在家",
                url: "https://author.baidu.com/home/1596082251433427?from=dusite_sresults",
                v_type: 10
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 普通示例 带跳转链接
<template>
    <c-aladdin
        touchable
        title="整卡可点"
        hide-footer>
        <c-source
            :url="url"
            :params="params"
            :img-src="imgSrc"
            :source="source"
            :time="time"
            @click="handleSourceClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            url: 'http://www.baidu.com',
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            },
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
            time: '2017年6月5日',
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 不传图片 不带跳转链接
<template>
    <c-aladdin
        touchable
        title="整卡可点"
        hide-footer>
        <c-source
            :source="source"
            :time="time"
            @click="handleSourceClick">
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            source: '宝宝知道',
            time: '2017年6月5日',
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 时间（字符串类型）
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-source
            :img-src="imgSrc"
            :source="source"
            :time="time"
            @click="handleSourceClick">
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
            time: '2018年5月1日',
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 时间（数字类型）
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-source
            :img-src="imgSrc"
            :source="source"
            :time="time"
            @click="handleSourceClick">
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
            time: 1510798394304,
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 时间（数字类型），传入服务器时间
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-source
            :img-src="imgSrc"
            :source="source"
            :time="time"
            :server-time="serverTime"
            @click="handleSourceClick">
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
            time: 1510798394304,
            serverTime: 1510798604304
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 不传时间
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-source
            :img-src="imgSrc"
            :source="source"
            @click="handleSourceClick">
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 增加反馈、评价数据
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-source
            :url="url"
            :params="params"
            :img-src="imgSrc"
            :source="source"
            :feedback="feedbackContent"
            :evaluate="evaluate"
            @click="handleSourceClick"
        >
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            url: 'http://www.baidu.com',
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            },
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
            time: '2017年6月5日',
            evaluate: {
                url: 'https://m.baidu.com',
                params: {
                }
            },
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
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 使用 slot
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-source
            :url="url"
            :params="params"
            :img-src="imgSrc"
            :source="source"
            @click="handleSourceClick"
        >
            <span class="c-color-orange">
                这是一个slot
            </span>
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            url: 'http://www.baidu.com',
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            },
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
            time: '2017年6月5日'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 使用 slot 添加 Mip 标
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-source
            :url="url"
            :params="params"
            :img-src="imgSrc"
            :source="source"
            @click="handleSourceClick">
            <span>
                <c-mip-icon
                    class="c-gap-left-small">
                </c-mip-icon>
            </span>
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            url: 'http://www.baidu.com',
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            },
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
            time: '2017年6月5日',
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
            'c-mip-icon': 'search-ui/Footer/MipIcon'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

```atom 时间；字符串 '0' 特殊处理
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-source
            :img-src="imgSrc"
            :source="source"
            time="0"
            @click="handleSourceClick">
        </c-source>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519383755415&di=63f823ced0d63a8bca0d7d763d866f0a&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fw%253D268%2Fsign%3D873a6746718b4710ce2ffacafbcfc3b2%2F0e2442a7d933c895ecd8071cd21373f082020036.jpg',
            source: '宝宝知道',
            time: 1510798394304,
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-source': 'search-ui/Source/Source',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 点击事件
            handleSourceClick(e) {
                console.log('handleSourceClick', e);
            }
        }
    }
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string | - | 可选 | 跳转链接 | -
params | object | - | 可选 | 跳转链接所需参数 | See [Link](./Link#API) `params`
imgSrc | string | - | 可选 | 图片链接 | -
source | string | - | 可选 | 来源文案 | -
time | string \| number | - | 可选 | 时间（可传字符串，也可传数字时间戳）<br>传字符串直接展示，传数字时间戳会使用&nbsp;TimeSpan&nbsp;转换成相对时间 | -
serverTime | number | - | 可选 | 服务器端时间戳 | -
timeMarginLeft | string | .1rem | 可选 | 时间字段距离左边的间距 | -
xzhInfo | object | - | 可选 | 熊掌号数据；参数说明请参考：[阿拉丁&nbsp;Atom&nbsp;前端增加熊掌号入口开发规范](http://sfe.baidu.com:8188/standard/xzh.md) | -
feedback | object | - | 可选 | 反馈参数；详情请参考：[Atom&nbsp;卡片反馈功能开发规范](http://sfe.baidu.com:8188/standard/feedback.md) | -
evaluate | object | - | 可选 | 评价数据；详见&nbsp;[TooltipFuncBtn&nbsp;组件文档](http://soy.baidu-int.com/component/TooltipFuncBtn) | -
>> evaluate.url | string | - | - | 评价跳转链接 | -
>> evaluate.params | object | - | - | 评价跳转链接的&nbsp;urlParams | -

#### SourceMulti

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
list | array | - | 可选 | 数组数据 | -
>> list[].icon | string | - | - | 图标地址 | -
>> list[].text | string | - | - | 文案 | -
selectedIndex | number | 0 | 可选 | 选项索引 | -
more | boolean | false | 可选 | 是否显示更多箭头 | -
feedback | object | - | 可选 | 反馈参数；详情请参考：[Atom&nbsp;卡片反馈功能开发规范](http://sfe.baidu.com:8188/standard/feedback.md) | -
evaluate | object | - | 可选 | 评价数据 | -
>> evaluate.url | string | - | - | 评价跳转链接 | -
>> evaluate.params | Object | - | - | 评价跳转链接的&nbsp;urlParams | -

### Slots



名称 | 描述
--- | ---
default | 内容区插槽，位置在来源文案之后，时间文案之前

### Events


- **funcbtnclick**: 功能按钮点击事件
	无参数

- **feedbackclick**: 反馈入口点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Object | 对象参数
  ${param1}.event | Event | 事件对象
  ${param1}.feedback | Object | 反馈数据对象

- **click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传点击事件


#### SourceMulti


- **change**: 改变事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.item | Object | 点击项对象
  ${param1}.index | number | 点击项索引

- **itemclick**: 项点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.item | Object | 点击项对象
  ${param1}.index | number | 点击项索引



