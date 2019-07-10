---
name: InfiniteScroll
title: 无限下拉组件
category: 交互类
owner: 姚昌，王凯
---

## 使用场景

> 底部加载样式参考UE规范：[D17.2 【基础组件】-【Loading】-【底部加载】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Loading.html)


## 示例

### 无限下拉底部栏 InfiniteScrollBottomBar

```atom 无限下拉底部栏
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="点我切换加载状态"
                    @click="changeStatus"/>
            </c-span>
        </c-row>
        <c-infinite-scroll-bottom-bar
            :status="status"
            @click="handleInfiniteScrollBottomBarClick">
        </c-infinite-scroll-bottom-bar>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            status: 1
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-infinite-scroll-bottom-bar': 'search-ui/InfiniteScroll/InfiniteScrollBottomBar',
        }
    }
</script>

<script>
    export default {
        methods: {
            changeStatus() {
                console.log('changeStatus');
                this.status = (this.status + 1) % 4;
            },
            handleInfiniteScrollBottomBarClick(obj) {
                console.log('handleInfiniteScrollBottomBarClick', obj);
            }
        }
    }
</script>
```

```atom 无限下拉底部栏；更换图标、文字颜色和背景色，设置通栏
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="点我切换加载状态"
                    @click="changeStatus"/>
            </c-span>
        </c-row>
        <c-infinite-scroll-bottom-bar
            :status="status"
            bg-color="#000"
            icon-color="#999"
            text-color="#999"
            row-tile
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        status: 1
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-btn': 'search-ui/Button/Button',
        'c-infinite-scroll-bottom-bar': 'search-ui/InfiniteScroll/InfiniteScrollBottomBar'
    }
}
</script>

<script>
export default {
    methods: {
        changeStatus() {
            console.log('changeStatus');
            this.status = (this.status + 1) % 4;
        }
    }
};
</script>
```

```atom 无限下拉底部栏；自定义区域
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="点我切换加载状态"
                    @click="changeStatus"/>
            </c-span>
        </c-row>
        <c-infinite-scroll-bottom-bar
            :status="status"
        >
            <span slot="left">
                [left slot]
            </span>
            <span slot="right">
                [right slot]
            </span>
        </c-infinite-scroll-bottom-bar>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        status: 1
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-btn': 'search-ui/Button/Button',
        'c-infinite-scroll-bottom-bar': 'search-ui/InfiniteScroll/InfiniteScrollBottomBar'
    }
}
</script>

<script>
export default {
    methods: {
        changeStatus() {
            console.log('changeStatus');
            this.status = (this.status + 1) % 4;
        }
    }
};
</script>
```

### 无限下拉 InfiniteScroll

#### 点击按钮触发加载；适用于结果页

```atom 无限下拉；点击按钮触发加载
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-infinite-scroll
            ref="infiniteScroll"
            :page-num="pageNum"
            loading-text="正在获取优惠信息"
            load-end-text="已无更多优惠信息"
            load-fail-text="优惠都飞走了，点击重新加载"
            mode="click"
            @load="onLoad"
        >
            <div
                a-for="(item, index) in count"
                :key="index"
                class="c-line-bottom c-gap-inner-top c-gap-inner-bottom"
            >
                <p>
                    {{ item }}
                </p>
            </div>
        </c-infinite-scroll>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        pageNum: 0,
        count: 5
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-infinite-scroll': 'search-ui/InfiniteScroll/InfiniteScroll'
    }
}
</script>

<script>
export default {
    methods: {
        onLoad(refer) {
            /**
             * refer: Object {         // 加载器-引用对象
             *     index: Number,      // 当前 页码数/刷新次数
             *     success: Function,  // 加载成功指令
             *     complete: Function, // 加载到尾部指令
             *     fail: Function,     // 加载失败指令
             * }
             */
            setTimeout(() => {
                let number = Math.random() * 10;
                if (number < 2) {
                    refer.complete();
                }
                else if (number >= 2 && number < 4) {
                    refer.fail();
                }
                else {
                    this.count += 10;
                    refer.success();
                }
            }, 1000);
        },
        setInfiniteScrollComplete() {
            // 主动设置无限加载完成
            this.$refs.infiniteScroll.complete();
        }
    }
};
</script>
```

