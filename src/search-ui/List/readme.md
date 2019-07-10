---
name: List
title: 列表行
category: 布局类
owner: 王凯
---

## 使用场景

> 参考UE规范：[D14 【基础组件】-【列表】](http://sfe.baidu.com:8186/ue-guide/list.html)

## 示例

```atom 文字列表
<template>
    <c-aladdin>
        <c-list>
            <c-list-item>
                <c-title
                    class="c-gap-top-small c-gap-bottom-small"
                    text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题" 
                    size="t2">
                </c-title>
                <c-line
                    :clamp="2">
                    摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                </c-line>
                <c-line
                    class="c-gap-bottom-small"
                    color="gray"
                    :clamp="1">
                    辅助信息
                </c-line>
            </c-list-item>
            <c-list-item>
                <c-title
                    class="c-gap-top-small c-gap-bottom-small"
                    text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题" 
                    size="t2">
                </c-title>
                <c-line
                    :clamp="2">
                    摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                </c-line>
                <c-line
                    class="c-gap-bottom-small"
                    color="gray"
                    :clamp="1">
                    辅助信息
                </c-line>
            </c-list-item>
            <c-list-item>
                <c-title
                    class="c-gap-top-small c-gap-bottom-small"
                    text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题" 
                    size="t2">
                </c-title>
                <c-line
                    :clamp="2">
                    摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                </c-line>
                <c-line
                    class="c-gap-bottom-small"
                    color="gray"
                    :clamp="1">
                    辅助信息
                </c-line>
            </c-list-item>
        </c-list>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
        },
        components: {
            'c-row':'search-ui/Row/Row',
            'c-span':'search-ui/Row/Span',
            'c-list': 'search-ui/List/List',
            'c-list-item': 'search-ui/List/ListItem',
            'c-img-content':'search-ui/ImgContent/ImgContent',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-line': 'search-ui/Line/Line'
        }
    }
</script>
```

```atom 图文列表 4n
<template>
    <c-aladdin>
        <c-list>
            <c-list-item>
                <c-img-content 
                    class="c-gap-top-small c-gap-bottom-small"
                    :img-src="src">
                    <c-title
                        text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题" 
                        size="t2">
                    </c-title>
                    <c-line
                        :clamp="2">
                        摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                    </c-line>
                    <c-line
                        class="c-gap-bottom-small"
                        color="gray"
                        :clamp="1">
                        辅助信息
                    </c-line>
                </c-img-content>
            </c-list-item>
            <c-list-item>
                <c-img-content 
                    class="c-gap-top-small c-gap-bottom-small"
                    :img-src="src">
                    <c-title
                        text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题" 
                        size="t2">
                    </c-title>
                    <c-line
                        :clamp="2">
                        摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                    </c-line>
                    <c-line
                        class="c-gap-bottom-small"
                        color="gray"
                        :clamp="1">
                        辅助信息
                    </c-line>
                </c-img-content>
            </c-list-item>
            <c-list-item>
                <c-img-content 
                    class="c-gap-top-small c-gap-bottom-small"
                    :img-src="src">
                    <c-title
                        text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题" 
                        size="t2">
                    </c-title>
                    <c-line
                        :clamp="2">
                        摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                    </c-line>
                    <c-line
                        class="c-gap-bottom-small"
                        color="gray"
                        :clamp="1">
                        辅助信息
                    </c-line>
                </c-img-content>
            </c-list-item>
        </c-list>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519292259784&di=5154905cc843c555ca75db96550af53e&imgtype=0&src=http%3A%2F%2Fimg.elife.com%2Fforum%2F201512%2F03%2F193520qoji1j11xhtif8hq.jpg'
        },
        components: {
            'c-row':'search-ui/Row/Row',
            'c-span':'search-ui/Row/Span',
            'c-list': 'search-ui/List/List',
            'c-list-item': 'search-ui/List/ListItem',
            'c-img-content':'search-ui/ImgContent/ImgContent',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-line': 'search-ui/Line/Line'
        }
    }
</script>
```

```atom 图文列表 2n（内容需要居中显示）
<template>
    <c-aladdin>
        <c-list>
            <c-list-item
                a-for="item in 3">
                <c-img-content 
                    class="c-gap-top-small c-gap-bottom-small"
                    :img-col="2"
                    :img-src="src">
                    <section
                        class="c-content">
                        <section>
                            <c-title
                                class="c-line-clamp1"
                                text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题" 
                                size="t2">
                            </c-title>
                            <c-line
                                color="gray"
                                :clamp="1">
                                辅助信息
                            </c-line>
                        </section>
                    </section>
                </c-img-content>
            </c-list-item>
        </c-list>
    </c-aladdin>
</template>

<style scoped lang="less">
    .c-content {
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;
        width: 100%;
    }
</style>

<script type="config">
    {
        data: {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519292259784&di=5154905cc843c555ca75db96550af53e&imgtype=0&src=http%3A%2F%2Fimg.elife.com%2Fforum%2F201512%2F03%2F193520qoji1j11xhtif8hq.jpg'
        },
        components: {
            'c-row':'search-ui/Row/Row',
            'c-span':'search-ui/Row/Span',
            'c-list': 'search-ui/List/List',
            'c-list-item': 'search-ui/List/ListItem',
            'c-img-content':'search-ui/ImgContent/ImgContent',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-line': 'search-ui/Line/Line'
        }
    }
</script>
```

## 注意事项

1. 该组件为容器类型，可以在其中嵌套任意类型的子组件
2. 如无特殊样式，建议使用 ListArticle 组件，只需填充数据即可
3. c-list默认不含上下border，若需要添加，可通过与`c-divider`一起使用，达到效果

## API
### Props

#### ListItem

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
hasLastBorder | number | 0 | 可选 | 最后一行的底边框：0（没有边框）；1（有边框） | -

### Slots



名称 | 描述
--- | ---
default | 内容，多个`c-list-item`

#### ListItem

名称 | 描述
--- | ---
default | 内容

### Events
无

