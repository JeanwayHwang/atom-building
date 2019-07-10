---
name: Image
title: 图片
category: 基础组件
owner: 陈骁
---

## 使用场景

> 参考UE规范：[D1 【基础组件】-【图片】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Image.html)

> 参考UE规范：[D16 【基础组件】-【图片遮罩】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Imagecapsule.html)

## 示例

```atom 不同比例的图片（上方为使用 img 标签，下方为使用背景图）
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    title="s 1:1方图"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    type="x"
                    title="x 4:3宽图"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    type="y"
                    title="y 3:2宽图"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    type="w"
                    title="w 16:9宽图"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    type="z"
                    title="z 5:2宽图"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    type="v"
                    title="v 3:1宽图"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    type="l"
                    title="l 3:4长图"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    type="auto"
                    title="auto 自适应原图比例"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    :padding-bottom="150"
                    title="自定义高宽比（3:2 = 150%）"
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
{
    data: {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg'
    },
    components: {
        'c-img': 'search-ui/Image/Image',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>
```

```atom 使用背景图（注：使用背景图不支持默认图片）
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    :is-background-image="true"
                    title="使用背景图片"
                    @load="handleLoad"
                    @error="handleError"
                />
            </c-span>
            <c-span>
                <c-img
                    :is-round="true"
                    :is-background-image="true"
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    title="使用背景图片（圆形）"
                    @load="handleLoad"
                    @error="handleError"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    :is-background-image="true"
                    background-size="contain"
                    background-position="bottom"
                    title="控制 background-size 和 background-position"
                    @load="handleLoad"
                    @error="handleError"
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleLoad() {
                console.log('load');
            },
            handleError() {
                console.log('error');
            }
        }
    };
</script>
```

```atom 去除上下边距

<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    title="正常"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    title="没有上边距"
                    class="c-gap-top-zero"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    title="没有下边距"
                    class="c-gap-bottom-zero"
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg'
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 蒙层；在图片未占满时，更清楚的显示边界（上方为使用 img 标签，下方为使用背景图）
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    title="不加蒙层"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    hack-white-stroke
                    title="加蒙层"
                />
            </c-span>
            <c-span>
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3489187747,3847070571&fm=26&gp=0.jpg'
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 默认图
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    title="正常"
                />
            </c-span>
            <c-span>
                <c-img
                    title="自定义默认图"
                    default-image-src="/se/static/atom/search-ui/Image/asset/default_blank.svg"
                />
            </c-span>
            <c-span>
                <c-img
                    title="不显示默认图"
                    :is-show-default-image="false"
                    background-color="inherit"
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        data: {
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 懒加载
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    title="正常"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    title="懒加载"
                    lazy
                />
            </c-span>
            <c-span>
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg'
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 设置形状（上方为使用 img 标签，下方为使用背景图）
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    title="圆角（默认）"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    is-round
                    title="圆形"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    :border-radius="{
                        tl: false,
                        tr: false,
                        bl: false,
                        br: false
                    }"
                    title="方形"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    :border-radius="{
                        tl: true,
                        tr: true,
                        bl: true,
                        br: true,
                        tlRadius: '25px',
                        trRadius: '20px',
                        blRadius: '15px',
                        brRadius: '10px'
                    }"
                    title="圆角（自定义圆角半径）"
                />
            </c-span>
            <c-span>
            </c-span>
            <c-span>
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg'
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 设置边线（上方为使用 img 标签，下方为使用背景图）
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    border="1px solid #555"
                    title="圆角（默认）"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    is-round
                    border="1px solid #555"
                    title="圆形"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    :border-radius="{
                        tl: false,
                        tr: false,
                        bl: false,
                        tr: false
                    }"
                    border="1px solid #555"
                    title="方形"
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg'
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 渐显
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    title="正常"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    progressive
                    title="渐显"
                />
            </c-span>
            <c-span>
                <c-img
                    :src="src"
                    progressive
                    blur
                    title="模糊渐显"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        progressive: false,
        blur: false,
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg'
    },
    components: {
        'c-btn': 'search-ui/Button/Button',
        'c-img': 'search-ui/Image/Image',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
        handleClick() {
            console.log('handleClick');
            this.progressive = true;
            this.blur = true;
        }
    }
}
</script>
```

```atom 事件回调（上方为使用 img 标签，下方为使用背景图）
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    title="load 加载完成事件"
                    @load="handleLoad"
                />
            </c-span>
            <c-span>
                <c-img
                    src="http://www.baidu.com"
                    title="error 加载失败事件"
                    @error="handleError"
                />
            </c-span>
            <c-span>
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg'
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleLoad() {
                console.log('load');
            },
            handleError() {
                console.log('error');
            }
        }
    };
</script>
```