```atom 无限下拉；点击按钮触发加载；使用 slot
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-infinite-scroll
            ref="infiniteScroll"
            :page-num="pageNum"
            :load-btn-show="false"
            loading-text="正在获取优惠信息"
            load-end-text="已无更多优惠信息"
            load-fail-text="优惠都飞走了，点击重新加载"
            mode="click"
            @load="onLoad"
        >
            <div
                slot="loadBtnSlot"
                class="customBtn"
            >
                加载按钮 slot 点我加载
            </div>
            <div
                a-for="(item, index) in count"
                :key="index"
                class="c-line-bottom c-gap-inner-top c-gap-inner-bottom"
            >
                <p>
                    {{ item }}
                </p>
            </div>
        </c-infinite-scroll>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        pageNum: 0,
        count: 5
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-infinite-scroll': 'search-ui/InfiniteScroll/InfiniteScroll'
    }
}
</script>

<script>
export default {
    methods: {
        onLoad(refer) {
            /**
             * refer: Object {         // 加载器-引用对象
             *     index: Number,      // 当前 页码数/刷新次数
             *     success: Function,  // 加载成功指令
             *     complete: Function, // 加载到尾部指令
             *     fail: Function,     // 加载失败指令
             * }
             */
            setTimeout(() => {
                let number = Math.random() * 10;
                if (number < 2) {
                    refer.complete();
                }
                else if (number >= 2 && number < 4) {
                    refer.fail();
                }
                else {
                    this.count += 10;
                    refer.success();
                }
            }, 1000);
        },
        setInfiniteScrollComplete() {
            // 主动设置无限加载完成
            this.$refs.infiniteScroll.complete();
        }
    }
};
</script>
```

#### 滚动到底部加载；适用于情景页

```atom 无限下拉；滚动到底部加载；禁用 mounted 自动触发加载
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-infinite-scroll
            :page-num="pageNum"
            :auto-load="false"
            loading-text="正在获取优惠信息"
            load-end-text="已无更多优惠信息"
            load-fail-text="优惠都飞走了，点击重新加载"
            @load="onLoad"
        >
            <div
                a-for="(item, index) in count"
                :key="index"
                class="c-line-bottom c-gap-inner-top c-gap-inner-bottom"
            >
                <p>{{ item }}</p>
            </div>
        </c-infinite-scroll>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            count: 5,
            pageNum: 0
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-infinite-scroll': 'search-ui/InfiniteScroll/InfiniteScroll'
        }
    }
</script>

<script>
    export default {
        methods: {
            onLoad(refer) {
                /**
                 * refer: Object {         // 加载器-引用对象
                 *     index: Number,      // 当前 页码数/刷新次数
                 *     success: Function,  // 加载成功指令
                 *     complete: Function, // 加载到尾部指令
                 *     fail: Function,     // 加载失败指令
                 * }
                 */
                setTimeout(() => {
                    this.count += 10;
                    refer.success();
                }, 1000);
            },
            // 主动触发加载
            activeEmitLoad() {
                // 主动触发加载，需要通过 ref 获取到 vnode 主动调用 load 方法
                this.$refs.infiniteScroll.load();
            }
        }
    }
</script>
```

```atom 无限下拉；滚动到底部加载
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-infinite-scroll
            :page-num="pageNum"
            loading-text="正在获取优惠信息"
            load-end-text="已无更多优惠信息"
            load-fail-text="优惠都飞走了，点击重新加载"
            @load="onLoad"
        >
            <div
                a-for="(item, index) in count"
                :key="index"
                class="c-line-bottom c-gap-inner-top c-gap-inner-bottom"
            >
                <p>{{ item }}</p>
            </div>
        </c-infinite-scroll>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            pageNum: 0,
            count: 15
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-infinite-scroll': 'search-ui/InfiniteScroll/InfiniteScroll'
        }
    }
</script>

<script>
    export default {
        methods: {
            onLoad(refer) {
                /**
                 * refer: Object {         // 加载器-引用对象
                 *     index: Number,      // 当前 页码数/刷新次数
                 *     success: Function,  // 加载成功指令
                 *     complete: Function, // 加载到尾部指令
                 *     fail: Function,     // 加载失败指令
                 * }
                 */
                setTimeout(() => {
                    var number = Math.random() * 10;
                    if (number < 1) {
                        refer.complete();
                    }
                    else if (number >= 1 && number < 3) {
                        refer.fail();
                    }
                    else {
                        this.count += 10;
                        refer.success();
                    }
                }, 1000);
            }
        }
    }
</script>
```

