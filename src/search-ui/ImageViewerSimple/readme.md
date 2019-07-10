---
name: ImageViewerSimple
title: 图片查看器
category: 交互类
owner: 荣伟伟
---

## 使用场景

> 参考UE规范：[D1 【基础组件】-【图片遮罩】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Imagecapsule.html)

## 注意事项

1. 组件封装了简搜端能力，在简搜（2.8及以上版本）及手百（11.11及以上版本）上默认调起NA查看器；
2. **组件的进场和退场动画，依赖调用方传入相应图片的位置信息**，其中进场位置可通过 open 接口传入，退场位置可通过 setPosition 接口传入，如果没有传入退场位置，组件会以图片渐隐的方式退场，具体可参考示例1；
3. 页面左下角页码默认显示，可通过 hidePageNum 属性控制隐藏；
4. 对于无限下拉场景，可通过 append 接口追加图片，具体可参考示例2；
5. 调用方需要配置 imageClip（图片裁剪类型）属性，否则组件**默认渐隐退场**；
6. 如果缩略图有裁剪，需要在 open 接口中传入图片的真实宽高。

## 示例

```atom 示例1：图片总数为3张，调起时全部传入
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <div class="img-wrapper" @click="onImgClick(0)">
                    <img :src="list[0].src">
                </div>
            </c-span>

            <c-span>
                <div class="img-wrapper" @click="onImgClick(1)">
                    <img :src="list[1].src">
                </div>
                <div class="img-wrapper c-gap-top" @click="onImgClick(2)">
                    <img :src="list[2].src">
                </div>
            </c-span>
        </c-row>

        <c-image-viewer-simple
            ref="viewer"
            :hidePageNum="hidePageNum"
            :hideSaveButton="hideSaveButton"
            @switch="onViewerSwitch"
        >
        </c-image-viewer-simple>

        <div class="c-row-tile feature-toggle-wrapper">
            <div class="feature-toggle" :class="{'state-checked': hidePageNum}" @click="onChangePageNum">
                <div class="feature-toggle-bar-container">
                    <div class="feature-toggle-bar" />
                    <div class="feature-toggle-circle" />
                </div>
            </div>
            <label class="feature-toggle-label" @click="onChangePageNum">{{ hidePageNum ? '显示' : '隐藏' }}页码</label>
        </div>

        <div class="c-row-tile feature-toggle-wrapper">
            <div class="feature-toggle" :class="{'state-checked': hideSaveButton}" @click="onChangeSaveButton">
                <div class="feature-toggle-bar-container">
                    <div class="feature-toggle-bar" />
                    <div class="feature-toggle-circle" />
                </div>
            </div>
            <label class="feature-toggle-label" @click="onChangeSaveButton">{{ hideSaveButton ? '显示' : '隐藏' }}保存按钮</label>
        </div>
    </div>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3475871833,401230358&fm=27&gp=0.jpg"
                },
                {
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg"
                },
                {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1451090914,4273211459&fm=27&gp=0.jpg"
                }
            ],
            hidePageNum: false,
            hideSaveButton: false
        },
        components: {
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-image-viewer-simple': 'search-ui/ImageViewerSimple/ImageViewerSimple'
        }
    }
</script>

<script>
    export default {
        methods: {
            onImgClick(index) {
                // 打开查看器
                this.$refs.viewer.open({
                    list: this.list,
                    startIndex: index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });
            },
            onViewerSwitch({index, data}) {
                // 翻页后更新退场位置
                this.$refs.viewer.setPosition({
                    index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });
            },
            onChangePageNum() {
                this.hidePageNum = !this.hidePageNum;
            },
            onChangeSaveButton() {
                this.hideSaveButton = !this.hideSaveButton;
            }
        }
    }
</script>

<style lang="less" scoped>
.img-wrapper {
    img {
        display: block;
        width: 100%;
    }
}
.feature-toggle-wrapper {
    font-size: 16px;
}
.feature-toggle-label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    margin-bottom: 1em;
    margin-left: 0.6em;
    -webkit-user-select: none;
            user-select: none;
}
.feature-toggle {
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-left: 1em;
    margin-bottom: 1em;
    vertical-align: middle;
}
.feature-toggle > input {
    display: none;
}
.feature-toggle-bar-container {
    float: left;
    position: relative;
    display: inline-block;
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 2em;
    padding: 0.2em 0px 0.2em 0.1em;
}
.feature-toggle-circle {
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.2em;
    height: 1.2em;
    line-height: 2em;
    background-color: #fff;
}
.feature-toggle-bar {
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 100%;
    height: 0.8em;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.258824);
}
.feature-toggle.state-checked .feature-toggle-circle {
    left: 45%;
    background-color: #009688;
}
.feature-toggle.state-checked .feature-toggle-bar {
    background-color: #009688;
    opacity: 0.4;
}
</style>
```

