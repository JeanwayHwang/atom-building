---
name: Footer
title: 卡片脚注
category: 框架类
owner: 王凯
---

## 使用场景

> 参考UE规范：[E3 【结果页规范】-【页面结构】-【信息来源+延展操作】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Result_CardStructure.html)

## 阿拉丁

```atom 阿拉丁 普通示例
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-footer
            left-text="百度"
            right-url="http://www.baidu.com"
            right-text="跳转百度"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
        }
    }
</script>
```

### 脚注带分隔线

脚注自带分隔线的样式，不要在body区增加脚注分隔线

```atom 阿拉丁 脚注自带分隔线 打开点击态

<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-footer
            left-text="带分隔线的脚注"
            right-url="http://www.baidu.com"
            divider
            right-touchable
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
        }
    }
</script>

```

```atom 阿拉丁 超长截断

<template>
    <div class="c-container">
        <c-footer
            left-text="左侧文案左侧文案左侧文案左侧文案左侧文案左侧文案"
            right-url="http://www.baidu.com"
            right-text="右侧文案右侧文案右侧文案右侧文案右侧文案右侧文案右侧文案"/>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>

```

```atom 阿拉丁；反馈、评价入口
<template>
    <div class="c-container">
        <c-footer
            left-text="百度聚合"
            right-url="http://www.baidu.com"
            right-text="右侧文案"
            :divider="false"
            :feedback="feedbackContent"
            :evaluate="evaluate"
            @feedbackclick="handleFeedbackClick">
        </c-footer>
    </div>
</template>
<script type="config">
    {
        data: {
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
            }
        },
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleFeedbackClick(obj) {
                console.log('handleFeedbackClick obj', obj);
            }
        }
    };
</script>
```

```atom 阿拉丁 左侧 slot

<template>
    <div class="c-container">
        <c-footer
            time="1508314138953"
            left-text="左侧文案"
            right-url="http://www.baidu.com"
            right-text="跳转百度跳转百度跳转百度跳转百度跳转百度"
            :divider="false"
        >
            <span class="c-color-orange">
                这是一个slot
            </span>
        </c-footer>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>

```

```atom 阿拉丁 使用左侧 slot 添加 Mip 标

<template>
    <div class="c-container">
        <c-footer
            time="1508314138953"
            left-text="左侧文案"
            right-url="http://www.baidu.com"
            right-text="跳转百度跳转百度跳转百度跳转百度跳转百度"
            :divider="false"
        >
            <c-mip-icon
                class="c-gap-left-small">
            </c-mip-icon>
        </c-footer>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer',
            'c-mip-icon': 'search-ui/Footer/MipIcon'
        }
    }
</script>

```

## 自然结果

存在 showUrl 属性时，组件会认为是自然结果，leftText、rightText 无效

```atom 自然结果 showUrl

<template>
    <div class="c-container">
        <c-footer
            show-url="www.baidu.com"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>

```

```atom 自然结果 时间（字符串类型）

<template>
    <div class="c-container">
        <c-footer
            show-url="www.baidu.com"
            time="2017年8月31日"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>

```

```atom 自然结果 时间（数字类型） 不传服务器时间

<template>
    <div class="c-container">
        <c-footer
            show-url="www.baidu.com"
            :time="1508314138953"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>

```

```atom 自然结果 时间（数字类型） 传服务器时间

<template>
    <div class="c-container">
        <c-footer
            show-url="www.baidu.com"
            :time="1508314138953"
            :server-time="1508314038953"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>

```

```atom 自然结果 使用 slot；增加反馈数据

<template>
    <div class="c-container">
        <c-footer
            show-url="www.baidu.com"
            :feedback="feedbackContent"
            @feedbackclick="handleFeedbackClick"
        >
            <span
                class="c-color-orange">
                这是一个slot这是一个sl
            </span>
        </c-footer>
    </div>
</template>

<script type="config">
    {
        data: {
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
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleFeedbackClick(obj) {
                console.log('handleFeedbackClick obj', obj);
            }
        }
    };
</script>
```

