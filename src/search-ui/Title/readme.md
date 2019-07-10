---
name: Title
title: 标题
category: 框架类
owner: 王凯
---

## 使用场景

> 参考UE规范：[E3.1 【结果页规范】-【结果卡片】-【标题区】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Result_CardStructure.html)

## 示例

```atom 简单示例
<template>
    <c-aladdin>
        <c-title
            url="http://www.baidu.com"
            text="主标题"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 增加右侧文字
<template>
    <c-aladdin>
        <c-title
            url="http://www.baidu.com"
            text="主标题"
            right-text="右边"
            :right-col="3"
            arrow
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 增加右侧 slot
<template>
    <c-aladdin>
        <c-title
            url="http://www.baidu.com"
            text="主标题"
            :right-col="4"
            arrow
        >
            <div
                slot="right"
                class="c-color"
            >
                右侧 slot
            </div>
        </c-title>
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 标题截断（大屏设备(网页宽度376px及以上)1行截断，小屏设备(网页宽度376px以下)不截断）
<template>
    <c-aladdin>
        <c-title
            url="http://www.baidu.com"
            text="较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 自然结果标题截断策略（大屏设备(网页宽度376px及以上)1行截断，小屏设备(网页宽度376px以下)2行截断）
<template>
    <c-aladdin>
        <c-title
            url="http://www.baidu.com"
            clamp-strategy="L1S2"
            text="较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 标题强制截断（不论大小屏都固定行数截断）
<template>
    <c-aladdin>
        <c-title
            url="http://www.baidu.com"
            text="较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题较长的标题"
            clamp="1"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 带箭头的标题
<template>
    <c-aladdin>
        <c-title
            url="http://voice.baidu.com"
            text="带箭头的标题"
            arrow
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 带标签的标题
<template>
    <c-aladdin>
        <c-title
            text="标题标题标题标题"
            label="官网"
            label-type="public"
        />
        <c-title
            text="标题标题标题截断标题截断标题截断标题截断标题截断标题截断标题截断"
            label="官网"
            label-type="public"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 带 icon 的标题
<template>
    <c-aladdin>
        <c-title
            text="去全网搜索"
            icon="baidu"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 副标题
<template>
    <c-aladdin>
        <c-title
            url="http://jd.com"
            text="京东商城_带箭头"
            arrow
            size="t2"
        />
        <c-title
            url="http://jd.com"
            text="京东商城_不带箭头"
            size="t2"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 语音播放按钮
<template>
    <c-aladdin>
        <c-title
            url="http://www.m.baidu.com"
            text="语音播放_带箭头"
            icon="play"
            size="t2"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 二级标题
<template>
    <c-aladdin>
        <c-title
            url="http://www.m.baidu.com"
            text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题"
            size="t2"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 二级标题设置多行截断，最大为5
<template>
    <c-aladdin>
        <c-title
            url="http://www.m.baidu.com"
            text="一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断"
            size="t2"
        />
        <c-title
            :clamp="2"
            url="http://www.m.baidu.com"
            text="两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断两行截断"
            size="t2"
            class="c-gap-top"
        />
        <c-title
            :clamp="3"
            url="http://www.m.baidu.com"
            text="三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断"
            size="t2"
            class="c-gap-top-large"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 自定义 fontWeight
<template>
    <c-aladdin>
        <c-title
            a-for="(item, index) in array"
            :key="index"
            :font-weight="item"
            :text="'测试文案 ' + item"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        array: [
            '',
            'normal',
            'bold',
            'lighter',
            'bolder',
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900'
        ]
    },
    components: {
        'c-title': 'search-ui/Title/Title',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

```atom 智库组卡标题
<template>
    <c-aladdin>
        <c-sub-title
            url="http://www.m.baidu.com"
            text="一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断一行截断"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-sub-title': 'search-ui/Title/SubTitle',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string | - | 可选 | 标题的跳转链接 | -
urlParams | object | - | 可选 | 标题跳转链接的属性，sf&nbsp;跳转需要，由&nbsp;smarty&nbsp;工具函数生成 | -
text | string | - | 可选 | 标题文本，支持传入&nbsp;html | -
icon | string | - | 可选 | 标题后面的&nbsp;iconfont&nbsp;图标 | -
arrow | boolean | false | 可选 | 是否带有跳转的箭头，在情景页会用到 | -
label | string | - | 可选 | 标题后面的文字图标 | -
labelType | string | - | 可选 | 文字图标的类型，具体参考c-label | -
size | string | t1 | 可选 | 字体大小，支持&nbsp;t1&nbsp;t2&nbsp;两种字号 | -
fontWeight | string | - | 可选 | 字体粗细&nbsp;css&nbsp;font-weight | -
clamp | string \| number | - | 可选 | 显示行数，范围为1-5；t1&nbsp;默认大屏设备(网页宽度376px及以上)1行截断，小屏设备(网页宽度376px以下)不截断；t2&nbsp;默认一行截断 | -
visited | boolean | true | 可选 | - | -
color | string | - | 可选 | - | -
rightText | string | - | 可选 | 右侧文字 | -
rightCol | number | 2 | 可选 | 右侧栅格数 | -
clampStrategy | string | - | 可选 | 截断策略；<br><br>-&nbsp;'default'&nbsp;大屏设备（网页宽度&nbsp;376px&nbsp;及以上）1行截断，小屏设备（网页宽度&nbsp;376px&nbsp;以下）不截断；<br>-&nbsp;'L1S2'&nbsp;大屏设备（网页宽度&nbsp;376px&nbsp;及以上）1行截断，小屏设备（网页宽度&nbsp;376px&nbsp;以下）且没有标签且没有图标时2行截断，有标签或者有图标时不截断； | -

#### SubTitle

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string | - | 可选 | 标题的跳转链接 | -
urlParams | object | - | 可选 | 标题跳转链接的属性，sf&nbsp;跳转需要，由&nbsp;smarty&nbsp;工具函数生成 | -
text | string | - | 可选 | 标题文本，不支持传入&nbsp;html。为了减少垂类兼容工作量，em标签会被过滤以去除飘红 | -
visited | boolean | true | 可选 | 访问后是否变灰 | -

#### TitleBase

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
text | string | - | 可选 | - | -
icon | string | - | 可选 | - | -
label | string | - | 可选 | - | -
labelType | string | - | 可选 | - | -
size | string | t1 | 可选 | - | -
clamp | string \| number | - | 可选 | - | -
color | string | - | 可选 | - | -
fontWeight | string | - | 可选 | 字体粗细&nbsp;css&nbsp;font-weight | -
clampStrategy | string | - | 可选 | 截断策略；<br><br>-&nbsp;'default'&nbsp;大屏设备（网页宽度&nbsp;376px&nbsp;及以上）1行截断，小屏设备（网页宽度&nbsp;376px&nbsp;以下）不截断；<br>-&nbsp;'L1S2'&nbsp;大屏设备（网页宽度&nbsp;376px&nbsp;及以上）1行截断，小屏设备（网页宽度&nbsp;376px&nbsp;以下）且没有标签且没有图标时2行截断，有标签或者有图标时不截断； | -

### Slots



名称 | 描述
--- | ---
right | 右侧&nbsp;slot

### Events


- **click**: click event.
	无参数


#### SubTitle


- **click**: click event.
	无参数



