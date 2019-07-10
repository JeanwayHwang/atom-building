---
name: Button
title: 按钮
category: 基础组件
owner: 陈骁
---

## 使用场景

> 参考UE规范：[D3 【基础组件】-【按钮】](http://sfe.baidu.com:8186/ue-guide/button.html)

## 注意事项

1. 按钮自带上下 5px 的间距

## 示例

```atom 不同类型222
<template>
    <c-aladdin touchable>
        <c-row>
            <c-span col="6">
                <c-btn
                    type="primary"
                    text="主要按钮abc"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span col="6">
                <c-btn
                    text="默认按钮"
                />
            </c-span>
        </c-row>
        <c-row
            :style="{
                'background-color': '#f1f1f1'
            }"
            class="c-gap-top-small c-gap-bottom-small"
        >
            <c-span col="6">
                <c-btn
                    type="weak"
                    text="白底按钮"
                />
            </c-span>
        </c-row>
        <c-row
            :style="{
                'background-color': '#f1f1f1'
            }"
            class="c-gap-top-small c-gap-bottom-small"
        >
            <c-span col="6">
                <c-btn
                    type="weak_auto"
                    text="白底按钮自适应"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            onClick() {
            }
        }
    };
</script>
```

```atom 增加图标
<template>
    <c-aladdin touchable>
        <c-row>
            <c-span col="6">
                <c-btn
                    icon="baidu"
                    text="主要按钮"
                    type="primary"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span col="6">
                <c-btn
                    icon="baidu"
                    text="默认按钮"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span col="6">
                <c-btn
                    icon-class="zw-fonticon"
                    icon-code="&#xe638;"
                    text="使用业务图标"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-img': 'search-ui/Image/Image',
            'c-line': 'search-ui/Line/Line',
            'c-stars': 'search-ui/Stars/Stars',
            'c-label':'search-ui/Label/Label'
        }
    }
</script>

<script>
    export default {
        methods: {
            onClick() {
            }
        }
    };
</script>

<!-- 注意：这里如果用业务图标的话，不可以用 scoped 或者 module 限制作用域 -->
<style lang="less">
@font-face {
    font-family: "city-service-cicons";
    src: url(/static/app/city_service/icon/iconfont.eot);
    // 这里的路径最好换成相对路径，aladdin-atom 代码库会自动生成 hash 值；这里为了示例效果将 .woff2 文件改为了线上绝对路径
    src: url(/static/app/city_service/icon/iconfont.eot#iefix) format("embedded-opentype"),
        url(//m.baidu.com/se/static/ala_atom/app/city_service/icon/iconfont_669ba91.woff2) format("woff2"),
        url(/static/app/city_service/icon/iconfont.woff) format("woff"),
        url(/static/app/city_service/icon/iconfont.ttf) format("truetype"),
        url(/static/app/city_service/icon/iconfont.svg?#cicons) format("svg");
    font-weight: normal;
    font-style: normal;
}

.zw-fonticon {
    font-family: "city-service-cicons" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
}
</style>
```

```atom 修改颜色
<template>
    <c-aladdin touchable>
        <c-row>
            <c-span col="6">
                <c-btn
                    icon="baidu"
                    text="主要按钮，修改颜色"
                    type="primary"
                    primary-color="#02b7ca"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span col="6">
                <c-btn
                    icon="baidu"
                    text="默认按钮，修改颜色"
                    primary-color="#02b7ca"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span col="6">
                <c-btn
                    icon-class="zw-fonticon"
                    icon-code="&#xe638;"
                    text="使用业务图标"
                    primary-color="#02b7ca"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-img': 'search-ui/Image/Image',
            'c-line': 'search-ui/Line/Line',
            'c-stars': 'search-ui/Stars/Stars',
            'c-label':'search-ui/Label/Label'
        }
    }
</script>

<script>
    export default {
        methods: {
            onClick() {
            }
        }
    };
</script>

<!-- 注意：这里如果用业务图标的话，不可以用 scoped 或者 module 限制作用域 -->
<style lang="less">
@font-face {
    font-family: "city-service-cicons";
    src: url(/static/app/city_service/icon/iconfont.eot);
    // 这里的路径最好换成相对路径，aladdin-atom 代码库会自动生成 hash 值；这里为了示例效果将 .woff2 文件改为了线上绝对路径
    src: url(/static/app/city_service/icon/iconfont.eot#iefix) format("embedded-opentype"),
        url(//m.baidu.com/se/static/ala_atom/app/city_service/icon/iconfont_669ba91.woff2) format("woff2"),
        url(/static/app/city_service/icon/iconfont.woff) format("woff"),
        url(/static/app/city_service/icon/iconfont.ttf) format("truetype"),
        url(/static/app/city_service/icon/iconfont.svg?#cicons) format("svg");
    font-weight: normal;
    font-style: normal;
}

.zw-fonticon {
    font-family: "city-service-cicons" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
}
</style>
```

```atom 是否禁用
<template>
    <c-aladdin touchable>
        <c-row>
            <c-span col="6">
                <c-btn
                    text="默认按钮"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span col="6">
                <c-btn
                    disabled
                    text="禁用按钮"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    export default {
        methods: {
            onClick() {
            }
        }
    };
</script>
```

```atom 不同大小
<template>
    <div>
        <c-aladdin touchable>
            <div class="c-gap-bottom">
                <div>
                    小按钮视觉样式：宽度为2n，按钮文案 &lt;= 3
                </div>
                <div>
                    使用场景：一般与2N图片一起使用
                </div>
            </div>
            <c-row>
                <c-span col="6">
                    <c-btn
                        text="默认按钮"
                    />
                </c-span>
            </c-row>
            <c-row>
                <c-span col="2">
                    <c-btn
                        size="small"
                        text="小按钮"
                    />
                </c-span>
                <c-span col="10"/>
            </c-row>
        </c-aladdin>
        <c-aladdin
            title="手机百度_官方免费下载_百度应用搜索"
            touchable
        >
            <c-row
                vertical-align="middle">
                <c-span col="2">
                    <c-img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1518343772266&di=9fbdcf34fb12ffdb392c10b2935bbdc3&imgtype=0&src=http%3A%2F%2Fstorepic.oppomobile.com%2FuploadFiles%2FPImages%2F201502%2F10%2F4d56d0f7ec25f81a8524bd7b48c0ccb7.png.icon.h256.jpg"/>
                </c-span>
                <c-span col="8">
                    <c-line class="c-color-link">
                        <span>手机百度</span>
                        <c-label
                            class="c-gap-left-small"
                            text="官方版"
                            type="box_green"/>
                    </c-line>
                    <c-stars :stars="4.9"/>
                    <c-line class="c-color-gray">
                        34.7MB
                    </c-line>
                </c-span>
                <c-span col="2">
                    <c-btn
                        size="small"
                        text="免费"/>
                </c-span>
            </c-row>
        </c-aladdin>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-img': 'search-ui/Image/Image',
            'c-line': 'search-ui/Line/Line',
            'c-stars': 'search-ui/Stars/Stars',
            'c-label':'search-ui/Label/Label'
        }
    }
</script>

<script>
    export default {
        methods: {
            onClick() {
            }
        }
    };
</script>
```

### 按钮栏 BtnLayout

```atom 按钮栏 BtnLayout
<template>
    <c-aladdin>
        <c-btn-layout
            @click="handleBtnLayoutClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-btn-layout': 'search-ui/Button/BtnLayout',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>

<script>
export default {
    methods: {
        handleBtnLayoutClick(obj) {
            console.log('handleBtnLayoutClick', obj);
        }
    }
};
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | - | 可选 | 类型：default&nbsp;默认；primary&nbsp;主要；weak&nbsp;弱；weak_auto&nbsp;弱自适应；weak_gray&nbsp;弱灰（已废弃，请用&nbsp;[Slink](./Slink)） | -
text | string | - | 可选 | 文案 | -
size | string | - | 可选 | 大小 | -
disabled | boolean | false | 可选 | 是否禁用 | -
icon | string | - | 可选 | 图标类型，只有通用图标才支持 | -
iconClass | string | - | 可选 | 图标类名，需要自定义图标类的时候自行传入，用于支持业务图标 | -
iconCode | string | - | 可选 | 图标代码 | -
url | string | - | 可选 | 链接，可以被当作一个跳转链接 | -
params | object | - | 可选 | 链接参数 | See [Link](./Link#API) `params`
primaryColor | string | - | 可选 | 颜色 | -

#### BtnLayout

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
options | array | [{"text":"重置"},{"text":"确定","type":"primary"}] | 可选 | 按钮栏的配置 | -
>> options[].text | string | - | - | 按钮文案 | -
>> options[].type | string | - | - | 按钮类型，参考&nbsp;Button&nbsp;`type` | -
borderTop | string | 1px solid #eee | 可选 | 顶部边线样式 | -
borderBottom | string | 1px solid #eee | 可选 | 低部边线样式 | -
primaryColor | string | - | 可选 | 主颜色 | -



### Events


- **click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传事件对象


#### BtnLayout


- **click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 事件对象
  ${param1}.option.index | number | 被点击的按钮的索引
  ${param1}.option.type | number | 被点击的按钮的类型
  ${param1}.option.text | number | 被点击的按钮的文案