```atom 自然结果 使用 slot 添加 Mip 标

<template>
    <div class="c-container">
        <c-footer
            show-url="www.baidu.com">
            <c-mip-icon
                class="c-gap-left-small">
            </c-mip-icon>
        </c-footer>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer',
            'c-mip-icon': 'search-ui/Footer/MipIcon'
        }
    }
</script>

```

## 特殊情况示例

```atom 只有右侧图标的脚注
<template>
    <div class="c-container">
        <c-footer
            right-url="http://www.baidu.com"
            :divider="false"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>
```

```atom 只传rightUrlParams
<template>
    <div class="c-container">
        <c-footer
            :right-url-params="params"
            right-text="一些文字"
            :divider="false"
        />
    </div>
</template>

<script type="config">
    {
        data: {
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            }
        },
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>
```

```atom 只有右侧文案的脚注
<template>
    <div class="c-container">
        <c-footer
            right-text="跳转百度"
            :divider="false"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-footer': 'search-ui/Footer/Footer'
        }
    }
</script>
```

## 注意事项

1. 该组件分为两个应用场景：
    - 阿拉丁；不传 `showUrl` 属性即为阿拉丁类型；样式为左右各6栅格
    - 自然结果；传入 `showUrl` 属性即为自然结果类型；样式为一整行

2. 已知兼容性问题：
    - 右侧文字过多时，在 QQ 浏览器中会出现省略号只显示两个的问题，使用时请注意尽量控制文案在9个汉字之内


## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
showUrl | string | - | 可选 | 左侧显示的资源方链接，自然结果专用 | -
leftText | string | - | 可选 | 左侧文字 | -
leftIcon | string | - | 可选 | 左侧图标，会添加一个`c-font-icon-${leftIcon}`的`class` | -
rightText | string | - | 可选 | 右侧跳转显示的文字 | -
rightUrl | string | - | 可选 | 右侧跳转链接 | -
rightUrlParams | object | - | 可选 | 右侧跳转链接所需参数 | See [Link](./Link#API) `params`
divider | boolean | false | 可选 | 上方是否有分割线 | Fix 有默认值false，否则会报前后端渲染不一致的错误
time | number \| string | - | 可选 | 时间戳（单位：毫秒） | -
serverTime | number \| string | - | 可选 | 服务器时间戳（单位：毫秒）<br>注意：若不提供服务器时间，则以本地时间作为服务器时间 | -
feedback | boolean \| object | - | 可选 | 反馈参数；详情请参考：[Atom&nbsp;卡片反馈功能开发规范](http://sfe.baidu.com:8188/standard/feedback.md)；其中&nbsp;boolean&nbsp;类型已经废弃使用 | -
rightTouchable | boolean | false | 可选 | 是否开启右侧跳转链接点击态 | -
footerMoreDataModule | boolean |  | 可选 | footer的右侧查看更多的data-module属性，默认是'' | -

#### MipIcon

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string | https://m.baidu.com/sf?pd=gloryweb&actname=introduction&title=%E6%9E%81%E9%80%9F%E6%B5%8F%E8%A7%88%E6%A8%A1%E5%BC%8 | 可选 | 跳转链接，默认跳转到MIP极速页 | -
params | object | {"type":"sf","tcUrl":"https://m.baidu.com/sf?pd=gloryweb&actname=introduction&title=%E6%9E%81%E9%80%9F%E6%B5%8F%E8%A7%88%E6%A8%A1%E5%BC%8F","sfUrl":"/sf?pd=gloryweb&actname=introduction&title=%E6%9E%81%E9%80%9F%E6%B5%8F%E8%A7%88%E6%A8%A1%E5%BC%8F"} | 可选 | 跳转链接所需的参数 | See [Link](./Link#API) `params`

### Slots



名称 | 描述
--- | ---
default | 脚注自定义内容

### Events


- **feedbackclick**: 反馈点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 反馈点击事件对象
  ${param1}.event | Event | 透传点击事件对象
  ${param1}.feedback | Event | 反馈数据

- **click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传点击事件对象

- **leftclick**: 脚注左侧点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传点击事件对象


#### MipIcon


- **click**: 点击事件
	无参数



