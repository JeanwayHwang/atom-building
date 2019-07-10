---
name: Video
title: 视频
category: 视频类
owner: 陈骁
---

## 使用场景

> 遮罩请参考UE规范：[D16 【基础组件】-【图片遮罩】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Imagecapsule.html)

## 示例

```atom 视频横向单个，默认样式，左图4n
<template>
    <div class="c-container">
        <c-video
            :video="video"
            @click="$emit('click', $event)"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-video': 'search-ui/Video/Video'
        },
        data: {
            video: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                duration: 3600 * 24 + 300,
                pubtime: '1503314822000',
                playtime: '78',
                score: '20.731828689575'
            }
        }
    }
</script>
```

```atom 视频横向单个，默认样式，左图4n，使用默认图
<template>
    <div class="c-container">
        <c-video
            :video="video"
            @click="$emit('click', $event)"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-video': 'search-ui/Video/Video'
        },
        data: {
            video: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                defaultImageType: 'food',
                source: '凤凰视频',
                duration: 3600 * 24 + 300,
                pubtime: '1503314822000',
                playtime: '78',
                score: '20.731828689575'
            }
        }
    }
</script>
```

```atom feed 样式，默认截断
<template>
    <div class="c-container">
        <c-video
            :video="video1"
            :show-config="{
                feedType: true
            }"
        />
        <c-video
            :video="video2"
            :show-config="{
                feedType: true,
                textColor: 'orange',
                textFixHeight: true
            }"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-video': 'search-ui/Video/Video'
        },
        data: {
            video1: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                duration: '78',
                score: '20.731828689575',
                text: '描述文案不定高描述文案不定高描述文案不定高描述文案不定高',
                source: '凤凰视频',
                pubtime: '1503314822000'
            },
            video2: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                duration: '78',
                score: '20.731828689575',
                text: '描述文案定高描述文案定高描述文案定高描述文案定高',
                source: '凤凰视频',
                pubtime: '1503314822000',
                playtime: '0'
            }
        }
    }
</script>
```

```atom 视频横向单个，可添加描述
<template>
    <div class="c-container">
        <c-video
            :video="video"
            :show-config="{
                imgType: 's',
                titleClamp: 2
            }"
        />
        <c-video
            :video="video2"
            :show-config="{
                imgType: 's',
                titleClamp: 2
            }"
        />
        <c-video
            :video="video3"
            :show-config="{
                imgType: 's',
                titleClamp: 2,
                titleFixHeight: true,
                textFixHeight: true
            }"
        />
        <c-video
            :video="video4"
            :show-config="{
                imgType: 's',
                titleClamp: 2,
                titleFixHeight: true,
                textFixHeight: true
            }"
        />
        <c-video
            :video="video5"
            :show-config="{
                imgType: 's',
                titleClamp: 2,
                titleFixHeight: true,
                textFixHeight: true
            }"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-video': 'search-ui/Video/Video'
        },
        data: {
            video: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '标题两行没截断，不定高',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                pubtime: '1503314822000',
                playtime: '78',
                score: '20.731828689575',
                showTxt: '直播',
                icontypeDefined: 'live_broadcast',
                icontxt: '',
                maskIconType: 'live_broadcast',
                showColDefined: 6,
                text: '描述默认截断，没有截断，不定高'
            },
            video2: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '标题两行截断了不定高，标题两行截断了不定高',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                duration: '3722',
                pubtime: '1503314822000',
                playtime: '',
                score: '20.731828689575',
                text: '描述不定高描述不定高描述不定高描述不定高描述不定高',
                showTxt: '',
                icontypeDefined: '',
                icontxt: '',
                maskIconType: 'video_play3',
                showColDefined: 6,
                text: '描述默认截断，截断了，不定高，这次是截断了这次是截断了'
            },
            video3: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '标题两行没截断，而且定高',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                duration: '',
                pubtime: '1503314822000',
                playtime: '',
                score: '20.731828689575',
                text: '描述默认截断，没有截断，定高',
                showTxt: 'GIF',
                icontypeDefined: '',
                icontxt: 'GIF',
                maskIconType: '',
                showColDefined: 6
            },
            video4: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '标题两行截断了，而且定高',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                duration: '',
                pubtime: '1503314822000',
                playtime: '',
                score: '20.731828689575',
                text: '描述默认截断，截断了，定高，这次是截断了这次是截断了',
                showTxt: 'GIF',
                icontypeDefined: '',
                icontxt: 'GIF',
                maskIconType: '',
                showColDefined: 6
            },
            video5: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '标题两行截断了，而且定高',
                defaultImageType: 'food',
                source: '凤凰视频',
                duration: '',
                pubtime: '1503314822000',
                playtime: '',
                score: '20.731828689575',
                text: '描述默认截断，截断了，定高，这次是截断了这次是截断了',
                showTxt: 'GIF',
                icontypeDefined: '',
                icontxt: 'GIF',
                maskIconType: '',
                showColDefined: 6
            }
        }
    }
</script>
```

