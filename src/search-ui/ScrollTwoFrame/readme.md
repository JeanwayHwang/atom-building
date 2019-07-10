---
name: ScrollTwoFrame
title: 双排横划框架组件
category: 文章图文类
owner: 王凯
---

## 使用场景

双排横滑需求下使用

## 示例

### 一般用法

```atom 水平排列；只有一项
<template>
    <c-aladdin>
        <c-scroll-two-frame
            orientation="horizontal"
            :col="col"
            :length="length"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick"
        >
            <c-link
                a-for="(item, index) in length"
                :slot="'c-scroll-two-frame-slot' + index"
                url="http://www.baidu.com"
            >
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530199702668&di=5a2eb2bb392afe97869ebc075d61e63f&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F279759ee3d6d55fb70532f6d6a224f4a21a4dde0.jpg"
                />
                <c-line class="c-color-gray">
                    这是第{{ index }}个元素
                </c-line>
            </c-link>
        </c-scroll-two-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        moreUrl: 'http://www.baidu.com',
        moreUrlParams: {},
        length: 1
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleScrollEnd() {
            console.log('handleScrollEnd');
        },
        handleItemClick(index) {
            console.log('index', index);
        }
    }
};
</script>
```

```atom 水平排列
<template>
    <c-aladdin>
        <c-scroll-two-frame
            orientation="horizontal"
            :col="col"
            :length="length"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick"
        >
            <c-link
                a-for="(item, index) in length"
                :slot="'c-scroll-two-frame-slot' + index"
            >
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530199702668&di=5a2eb2bb392afe97869ebc075d61e63f&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F279759ee3d6d55fb70532f6d6a224f4a21a4dde0.jpg"
                />
                <c-line class="c-color-gray">
                    这是第{{ index }}个元素
                </c-line>
            </c-link>
        </c-scroll-two-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        moreUrl: 'http://www.baidu.com',
        moreUrlParams: {},
        length: 10,
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleScrollEnd() {
            console.log('handleScrollEnd');
        },
        handleItemClick(index) {
            console.log('handleItemClick index', index);
        }
    }
}
</script>
```

```atom 竖直排列
<template>
    <c-aladdin>
        <c-scroll-two-frame
            orientation="vertical"
            :col="col"
            :length="length"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick"
        >
            <c-link
                a-for="(item, index) in length"
                :slot="'c-scroll-two-frame-slot' + index"
            >
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530199702668&di=5a2eb2bb392afe97869ebc075d61e63f&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F279759ee3d6d55fb70532f6d6a224f4a21a4dde0.jpg"
                />
                <c-line class="c-color-gray">
                    这是第{{ index }}个元素
                </c-line>
            </c-link>
        </c-scroll-two-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        moreUrl: 'http://www.baidu.com',
        moreUrlParams: {},
        length: 10,
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleScrollEnd() {
            console.log('handleScrollEnd');
        },
        handleItemClick(index) {
            console.log('handleItemClick index', index);
        }
    }
}
</script>
```

```atom 水平排列；弹性；右侧 slot（4n 栅格）
<template>
    <c-aladdin>
        <c-scroll-two-frame
            ref="scrollTwoFrame"
            :col="col"
            :length="length"
            :probe-type="3"
            :right-slot-col="4"
            orientation="horizontal"
            bounce
            @showmore="handleShowMore"
            @itemclick="handleItemClick"
            @beforescrollstart="handleBeforeScrollStart"
			@scrollstart="handleScrollStart"
			@scroll="handleScroll"
			@touchend="handleTouchEnd"
			@scrollend="handleScrollEnd"
        >
            <c-link
                a-for="(item, index) in length"
                :slot="'c-scroll-two-frame-slot' + index"
            >
                <c-img/>
                <c-line class="c-color-gray">
                    这是第{{ index }}个元素
                </c-line>
            </c-link>
            <div slot="right">
                右侧 slot
            </div>
        </c-scroll-two-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        length: 10
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    mounted() {
		let bScrollIns = this.$refs.scrollTwoFrame.getBScrollIns();
		let maxScrollX = bScrollIns.maxScrollX;
		console.log('bScrollIns', bScrollIns, 'maxScrollX', maxScrollX);
	},
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleItemClick(index) {
            console.log('handleItemClick index', index);
        },
        handleBeforeScrollStart() {
			console.log('beforescrollstart');
		},
		handleScrollStart() {
			console.log('scrollstart');
		},
		handleScroll(obj) {
			console.log('scroll', obj);
		},
		handleTouchEnd(obj) {
			console.log('touchend', obj);
		},
		handleScrollEnd(pageIndex, obj) {
			console.log('scrollend', pageIndex, obj);
		}
    }
}
</script>
```

