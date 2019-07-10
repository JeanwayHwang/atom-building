---
name: StrongLink
title: 强链接
category: 展示元素类
owner: 王凯
---

## 使用场景

【垂类组件】-【强链接】

## 示例

```atom 强链链接

<template>
    <c-aladdin touchable title="整卡可点">
        <c-row>
            <c-span :col="3">
                <c-strong-link
                    :name="name"
                    :num="num"
                    text1="共"
                    text2="家"
                />
            </c-span>
            <c-span :col="3">
                <c-strong-link :name="name" url="https://m.baidu.com">
                    <div>23家 跳转</div>
                </c-strong-link>
            </c-span>
            <c-span :col="3">
                <c-strong-link
                    :name="name"
                    :num="num"
                    text1="查看全部"
                    text2="家"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>


<script type="config">
    {
        data: {
            name: '美食',
            num: '20'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-strong-link': 'search-ui/StrongLink/StrongLink'
        }
    }
</script>


```


## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string | - | 可选 | 整行可点的链接 | -
params | object | - | 可选 | 整行可点的链接所需参数 | -
name | string |  | 可选 | 强链接名称 | -
num | string | - | 可选 | 强链接数量 | -
text1 | string | - | 可选 | 数量前文案 | -
text2 | string | - | 可选 | 数量后文案 | -

### Slots



名称 | 描述
--- | ---
default | 自定义内容




