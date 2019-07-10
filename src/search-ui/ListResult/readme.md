---
name: ListResult
title: 列表结果框架
category: 框架类
owner: 王凯
---

## 使用场景

列表结果框架组件，用于六合

## 示例

```atom 带有标题和脚注的简单卡片

<template>
    <c-list-result title="京东商城" url="http://voice.baidu.com">
        <c-row>
            <c-span>
                <c-slink text="刘德华" type="strong" url="http://voice.baidu.com" label="热" label-type="box_red" />
            </c-span>
            <c-span>
                <c-slink text="李小龙" type="strong" url="http://voice.baidu.com" />
            </c-span>
        </c-row>
    </c-list-result>
</template>

<script type="config">
    {
        data: {
            src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
        },
        components: {
            "c-list-result": "search-ui/ListResult/ListResult",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span",
            "c-slink": "search-ui/Slink/Slink"
        }
    }
</script>

```

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string | - | 可选 | 标题链接 | -
urlParams | object | - | 可选 | 标题链接所需参数 | -
title | string | - | 可选 | 标题文案 | -
titleClamp | string \| number | - | 可选 | 标题截断行数 | -
titleIcon | string | - | 可选 | 标题图标 | -
titleArrow | boolean | - | 可选 | 标题是否带箭头 | -
titleLabel | string | - | 可选 | 标题文字标签文案 | -
titleLabelType | string | - | 可选 | 标题文字标签类型 | -
titleSize | string | - | 可选 | 标题尺寸 | -
hideHeader | boolean | false | 可选 | 是否不显示标题区 | -

### Slots



名称 | 描述
--- | ---
title | 标题区
default | 内容区

### Events


- **title-click**: 标题点击事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1} | Event | 透传标题的事件对象



