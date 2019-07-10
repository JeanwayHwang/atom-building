---
name: ScrollArticle
title: 资讯类横滑
category: 文章图文类
owner: 郭勇
---

## 使用场景

资讯类文章横划需求下使用

## 示例

```atom 资讯类横滑
<template>
    <c-aladdin touchable title="整卡可点 跳转hao123" url="https://m.hao123.com">
        <c-scroll-article
            :col='col'
            :article-list='articleList'
            :more-url='moreUrl'
            :more-url-params='moreUrlParams'
            @scrollEnd="handleScrollEnd">
        </c-scroll-article>
    </c-aladdin>
</template>
<script type='config'>
    {
        data: {
            col: 6,
            moreUrl: 'https://m.baidu.com',
            articleList:[
                {
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000,
                    type:'video',
                    duration: '01:20',
                    labelText:'标签',
                    labelType: 'box_red'
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000,
                    labelText:'标签',
                    labelType: 'box_red'
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: 'kkkkkkkkkkkkkk',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-article': 'search-ui/ScrollArticle/ScrollArticle'
        }
    }
</script>
<script>
    export default {
        methods: {
            handleScrollEnd() {
                console.log('handleScrollEnd');
            }
        }
    }
</script>
```

```atom 资讯类横滑，使用slot
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-article
            show-ext
            :col='col'
            :article-list='articleList'
            :more-url='moreUrl'
            :more-url-params='moreUrlParams'
            @scrollEnd="handleScrollEnd">
            <div a-for="(item, idx) in articleList" :slot="'c-scroll-article-ext'+(idx)">
                <c-line clamp="1">slot中的dom,只能有一行</c-line>
            </div>
        </c-scroll-article>
    </c-aladdin>
</template>
<script type='config'>
    {
        data: {
            col: 6,
            moreUrl: 'https://m.baidu.com',
            articleList:[
                {
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: 'kkkkkkkkkkkkkk',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    src: 'https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-article': 'search-ui/ScrollArticle/ScrollArticle',
            'c-line': 'search-ui/Line/Line'
        }
    }
</script>
<script>
    export default {
        methods: {
            handleScrollEnd() {
                console.log('handleScrollEnd');
            }
        }
    }
</script>
```

```atom 使用默认图
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-article
            show-ext
            :col="col"
            :article-list="articleList"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            @scrollEnd="handleScrollEnd">
            <div a-for="(item, idx) in articleList" :slot="'c-scroll-article-ext'+(idx)">
                <c-line clamp="1">slot中的dom,只能有一行</c-line>
            </div>
        </c-scroll-article>
    </c-aladdin>
</template>
<script type='config'>
    {
        data: {
            col: 6,
            moreUrl: 'https://m.baidu.com',
            articleList:[
                {
                    url: 'https://m.baidu.com',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    defaultImageType: 'app',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    title: '测试用的title，一定要长测试用的title，一定要长测试用的title，一定要长测试用的title，一定要长',
                    defaultImageType: 'finance',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    defaultImageType: 'food',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    title: 'kkkkkkkkkkkkkk',
                    defaultImageType: 'hotel',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    defaultImageType: 'learn',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                },{
                    url: 'https://m.baidu.com',
                    title: '测试用的title，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长',
                    defaultImageType: 'news',
                    content: '测试用的摘要，一定要长，非常长，很长很长，很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                    source: '汽车之家',
                    time:1503400684000
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-article': 'search-ui/ScrollArticle/ScrollArticle',
            'c-line': 'search-ui/Line/Line'
        }
    }
</script>
<script>
    export default {
        methods: {
            handleScrollEnd() {
                console.log('handleScrollEnd');
            }
        }
    }
</script>
```

## 注意事项

1. 数据中配置moreUrl则展示『查看更多』，否则不展示

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
col | number | 6 | 可选 | 栅格列数 | -
articleList | array | - | 可选 | 文章列表数据 | -
>> articleList[].url | string | - | - | 跳转链接 | -
>> articleList[].params | Object | - | - | 跳转链接所需的参数，参考[Link](./Link#API)&nbsp;`params` | -
>> articleList[].src | string | - | - | 图片链接 | -
>> articleList[].title | string | - | - | 文章标题 | -
>> articleList[].type | string | - | - | item类型,支持&nbsp;'video'&nbsp;和&nbsp;'image' | -
>> articleList[].content | string | - | - | 文章内容 | -
>> articleList[].labelText | string | - | - | 标签文案 | -
>> articleList[].labelType | string | - | - | 标签类型 | -
>> articleList[].source | string | - | - | 文章来源 | -
>> articleList[].time | number | - | - | 时间戳，单位ms | -
>> articleList[].source | string | - | - | 文章来源 | -
>> articleList[].duration | string | - | - | 视频的显示时长 | -
>> articleList[].defaultImageType | string | - | - | 缺省图&加载图类型，具体可参考[Image](./Image#API) | -
moreUrl | string | - | 可选 | 查看更多跳转的url | -
moreUrlParams | object | - | 可选 | 查看更多跳转的url所需的参数 | -
showExt | boolean | false | 可选 | 当只是用extslot时需要设置为true | -

### Slots



名称 | 描述
--- | ---
c-scroll-article-ext{{index}} | 自定义拓展信息，只支持1行显示

### Events


- **itemClick**: 点击文章

名称 | 类型 | 描述
--- | --- | ---
idx | number | 当前文章index，从0开始，其他同上表&nbsp;imgList&nbsp;中各字段

- **scrollEnd**: 滚动事件结束
	无参数

- **showMore**: 点击『查看更多』
	无参数



