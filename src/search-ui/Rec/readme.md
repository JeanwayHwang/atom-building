---
name: Rec
title: 推荐模块组件
category: 推荐类
owner: 王凯
---

### 使用场景 

结果页阿拉丁模板，next-page 中均有使用

## 示例

### 默认样式

```atom 推荐组件；自带内边距
<template>
    <c-aladdin
        :style="{
            paddingLeft: 0,
            paddingRight: 0
        }"
        touchable
        hide-header
        hide-footer
    >
        <c-rec
            :list="recList"
            :title="recTitle"
            :num="recNum"
            @itemclick="handleItemClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        recTitle: '去全网搜索',
        recNum: 8,
        recList: [
            {
                "text":"刘涛说刘德华请不到",
                "href":"https://m.baidu.com/s?word=%E5%88%98%E6%B6%9B%E8%AF%B4%E5%88%98%E5%BE%B7%E5%8D%8E%E8%AF%B7%E4%B8%8D%E5%88%B0&sa=re_dl_prs_14939_1&rqid=3012623250"
            },
            {
                "text":"金星怎么评价刘德华",
                "href":"https://m.baidu.com"
            },
            {
                "text":"在中国谁比刘德华更红",
                "href":"https://m.baidu.com"
            }
        ]
    },
    components: {
        'c-rec': 'search-ui/Rec/Rec',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        }
    }
};
</script>
```

```atom 推荐组件
<template>
    <c-aladdin
        touchable
        hide-header
        hide-footer
    >
        <c-rec
            :list="recList"
            :title="recTitle"
            :num="recNum"
            :horizontal-padding="false"
            @itemclick="handleItemClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        recTitle: '去全网搜索',
        recNum: 8,
        recList: [
            {
                "text":"刘涛说刘德华请不到",
                "href":"https://m.baidu.com/s?word=%E5%88%98%E6%B6%9B%E8%AF%B4%E5%88%98%E5%BE%B7%E5%8D%8E%E8%AF%B7%E4%B8%8D%E5%88%B0&sa=re_dl_prs_14939_1&rqid=3012623250"
            },
            {
                "text":"金星怎么评价刘德华",
                "href":"https://m.baidu.com"
            },
            {
                "text":"在中国谁比刘德华更红",
                "href":"https://m.baidu.com"
            }
        ]
    },
    components: {
        'c-rec': 'search-ui/Rec/Rec',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        }
    }
};
</script>
```

### 自适应滑动样式

```atom 自适应滑动样式
<template>
    <c-aladdin
        touchable
        hide-header
        hide-footer
    >
        <c-rec
            :list="recList"
            :title="recTitle"
            title-icon=""
            :num="recNum"
            :horizontal-padding="false"
            type="scroll"
            @itemclick="handleItemClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        recTitle: '相关搜索',
        recNum: 8,
        recList: [
            {
                "text":"刘涛说刘德华请不到",
                "href":"https://m.baidu.com/s?word=%E5%88%98%E6%B6%9B%E8%AF%B4%E5%88%98%E5%BE%B7%E5%8D%8E%E8%AF%B7%E4%B8%8D%E5%88%B0&sa=re_dl_prs_14939_1&rqid=3012623250"
            },
            {
                "text":"金星怎么评价刘德华",
                "href":"https://m.baidu.com"
            },
            {
                "text":"在中国谁比刘德华更红",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华的电影",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华演唱会 2018",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华老婆",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华年轻时最帅照片",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华遭人身攻击",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华111",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华222",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华333",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华444",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华555",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华666",
                "href":"https://m.baidu.com"
            }
        ]
    },
    components: {
        'c-rec': 'search-ui/Rec/Rec',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        }
    }
};
</script>
```

### 竖直排列样式