```atom 示例2：图片总数为10张，调起时传入3张图片，翻页过程中追加图片
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <div class="img-wrapper" @click="onImgClick(0)">
                    <img :src="list[0].src">
                </div>
            </c-span>

            <c-span>
                <div class="img-wrapper" @click="onImgClick(1)">
                    <img :src="list[1].src">
                </div>
                <div class="img-wrapper c-gap-top" @click="onImgClick(2)">
                    <img :src="list[2].src">
                </div>
            </c-span>
        </c-row>

        <c-image-viewer-simple
            ref="viewer"
            :hidePageNum="hidePageNum"
            @switch="onViewerSwitch"
        >
        </c-image-viewer-simple>

        <div class="c-row-tile feature-toggle-wrapper">
            <div class="feature-toggle" :class="{'state-checked': hidePageNum}" @click="onChangePageNum">
                <div class="feature-toggle-bar-container">
                    <div class="feature-toggle-bar" />
                    <div class="feature-toggle-circle" />
                </div>
            </div>
            <label class="feature-toggle-label" @click="onChangePageNum">{{ hidePageNum ? '显示' : '隐藏' }}页码</label>
        </div>
    </div>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3475871833,401230358&fm=27&gp=0.jpg"
                },
                {
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg"
                },
                {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1451090914,4273211459&fm=27&gp=0.jpg"
                }
            ],
            hidePageNum: false,
            total: 10,
            listLength: 0
        },
        components: {
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-image-viewer-simple': 'search-ui/ImageViewerSimple/ImageViewerSimple'
        }
    }
</script>

<script>
    export default {
        methods: {
            onImgClick(index) {
                console.log('click ' + index);

                // 打开查看器
                // 对于无线下拉场景，可以把total参数设置大一点，翻页时页码总数不变
                this.$refs.viewer.open({
                    list: this.list,
                    startIndex: index,
                    total: this.total,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });

                this.listLength = this.list.length;
            },
            onViewerSwitch({index, data}) {
                console.log('switch', {index, data});

                // 翻页后更新退场位置
                this.$refs.viewer.setPosition({
                    index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });

                // 模拟无限翻页场景，可以向查看器追加图片
                if (this.listLength < this.total && index + 3 >= this.listLength) {
                    setTimeout(() => {
                        const moreData = [
                            {
                                src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2697325968,1688005489&fm=27&gp=0.jpg"
                            },
                            {
                                src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3908584135,4101995779&fm=27&gp=0.jpg"
                            },
                            {
                                src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3475871833,401230358&fm=27&gp=0.jpg"
                            },
                            {
                                src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg"
                            },
                            {
                                src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1451090914,4273211459&fm=27&gp=0.jpg"
                            }
                        ];
                        this.listLength += moreData.length;
                        this.$refs.viewer.append({list: moreData});
                    }, 100);
                }
            },
            onChangePageNum() {
                this.hidePageNum = !this.hidePageNum;
            }
        }
    }
</script>

<style lang="less" scoped>
.img-wrapper {
    img {
        display: block;
        width: 100%;
    }
}
.feature-toggle-wrapper {
    font-size: 16px;
}
.feature-toggle-label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    margin-bottom: 1em;
    margin-left: 0.6em;
    -webkit-user-select: none;
            user-select: none;
}
.feature-toggle {
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-left: 1em;
    margin-bottom: 1em;
    vertical-align: middle;
}
.feature-toggle > input {
    display: none;
}
.feature-toggle-bar-container {
    float: left;
    position: relative;
    display: inline-block;
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 2em;
    padding: 0.2em 0px 0.2em 0.1em;
}
.feature-toggle-circle {
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.2em;
    height: 1.2em;
    line-height: 2em;
    background-color: #fff;
}
.feature-toggle-bar {
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 100%;
    height: 0.8em;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.258824);
}
.feature-toggle.state-checked .feature-toggle-circle {
    left: 45%;
    background-color: #009688;
}
.feature-toggle.state-checked .feature-toggle-bar {
    background-color: #009688;
    opacity: 0.4;
}
</style>
```

