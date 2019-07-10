---
name: AnimateIcon
title: 动效图标
category: 展示元素类
owner: 王凯
---

## 使用场景

## 示例

```atom 三角型图标
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <div>
            <div
                :left="-.05"
                :right="-.05"
                @click="handleClick1"
            >
                <span class="c-gap-right-small">
                    无动效
                </span>
                <c-triangle
                    :animation="false"
                    :direction="direction1"
                />
            </div>
        </div>
        <div>
            <div
                :left="-.05"
                :right="-.05"
                @click="handleClick2"
            >
                <span class="c-gap-right-small">
                    正常使用
                </span>
                <c-triangle
                    :direction="direction2"
                />
            </div>
        </div>
        <div>
            <div
                :left="-.05"
                :right="-.05"
                @click="handleClick3"
            >
                <span class="c-gap-right-small">
                    修改颜色
                </span>
                <c-triangle
                    color="red"
                    :direction="direction3"
                />
            </div>
        </div>
        <div>
            <div
                :left="-.05"
                :right="-.05"
                @click="handleClick4"
            >
                <span class="c-gap-right-small">
                    默认向上
                </span>
                <c-triangle
                    :direction="direction4"
                />
            </div>
        </div>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            direction1: 1,
            direction2: 1,
            direction3: 1,
            direction4: 2
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-triangle': 'search-ui/AnimateIcon/Triangle'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleClick1(e) {
                this.direction1 = this.direction1 === 1 ? 2 : 1;
            },
            handleClick2(e) {
                this.direction2 = this.direction2 === 1 ? 2 : 1;
            },
            handleClick3(e) {
                this.direction3 = this.direction3 === 1 ? 2 : 1;
            },
            handleClick4(e) {
                this.direction4 = this.direction4 === 1 ? 2 : 1;
            }
        }
    }
</script>
```

```atom 箭头型图标
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <div>
            <div
                :left="-.05"
                :right="-.05"
                @click="handleClick1"
            >
                <span class="c-gap-right-small">
                    无动效
                </span>
                <c-arrow
                    :animation="false"
                    :direction="direction1"
                />
            </div>
        </div>
        <div>
            <div
                :left="-.05"
                :right="-.05"
                @click="handleClick2"
            >
                <span class="c-gap-right-small">
                    正常使用
                </span>
                <c-arrow
                    :direction="direction2"
                />
            </div>
        </div>
        <div>
            <div
                :left="-.05"
                :right="-.05"
                @click="handleClick3"
            >
                <span class="c-gap-right-small">
                    修改颜色
                </span>
                <c-arrow
                    color="red"
                    :direction="direction3"
                />
            </div>
        </div>
        <div>
            <div
                :left="-.05"
                :right="-.05"
                @click="handleClick4"
            >
                <span class="c-gap-right-small">
                    默认箭头向上
                </span>
                <c-arrow
                    :direction="direction4"
                />
            </div>
        </div>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            direction1: 1,
            direction2: 1,
            direction3: 1,
            direction4: 2
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-arrow': 'search-ui/AnimateIcon/Arrow'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleClick1(e) {
                this.direction1 = this.direction1 === 1 ? 2 : 1;
            },
            handleClick2(e) {
                this.direction2 = this.direction2 === 1 ? 2 : 1;
            },
            handleClick3(e) {
                this.direction3 = this.direction3 === 1 ? 2 : 1;
            },
            handleClick4(e) {
                this.direction4 = this.direction4 === 1 ? 2 : 1;
            }
        }
    }
</script>
```

## API
### Props

#### Arrow

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
color | string | #000 | 可选 | 颜色&nbsp;svg&nbsp;stroke&nbsp;color | -
fillColor | string | #fff | 可选 | svg&nbsp;填充颜色 | -
direction | number | 1 | 可选 | 默认方向；1：向下；2：向上 | -
animation | boolean | true | 可选 | 是否开启点击动画 | -

#### Triangle

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
color | string | #000 | 可选 | 颜色色值 | -
direction | number | 1 | 可选 | 默认方向；1：向下；2：向上； | -
animation | boolean | true | 可选 | 是否开启点击动画 | -
defaultLineHeight | boolean | true | 可选 | 是否有默认行高 | -



### Events
无