```atom 胶囊遮罩

<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    showNum=60
                    title="右下角胶囊按钮"
                    iconType="imgs"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    iconType="imgs"
                    title="右下角胶囊按钮(没有文字)"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    iconType="imgs"
                    showNum=60
                    title="右下角胶囊按钮(修改间距)"
                    maskgapSize="12"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-img
                    :lb-pill-opts="{
                        text: '文案',
                        icon: 'imgs'
                    }"
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    title="左下角胶囊按钮"
                />
            </c-span>
            <c-span>
                <c-img
                    :lb-pill-opts="{
                        text: '文案'
                    }"
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    title="左下角胶囊按钮(没有图标)"
                />
            </c-span>
            <c-span>
                <c-img
                    :lb-pill-opts="{
                        text: '文案',
                        icon: 'imgs',
                        gapSize: 12
                    }"
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    title="左下角胶囊按钮(修改间距)"
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 右下角胶囊遮罩大号字体文案

<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    type="y"
                    pillBigText="1"
                    showNum="/3"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    type="y"
                    pillBigText="2"
                    showNum="/3"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    type="y"
                    pillBigText="3"
                    showNum="/3"
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 圆形遮罩
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    circle-mask-icon="baidu"
                    title="圆形遮罩小(默认)"
                />
            </c-span>
            <c-span>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg"
                    circle-mask-icon="baidu"
                    circle-mask-size="large"
                    title="圆形遮罩大"
                />
            </c-span>
            <c-span>
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 底部遮罩
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-img
                    :src="src"
                    info="底部的说明文案"
                />
            </c-span>
            <c-span>
            </c-span>
            <c-span>
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552909854765&di=0edc4794077e2a577492a60c5a5a1f9b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201602%2F12%2F20160212124805_rfhAP.jpeg'
        },
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>
```

```atom 缺省图
<template>
    <div class="c-container">
        <template a-for="(type, index) in types">
            <c-text-line :text="typeNames[index] + '比例'" size="t1" />
            <c-row a-for="i in math_ceil(list.length / 3)" :key="i">
                <c-span a-for="j in 3" :key="j">
                    <c-img
                        a-if="list[(i - 1) * 3 + j - 1]"
                        :type="type"
                        :default-image-type="list[(i - 1) * 3 + j - 1]"
                        :info="list[(i - 1) * 3 + j - 1] + ' (' + titles[(i - 1) * 3 + j - 1] + ')'"
                    />
                </c-span>
            </c-row>
        </template>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-img': 'search-ui/Image/Image',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-text-line': 'search-ui/TextLine/TextLine'
        },
        computed: {
            list: [
                'app', 'finance', 'food',
                'hotel', 'learn', 'news',
                'pro', 'recruit', 'sport',
                'travel', 'ticket', 'traffic',
                'music', 'game', 'medical',
                'novel', 'goods', 'video'
            ],
            titles: [
                '应用', '金融', '美食',
                '酒店', '学术&教育', '新闻',
                '专家', '招聘', '体育',
                '旅游', '交通(票务)', '交通',
                '音乐', '游戏', '医疗',
                '小说', '商品', '视频'
            ],
            types: ['s', 'y'],
            typeNames: ['1:1', '3:2']
        }
    }
</script>

<style scoped>
    .c-container {
        max-height: 600px;
        overflow-y: auto;
    }
</style>
```

