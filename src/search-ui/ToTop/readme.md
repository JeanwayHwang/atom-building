---
name: ToTop
title: 返回顶部组件
category: 交互类
owner: 姚昌
---

## 使用场景

> 参考UE规范：[D22 【基础组件】-【返回顶部】](http://soy.baidu-int.com:8905/static/specification/ue-guide/ToTop.html)

## 示例

### 返回顶部组件

```atom 通用样式
<template>
    <section>
        <c-aladdin>
            <p
                class="c-gap-bottom"
                :style="{
                    'color': '#2b99ff'
                }">
                请在手机上打开此页，滑动手机屏幕以显示组件
                <br>
                下方灰色块状区域仅为了撑开页面高度
            </p>
            <c-to-top :showThreshold="1"/>
            <div
                :style="{
                    'height': '3000px',
                    'background': '#999'
                }">
            </div>
        </c-aladdin>
    </section>
</template>

<script type="config">
    {
        components: {
            'c-to-top': 'search-ui/ToTop/ToTop',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>
```


## 注意事项
仅当页面内容超过1屏时才会显示返回顶部组件

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
size | string | 40px | 可选 | 组件的大小（高和宽） | -
right | string | 17px | 可选 | 组件距离页面右边的距离（组件是fixed定位的） | -
bottom | string | 73px | 可选 | 组件距离页面底部的距离（组件是fixed定位的） | -
zIndex | number | 200 | 可选 | 组件的"z-index"属性 | -
iconFontSize | string | 20px | 可选 | 内部向上箭头(icon)的字体大小 | -
showThreshold | number | 1 | 可选 | 组件展示阈值，页面向上滑动了多少个可视窗口的距离的时候展示组件 | -



### Events


- **click**: click event.
	无参数



