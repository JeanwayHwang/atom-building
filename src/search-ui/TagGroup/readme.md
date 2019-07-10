---
name: TagGroup
title: Tag组组件
category: 导航类
owner: 姚昌
---

## 使用场景

> 参考UE规范：[D11 【基础组件】-【Tag】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Tags.html)

## 示例

<h6 id="三等分（默认栅格列 3列4N） 单选"></h6>

```atom 三等分（默认栅格列 3列4N） 单选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="radio"
            :list="list"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                    selected: true,
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 1492,
                },
                {
                    text: '负向文字',
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="三等分（默认栅格列 3列4N） 多选"></h6>

```atom 三等分（默认栅格列 3列4N） 多选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="checkbox"
            :list="list"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                    selected: true
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 8910,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="二等分（自定义栅格列 2列6N） 单选"></h6>

```atom 二等分（自定义栅格列 2列6N） 单选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="radio"
            :list="list"
            :column="2"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 8910,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="二等分（自定义栅格列 2列6N） 多选"></h6>

```atom 二等分（自定义栅格列 2列6N） 多选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="checkbox"
            :list="list"
            :column="2"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                    selected: true
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 8910,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="四等分（自定义栅格列 4列3N） 单选"></h6>

```atom 四等分（自定义栅格列 4列3N） 单选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="radio"
            :list="list"
            :column="4"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 8910,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="四等分（自定义栅格列 4列3N） 多选"></h6>

```atom 四等分（自定义栅格列 4列3N） 多选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="checkbox"
            :list="list"
            :column="4"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                    selected: true
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 8910,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="五等分（不走栅格规范 5列） 单选"></h6>

```atom 五等分（不走栅格规范 5列） 单选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="radio"
            :list="list"
            :column="5"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 8910,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="五等分（不走栅格规范 5列） 多选"></h6>

```atom 五等分（不走栅格规范 5列） 多选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="checkbox"
            :list="list"
            :column="5"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 8910,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="自适应 单选"></h6>

```atom 自适应 单选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="radio"
            :list="list"
            :is-auto="isAuto"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isAuto: true,
            list: [
                {
                    text: '标签一',
                    selected: true
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                },
                {
                    text: '标签四',
                },
                {
                    text: '标签五',
                },
                {
                    text: '标签六',
                    number: 1450,
                },
                {
                    text: '负向文字',
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="自适应 多选"></h6>

```atom 自适应 多选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="checkbox"
            :is-auto="true"
            :list="list"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                    selected: true
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 1450,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

<h6 id="自适应滑动效果 单选"></h6>

```atom 自适应滑动效果 单选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="radio"
            :list="list"
            :is-auto="true"
            :allow-scroll="true"
            @change="handleChange"
            @scrollEnd="handleScrollEnd"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 1450,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true,
                    selected: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            },
            handleScrollEnd() {
                console.log('handleScrollEnd');
            }
        }
    }
</script>
```

<h6 id="自适应滑动效果 js 模拟点击"></h6>

```atom 自适应滑动效果 js 模拟点击
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            ref="tagGroup"
            type="radio"
            :list="list"
            :is-auto="true"
            :allow-scroll="true"
            @change="handleChange"
            @click="handleClick"
            @scrollEnd="handleScrollEnd"
        />
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    :text="'跳转到第' + curSelectIndex + '个'"
                    @click="handleJump"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            curSelectIndex: 5,
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 1450,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true,
                    selected: true
                },
                {
                    text: '标签六'
                },
                {
                    text: '标签七'
                },
                {
                    text: '标签八'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            },
            // 跳转到某个 tag
            handleJump() {
                console.log('跳转到某个 tag');
                if (this.curSelectIndex + 1 === this.list.length) {
                    this.curSelectIndex = 0;
                }
                else {
                    this.curSelectIndex += 1;
                }
                this.$refs.tagGroup.setRadioIndex(this.curSelectIndex);
            },
            handleClick(obj) {
                console.log('click obj', obj);
            },
            handleScrollEnd() {
                console.log('handleScrollEnd');
            }
        }
    }
</script>
```

<h6 id="自适应滑动效果 多选"></h6>

```atom 自适应滑动效果 多选
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="checkbox"
            :list="list"
            :is-auto="true"
            :allow-scroll="true"
            @change="handleChange"
            @scrollEnd="handleScrollEnd"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                    selected: true
                },
                {
                    text: '标签四',
                    number: 28,
                    selected: true
                },
                {
                    text: '标签五',
                    number: 1450,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true,
                    selected: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            },
            handleScrollEnd() {
                console.log('handleScrollEnd');
            }
        }
    }
</script>
```

<h6 id="禁用点击交互效果"></h6>

```atom 禁用点击交互效果
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-tag-group
            type="checkbox"
            :list="list"
            :disable="true"
            @change="handleChange"
        >
        </c-tag-group>
        <c-row class="c-gap-top-small">
            <c-span>
                <c-btn
                    text="点我增加一个Tag"
                    icon="plus2"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    text: '标签一',
                },
                {
                    text: '标签二',
                },
                {
                    text: '标签三',
                },
                {
                    text: '标签四',
                    number: 28,
                },
                {
                    text: '标签五',
                    number: 1450,
                },
                {
                    text: '负向文字',
                    number: 0,
                    isNegative: true
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-tag-group': 'search-ui/TagGroup/TagGroup',
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleChange(value, obj) {
                console.log('handleChange', value, obj);
            },
            handleAdd() {
                const _this = this;
                let text = '新增标签';
                this.list.push({
                    text: text,
                    selected: false
                });
            }
        }
    }
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | radio | 可选 | 类型；单选&nbsp;radio；多选&nbsp;checkbox | -
list | array | - | 可选 | 数据数组 | -
>> list[].text | string | - | - | 文案 | -
>> list[].number | number | - | - | 数量 | -
>> list[].selected | boolean | - | - | 初始选中状态 | -
>> list[].isNegative | boolean | - | - | 是否是负向文字 | -
isAuto | boolean | false | 可选 | 按钮大小是否自适应 | -
column | number | 3 | 可选 | 列数；当5列时较为特殊，不走栅格而是等分 | -
disable | boolean | false | 可选 | 是否禁用点击交互效果；注：禁用点击效果后点击Tag不会发送tc日志 | -
allowScroll | boolean | false | 可选 | 是否允许&nbsp;TagGroup&nbsp;滑动 | -



### Events


- **setRadioIndex**: 选项改变后的回调函数 单选返回选中项元素的下标 多选返回选中项元素们的下标数组
	无参数

- **change**: 选项改变后的回调函数；单选返回选中项元素的下标；多选返回选中项元素们的下标数组.

名称 | 类型 | 描述
--- | --- | ---
${param1} | undefined | 单选：index:Number&nbsp;选中项元素的下标；多选：selectArr:Array&nbsp;选中项元素们的下标
  ${param2}.e | object | 点击事件

- **click**: 当横滑结束时触发，主要用于日志.

名称 | 类型 | 描述
--- | --- | ---
${param1}.index | object | 当前点击的项的索引
  ${param1}.e | object | 点击事件

- **scrollEnd**: 当横滑结束时触发，主要用于日志.
	无参数