```atom 竖直排列样式；6n 栅格
<template>
    <c-aladdin
        touchable
        hide-header
        hide-footer
    >
        <c-row>
            <c-span>
                <c-rec
                    :list="recList"
                    :title="recTitle"
                    :num="recNum"
                    :horizontal-padding="false"
                    title-color="#000"
                    title-icon=""
                    type="vertical"
                    class="c-gap-inner-left-middle c-gap-inner-right-middle"
                    @itemclick="handleItemClick"
                />
            </c-span>
            <c-span>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        recTitle: '相关搜索',
        recNum: 5,
        recList: [
            {
                "text":"刘涛说刘德华请不到",
                "href":"https://m.baidu.com"
            },
            {
                "text":"金星怎么评价刘德华",
                "href":"https://m.baidu.com"
            },
            {
                "text":"在中国谁比刘德华更红在中国谁比刘德华更红",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华的电影",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华演唱会 2018",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华老婆",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华年轻时最帅照片",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华年轻时最帅照片",
                "href":"https://m.baidu.com"
            }
        ]
    },
    components: {
        'c-rec': 'search-ui/Rec/Rec',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        }
    }
};
</script>
```

```atom 竖直排列样式；通栏
<template>
    <c-aladdin
        touchable
        hide-header
        hide-footer
    >
        <div
            class="wrapper"
        >
            <div
                :style="{
                    'padding-right': '1px'
                }"
                class="item"
            >
                <c-rec
                    :list="recList"
                    :title="recTitle"
                    :num="recNum"
                    :horizontal-padding="false"
                    title-color="#000"
                    title-icon=""
                    type="vertical"
                    class="c-gap-inner-left-middle c-gap-inner-right-middle"
                    @itemclick="handleItemClick"
                />
            </div>
            <div
                :style="{
                    'padding-left': '1px'
                }"
                class="item"
            >
            </div>
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        recTitle: '相关搜索',
        recNum: 5,
        recList: [
            {
                "text":"刘涛说刘德华请不到",
                "href":"https://m.baidu.com"
            },
            {
                "text":"金星怎么评价刘德华",
                "href":"https://m.baidu.com"
            },
            {
                "text":"在中国谁比刘德华更红在中国谁比刘德华更红",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华的电影",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华演唱会 2018",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华老婆",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华年轻时最帅照片",
                "href":"https://m.baidu.com"
            },
            {
                "text":"刘德华年轻时最帅照片",
                "href":"https://m.baidu.com"
            }
        ]
    },
    components: {
        'c-rec': 'search-ui/Rec/Rec',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleItemClick(obj) {
            console.log('handleItemClick', obj);
        }
    }
};
</script>

<style lang="less" module>
.wrapper {
    display: flex;
    margin-left: -.17rem;
    margin-right: -.17rem;
    .item {
        width: 50%;
        box-sizing: border-box;
    }
}
</style>
```

## API

### Props

| 参数 | 类型 | 默认值 | 必选 | 描述 |
| --- | --- | --- | --- | --- |
| list | array | | 是 | 推荐数据 |
| title | string | '去全网搜索' | 否 | 推荐卡片标题文案 |
| titleIcon | string | 'baidu' | 否 | 标题图标 |
| titleColor | string | '#999' | 否 | 标题颜色 |
| num | number | 8 | 否 | 推荐条数最大限制 |
| type | string | 'normal' | 否 | 推荐样式类型；'normal' 正常类型；'scroll' 滑动类型；'vertical' 竖直排列样式 |
| horizontalPadding | boolean | true | 否 | 水平内间距；为保证线上兼容，默认自带水平内间距，如不需要需要手动传入 false |
| scrollOpts | object | {<br>width: '633px', // 滑动 dom 的宽度<br>wrapItemCountThreshold: 9 // 换行项数阈值（项数超过这个则换行）<br>}| 否 | 滑动样式配置 |

### Events

| 名称 | 描述 | 参数 |
| --- | --- | --- |
| itemclick | 点击项时触发 | {<br>index<Number>: 项索引,<br>item<Object>: 项对象<br>} |