## 注意事项

1. 当首屏内容不满一屏时（确切地说，当屏幕内容高度和屏幕底部距离大于`bufferHeightPx`时），会一直触发加载直到距离差小于`bufferHeightPx`时，才停止加载。
2. 如果需要主动触发完成态，请在 `c-infinite-scroll` 标签上增加 ref 属性以获取 vnode 实例（例：`ref="infiniteScroll"`），之后在方法里直接调用 vnode 实例的 complete 方法即可（例：`this.$refs.infiniteScroll.complete();`）

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
pageNum | number | 0 | 可选 | 缺省图&加载图类型（见示例） | -
loadingText | string | 正在加载... | 可选 | 加载中文本 | -
loadEndText | string | 到底了 没有更多内容了 | 可选 | 加载到尾部文本 | -
loadFailText | string | 加载失败 点击重新加载 | 可选 | 加载失败文本 | -
bufferHeightPx | number | 10 | 可选 | 滚动位置和文档底部的距离，小于这个距离时触发加载新数据 | -
mode | string | scroll | 可选 | 触发模式：'scroll'&nbsp;滚动到底部触发；'click'&nbsp;点击按钮触发 | -
loadBtnShow | boolean | true | 可选 | 是否显示加载按钮 | -
loadBtnText | string | 展开更多 | 可选 | 加载按钮文案 | -
logClass | boolean | true | 可选 | 是否增加日志类 | -
bottomOpts | object | - | 可选 | 底部按钮配置 | -
autoLoad | boolean | true | 可选 | 是否在&nbsp;mounted&nbsp;时进行自动加载，默认自动加载；<br>如果想主动触发加载，需要通过`ref`获取到组件实例主动调用`load`方法 | -

#### InfiniteScrollBottomBar

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
loadingText | string | 正在加载... | 可选 | 加载中文案 | -
loadEndText | string | 到底了 没有更多内容了 | 可选 | 加载完成文案 | -
loadFailText | string | 加载失败 点击重新加载 | 可选 | 加载失败文案 | -
status | number \| string | 0 | 可选 | 加载状态 | -
bgColor | string | #fff | 可选 | 背景色 | -
iconColor | string | #2a2a31 | 可选 | 图标颜色 | -
textColor | string | #555 | 可选 | 文字颜色 | -
rowTile | boolean | false | 可选 | 是否为通栏 | -

### Slots



名称 | 描述
--- | ---
default | 内容区
loadBtnSlot | -

#### InfiniteScrollBottomBar

名称 | 描述
--- | ---
left | 左侧自定义区域
right | 右侧自定义区域

### Events


- **load**: 触发加载事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.index | number | 页码
  ${param1}.success | function | 控制将状态置为加载成功的函数
  ${param1}.complete | function | 控制将状态置为加载完成的函数
  ${param1}.fail | function | 控制将状态置为加载失败的函数


#### InfiniteScrollBottomBar


- **click**: 点击事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.status | number | 加载状态；0：空闲；1：加载中；2：加载完成；3：加载失败


### Methods


- **fail**: 主动设置加载状态为加载失败
	无参数

- **complete**: 主动设置加载状态为加载完成
	无参数

- **success**: 主动设置加载状态为加载成功
	无参数

- **reset**: 重置组件状态

  名称 | 类型 | 描述
  --- | --- | ---
  pageNum | number | 初始化到第几页

- **load**: 触发加载
	无参数

