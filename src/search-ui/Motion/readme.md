---
name: Motion
title: 动效通用组件
category: 交互类
owner: 张文韬
---

## 参考链接

[动效通用组件](http://agroup.baidu.com/acme/md/article/878908)

[Web_Animations_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

[web-animations polyfill](https://github.com/web-animations/web-animations-js)

## 示例

```atom slideDown/opacity/rotate (点击箭头)
<template>
<div style="height: 300px">
    <div class="wrap">
        <h3>北京旅游 a-show</h3>
        <ul class="nav">
            <li>概览</li>
            <li>图片</li>
            <li>景点</li>
            <li>门票</li>
            <li>攻略</li>
        </ul>
        
        <div class="trigger" @click="onToggle">
            <c-move ref="rotate"
                :animations="{ rotate: {frames: rotateKeys} }" 
                :options="{fill: 'both', duration: duration}"
            >
                <i></i>
            </c-move>
        </div>
        
        <div class="dropdown-wrap">
            <c-transition 
                :enter="{ animations:{slideDown: { }}, options: {duration: duration}}" 
                :leave="{ animations:{slideDown: { reverse: true }}, options: {duration: duration}}"
                @beforeEnter="log('dropdown @before-enter')"
                @enter="log('dropdown @enter')"
                @afterEnter="log('dropdown @after-enter')"
                @beforeLeave="log('dropdown @before-leave')"
                @leave="log('dropdown @leave')"
                @afterLeave="log('dropdown @after-leave')"
            >
                <ul class="dropdown" a-show="isOpen">
                    <li>选择分类：</li><li></li>
                    <li>概览</li>
                    <li>图片</li>
                    <li>景点</li>
                    <li>门票</li>
                    <li>攻略</li>
                </ul>
            </c-transition>
         </div>
    </div>
    <c-transition 
        :enter="{ animations: { opacity: {frames: [0, .7]} } }" 
        :leave="{ animations: { opacity: {frames: [0, .7], reverse: true } } }"
    >
        <div class="mask" a-show="isOpen" @click="onToggle"></div>
    </c-transition>
</div>
</template>

<script type="config">
    {
        props: ['data'],
        data: {
            isOpen: false,
            rotateKeys: [0, 180],
            play: false,
            duration: 500
        },
        components: {
            'c-transition': 'search-ui/Motion/Transition',
            'c-move': 'search-ui/Motion/Animation',
        }
    }
</script>

<script>
    export default {
        methods: {
            onToggle() {
                this.$refs.rotate.play();
                this.rotateKeys = !this.isOpen ? [180, 0] : [0, 180];
                this.isOpen = !this.isOpen;                 
            },
            log(msg) {
                console.log(msg);
            }
        }
    };
</script>

<style scoped>
    .wrap {
        position: absolute;
        height: 80px;
        background: #fff;
        width: 100%;
        line-height: 40px;
        z-index: 1;
    }
    .mask {
        background: #000;
        position: absolute;
        opacity: .7;
        width: 100%;
        height: 100%;
    }

    h3 {
        height: 40px;
        text-align: center;
        position: relative;
        background: #fff;
    }

    .trigger {
        position: absolute;
        height: 40px;
        width: 40px;
        right: 0;
        top: 40px;
        text-align: center;
        z-index: 10;
        background: #fff;
    }
    .trigger i {
        height: 6px;
        width: 10px;
        position: absolute;
        display: inline-block;
        top: 17px;
        left: 15px;
    }
    .trigger i::after {
        position: relative;
        bottom: 4px;
        content: ' ';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: #404040 transparent transparent transparent;
    }

    .nav {
        height: 40px;
        text-align: center;
    }

    .nav li {
        display: inline-block;
        width: 18%;
    }

    .dropdown-wrap {
        position: absolute;
        width: 100%;
        top: 40px;
        z-index: 9;
        overflow: hidden;
    }

    .dropdown {
        background: #fff;
        // transform: translateX(100px);
    }

    .dropdown li {
        text-align: center;
        width: 48%;
        display: inline-block;
    }
</style>
```

```atom slideDown/opacity/rotate (点击箭头)
<template>
<div style="height: 300px">
    <div class="wrap">
        <h3>北京旅游 a-if</h3>
        <ul class="nav">
            <li>概览</li>
            <li>图片</li>
            <li>景点</li>
            <li>门票</li>
            <li>攻略</li>
        </ul>
        <div class="trigger" @click="onToggle">
            <c-move ref="rotate"
                :animations="{ rotate: {frames: rotateKeys} }" 
                :options="{fill: 'both', duration: duration}"
            >
                <i></i>
            </c-move>
        </div>
        
        <div class="dropdown-wrap">
            <!-- <transition>
                <slot name="trans">
                    <ul class="dropdown" a-if="isOpen">
                        <li>选择分类：</li><li></li>
                        <li>概览</li>
                        <li>图片</li>
                        <li>景点</li>
                        <li>门票</li>
                        <li>攻略</li>
                    </ul>
                </slot>
            </transition> -->
            <!-- <transition></transition> -->
            <c-transition 
                :enter="{ animations:{slideDown: { }}, options: {duration: duration}}" 
                :leave="{ animations:{slideDown: { reverse: true }}, options: {duration: duration}}"
                @beforeEnter="log('dropdown @before-enter')"
                @enter="log('dropdown @enter')"
                @afterEnter="log('dropdown @after-enter')"
                @beforeLeave="log('dropdown @before-leave')"
                @leave="log('dropdown @leave')"
                @afterLeave="log('dropdown @after-leave')"
            >
                <ul class="dropdown" a-if="isOpen">
                    <li>选择分类：</li><li></li>
                    <li>概览</li>
                    <li>图片</li>
                    <li>景点</li>
                    <li>门票</li>
                    <li>攻略</li>
                </ul>
            </c-transition>
         </div>
    </div>
    <c-transition 
        :enter="{ animations: { opacity: {frames: [0, .7]} } }" 
        :leave="{ animations: { opacity: {frames: [0, .7], reverse: true } } }"
    >
        <div class="mask" a-if="isOpen" @click="onToggle"></div>
    </c-transition>
</div>
</template>

<script type="config">
    {
        props: ['data'],
        data: {
            isOpen: false,
            rotateKeys: [0, 180],
            play: false,
            duration: 500
        },
        components: {
            'c-transition': 'search-ui/Motion/Transition',
            'c-move': 'search-ui/Motion/Animation'
        }
    }
</script>

<script>
    export default {
        methods: {
            onToggle(flag) {
                this.$refs.rotate.play();
                this.rotateKeys = !this.isOpen ? [180, 0] : [0, 180];
                this.isOpen = !this.isOpen;               
            },
            log(msg) {
                console.log(msg);
            }
        }
    };
</script>

<style scoped>
    .wrap {
        position: absolute;
        height: 80px;
        background: #fff;
        width: 100%;
        line-height: 40px;
        z-index: 1;
    }
    .mask {
        background: #000;
        position: absolute;
        opacity: .7;
        width: 100%;
        height: 100%;
    }

    h3 {
        height: 40px;
        text-align: center;
        position: relative;
        background: #fff;
    }

    .trigger {
        position: absolute;
        height: 40px;
        width: 40px;
        right: 0;
        top: 40px;
        text-align: center;
        z-index: 10;
        background: #fff;
    }
    .trigger i {
        height: 6px;
        width: 10px;
        position: absolute;
        display: inline-block;
        top: 17px;
        left: 15px;
    }
    .trigger i::after {
        position: relative;
        bottom: 4px;
        content: ' ';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: #404040 transparent transparent transparent;
    }

    .nav {
        height: 40px;
        text-align: center;
    }

    .nav li {
        display: inline-block;
        width: 18%;
    }

    .dropdown-wrap {
        position: absolute;
        width: 100%;
        top: 40px;
        z-index: 9;
        overflow: hidden;
    }

    .dropdown {
        background: #fff;
        // transform: translateX(100px);
    }

    .dropdown li {
        text-align: center;
        width: 48%;
        display: inline-block;
    }
</style>
```


```atom expand/opacity/rotate/flip/animate
<template>
    <div ref="wrapper" class="c-container">
        <c-line class="c-font-medium">Expand + animate(backgroundColor)</c-line>
        <c-row class="c-gap-bottom">
            <c-span col="6">
                <c-btn text="Play a-show" @click="isSlideShow = !isSlideShow" />
                <c-transiton 
                    :enter="expandAnimations.enter"
                    :leave="expandAnimations.leave"
                >
                    <div a-show="isSlideShow" class="slide-content">Expand a-show</div>
                </c-transiton>
            </c-span>
            <c-span col="6">
                <c-btn text="Play a-if" @click="isSlideIf = !isSlideIf" />
                <c-transiton 
                    :enter="expandAnimations.enter"
                    :leave="expandAnimations.leave"
                >
                    <div a-if="isSlideIf" class="slide-content">Expand a-if</div>
                </c-transiton>
            </c-span>
        </c-row>

        <c-line class="c-font-medium">Rotate 和动效控制 (fill: 'forwards')</c-line>
        <c-row class="c-gap-bottom">
            <c-span col="3">
                <c-btn text="Play" @click="onRotate" />
            </c-span>
            <c-span col="3">
                <c-btn text="Pause" @click="onRotatePause" />
            </c-span>
            <c-span col="3">
                <c-btn text="Resume" @click="onRotateResume" />
            </c-span>
            <c-span col="3">
                <c-btn text="Cancel" @click="onRotateCancel" />
            </c-span>
        </c-row>

        <c-move 
            ref="rotate" 
            :animations="{ rotate: { frames:[0, 180]} }"
            :options="{duration: 3000, fill: 'forwards'}"
            style="display: inline-block"
        >
            <div 
                class="rotate-wrap" 
                @click="onRotate"
            >Rotate</div>
        </c-move>

        <c-move 
            ref="transX" 
            :animations="{ animate: { frames:[ {transform: 'translateX(0)'}, {transform: 'translateX(100%)'} ] } }"
            :options="{duration: 3000, fill: 'forwards'}"
            style="display: inline-block"
        >
            <div class="trans-wrap">translateX</div>
        </c-move>

        <c-line class="c-font-medium">FLIP 动画 (fill: 'none')</c-line>
        <div 
            class="move-wrap"
        >
            <c-move ref="move" :animations="{flip: {}}" :options="{ duration: 1000 }">
                <div class="move-content"></div>
            </c-move>

            <div class="move-content des1" @click="goDes1">Des1 click to move from here</div>
            <div class="move-content des2" @click="goDes2">Des2 click to move here</div>
        </div>
        
    </div>
</template>

<script type="config">
    {
        components: {
            'c-transiton': 'search-ui/Motion/Transition',
            'c-move': 'search-ui/Motion/Animation',
            "c-btn": "search-ui/Button/Button",
            "c-line": "search-ui/Line/Line",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        },
        data: {
            isSlideShow: false,
            isSlideIf: false,
            isRotated: false,
            expandAnimations: {
                enter: { 
                    animations: { 
                        expand: {}, 
                        animate: {
                            frames:[{backgroundColor: '#e07e7e'}, {backgroundColor: '#ddd'}]
                        } 
                    },
                    options: {
                        duration: 1000
                    }
                },
                leave: {
                    animations: { 
                        expand: { reverse: true } 
                    }
                }
            }
        }
    }
</script>

<script>

    export default {
        mounted() {
            this.$refs.rotate.play();
            this.$refs.transX.play();
        },
        methods: {
            onRotate() {
                this.isRotated = !this.isRotated;
                this.$refs.rotate.play().then(arr => {
                    console.log('animations:', arr);
                });

                this.$refs.transX.play()
            },
            onRotateResume() {
                this.$refs.rotate.resume();
                this.$refs.transX.resume();
            },
            onRotatePause() {
                this.$refs.rotate.pause();
                this.$refs.transX.pause();
            },
            onRotateCancel() {
                this.$refs.rotate.cancel();
                this.$refs.transX.cancel();
            },
            goDes1(e) {
                this.$refs.move.first(e.target);
                this.$refs.move.last();
                this.$refs.move.play();
            },
            goDes2(e) {
                this.$refs.move.first(e.target);
                this.$refs.move.last();
                this.$refs.move.play({ direction: 'reverse' });
            }
        }
    }
</script>

<style scoped>
.slide-content {
    height: 100px; 
    background: #ddd;
    overflow: hidden;
}

.rotate-wrap {
    height: 100px;
    background: #ddd;
    width: 100px;
    border-radius: 50px;
    line-height: 100px;
    text-align: center;
    margin-bottom: 20px;
}

.trans-wrap {
    position: relative;
    margin-left: 10px;
    height: 100px;
    background: #ddd;
    width: 100px;
    line-height: 100px;
    text-align: center;
    margin-bottom: 20px;
}

.move-wrap {
    height: 200px;
    position: relative;
    margin-bottom: 20px;
}

.move-content {
    height: 1rem;
    width: 1rem;
    background: #ddd;
}
.des1, .des2 {
    background: none;
    border: 1px dashed #ddd;
    z-index: 1;
}

.des1 {
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -1rem;
    height: .8rem;
    width: .8rem;
}

.des2 {
    position: absolute;
    right: 0;
    top: 0;
    height: 1.2rem;
    width: 1.2rem;
}
</style>

```


## Transition API：

### Props
| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| enter | Object<br> { animations, options } | 必需 | 进场动画 | 
| --- animations | Object | 动画配置 | `{slideDown: {}, opacity: {}, expand, rotate, flip, animate}` | 
| --- options | Object | 动画选项 | `{duration, easing, fill, ...}` | 
| leave | Object<br> { animations, options } | 必需 | 退场动画，配置同`enter`

### Slots
| 名称 | 描述 |
| --- |   --- |
| default | 内容区域slot（只支持单个 slot）|


## Animation API：

### Props
| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| animations | Object | 必需 | 动画配置 `{slideDown: {}, opacity: {}, expand, rotate, flip, animate}` | 
| options |Object | {} | 动画选项设置 `{duration, easing, fill, ...}` | 


### Methods
| Methods | Type | Default | 描述 | 
|---|---|---|---|
| first(elm?) | @return Object | bounds对象 |  | 
| --- elm | Element | null |  | 
| last(elm?) | @return Object | bounds对象 |  | 
| --- elm | Element | null |  |
| play(options?, config?) | @return promise |  | 重新开始动画 | 
| --- options | Object | {} | play时的选项 |
| --- config | Object | {} | play时的配置 |
| pause() | @return  |  | 暂停动画 | 
| resume() | @return  |  | resume 动画 | 
| cancel() | @return  |  | cancel 动画 | 


### Slots
| 名称 | 描述 |
| --- |   --- |
| default | 内容区域slot（只支持单个 slot） | 

## 组件 Props animations 和 options 配置
#### `options` 选项配置
| key | Type | Default |  | 
|---|---|---|---|
| duration | number | `320` |  |
| direction | string `normal|reverse` | `normal` |  | 
| easing | string | `ease-in-out` |  | 
| fill | string `none|both` | `none` |  | 

#### `animations` 动画配置分为3类

#### 1、`animations` 可动画属性，直接配置 frames 的值数组即可
| key | Type | Example |  | 
|---|---|---|---|
| ALL.reverse | {boolean} | `false` | 是否反向 | 
| rotate | {Object}<br>`{frames, reverse}` |  |  | 
| rotate.frames | {Array} | `[0, 180]` | 动画起止关键帧(deg) | 
| opacity | {Object}<br>`{frames, reverse}` |  |  | 
| opacity.frames | {Array} | `[0, 1]` | 动画起止关键帧 | 
| x, y, scale, opacity... | {Object}<br>`{frames, reverse}` |  | 后续支持 | 

#### 2、`animations.animate` 自定义动画，完全自定义 frames 对象数组
| key | Type | Default |  | 
|---|---|---|---|
| frames | {Array}<br> [{property: value}, {frame2}] |  | WAAPI的frames参数，只支持数组 | 
| reverse | {boolean} | `false` | 是否反向 | 

#### 3、一些预定义动画，如下

#### `animations.slide` 滑入动画
| key | Type | Default |  | 
|---|---|---|---|
| direction | {string} `up|down|left|right` | `down` | 滑动方向 | 
| reverse | {boolean} | `false` | 是否反向 | 

#### `animations.expand` 垂直展开动画（高度从0展开到元素的高度）
| key | Type | Default | Desc | 
|---|---|---|---|
| reverse | {boolean} | `false` | 是否反向 | 

#### `animations.flip` flip动画
flip动画比较特殊，先配置 `animations.flip`属性，然后调用`first()`、`last()`、`play()`方法即可

| key | Type | Default | Desc | 
|---|---|---|---|
| reverse | {boolean} | `false` | 是否反向 |

## 注意事项

1、`Animation` 和 `Transition` 组件，使用 Web_Animations_API 和 web-animations polyfill 来执行动画及其控制；
2、对于 `Animation` 组件，如果设置 `options.fill` 属性，则会填充动画结束后的状态，此时对元素上与动画属性相同的 css 的样式的修改将不会生效，建议不在元素上修改与动画属性相同的 css 样式，如有必要，可以在动画组件外封装一层容器去做 css 样式修改。 `Animation` 组件的 `cancel()` 方法（调用 Web_Animations_API 的 cancel 方法），可以清除动画的 fill 填充。