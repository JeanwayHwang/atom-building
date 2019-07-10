---
name: Slink
title: 短链
category: 基础组件
owner: 陈骁
---

## 使用场景

> 参考UE规范：[D4 【基础组件】-【短链】](http://sfe.baidu.com:8186/ue-guide/slink.html)

## 示例

```atom 短链
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <div>固定栅格：</div>
        <c-row>
            <c-span col="9">
                <c-slink url="//www.baidu.com" text="弱/普通短链" />
            </c-span>
            <c-span col="3">
                <c-slink text="强短链" type="strong" />
            </c-span>
        </c-row>
        <div>自适应：</div>
        <div>
            <c-slink text="自适应" type="auto" />
            <c-slink
                text="带图标"
                type="auto"
                class="c-gap-left"
                icon-type="baidu"
            />
            <c-slink
                text="自适应11"
                type="auto"
                class="c-gap-left"
            />
            <c-slink
                text="自适应22222222"
                type="auto"
                class="c-gap-left"
            />
        </div>
        <div>带图标的短链：</div>
        <c-row>
            <c-span col="6">
                <c-slink
                    url="//www.baidu.com"
                    text="百度"
                    icon-type="baidu"
                />
            </c-span>
            <c-span col="6" />
        </c-row>
        <div>带文字标签的短链：</div>
        <c-row>
            <c-span col="6">
                <c-slink
                    url="//www.baidu.com"
                    text="百度"
                    label="新"
                    label-type="box_red"
                />
            </c-span>
            <c-span col="6" />
        </c-row>
        <div>带尾部文字的短链：</div>
        <c-row>
            <c-span col="6">
                <c-slink
                    url="//www.baidu.com"
                    text="电话咨询"
                    type="auto"
                    tail="(60元)"
                    tailColor="#f60"
                />
            </c-span>
            <c-span col="6" />
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-slink': 'search-ui/Slink/Slink'
        }
    }
</script>
```

```atom 超链接
<template>
    <c-aladdin
        title="鹿晗_百度百科 整卡可点" touchable>
        <c-img-content
            img-src="https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2759317045,1910512690&fm=88&s=39B659975832749CD21801E403001021">
            <c-line
                clamp="1">
                生日：1990年4月20日
            </c-line>
            <c-line
                clamp="1">
                概况：178cm 60kg 白羊座
            </c-line>
            <c-line
                clamp="3">
                简介：鹿晗（LU HAN），1990年4月20日出生于北京海淀区，中国内地影视男演员、歌手。2008年赴韩国留学期间在明洞逛街时，被韩国SM娱乐有限公司星探发掘成为旗下练习生。2012年4月以韩国男子组合EXO/EXO-M成员正式出道，组合内担任主唱、领舞、门面担当。2014年8月，个人微博单条评论创吉尼斯世界纪录，成为中文社交媒体上的首位吉尼斯世界纪录获得者。10月，申请与SM公司合同无效，于2016年7月19日达成和解。2015年1月，主演的首部电影《重返20岁》上映，凭借此片获第22届北京大学生电影节最受欢迎男演员奖。5月，登《福布斯》杂志中文版封面。8月，加盟综艺节目《奔跑吧兄弟第三季》。10月，主演的悬疑电影《我是证人》上映。12月，个人首张专辑《Reloaded（重启）》全球发行。
            </c-line>
        </c-img-content>
        <div class="c-gap-top">
            作品：
            <c-slink
                text="重返20岁"
                type="auto"/>
            <c-slink
                class="c-gap-left"
                text="我是证人"
                type="auto"/>
            <c-slink
                class="c-gap-left"
                text="长城"
                type="auto"/>
        </div>
        <div>
            关系：
            <c-slink
                text="好友陈柏霖"
                type="auto"/>
            <c-slink
                class="c-gap-left"
                text="搭档陈可辛"
                type="auto"/>
            <c-slink
                class="c-gap-left"
                text="搭档吴君如"
                type="auto"/>
        </div>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-slink': 'search-ui/Slink/Slink',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-line': 'search-ui/Line/Line'
        }
    }
</config>
```

```atom 子链
<template>
    <c-aladdin
        title="中国人寿保险股份有限公司_公司大全" touchable>
        <c-img-content
            img-src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1036769460,2830521387&fm=58">
            <c-line
                clamp="1">
                北京 | 保险业
            </c-line>
            <c-line
                clamp="1">
                平均薪资：4795元
            </c-line>
            <c-line
                clamp="1">
                好评率：62%
            </c-line>
            <c-line
                clamp="3">
                注册地址：中国人寿保险（集团）公司，是国有特大型金融保险企业，总部设在北京，世界500强企业、中国品牌500强，国家副部级单位。公司前身是成立于1949年的原中国人民保险公司，1996年分设为中保人寿保险有限公司，1999年更名为中国人寿保险公司。
            </c-line>
        </c-img-content>
        <c-row class="c-gap-top">
            <c-span col="3">
                <c-slink
                    text="工商百科"/>
            </c-span>
            <c-span col="3">
                <c-slink
                    text="点评待遇"/>
            </c-span>
            <c-span col="3">
                <c-slink
                    text="员工人脉"/>
            </c-span>
            <c-span col="3">
                <c-slink
                    text="笔试面试"/>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-slink': 'search-ui/Slink/Slink',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-line': 'search-ui/Line/Line'
        }
    }
</config>
```

## 注意事项

组件分为两类
1. 固定栅格短链（配合栅格使用）：
    - 弱/普通短链（默认）
    - 强短链：type='strong'
2. 自适应短链：type='auto'


## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | default | 可选 | 短链类型，可选值：default、strong、auto | -
url | string | - | 可选 | 跳转链接 | -
params | object | - | 可选 | 跳转链接所需参数 | See [Link](./Link#API) `params`
text | string | - | 可选 | 短链内容 | -
tail | string | - | 可选 | 短链尾部文字 | -
textColor | string | - | 可选 | 短链内容颜色 | -
tailColor | string | - | 可选 | 短链尾部文字颜色 | -
iconType | string | - | 可选 | 图标类型 | -
label | string | - | 可选 | 文字标签 | -
labelType | string | - | 可选 | 文字标签类型 | See [Label](./Label#API) `type`
noGap | boolean | false | 可选 | 控制不添加上下的间距 | -



### Events


- **click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传点击事件



