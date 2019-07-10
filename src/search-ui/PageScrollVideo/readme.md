---
name: PageScrollVideo
title: 视频分页横滑
category: 视频类
owner: 王凯
---

## 示例

```atom 视频分页横滑，自定义配置，col字段控制展示所占栅格

<template>
    <div class="c-container">
        <c-page-scroll-video
            :video="video"
            col="6"
            :moreInfo= "moreInfo"
            @showMore="selfShowMore"
            @scrollEnd="selfScrollEnd"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-page-scroll-video': 'search-ui/PageScrollVideo/PageScrollVideo'
        },
        data: {
            video: [
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '11梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '22梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '33梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '44梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '55梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                }
            ],
            showConfig: {
                imgType: 'y',
                col: '4'
            },
            moreInfo: {
                url: 'https://www.baidu.com',
                params: {
                    type: 'sf',
                    sfUrl: '/sf?pd=xxx',
                    options: ''
                },
                text: '查看更多'
            }
        }
    }
</script>

<script>
    export default {
        methods: {
            selfShowMore() {
                console.log('selfshowmore');  
            },
            selfScrollEnd() {
                console.log('selfScrollEnd');
            }
        }
    }
</script>


```
```atom 视频分页横滑，默认配置

<template>
    <div class="c-container">
        <c-page-scroll-video
            :video= "video"
            :moreInfo= "moreInfo"
            @showMore="selfShowMore"
            @scrollEnd="selfScrollEnd"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-page-scroll-video': 'search-ui/PageScrollVideo/PageScrollVideo'
        },
        data: {
            video: [
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '11梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '22梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '33梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '44梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '55梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                }
            ],
            showConfig: {
                imgType: 'y',
                col: '4'
            },
            moreInfo: {
                url: 'https://www.baidu.com',
                params: {
                    type: 'sf',
                    sfUrl: '/sf?pd=xxx',
                    options: ''
                },
                text: '查看更多'
            }
        }
    }
</script>

<script>
    export default {
        methods: {
            selfShowMore() {
                console.log('selfshowmore');  
            },
            selfScrollEnd() {
                console.log('selfScrollEnd');
            }
        }
    }
</script>


```
```atom 视频分页横滑，showConfig控制各种展现配置

<template>
    <div class="c-container">
        <c-page-scroll-video
            :video= "video"
            :showConfig= "showConfig"
            :moreInfo= "moreInfo"
            @showMore="selfShowMore"
            @scrollEnd="selfScrollEnd"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-page-scroll-video': 'search-ui/PageScrollVideo/PageScrollVideo'
        },
        data: {
            video: [
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '11梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '22梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '33梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '44梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                },
                {
                    url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                    title: '55梁静茹睽违三年再踏红馆,重唱情歌感触多',
                    poster: 'http://cdn01.baidu-img.cn/timg?wisealaddin&size=f350_233&quality=100&sec=1503394867&di=a32935b82c90a4863d49994d9894a4fa&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2649821926%2C945415540%26fm%3D171%26s%3D1735788460781996A4803C1F0300509B%26w%3D480%26h%3D270%26img.JPEG',
                    originPoster: 'http://ss.com',
                    source: '凤凰视频',
                    duration: '78',
                    pubtime: '1503314822000',
                    playtime: '78',
                    score: '20.731828689575',
                    text: '梁静茹睽违三年再踏红馆,重唱情歌感触多'
                }
            ],
            showConfig: {
                imgType: 'y',
                col: '12'
            },
            moreInfo: {
                url: 'https://www.baidu.com',
                params: {
                    type: 'sf',
                    sfUrl: '/sf?pd=xxx',
                    options: ''
                },
                text: '查看更多'
            }
        }
    }
</script>

<script>
    export default {
        methods: {
            selfShowMore() {
                console.log('selfshowmore');  
            },
            selfScrollEnd() {
                console.log('selfScrollEnd');
            }
        }
    }
</script>


```

## API：

### Props

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| video | Array |  | 筛选项 |
| video[].url | String | 无 | 跳转连接，必选，最小长度1个字符   最大长度1024个字符 |
| video[].title | String |无  |标题，必须，最小长度1个字符   最大长度200个字符|
| video[].poster | String | 无 |图片缩略图地址，必选，最小长度1个字符 最大长度1024个字符|
| video[].source | Number | 无 |来源，可选，最小长度1个字符  最大长度100个字符|
| video[].duration | Number | 无 |播放时长，单位：秒，可选，最小长度1个字符  最大长度10个字符|
| video[].pubtime | Number | 无 |发布时间，标准时间戳，可选，，最小长度1个字符  最大长度10个字符 |
| video[].playtime | Number | 无 |播放次数，可选，最小值为（包含）0   最大值为（包含）99999999|
| video[].score | Number | 无 |评分，可选|
| video[].text | String | 无 |描述文案，可选，最小长度1个字符    最大长度200个字符|
| showConfig | Object | 无 | 展现配置，可选 |
| showConfig.imgType | String | y |图片比例，可选，默认为y，3:2|
| showConfig.col | String | 4 |图片所占栅格，可选，默认为4，有效值1-12|
| moreInfo | Object |  | 查看更多配置，可选 |
| moreInfo.url | string | | 链接地址，a 标签元素，若为空，则输出的是一个 div |
| moreInfo.params | Object |  | 链接所带的参数 |
| moreInfo.params.type | enum('normal', 'sf') |  | 链接的类型，sf 表示跳转情景页 |
| moreInfo.params.sfUrl | string | | `data-sf-href` 所需地址 |
| moreInfo.params.options | string | | `data-sf-options` 所需的 json 类型配置 |
| moreInfo.text | string | '查看更多' | 查看更多文案 |
| col | String | 4 |图片所占栅格，可选，默认为4，有效值1-12|

### Slots

无


### Event

| 名称       |  描述    | 参数          |
|-----------|----------|--------------|
|showMore   |当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件|event     |
|scrollEnd  |滑动结束后触发|     |



### Schema
```schema
{
    type: 'Object',
    properties: {
        video: {
            type: 'array',
            items : {
                    type: 'Object',
                properties: {
                    url: {
                        type:'String'
                    },
                    title: {
                        type: 'String'
                    },
                    poster: {
                        type:'String'
                    },
                    source: {
                        type: 'String'
                    },
                    duration: {
                        type:'Number'
                    },
                    pubtime: {
                        type: 'Number'
                    },
                    playtime: {
                        type:'Number'
                    },
                    score: {
                        type: 'Number'
                    },
                    text: {
                        type:'String'
                    }
                },
                "required": ["url", "title", "poster"]
            }
        },
        showConfig: {
            type: 'Object',
            properties: {
                imgType: {
                    type:'String'
                },
                col: {
                    type: 'String'
                }
            }
        },
        moreInfo: {
            type: "object",
            properties: {
                url: {
                    type: "string"
                },
                params: {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            enum: ['sf', 'normal']
                        },
                        sfUrl: {
                            type: "string"
                        },
                        options: {
                            type: "string"
                        }
                    }
                },
                text: {
                    type: "string"
                }
            }
        }
    },
    "required": ["video"]
}

```
