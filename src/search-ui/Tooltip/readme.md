---
name: Tooltip
title: 提示气泡框组件
category: 交互类
owner: 王凯
---

## 注意事项

1. 目前仅支持移动设备
2. 位置判断方法是根据传入的 left 和 top 判断当前触发位置在哪一个方位（方位通过浏览器宽高的一半来划分）

## 示例

```atom 提示气泡框
<template>
    <c-aladdin>
        <div>
            <div
                ref="triggerDom"
                class="area"
                @click="onClick"
            >
                在区域内点我弹出一个气泡框
            </div>
            <!-- 提示层 -->
            <c-tooltip
                :show="tooltip.show"
                :top="tooltip.top"
                :left="tooltip.left"
                @close="onTooltipClose"
            >
                我是一个提示气泡框
            </c-tooltip>
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        // 提示层
        tooltip: {
            // 是否显示
            show: false,
            // 点击位置距离顶部的距离
            top: 0,
            // 点击位置距离底部的距离
            left: 0
        }
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tooltip': 'search-ui/Tooltip/Tooltip'
    }
}
</script>

<script>
export default {
    methods: {
        onClick(e) {
            console.log('e', e);
            // 获得触发 dom
            let triggerDom = this.$refs.triggerDom;
            let rect = triggerDom.getBoundingClientRect();
            console.log('rect.top', rect.top, 'rect.left', rect.left);
            // this.tooltip.top = rect.top;
            // this.tooltip.left = rect.left;
            this.tooltip.top = e.clientY;
            this.tooltip.left = e.clientX;
            this.tooltip.show = true;
        },
        // 提示层关闭事件
        onTooltipClose() {
            this.tooltip.show = false;
        }
    }
};
</script>

<style module lang="less">
.area {
    display: flex;
    width: 100%;
    height: 400px;
    border: 1px solid #eee;
    justify-content: center;
    text-align: center;
    align-items: center;
}
</style>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
show | boolean | false | 必选 | 控制是否显示 | -
top | number | - | 必选 | 当前点击位置距离网页顶部的距离 | -
left | number | - | 必选 | 当前点击位置距离网页左侧的距离 | -
gap | object | {"top":0} | 可选 | 间距对象 | -
width | number | 200 | 可选 | 气泡提示层的宽度；单位：像素 | -
triggerDom | object | {"width":0,"height":0} | 可选 | 触发的&nbsp;dom&nbsp;的相关数据 | -
>> triggerDom.width | number | - | - | 触发的&nbsp;dom&nbsp;的宽度 | -
>> triggerDom.height | number | - | - | 触发的&nbsp;dom&nbsp;的高度 | -
mask | boolean | true | 可选 | 是否有蒙层，默认为有 | -
zIndex | number \| string | 501 | 可选 | Tooltip&nbsp;的&nbsp;z&nbsp;轴层级，默认为&nbsp;501 | -
animate | boolean | true | 可选 | 是否加动效 | -

### Slots



名称 | 描述
--- | ---
default | 气泡内的自定义区域




