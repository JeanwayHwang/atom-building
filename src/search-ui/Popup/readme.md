---
name: Popup
title: 弹层组件
category: 交互类
owner: 郝妍
---

## 示例

#### 一个普通的弹层
包含头部（标题、关闭区）和内容。
弹层最高占页面高度的70%，超过则弹层内容可滚动。
弹层最低为6p 500px。
```atom 普通弹层
<template>
    <div class="c-container">
        <c-row>
            <c-span col="4">
                <c-button
                    text="普通的弹层"
                    @click="onClickBtn(5)"/>
            </c-span>
            <c-span col="4">
                <c-button
                    text="内容超高的弹层内容超高的弹层内容超高的弹层内容超高的弹层内容超高的弹层内容超高的弹层内容超高的弹层内容超高的弹层内容超高的弹层"
                    @click="onClickBtn(50,'副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题')"/>
            </c-span>
            <c-span col="4">
                <c-button
                    text="内容不足的弹层"
                    @click="onClickBtn(0,'副标题')"/>
            </c-span>
        </c-row>
        <c-popup
            :title="title"
            :subtitle="subtitle"
            :is-open="isOpen"
            @close="onClose">
            <div class="c-gap-inner-top c-gap-inner-bottom">
                <div>无用的文字撑开-开始</div>
                <div a-for="o in loopNum">无用的文字撑开</div>
                <div>无用的文字撑开-结束</div>
            </div>
        </c-popup>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-button': 'search-ui/Button/Button',
            'c-popup': 'search-ui/Popup/Popup',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-icon': 'search-ui/Icon/Icon'
        },
        data: {
            title:'弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题',
            subtitle:'',
            isOpen:false,
            loopNum:0
        }
    }
</script>

<script>
    export default {
        methods: {
            onClickBtn(n, subtitle){
                this.loopNum = n;
                this.subtitle = subtitle;
                this.isOpen = true;
            },
            onClose(){
                this.isOpen = false;
            }
        }
    }
</script>

```

#### 自定义头部功能区
头部支持自定义左/右功能区

```atom 头部左功能区
<template>
    <div class="c-container">
        <c-row>
            <c-span col="6">
                <c-button
                    text="头部功能区的弹层"
                    @click="onClickBtn(5)"/>
            </c-span>
        </c-row>
        <c-popup
            :title="title"
            :subtitle="subtitle"
            :is-open="isOpen"
            @close="onClose">
            <div slot="left">
                <c-line>左侧功能区</c-line>
            </div>
            <div class="c-gap-inner-top c-gap-inner-bottom">
                <div>无用的文字撑开-开始</div>
                <div a-for="o in loopNum">无用的文字撑开</div>
                <div>无用的文字撑开-结束</div>
            </div>
        </c-popup>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-button': 'search-ui/Button/Button',
            'c-popup': 'search-ui/Popup/Popup',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-icon': 'search-ui/Icon/Icon',
            'c-line':'search-ui/Line/Line'
        },
        data: {
            title:'弹层标题',
            subtitle:'副标题',
            isOpen:false,
            loopNum:0
        }
    }
</script>

<script>
    export default {
        methods: {
            onClickBtn(n){
                this.loopNum = n;
                this.isOpen = true;
            },
            onClose(){
                this.isOpen = false;
            }
        }
    }
</script>

```


```atom 头部右功能区，自定义关闭按钮
<template>
    <div class="c-container">
        <c-row>
            <c-span col="6">
                <c-button
                    text="头部功能区的弹层"
                    @click="onClickBtn(5)"/>
            </c-span>
        </c-row>
        <c-popup
            :title="title"
            :subtitle="subtitle"
            :is-open="isOpen"
            @close="onClose">
            <div slot="close">完成</div>
            <div class="c-gap-inner-top c-gap-inner-bottom">
                <div>无用的文字撑开-开始</div>
                <div a-for="o in loopNum">无用的文字撑开</div>
                <div>无用的文字撑开-结束</div>
            </div>
        </c-popup>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-button': 'search-ui/Button/Button',
            'c-popup': 'search-ui/Popup/Popup',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-icon': 'search-ui/Icon/Icon'
        },
        data: {
            title:'弹层标题',
            subtitle:'副标题',
            isOpen:false,
            loopNum:0
        }
    }
</script>

<script>
    export default {
        methods: {
            onClickBtn(n){
                this.loopNum = n;
                this.isOpen = true;
            },
            onClose(){
                this.isOpen = false;
            }
        }
    }
</script>

```


#### 自定义头部/底部
弹层头部12n区域支持自定义
弹层底部12n区域支持自定义