```atom 示例3：第1张是长图（228x680，横向撑满），第2张是长图（90x300，纵向撑满），第3张是小图（100x100，原尺寸显示），第4张是普通图片（500x313，横向撑满），第5张图有加载状态提示
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <div class="img-wrapper" @click="onImgClick(0)">
                    <img :src="list[0].src">
                </div>
            </c-span>

            <c-span>
                <div class="img-wrapper" @click="onImgClick(1)">
                    <img :src="list[1].src">
                </div>
                <div class="img-wrapper c-gap-top" @click="onImgClick(2)">
                    <img :src="list[2].src">
                </div>
            </c-span>
        </c-row>

        <c-image-viewer-simple
            ref="viewer"
            :hidePageNum="hidePageNum"
            @switch="onViewerSwitch"
        >
        </c-image-viewer-simple>

        <div class="c-row-tile feature-toggle-wrapper">
            <div class="feature-toggle" :class="{'state-checked': hidePageNum}" @click="onChangePageNum">
                <div class="feature-toggle-bar-container">
                    <div class="feature-toggle-bar" />
                    <div class="feature-toggle-circle" />
                </div>
            </div>
            <label class="feature-toggle-label" @click="onChangePageNum">{{ hidePageNum ? '显示' : '隐藏' }}页码</label>
        </div>
    </div>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1231613821,639063214&fm=27&gp=0.jpg",
                    width: 228,
                    height: 680
                },
                {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3417683066,1421423689&fm=27&gp=0.jpg",
                    width: 90,
                    height: 300
                },
                {
                    src: "https://cambrian-images.cdn.bcebos.com/c10abfcab76a05742aaac8cf209abe10_1527168418164.jpeg@w_100,h_100",
                    width: 100,
                    height: 100
                },
                {
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg",
                    width: 500,
                    height: 313
                },
                {
                    src: "https://timgsa.baidu.com/timg?image&quality=80&imgtype=0&size=b10000_10000&sec=1533644795&di=8012e779d87b3c85bc06538bf7d1711f&src=http%3A%2F%2Ftupian.enterdesk.com%2F2014%2Fmxy%2F09%2F12%2F2%2F1.jpg"
                }
            ],
            hidePageNum: false
        },
        components: {
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-image-viewer-simple': 'search-ui/ImageViewerSimple/ImageViewerSimple'
        }
    }
</script>

<script>
    export default {
        methods: {
            onImgClick(index) {
                // 打开查看器
                this.$refs.viewer.open({
                    list: this.list,
                    startIndex: index,
                    el: $(this.$el).find('.img-wrapper img').get(index)
                });
            },
            onViewerSwitch({index, data}) {
                // 翻页后更新退场位置
                const el = $(this.$el).find('.img-wrapper img').get(index);
                if (el) {
                    this.$refs.viewer.setPosition({
                        index,
                        el
                    });
                }
            },
            onChangePageNum() {
                this.hidePageNum = !this.hidePageNum;
            }
        }
    }
</script>

<style lang="less" scoped>
.img-wrapper {
    img {
        display: block;
        max-width: 100%;
    }
}
.feature-toggle-wrapper {
    font-size: 16px;
}
.feature-toggle-label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    margin-bottom: 1em;
    margin-left: 0.6em;
    -webkit-user-select: none;
            user-select: none;
}
.feature-toggle {
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-left: 1em;
    margin-bottom: 1em;
    vertical-align: middle;
}
.feature-toggle > input {
    display: none;
}
.feature-toggle-bar-container {
    float: left;
    position: relative;
    display: inline-block;
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 2em;
    padding: 0.2em 0px 0.2em 0.1em;
}
.feature-toggle-circle {
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.2em;
    height: 1.2em;
    line-height: 2em;
    background-color: #fff;
}
.feature-toggle-bar {
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 100%;
    height: 0.8em;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.258824);
}
.feature-toggle.state-checked .feature-toggle-circle {
    left: 45%;
    background-color: #009688;
}
.feature-toggle.state-checked .feature-toggle-bar {
    background-color: #009688;
    opacity: 0.4;
}
</style>
```

