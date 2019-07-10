---
name: Article
title: 文章单结果组件
category: 文章图文类
owner: 郭勇
---

## 示例

```atom 文章单结果,无图无内容
<template>
    <c-aladdin>
        <c-article
            :title="title"
            :url="url"
            :url-params="urlParams"
            :abstract="abstract"
            :img-list="imgList"
            :time="time"
            :source="source"
            :read-num="readNum"
            label-text="热"
            label-type="box_red">
        </c-article>
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            source: '大众点评',
            readNum: 666,
            time: 1503400684000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

```atom 文章单结果，无图
<template>
    <c-aladdin>
        <c-article 
            :title="title" 
            :url="url" 
            :url-params="urlParams" 
            :abstract="abstract" 
            :img-list="imgList" 
            :time="time" 
            :source="source" 
            :read-num="readNum" 
            article-type="2">
        </c-article>
    </c-aladdin>
</template>


<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            articleType: '2',
            abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            source: '大众点评',
            readNum: 666,
            time: 1503400684000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

```atom 文章单结果，单图
<template>
    <c-aladdin>
        <c-article 
            :title="title" 
            :url="url" 
            :url-params="urlParams" 
            :abstract="abstract" 
            :img-list="imgList" 
            :time="time" 
            :source="source" 
            :read-num="readNum">
        </c-article>
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            imgList: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                }
            ],
            source: '大众点评',
            readNum: 666,
            time: 1503400684000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

```atom 文章单结果，单图，使用默认图
<template>
    <c-aladdin>
        <c-article 
            :title="title" 
            :url="url" 
            :url-params="urlParams" 
            :abstract="abstract" 
            :img-list="imgList" 
            :time="time" 
            :source="source" 
            :read-num="readNum">
        </c-article>
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            imgList: [
                {
                    defaultImageType: 'hotel',
                }
            ],
            source: '大众点评',
            readNum: 666,
            time: 1503400684000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

```atom 文章单结果，单图无内容
<template>
    <c-aladdin>
        <c-article 
            :title="title" 
            :url="url" 
            :url-params="urlParams" 
            :abstract="abstract" 
            :img-list="imgList" 
            :time="time" 
            :read-num="readNum" >
        </c-article>
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            imgList: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                }
            ],
            source: '大众点评',
            readNum: 666,
            time: 1503400684000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

```atom 文章单结果，拓展信息使用slot
<template>
    <c-aladdin>
        <c-article 
            :title="title" 
            :url="url" 
            :url-params="urlParams" 
            :abstract="abstract" 
            :img-list="imgList" 
            label-text="热" 
            label-type="box_red">
            <span slot="extInfo">这里的拓展信息是由slot实现的</span>
        </c-article>
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            imgList: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

```atom 文章单结果，多图（图片>=3）
<template>
    <c-aladdin>
        <c-article 
            :title="title" 
            :url="url" 
            :url-params="urlParams" 
            :abstract="abstract" 
            :img-list="imgList" 
            :time="time" 
            :source="source" 
            :read-num="readNum">
        </c-article>
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            imgList: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                },
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                },
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                },
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                }
            ],
            source: '大众点评',
            readNum: 666,
            time: 1503400684000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

```atom 文章单结果，多图（图片>=3），改变图片比例
<template>
    <c-aladdin>
        <c-article 
            :title="title" 
            :url="url" 
            :url-params="urlParams" 
            :abstract="abstract" 
            :img-list="imgList" 
            :time="time" 
            :source="source" 
            :read-num="readNum">
        </c-article>
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            imgList: [
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    type: 'l'
                },
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    type: 'l'
                },
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    type: 'l'
                },
                {
                    src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    type: 'l'
                }
            ],
            source: '大众点评',
            readNum: 666,
            time: 1503400684000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

```atom 文章单结果，多图（图片>=3），传入默认图；由于默认图目前只支持 's', 'y', 'l' 类型，所以这里改变了图片比例
<template>
    <c-aladdin>
        <c-article
            :title="title"
            :url="url"
            :url-params="urlParams"
            :abstract="abstract"
            :img-list="imgList"
            :time="time"
            :source="source"
            :read-num="readNum">
        </c-article>
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
            imgList: [
                {
                    defaultImageType: 'app',
                    type: 'y'
                },
                {
                    defaultImageType: 'app',
                    type: 'y'
                },
                {
                    defaultImageType: 'app',
                    type: 'y'
                },
                {
                    defaultImageType: 'app',
                    type: 'y'
                }
            ],
            source: '大众点评',
            readNum: 666,
            time: 1503400684000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-article': 'search-ui/Article/Article'
        }
    }
</config>
```

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
title | string | - | 可选 | 标题的文本，支持高亮 | -
articleType | string | 2 | 可选 | 文章类别，一级&nbsp;or&nbsp;二级；目前只支持这两级，只有字体大小及行高的区别；2级用于结果页，1级用于情景页 | -
url | string | - | 可选 | 链接地址 | -
urlParams | object | - | 可选 | 链接所需参数 | See [Link](./Link#API) `params`
abstract | string | - | 可选 | 内容的文本，摘要 | -
imgList | array | - | 可选 | 图片比例，值有（s,l,w,x,y） | -
>> imgList[].src | string | - | - | 图片链接 | -
>> imgList[].defaultImageType | string | - | - | 缺省图&加载图类型，具体可参考&nbsp;[Image](./Image) | -
>> imgList[].type | string | - | - | 图片比例，值有（s,l,w,x,y），默认为&nbsp;x，详见[栅格图片](http://pmd.baidu.com/doc/#image) | -
imgCol | number | - | 可选 | 图片所占栅格，只有单图样式有效 | See [ImageContent](./ImageContent#API) `imgCol`
imgType | string | s | 可选 | 文章来源 | -
time | number \| string | - | 可选 | 时间戳&nbsp;单位：毫秒 | -
readNum | number \| string | - | 可选 | 文章阅读数 | -
source | string | - | 可选 | 文章来源 | -
labelText | string | - | 可选 | 标签文案 | -
labelType | string | - | 可选 | 标签类型 | See [Label](./Label#API) `type`
titleFontSize | string | - | 可选 | 标题字号 | -
titleClamp | string | - | 可选 | 标题截断 | -

#### ArticleExtInfo

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
time | number \| string | - | 可选 | 时间戳&nbsp;单位：毫秒 | -
readNum | number \| string | - | 可选 | 文章阅读数 | -
source | string | - | 可选 | 文章来源 | -
showExtInfo | boolean | false | 可选 | 是否显示拓展辅助信息 | -

### Slots



名称 | 描述
--- | ---
extInfo | 文章拓展信息，排序为：来源&nbsp;>&nbsp;时间&nbsp;>&nbsp;阅读数&nbsp;>&nbsp;拓展信息，即拓展信息在最右侧，多个拓展信息之间需要加间隔

#### ArticleExtInfo

名称 | 描述
--- | ---
default | 扩展内容

### Events
无

