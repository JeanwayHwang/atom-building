---
name: Sigma
title: sigma卡片框架
category: 框架类
owner: 王凯
---



## 示例

```atom 底部是sfLink的Sigma卡片

<template>
    <c-sigma 
        :footer-type="footerType" 
        :footer-text="footerText" 
        :footer-url="footerUrl" 
        :footer-url-params="footerUrlParams"
        :icon-type="iconType">
        <div class="c-row-tile">
            <div class="c-img" style="margin: 0; height: 95px; overflow: hidden;">
                <img :src="imgUrl" />
            </div>
        </div>
        <div class="c-line-clamp1">{{ subTitle }}</div>
        <div class="c-line-clamp2" a-html="content"></div>
    </c-sigma>
</template>

<script type="config">
    {
        data: {
            footerType: 'linkBar',
            footerText: '详细攻略',
            iconType: 'kg_right_arrow',
            footerUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2004%2Cta%40zbios_1_10.3_6_9.0%2Cvmgdb%400020100228y/baiduid=2E9312F189DAA886ABA90B444AF40469/w=0_10_/t=zbios/l=1/tc?ref=www_zbios&lid=8990704323068890403&order=1&fm=alop&tj=8uG_1_0_10_l16&w_qd=IlPT2AEptyoA_yk5w4Ud5OyuCCBVenm&sec=23451&di=227e1993ec6bcefa&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxCGZb8c3JV3T5ABfPNy6R2iv5nk_qva02EtAfEVX5QHqMIlX5gTGasAoDxiDcL6h8l1VOrhgxczF5lSjwdfaewMbTQdV0agAUOhOUHjIgl0vKjvBer12zQxRoRjQei3XliQIarsSobNAf7NaDhyz5vPzxYZT-ZJjP8Iv81WoSPyKcF28Ya1izmH5uKindUuShHo4UgSQUJCEOaBrh80YE1BXPingS0grxYQE_DEmDMW6CHrfh41jhxgDSZFMX5mE53XRR-kjiduL9FntOH1P1o_9lIc3SMxfPGTeKHqtCigG4JQcyI0LXnu6iRVx79Ex9Ai5YPvOjEYKGOZJYDOXii_y6Okkz5i_sDOvryG2sCcOj0dcCBh9OE89XnGvcrODCpSyhL0DFc2YLIbdnQi4ejUd2zEwwK6SjfULC-lEBgiHMM-j0QUCSNh_EL8lcyASKAwGMUByIZmBSjXzWhVvwfk8UINyDQ4O',
            footerUrlParams: {
                type: 'sf',
                sfUrl: '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=%E5%8C%97%E4%BA%AC&hide=1&apitn=tangram&top=%7B%22sfhs%22%3A2%7D&title=%E7%9B%AE%E7%9A%84%E5%9C%B0%E6%94%BB%E7%95%A5&city_name=%E5%8C%97%E4%BA%AC&lid=8990704323068890403&ms=1&frsrcid=32228&frorder=1'
            },
            imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2083708301,1139925455&fm=58',
            subTitle: '适宜季节：秋季最佳',
            content: '<em>新疆</em>维吾尔自治区位于中国西北边陲，是中国面积最大省级行政区。<em>新疆</em>的喀纳斯是集冰川、湖泊、森林、草原、牧场、河流、珍稀动植物于一体的综合景区。'
        },
        components: {
            "c-sigma": "search-ui/Sigma/Sigma"
        }
    }
</script>

```


## API：

### Props


| 名称 | 类型 | 默认值 | 必选 | 描述 |
| --- | --- | --- | --- | --- |
| footerType | string |  | 否 | 底部展现的类型 |
| footerText | string | | 否 | 底部文字 |
| footerUrl | string |  | 否 | 底部链接 |
| footerUrlParams | object |  | 否 | 底部链接参数 |
| footerUseDivider | boolean | false | 否 | 是否显示底部分割线 |
| hideFooter | boolean | false | 否 | 是否隐藏底部栏 |
| hideOtherResult | boolean | false | 否 | 是否隐藏其他结果 |
| iconType | string |  | 否 | 图标类型 |
| iconColor | string |  | 否 | 图标颜色 |

### Slots

| 名称 | 描述 |
| --- |   --- |
| default | 卡片内容区域 |

## Schema

```schema
{
    "type": "object",
    "properties": {
        "footerUrl": {
            "type": "string"
        },
        "footerText": {
            "type": "string"
        },
        "footerUrlParams": {
            "type": "Object",
            "properties": {
                "type": {
                    "type": "string",
                    "enum": ["sf", "mip"]
                },
                "sfUrl": {
                    "type": "string"
                },
                "options": {
                    "type": "string"
                }
            }
        },
        "footerUseDivider": {
            "type": "boolean"
        },
        "hideFooter": {
            "type": "boolean"
        },
        "hideOtherResult": {
            "type": "boolean"
        },
        "iconType": {
            "type": "string"
        },
        "iconColor": {
            "type": "string"
        }
    },
    "required": []
}
```