```atom 示例4：缩略图采取居中裁剪，要求传原图宽高
<template>
    <div class="c-container">
        <c-row>
            <c-span a-for="(item, i) in list">
                <div class="c-img img-wrapper" @click="onImgClick(i)">
                    <div
                        :style="{
                            'background-image': 'url(' + item.src + ')'
                        }"
                        class="img-load"
                    />
                </div>
            </c-span>
        </c-row>

        <c-image-viewer-simple
            ref="viewer"
            :hidePageNum="hidePageNum"
            :hideSaveButton="hideSaveButton"
            :imageClip="2"
            @switch="onViewerSwitch"
        >
        </c-image-viewer-simple>
    </div>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3475871833,401230358&fm=27&gp=0.jpg",
                    width: 500,
                    height: 889
                },
                {
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg",
                    width: 500,
                    height: 313
                },
                {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1451090914,4273211459&fm=27&gp=0.jpg",
                    width: 500,
                    height: 714
                }
            ],
            hidePageNum: false,
            hideSaveButton: false
        },
        components: {
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-image-viewer-simple': 'search-ui/ImageViewerSimple/ImageViewerSimple'
        }
    }
</script>

<script>
    export default {
        methods: {
            onImgClick(index) {
                // 打开查看器
                this.$refs.viewer.open({
                    list: this.list,
                    startIndex: index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });
            },
            onViewerSwitch({index, data}) {
                // 翻页后更新退场位置
                this.$refs.viewer.setPosition({
                    index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });
            }
        }
    }
</script>

<style lang="less" scoped>
.img-wrapper {
    padding-bottom: 100%;

    .img-load {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }
}
</style>
```

```atom 示例5：缩略图采取顶部居中裁剪，要求传原图宽高
<template>
    <div class="c-container">
        <c-row>
            <c-span a-for="(item, i) in list">
                <div class="c-img img-wrapper" @click="onImgClick(i)">
                    <div
                        :style="{
                            'background-image': 'url(' + item.src + ')'
                        }"
                        class="img-load"
                    />
                </div>
            </c-span>
        </c-row>

        <c-image-viewer-simple
            ref="viewer"
            :hidePageNum="hidePageNum"
            :hideSaveButton="hideSaveButton"
            :imageClip="3"
            @switch="onViewerSwitch"
        >
        </c-image-viewer-simple>
    </div>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3475871833,401230358&fm=27&gp=0.jpg",
                    width: 500,
                    height: 889
                },
                {
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg",
                    width: 500,
                    height: 313
                },
                {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1451090914,4273211459&fm=27&gp=0.jpg",
                    width: 500,
                    height: 714
                }
            ],
            hidePageNum: false,
            hideSaveButton: false
        },
        components: {
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-image-viewer-simple': 'search-ui/ImageViewerSimple/ImageViewerSimple'
        }
    }
</script>

<script>
    export default {
        methods: {
            onImgClick(index) {
                // 打开查看器
                this.$refs.viewer.open({
                    list: this.list,
                    startIndex: index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });
            },
            onViewerSwitch({index, data}) {
                // 翻页后更新退场位置
                this.$refs.viewer.setPosition({
                    index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });
            }
        }
    }
</script>

<style lang="less" scoped>
.img-wrapper {
    padding-bottom: 100%;

    .img-load {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: top center;
        background-size: cover;
    }
}
</style>
```

```atom 示例6：点浏览器回退按钮时，主动关闭查看器
<template>
    <div class="c-container">
        <c-row>
            <c-span a-for="(item, i) in list">
                <div class="c-img img-wrapper" @click="onImgClick(i)">
                    <div
                        :style="{
                            'background-image': 'url(' + item.src + ')'
                        }"
                        class="img-load"
                    />
                </div>
            </c-span>
        </c-row>

        <c-image-viewer-simple
            ref="viewer"
            :hidePageNum="hidePageNum"
            :hideSaveButton="hideSaveButton"
            :imageClip="3"
            @switch="onViewerSwitch"
            @close="onViewerClose"
        >
        </c-image-viewer-simple>
    </div>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3475871833,401230358&fm=27&gp=0.jpg",
                    width: 500,
                    height: 889
                },
                {
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg",
                    width: 500,
                    height: 313
                },
                {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1451090914,4273211459&fm=27&gp=0.jpg",
                    width: 500,
                    height: 714
                }
            ],
            hidePageNum: false,
            hideSaveButton: false
        },
        components: {
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-image-viewer-simple': 'search-ui/ImageViewerSimple/ImageViewerSimple'
        }
    }
</script>

<script>
    export default {
        methods: {
            onImgClick(index) {
                // 打开查看器
                this.$refs.viewer.open({
                    list: this.list,
                    startIndex: index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });

                this.bindHistory();
            },
            onViewerSwitch({index, data}) {
                // 翻页后更新退场位置
                this.$refs.viewer.setPosition({
                    index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });
            },
            onViewerClose() {
                if (this.historyUpdated) {
                    history.back();
                }
            },
            bindHistory() {
                history.pushState({}, '', location.href + '#');
                this.historyUpdated = true;
                window.addEventListener('popstate', this.onHistoryBack);
            },
            unbindHistory() {
                this.historyUpdated = false;
                window.removeEventListener('popstate', this.onHistoryBack);
            },
            onHistoryBack() {
                this.unbindHistory();
                this.$refs.viewer && this.$refs.viewer.close();
            }
        }
    }
</script>

<style lang="less" scoped>
.img-wrapper {
    padding-bottom: 100%;

    .img-load {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: top center;
        background-size: cover;
    }
}
</style>
```

