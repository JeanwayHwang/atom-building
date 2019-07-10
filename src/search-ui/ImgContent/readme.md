---
name: ImgContent
title: 左图右文
category: 布局类
owner: 王凯
---


## 示例

```atom 简单示例
<template>
    <c-aladdin>
        <c-img-content
            :img-src="src"
            @imgclick="handleImgClick"
            @load="handleLoad">
            <c-title
                text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题"
                clamp="1"
                size="t2"
            >
            </c-title>
            <c-line
                clamp="2"
                class="c-color c-font-normal"
            >
                摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
            </c-line>
        </c-img-content>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519884649&di=a619b1f2c20827cb85cd9c6b17e1d92d&imgtype=jpg&er=1&src=http%3A%2F%2Fattimg.dospy.com%2Fimg%2Fday_150330%2F20150330_08144cb3ca75c7e29835JctCCoZ09K8c.jpg'
        },
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-title': 'search-ui/Title/Title',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleImgClick() {
                console.log('handleImgClick');
            },
            handleLoad() {
                console.log('load');
            }
        }
    };
</script>
```

```atom 图片右下角添加图集个数
<template>
    <c-aladdin>
        <c-img-content
            :img-src="src"
            @imgclick="handleImgClick"
            img-icon-type="imgs"
            :img-show-num='200'>
            <c-title
                text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题"
                clamp="1"
                size="t2"
            >
            </c-title>
            <c-line
                clamp="2"
                class="c-color c-font-normal"
            >
                摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
            </c-line>
        </c-img-content>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519884649&di=a619b1f2c20827cb85cd9c6b17e1d92d&imgtype=jpg&er=1&src=http%3A%2F%2Fattimg.dospy.com%2Fimg%2Fday_150330%2F20150330_08144cb3ca75c7e29835JctCCoZ09K8c.jpg'
        },
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-title': 'search-ui/Title/Title',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleImgClick() {
                console.log('handleImgClick');
            }
        }
    };
</script>
```

```atom 带默认图
<template>
    <div class="c-container">
        <c-img-content default-image-type="hotel" >
            <c-title
                text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题"
                clamp="2"
                size="t2"
            >
            </c-title>
            <c-line
                clamp="2"
                class="c-color c-font-normal"
            >
                摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
            </c-line>
        </c-img-content>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
        },
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-title': 'search-ui/Title/Title'
        }
    }
</script>
```

```atom 加载失败事件
<template>
    <div class="c-container">
        <c-img-content
            :img-src="src"
            @error="handleError">
            <c-title
                text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题"
                clamp="2"
                size="t2"
            >
            </c-title>
            <c-line
                clamp="2"
                class="c-color c-font-normal"
            >
                摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
            </c-line>
        </c-img-content>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://www.baidu.com'
        },
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-title': 'search-ui/Title/Title'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleError() {
                console.log('error');
            }
        }
    };
</script>
```

```atom 背景图使用方式
<template>
    <c-aladdin>
        <c-img-content
            :img-src="src"
            :is-background-image="true"
            @imgclick="handleImgClick">
            <c-title
                text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题"
                clamp="1"
                size="t2"
            >
            </c-title>
            <c-line
                clamp="2"
                class="c-color c-font-normal"
            >
                摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
            </c-line>
        </c-img-content>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519884649&di=a619b1f2c20827cb85cd9c6b17e1d92d&imgtype=jpg&er=1&src=http%3A%2F%2Fattimg.dospy.com%2Fimg%2Fday_150330%2F20150330_08144cb3ca75c7e29835JctCCoZ09K8c.jpg'
        },
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-title': 'search-ui/Title/Title',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleImgClick() {
                console.log('handleImgClick');
            }
        }
    };
</script>
```

```atom 2n 图片
<template>
    <div class="c-container">
        <c-img-content :img-src="src"
            :img-col="2">
            <c-title
                text="二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题二级标题"
                clamp="2"
                size="t2"
            >
            </c-title>
            <c-line
                clamp="2"
                class="c-color c-font-normal"
            >
                摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
            </c-line>
        </c-img-content>
    </div>
</template>

<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519290039943&di=ec2f1982b9ddf7b3c465ad82aae03e49&imgtype=0&src=http%3A%2F%2Fstatic01.coloros.com%2Fbbs%2Fdata%2Fattachment%2Fforum%2F201506%2F20%2F131326i3qohqfunvhq3bmv.png'
        },
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-title': 'search-ui/Title/Title'
        }
    }
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
imgSrc | string | - | 可选 | 图片链接 | -
imgType | string | s | 可选 | 图片比例，值有（s,l,w,x,y） | See [栅格图片](http://pmd.baidu.com/doc/#image)
imgUrl | string | - | 可选 | 点击图片跳转链接 | -
imgUrlParams | object | - | 可选 | 图片跳转链接所需参数 | See [Link](./Link#API) `params`
imgHackWhiteStroke | boolean | false | 可选 | 有些图片有白边，需要加这个保证间距的统一 | -
imgLazy | boolean | false | 可选 | 图片懒加载 | -
imgMaskgapSize | number \| string |  | 可选 | 图片右下角遮罩与外框的边距 | See [Image](./Image#API) `maskgapSize`
imgShowNum | number \| string |  | 可选 | 胶囊遮罩的文案 | -
imgIconType | string |  | 可选 | 胶囊遮罩的图标类型 | -
imgIsRound | boolean | false | 可选 | 是否是圆形图片 | -
imgCol | number | 4 | 可选 | 图片所占栅格数 | -
imgTouchable | boolean | true | 可选 | 图片是否有点击态 | -
defaultImageType | string | - | 可选 | 缺省图类型 | See [Image](./Image#API) `defaultImageType`
isBackgroundImage | boolean | false | 可选 | 是否采用背景图片的方式 | -
backgroundSize | string | cover | 可选 | 背景图片css&nbsp;background-size，当且仅当采用背景图片时才有效 | -
progressive | boolean | false | 可选 | 图片显示使用渐显效果 | -
isVerticalMiddle | boolean | false | 可选 | 右侧内容是否垂直居中 | -
imgDataModule | string |  | 可选 | 左侧图片的data-module属性 | -

### Slots



名称 | 描述
--- | ---
img | 图片上的自定义内容
default | 右侧内容区

### Events


- **error**: 图片加载错误事件，当使用背景图片的时候不支持

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传事件对象

- **load**: 图片加载完成事件，当使用背景图片的时候不支持

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传事件对象

- **imgclick**: 左侧图片点击事件
	无参数



