---
name: Aladdin
title: 卡片框架
category: 框架类
owner: 王凯
---


## 使用场景

> 参考UE规范：[E3 【结果页规范】-【结果卡片】](http://soy.baidu-int.com/static/specification/ue-guide/Result_CardStructure.html)

## 注意事项

1. 【NA2.0】整卡可点通过 `touchable` 属性控制，整卡可点卡片内需要单独点击态和点出的元素，需要用 `TouchableFeedback` 封装，且打开点击态效果(`open`属性)，集成了点击态相关组件增加点击态的开关，如`Footer`组件(`right-touchable`)、`ImgContent`组件(`img-touchable`)，需要跟据是否需要单独点击态来开关。

2. 【NA2.0】需要在卡片上实现其他块级整体点击跳转，可以用 `TouchableFeedback` 来实现，参考 `TouchableFeedback` 示例。


## 示例

```atom 卡片结构
<template>
    <c-aladdin
        title="标题区"
        url="http://www.baidu.com"
        show-left-text="信息来源+延展操作"
        show-right-url="http://www.baidu.com"
    >
        <div class="content">
            卡片内容区
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin"
    }
}
</script>

<style lang="less" module>
.content {
    height: 1rem;
}
</style>
```

```atom 增加 data-module
<template>
    <c-aladdin
        data-module="4713"
        title="标题区"
        url="http://www.baidu.com"
        show-left-text="信息来源+延展操作"
        show-right-url="http://www.baidu.com"
    >
        <div class="content">
            卡片内容区
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin"
    }
}
</script>

<style scoped>
.content {
    height: 1rem;
}
</style>
```

```atom 带标题和脚注；整卡可点；开启 footer 点击态
<template>
    <c-aladdin
        touchable
        footer-right-touchable
        show-left-text="信息来源+延展操作"
        show-right-url="http://www.baidu.com"
        title="标题区"
        url="http://m.baidu.com/s?wd=百度"
    >
        <div
            class="content"
        >
            卡片内容区
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        params: {
            type: 'tc',
            tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
        },
        src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-line": "search-ui/Line/Line",
        "c-slink": "search-ui/Slink/Slink",
        "c-link": "search-ui/Link/Link",
        "c-img-content": "search-ui/ImgContent/ImgContent",
        "c-touchable-feedback": "search-ui/TouchableFeedback/TouchableFeedback",
    }
}
</script>
<style scoped>
.content {
    height: 1rem;
}
a {
    color: #000;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(23,23,23,.1);
}
</style>
```

可以使用 `hide-header` 和 `hide-footer` 属性隐藏标题和脚注

```atom 隐藏标题
<template>
    <c-aladdin
        show-right-url="http://www.baidu.com"
        show-right-text="右侧文案"
        show-left-text="左侧文案"
        hide-header
    >
        <div class="content">
            卡片内容区
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-line": "search-ui/Line/Line"
    }
}
</script>

<style lang="less" module>
.content {
    height: 1rem;
}
</style>
```

```atom 隐藏脚注
<template>
    <c-aladdin
        title="百度搜索_标题"
        hide-footer
    >
        <div class="content">
            卡片内容区
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-line": "search-ui/Line/Line"
    }
}
</script>

<style lang="less" module>
.content {
    height: 1rem;
}
</style>
```

```atom 反馈入口
<template>
    <c-aladdin
        :feedback="feedbackContent"
        title="标题区"
        url="http://www.baidu.com"
        show-left-text="信息来源+延展操作"
        show-right-url="http://www.baidu.com"
        @feedbackclick="handleFeedbackClick"
    >
        <div class="content">
            卡片内容区
        </div>
    </c-aladdin>
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
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-line": "search-ui/Line/Line"
    }
}
</script>

<script>
export default {
    methods: {
        handleFeedbackClick(obj) {
            console.log('handleFeedbackClick', obj);
        }
    }
};
</script>

<style lang="less" module>
.content {
    height: 1rem;
}
</style>
```

### Sigma 卡 / Normal 卡 强弱样式退化示例

#### 应用场景

- Sigma 卡有自动退化的需求，而 Sigma 卡和 Normal 卡存在多数可复用部分；

##### 原写法：
- Sigma 卡需使用 Sigma 组件，Normal 卡需使用 Aladdin 组件
- 【存在的问题】需要用不同的父组件包裹，子组件需要重复书写，无法避免冗余代码

##### 新写法如下：
- Sigma / Normal 卡都使用 Aladdin 组件
- 通过 tplInfo.style 进行区分，子组件可最大程度复用，避免重复代码

```atom 【推荐】新写法：Sigma / Normal 卡都使用 Aladdin 组件
<template>
    <c-aladdin
        :title="title"
        :show-right-text="text"
        :show-right-url="url"
        :tpl-info="tplInfo"
        show-left-text="左侧文案"
    >
        <!-- sigma 卡 / normal 卡的 Header -->
        <c-kg-header
            :title="tplInfo.style === 'sigma' ? title : null"
            :url="url"
            :params="urlParams"
            :abstract="tplInfo.style === 'sigma' ? abstract : null"
            :tab-list="tabList"
            :is-weaken="tplInfo.style === 'normal'">
        </c-kg-header>

        <!-- sigma 卡 / normal 卡都需使用的内容区 -->
        <div
            class="c-gap-inner-top c-gap-inner-bottom">
            内容区
            <br>
            <br>
            <c-row class="c-gap-top-large">
                <c-span>
                    <c-btn
                        text="点击切换 Sigma卡 / Normal卡"
                        @click="handleChangeStyle">
                    </c-btn>
                </c-span>
            </c-row>
        </div>

        <!-- sigma 卡的 Footer -->
        <c-kg-footer
            a-if="tplInfo.style === 'sigma'"
            :text="text"
            :url="url"
            :urlParams="params"
            :iconType="iconType"
            :textColor="textColor"
            :iconColor="iconColor">
        </c-kg-footer>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        tplInfo: {
            style: 'sigma'
        },
        url: 'http://www.baidu.com',
        text: '查看更多',
        title: '卡片的标题',
        abstract: '卡片的描述',
        tabList:[
            {
                txt: 'Tab1',
            },
            {
                txt: 'Tab2',
            },
            {
                txt: 'Tab3',
            }
        ],
        iconType: 'kg_right_arrow',
        textColor: '#000',
        iconColor: '#000'
    },
    components: {
        'c-line': 'search-ui/Line/Line',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-btn': 'search-ui/Button/Button',
        'c-img-content': 'search-ui/ImgContent/ImgContent',
        'c-sigma': 'search-ui/Sigma/Sigma',
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader',
        'c-kg-footer': 'search-ui/KgFooter/KgFooter'
    }
}
</script>

<script>
export default {
    methods: {
        handleChangeStyle() {
            if (this.tplInfo.style === 'sigma') {
                this.tplInfo.style = 'normal';
            }
            else {
                this.tplInfo.style = 'sigma';
            }
        }
    }
};
</script>
```

### 标题上方的 slot

```atom 标题上方的 slot
<template>
    <c-aladdin
        title="标题区"
        url="http://www.baidu.com"
        show-left-text="信息来源+延展操作"
        show-right-url="http://www.baidu.com"
    >
        <div slot="beforeTitle">
            <div
                class="top c-gap-inner-top c-gap-inner-bottom"
            >
                标题上方的 slot
            </div>
        </div>
        <div class="content">
            卡片内容区
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin"
    }
}
</script>

<style lang="less" scoped>
.top {
    border: 1px solid #eee;
    text-align: center;
}
.content {
    height: 1rem;
}
</style>
```

### 标题截断

```atom 默认标题截断（大屏设备(网页宽度376px及以上)1行截断，小屏设备(网页宽度376px以下)不截断）
<template>
    <c-aladdin
        title="标题区标题区标题区标题区标题区标题区标题区标题区标题区标题区标题区标题区"
        url="http://www.baidu.com"
        show-left-text="信息来源+延展操作"
        show-right-url="http://www.baidu.com"
    >
        <div class="content">
            卡片内容区
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin"
    }
}
</script>

<style lang="less" scoped>
.top {
    border: 1px solid #eee;
    text-align: center;
}
.content {
    height: 1rem;
}
</style>
```

```atom 标题强制截断（不论大小屏都固定行数截断）
<template>
    <c-aladdin
        title="标题区标题区标题区标题区标题区标题区标题区标题区标题区标题区标题区标题区"
        title-clamp="1"
        url="http://www.baidu.com"
        show-left-text="信息来源+延展操作"
        show-right-url="http://www.baidu.com"
    >
        <div class="content">
            卡片内容区
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin"
    }
}
</script>

<style lang="less" scoped>
.top {
    border: 1px solid #eee;
    text-align: center;
}
.content {
    height: 1rem;
}
</style>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string | - | 可选 | 标题链接的地址 | -
urlParams | object | - | 可选 | 标题链接所需的参数 | See [Link](./Link#API) `params`
title | string | - | 可选 | 标题的文本，支持高亮 | -
titleClamp | string \| number | - | 可选 | 显示行数，范围为1-5；<br>t1&nbsp;默认大屏设备(网页宽度376px及以上)1行截断，小屏设备(网页宽度376px以下)不截断；<br>t2&nbsp;默认一行截断 | -
titleClampStrategy | string | - | 可选 | 截断策略；<br><br>-&nbsp;'default'&nbsp;大屏设备（网页宽度&nbsp;376px&nbsp;及以上）1行截断，小屏设备（网页宽度&nbsp;376px&nbsp;以下）不截断；<br>-&nbsp;'L1S2'&nbsp;大屏设备（网页宽度&nbsp;376px&nbsp;及以上）1行截断，小屏设备（网页宽度&nbsp;376px&nbsp;以下）且没有标签且没有图标时2行截断，有标签或者有图标时不截断； | -
titleIcon | string | - | 可选 | 标题图标 | See [Icon](./Icon#API) `type`
titleArrow | boolean | - | 可选 | 标题右侧是否有箭头，情景页一般要求设置为&nbsp;true | -
titleLabel | string | - | 可选 | 标题后的标签文本 | -
titleLabelType | string | - | 可选 | 标题后的标签类型 | See [Label](./Label#API) `type`
titleSize | string | - | 可选 | 标题尺寸，支持&nbsp;`t1`&nbsp;`t2` | See [Title](./Title#API) `size`
titleFontWeight | string | - | 可选 | 标题字体粗细&nbsp;css&nbsp;font-weight | -
titleFeedback | boolean | false | 可选 | 标题是否添加点击态：<br>true&nbsp;为添加；false&nbsp;时会判断&nbsp;url&nbsp;是否存在，存在则添加点击态，否则不添加 | -
titleColor | string | - | 可选 | 标题颜色 | See [Title](./Title#API) `color`
titleVisited | boolean | - | 可选 | 标题访问后是否变灰 | See [Title](./Title#API) `visited`
showUrl | string | - | 可选 | 脚注显示的资源方链接 | -
showLeftText | string | - | 可选 | 脚注左侧文字 | -
showLeftIcon | string | - | 可选 | 脚注左侧文字后面的图标 | See [Icon](./Icon#API) `type`
showRightText | string | - | 可选 | 脚注右侧跳转显示的文字 | -
showRightUrl | string | - | 可选 | 脚注右侧跳转链接 | -
showRightUrlParams | object | - | 可选 | 脚注右侧跳转链接所需参数 | See [Link](./Link#API) `params`
footerDivider | boolean | false | 可选 | 脚注上方是否有分割线 | -
hideHeader | boolean | false | 可选 | 是否去掉标题区域 | -
hideFooter | boolean | false | 可选 | 是否去掉脚注区域 | -
feedback | boolean \| object | - | 可选 | 反馈参数；详情请参考：[Atom&nbsp;卡片反馈功能开发规范](http://sfe.baidu.com:8188/standard/feedback.md)；其中&nbsp;boolean&nbsp;类型已经废弃使用 | -
evaluate | object | - | 可选 | 评价数据；详见&nbsp;[TooltipFuncBtn&nbsp;组件文档](http://soy.baidu-int.com/component/TooltipFuncBtn) | -
>> evaluate.url | string | - | - | 评价跳转链接 | -
>> evaluate.params | object | - | - | 评价跳转链接的&nbsp;urlParams | -
tplInfo | object | {"style":"normal"} | 可选 | 模板信息，这里主要使用&nbsp;tplInfo.style&nbsp;字段，用来判断强弱卡 | -
>> tplInfo.style | string | normal | - | 卡片展现样式，包含&nbsp;normal、sigma、weaken | -
touchable | boolean | false | 可选 | 是否开启整卡可点 | -
footerRightTouchable | boolean | false | 可选 | 是否开启脚注右侧跳转链接点击态 | -
footerMoreDataModule | string |  | 可选 | footer右侧查看更多的属性，默认是空 | -
titleDataModule | string | - | 可选 | 标题区域&nbsp;data-module&nbsp;属性 | -

### Slots



名称 | 描述
--- | ---
beforeTitle | 在标题上方的自定义内容
title | 标题
default | 内容
footer | 脚注

### Events


- **feedbackclick**: 反馈按钮点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件对象
  ${param1}.event | Event | 透传的事件对象
  ${param1}.feedback | object | 反馈数据

- **leftfooterclick**: 脚注左侧点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传脚注的事件对象

- **footer-click**: 脚注点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传脚注的事件对象

- **title-click**: 标题点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传标题的事件对象