```atom 4N(1:1) 转 12N 当前播
<template>
    <div class="c-container">
        <c-video-content :video="video" :text="text" @playEnd="playEnd" @playStart="playStart" @expand="expand" @shrink="shrink" ref="vc">
            <template slot="player-front">
                <c-button @click="play" text="播放视频" style="margin: 80px 25%; width: 50%; background: transparent; border: 1px solid white; color: white; outline: none"/>
            </template>
            <template slot="player-end">
                <c-button @click="replay" text="重新播放" style="margin: 80px 25%; width: 50%; background: transparent; border: 1px solid white; color: white; outline: none"/>
            </template>
        </c-video-content>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-video-content': 'search-ui/Video/VideoContent',
            'c-button': 'search-ui/Button/Button'
        },
        data: {
            video: {
                title: '北京.秒懂百科',
                src: 'http://static.fibar.cn/%E9%99%84%E4%BB%B6%EF%BC%9A1%E9%9D%92%E6%B5%B7%E4%B8%AD%E7%9F%B3%E6%B2%B9%E5%85%AC%E5%8F%B8-%E6%99%BA%E6%85%A7%E5%8A%A0%E6%B2%B9%E7%AB%99%E7%B3%BB%E7%BB%9F%E5%AE%A3%E4%BC%A0%E7%89%87.mp4',
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                thumb: 'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&size=8&quality=100&sec=1534241878&di=653b76149f1df2d435b034601440ad68&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D818782573%2C2110320194%26fm%3D58%26bpow%3D1200%26bpoh%3D792',
                poster: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/crop%3D0%2C3%2C1200%2C675%3BeWH%3D400%2C225/sign=0afe02f54090f60310ffc60704229f28/7acb0a46f21fbe09eb1f4dd061600c338644adb5.jpg',
                iconType: '',
                iconTxt: '',
                col: 4,
                logo: 'http://m.baidu.com/se/static/aladdin/bk_polysemy/miaodong-logo_d5aa8ae.png',
                wait: true
            },
            text: {
                text: '简介：北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员会所在地，也是中部战区司令部驻地。北京位于华北平原北部，背靠燕山，毗邻天津市和河北省。北京的气候为典型的北温带半湿润大陆性季风气候。北京是首批国家历史文化名城和世界上拥有世界文化遗产数最多的城市，三千多年的历史孕育了故宫、天坛、八达岭长城、颐和园等众多名胜古迹。早在七十万年前，北京周口店地区就出现了原始人群部落“北京人”。公元前1045年，北京成为蓟、燕等诸侯国的都城。公元938年以来，北京先后成为辽陪都、金中都、元大都、明、清国都、中华民国北洋政府首都，1949年10月1日成为中华人民共和国首都。北京被全球权威机构GaWC评为',
                textClamp: 5,
                textColor: '#555',
                url: 'https://m.baidu.com'
            }
        }
    }
</script>

<script>
export default {
    methods: {
        playEnd () {
            console.log('playEnd');
        },
        playStart () {
            console.log('playStart');
            this.video.wait = false
        },
        play () {
            this.$refs.vc.play()
        },
        replay () {
            this.$refs.vc.play()
        },
        expand () {
            console.log('expand')
        },
        shrink () {
            console.log('shrink')
        }
    }
}
</script>
```

