---
name: Spread
title: 通用内容展开组件
category: 交互类
owner: 姚昌
---

## 示例

```atom 展开组件 正常使用
<template>
    <c-aladdin>
        <div id="demo">Hello World</div>
        <div a-if="spreadLevel >= 1">
            展开层级1
        </div>
        <div a-if="spreadLevel >= 2">
            展开层级2
        </div>
        <div a-if="spreadLevel >= 3">
            展开层级3
        </div>
        <c-spread :isSpread="spreadLevel < 3"
                  spreadText="展开展开展开展开"
                  foldText="收起收起收起收起"
                  @click="handleSpreadClick">
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            // 展开层级
            spreadLevel: 0,
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/Spread/Spread',
            'c-row': 'search-ui/Row/Row',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 展开组件点击事件
            handleSpreadClick() {
                if(this.spreadLevel === 3) {
                    this.spreadLevel = 0;
                    return;
                }
                this.spreadLevel++;
            }
        }
    }
</script>
```

```atom 展开组件 展开后不收起
<template>
    <c-aladdin>
        <div id="demo">Hello World</div>
        <div a-if="spreadLevel >= 1">
            展开层级1
        </div>
        <div a-if="spreadLevel >= 2">
            展开层级2
        </div>
        <div a-if="spreadLevel >= 3">
            展开层级3
        </div>
        <c-spread :isShow="spreadLevel===3 ? false : true"
                  :isSpread="spreadLevel < 3"
                  spreadText="展开展开展开展开"
                  foldText="收起收起收起收起"
                  @click="handleSpreadClick">
        </c-spread>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            // 展开层级
            spreadLevel: 0,
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/Spread/Spread',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 展开组件点击事件
            handleSpreadClick() {
                if(this.spreadLevel === 3) {
                    this.spreadLevel = 0;
                    return;
                }
                this.spreadLevel++;
                console.log('this.spreadLevel',this.spreadLevel);
            }
        }
    }
</script>
```

```atom 展开组件 行内样式 添加 display:inline 属性
<template>
    <c-aladdin>
        <div class="wrapper">
            <span id="demo">Hello World Hello WorldHello WorldHello World</span>
            <span a-if="spreadLevel >= 1">
                展开层级1展开层级1展开层级1展开层级1
            </span>
            <span a-if="spreadLevel >= 2">
                展开层级2展开层级2展开层级2展开层级2
            </span>
            <span a-if="spreadLevel >= 3">
                展开层级3展开层级3展开层级3展开层级3
            </span>
            <c-spread style="display: inline;"
                    :isSpread="spreadLevel < 3"
                    spreadText=""
                    foldText=""
                    @click="handleSpreadClick">
            </c-spread>
        </div>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            // 展开层级
            spreadLevel: 0,
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/Spread/Spread',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 展开组件点击事件
            handleSpreadClick() {
                if(this.spreadLevel === 3) {
                    this.spreadLevel = 0;
                    return;
                }
                this.spreadLevel++;
                console.log('this.spreadLevel',this.spreadLevel);
            }
        }
    }
</script>
```

```atom 展开组件 固定右下角，自行使用绝对定位
<template>
    <c-aladdin>
        <div class="wrapper">
            <span id="demo">Hello World Hello WorldHello WorldHello World</span>
            <span a-if="spreadLevel >= 1">
                展开层级1展开层级1展开层级1展开层级1
            </span>
            <span a-if="spreadLevel >= 2">
                展开层级2展开层级2展开层级2展开层级2
            </span>
            <span a-if="spreadLevel >= 3">
                展开层级3展开层级3展开层级3展开层级3
            </span>
            <c-spread class="spread"
                    :isSpread="spreadLevel < 3"
                    spreadText=""
                    foldText=""
                    @click="handleSpreadClick">
            </c-spread>
        </div>
    </c-aladdin>
</template>

<style>
    .wrapper {
        position: relative;
    }

    .spread {
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>

<script type="config">
    {
        data: {
            // 展开层级
            spreadLevel: 0,
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-spread': 'search-ui/Spread/Spread',
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            // 展开组件点击事件
            handleSpreadClick() {
                if(this.spreadLevel === 3) {
                    this.spreadLevel = 0;
                    return;
                }
                this.spreadLevel++;
                console.log('this.spreadLevel',this.spreadLevel);
            }
        }
    }
</script>
```

## API：

### Props

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| isShow | Boolean | true | 是否显示 true为显示 false为隐藏 |
| isSpread | Boolean | true | 【图标】是否是展示态；由于 Spread 组件内部不维护状态，这里的 展示/收起 指的是图标的状态；true 为展示态图标（箭头向下，表示点击展开）；false 为收起态图标（箭头向上，表示点击收起）|
| hasIcon | Boolean | true | 是否有箭头图标 true为有 false为没有 |
| spreadText | String | '展示' | 展示内容文案配置 |
| foldText | String | '收起' | 收起内容文案配置 |

### Slots
无

### Events
| 名称      |  描述     | 参数        |
|-----------|----------|--------------|
|click   |当点击展开按钮后触发的回调函数|/|

## 注意事项

状态请自行维护