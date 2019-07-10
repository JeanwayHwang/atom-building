---
name: Audio
title: 音频播放
category: 交互类
owner: 王凯
---

## 注意事项

1. 音频组件使用了百度搜索结果页音频统一处理JS库，页面只生成一个Audio DOM元素，统一处理音频的生命周期。接口人 `@meixuguang`

## 示例

```atom 默认
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-row>
            <c-span col='12'>
                <c-audio
                    :time="time"
                    :audioUrl="audioUrl"
                >
                </c-audio>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-audio': 'search-ui/Audio/Audio'
        },
        data: {
            time: 85,
            audioUrl: 'https://ss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/v1/vs-resource/md_151669690339bkwb.mp3'
        }
    }
</config>
```

```atom 改颜色；加边线
<template>
    <c-aladdin
        style="background-color:#eee"
        touchable
        title="整卡可点的 Aladdin 卡"
    >
        <c-row>
            <c-span col='12'>
                <c-audio
                    :time="time"
                    :audio-url="audioUrl"
                    icon-color="red"
                    text-color="green"
                    time-color="blue"
                    background-color="#fff"
                    border="1px solid #555"
                >
                </c-audio>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-audio': 'search-ui/Audio/Audio'
        },
        data: {
            time: 85,
            audioUrl: 'https://ss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/v1/vs-resource/md_151669690339bkwb.mp3'
        }
    }
</config>
```

```atom 可暂停继续，进度条样式，不显示时间
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <div class="c-audio-demo1">
            <c-audio
                :audioUrl="audioUrl"
                :time="time"
                :isProgress="isProgress"
                :showTime="showTime"
                @play="onPlay"
            >
            </c-audio>
        </div>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-audio': 'search-ui/Audio/Audio'
        },
        data: {
            audioUrl:'https://ss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/v1/vs-resource/md_151669690339bkwb.mp3',
            isProgress: true,
            time: 85,
            showTime: false
        }
    }
</config>

<script>
    export default {
        methods: {
            onPlay(e) {
                console.log(e);
            }
        }
    };
</script>
```


```atom 可暂停继续，进度条样式，显示时间
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <div class="c-audio-demo1">
            <c-audio
                :audioUrl="audioUrl"
                :time="time"
                :isProgress="isProgress"
            >
            </c-audio>
        </div>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-audio': 'search-ui/Audio/Audio'
        },
        data: {
            audioUrl: 'https://ss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/v1/vs-resource/md_151669690339bkwb.mp3',
            isProgress: true,
            time: 85
        }
    }
</config>
```

```atom 12n 截断
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-row>
            <c-span col='12' class="c-line-clamp1">
                <c-audio
                    :audioUrl="audioUrl"
                    :isProgress=true
                    :time="time"
                    :customText="customText"
                >
                </c-audio>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-audio': 'search-ui/Audio/Audio'
        },
        data: {
            audioUrl: 'https://ss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/v1/vs-resource/md_151669690339bkwb.mp3',
            time: 85,
            customText : '为了确保时间字段的保留，12n超长截断，文案如果超过最大栅格将被截断。'
        }
    }
</config>
```

```atom 跳转播放
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-row>
            <c-span col='12'>
                <c-audio
                    :customText="customText"
                    :isJump="isJump"
                    :url="url"
                >
                </c-audio>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-audio': 'search-ui/Audio/Audio'
        },
        data: {
            customText : '跳转播放',
            isJump: true,
            url: 'http://www.baidu.com'
        }
    }
</config>
```


```atom 特殊气泡样式
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-row
            :style="{
                'align-items': 'center'
            }"
            class="c-audio-special"
        >
            <c-span col='12' class="c-line-clamp1">
                <c-audio
                    :audioUrl="audioUrl"
                    :isProgress=true
                    :time="time"
                    :customText="customText"
                    :isOpacity=true
                >
                </c-audio>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-audio': 'search-ui/Audio/Audio'
        },
        data: {
            audioUrl: 'https://ss0.baidu.com/9rkZbzqaKgQUohGko9WTAnF6hhy/v1/vs-resource/md_151669690339bkwb.mp3',
            time: 85,
            customText: '特殊的气泡样式'
        }
    }
</config>

<style>
.c-audio-special {
    display: flex;
    height: 100px;
    background-color: #ea6f5a;
    align-items: center;
}
</style>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
audioUrl | string | - | 可选 | 音频地址 | -
isOpacity | boolean | false | 可选 | 是否使用透明背景；透明背景不能加边框 | -
isProgress | boolean | true | 可选 | 是否使用进度条样式，默认开启 | -
time | number \| string | - | 可选 | 音频时长 | -
showTime | boolean | true | 可选 | 是否显示时间，默认显示 | -
customText | string | - | 可选 | 是否使用自定义显示文案 | -
url | string | - | 可选 | 跳转链接（不播放音频，直接跳转） | -
params | object | - | 可选 | 跳转链接参数 | See [Link](./Link#API)
iconColor | string | - | 可选 | 图标颜色 | -
textColor | string | - | 可选 | 文案颜色 | -
timeColor | string | - | 可选 | 时间颜色 | -
backgroundColor | string | #f5f5f5 | 可选 | 背景颜色 | -
activeBackgroundColor | string | #ebebeb | 可选 | 点击态背景色 | -
progressColor | string | rgba(0,0,0,.03) | 可选 | 进度条颜色 | -
border | string | - | 可选 | 边线 | -



### Events


- **play**: 播放状态更新事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件对象
  ${param1}.status | string | 音频的状态,&nbsp;PLAYING&nbsp;(正在播放)，PAUSE&nbsp;(暂停)，ENDED&nbsp;(播放结束)，TIME_UPDATE&nbsp;(时间更新)