```atom 4N(1:1) 转 12N 当前播 GIF
<template>
    <div class="c-container">
        <c-video-content :video="video" :text="text" @playEnd="playEnd" @playStart="playStart" @expand="expand" @shrink="shrink" ref="vc">
            <template slot="player-front">
                <img
                    src="http://hanyu-word-gif.cdn.bcebos.com/b49c77880427711e58bafc8e0eb15ce01.gif"
                    style="height: 100%; margin: auto; display: block; padding: .15rem; box-sizing: border-box"
                />
            </template>
            <template slot="player-end">
                <c-button @click="replay" text="重新播放" style="margin: 80px 25%; width: 50%; background: transparent; border: 1px solid white; color: white; outline: none"/>
            </template>
        </c-video-content>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-video-content': 'search-ui/Video/VideoContent',
            'c-button': 'search-ui/Button/Button'
        },
        data: {
            video: {
                title: '和.笔顺',
                thumb: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1123769073,1746452830&fm=58&s=4B2C3062CEB167B30F39C0D60300C0A0',
                poster: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1123769073,1746452830&fm=58&s=4B2C3062CEB167B30F39C0D60300C0A0',
                posterType: 's',
                iconType: '',
                iconTxt: '',
                col: 4,
                logo: '',
                wait: true
            },
            text: {
                text: '简介：北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心，是中国共产党中央委员会、中华人民共和国中央人民政府、全国人民代表大会、中国人民政治协商会议全国委员会、中华人民共和国中央军事委员会所在地，也是中部战区司令部驻地。北京位于华北平原北部，背靠燕山，毗邻天津市和河北省。北京的气候为典型的北温带半湿润大陆性季风气候。北京是首批国家历史文化名城和世界上拥有世界文化遗产数最多的城市，三千多年的历史孕育了故宫、天坛、八达岭长城、颐和园等众多名胜古迹。早在七十万年前，北京周口店地区就出现了原始人群部落“北京人”。公元前1045年，北京成为蓟、燕等诸侯国的都城。公元938年以来，北京先后成为辽陪都、金中都、元大都、明、清国都、中华民国北洋政府首都，1949年10月1日成为中华人民共和国首都。北京被全球权威机构GaWC评为',
                textClamp: 5,
                textColor: '#555',
                url: 'https://m.baidu.com'
            }
        }
    }
</script>

<script>
export default {
    methods: {
        playEnd () {
            console.log('playEnd');
        },
        playStart () {
            console.log('playStart');
            this.video.wait = false
        },
        play () {
            this.$refs.vc.play()
        },
        replay () {
            this.$refs.vc.play()
        },
        expand () {
            console.log('expand')
        },
        shrink () {
            console.log('shrink')
        }
    }
}
</script>
```

```atom 8N(2:1) 转 12N 当前播
<template>
    <div class="c-container">
        <c-video-content :video="video" :text="text" @playEnd="playEnd" @playStart="playStart" @expand="expand" @shrink="shrink" ref="vc">
            <template slot="player-right">
                <c-img src="https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&size=8&quality=100&sec=1534241878&di=653b76149f1df2d435b034601440ad68&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D818782573%2C2110320194%26fm%3D58%26bpow%3D1200%26bpoh%3D792" type="s">
            </template>
            <template slot="player-front">
                <c-button @click="play" text="播放视频" style="transform: translate3D(0, 0, 0); margin: 80px 25%; width: 50%; background: transparent; border: 1px solid white; color: white; outline: none"/>
            </template>
            <template slot="player-end">
                <c-button @click="replay" text="重新播放" style="margin: 80px 25%; width: 50%; background: transparent; border: 1px solid white; color: white; outline: none"/>
            </template>
        </c-video-content>
    </div>
</template>
<script type="config">
    {
        components: {
            'c-video-content': 'search-ui/Video/VideoContent',
            'c-button': 'search-ui/Button/Button',
            'c-img': 'search-ui/Image/Image'
        },
        data: {
            video: {
                title: '北京.秒懂百科',
                src: 'http://static.fibar.cn/%E9%99%84%E4%BB%B6%EF%BC%9A1%E9%9D%92%E6%B5%B7%E4%B8%AD%E7%9F%B3%E6%B2%B9%E5%85%AC%E5%8F%B8-%E6%99%BA%E6%85%A7%E5%8A%A0%E6%B2%B9%E7%AB%99%E7%B3%BB%E7%BB%9F%E5%AE%A3%E4%BC%A0%E7%89%87.mp4',
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                thumb: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/crop%3D0%2C3%2C1200%2C675%3BeWH%3D400%2C225/sign=0afe02f54090f60310ffc60704229f28/7acb0a46f21fbe09eb1f4dd061600c338644adb5.jpg',
                poster: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/crop%3D0%2C3%2C1200%2C675%3BeWH%3D400%2C225/sign=0afe02f54090f60310ffc60704229f28/7acb0a46f21fbe09eb1f4dd061600c338644adb5.jpg',
                iconType: '',
                iconTxt: '',
                col: 8,
                logo: 'http://m.baidu.com/se/static/aladdin/bk_polysemy/miaodong-logo_d5aa8ae.png',
                wait: true,
                imgType: 'b',
                zoom: true,
                vanish: true,
                shift: true,
                time: '12:34',
                smallLogo: true
            },
            text: {}
        }
    }
</script>
<script>
export default {
    methods: {
        playEnd () {
            console.log('playEnd');
        },
        playStart () {
            console.log('playStart');
            this.video.wait = false
        },
        play () {
            this.$refs.vc.play()
        },
        replay () {
            this.$refs.vc.play()
        },
        expand () {
            console.log('expand')
        },
        shrink () {
            console.log('shrink')
        }
    }
}
</script>
```