```atom 图片遮罩

<template>
    <div class="c-container">
        <c-line class="c-font-medium">胶囊遮罩</c-line>
        <c-line class="c-gap-bottom">
            <c-image-mask text="30" type="pills" />
        </c-line>

        <c-line class="c-font-medium">带图标的胶囊遮罩</c-line>
        <c-line class="c-gap-bottom">
            <c-image-mask
                text="30"
                type="pills"
                icon="praised"
            />
        </c-line>

        <c-line class="c-font-medium">只有图标的胶囊遮罩</c-line>
        <c-line class="c-gap-bottom">
            <c-image-mask
                type="pills"
                icon="praised"
            />
        </c-line>

        <c-line class="c-font-medium">圆形遮罩</c-line>
        <c-line>
            <c-image-mask text="GIF" type="circle" />
            <c-image-mask
                type="circle"
                icon="baidu"
                class="c-gap-left"
            />
            <c-image-mask
                type="circle"
                size="small"
                text="小"
                class="c-gap-left"
            />
        </c-line>
    </div>
</template>

<script type="config">
    {
        components: {
            "c-image-mask": "search-ui/Image/ImageMask",
            "c-line": "search-ui/Line/Line",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
src | string | - | 可选 | 图片链接 | -
type | string | s | 可选 | 图片比例，值有（s,l,w,x,y） | See [栅格图片](http://pmd.baidu.com/doc/#image)
paddingBottom | string \| number | - | 可选 | 图片自定义&nbsp;padding-bottom | -
isBackgroundImage | boolean | false | 可选 | 是否采用背景图片的方式 | -
backgroundSize | string | cover | 可选 | 背景图片css&nbsp;background-size，当且仅当采用背景图片时才有效 | -
backgroundPosition | string | - | 可选 | 背景图片css&nbsp;background-position，当且仅当采用背景图片时才有效 | -
lazy | boolean | false | 可选 | 是否配置懒加载 | -
noAutoLazy | boolean | false | 可选 | 是否使用默认的懒加载配置（非首屏则懒加载生效） | -
isRound | boolean | false | 可选 | 是否是圆形图片 | -
borderRadius | object | {"tl":true,"tr":true,"bl":true,"br":true} | 可选 | 圆角配置 | -
>> borderRadius.tl | boolean | true | - | 左上角是否有圆角 | -
>> borderRadius.tr | boolean | true | - | 右上角是否有圆角 | -
>> borderRadius.bl | boolean | true | - | 左下角是否有圆角 | -
>> borderRadius.br | boolean | true | - | 右下角是否有圆角 | -
>> borderRadius.tlRadius | string | - | - | 左上角圆角半径值，默认为&nbsp;3px | -
>> borderRadius.trRadius | string | - | - | 右上角圆角半径值，默认为&nbsp;3px | -
>> borderRadius.blRadius | string | - | - | 左下角圆角半径值，默认为&nbsp;3px | -
>> borderRadius.brRadius | string | - | - | 右下角圆角半径值，默认为&nbsp;3px | -
border | string | - | 可选 | 边线 | -
progressive | boolean | false | 可选 | 图片显示使用渐显效果 | -
blur | boolean | false | 可选 | 图片显示使用模糊效果 | -
backgroundColor | string | #f7f7f7 | 可选 | 背景颜色 | -
isShowDefaultImage | boolean | true | 可选 | 是否显示默认图 | -
defaultImageSrc | string | - | 可选 | 默认图路径 | -
defaultImageType | string | - | 可选 | 垂类默认图&nbsp;&&nbsp;加载图类型（见示例） | -
title | string | - | 可选 | 标题，支持高亮 | -
titleClamp | number \| string | 2 | 可选 | 标题截断行数 | -
titleAlign | string | center | 可选 | 标题对齐方式 | -
titleFixHeight | boolean | false | 可选 | 标题是否根据截断行数定高 | -
subTitle | string | - | 可选 | 图片副标题，支持高亮 | -
subTitleClamp | number \| string | 1 | 可选 | 副标题截断行数 | -
subTitleAlign | string | center | 可选 | 副标题对齐方式 | -
subTitleFixHeight | boolean | false | 可选 | 副标题是否根据截断行数定高 | -
hackWhiteStroke | boolean | false | 可选 | 加上去白边的蒙层 | -
pillBigText | number \| string |  | 可选 | 右下角胶囊遮罩大号字体文案 | -
showNum | number \| string |  | 可选 | 胶囊遮罩的文案 | -
iconType | string |  | 可选 | 胶囊遮罩的图标类型 | -
lbPillOpts | object | {"text":"","icon":"","gapSize":null} | 可选 | 左下角胶囊配置 | -
>> lbPillOpts.text | string | - | - | 文字 | -
>> lbPillOpts.icon | string | - | - | 图标 | -
>> lbPillOpts.gapSize | string | - | - | 间距`size` | -
maskgapSize | number \| string |  | 可选 | 当值为12时图片右下角胶囊遮罩与外框的边距为：<br>bottom:&nbsp;.05rem&nbsp;right:&nbsp;.05rem<br>不传默认为&nbsp;bottom:&nbsp;.02rem&nbsp;right:&nbsp;.02rem | -
gridSize | string \| number | 4 | 可选 | 图片所在栅格的大小 | -
circleMaskSize | string | - | 可选 | 圆形遮罩大小 | -
circleMaskIcon | string | - | 可选 | 圆形遮罩图标 | -
circleMaskText | string | - | 可选 | 圆形遮罩文字 | -
info | string | - | 可选 | 覆盖图片底部的说明文案 | -

#### ImageMask

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | pills | 可选 | 遮罩类型：pills（胶囊遮罩）；circle（圆形遮罩） | -
pillBigText | string \| number | - | 可选 | 胶囊遮罩大号字体文案 | -
text | string \| number | - | 可选 | 遮罩文案 | -
size | string | - | 可选 | 遮罩尺寸：default（默认）；small（小尺寸） | -
icon | string | - | 可选 | 遮罩图标 | -

### Slots



名称 | 描述
--- | ---
default | 图片内部自定义内容

### Events


- **error**: 图片加载错误事件，当使用背景图片的时候不支持

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传事件对象

- **load**: 图片加载完成事件，当使用背景图片的时候不支持

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传事件对象


#### ImageMask


- **click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传点击事件对象