```atom 示例7：测试手百端能力open, setPosition 和 append
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <div class="img-wrapper" @click="onImgClick(0)">
                    <img :src="list[0].src">
                </div>
            </c-span>

            <c-span>
                <div class="img-wrapper" @click="onImgClick(1)">
                    <img :src="list[1].src">
                </div>
                <div class="img-wrapper c-gap-top" @click="onImgClick(2)">
                    <img :src="list[2].src">
                </div>
            </c-span>
        </c-row>

        <c-image-viewer-simple
            ref="viewer"
            :hidePageNum="hidePageNum"
            :imageClip="1"
            @switch="onViewerSwitch"
        >
        </c-image-viewer-simple>

        <div class="c-row-tile feature-toggle-wrapper">
            <div class="feature-toggle" :class="{'state-checked': hidePageNum}" @click="onChangePageNum">
                <div class="feature-toggle-bar-container">
                    <div class="feature-toggle-bar" />
                    <div class="feature-toggle-circle" />
                </div>
            </div>
            <label class="feature-toggle-label" @click="onChangePageNum">{{ hidePageNum ? '显示' : '隐藏' }}页码</label>
        </div>
    </div>
</template>

<script type="config">
    {
        data: {
            list: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3475871833,401230358&fm=27&gp=0.jpg",
                    width: 500,
                    height: 889
                },
                {
                    src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg",
                    width: 500,
                    height: 313

                },
                {
                    src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1451090914,4273211459&fm=27&gp=0.jpg",
                    width: 500,
                    height: 714
                }
            ],
            hidePageNum: false,
            total: 10,
            listLength: 0
        },
        components: {
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-image-viewer-simple': 'search-ui/ImageViewerSimple/ImageViewerSimple'
        }
    }
</script>

<script>
    export default {
        methods: {
            onImgClick(index) {

                // 打开查看器
                // 对于无线下拉场景，可以把total参数设置大一点，翻页时页码总数不变
                this.$refs.viewer.open({
                    list: this.list,
                    startIndex: index,
                    total: this.total,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });

                this.listLength = this.list.length;
            },
            onViewerSwitch({index, data}) {

                // 翻页后更新退场位置
                this.$refs.viewer.setPosition({
                    index,
                    el: $(this.$el).find('.img-wrapper').get(index)
                });

                // 模拟无限翻页场景，可以向查看器追加图片
                if (this.listLength < this.total && index + 3 >= this.listLength) {
                    setTimeout(() => {
                        const moreData = [
                            {
                                src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2697325968,1688005489&fm=27&gp=0.jpg",
                                width: 500,
                                height: 375
                            },
                            {
                                src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3908584135,4101995779&fm=27&gp=0.jpg",
                                width: 500,
                                height: 750
                            },
                            {
                                src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3475871833,401230358&fm=27&gp=0.jpg",
                                width: 500,
                                height: 889
                            },
                            {
                                src: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=359944356,195888032&fm=27&gp=0.jpg",
                                width: 500,
                                height: 313
                            },
                            {
                                src: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1451090914,4273211459&fm=27&gp=0.jpg",
                                width: 500,
                                height: 714
                            },
                            {
                                src: "http://t9.baidu.com/it/u=3612125955,2865371024&fm=193",
                                width: 1024,
                                height: 1339
                            },
                            {
                                src: "http://t9.baidu.com/it/u=1853976456,2772413222&fm=193",
                                width: 1760,
                                height: 1100
                            }
                        ];
                        this.listLength += moreData.length;
                        this.$refs.viewer.append({list: moreData});
                    }, 100);
                }
            },
            onChangePageNum() {
                this.hidePageNum = !this.hidePageNum;
            }
        }
    }
</script>

<style lang="less" scoped>
.img-wrapper {
    img {
        display: block;
        width: 100%;
    }
}
.feature-toggle-wrapper {
    font-size: 16px;
}
.feature-toggle-label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    margin-bottom: 1em;
    margin-left: 0.6em;
    -webkit-user-select: none;
            user-select: none;
}
.feature-toggle {
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-left: 1em;
    margin-bottom: 1em;
    vertical-align: middle;
}
.feature-toggle > input {
    display: none;
}
.feature-toggle-bar-container {
    float: left;
    position: relative;
    display: inline-block;
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 2em;
    padding: 0.2em 0px 0.2em 0.1em;
}
.feature-toggle-circle {
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
            box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.2em;
    height: 1.2em;
    line-height: 2em;
    background-color: #fff;
}
.feature-toggle-bar {
    -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    width: 100%;
    height: 0.8em;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0.258824);
}
.feature-toggle.state-checked .feature-toggle-circle {
    left: 45%;
    background-color: #009688;
}
.feature-toggle.state-checked .feature-toggle-bar {
    background-color: #009688;
    opacity: 0.4;
}
</style>
```

