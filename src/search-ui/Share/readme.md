---
name: Share
title: 分享组件
category: 交互类
owner: 姚昌，李宇航
---

## 使用场景

> 参考UE规范：[D21 【基础组件】-【分享】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Share.html)

## 示例

```atom 分享组件

<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-share
            :show="show"
            :use-popup="trans"
            :use-fusion="false"
            url="https://m.baidu.com"
            title="分享的标题"
            content="content"
            iconUrl="http://m.baidu.com/static/searchbox/po/act/avengers/wxshare.jpg"
            @close="close"
        />
        <c-row>
            <c-span>
                <c-btn
                    text="点我"
                    @click="shareShow(true)"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>


<script type="config">
    {
        data: {
            show: false,
            trans: true
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-share': 'search-ui/Share/Share',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            close () {
                this.show = false;
            },
            shareShow (trans) {
                this.trans = trans
                this.show = true
            }
        }
    };
</script>

```

## 注意事项

1. 截图分享相关
    - 1.1 结果页务必传递日志，不然无法统计，card页面自行统计；
    - 1.2 url必须传，直接获取url,会导致url过长，微博分享回流可能导致问题；
    - 1.3 card使用截屏功能时，调用.popup函数需传入card页面触发点击按钮的dom对象；
    - 1.4 截屏情况比较复杂，开发时请自行回归以下list —— i: 结果页，直接点击/打开sf后回退点击，!! card: 同步card / 异步card / card打开card回退后再打开；

2. 结果页日志采集相关
    - 2.1 日志采集仅在大搜结果页运行环境中生效，其它页面如果要发送日志，可以在回调函数shareclick里面自行实现；
    - 2.2 在大搜结果页环境下每个分享按钮点击均会发送tc交互日志，用以收集分享组件使用率；自定义日志内容可以通过上述的loginfo实现；
    - 2.3 自定义日志内容时，loginfo必须为json对象，且按照规范，需要传入clk_from: srcid标记该分享来源于哪个资源id，例如：{"clk_from":"16024"}；其它字段可自定义，注意key和value尽量简短；

3. 回流统计相关
    - 3.1 如果分享的是结果页m.baidu.com链接，统计回流用sa字段；
    - 3.2 如果分享的链接是tc链接m.baidu.com/xxxx/tc?xxx，统计回流用ct和cst，需要对分享出去的tc链接做处理，处理方法用大搜提供的公用方法；
    - 3.3 如果分享的是第三方链接，回流方式自行处理；

4. 更多详细文档，请参阅fusion组件[b-share](http://sfe.baidu.com:8123/doc/#b-share)

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
useFusion | boolean | true | 可选 | 是否使用老的fusion，注意！新增分享组件请务必设置此值为&nbsp;false | -
show | boolean | false | 可选 | 是否展示分享面板 | -
usePopup | boolean | true | 可选 | 直接展示分享面板(false)；用弹出框展示分享面板(true) | -
url | string |  | 可选 | 要分享的url | -
title | string |  | 可选 | 自定义的分享标题(QZONE&nbsp;网页版不支持) | -
content | string |  | 可选 | 自定义的分享内容 | -
type | string | url | 可选 | 分享类型：链接（url），图片（image），截图（screenshot） | -
iconUrl | string | https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg | 可选 | 自定义的分享内容 | -



### Events


- **catch**: 分享失败回调
	无参数

- **reslove**: 分享完成回调
	无参数

- **shareclick**: 点击分享面板上的按钮时触发

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 分享目标

- **close**: 关闭分享面板
	无参数