```atom 视频横向单个，自定义，12n样式
<template>
    <div class="c-container">
        <c-video :video="video1" />
        <c-video :video="video2" />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-video': 'search-ui/Video/Video'
        },
        data: {
            video1: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                duration: 42323,
                pubtime: '1503314822000',
                playtime: '78',
                score: '20.731828689575',
                text: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                showTxt: '动图',
                icontxt: 'GIF',
                showColDefined: 12
            },
            video2: {
                url: 'http://v.ku6.com/show/m7OsHOSG-AG736Fi.html',
                title: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                duration: 42323,
                pubtime: '1503314822000',
                playtime: '78',
                score: '20.731828689575',
                text: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                icontypeDefined: 'music_play',
                maskIconType: 'baidu',
                showColDefined: 12
            }
        }
    }
</script>
```

```atom 纵向的 Video，定高和不定高
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-video-col :item="video1" :title-clamp="2" />
            </c-span>
            <c-span>
                <c-video-col :item="video2" :title-clamp="2" />
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-video-col
                    :item="video1"
                    :title-clamp="2"
                    title-fix-height
                />
            </c-span>
            <c-span>
                <c-video-col
                    :item="video2"
                    :title-clamp="2"
                    title-fix-height
                />
            </c-span>
        </c-row>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-video-col': 'search-ui/Video/VideoCol',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        },
        data: {
            video1: {
                title: '梁静茹睽违三年再踏红馆,重唱情歌感触多梁静茹睽违三年再踏红馆,重唱情歌感触多',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                duration: 4355,
                pubtime: '1503314822000',
                score: '20.731828689575'
            },
            video2: {
                title: '梁静茹睽违三年再踏红馆,重唱情歌感触多',
                poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
                source: '凤凰视频',
                duration: 232,
                pubtime: '1503314822000',
                playtime: 3,
                labelFront: '标签',
                labelFrontType: 'box_red'
            }
        }
    }
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
video | object | {} | 可选 | 视频参数 | -
>> video.url | string | - | - | 跳转连接，最小长度1个字符，最大长度1024个字符 | -
>> video.title | string | - | - | 标题，最小长度1个字符&nbsp;最大长度200个字符 | -
>> video.poster | string | - | - | 图片缩略图地址，最小长度1个字符&nbsp;最大长度1024个字符 | -
>> video.source | string | - | - | 来源，最小长度1个字符&nbsp;最大长度100个字符 | -
>> video.duration | number | - | - | 播放时长，单位：秒，最小长度1个字符&nbsp;最大长度10个字符 | -
>> video.pubtime | number | - | - | 发布时间，标准时间戳，最小长度1个字符&nbsp;最大长度10个字符 | -
>> video.playtime | number | - | - | 播放次数，最小值为（包含）0，最大值为（包含）99999999 | -
>> video.score | number | - | - | 评分 | -
>> video.text | string | - | - | 描述文案，最小长度1个字符，最大长度200个字符 | -
>> video.showTxt | string \| number | - | - | 描述图片右下角遮罩内自定义文案及数字，与video.duration互斥，优先显示video.showTxt | -
>> video.maskIconType | string | - | - | 描述图片右下角遮罩内自定义icon图标 | -
>> video.icontypeDefined | string | - | - | 描述图片居中遮罩自定义icon,&nbsp;不传时，默认值为&nbsp;‘video_play3' | -
>> video.icontxt | string | - | - | 描述文案，最小长度1个字符，最大长度200个字符 | -
>> video.showColDefined | string \| number | - | - | 描述图片右下角遮罩内自定义文案及数字，与video.duration互斥，优先显示video.showTxt | -
>> video.imgBorderRadius | object | - | - | 图片边线设置 | -
showConfig | object | {} | 可选 | 展现配置 | -
>> showConfig.imgType | string | - | - | 图片比例，默认为y，3:2 | -
>> showConfig.titleClamp | string | - | - | 标题截断，默认为1行截断 | -
>> showConfig.textClamp | string | - | - | 描述截断，默认为1行截断 | -
>> showConfig.textColor | string | - | - | 描述的字体颜色 | -
>> showConfig.feedType | number | - | - | feed&nbsp;特有的样式，标题字号不同 | -
params | object | - | 可选 | 链接所带的参数，可参考Link | -

#### VideoCol

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
item | object | {} | 可选 | 视频信息 | -
>> item.url | string | - | - | 跳转链接 | -
>> item.title | string | - | - | 标题，最小长度1个字符&nbsp;最大长度200个字符 | -
>> item.poster | string | - | - | 图片缩略图地址，最小长度1个字符&nbsp;最大长度1024个字符 | -
>> item.source | number | - | - | 来源，最小长度1个字符&nbsp;最大长度100个字符 | -
>> item.duration | number | - | - | 播放时长，单位：秒，最小长度1个字符&nbsp;最大长度10个字符 | -
>> item.pubtime | number | - | - | 发布时间，标准时间戳，最小长度1个字符&nbsp;最大长度10个字符 | -
>> item.playtime | number | - | - | 播放次数，最小值为（包含）0，最大值为（包含）99999999 | -
>> item.score | number | - | - | 评分 | -
>> item.labelFront | string | - | - | 标题左侧标签文案 | -
>> item.labelFrontType | string | - | - | 标题前的标签类型，可参考Label组件 | -
imgType | string | y | 可选 | 图片类型 | -
iconType | string |  | 可选 | 描述图片右下角遮罩内自定义icon图标 | -
titleClamp | string \| number | 1 | 可选 | 标题截断，默认为1行截断 | -
infoLine | string \| number | 1 | 可选 | 来源信息，可选，默认为1行展现，2为两行展现，有效值1或2 | -
params | object | - | 可选 | - | -
titleFixHeight | boolean | - | 可选 | 标题是否定高 | -
imgBorderRadius | object | - | 可选 | 圆角配置 | -
>> imgBorderRadius.tl | boolean | true | - | 左上角是否有圆角 | -
>> imgBorderRadius.tr | boolean | true | - | 右上角是否有圆角 | -
>> imgBorderRadius.bl | boolean | true | - | 左下角是否有圆角 | -
>> imgBorderRadius.br | boolean | true | - | 右下角是否有圆角 | -
>> imgBorderRadius.tlRadius | string | - | - | 左上角圆角半径值，默认为&nbsp;3px | -
>> imgBorderRadius.trRadius | string | - | - | 右上角圆角半径值，默认为&nbsp;3px | -
>> imgBorderRadius.blRadius | string | - | - | 左下角圆角半径值，默认为&nbsp;3px | -
>> imgBorderRadius.brRadius | string | - | - | 右下角圆角半径值，默认为&nbsp;3px | -

#### VideoContent

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
video | object | {} | 可选 | 视频参数 | -
>> video.title | string | - | - | 标题，用于无障碍读屏器，'.'&nbsp;表示停顿，输入&nbsp;'aaa.bbb'&nbsp;会朗读&nbsp;'aaa&nbsp;bbb&nbsp;视频' | -
>> video.src | string | - | - | 视频地址&nbsp;若不设置则只显示视频播放前的&nbsp;slot | -
>> video.thumb | string \| number | - | - | 描述图片右下角遮罩内自定义文案及数字，与duration互斥，优先显示showTxt | -
>> video.poster | string | - | - | 描述图片右下角遮罩内自定义icon图标 | -
>> video.icontype | string | - | - | 描述图片居中遮罩自定义icon,&nbsp;不传时，默认值为&nbsp;‘video_play3'&nbsp;默认值&nbsp;'video_play3' | -
>> video.icontxt | string | - | - | 描述图片居中遮罩自定义文案内容,&nbsp;与icontypeDefined只能出现一个，否则都显示，影响展现 | -
>> video.col | string \| number | - | - | 描述自定义小图栅格数&nbsp;默认值&nbsp;4 | -
>> video.imgType | string | - | - | 图片比例，默认为s，1:1&nbsp;默认值&nbsp;'s' | -
>> video.logo | string | - | - | 1:1小图下方的蒙层&nbsp;logo&nbsp;默认值&nbsp;'http://m.baidu.com/se/static/aladdin/bk_polysemy/miaodong-logo_d5aa8ae.png' | -
>> video.wait | boolean | - | - | 是否等待点击播放&nbsp;默认值&nbsp;false | -
>> video.zoom | boolean | - | - | 展开是否为图片放大（默认为图片不变&nbsp;框变大）&nbsp;默认值&nbsp;false | -
>> video.shift | boolean | - | - | 展开时右侧元素是否右移（默认下移）&nbsp;默认值&nbsp;false | -
>> video.vanish | boolean | - | - | 展开时下侧区域是否不显示（默认为&nbsp;false&nbsp;代表显示）&nbsp;默认值&nbsp;false | -
>> video.smallLogo | boolean | - | - | 右侧文字几行折断&nbsp;默认值&nbsp;4 | -
>> video.text | string | - | - | 右侧文字内容 | -
>> video.textColor | string | - | - | 右侧文字颜色&nbsp;默认值&nbsp;'#555' | -
>> video.textClamp | string | - | - | 右侧文字几行折断&nbsp;默认值&nbsp;4 | -
text | object | {} | 可选 | 右侧文本参数 | -
>> text.text | string | - | - | 右侧文字内容 | -
>> text.textColor | string | - | - | 右侧文字颜色&nbsp;默认值&nbsp;'#555' | -
>> text.textClamp | string | - | - | 右侧文字几行折断&nbsp;默认值&nbsp;4 | -

#### VideoThumbnail

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
img | string | - | 可选 | 图片地址 | -
imgType | string | - | 可选 | 图片比例，默认为y，3:2 | -
duration | string \| number | - | 可选 | 播放时长，单位：秒，最小长度1个字符&nbsp;最大长度10个字符 | -
icontypeDefined | string | video_play3 | 可选 | 描述图片居中遮罩自定义icon,&nbsp;不传时，默认值为&nbsp;‘video_play3' | -
icontxt | string | - | 可选 | 描述图片居中遮罩自定义文案内容,&nbsp;与icontypeDefined只能出现一个，否则都显示，影响展现 | -
showColDefined | string \| number | - | 可选 | 描述自定义图片栅格数，不传默认栅格数值为4 | -
showTxt | string \| number | - | 可选 | 描述图片右下角遮罩内自定义文案及数字，与duration互斥，优先显示showTxt | -
maskIconType | string | - | 可选 | 描述图片右下角遮罩内自定义icon图标 | -
defaultImageType | string | - | 可选 | 缺省图&加载图类型，具体可参考Image&nbsp;组件 | -
lazy | boolean | false | 可选 | 图片是否需要懒加载 | -
imgBorderRadius | object | - | 可选 | 圆角配置 | -
>> imgBorderRadius.tl | boolean | true | - | 左上角是否有圆角 | -
>> imgBorderRadius.tr | boolean | true | - | 右上角是否有圆角 | -
>> imgBorderRadius.bl | boolean | true | - | 左下角是否有圆角 | -
>> imgBorderRadius.br | boolean | true | - | 右下角是否有圆角 | -
>> imgBorderRadius.tlRadius | string | - | - | 左上角圆角半径值，默认为&nbsp;3px | -
>> imgBorderRadius.trRadius | string | - | - | 右上角圆角半径值，默认为&nbsp;3px | -
>> imgBorderRadius.blRadius | string | - | - | 左下角圆角半径值，默认为&nbsp;3px | -
>> imgBorderRadius.brRadius | string | - | - | 右下角圆角半径值，默认为&nbsp;3px | -

### Slots



名称 | 描述
--- | ---
default | 默认&nbsp;slot

#### VideoContent

名称 | 描述
--- | ---
player-front | 播放之前内容
player-end | 播放结束内容
player-right | 右侧区域

### Events

#### VideoContent


- **playEnd**: 播放结束事件
	无参数

- **playStart**: 开始播放事件
	无参数

- **shrink**: 点击收起事件
	无参数

- **expand**: 点击展开事件
	无参数



