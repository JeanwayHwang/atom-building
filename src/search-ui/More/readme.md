---
name: More
title: 查看更多组件
category: 展示元素类
owner: 陈骁
---

## 使用场景

> 参考UE规范：[【D12 基础组件】-【橫滑】](http://sfe.baidu.com:8186/ue-guide/scroll.html)

## 示例

```atom 查看更多

<template>
    <div class="c-container">
        <c-more
            :url="url"
            :params="params"
            :text="text"
            inline
            @showMore="selfShowMore"
        />
    </div>
</template>

<script type="config">
    {
        components: {
            'c-more': 'search-ui/More/More',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        },
        data: {
            url: 'http://m.baidu.com/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
            params: {
                type: 'sf',
                sfUrl: '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                options: '{"view":{"_hold":2}}'
            },
            text: '查看更多'
        }
    }
</script>

<script>
    export default {
        methods: {
            selfShowMore() {
                console.log('selfshowmore');
            }
        }
    }
</script>


```

## API：

### Props

| 名称 | 类型 | 默认值 | 必选 | 描述 |
| --- | --- | --- | --- | --- |
| inline | boolean | false | 否 | 是否使用非绝对定位样式 请务必设置该值为 `true`! 后续可能不再支持该值为 false 的情况 |
| url | string | | 否 | 链接地址，a 标签元素，若为空，则输出的是一个 div |
| params | Object | | 否 | 链接所带的参数，可参考 `Link` 组件 |
| text | string | '查看更多' | 否 | 查看更多文案 |


### Event

| 名称       |  描述    | 参数          |
|-----------|----------|--------------|
| showMore  |点击后触发  |  无   |

### Schema
```schema
{
    "type": "object",
    "properties": {
        "url": {
            "type": "string"
        },
        "params": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string",
                    "enum": ["sf", "normal"]
                },
                "sfUrl": {
                    "type": "string"
                },
                "options": {
                    "type": "string"
                }
            }
        },
        "text": {
            "type": "string"
        }
    }
}
```
