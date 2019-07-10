---
name: Link
title: 跳转链接
category: 展示元素类
owner: 陈骁
---

## 使用场景

一个跳转链接组件，支持普通链接和 sf 链接

## 注意事项

1. 如果url或者params.tcUrl不为空，则该组件展示为 a 元素；否则，展示的是一个 div 元素
2. 如果传了params参数，那么可以不传url参数（因为params中包含了tcUrl）；
3. 推荐只传params，不传url；
4. params参数中的各个属性对于开发者是透明的，透传即可；
5. 默认是一个块级元素
6. 调起小程序需要当前页面是百度域
7. 调起小程序需要传入的参数示例如下：
``` javascript
// 调起小程序所需的参数
params.options = {
    xcxAppKey: 'flFqXclepWs7RdugAszy9eERL7G5dS0I',
    xcxPath: 'pages/pb/pb',
    xcxQuery: 'tid=5698572052',
    xcxFrom: '1081000810003000',
    xcxExt: {},
    xcxUrl: 'http://smartapps-tieba.baidu.com/pages/pb/pb?tid=5698572052'
};

// 结果页小程序日志打点需要
params.clickData = JSON.stringify({
    'clk_info': {
        'type': 'xcx',
        'xcx_id': 'flFqXclepWs7RdugAszy9eERL7G5dS0I',
        'xcx_path': 'pages/pb/pb',
        'xcx_from': '1081000810003000'
    },
    'cyc': 1
});

// 情景页小程序日志打点需要
params.log = JSON.stringify({
    'type': 'xcx',
    'xcx_id': 'flFqXclepWs7RdugAszy9eERL7G5dS0I',
    'xcx_path': 'pages/pb/pb',
    'xcx_from': '1081000810003000',
    'c': 1
});

params.originUrl = 'https://m.baidu.com';
```


## 示例

```atom 普通链接
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-link :params="params">
            百度搜索风云榜
        </c-link>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-link': 'search-ui/Link/Link'
        }
    }
</script>
```

```atom sf 链接
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-link :params="params">
            北京旅游
        </c-link>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            params: {
                type: 'sf',
                tcUrl: 'http://m.baidu.com/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                sfUrl: '/sf?openapi=1&dspName=iphone&from_sf=1&pd=city&resource_id=4324&ms=1&word=北京&hide=1&apitn=tangram&city_name=北京&title=目的地攻略&frsrcid=32228&frorder=1&lid=14083498517280765985',
                options: '{"view":{"_hold":2}}',
                clickData: '{"clk_info":{"extra":"iamextra"}}'
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-link': 'search-ui/Link/Link'
        }
    }
</script>
```

```atom mip链接
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-link :params="params">
            孕两个多月感冒了，怎么办？
        </c-link>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            params: {
                type: 'sf',
                tcUrl: 'http://m.baidu.com/from=0/ssid=0/uid=0/bd_page_type=1/pu=usm%400%2Csz%401320_2001%2Cta%40qbase_1_10.3_3_602/baiduid=F52E0A4056D9D7CCA972D545F9F2466E/w=0_10_%E6%80%80%E5%AD%95%E6%84%9F%E5%86%92%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E/t=iphone/l=1/tc?isAtom=1&order=2&ref=www_iphone&lid=8680140495132181512&fm=alop&clk_info=%7B%22referlid%22%3A%228680140495132181512%22%2C%22applid%22%3A%226120146931418489291%22%2C%22apptpl%22%3A%22normal%22%2C%22frsrcid%22%3A%224770%22%2C%22frorder%22%3A%222%22%7D&module=sf&tcplug=1&src=https%3A%2F%2Fm.baidu.com%2Fmip%2Fc%2Fs%2Fm.chunyuyisheng.com%2Fmip%2Fqa%2FxJ8ChwwTvWbfQDaBCXAVeA%2F&tj=4434_1_0_10_l8',
                sfUrl: '/mip/c/s/m.chunyuyisheng.com/mip/qa/xJ8ChwwTvWbfQDaBCXAVeA/',
                options: '{"title":"春雨医生","lid":"8680140495132181512","mipCustomHash":"%23word%3D%E6%80%80%E5%AD%95%E6%84%9F%E5%86%92%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E%26lid%3D8680140495132181512%26srcid%3D4434%26mipanchor%3D"}'
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-link': 'search-ui/Link/Link'
        }
    }
</script>
```

```atom 自然结果链接
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-link :params="params">
            自然结果链接
        </c-link>
    </c-aladdin>
</template>
<script type="config">
    {
        data: {
            params: {
                type: 'sf',
                tcUrl: 'http://m.baidu.com/from=0/ssid=0/uid=0/bd_page_type=1/pu=usm%400%2Csz%401320_2001%2Cta%40qbase_1_10.3_3_602/baiduid=F52E0A4056D9D7CCA972D545F9F2466E/w=0_10_%E6%80%80%E5%AD%95%E6%84%9F%E5%86%92%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E/t=iphone/l=1/tc?isAtom=1&order=2&ref=www_iphone&lid=8680140495132181512&fm=alop&clk_info=%7B%22referlid%22%3A%228680140495132181512%22%2C%22applid%22%3A%226120146931418489291%22%2C%22apptpl%22%3A%22normal%22%2C%22frsrcid%22%3A%224770%22%2C%22frorder%22%3A%222%22%7D&module=sf&tcplug=1&src=https%3A%2F%2Fm.baidu.com%2Fmip%2Fc%2Fs%2Fm.chunyuyisheng.com%2Fmip%2Fqa%2FxJ8ChwwTvWbfQDaBCXAVeA%2F&tj=4434_1_0_10_l8',
                rtDisable: true,
                fastUrl: 'fastUrl'
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-link': 'search-ui/Link/Link'
        }
    }
</script>
```

