---
name: ErrorPage
title: 搜索空白页组件
category: 展示元素类
owner: 杨启帆
---

## 使用场景

> 参考UE规范：[索隐平台 【组件规范】-【空白页组件】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Blankpage.html)

## 示例

```atom 大屏；空白页（blank）
<template>
    <div
        class="wrapper"
    >
        <c-error-page
            logo="blank"
            has-btn
            btn-text="重新加载"
            btn-url="http://www.baidu.com"
            title="暂无内容"
            @click="onClick"
        />
    </div>
</template>

<script type="config">
{
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<script>
export default {
    methods: {
        onClick() {
            console.log("click")
        }
    }
};
</script>

<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```


```atom 大屏；页面出错（error）
<template>
    <div class="wrapper">
        <c-error-page
            logo="error"
            has-btn
            btn-text="重新加载"
            btn-url="http://www.baidu.com"
            title="页面访问异常"
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```

```atom 大屏；网络问题（trouble）
<template>
    <div class="wrapper">
        <c-error-page
            logo="trouble"
            has-btn
            btn-text="重新加载"
            btn-url="http://www.baidu.com"
            title="网络不给力,请稍后重试"/>
    </div>
</template>

<script type="config">
    {
        data: {
        },
        components: {
            "c-error-page": "search-ui/ErrorPage/ErrorPage"
        }
    }
</script>
<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```

```atom 大屏；描述文案
<template>
    <div class="wrapper">
        <c-error-page
            logo="blank"
            desc="请去别的地方看看"
            title="暂无内容"/>
    </div>
</template>

<script type="config">
    {
        data: {
        },
        components: {
            "c-error-page": "search-ui/ErrorPage/ErrorPage"
        }
    }
</script>

<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```

```atom 大屏；黑夜模式
<template>
    <div class="wrapper">
        <c-error-page
            logo="trouble"
            title="网络不给力,请稍后重试"
            has-btn
            btn-url="http://www.baidu.com"
            btn-text="重新加载"
            black
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```

```atom 半屏；暂无内容（noContent）
<template>
    <div class="wrapper">
        <c-error-page
            logo="noContent"
            title="暂无内容"
            has-btn
            half
            btn-url="http://www.baidu.com"
            btn-text="重新加载"
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 300px;
}
</style>
```

```atom 半屏；网络问题（network）
<template>
    <div class="wrapper">
        <c-error-page
            logo="network"
            title="网络不给力,请稍后重试"
            has-btn
            half
            btn-url="http://www.baidu.com"
            btn-text="重新加载"
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 300px;
}
</style>
```

```atom 半屏；暂无评论（noComment）
<template>
    <div class="wrapper">
        <c-error-page
            logo="noComment"
            title="暂无评论"
            has-btn
            half
            btn-url="http://www.baidu.com"
            btn-text="重新加载"
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 300px;
}
</style>
```

```atom 半屏；黑夜模式
<template>
    <div class="wrapper">
        <c-error-page
            black
            logo="noComment"
            title="暂无评论"
            has-btn
            half
            btn-url="http://www.baidu.com"
            btn-text="重新加载"
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 300px;
}
</style>
```

```atom 大屏；简搜；空白页（blank）
<template>
    <div class="wrapper">
        <c-error-page
            searchcraft
            logo="blank"
            has-btn
            btn-text="重新加载"
            btn-url="http://www.baidu.com"
            title="暂无内容"/>
    </div>
</template>

<script type="config">
    {
        data: {
        },
        components: {
            "c-error-page": "search-ui/ErrorPage/ErrorPage"
        }
    }
</script>

<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```

```atom 大屏；简搜；页面出错（error）
<template>
    <div class="wrapper">
        <c-error-page
            searchcraft
            logo="error"
            has-btn
            btn-text="重新加载"
            btn-url="http://www.baidu.com"
            title="页面访问异常"
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```

```atom 大屏；简搜；网络问题（trouble）
<template>
    <div class="wrapper">
        <c-error-page
            searchcraft
            logo="trouble"
            has-btn
            btn-text="重新加载"
            btn-url="http://www.baidu.com"
            title="网络不给力,请稍后重试"
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```

```atom 大屏；简搜；黑夜模式
<template>
    <div class="wrapper">
        <c-error-page
            searchcraft
            logo="trouble"
            title="网络不给力,请稍后重试"
            has-btn
            btn-url="http://www.baidu.com"
            btn-text="重新加载"
            black
        />
    </div>
</template>

<script type="config">
{
    components: {
        "c-error-page": "search-ui/ErrorPage/ErrorPage"
    }
}
</script>

<style lang="less" module>
.wrapper {
    height: 500px;
}
</style>
```

## 注意事项

1. 父元素须指定高度
2. 简单搜索浏览器下有特殊展现(小图复用),需在跳转空白页前根据ua判断
    `/searchcraft/i.test(navigator.userAgent.toLowerCase())`


## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
logo | string | blank | 可选 | logo图片<br><br>全屏图片可选分别是<br>空白页（blank），页面出错（error），网络问题（trouble）<br><br>半屏可选分别是<br>暂无内容（noContent），暂无评论（noComment），网络问题（network） | -
hasBtn | boolean | false | 可选 | 是否有按钮 | -
btnText | string | - | 可选 | 按钮文案 | -
title | string | - | 可选 | 单行文字标题 | -
btnUrl | string | - | 可选 | 点击按钮的跳转链接 | -
desc | string | - | 可选 | 标题下的描述性文案 | -
half | boolean | false | 可选 | 是否为半屏 | -
black | boolean | false | 可选 | 黑色背景下的外观 | -
searchcraft | boolean | false | 可选 | 简搜下有特殊样式，通过ua判断，需各垂类在业务里完成 | -

### Slots



名称 | 描述
--- | ---
c-error-page-bottom-slot | 底部内容

### Events


- **click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传事件对象



