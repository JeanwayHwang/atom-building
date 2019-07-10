---
name: Tombstone
title: 占位加载
category: 展示元素类
owner: 王凯
---

## 使用场景

## 示例

```atom 问答占位加载；通过 animation-type 增加动效
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-row>
            <c-span>
                <c-btn
                    :text="isShow
                        ? '隐藏'
                        : '显示'
                    "
                    @click="handleClick"
                />
            </c-span>
        </c-row>
        <c-tombstone
            a-if="isShow"
            :type="3"
            animation-type="vertical"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: true
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tombstone': 'search-ui/Tombstone/Tombstone',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleClick() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>
```

```atom 资讯占位加载
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-row>
            <c-span>
                <c-btn
                    :text="isShow
                        ? '隐藏'
                        : '显示'
                    "
                    @click="handleClick"
                />
            </c-span>
        </c-row>
        <c-tombstone
            a-if="isShow"
            :type="2"/>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: true
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tombstone': 'search-ui/Tombstone/Tombstone',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleClick() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>
```

```atom 图文占位加载
<template>
    <c-aladdin
        hide-header
        hide-footer>
        <c-row>
            <c-span>
                <c-btn
                    :text="isShow
                        ? '隐藏'
                        : '显示'
                    "
                    @click="handleClick"
                />
            </c-span>
        </c-row>
        <c-tombstone
            a-if="isShow"
            :type="4"/>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: true
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tombstone': 'search-ui/Tombstone/Tombstone',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleClick() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>
```

```atom 浏览态占位加载
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-row>
            <c-span>
                <c-btn
                    :text="isShow
                        ? '隐藏'
                        : '显示'
                    "
                    @click="handleClick"
                />
            </c-span>
        </c-row>
        <c-tombstone
            a-if="isShow"
            :type="5"
            :num="2"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: true
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tombstone': 'search-ui/Tombstone/Tombstone',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleClick() {
                this.isShow = !this.isShow;
            }
        }
    }
</script>
```

```atom 图片占位加载；瀑布流
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-row>
            <c-span>
                <c-btn
                    :text="isShow
                        ? '隐藏'
                        : '显示'
                    "
                    @click="handleClick"
                />
            </c-span>
        </c-row>
        <c-tombstone
            a-if="isTombstoneShow"
            :type="1"
            @leave="handleAfterLeave"
        />
        <div a-if="isContentShow">
            <div a-for="i in 40">
                {{ i }}
            </div>
        </div>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isTombstoneShow: true,
            isContentShow: false
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tombstone': 'search-ui/Tombstone/Tombstone',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleAfterLeave() {
                console.log('handleAfterLeave');
                this.isContentShow = true;
            },
            handleClick() {
                this.isTombstoneShow = !this.isTombstoneShow;
                if (this.isTombstoneShow) {
                    this.isContentShow = false;
                }
            }
        }
    }
</script>
```

```atom 图片占位加载；相同形状；通栏
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-row>
            <c-span>
                <c-btn
                    :text="isShow
                        ? '隐藏'
                        : '显示'
                    "
                    @click="handleClick"
                />
            </c-span>
        </c-row>
        <c-tombstone
            a-if="isTombstoneShow"
            :type="1"
            img-type="same"
            row-tile
            @leave="handleAfterLeave"
        />
        <div a-if="isContentShow">
            <div a-for="i in 40">
                {{ i }}
            </div>
        </div>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isTombstoneShow: true,
            isContentShow: false
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tombstone': 'search-ui/Tombstone/Tombstone',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleAfterLeave() {
                console.log('handleAfterLeave');
                this.isContentShow = true;
            },
            handleClick() {
                this.isTombstoneShow = !this.isTombstoneShow;
                if (this.isTombstoneShow) {
                    this.isContentShow = false;
                }
            }
        }
    }
</script>
```

## 注意事项

1. 垂类可自行选择在消失回调完成之后加载或者是自行设置延时加载。

2. 如果要使用 afterleave 回调事件，请使用 a-show，否则会接收不到该回调。

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | number | 1 | 可选 | 占位加载图类型；1：图片；2：资讯；3：问答列表；4：图文列表 | -
rowTile | boolean | false | 可选 | 是否是通栏；默认为&nbsp;false | -
enterAnimationDuration | number | 0 | 可选 | 进入动画持续时间；默认&nbsp;0 | -
leaveAnimationDuration | number | 80 | 可选 | 离开动画持续时间；默认&nbsp;80 | -
imgNum | number | 1 | 可选 | 图片占位图占的屏幕数量；默认1屏；当且仅当为图片类型&nbsp;type&nbsp;===&nbsp;1&nbsp;时生效 | -
imgType | string | waterfall | 可选 | 图片占位类型；'waterfall'&nbsp;瀑布流；'same'&nbsp;相同；默认为&nbsp;'waterfall'，当且仅当为图片类型&nbsp;type&nbsp;===&nbsp;1&nbsp;时生效 | -
num | number | 6 | 可选 | 除图片类型外，其他类型占位加载的条数；默认6条；当且仅当不为图片类型&nbsp;type&nbsp;!==&nbsp;1&nbsp;时生效 | -
animationType | string | - | 可选 | 动效类型；'vertical'&nbsp;竖直动效 | -

#### ImgTombstone

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
column | number | 2 | 可选 | - | -
type | string | waterfall | 可选 | - | -
rowTile | boolean | false | 可选 | - | -
listWaterfall | array | [{"whScale":1.29},{"whScale":1.96},{"whScale":1.65},{"whScale":1.1},{"whScale":1.1},{"whScale":1.65},{"whScale":1.65},{"whScale":1.1},{"whScale":1.29},{"whScale":1.96},{"whScale":1.47},{"whScale":1.1}] | 可选 | - | -
listSame | array | [{"whScale":0.75},{"whScale":0.75},{"whScale":0.75},{"whScale":0.75},{"whScale":0.75},{"whScale":0.75},{"whScale":0.75},{"whScale":0.75}] | 可选 | - | -

#### ImgTombstoneItem

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
index | number | - | 可选 | - | -
color | string | #f4f2f2 | 可选 | - | -
whScale | number | 1 | 可选 | - | -
borderRadius | object | {"tl":false,"tr":false,"bl":false,"br":false} | 可选 | - | -

#### TombstoneItem

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | number | 1 | 可选 | - | -
color | string | #f4f2f2 | 可选 | - | -
index | number | 0 | 可选 | - | -
animationType | string | - | 可选 | 动效类型；'vertical'&nbsp;竖直动效 | -



### Events


- **afterleave**: 组件移除之后的回调.
	无参数

- **leave**: 组件移除的回调.
	无参数

- **beforeleave**: 组件移除之前的回调.
	无参数