```atom 调起小程序
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-link :params="params">
            调起小程序
        </c-link>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            params: {
                type: 'xcx',
                options: {
                    xcxAppKey: 'flFqXclepWs7RdugAszy9eERL7G5dS0I',
                    xcxPath: '/pages/pb/pb',
                    xcxQuery: 'tid=5698572052',
                    xcxFrom: '1081000810003000',
                    xcxExt: {},
                    xcxUrl: 'http://smartapps-tieba.baidu.com/pages/pb/pb?tid=5698572052'
                },
                clickData: "{\"clk_info\":{\"type\":\"xcx\",\"xcx_id\":\"flFqXclepWs7RdugAszy9eERL7G5dS0I\",\"xcx_path\":\"/pages/pb/pb\",\"xcx_from\":\"1081000810003000\"},\"cyc\":1}",
                tcUrl: 'http://m.baidu.com/from=0/ssid=0/uid=0/bd_page_type=1/pu=usm%400%2Csz%401320_2001%2Cta%40qbase_1_10.3_3_602/baiduid=F52E0A4056D9D7CCA972D545F9F2466E/w=0_10_%E6%80%80%E5%AD%95%E6%84%9F%E5%86%92%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E/t=iphone/l=1/tc?isAtom=1&order=2&ref=www_iphone&lid=8680140495132181512&fm=alop&clk_info=%7B%22referlid%22%3A%228680140495132181512%22%2C%22applid%22%3A%226120146931418489291%22%2C%22apptpl%22%3A%22normal%22%2C%22frsrcid%22%3A%224770%22%2C%22frorder%22%3A%222%22%7D&module=sf&tcplug=1&src=https%3A%2F%2Fm.baidu.com%2Fmip%2Fc%2Fs%2Fm.chunyuyisheng.com%2Fmip%2Fqa%2FxJ8ChwwTvWbfQDaBCXAVeA%2F&tj=4434_1_0_10_l8',
                originUrl: 'http://m.baidu.com'
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-link': 'search-ui/Link/Link'
        }
    }
</script>
```

```atom 设置 target
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-link
            :params="params"
            target="_blank"
        >
            设置 target
        </c-link>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-link': 'search-ui/Link/Link'
        }
    }
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string \| object | - | 可选 | 链接的地址 | -
params | string \| object | - | 可选 | 链接所需参数 | -
>> params.type | 'tc' \| 'sf' \| 'xcx' \| 'easybrowse' | - | - | 链接的类型，tc&nbsp;表示普通的tc跳转，sf&nbsp;表示跳转到情景页，xcx&nbsp;表示调起小程序, easybrowse&nbsp;表示打开轻浏览框架 | -
>> params.tcUrl | string | - | - | tc&nbsp;链接 | -
>> params.sfUrl | string | - | - | sf&nbsp;链接 | -
>> params.options | string | - | - | 当&nbsp;type&nbsp;是&nbsp;sf&nbsp;时表示`data-sf-options`所需的&nbsp;json&nbsp;类型配置，当&nbsp;type&nbsp;是&nbsp;xcx&nbsp;时表示调起小程序所需的参数, 当&nbsp;type&nbsp;是&nbsp;easybrowse&nbsp;时表示打开轻浏览框架所需的参数 | -
>> params.originUrl | string | - | - | `data-url`&nbsp;所需的原链接；当&nbsp;type&nbsp;是&nbsp;xcx&nbsp;时也需要传入，作为调起小程序失败时的兜底进行跳转 | -
>> params.log | string | - | - | `data-log`&nbsp;所需的&nbsp;json&nbsp;类型配置；当&nbsp;type&nbsp;是&nbsp;xcx&nbsp;时也需要传入，小程序打点统计使用 | -
>> params.clickData | string | - | - | `data-click`&nbsp;所需的&nbsp;json&nbsp;类型配置，异步拼接sf链接的时候产生该数据；当&nbsp;type&nbsp;是&nbsp;xcx&nbsp;时也需要传入，小程序打点统计使用 | -
>> params.tcRedirect | number | - | - | `data-tc-redirect`&nbsp;所需的配置数据，决定tc链接是否通过服务端重定向（302）的方式来跳转，如果是的话需要将此字段设为：1；tc链接默认是通过前端js重定向的方式跳转的 | -
>> params.rtDisable | boolean | - | - | 是否禁止&nbsp;sf&nbsp;跳转&nbsp;(@yangjun14)，用于&nbsp;html&nbsp;标签里的&nbsp;`rt-disable`&nbsp;属性 | -
>> params.fastUrl | string | - | - | 点出加速属性，如果有这个属性就走手百点出加速逻辑（只在手百环境下生效），即直接跳落地页不用&nbsp;tc&nbsp;链接重定向（@zhangzhiqiang04），用于&nbsp;html&nbsp;标签里的&nbsp;`origin-url`&nbsp;属性；（这里不使用&nbsp;originUrl&nbsp;作为字段名，是因为&nbsp;originUrl&nbsp;已经被&nbsp;`data-url`&nbsp;属性使用了） | -
visited | boolean | false | 可选 | 链接是否点击后变灰 | -
target | string | _blank | 可选 | 链接标签的&nbsp;target&nbsp;属性，pc&nbsp;上生效 | -

### Slots



名称 | 描述
--- | ---
default | 跳转区域内容，注意&nbsp;`a`&nbsp;标签不能嵌套

### Events


- **title-click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传事件对象



### Methods
无