```atom 水平排列；弹性；右侧 slot（无栅格）
<template>
    <c-aladdin>
        <c-scroll-two-frame
            ref="scrollTwoFrame"
            :col="col"
            :length="length"
            :probe-type="3"
            orientation="horizontal"
            bounce
            @showmore="handleShowMore"
            @itemclick="handleItemClick"
            @beforescrollstart="handleBeforeScrollStart"
			@scrollstart="handleScrollStart"
			@scroll="handleScroll"
			@touchend="handleTouchEnd"
			@scrollend="handleScrollEnd"
        >
            <c-link
                a-for="(item, index) in length"
                :slot="'c-scroll-two-frame-slot' + index"
                url="http://www.baidu.com"
            >
                <c-img/>
                <c-line class="c-color-gray">
                    这是第{{ index }}个元素
                </c-line>
            </c-link>
            <div slot="right">
                右侧 slot
            </div>
        </c-scroll-two-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        length: 10
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    mounted() {
		let bScrollIns = this.$refs.scrollTwoFrame.getBScrollIns();
		let maxScrollX = bScrollIns.maxScrollX;
		console.log('bScrollIns', bScrollIns, 'maxScrollX', maxScrollX);
	},
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleItemClick(index) {
            console.log('handleItemClick index', index);
        },
        handleBeforeScrollStart() {
			console.log('beforescrollstart');
		},
		handleScrollStart() {
			console.log('scrollstart');
		},
		handleScroll(obj) {
			console.log('scroll', obj);
		},
		handleTouchEnd(obj) {
			console.log('touchend', obj);
		},
		handleScrollEnd(pageIndex, obj) {
			console.log('scrollend', pageIndex, obj);
		}
    }
}
</script>
```

```atom snap；水平排列
<template>
    <c-aladdin>
        <c-scroll-two-frame
            :col="col"
            :length="list.length"
            :more-url="moreUrl"
            :snap-step-x="3"
            snap
            orientation="horizontal"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick"
        >
            <c-link
                a-for="(item, index) in list"
                :slot="'c-scroll-two-frame-slot' + index"
            >
                <c-img
                    :src="item.src"
                />
                <c-line class="c-color-gray">
                    这是第{{ index }}个元素
                </c-line>
            </c-link>
        </c-scroll-two-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        moreUrl: 'http://www.baidu.com',
        list: [
            {
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540543081967&di=51c154b339ba200cc62c84725b779d19&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3417605489%2C3262797742%26fm%3D214%26gp%3D0.jpg'
            },
            {
                src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4136346690,364417385&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1450267734,3649954130&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3381094677,568139819&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3341170513,2206880325&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=710934099,246240627&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2386516487,1061748414&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2782300468,158542608&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2223556590,1854807049&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=693533631,1115088920&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3188722667,2175369740&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=865994323,1035286920&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3521551289,63985762&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=736798967,2551010913&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2322758520,1924216354&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2372401893,261957844&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2251265416,2511218645&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1214498655,859568622&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2752328279,2000172425&fm=26&gp=0.jpg'
            },
            {
                src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1376697806,1931998885&fm=26&gp=0.jpg'
            }
        ]
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleScrollEnd() {
            console.log('handleScrollEnd');
        },
        handleItemClick(index) {
            console.log('handleItemClick index', index);
        }
    }
}
</script>
```

```atom 动态增加/减少数量
<template>
    <c-aladdin>
        <c-scroll-two-frame
            orientation="vertical"
            :col="col"
            :length="length"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick"
        >
            <c-link
                a-for="(item, index) in length"
                :slot="'c-scroll-two-frame-slot' + index"
            >
                <c-img/>
                <c-line class="c-color-gray">
                    这是第{{ index }}个元素
                </c-line>
            </c-link>
        </c-scroll-two-frame>
        <c-row>
            <c-span>
                <c-btn
                    text="增加元素"
                    @click="handleAdd"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-btn
                    text="减少元素"
                    @click="handleReduce"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        moreUrl: 'http://www.baidu.com',
        moreUrlParams: {},
        length: 6
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-btn': 'search-ui/Button/Button'
    }
}
</script>

<script>
export default {
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleScrollEnd() {
            console.log('handleScrollEnd');
        },
        handleItemClick(index) {
            console.log('handleItemClick index', index);
        },
        handleAdd() {
            console.log('handleAdd');
            this.length += 2;
        },
        handleReduce() {
            console.log('handleReduce');
            if (this.length > 2) {
                this.length -= 2;
            }
        }
    }
}
</script>
```

### 自适应布局方式

