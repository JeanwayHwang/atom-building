---
name: PageScrollImgs
title: 多图分页横滑组件
category: 图片类
owner: 郭勇
---

## 示例

```atom 多图分页横滑组件

<template>
    <div class="c-container">
        <c-page-scroll-imgs :col="imgs.col" :imgList="imgs.pageList" :moreUrl="imgs.moreUrl"></c-page-scroll-imgs>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-page-scroll-imgs': 'search-ui/PageScrollImgs/PageScrollImgs'
        },
        data: {
           imgs: {
                col: 4,
                moreUrl: 'https://m.baidu.com',
                pageList:[{
                    imgNum: 22,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "123",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1,
                    iconType: "imgs"
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "456",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1,
                    iconType: "imgs"
                },{
                    imgNum: 12,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "yyyuuuuuuuuuuuuuuu",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "fffffff",
                    subTitle: "fffff",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "werwerjkjjkljll",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "ddssfsfsdfsdfdsfsdf",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "444",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "fjklkjlkjljklj",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "aafffkkkkk",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "addssssssss",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "ssfsdfdsfsdfdsfdsf",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "qqqqq",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "qqqqqq",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                }]
            }    
        }
    }
</script>

<script>
    export default {
        methods: {

        }
    }
</script>


```


```atom 带slot的多图分页横滑组件

`注意：`
由于组件内部slot名称的索引是从0开始，如果是idx从1开始循环的话需要减1

<template>
    <div class="c-container">
        <c-page-scroll-imgs :col="imgs.col" :imgList="imgs.pageList" :moreUrl="imgs.moreUrl" :moreUrlParams="imgs.moreUrlParams">
            <div :slot="'c-page-scroll-imgs'+(idx)" a-for="(item, idx) in imgs.pageList">
                图片slot的dom
            </div>
            <div :slot="'c-page-scroll-imgs-ext'+(idx)" a-for="(item, idx) in imgs.pageList">
                slot写自己的dom
            </div>
        </c-page-scroll-imgs>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-page-scroll-imgs': 'search-ui/PageScrollImgs/PageScrollImgs'
        },
        data: {
           imgs: {
                col: 4,
                moreUrl: 'https://m.baidu.com',
                pageList:[{
                    imgNum: 22,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "123",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "456",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    imgNum: 12,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "yyyuuuuuuuuuuuuuuu",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "fffffff",
                    subTitle: "fffff",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "werwerjkjjkljll",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "ddssfsfsdfsdfdsfsdf",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "444",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "fjklkjlkjljklj",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "aafffkkkkk",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "addssssssss",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "ssfsdfdsfsdfdsfdsf",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "qqqqq",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "qqqqqq",
                    subTitle: "sub测试测试测试",
                    titleClamp: 1,
                    subTitleClamp: 1
                }]
            }    
        }
    }
</script>

<script>
    export default {
        methods: {

        }
    }
</script>


```

### 使用场景
带刻度分页横滑图片
### 说明
当最后一页内容能撑满栅格则不展示『查看更多』,撑不满则展示『查看更多』
### API
#### c-page-scroll-imgs
| 参数       |  类型     | 默认值        |说明                                |
|-----------|----------|--------------|------------------------------------|
|col         | |number|3|必填，栅格列数，如（3,4表示3n,4n）        
|imgList        |Array[{},{},{}],详细字段见下表|无|必填，图片列表                |
|moreUrl        |string|无|选填，查看更多跳转的url，                |
|moreUrlParams        |object|无|选填，查看更多url的params，参考c-link                |

#### 其中imgList数组的详细字段说明：
| 参数       | 类型     | 默认值        | 说明                                |
|-----------|----------|--------------|------------------------------------|
|imgNum        |number|无|选填，显示图集个数                |
|iconType    |string|无| 图片图集数展示的icon类型，可选参数                    |
|url        |string|无|选填，查看更多跳转的url，                |
|params        |object|无|选填，查看更多url的params，参考c-link                |
|src         | string|无|图片链接                            |
|type        |string|'s'(方图)| 图片比例，值有（s,l,w,x,y）详见[栅格图片](http://pmd.baidu.com/doc/#image)                  |
|title    | string|无| 图片标题，可选参数                    |
|titleClamp    | number|2|图片标题截断行数，可选参数                    |
|subTitle    | string|无|图片副标题，可选参数                    |
|subTitleClamp    | number|1|图片副标题截断行数，可选参数                    |
|titleAlign    |string|left| 图片标题对齐方式，可选参数                    |
|subTitleAlign    |string|left| 图片副标题对齐方式，可选参数                    |
|hackWhiteStroke |boolean |false| 加上去白边的蒙层 |

### Event
| 名称       |  描述     | 参数        |
|-----------|----------|--------------|
|showMore   |当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件|event     |
|imgClick    |当点击图片不做url跳转有特殊操作时，可在组件外层调用的地方绑定该事件|详见上表|


### SCHEMA
schema定义如下：

```
{
	type: 'object',
	properties: {
		col: {
			type: 'number'
		},
        moreUrl: {
            type: 'string'
        },
        moreUrlType: {
            type: 'sf'
        },
        imgList: {
            type: 'array',
            items:{
                type: 'object',
                properties: {
                    url: {
                        type: 'string'
                    },
                    urlType: {
                        type: 'string'
                    },
                    src: {
                        type: 'string'
                    },
                    type: {
                        type: 'string'
                    },
                    title: {
                        type: 'string'
                    },
                    subTitle: {
                        type: 'string'
                    },
                    titleClamp: {
                        type: 'number'
                    },
                    subTitleClamp: {
                        type: 'number'
                    },
                    imgNum: {
                        type: 'number'
                    },
                    iconType: {
                        type: 'string'
                    }
                },
                required: ['src','type','title']
            }
        }
	},
	required: ['col','imgList']
}
```
