---
name: Divider
title: 分割线
category: 基础组件
owner: 王凯
---

## 使用场景

> 参考UE规范：[D6 【基础组件】-【分割线】](http://sfe.baidu.com:8186/ue-guide/divider.html)

## 示例

```atom 细分割线
<template>
    <c-aladdin>
        <c-divider class="c-row-tile"/>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-divider": "search-ui/Divider/Divider"
        }
    }
</script>
```

```atom 粗分割线
<template>
    <c-aladdin>
        <div class="c-gap-top">
            <c-divider
                class="c-row-tile"
                type="thick"/>
        </div>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-divider": "search-ui/Divider/Divider"
        }
    }
</script>
```

## 注意事项

1. 自带上下 5px 的间距,开发者自己添加自定义栅格Class


## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | thin | 可选 | 分隔线粗细；'thin'：1px；'thick'：8px | -



### Events
无

