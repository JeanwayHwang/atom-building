---
name: ListArticle
title: 文章列表组件
category: 文章图文类
owner: 郭勇
---

## 使用场景

> 参考UE规范：[D14 【基础组件】-【列表】](http://soy.baidu-int.com:8905/static/specification/ue-guide/SF_Content.html)

```atom 文章列表
<template>
    <div class="c-container">
        <c-list-article 
            :articleList="articleList" 
            articleType="2">
        </c-list-article>
    </div>
</template>

<config>
    {
        data:{
            articleList: [
                {
                    url: 'https://www.baidu.com',
                    urlParams: {
                        type: 'sf',
                        sfUrl: '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                        options: '{"view":{"_hold":2}}'
                    },
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',

                    source: '大众点评',
                    readNum: 666,
                    time: 1503400684000
                },
                {
                    url: 'https://www.baidu.com',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    abstract: '测试用的abstract，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长，才显得有意义，啥是有意义，就是内容要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',

                    imgList: [
                        {
                            src: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg"
                        }
                    ],
                    imgCol: 2,
                    source: '大众点评',
                    readNum: 666,
                    time: 1503400684000
                },
                {
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
                {
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
                }
            ]
        },
        components: {
            'c-list-article': 'search-ui/ListArticle/ListArticle'
        }
    }
</config>
```

## 注意事项

1. 结果页和情景页样式稍有不同，通过 articleType 属性指定使用场景。

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
articleList | array | - | 可选 | 文章内容列表，详细字段参考`Article` | See [Article](./Article#API)
>> articleList[].extInfo | string | - | - | 文章拓展的辅助信息，以支持`Article`中`slot="extInfo"`的功能，但只支持文本 | -
articleType | string | 2 | 可选 | 文章类别，目前只支持这两级，只有字体大小及行高的区别：<br>2级用于结果页，1级用于情景页 | -



### Events
无

