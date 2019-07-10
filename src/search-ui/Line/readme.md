---
name: Line
title: 多行截断
category: 展示元素类
owner: 陈骁
---

## 示例

```atom 多行截断
<template>
    <c-aladdin>
        <section
            class="c-line-bottom c-gap-inner-bottom c-gap-top">
            <div style="color: #2b99ff">单行截断</div>
            <c-line 
                clamp="1">
                单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断单行截断
            </c-line>
        </section>
        <section
            class="c-line-bottom c-gap-inner-bottom c-gap-top">
            <div style="color: #2b99ff">双行截断</div>
            <c-line 
                clamp="2">
                双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断双行截断
            </c-line>
        </section>
        <section
            class="c-line-bottom c-gap-inner-bottom c-gap-top">
            <div style="color: #2b99ff">三行截断</div>
            <c-line 
                clamp="3">
                三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断三行截断
            </c-line>
        </section>
        <section
            class="c-line-bottom c-gap-inner-bottom c-gap-top">
            <div style="color: #2b99ff">四行截断</div>
            <c-line 
                clamp="4">
                四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断四行截断
            </c-line>
        </section>
        <section
            class="c-line-bottom c-gap-inner-bottom c-gap-top">
            <div style="color: #2b99ff">五行截断</div>
            <c-line 
                clamp="5">
                五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断五行截断
            </c-line>
        </section>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>
```

```atom 文案颜色支持可配置，可参考 PMD 规范
<template>
    <c-aladdin>
        <div style="color: #2b99ff">
            颜色可选值请参考
            <c-slink 
                class="c-gap-left"
                text="PMD 规范 c-color-*" 
                type="auto"
                url="http://pmd.baidu.com/doc/#card"/>
        </div>
        <c-line
            clamp="1"
            color="orange">
            价格文案：￥5199
        </c-line>
        <c-line
            clamp="1"
            color="gray"
            class="c-gap-top-small">
            摘要文案：这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本这是一段有颜色的长文本
        </c-line>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-slink': 'search-ui/Slink/Slink'
        }
    }
</script>
```

```atom 对齐方式 左对齐
<template>
    <c-aladdin>
        <section>
            <c-line 
                clamp="2" 
                align="left">
                这是一段左对齐的文本这是一段左对齐的文本这是一段左对齐的文本这是一段左对齐的文本
            </c-line>
        </section>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-slink': 'search-ui/Slink/Slink'
        }
    }
</script>
```

```atom 对齐方式 居中对齐
<template>
    <c-aladdin>
        <section>
            <c-line 
                clamp="2" 
                align="center">
                这是一段居中对齐的文本这是一段居中对齐的文本这是一段居中对齐的文本这是一段居中对齐的文本
            </c-line>
        </section>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-slink': 'search-ui/Slink/Slink'
        }
    }
</script>
```

```atom 对齐方式 右对齐
<template>
    <c-aladdin>
        <section>
            <c-line 
                clamp="2" 
                align="right">
                这是一段右对齐的文本这是一段右对齐的文本这是一段右对齐的文本这是一段右对齐的文本
            </c-line>
        </section>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-slink': 'search-ui/Slink/Slink'
        }
    }
</script>
```

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
clamp | number \| string | 1 | 可选 | 显示行数，范围为1-5 | -
color | string | - | 可选 | 文案颜色，可选值参照`c-color-*` | See [文字颜色](http://pmd.baidu.com/doc/#card)
align | string | left | 可选 | 文案对齐方式，可选值为：`left`、`center`、`right` | -

### Slots



名称 | 描述
--- | ---
default | 内容

### Events


- **click**: 点击事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1} | Event | 透传事件对象



