---
name: Mask
title: 蒙层组件
category: 基础组件
owner: 王凯
---

## 示例

```atom Mask
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="点击打开蒙层"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-mask
            ref="mask"
            z-index="301"
            class="mask"
            @click="handleMaskClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-btn': 'search-ui/Button/Button',
        'c-mask': 'search-ui/Mask/Mask'
    }
}
</script>

<script>
export default {
    methods: {
        handleBtnClick() {
            this.$refs.mask.show();
        },
        handleMaskClick() {
            this.$refs.mask.hide();
        }
    }
};
</script>

<style module lang="less">
.mask {
    position: fixed;
    top: 0;
    left: 0;
}
</style>
```

## 注意事项

1. 蒙层的显示和隐藏需要设置 ref 获取 vnode，并主动调用方法

## API

### Props

| 名称 | 类型 | 默认值 | 必选 | 描述 |
| --- | --- | --- | --- | --- |
| zIndex | number, string | -1 | 否 | 蒙层显示时的 z-index |
| width | string | '100%' | 否 | 蒙层的宽度 |
| height | string | '1500px' | 否 | 蒙层的高度 |
| backgroundColor | string | 'rgba(0, 0, 0, .5)' | 否 | 蒙层的背景色 |
| preventDefaultTouchmove | boolean | true | 否 | 是否阻止默认滑动事件 |

### Slots

| 名称 | 描述 |
| --- | --- |
| default | 蒙层内包裹的 slot |

### Events

| 名称 | 描述 | 参数 |
| --- | --- | --- |
| click | 蒙层点击事件 | |
| touchmove | 蒙层滑动事件 | e |

### Methods

| 名称 | 描述 | 参数 |
| --- | --- | --- |
| show | 显示蒙层 | |
| hide | 隐藏蒙层 | |
