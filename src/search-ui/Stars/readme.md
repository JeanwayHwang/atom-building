---
name: Stars
title: 星星评分
category: 展现
owner: 陈骁
---

## 使用场景

> 参考UE规范：[【基础组件】-【评分】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Stars.html)

## 示例

```atom 星星评分
<template>
    <c-aladdin>
        <div
            a-for="(item, index) in array"
            :key="index"
        >
            <c-stars
                :stars="item"
            />
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        array: [
            0.5,
            1,
            1.5,
            2,
            2.5,
            3,
            3.5,
            4,
            4.5,
            5
        ]
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-stars": "search-ui/Stars/Stars"
    }
}
</script>
```

```atom 设置文字
<template>
    <c-aladdin>
        <c-stars
            :stars="stars"
            :text="text"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        stars: 5,
        text: '五星好评'
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-stars": "search-ui/Stars/Stars"
    }
}
</script>
```

```atom 自定义图标
<template>
    <c-aladdin>
        <c-stars
            :stars="stars"
            :icon="icon"
            :empty-icon="emptyIcon"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        stars: 4,
        icon: 'praised',
        emptyIcon: 'new_praise'
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-stars": "search-ui/Stars/Stars"
    }
}
</script>
```

```atom 可交互，点击动态改变星星数
<template>
    <c-aladdin>
        <c-stars
            :stars="stars"
            :disabled="false"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        stars: 4
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-stars": "search-ui/Stars/Stars"
    }
}
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('handleChange', obj);
        }
    }
};
</script>
```

```atom 通过 js 动态改变星星数
<template>
    <c-aladdin>
        <c-stars
            :stars="stars"
        />
        <c-row>
            <c-span>
                <c-btn
                    text="点我动态改变评分（0-5 随机）"
                    @click="handleClick"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        stars: 4
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-stars": "search-ui/Stars/Stars",
        "c-row": "search-ui/Row/Row",
        "c-span": "search-ui/Row/Span",
        "c-btn": "search-ui/Button/Button"
    }
}
</script>

<script>
export default {
    methods: {
        handleClick() {
            console.log('handleClick', Math.random() * 5);
            this.stars = Math.round(Math.random() * 10) / 2;
        }
    }
};
</script>
```

```atom 实心和镂空星星不同颜色
<template>
    <c-aladdin>
        <c-stars
            :stars="stars"
            :empty-color="emptyColor"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        stars: 3,
        emptyColor: '#999'
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-stars": "search-ui/Stars/Stars"
    }
}
</script>
```

```atom 未评分时为灰色；评分后为橙色
<template>
    <c-aladdin>
        <c-stars
            ref="stars"
            :stars="mStars"
            :color="color"
            :disabled="false"
            @change="handleChange"
        />
        <c-row>
            <c-span>
                <c-btn
                    text="点我将评分置为0"
                    @click="handleClick"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
{
    props: {
        stars: {
            type: Number,
            default: 0
        }
    },
    data: {
        mStars: 0,
        color: stars === 0
            ? '#999'
            : '#f60',
        defaultColor: '#999',
        orangeColor: '#f60'
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-stars": "search-ui/Stars/Stars",
        "c-row": "search-ui/Row/Row",
        "c-span": "search-ui/Row/Span",
        "c-btn": "search-ui/Button/Button"
    }
}
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('handleChange', obj);
            if (obj.current === 0) {
                this.color = this.defaultColor;
            }
            else {
                this.color = this.orangeColor;
            }
        },
        handleClick() {
            this.$refs.stars.change(0);
        }
    }
};
</script>
```

## 注意事项

1. 由于PC浏览器可显示的最小的fontSize是12px，而星星的默认fontSize为0.1rem，所以用Chrome模拟手机屏幕的时候所看到的星星组件样式不准确。如果要看真实效果，需要在手机端查看。
2. Props中属性（stars、showText除外）的默认值都是与UE核定过后的结果，一般情况下不需要修改，使用的时候只需要传入stars参数即可。如遇特殊情况，需要更改上述的尺寸或颜色值，首先需要得到UE的支持；第二，各个尺寸大小需要等比例扩大。

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
stars | number | 0 | 可选 | 星星数，范围是：0&nbsp;~&nbsp;5；可以为小数（例：3.5） | -
icon | string | star | 可选 | 星星的图标类型 | -
emptyIcon | string | empty_star | 可选 | 镂空星星的图标名 | -
color | string | #f60 | 可选 | 激活状态的星星颜色 | -
emptyColor | string | - | 可选 | 镂空状态的星星颜色 | -
fontSize | string | .1rem | 可选 | 星星的大小 | -
text | string | - | 可选 | 右侧文案 | -
showText | boolean | true | 可选 | 是否显示右侧文案 | -
textFontSize | string | .14rem | 可选 | 右侧文字的字体大小 | -
textColor | string | #999 | 可选 | 右侧文字的颜色 | -
textGap | string | .05rem | 可选 | 右侧文与星星之间的间距 | -
disabled | boolean | true | 可选 | 是否禁止交互 | -



### Events


- **change**: 评分改变时触发

名称 | 类型 | 描述
--- | --- | ---
current | number | 当前的数量
  old | number | 更改前的数量



