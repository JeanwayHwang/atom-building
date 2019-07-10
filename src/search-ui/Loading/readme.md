---
name: Loading
title: 加载中
category: 展示元素类
owner: 宋少康，王凯
---

## 使用场景

> 参考UE规范：[D17 【基础组件】-【Loading】](http://sfe.baidu.com:8186/ue-guide/loading.html)

## 示例

```atom loading 组件；负 margin 垂直居中
<template>
    <div class="c-container">
        <div class="loading-wrap">
            <c-loading class="loading"/>
        </div>
    </div>
</template>

<script type="config">
    {
        components: {
            "c-loading": "search-ui/Loading/Loading"
        }
    }
</script>

<style scoped>
    .loading {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin-top: -.43rem;
    }
    .loading-wrap {
        position: relative;
        height: 200px;
    }
</style>
```

```atom loading 组件；transform:translateY(-50%) 垂直居中
<template>
    <div class="c-container">
        <div class="loading-wrap">
            <c-loading class="loading"/>
        </div>
    </div>
</template>

<script type="config">
    {
        components: {
            "c-loading": "search-ui/Loading/Loading"
        }
    }
</script>

<style scoped>
    .loading {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform:  translateY(-50%)
    }
    .loading-wrap {
        position: relative;
        height: 200px;
    }
</style>
```

```atom loading 组件；flex 垂直居中
<template>
    <div class="c-container">
        <div class="loading-wrap">
            <c-loading/>
        </div>
    </div>
</template>

<script type="config">
    {
        components: {
            "c-loading": "search-ui/Loading/Loading"
        }
    }
</script>

<style scoped>

    .loading-wrap {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 200px;
    }
</style>
```

### 百度文字 LOGO 加载中

```atom 百度文字 LOGO 加载中；白底
<template>
    <c-aladdin>
        <div class="loading-wrap">
            <c-loading
                type="2"
                class="loading"/>
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        "c-loading": "search-ui/Loading/Loading"
    }
}
</script>

<style lang="less" scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -.3rem;
    line-height: 0;
}
.loading-wrap {
    position: relative;
    height: 200px;
}
</style>
```

```atom 百度文字 LOGO 加载中；黑底
<template>
    <c-aladdin>
        <div class="loading-wrap">
            <c-loading
                type="2"
                text-logo-style="dark"
                class="loading"/>
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        "c-loading": "search-ui/Loading/Loading"
    }
}
</script>

<style scoped>
.loading {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin-top: -.3rem;
    line-height: 0;
}
.loading-wrap {
    position: relative;
    height: 200px;
    background: #000;
}
</style>
```

## 注意事项

上下左右居中方案，可选择其中一种，推荐第一种兼容性较高
1. 使用负 margin 垂直居中
2. 使用 transform:translateY(-50%) 属性 不必知道具体大小
3. 使用flex 布局上下左右居中

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
text | string | 加载中... | 可选 | 组件下方文字描述，当且仅当类型为图标类型才生效 | -
type | string \| number | 1 | 可选 | 类型：1&nbsp;(图标类型)；2（百度logo） | -
textLogoStyle | string | light | 可选 | 百度logo样式风格：light（白底样式）dark（黑底样式） | -



### Events
无

