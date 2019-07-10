---
name: TooltipFuncBtn
title: 功能按钮气泡弹层
category: 搜索业务
owner: 王凯
---

## 注意事项

1. 该组件被 KgHeader、Footer、Source 组件引用
2. 反馈是调起一个特定的反馈 sf 页面
3. 评价是跳转到一个普通 tc 链接
4. 分享是调起 search-ui 的 Share 分享组件

## 示例

```atom 功能按钮气泡弹层；支持反馈、评价、分享功能
<template>
    <c-aladdin>
        <c-tooltip-func-btn
            :feedback="feedbackContent"
            :evaluate="evaluate"
            :share-params="shareParams"
            class="func-btn"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        feedbackContent: {
            suggest: {
                is_show: 1,
                title: "您遇到了什么问题",
                feedback_type: "",
                content: {
                    "0": {
                        "appid": 219412,
                        "text": "内容不是最新的",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33945
                    },
                    "1": {
                        "appid": 219412,
                        "text": "内容中有错误信息",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33946
                    },
                    "2": {
                        "appid": 219412,
                        "text": "这条结果与搜索词无关",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33840
                    },
                    "3": {
                        "appid": 219412,
                        "text": "变形、错乱、乱码等问题",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29452
                    },
                    "4": {
                        "appid": 219412,
                        "text": "其他问题及建议",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29462,
                        "reason2": 30688
                    }
                }
            }
        },
        evaluate: {
            url: 'https://m.baidu.com',
            params: {
            }
        },
        shareParams: {
            url: 'https://m.baidu.com',
            title: '分享的标题',
            content: '分享的内容',
            iconUrl: 'http://m.baidu.com/static/searchbox/po/act/avengers/wxshare.jpg'
        }
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tooltip-func-btn': 'search-ui/TooltipFuncBtn/TooltipFuncBtn'
    }
}
</script>

<script>
export default {
    methods: {
    }
};
</script>

<style module lang="less">
</style>
```

```atom 普通卡片；（普通卡片不建议增加分享功能）
<template>
    <c-aladdin
        title="我是一张普通的阿拉丁卡片"
        show-left-text="脚注左侧文案"
        :feedback="feedbackContent"
        :evaluate="evaluate"
    >
        <div
            :style="{
                'height': '100px'
            }"
        >
            普通卡片的内容
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        feedbackContent: {
            suggest: {
                is_show: 1,
                title: "您遇到了什么问题",
                feedback_type: "",
                content: {
                    "0": {
                        "appid": 219412,
                        "text": "内容不是最新的",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33945
                    },
                    "1": {
                        "appid": 219412,
                        "text": "内容中有错误信息",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33946
                    },
                    "2": {
                        "appid": 219412,
                        "text": "这条结果与搜索词无关",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33840
                    },
                    "3": {
                        "appid": 219412,
                        "text": "变形、错乱、乱码等问题",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29452
                    },
                    "4": {
                        "appid": 219412,
                        "text": "其他问题及建议",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29462,
                        "reason2": 30688
                    }
                }
            }
        },
        evaluate: {
            url: 'https://m.baidu.com',
            params: {
            }
        }
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin'
    }
}
</script>

<script>
export default {
    methods: {
    }
};
</script>

<style module lang="less">
</style>
```

```atom 智库卡片
<template>
    <c-aladdin
        show-left-text="脚注左侧文案"
    >
        <c-kg-header
            :title="title"
            :url="url"
            :abstract="abstract"
            :tab-list="tabList"
            :feedback="feedbackContent"
            :evaluate="evaluate"
            :share-params="shareParams"
        />
        <div
            :style="{
                'height': '100px'
            }"
        >
            智库卡片的内容
        </div>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
        url: 'https://www.baidu.com',
        abstract: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
        tabList:[
            {
                txt: '导航项1'
            },
            {
                txt: '导航项2'
            },
            {
                txt: '导航项3'
            }
        ],
        feedbackContent: {
            suggest: {
                is_show: 1,
                title: "您遇到了什么问题",
                feedback_type: "",
                content: {
                    "0": {
                        "appid": 219412,
                        "text": "内容不是最新的",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33945
                    },
                    "1": {
                        "appid": 219412,
                        "text": "内容中有错误信息",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33946
                    },
                    "2": {
                        "appid": 219412,
                        "text": "这条结果与搜索词无关",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29456,
                        "reason2": 33840
                    },
                    "3": {
                        "appid": 219412,
                        "text": "变形、错乱、乱码等问题",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29452
                    },
                    "4": {
                        "appid": 219412,
                        "text": "其他问题及建议",
                        "emptyEnable": 0,
                        "contactRequire": 0,
                        "reason1": 29462,
                        "reason2": 30688
                    }
                }
            }
        },
        evaluate: {
            url: 'https://m.baidu.com',
            params: {
            }
        },
        shareParams: {
            url: 'https://m.baidu.com',
            title: '分享的标题',
            content: '分享的内容',
            iconUrl: 'http://m.baidu.com/static/searchbox/po/act/avengers/wxshare.jpg'
        }
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-kg-header': 'search-ui/KgHeader/KgHeader'
    }
}
</script>

<script>
export default {
    methods: {
    }
};
</script>

<style module lang="less">
</style>
```
## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
size | string | small | 可选 | 圆形按钮的大小；'small'（小），'large'（大） | -
feedback | object | - | 可选 | 反馈参数；详情请参考：[Atom&nbsp;卡片反馈功能开发规范](http://sfe.baidu.com:8188/standard/feedback.md) | -
evaluate | object | {"url":"","params":null} | 可选 | 评价数据 | -
>> evaluate.url | string | - | - | 评价跳转链接 | -
>> evaluate.params | object | - | - | 评价跳转链接的&nbsp;urlParams | -
shareParams | object | - | 可选 | 分享参数；详情请参考：[Share&nbsp;分享组件](http://soy.baidu-int.com/component/Share) | -
triangleColor | string | #fff | 可选 | 三角形颜色 | -
circleColor | string | #e5e5e5 | 可选 | 圆形颜色 | -






