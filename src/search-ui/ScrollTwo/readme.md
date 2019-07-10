---
name: ScrollTwo
title: 双排横划组件
category: 文章图文类
owner: 王凯
---

## 使用场景

资讯类文章双排横滑需求下使用

## 示例

```atom 双排横划组件；水平排列；只有一项

<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-two
            orientation="horizontal"
            :col="col"
            :list="list"
            :img-type="imgType"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick">
            <div
                a-for="(item, index) in list"
                :slot="'c-scroll-two-slot' + index">
                <c-line class="c-color-gray">
                    添加自己的slot
                    <span class="c-color-orange c-gap-left-small">14</span>
                </c-line>
                <c-line class="c-color-orange">第二行slot</c-line>
            </div>
        </c-scroll-two>
    </c-aladdin>
</template>

<script type='config'>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-two': 'search-ui/ScrollTwo/ScrollTwo',
            'c-line': 'search-ui/Line/Line',
        },
        data: {
            col: 4,
            imgType: 'l',
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '有链接 跳转百度',
                    url: 'http://m.baidu.com',
                    urlParams: {
                    },
                    showNum: 123,
                    iconType: 'imgs',
                    hackWhiteStroke: true,
                    maskgapSize: '.1rem'
                }
            ]
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
    }
</script>
```

```atom 双排横划组件 水平排列

<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-two
            orientation="horizontal"
            :col="col"
            :list="list"
            :img-type="imgType"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick">
            <div 
                a-for="(item, index) in list"
                :slot="'c-scroll-two-slot' + index">
                <c-line class="c-color-gray">
                    添加自己的slot
                    <span class="c-color-orange c-gap-left-small">14</span>
                </c-line>
                <c-line class="c-color-orange">第二行slot</c-line>
            </div>
        </c-scroll-two>
    </c-aladdin>
</template>

<script type='config'>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-two': 'search-ui/ScrollTwo/ScrollTwo',
            'c-line': 'search-ui/Line/Line',
        },
        data: {
            col: 4,
            imgType: 'l',
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '有链接 跳转百度',
                    url: 'http://m.baidu.com',
                    urlParams: {
                    },
                    showNum: 123,
                    iconType: 'imgs',
                    hackWhiteStroke: true,
                    maskgapSize: '.1rem'
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '有链接 跳转hao123',
                    url: 'http://m.hao123.com',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题333333333333333333',
                    url: '',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题444444444444444444444',
                    url: '',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题555555555555555555555',
                    url: '',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题666666666666666666666',
                    url: '',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题7777777777777777777777',
                    url: '',
                    urlParams: {

                    }
                },
            ]
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
    }
</script>
```

```atom 双排横划组件 竖直排列

<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-two
            orientation="vertical"
            :col="col"
            :list="list"
            :img-type="imgType"
            :more-url="moreUrl"
            :more-url-params="moreUrlParams"
            @showmore="handleShowMore"
            @scrollend="handleScrollEnd"
            @itemclick="handleItemClick">
            <div 
                a-for="(item, index) in list"
                :slot="'c-scroll-two-slot' + index">
                <c-line class="c-color-gray">
                    添加自己的slot
                    <span class="c-color-orange c-gap-left-small">14</span>
                </c-line>
                <c-line class="c-color-orange">第二行slot</c-line>
            </div>
        </c-scroll-two>
    </c-aladdin>
</template>

<script type='config'>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-two': 'search-ui/ScrollTwo/ScrollTwo',
            'c-line': 'search-ui/Line/Line',
        },
        data: {
            col: 4,
            imgType: 'l',
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '有链接 跳转百度',
                    url: 'http://m.baidu.com',
                    urlParams: {
                    },
                    showNum: 123,
                    iconType: 'imgs',
                    hackWhiteStroke: true,
                    maskgapSize: '.1rem'
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '有链接 跳转hao123',
                    url: 'http://m.hao123.com',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题333333333333333333',
                    url: '',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题444444444444444444444',
                    url: '',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题555555555555555555555',
                    url: '',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题666666666666666666666',
                    url: '',
                    urlParams: {

                    }
                },
                {
                    imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511853301&di=e1afcdd0b205188e0ad2aa4ddc5a0fbc&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0154b75541e3d40000011541755499.jpg',
                    title: '标题7777777777777777777777',
                    url: '',
                    urlParams: {

                    }
                },
            ]
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
    }
</script>
```

## 注意事项

1. 双排横滑不会出现单个展示，数据是奇数时，组件内会向下取整，不展示最后一项；
2. 数据中配置moreUrl则展示『查看更多』，否则不展示

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
orientation | string | horizontal | 可选 | 排列方式，有水平排列（'horizontal'）和竖直排列（'vertical'）两种 | -
list | array | - | 必选 | 数据列表 | -
>> list[].url | string | - | - | 跳转链接 | -
>> list[].urlParams | Object | - | - | 跳转链接所需的参数，参考[Link](./Link#API)&nbsp;`params` | -
>> list[].imgSrc | string | - | - | 图片链接 | -
>> list[].title | string | - | - | 图片标题 | -
>> list[].lazy | boolean | - | - | 是否需要懒加载 | -
>> list[].showNum | string \| number | - | - | 展示图集个数或者视频时长 | -
>> list[].iconType | string | - | - | 图标类型 | -
>> list[].hackWhiteStroke | boolean | - | - | 加上去白边的蒙层 | -
>> list[].maskgapSize | string \| number | - | - | 图片右下角遮罩与外框的边距 | -
>> list[].progressive | boolean | - | - | 图片显示使用渐显效果 | -
>> list[].blur | boolean | - | - | 图片显示使用模糊效果 | -
imgType | string | l | 可选 | 图片比例，值有（s,l,w,x,y），详见[栅格图片](http://pmd.baidu.com/doc/#image) | -
col | number | 4 | 可选 | 栅格列数 | -
moreUrl | string | - | 可选 | 查看更多跳转链接 | -
moreUrlParams | object | - | 可选 | 查看更多跳转链接所需参数 | See [Link](./Link#API) `params`

### Slots



名称 | 描述
--- | ---
c-scroll-two-slot{{index}} | item项的辅助信息

### Events


- **itemclick**: 当点击项不做url跳转有特殊操作时，可在组件外层调用的地方绑定该事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | number | 索引

- **scrollend**: 滚动事件结束时触发
	无参数

- **showmore**: 当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件
	无参数



