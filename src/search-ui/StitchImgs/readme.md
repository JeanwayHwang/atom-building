---
name: StitchImgs
title: 图集组件
category: 图片类
owner: 郭勇
---

## 使用场景

> 参考UE规范：[D14.3 【基础组件】-【图片列表】](http://sfe.baidu.com:8186/ue-guide/list.html)


## 示例

```atom 二图图集组件
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-stitch-imgs :num="2" :img-list="imgList2"></c-stitch-imgs>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-stitch-imgs': 'search-ui/StitchImgs/StitchImgs'
        },
        data: {
            imgList2:[{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            },{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            }]
        }
    }
</script>
```

```atom 二图图集组件（8n+4n）
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-stitch-imgs
            :num="2"
            :img-list="imgList2"
            img-type="combImg">
            <div slot="img">
                <div class="c-video-thumbnail-mask">
                    <span class="c-video-thumbnail-play">
                        <c-icon :type="'video_play3'"></c-icon>
                    </span>
                </div>
            </div>
        </c-stitch-imgs>
    </c-aladdin>
</template>
<style scoped>
.c-video-thumbnail-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
}
.c-video-thumbnail-play {
    position: absolute;
    top: 50%;
    left: 50%;
    width: .28rem;
    height: .28rem;
    line-height: .28rem;
    text-align: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, .3);
    -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
}
</style>
<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-stitch-imgs': 'search-ui/StitchImgs/StitchImgs',
            'c-icon': 'search-ui/Icon/Icon'
        },
        data: {
            imgList2:[{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            },{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s",
                imgNum:2
            }]
        }
    }
</script>
```

```atom 三图图集组件
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-stitch-imgs :num="3" :img-list="imgList3"></c-stitch-imgs>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-stitch-imgs': 'search-ui/StitchImgs/StitchImgs'
        },
        data: {
            imgList3:[{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            },{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            },{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            }]
        }
    }
</script>
```

```atom 五图图集组件
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-stitch-imgs :num="5" :img-list="imgList5"></c-stitch-imgs>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-stitch-imgs': 'search-ui/StitchImgs/StitchImgs'
        },
        data: {
            imgList5:[{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            },{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            },{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            },{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            },{
                url: "https://m.baidu.com",
                src: "https://dummyimage.com/240x240/ace/fff.jpg%26text=1:1",
                type: "s"
            }]
        }
    }
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
num | number | - | 必选 | 按几图展示，包括2、3、5三种 | -
imgList | array | - | 必选 | 图片列表 | -
>> imgList[].imgNum | number | - | - | 显示图集个数 | -
>> imgList[].url | string | - | - | 图片的跳转链接 | -
>> imgList[].params | Object | - | - | 图片的跳转链接所需参数 | -
>> imgList[].src | string | - | - | 图片地址 | -
>> imgList[].type | string | - | - | 图片比例，值有（s,l,w,x,y） | -
imgType | string | - | 可选 | 8n+4n二图集：combImg | -

### Slots



名称 | 描述
--- | ---
img | combImg图集的自定义内容




