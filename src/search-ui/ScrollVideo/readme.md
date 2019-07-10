---
name: ScrollVideo
title: 视频横滑列表
category: 视频类
owner: 王凯
---

## 使用场景

> 参考UE规范：[D12 【基础组件】-【橫滑】](http://sfe.baidu.com:8186/ue-guide/scroll.html)


## 示例

```atom 视频横滑列表，自定义配置，col字段控制展示所占栅格
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-video
            :video="video"
            :col="6"
            :showConfig="showConfig"
            :moreInfo="moreInfo"
            @showMore="selfShowMore"
            @scrollEnd="selfScrollEnd"
            @itemclick="handleItemClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-scroll-video': 'search-ui/ScrollVideo/ScrollVideo',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
        },
        data: {
            video: [
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多",
                    labelFront: '标签',
                    labelFrontType: 'box_red'
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高两行定高两行定高两行定高两行定高两行定高两行",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                }
            ],
            showConfig: {
                imgType: 'y',
                iconType: 'video_play3',
                col: '12',
                titleClamp: 2,
                titleFixHeight: true
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
            },
            handleItemClick(obj) {
                console.log('handleItemClick', obj);
            }
        }
    }
</script>
```

```atom 视频横滑列表，默认配置
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-video
            :video="video"
            :more-info="moreInfo"
            :showConfig="showConfig"
            @showMore="selfShowMore"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-scroll-video': 'search-ui/ScrollVideo/ScrollVideo',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
        },
        data: {
            video: [
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "单行单行单行单行单行单行单行单行单行单行单行单行单行单行",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "22梁静茹睽违三年再踏红馆,重唱情歌感触多",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "33梁静茹睽违三年再踏红馆,重唱情歌感触多",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "44梁静茹睽违三年再踏红馆,重唱情歌感触多",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "55梁静茹睽违三年再踏红馆,重唱情歌感触多",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                }
            ],
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

```atom 视频横滑列表，showConfig控制各种展现配置
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-video
            :video= "video"
            :showConfig= "showConfig"
            @showMore= "selfShowMore"
            @scrollEnd= "selfScrollEnd"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-scroll-video': 'search-ui/ScrollVideo/ScrollVideo',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
        },
        data: {
            video: [
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行不定高两行不定高两行不定高两行不定高两行不定高两行不定高两行不定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行不定高两行不定高两行",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "33两行不定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "44两行不定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "55两行不定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                }
            ],
            showConfig: {
                imgType: 'y',
                col: '5',
                titleClamp: 2,
                titleFixHeight: false
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

```atom 视频横滑列表，自定义配置，支持两行来源显示，infoLine字段控制
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-video
            :video="video"
            :col="6"
            :showConfig="showConfig"
            :moreInfo="moreInfo"
            @showMore="selfShowMore"
            @scrollEnd="selfScrollEnd"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-scroll-video': 'search-ui/ScrollVideo/ScrollVideo',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
        },
        data: {
            video: [
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高两行定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多",
                    labelFront: '标签',
                    labelFrontType: 'box_red'
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高两行定高两行定高两行定高两行定高两行定高两行",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    title: "两行定高",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                }
            ],
            showConfig: {
                imgType: 'y',
                iconType: 'video_play3',
                col: '12',
                titleClamp: 2,
                infoLine: 2,
                titleFixHeight: true
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

```atom 传入缺省图
```atom 视频横滑列表，自定义配置，col字段控制展示所占栅格
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll-video
            :video="video"
            :col="6"
            :showConfig="showConfig"
            :moreInfo="moreInfo"
            @showMore="selfShowMore"
            @scrollEnd="selfScrollEnd"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-scroll-video': 'search-ui/ScrollVideo/ScrollVideo',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
        },
        data: {
            video: [
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    defaultImageType: "app",
                    title: "传入缺省图传入缺省图传入缺省图传入缺省图传入缺省图传入缺省图传入缺省图传入缺省图传入缺省图传入缺省图",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多",
                    labelFront: '标签',
                    labelFrontType: 'box_red'
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    defaultImageType: "finance",
                    title: "两行定高两行定高两行定高两行定高两行定高两行定高两行",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    defaultImageType: "food",
                    title: "两行定高",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    defaultImageType: "hotel",
                    title: "两行定高",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                },
                {
                    url: "https://www.baidu.com/ssid=c301b4f3c9b5b9cfd2bbbac57107/from=844b/s?word=%E6%9E%97%E6%9B%B4%E6%96%B0&ts=5942717&t_kt=0&ie=utf-8&fm_kl=021394be2f&rsv_iqid=1448671474-3&rsv_t=3c72yijFp6fbQM%252BdJoNGteI%252FJLbOTpCKuKWxzGqCGuUE0QEXUEYcr1YYAw&sa=ib&tn=zbios&ms=1&rsv_pq=1448671474&rsv_sug4=5193&ss=101&inputT=1575",
                    defaultImageType: "learn",
                    title: "两行定高",
                    source: "凤凰视频",
                    duration: "78",
                    pubtime: 1503314822000,
                    playtime: "78",
                    score: "20.731828689575",
                    text: "梁静茹睽违三年再踏红馆,重唱情歌感触多"
                }
            ],
            showConfig: {
                imgType: 'y',
                iconType: 'video_play3',
                col: '12',
                titleClamp: 2,
                titleFixHeight: true
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

```atom 卡片示例
<template>
    <c-aladdin
        touchable
        title="绝地求生 - 视频">
        <c-scroll-video
            :video="video"
            :showConfig="showConfig"
            :more-info="moreInfo"
            @showMore="selfShowMore"
            @scrollEnd="selfScrollEnd"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            video: [
                {
                    title: "绝地求生：大逃杀搞笑视频二十六",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "好看视频",
                    duration: "78",
                    playtime: "1.6万",
                },
                {
                    title: "绝地求生大逃杀视频解说各种杀各种死",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "新蓝网",
                    duration: "83",
                    playtime: "1.5万",
                },
                {
                    title: "绝地求生欢乐史诗时刻",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "好看视频",
                    duration: "558",
                    playtime: "1.1万",
                },
                {
                    title: "绝地求生大逃杀搞笑视频抱歉老铁我没子弹了",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "好看视频",
                    duration: "57",
                    playtime: "378",
                },
                {
                    title: "【游戏】绝地求生【吃鸡视频】：绝地求生大逃杀",
                    poster: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg",
                    source: "好看视频",
                    duration: "1841",
                    playtime: "1.1万",
                },
            ],
            showConfig: {
                imgType: 'y',
                col: '6',
                titleClamp: 2,
                titleFixHeight: false
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
        },
        components: {
            'c-scroll-video': 'search-ui/ScrollVideo/ScrollVideo',
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
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

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
video | array | - | 可选 | 视频数据数组 | -
>> video[].url | string | - | - | 跳转链接 | -
>> video[].title | string | - | - | 标题，最小长度1个字符&nbsp;最大长度200个字符 | -
>> video[].poster | string | - | - | 图片缩略图地址，最小长度1个字符&nbsp;最大长度1024个字符 | -
>> video[].source | number | - | - | 来源，最小长度1个字符&nbsp;最大长度100个字符 | -
>> video[].duration | number | - | - | 播放时长，单位：秒，最小长度1个字符&nbsp;最大长度10个字符 | -
>> video[].pubtime | number | - | - | 发布时间，标准时间戳，最小长度1个字符&nbsp;最大长度10个字符 | -
>> video[].playtime | number | - | - | 播放次数，最小值为（包含）0，最大值为（包含）99999999 | -
>> video[].score | number | - | - | 评分 | -
>> video[].labelFront | string | - | - | 标题左侧标签文案 | -
>> video[].labelFrontType | string | - | - | 标题前的标签类型，可参考Label组件 | -
>> video[].defaultImageType | string | - | - | 缺省图&加载图类型，具体可参考&nbsp;[Image&nbsp;组件](http://sfe.baidu.com:8184/Image) | -
showConfig | object | - | 可选 | 展现配置 | -
>> showConfig.imgType | string | 'y' | - | 图片比例 | -
>> showConfig.iconType | string | 'video_play3' | - | 右下角遮罩显示的图标 | -
>> showConfig.col | string | 4 | - | 图片所占栅格 | -
>> showConfig.titleClamp | number | 1 | - | 标题截断 | -
>> showConfig.infoLine | number | 1 | - | 来源信息，可选，默认为1行展现，2为两行展现，有效值1或2 | -
>> showConfig.titleFixHeight | boolean | - | - | 标题是否定高，如果定高，会按字体大小和&nbsp;`titleClamp`&nbsp;计算高度 | -
moreInfo | object | - | 可选 | 查看更多配置 | -
>> moreInfo.url | string | - | - | 链接 | -
>> moreInfo.params | string | - | - | 链接参数对象 | -
>> moreInfo.text | string | '查看更多' | - | 查看更多文案 | -
col | number | - | 可选 | 图片栅格；这里尽量用&nbsp;showConfig.col&nbsp;来配置，这里仅仅是为了兼容已使用的模板 | -



### Events


- **itemclick**: 项点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 参数对象
  ${param1}.item | object | 点击项数据对象
  ${param1}.index | object | 点击项的索引

- **scrollEnd**: 滑动结束后触发
	无参数

- **showMore**: 当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件
	无参数