```atom 水平排列
<template>
    <c-aladdin>
        <c-scroll-two-frame
            :col="col"
            :length="length"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            orientation="horizontal"
            type="auto"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick"
        >
            <c-link
                a-for="(item, index) in length"
                :slot="'c-scroll-two-frame-slot' + index"
            >
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530199702668&di=5a2eb2bb392afe97869ebc075d61e63f&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F279759ee3d6d55fb70532f6d6a224f4a21a4dde0.jpg"
                />
                <c-line>
                    这是第{{ index }}个元素
                </c-line>
                <c-line
                    a-if="index < 5"
                    class="c-color-gray"
                >
                    这是第{{ index }}个元素元素元素元素元素元素元素
                </c-line>
            </c-link>
        </c-scroll-two-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        moreUrl: 'http://www.baidu.com',
        moreUrlParams: {},
        length: 11,
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleScrollEnd() {
            console.log('handleScrollEnd');
        },
        handleItemClick(index) {
            console.log('handleItemClick index', index);
        }
    }
}
</script>
```

```atom 竖直排列
<template>
    <c-aladdin>
        <c-scroll-two-frame
            :col="col"
            :length="length"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            orientation="vertical"
            type="auto"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick"
        >
            <c-link
                a-for="(item, index) in length"
                :key="index"
                :slot="'c-scroll-two-frame-slot' + index"
            >
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530199702668&di=5a2eb2bb392afe97869ebc075d61e63f&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F279759ee3d6d55fb70532f6d6a224f4a21a4dde0.jpg"
                />
                <c-line
                    clamp="2"
                >
                    这是第{{ index }}个元素这是第{{ index }}个元素
                </c-line>
                <c-line
                    a-if="index < 5"
                    class="c-color-gray"
                >
                    这是第{{ index }}个元素元素元素元素元素元素元素
                </c-line>
            </c-link>
        </c-scroll-two-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        col: 4,
        moreUrl: 'http://www.baidu.com',
        moreUrlParams: {},
        length: 11,
    },
    components: {
        'c-scroll-two-frame': 'search-ui/ScrollTwoFrame/ScrollTwoFrame',
        'c-line': 'search-ui/Line/Line',
        'c-link': 'search-ui/Link/Link',
        'c-img': 'search-ui/Image/Image',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleShowMore() {
            console.log('handleShowMore');
        },
        handleScrollEnd() {
            console.log('handleScrollEnd');
        },
        handleItemClick(index) {
            console.log('handleItemClick index', index);
        }
    }
}
</script>
```

## 注意事项

1. 双排横滑不会出现单个展示，数据是奇数时，组件内会向下取整，不展示最后一项；
2. 数据中配置 moreUrl 则展示『查看更多』，否则不展示

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
orientation | string | horizontal | 可选 | 排列方式，有水平排列（'horizontal'）和竖直排列（'vertical'）两种 | -
length | number | - | 可选 | 数据长度 | -
col | number | 4 | 可选 | 栅格数 | -
moreUrl | string | - | 可选 | 查看更多跳转链接 | -
moreUrlParams | object | - | 可选 | 查看更多跳转链接所需参数 | See [Link](./Link#API) `params`
bounce | boolean | false | 可选 | 弹性滚动 | -
probeType | number | 0 | 可选 | 滚动设置 | See [Scroll](./Scroll#API) `probeType`
rightSlotCol | number | - | 可选 | 右侧&nbsp;slot&nbsp;自定义区的栅格数，不传则会隐藏（弹性滑动至最右边时可出现） | -
snap | boolean | - | 可选 | 是否是snap | -
snapStepX | number | - | 可选 | snap&nbsp;滑动的距离（为&nbsp;itemWidth&nbsp;的倍数） | -
type | string | normal | 可选 | 类型：'normal'&nbsp;正常类型；'auto'&nbsp;自适应类型 | -

### Slots



名称 | 描述
--- | ---
c-scroll-two-frame-slot{{index}} | 自定义item项
right | 右侧&nbsp;slot&nbsp;自定义区域；需要通过&nbsp;rightSlotCol&nbsp;传栅格数，不传则会隐藏（弹性滑动至最右边时可出现）

### Events


- **scrollend**: 滚动结束，同[Scroll](./Scroll#API)
	无参数

- **touchend**: 触摸结束，同[Scroll](./Scroll#API)
	无参数

- **scroll**: 滚动中，同[Scroll](./Scroll#API)
	无参数

- **scrollstart**: 滚动开始，同[Scroll](./Scroll#API)
	无参数

- **beforescrollstart**: 滚动开始之前，同[Scroll](./Scroll#API)
	无参数

- **itemclick**: 当点击项不做url跳转有特殊操作时，可在组件外层调用的地方绑定该事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | number | 索引

- **showmore**: 当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件
	无参数


### Methods


- **getBScrollIns**: 得到 better-scroll 的实例
	无参数

