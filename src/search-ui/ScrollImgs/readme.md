---
name: ScrollImgs
title: 多图横滑组件
category: 图片类
owner: 郭勇
---

## 使用场景

> 参考UE规范：[D12 【基础组件】-【橫滑】](http://sfe.baidu.com:8186/ue-guide/scroll.html)

## 使用示例

```atom 多图横滑组件
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-imgs
            :col="imgs.col"
            :img-list="imgs.imgList"
            :more-url="imgs.moreUrl"
            :more-url-params="imgs.moreUrlParams"
            :more-col="imgs.moreCol"
            :default-image-type="imgs.defaultImageType"
            @itemclick="handleItemClick">
        </c-scroll-imgs>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-imgs': 'search-ui/ScrollImgs/ScrollImgs'
        },
        data: {
           imgs: {
                col: 4,
                moreCol: 4,
                defaultImageType: "hotel",
                moreUrl: 'https://m.baidu.com',
                imgList:[{
                    imgNum: 3,
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "不带跳转链接",
                    subTitle: "辅助信息",
                    subTitleClamp: 2,
                    iconType: "imgs"
                },{
                    imgNum: 12,
                    type: "s",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    title: "不带跳转链接二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    iconType: "imgs"
                },{
                    imgNum: 123,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题两行不带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    iconType: "imgs"
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题不带图标",
                    subTitle: "辅助信息",
                    titleClamp: 2,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
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
            handleItemClick(index) {
                console.log('handleItemClick', index);
            }
        }
    }
</script>
```

```atom 多图横滑组件-标题定高
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-imgs
            :col="imgs.col"
            :img-list="imgs.imgList"
            :more-url="imgs.moreUrl"
            :more-url-params="imgs.moreUrlParams"
            :more-col="imgs.moreCol"
            :default-image-type="imgs.defaultImageType"
            title-fix-height
            @itemclick="handleItemClick">
        </c-scroll-imgs>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-imgs': 'search-ui/ScrollImgs/ScrollImgs'
        },
        data: {
           imgs: {
                col: 4,
                moreCol: 4,
                defaultImageType: "hotel",
                moreUrl: 'https://m.baidu.com',
                imgList:[{
                    imgNum: 3,
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "不带跳转链接",
                    subTitle: "辅助信息",
                    subTitleClamp: 2,
                    iconType: "imgs"
                },{
                    imgNum: 12,
                    type: "s",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    title: "不带跳转链接二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    iconType: "imgs"
                },{
                    imgNum: 123,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题两行不带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    iconType: "imgs"
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题不带图标",
                    subTitle: "辅助信息",
                    titleClamp: 2,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
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
            handleItemClick(index) {
                console.log('handleItemClick', index);
            }
        }
    }
</script>
```

```atom 带slot的多图横滑组件
<template>
    <section>
        <c-aladdin touchable title="整卡可点的 Aladdin 卡">
            注意：
            <br>
            - 由于组件内部slot名称的索引是从0开始，如果是index从1开始循环的话需要减1
            <br>
            - slot中需要自行处理截断问题
        </c-aladdin>
        <c-aladdin touchable title="整卡可点的 Aladdin 卡">
            <c-scroll-imgs 
                :col="imgs.col" 
                :img-list="imgs.imgList" 
                :more-url="imgs.moreUrl" 
                :more-url-params="imgs.moreUrlParams">
                <div a-for="(item, idx) in imgs.imgList" :slot="'c-scroll-imgs-ext'+(idx)" class="c-line-clamp1">
                    自定义slot
                </div>
            </c-scroll-imgs>        
        </c-aladdin>
    </section>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-imgs': 'search-ui/ScrollImgs/ScrollImgs'
        },
        data: {
           imgs: {
                col: 4,
                moreUrl: 'https://m.baidu.com',
                imgList:[{
                    imgNum: 3,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
                    iconType: "imgs"
                },{
                    imgNum: 12,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    iconType: "imgs"
                },{
                    imgNum: 123,
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题两行不带截断",
                    subTitle: "辅助信息",
                    titleClamp: 1,
                    subTitleClamp: 1,
                    iconType: "imgs"
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题不带图标",
                    subTitle: "辅助信息",
                    titleClamp: 2,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
                    titleClamp: 1,
                    subTitleClamp: 1
                }]
            }    
        }
    }
</script>
```

```atom 带默认图的多图横滑组件
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-imgs 
            :col="imgs.col" 
            :img-list="imgs.imgList" 
            :more-url="imgs.moreUrl" 
            :more-url-params="imgs.moreUrlParams">
        </c-scroll-imgs>        
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-imgs': 'search-ui/ScrollImgs/ScrollImgs'
        },
        data: {
           imgs: {
                col: 4,
                moreUrl: 'https://m.baidu.com',
                imgList:[{
                    imgNum: 3,
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
                    iconType: "imgs",
                    defaultImageType: "food"
                },{
                    imgNum: 12,
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    iconType: "imgs",
                    defaultImageType: "app"
                },{
                    imgNum: 123,
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题两行不带截断",
                    subTitle: "辅助信息",
                    titleClamp: 1,
                    subTitleClamp: 1,
                    iconType: "imgs",
                    defaultImageType: "finance"
                },{
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题不带图标",
                    subTitle: "辅助信息",
                    titleClamp: 2,
                    subTitleClamp: 1,
                    defaultImageType: "hotel"
                },{
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
                    titleClamp: 1,
                    subTitleClamp: 1,
                    defaultImageType: "learn"
                }]
            }    
        }
    }
</script>
```

```atom 使用图片右下角胶囊遮罩大号字体文案的多图横滑组件
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-imgs
            :col="imgs.col"
            :img-list="imgs.imgList"
            :more-url="imgs.moreUrl"
            :more-url-params="imgs.moreUrlParams">
        </c-scroll-imgs>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-imgs': 'search-ui/ScrollImgs/ScrollImgs'
        },
        data: {
           imgs: {
                col: 4,
                moreUrl: 'https://m.baidu.com',
                imgList:[{
                    imgPillBigText: '1',
                    imgNum: '/5',
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
                    defaultImageType: "food"
                },{
                    imgPillBigText: '2',
                    imgNum: '/5',
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    defaultImageType: "app"
                },{
                    imgPillBigText: '3',
                    imgNum: '/5',
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题两行不带截断",
                    subTitle: "辅助信息",
                    titleClamp: 1,
                    subTitleClamp: 1,
                    defaultImageType: "finance"
                },{
                    imgPillBigText: '4',
                    imgNum: '/5',
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题不带图标",
                    subTitle: "辅助信息",
                    titleClamp: 2,
                    subTitleClamp: 1,
                    defaultImageType: "hotel"
                },{
                    imgPillBigText: '5',
                    imgNum: '/5',
                    url: "https://m.baidu.com",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
                    titleClamp: 1,
                    subTitleClamp: 1,
                    defaultImageType: "learn"
                }]
            }
        }
    }
</script>
```

```atom 圆形遮罩和覆盖底部的说明文案
<template>
    <c-aladdin>
        <c-scroll-imgs
            :col="imgs.col"
            :img-list="imgs.imgList"
            :more-url="imgs.moreUrl"
            :more-url-params="imgs.moreUrlParams"
            :more-col="imgs.moreCol"
            :default-image-type="imgs.defaultImageType"
            title-fix-height
            @itemclick="handleItemClick">
        </c-scroll-imgs>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-scroll-imgs': 'search-ui/ScrollImgs/ScrollImgs'
        },
        data: {
           imgs: {
                col: 4,
                moreCol: 4,
                defaultImageType: "hotel",
                moreUrl: 'https://m.baidu.com',
                imgList:[{
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
                    subTitleClamp: 2,
                    circleMaskIcon: 'baidu'
                },{
                    type: "s",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    title: "二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断二级标题两行带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    circleMaskIcon: 'baidu',
                    circleMaskSize: "large"
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题两行不带截断",
                    subTitle: "辅助信息",
                    subTitleClamp: 1,
                    info: '底部的说明文案'
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题不带图标",
                    subTitle: "辅助信息",
                    titleClamp: 2,
                    subTitleClamp: 1
                },{
                    url: "https://m.baidu.com",
                    src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                    type: "s",
                    title: "二级标题",
                    subTitle: "辅助信息",
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
            handleItemClick(index) {
                console.log('handleItemClick', index);
            }
        }
    }
</script>
```

## 注意事项

数据中配置moreUrl则展示『查看更多』，否则不展示

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
col | number \| string | 3 | 可选 | 栅格列数 | -
imgList | array | [] | 可选 | 图片列表 | -
>> imgList[].url | string | - | - | 跳转链接 | -
>> imgList[].params | Object | - | - | 跳转链接所需的参数，参考[Link](./Link#API)&nbsp;`params` | -
>> imgList[].src | string | - | - | 图片链接 | -
>> imgList[].type | string | - | - | 图片比例，值有（s,l,w,x,y）详见[栅格图片](http://pmd.baidu.com/doc/#image) | -
>> imgList[].title | string | - | - | 图片标题 | -
>> imgList[].titleClamp | number | - | - | 图片标题截断行数 | -
>> imgList[].subTitle | string | - | - | 图片副标题 | -
>> imgList[].subTitleClamp | number | - | - | 图片副标题截断行数 | -
>> imgList[].hackWhiteStroke | boolean | - | - | 加上去白边的蒙层 | -
>> imgList[].imgNum | number \| string | - | - | 显示图集个数 | -
>> imgList[].imgPillBigText | number \| string | - | - | 图片右下角胶囊遮罩大号字体文案 | -
>> imgList[].iconType | string | - | - | 显示图集icon类型 | -
>> imgList[].defaultImageType | string | - | - | 缺省图&加载图类型，具体可参考[Image](./Image#API)，优先级高于外层设置的 | -
moreUrl | string | - | 可选 | 查看更多的跳转链接 | -
moreUrlParams | object | - | 可选 | 查看更多的跳转链接所需参数 | See [Link](./Link#API) `params`
moreCol | number \| string | 4 | 可选 | 查看更多的栅格列数 | -
titleFixHeight | boolean | false | 可选 | 标题是否定高 | -
defaultImageType | string | - | 可选 | 缺省图&加载图类型，具体可参考[Image](./Image#API) | -

### Slots



名称 | 描述
--- | ---
c-scroll-imgs{{index}} | item图片slot
c-scroll-imgs-ext{{index}} | item辅助信息

### Events


- **itemclick**: 当点击图片不做url跳转有特殊操作时，可在组件外层调用的地方绑定该事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | number | 索引

- **imgScrollEnd**: 滚动事件
	无参数

- **showMore**: 当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件
	无参数



