---
name: TextLine
title: 文本多行截断
category: 展示元素类
owner: 陈骁
---

## 使用场景

使用场景：上图下文的情况，水平方向上文字不对齐的解决方案

## 示例

```atom 多行截断
<template>
    <div class="c-container">
        <c-text-line clamp="2" text="这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本" />
        <c-text-line
            clamp="2"
            color="red"
            class="c-gap-top"
            text="这是一段有颜色的长文本这是一段有颜色的长文这是一段有颜色的长文本这是一段有颜色的长文这是一段有颜色的长文本这是一段有颜色的长文"
        />
        <c-text-line
            clamp="2"
            color="red"
            class="c-gap-top"
            text="这是一段有颜色的文本，没有截断。这是一段有颜色的文本，没有截断。"
        />
        <c-text-line
            clamp="1"
            class="c-gap-top"
            text="单行截断单行截断单行截断单行截断单行截断单行截断单行截断"
        />
        <c-text-line
            clamp="1"
            class="c-gap-top"
            text="单行_<em>有高亮</em>"
        />
        <c-text-line
            clamp="2"
            class="c-gap-top"
            text=""
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-text-line': 'search-ui/TextLine/TextLine'
        }
    }
</script>
```

```atom 单行截断且带 label
<template>
    <div class="c-container">
        <c-text-line
            :clamp="1"
            text="没有截断的"
            label="三个字"
            label-type="box_blue"
        />
        <c-text-line
            :clamp="1"
            text="没有截断的<em>高亮</em>"
            label="三个字"
            label-type="box_blue"
        />
        <c-text-line
            :clamp="1"
            text="这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本"
            label="三个字"
            label-type="box_blue"
        />
        <c-text-line
            :clamp="1"
            color="orange"
            text="这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本"
            label="两字"
            label-type="box_red"
        />
        <c-text-line
            :clamp="1"
            size="t1"
            text="可以设置字体大小可以设置字体大小可以设置字体大小可以设置字体大小可以设置字体大小可以设置字体大小"
            label="两字"
        />
        <c-text-line
            :clamp="1"
            text="可以设置字体大小可以设置字体大小可以设置字体大小可以设置字体大小可以设置字体大小可以设置字体大小"
            label-front="前面的"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-text-line': 'search-ui/TextLine/TextLine'
        }
    }
</script>
```

```atom 上图下文的对齐方案

<template>
    <div class="c-container">
        <c-text-line text="正常不对齐的方案" size="t2" color="link" />
        <c-row class="c-gap-top">
            <c-span>
                <c-img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                    title="有截断有截断有截断有截断有截断有截断"
                    title-align="left"
                    sub-title="2017-08-17"
                    sub-title-align="left"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3966954144,2566646759&fm=58"
                    title-align="left"
                    title="两行没截断两行没截断"
                    sub-title="2017-08-17"
                    sub-title-align="left"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3966954144,2566646759&fm=58"
                    title-align="left"
                    title="只有一行"
                    sub-title="2017-08-17"
                    sub-title-align="left"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3966954144,2566646759&fm=58"
                    title-align="left"
                    title="只有一行"
                    sub-title="2017-08-17"
                    sub-title-align="left"
                />
            </c-span>
        </c-row>
        <c-divider />
        <c-text-line text="定高的方案" size="t2" color="link" class="c-gap-top" />
        <c-row>
            <c-span>
                <c-img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                    title="有截断有截断有截断有截断有截断有截断"
                    title-align="left"
                    title-fix-height
                    sub-title="2017-08-17"
                    sub-title-align="left"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3966954144,2566646759&fm=58"
                    title-fix-height
                    title-align="left"
                    title="两行没截断没截断"
                    sub-title="2017-08-17"
                    sub-title-align="left"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3966954144,2566646759&fm=58"
                    title-fix-height
                    title-align="left"
                    title="只有一行"
                    sub-title="2017-08-17"
                    sub-title-align="left"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3966954144,2566646759&fm=58"
                    title-fix-height
                    title-align="left"
                    title="只有一行"
                    sub-title="2017-08-17"
                    sub-title-align="left"
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-text-line': 'search-ui/TextLine/TextLine',
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-divider': 'search-ui/Divider/Divider',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

## 注意事项
1. 多行文本有截断的情况下，如果设置了 `label` 属性，标签内容也会被隐藏，与单行截断效果不同

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
text | string | - | 可选 | 文本内容 | -
clamp | string \| number | 1 | 可选 | 显示行数，范围为1-5 | -
color | string | - | 可选 | 文案颜色，可选值参照c-color-* | -
align | string | left | 可选 | 文案对齐方式，可选值为text-align可选值 | -
size | string | t3 | 可选 | t1&nbsp;~&nbsp;t4 | -
fixHeight | boolean | false | 可选 | 是否定高 | -
label | string | - | 可选 | 标签文本 | -
labelType | string | - | 可选 | 标签类型，可参考Label组件 | -
labelFront | string | - | 可选 | 标题前的标签文本 | -
labelFrontType | string | - | 可选 | 标题前的标签类型，可参考Label组件 | -