```atom 自定义头部/底部
<template>
    <div class="c-container">
        <c-row>
            <c-span col="6">
                <c-button
                    text="自定义头部的弹层"
                    @click="onClickBtn('Header')"/>
            </c-span>
            <c-span col="6">
                <c-button
                    text="自定义底部弹层"
                    @click="onClickBtn('Footer')"/>
            </c-span>
        </c-row>
        <!--自定义头部的弹层-->
        <c-popup
            :is-open="isHeaderDemoOpen"
            @close="onClose('Header')">
            <div slot="title">
                <c-img-content
                    :img-src="src"
                    :img-col="2"
                    img-is-round>
                    <div class="wa-ver-middle">
                        <c-title
                            text="自定义标题"
                            clamp="2"
                            size="t2">
                        </c-title>
                        <c-line
                            class="c-color-gray c-font-normal">
                            <span>自定义副标题1</span>
                            <span class="c-gap-left">自定义副标题2</span>
                        </c-line>
                    </div>
                </c-img-content>
            </div>
            <div class="c-gap-inner-top c-gap-inner-bottom">
                <div>无用的文字撑开-开始</div>
                <div a-for="o in loopNum">无用的文字撑开</div>
                <div>无用的文字撑开-结束</div>
            </div>
        </c-popup>
        <!--自定义底部的弹层-->
        <c-popup
            :is-open="isFooterDemoOpen"
            title="反馈"
            @close="onClose('Footer')">
            <div class="c-gap-inner-top c-gap-inner-bottom">
                <div>无用的文字撑开-开始</div>
                <div a-for="o in loopNum">无用的文字撑开</div>
                <div>无用的文字撑开-结束</div>
            </div>
            <div slot="footer">
                <div class="c-gap-top-small">
                    <c-row>
                        <c-span col="12">
                            <c-button
                                text="提交"
                                @click="onClose('Footer')"/>
                        </c-span>
                    </c-row>
                    <c-line color="gray c-gap-bottom">您提供的数据将帮助我们改进百度搜索</c-line>
                </div>
            </div>
        </c-popup>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-button': 'search-ui/Button/Button',
            'c-popup': 'search-ui/Popup/Popup',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-icon': 'search-ui/Icon/Icon',
            'c-title': 'search-ui/Title/Title',
            'c-line':'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent'
        },
        data: {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519290039943&di=ec2f1982b9ddf7b3c465ad82aae03e49&imgtype=0&src=http%3A%2F%2Fstatic01.coloros.com%2Fbbs%2Fdata%2Fattachment%2Fforum%2F201506%2F20%2F131326i3qohqfunvhq3bmv.png',
            isHeaderDemoOpen:false,
            isFooterDemoOpen:false,
            loopNum:30
        }
    }
</script>

<script>
    export default {
        methods: {
            onClickBtn(key) {
                this['is'+key+'DemoOpen'] = true;
            },
            onClose(key) {
                console.log('onClose key', key);
                this['is'+key+'DemoOpen'] = false;
            }
        }
    }
</script>

<style scoped>
.wa-btn {
    background-color:#000;
    height:0.44rem;
    line-height:0.44rem;
    text-align:center;
    color:#fff;
}
.wa-ver-middle {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
}
</style>
```

#### 设置弹层面板最大高度
设置弹层面板最大高度，默认为 70%
```atom 设置弹层面板最大高度
<template>
    <div class="c-container">
        <c-row>
            <c-span col="4">
                <c-button
                    text="设置弹层面板最大高度"
                    @click="onClickBtn(50,'副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题副标题')"/>
            </c-span>
        </c-row>
        <c-popup
            :title="title"
            :subtitle="subtitle"
            :is-open="isOpen"
            max-height="50%"
            @close="onClose">
            <div class="c-gap-inner-top c-gap-inner-bottom">
                <div>无用的文字撑开-开始</div>
                <div a-for="o in loopNum">无用的文字撑开</div>
                <div>无用的文字撑开-结束</div>
            </div>
        </c-popup>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-button': 'search-ui/Button/Button',
            'c-popup': 'search-ui/Popup/Popup',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-icon': 'search-ui/Icon/Icon'
        },
        data: {
            title:'弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题弹层标题',
            subtitle:'',
            isOpen:false,
            loopNum:0
        }
    }
</script>

<script>
    export default {
        methods: {
            onClickBtn(n, subtitle){
                this.loopNum = n;
                this.subtitle = subtitle;
                this.isOpen = true;
            },
            onClose(){
                this.isOpen = false;
            }
        }
    }
</script>
```

## API：

### Props

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| title | string |  | 弹层标题(9n) |
| subtitle | string |  | 弹层副标题(9n) |
| isOpen | boolean | false | 是否打开弹层 |
| isHideHeaderBorderBottom | boolean | false | 是否隐藏头部功能区下边线 |
| maxHeight | string | '70%' | 弹层面板最大高度 |
| minHeight | string | '1.67rem' | 弹层面板最大高度 |
| hasPadding | boolean | false |  是否有左右边距 |
| transition | boolean | false | 是否有弹出动画 |
| isHideHeader | boolean | false | 是否隐藏 header |
| stopTouchEventThrough | boolean | true | 阻止触摸事件透传开关 |

### Slots

| 名称 | 描述 |
| --- |   --- |
| default | 弹层内容区域slot |
| title | 头部功能区 slot |
| left | 头部左功能区 slot |
| close | 头部功能区右侧关闭区域 slot，宽度3n，当此 slot 为空时，默认为关闭 icon 'x' |
| footer | 底部功能区 slot |

### Event

| 名称 | 描述 | 参数 |
| --- | --- | --- |
| close | 关闭弹层时响应事件 | |
