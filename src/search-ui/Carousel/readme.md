---
name: Carousel 
title: 轮播图/走马灯
category: 交互类
owner: 王凯
---

## 使用场景

> 参考UE规范：[D14 【基础组件】-【轮播图】](http://soy.baidu-int.com:8905/static/specification/ue-guide/PageScroll.html)

## 示例

```atom 轮播图组件（建议所有图片比例一致）
<template>
    <c-aladdin>
        <c-carousel
            class="c-row-tile"
            :title="title"
            :loop="true"
            :list="list"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            title: '测试标题',
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3771659226,2903532544&fm=26&gp=0.jpg',
                    url: 'https://www.hao123.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2733085905,266744681&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>
```

```atom 自动播放；通过 autoplay 控制自动播放
<template>
    <c-aladdin>
        <c-carousel
            class="c-row-tile"
            :title="list[curIndex].title"
            :loop="true"
            :list="list"
            :autoplay="{
                delay: 3000
            }"
            img-type="w"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            curIndex: 0,
            title: '测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题',
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    title: '标题0',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=640687275,2118617685&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    title: '标题1标题1',
                    params: {}
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3713135727,276304817&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    title: '标题2标题2标题2',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929000688,2268635146&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    title: '标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3标题3',
                    params: {}
                },
                {
                    imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1261915645,114268842&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    title: '标题4标题4标题4标题4标题4',
                    params: {}
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj, 'list', this.list);
                this.curIndex = obj.current;
            }
        }
    };
</script>
```

```atom 不循环；通过 loop 控制循环
<template>
    <c-aladdin>
        <c-carousel
            class="c-row-tile"
            :loop="false"
            :list="list"
            img-type="w"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            title: '测试标题测试标题测试标题测试标题测试标题测试标题测试标题',
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=640687275,2118617685&fm=26&gp=0.jpg',
                    url: 'https://www.hao123.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3713135727,276304817&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929000688,2268635146&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1261915645,114268842&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>
```

```atom 通过 img-type 控制图片比例
<template>
    <c-aladdin>
        <c-carousel
            :loop="true"
            :list="list"
            img-type="v"
            class="c-row-tile"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=640687275,2118617685&fm=26&gp=0.jpg',
                    params: {}
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3713135727,276304817&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>
```

```atom 通过 height 设置图片高度，设置以后图片会采用 background-image 的方式，并且 background-size 为 cover
<template>
    <c-aladdin>
        <c-carousel
            :list="list"
            is-background-image
            height="100px"
            class="c-row-tile"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=640687275,2118617685&fm=26&gp=0.jpg',
                    url: 'https://www.hao123.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3713135727,276304817&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>
```

```atom 不同尺寸图片居中显示；服务端渲染所有图片（为了优化首屏性能，所以在首屏时只放第一条的数据，并提供这种优化方式的开关 sync-render-all）
<template>
    <c-aladdin>
        <c-carousel
            :title="title"
            :loop="true"
            :list="list"
            align-items="center"
            sync-render-all
            class="c-row-tile"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg'
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4052062511,1979687159&fm=26&gp=0.jpg'
                },
                {
                    imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2453823915,1521635110&fm=26&gp=0.jpg'
                },
                {
                    imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3562829110,752348769&fm=26&gp=0.jpg'
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>
```

```atom 不传标题时默认指示器位置在中间
<template>
    <c-aladdin>
        <c-carousel
            class="c-row-tile"
            img-type="w"
            :loop="true"
            :list="list"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            title: '测试标题测试标题测试标题测试标题测试标题测试标题测试标题',
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=640687275,2118617685&fm=26&gp=0.jpg',
                    url: 'https://www.hao123.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3713135727,276304817&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>
```

```atom 可以通过 indicator-align 设置指示器位置
<template>
    <c-aladdin>
        <c-carousel
            class="c-row-tile"
            img-type="w"
            :loop="true"
            :list="list"
            indicator-align="right"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            title: '测试标题测试标题测试标题测试标题测试标题测试标题测试标题',
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=640687275,2118617685&fm=26&gp=0.jpg',
                    url: 'https://www.hao123.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3713135727,276304817&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>
```

```atom 图片大于 5 时，且没有标题时，指示器由圆点变更为数字（数字指示器位置默认在右下角）
<template>
    <c-aladdin>
        <c-carousel
            class="c-row-tile"
            :loop="true"
            :list="list"
            img-type="w"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            title: '测试标题测试标题测试标题测试标题测试标题测试标题测试标题',
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                    url: 'http://www.baidu.com',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=640687275,2118617685&fm=26&gp=0.jpg',
                    url: 'https://www.hao123.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3713135727,276304817&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929000688,2268635146&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1261915645,114268842&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                },
                {
                    imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3562829110,752348769&fm=26&gp=0.jpg',
                    url: 'https://www.jianshu.com/',
                    params: {}
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>
```

```atom 通过 number-indicator-opt 设置数字指示器；通过 dot-indicator-opt 设置圆点指示器；
<template>
    <c-aladdin>
        <c-carousel
            class="c-row-tile"
            :loop="true"
            :list="list"
            :number-indicator-opt="{
                show: true,
                top: '.05rem',
                right: '.05rem'
            }"
            :dot-indicator-opt="{
                outside: true,
                shadow: false
            }"
            img-type="z"
            @imgitemclick="handleImgItemClick"
            @change="handleChange"
        >
            <div
                slot="mask"
                class="left-bottom"
            >
                test slot
            </div>
        </c-carousel>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            title: '测试标题测试标题测试标题测试标题测试标题测试标题测试标题',
            list: [
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2550436158,1933952750&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=640687275,2118617685&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3713135727,276304817&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929000688,2268635146&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1261915645,114268842&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'http://img4.imgtn.bdimg.com/it/u=3162265503,3866898335&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'http://img3.imgtn.bdimg.com/it/u=812236570,2346536627&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'http://img1.imgtn.bdimg.com/it/u=1533712588,440402781&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'http://img0.imgtn.bdimg.com/it/u=1628329088,364480450&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'http://img2.imgtn.bdimg.com/it/u=3771685790,3074917414&fm=26&gp=0.jpg',
                },
                {
                    imgSrc: 'http://img0.imgtn.bdimg.com/it/u=3093690518,3411827906&fm=26&gp=0.jpg',
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-carousel": "search-ui/Carousel/Carousel"
        }
    }
</script>

<script>
    export default {
        methods: {
            // 图片项点击事件
            handleImgItemClick(obj, e) {
                console.log('handleImgItemClick', obj, e);
            },
            // 切换事件
            handleChange(obj) {
                console.log('handleChange', obj);
            }
        }
    };
</script>

<style lang="less" module>
.left-bottom {
    padding: 5px 10px;
    position: absolute;
    line-height: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    left: 10px;
    bottom: 10px;
    z-index: 1;
}
</style>
```

### CarouselFrame 轮播框架组件

```atom CarouselFrame 轮播框架组件，使用 slot
<template>
    <c-aladdin>
        <c-carousel-frame
            class="c-row-tile"
        >
            <div class="padding-h">
                slot 1
            </div>
            <div class="padding-h">
                slot 2
            </div>
            <div class="padding-h">
                slot 3
            </div>
        </c-carousel-frame>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-carousel-frame": "search-ui/Carousel/CarouselFrame"
    }
}
</script>

<script>
export default {
    methods: {
    }
};
</script>

<style lang="less" module>
.padding-h {
    padding-left: 17px;
    padding-right: 17px;
}
</style>
```

### Indicator 指示器组件

```atom Indicator 指示器组件
<template>
    <c-aladdin>
        <c-indicator
            :length="9"
            :cur-index="1"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
    },
    components: {
        "c-aladdin": "search-ui/Aladdin/Aladdin",
        "c-indicator": "search-ui/Carousel/Indicator"
    }
}
</script>

<script>
export default {
    methods: {
    }
};
</script>
```

## 注意事项

1. 图片尺寸不一致时，请将 `syncRenderAll` 属性置为 true（默认 false ），否则首屏会产生抖动

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
list | array | - | 可选 | 数据列表 | -
>> list[].imgSrc | string | - | - | 图片路径 | -
>> list[].url | string | - | - | 跳转链接 | -
>> list[].params | string | - | - | 跳转链接所需参数，可参考[Link](./Link#API) | -
title | string | - | 可选 | 标题的文案；传标题属性后，会有底部蒙层；有标题的样式最多5张图片 | -
animationTime | number | 300 | 可选 | 动画时间 | -
autoplay | object \| boolean | - | 可选 | 自动播放 | -
>> autoplay.delay | number | - | - | 自动播放的延迟时间；默认为&nbsp;3000，单位为毫秒 | -
loop | boolean | true | 可选 | 是否循环 | -
backgroundSize | string | cover | 可选 | 背景图片填充方式 | -
imgType | string | auto | 可选 | 图片类型 | -
indicatorAlign | string | center | 可选 | 指示器位置 | -
showIndicator | boolean | true | 可选 | 是否显示指示器 | -
syncRenderAll | boolean | false | 可选 | 是否同步渲染所有图片 | -
alignItems | string | - | 可选 | 垂直对齐位置(具体值请参考&nbsp;flex&nbsp;align-items&nbsp;属性) | -
height | string | - | 可选 | 指定高度 | -
numberIndicatorOpt | object | {"right":".03rem","bottom":".05rem"} | 可选 | 数字指示器配置 | -
>> numberIndicatorOpt.show | boolean | - | - | 是否显示 | -
>> numberIndicatorOpt.top | string | - | - | 距离上侧的距离 | -
>> numberIndicatorOpt.bottom | string | - | - | 距离下侧的距离 | -
>> numberIndicatorOpt.left | string | - | - | 距离左侧的距离 | -
>> numberIndicatorOpt.right | string | - | - | 距离右侧的距离 | -
dotIndicatorOpt | object | {"color":"#c8c8c8","selectedColor":"#fff"} | 可选 | 圆点指示器配置 | -
>> dotIndicatorOpt.outside | boolean | - | - | 是否在轮播外 | -
speedThreshold | number | 0.23 | 可选 | 速度阈值；速度超过这个会直接滑动，速度小于这个会判断如果滑动距离大于屏幕距离的一半再滑动<br>90&nbsp;/&nbsp;380&nbsp;=&nbsp;0.236 | -

#### CarouselFrame

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
loop | boolean | false | 可选 | 是否循环 | -
transitionOpts | object | {"animationTime":300} | 可选 | 动效配置 | -
>> transitionOpts.animationTime | number | 300 | - | 动效时长 | -

### Slots



名称 | 描述
--- | ---
mask | mask

#### CarouselFrame

名称 | 描述
--- | ---
default | 轮播内容区域

### Events


- **change**: 轮播改变的时候触发

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | -
  ${param1}.current | Event | 当前轮播项的索引

- **imgitemclick**: 点击图片项时候触发

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 选中信息
  ${param1}.item | object | 为选中的图片项的参数，同&nbsp;`list`
  ${param1}.index | number | 选中的图片项的索引
  ${param2} | Event | 透传点击事件对象



