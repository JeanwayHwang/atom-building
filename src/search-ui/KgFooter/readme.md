---
name: KgFooter
title: KG底部组件
category: 框架类
owner: 王凯
---

## 使用场景

> 参考UE规范：[F4 【智库规范】-【更多操作】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Result_CardStructure.html)

## 示例

```atom KG底部
<template>
    <c-aladdin>
        <c-kg-footer
            :text="text"
            :url="url"
            :urlParams="params"
            :iconType="iconType"
            :textColor="textColor"
            :iconColor="iconColor"
        />
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            text: '查看更多',
            params:{
                type:'normal',
                sfUrl:'',
                options:''
            },
            iconType: 'kg_right_arrow',
            textColor: '#000',
            iconColor: '#000'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-kg-footer': 'search-ui/KgFooter/KgFooter'
        }
    }
</config>
```

```atom KG底部 通过 urlParams 传递 url
<template>
    <c-aladdin>
        <c-kg-footer
            :text="text"
            :url="url"
            :urlParams="params"
            :iconType="iconType"
            :textColor="textColor"
            :iconColor="iconColor"
        />
    </c-aladdin>
</template>

<config>
    {
        data: {
            text: '查看更多',
            params:{
                tcUrl: 'https://www.baidu.com',
                type:'normal',
                sfUrl:'',
                options:''
            },
            iconType: 'kg_right_arrow',
            textColor: '#000',
            iconColor: '#000'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-kg-footer': 'search-ui/KgFooter/KgFooter'
        }
    }
</config>
```

```atom 增加反馈入口
<template>
    <c-aladdin>
        <c-kg-footer
            :text="text"
            :url="url"
            :urlParams="params"
            :iconType="iconType"
            :textColor="textColor"
            :iconColor="iconColor"
            :feedback="feedbackContent"
            @feedbackclick="handleFeedbackClick"
        />
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            text: '查看更多',
            params:{
                type:'normal',
                sfUrl:'',
                options:''
            },
            iconType: 'kg_right_arrow',
            textColor: '#000',
            iconColor: '#000',
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
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-kg-footer': 'search-ui/KgFooter/KgFooter'
        }
    }
</config>

<script>
    export default {
        methods: {
            handleFeedbackClick(obj) {
                console.log('handleFeedbackClick obj', obj);
            }
        }
    };
</script>
```

```atom KG底部；修改背景色，修改上下边线
<template>
    <c-aladdin>
        <c-kg-footer
            :text="text"
            :url="url"
            :urlParams="params"
            :iconType="iconType"
            :textColor="textColor"
            :iconColor="iconColor"
            background-color="#02b7ca"
            border-top="1px solid #000"
            border-bottom="1px solid #000"
        />
    </c-aladdin>
</template>

<config>
    {
        data: {
            url: 'https://www.baidu.com',
            text: '查看更多',
            params:{
                type:'normal',
                sfUrl:'',
                options:''
            },
            iconType: 'kg_right_arrow',
            textColor: '#000',
            iconColor: '#000'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-kg-footer': 'search-ui/KgFooter/KgFooter'
        }
    }
</config>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
text | string | 查看更多 | 可选 | 底部按钮的文案 | -
url | string | - | 可选 | 底部链接地址 | -
urlParams | object | - | 可选 | 底部链接需要的参数 | See [Link](./Link#API) `params`
iconType | string | kg_right_arrow | 可选 | 底部按钮类型 | -
textColor | string | #000 | 可选 | 底部文案的颜色 | -
iconColor | string | #000 | 可选 | 底部按钮的颜色 | -
feedback | object | - | 可选 | 反馈内容数据，用于控制是否展现反馈按钮及反馈内容 | -
backgroundColor | string | #f8f8f8 | 可选 | 背景色 | -
borderTop | string | 1px solid #eee | 可选 | 顶部边线样式 | -
borderBottom | string | 1px solid #e1e1e1 | 可选 | 底部边线样式 | -



### Events


- **feedbackclick**: 反馈按钮点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件参数
  ${param1}.event | Event | 透传的事件
  ${param1}.feedback | object | 反馈数据