### API

### Props
| 名称               | 说明                                | 类型     | 默认值        |  必选 |
|-------------------|-------------------------------------|----------|--------------|------|
| hidePageNum       | 隐藏页码     |Boolean|false|否|
| hideSaveButton    | 隐藏保存按钮     |Boolean|false|否|
| imageClip         | 缩略图裁剪方式，0: 其他裁剪，1: 无裁剪，2: 居中裁剪，3: 顶部居中裁剪。     |Number|0|否|

### Slots
不支持

### Methods
| 名称 | 说明 | 返回值 |
|---|---|---|
| open(options) | 调起查看器 | @return Boolean |
| append(options)| 追加图片 | @return Boolean |
| setPosition(options)| 设置退场位置 | @return Boolean |
| close()| 关闭查看器 | @return Boolean |

#### open 接口参数
| 名称 | 说明 | 类型 | 默认值 | 必选 |
|---|---|---|---|---|
| --- options.list | 图片列表 | Array |  | 是 |
| --- options.startIndex | 浏览起始位置 | Number | 0 | 否 |
| --- options.total | 图片总数 | Number | 使用list长度 | 否 |
| --- options.el | 进场位置 | Element | null | 否 |

#### 其中list数组的详细字段说明：

对于缩略图有裁剪（与原图比例不一致）的情况，需要传原图的真实宽高。

| 名称               | 说明                                | 类型     | 默认值        |  必选 |
|-------------------|-------------------------------------|----------|--------------|------|
| src               | 图片链接   |String||是|
| width             | 图片宽度（缩略图裁剪时要求传）   |Number||否|
| height            | 图片高度（缩略图裁剪时要求传）   |Number||否|
| thumbnail         | 缩略图链接 |String||否|

#### append 接口参数
| 名称 | 说明 | 类型 | 默认值 | 必选 |
|---|---|---|---|---|
| --- options.list | 图片列表 | Array |  | 是 |

#### setPosition 接口参数
| 名称 | 说明 | 类型 | 默认值 | 必选 |
|---|---|---|---|---|
| --- options.index | 图片index | Number |  | 是 |
| --- options.el | 退场位置，el为空时渐隐退场 | Element |  | 是 |

### Events

| 名称               | 说明            |
| ------------------|------------------|
| switch            | 翻页    |
| close            | 关闭    |

#### switch 事件附带参数示例：
接收 switch 事件后，可以发送翻页pv，也可以通过 setPosition 接口更新退场位置。
```
params[0] = {
    index: 0,   // 当前展示图片序号
    data: {     // 当前展示图片数据
        src: 'https://ss1.bdstatic.com/xxx.jpg',
        thumbnail: 'https://ss1.bdstatic.com/xxx.jpg'
    }
};
```

#### close 事件附带参数示例：
```
params[0] = {
    index: 0,   // 当前展示图片序号
    data: {     // 当前展示图片数据
        src: 'https://ss1.bdstatic.com/xxx.jpg',
        thumbnail: 'https://ss1.bdstatic.com/xxx.jpg'
    }
};
```

