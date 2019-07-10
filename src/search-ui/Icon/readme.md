---
name: Icon
title: 图标
category: 基础组件
owner: 陈骁
---

## 使用场景

> 参考UE规范：[D2 【基础组件】-【图标】](http://sfe.baidu.com:8186/ue-guide/icon.html)

## 示例

```atom 直接使用 i 标签
<template>
    <c-aladdin>
        <i class="c-icon" @click="onClick">&#xe780</i>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        screenWidth: 0
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-icon': 'search-ui/Icon/Icon',
        'c-line': 'search-ui/Line/Line'
    }
}
</script>

<script>
export default {
    mounted() {
        this.screenWidth = window.innerWidth;
    },
    methods: {
        onClick(e) {
            console.log(e);
        }
    }
};
</script>
```

<h6 id="图标库"></h6>

```atom Icon List
<template>
    <div class="c-container">
        <c-row
            style="background-color: #f6f6f6; color: #999; line-height: 2.5"
            class="c-gap-bottom-small c-row-tile"
        >
            <c-span col="1"></c-span>
            <c-span col="4">类型</c-span>
            <c-span col="3">含义</c-span>
            <c-span col="2">代码</c-span>
            <c-span col="2">备注</c-span>
        </c-row>
        <c-row
            a-for="item in icons"
            :key="item.name"
            class="c-gap-bottom c-line-bottom"
        >
            <c-span col="4">
                <i
                    style="color: #555"
                    a-html="item.code"
                    class="c-icon"
                />
                <span
                    class="c-gap-left"
                >
                    {{ item.name }}
                </span>
            </c-span>
            <c-span col="3">
                {{ item.title }}
            </c-span>
            <c-span col="2">
                {{ item.code }}
            </c-span>
            <c-span
                col="2"
                class="c-color-red"
            >
                {{ item.remark }}
            </c-span>
        </c-row>
    </div>
</template>

<style scoped>
i {
    color: #000;
}
</style>

<script type="config">
{
    components: {
        'c-icon': 'search-ui/Icon/Icon',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span',
        'c-line': 'search-ui/Line/Line'
    },
    data: {
        icons: [
            {
                "code": "&#xe780",
                "title": "百度LOGO",
                "name": "baidu"
            }, {
                "code": "&#xe65d",
                "title": "loading",
                "name": "loading"
            }, {
                "code": "&#xe731",
                "title": "播放",
                "name": "play"
            }, {
                "code": "&#xe607",
                "title": "暂停",
                "name": "pause"
            }, {
                "code": "&#xe732",
                "title": "音乐播放(居中)",
                "name": "music_play"
            }, {
                "code": "&#xe76f",
                "title": "音乐播放线形",
                "name": "music_play_line"
            }, {
                "code": "&#xe735",
                "title": "视频播放",
                "name": "video_play"
            }, {
                "code": "&#xe654",
                "title": "视频播放(细)",
                "name": "video_play2"
            }, {
                "code": "&#xe73b",
                "title": "音乐暂停",
                "name": "music_pause"
            }, {
                "code": "&#xe739",
                "title": "音乐下载",
                "name": "download"
            }, {
                "code": "&#xe629",
                "title": "图集",
                "name": "imgs"
            }, {
                "code": "&#xe600",
                "title": "到这去",
                "name": "goto"
            }, {
                "code": "&#xe605",
                "title": "向右箭头",
                "name": "right_arrow"
            }, {
                "code": "&#xe62e",
                "title": "kg向右箭头",
                "name": "kg_right_arrow"
            }, {
                "code": "&#xe734",
                "title": "向右",
                "name": "right"
            }, {
                "code": "&#xe736",
                "title": "向上",
                "name": "top"
            }, {
                "code": "&#xe73c",
                "title": "向下",
                "name": "down"
            }, {
                "code": "&#xe783",
                "title": "向左",
                "name": "left"
            }, {
                "code": "&#xe619",
                "title": "向下圈",
                "name": "down_circle"
            }, {
                "code": "&#xe609",
                "title": "回第一页",
                "name": "back_to_first"
            }, {
                "code": "&#xe763",
                "title": "上升",
                "name": "rise"
            }, {
                "code": "&#xe76a",
                "title": "下降",
                "name": "fall"
            }, {
                "code": "&#xe762",
                "title": "持平",
                "name": "fair"
            }, {
                "code": "&#xe647",
                "title": "加号",
                "name": "plus2"
            }, {
                "code": "&#xe611",
                "title": "乘(细)",
                "name": "multiply"
            }, {
                "code": "&#xe60c",
                "title": "微博star",
                "name": "weibo_star"
            }, {
                "code": "&#xe61e",
                "title": "提示",
                "name": "hint"
            }, {
                "code": "&#xe638",
                "title": "提示(细)",
                "name": "hint_thin"
            }, {
                "code": "&#xe602",
                "title": "全屏",
                "name": "fullscreen"
            }, {
                "code": "&#xe62c",
                "title": "打开",
                "name": "open"
            }, {
                "code": "&#xe618",
                "title": "设置",
                "name": "setting"
            }, {
                "code": "&#xe640",
                "title": "个人中心",
                "name": "user2"
            }, {
                "code": "&#xe788",
                "title": "刷新",
                "name": "refresh"
            }, {
                "code": "&#xe61d",
                "title": "换",
                "name": "change"
            }, {
                "code": "&#xe617",
                "title": "垃圾箱",
                "name": "dustbin"
            }, {
                "code": "&#xe614",
                "title": "mail",
                "name": "mail"
            }, {
                "code": "&#xe62a",
                "title": "信息",
                "name": "msg"
            }, {
                "code": "&#xe601",
                "title": "关闭",
                "name": "close"
            }, {
                "code": "&#xe612",
                "title": "关闭线型(细)",
                "name": "close_thin"
            }, {
                "code": "&#xe772",
                "title": "转换",
                "name": "exchange"
            }, {
                "code": "&#xe77e",
                "title": "回顶部",
                "name": "back_to_top"
            }, {
                "code": "&#xe608",
                "title": "勾",
                "name": "check"
            }, {
                "code": "&#xe786",
                "title": "输入",
                "name": "input"
            }, {
                "code": "&#xe63b",
                "title": "浏览",
                "name": "glance"
            }, {
                "code": "&#xe751",
                "title": "提交",
                "name": "commit"
            }, {
                "code": "&#xe60a",
                "title": "添加",
                "name": "add"
            }, {
                "code": "&#xe603",
                "title": "公交",
                "name": "bus"
            }, {
                "code": "&#xe733",
                "title": "电话",
                "name": "phone"
            }, {
                "code": "&#xe784",
                "title": "超级电话",
                "name": "super_phone"
            }, {
                "code": "&#xe606",
                "title": "iphone",
                "name": "iphone"
            }, {
                "code": "&#xe61f",
                "title": "时钟/历史纪录",
                "name": "history"
            }, {
                "code": "&#xe60b",
                "title": "网页链接",
                "name": "link"
            }, {
                "code": "&#xe738",
                "title": "位置",
                "name": "location"
            }, {
                "code": "&#xe637",
                "title": "行程",
                "name": "trip"
            }, {
                "code": "&#xe787",
                "title": "定位",
                "name": "position"
            }, {
                "code": "&#xe622",
                "title": "直播",
                "name": "broadcast"
            }, {
                "code": "&#xe752",
                "title": "图片",
                "name": "image"
            }, {
                "code": "&#xe60d",
                "title": "拍照",
                "name": "photograph"
            }, {
                "code": "&#xe60e",
                "title": "语音",
                "name": "voice"
            }, {
                "code": "&#xe610",
                "title": "直达号",
                "name": "straight"
            }, {
                "code": "&#xe753",
                "title": "V标",
                "name": "v"
            }, {
                "code": "&#xe76b",
                "title": "挂号",
                "name": "register"
            }, {
                "code": "&#xe623",
                "title": "购物车",
                "name": "trolley"
            }, {
                "code": "&#xe615",
                "title": "表情1",
                "name": "smile"
            }, {
                "code": "&#xe616",
                "title": "表情2",
                "name": "cry"
            }, {
                "code": "&#xe628",
                "title": "住宿",
                "name": "hotel"
            }, {
                "code": "&#xe627",
                "title": "饮食",
                "name": "food"
            }, {
                "code": "&#xe626",
                "title": "景点",
                "name": "view_spot"
            }, {
                "code": "&#xe625",
                "title": "价格",
                "name": "price"
            }, {
                "code": "&#xe624",
                "title": "攻略",
                "name": "strategy"
            }, {
                "code": "&#xe62d",
                "title": "点评",
                "name": "comment"
            }, {
                "code": "&#xe62b",
                "title": "正片",
                "name": "feature"
            }, {
                "code": "&#xe634",
                "title": "日历",
                "name": "calendar"
            }, {
                "code": "&#xe633",
                "title": "相关推荐",
                "name": "recommend"
            }, {
                "code": "&#xe635",
                "title": "预订(细)",
                "name": "subscribe"
            }, {
                "code": "&#xe63d",
                "title": "扫码",
                "name": "sweep"
            }, {
                "code": "&#xe63c",
                "title": "更多",
                "name": "more"
            }, {
                "code": "&#xe643",
                "title": "more",
                "name": "more_circle"
            }, {
                "code": "&#xe646",
                "title": "外卖",
                "name": "takeaway"
            }, {
                "code": "&#xe64a",
                "title": "刷卡",
                "name": "card"
            }, {
                "code": "&#xe64b",
                "title": "停车",
                "name": "park"
            }, {
                "code": "&#xe64c",
                "title": "wifi",
                "name": "wifi"
            }, {
                "code": "&#xe64d",
                "title": "导航",
                "name": "navigation"
            }, {
                "code": "&#xe64f",
                "title": "地铁",
                "name": "subway"
            }, {
                "code": "&#xe64e",
                "title": "出租车",
                "name": "taxi"
            }, {
                "code": "&#xe650",
                "title": "保存",
                "name": "save"
            }, {
                "code": "&#xe656",
                "title": "收藏",
                "name": "collect_thin"
            }, {
                "code": "&#xe655",
                "title": "已收藏",
                "name": "collect"
            }, {
                "code": "&#xe657",
                "title": "排序",
                "name": "order"
            }, {
                "code": "&#xe658",
                "title": "直播",
                "name": "broadcast2"
            }, {
                "code": "&#xe63e",
                "title": "咨询",
                "name": "consult"
            }, {
                "code": "&#xe639",
                "title": "查看官方号",
                "name": "official"
            }, {
                "code": "&#xe750",
                "title": "返回",
                "name": "back"
            }, {
                "code": "&#xe63f",
                "title": "更多",
                "name": "more2"
            }, {
                "code": "&#xe641",
                "title": "搜索(粗)",
                "name": "search_thick"
            }, {
                "code": "&#xe642",
                "title": "分享(粗)",
                "name": "share_thick"
            }, {
                "code": "&#xe649",
                "title": "地图模式",
                "name": "map"
            }, {
                "code": "&#xe65a",
                "title": "列表",
                "name": "list"
            }, {
                "code": "&#xe644",
                "title": "v1",
                "name": "v1"
            }, {
                "code": "&#xe60f",
                "title": "v2",
                "name": "v2"
            }, {
                "code": "&#xe620",
                "title": "v3",
                "name": "v3"
            }, {
                "code": "&#xe621",
                "title": "vp",
                "name": "vp"
            }, {
                "code": "&#xe648",
                "title": "拍照(粗)",
                "name": "photograph2"
            }, {
                "code": "&#xe645",
                "title": "语音(粗)",
                "name": "voice2"
            }, {
                "code": "&#xe65b",
                "title": "全景",
                "name": "overall"
            }, {
                "code": "&#xe65e",
                "title": "实心星星",
                "name": "star"
            }, {
                "code": "&#xe65c",
                "title": "空心星星",
                "name": "empty_star"
            }, {
                "code": "&#xe65f",
                "title": "首页",
                "name": "home"
            }, {
                "code": "&#xe661",
                "title": "点赞",
                "name": "praised"
            }, {
                "code": "&#xe660",
                "title": "赞",
                "name": "new_praise"
            }, {
                "code": "&#xe666",
                "title": "原文地址",
                "name": "original_text"
            }, {
                "code": "&#xe665",
                "title": "学历",
                "name": "education"
            }, {
                "code": "&#xe663",
                "title": "报错",
                "name": "error"
            }, {
                "code": "&#xe662",
                "title": "语音播报",
                "name": "voice_broadcast"
            }, {
                "code": "&#xe664",
                "title": "视频预览",
                "name": "video_preview"
            }, {
                "code": "&#xe669",
                "title": "直播",
                "name": "live_broadcast"
            }, {
                "code": "&#xe668",
                "title": "菜单",
                "name": "menu"
            }, {
                "code": "&#xe667",
                "title": "禁止",
                "name": "forbid"
            }, {
                "code": "&#xe66a",
                "title": "音乐播放(偏右)",
                "name": "video_play3"
            }, {
                "code": "&#xe66b",
                "title": "向左顶箭头",
                "name": "top_left"
            }, {
                "code": "&#xe672",
                "title": "反馈",
                "name": "feedback"
            }, {
                "code": "&#xe671",
                "title": "音频",
                "name": "volume"
            }, {
                "code": "&#xe670",
                "title": "选择按钮 未选中状态",
                "name": "checkbox_uncheck"
            }, {
                "code": "&#xe66f",
                "title": "选择按钮 选中状态",
                "name": "checkbox_checked"
            }, {
                "code": "&#xe66e",
                "title": "步行",
                "name": "walk"
            }, {
                "code": "&#xe66d",
                "title": "汽车",
                "name": "car"
            }, {
                "code": "&#xe66c",
                "title": "地铁",
                "name": "subway2"
            }, {
                "code": "&#xe674",
                "title": "座位",
                "name": "seat"
            }, {
                "code": "&#xe673",
                "title": "排队",
                "name": "queue"
            }, {
                "code": "&#xe675",
                "title": "注释",
                "name": "annotation"
            }, {
                "code": "&#xe676",
                "title": "语音播放",
                "name": "voice_playback"
            }, {
                "code": "&#xe677",
                "title": "条形图",
                "name": "bar_chart"
            }, {
                "code": "&#xe678",
                "title": "饼图",
                "name": "pie_chart"
            }, {
                "code": "&#xe679",
                "title": "百度",
                "name": "baidu_text"
            }, {
                "code": "&#xe67b",
                "title": "趋势",
                "name": "trend_chart"
            }, {
                "code": "&#xe67c",
                "title": "全景图",
                "name": "panorama"
            }, {
                "code": "&#xe67d",
                "title": "安全",
                "name": "security"
            }, {
                "code": "&#xe67e",
                "title": "mip",
                "name": "mip"
            }, {
                "code": "&#xe67f",
                "title": "空心心形",
                "name": "heart_hollow"
            }, {
                "code": "&#xe680",
                "title": "心形",
                "name": "heart"
            }, {
                "code": "&#xe681",
                "title": "耳机",
                "name": "headset"
            }, {
                "code": "&#xe682",
                "title": "手势",
                "name": "gesture"
            }, {
                "code": "&#xe683",
                "title": "蜡烛",
                "name": "candle"
            }, {
                "code": "&#xe685",
                "title": "关于",
                "name": "about"
            }, {
                "code": "&#xe684",
                "title": "反对",
                "name": "oppose"
            }, {
                "code": "&#xe686",
                "title": "反对",
                "name": "oppose_hollow"
            }, {
                "code": "&#xe687",
                "title": "全屏",
                "name": "enlarge"
            }, {
                "code": "&#xe688",
                "title": "评论",
                "name": "comment1"
            }, {
                "code": "&#xe689",
                "title": "冰箱",
                "name": "refrigerator"
            }, {
                "code": "&#xe68a",
                "title": "锅",
                "name": "cooker"
            }, {
                "code": "&#xe68b",
                "title": "TV",
                "name": "TV"
            }, {
                "code": "&#xe68c",
                "title": "空调",
                "name": "air_conditioner"
            }, {
                "code": "&#xe68d",
                "title": "暖气",
                "name": "heating"
            }, {
                "code": "&#xe68e",
                "title": "加热器",
                "name": "heater"
            }, {
                "code": "&#xe68f",
                "title": "马桶",
                "name": "toilet"
            }, {
                "code": "&#xe690",
                "title": "洗衣机",
                "name": "washer"
            }, {
                "code": "&#xe691",
                "title": "阳台",
                "name": "balcony"
            }, {
                "code": "&#xe692",
                "title": "衣柜",
                "name": "wardrobe"
            }, {
                "code": "&#xe693",
                "title": "床",
                "name": "bed"
            }, {
                "code": "&#xe694",
                "title": "特殊返回",
                "name": "back_special"
            }, {
                "code": "&#xe695",
                "title": "特殊关闭",
                "name": "close_special"
            }, {
                "code": "&#xe696",
                "title": "特殊更多",
                "name": "more_special"
            }, {
                "code": "&#xe697",
                "title": "微金融",
                "name": "microfinance"
            }, {
                "code": "&#xe698",
                "title": "预约",
                "name": "appointment"
            }, {
                "code": "&#xe699",
                "title": "隐藏",
                "name": "hide"
            }, {
                "code": "&#xe69a",
                "title": "旅馆",
                "name": "hotel2"
            }, {
                "code": "&#xe69b",
                "title": "火车",
                "name": "train"
            }, {
                "code": "&#xe69c",
                "title": "专家",
                "name": "expert"
            }, {
                "code": "&#xe69d",
                "title": "红包",
                "name": "red_envelopes"
            }, {
                "code": "&#xe69e",
                "title": "音乐",
                "name": "music"
            }, {
                "code": "&#xe69f",
                "title": "热",
                "name": "heat"
            }, {
                "code": "&#xe6a4",
                "title": "热(线)",
                "name": "heat_line"
            }, {
                "code": "&#xe6a0",
                "title": "商店hot",
                "name": "shop_hot"
            }, {
                "code": "&#xe6a2",
                "title": "电视专题讨论会",
                "name": "forum"
            }, {
                "code": "&#xe6a3",
                "title": "钻石",
                "name": "diamond"
            }, {
                "code": "&#xe6a5",
                "title": "快递",
                "name": "express"
            }, {
                "code": "&#xe6a6",
                "title": "日历2",
                "name": "calendar2"
            }, {
                "code": "&#xe6a8",
                "title": "微博",
                "name": "weibo"
            }, {
                "code": "&#xe6aa",
                "title": "电脑",
                "name": "computer"
            }, {
                "code": "&#xe6ab",
                "title": "行踪",
                "name": "whereabouts"
            }, {
                "code": "&#xe6ac",
                "title": "排行",
                "name": "no1"
            }, {
                "code": "&#xe6ad",
                "title": "专业",
                "name": "major"
            }, {
                "code": "&#xe6ae",
                "title": "选院校",
                "name": "school"
            }, {
                "code": "&#xe6af",
                "title": "测录取率",
                "name": "rate"
            }, {
                "code": "&#xe6b0",
                "title": "真题估分",
                "name": "estimate"
            }, {
                "code": "&#xe6b1",
                "title": "作文库",
                "name": "composition"
            }, {
                "code": "&#xe6b2",
                "title": "批次线",
                "name": "batch"
            }, {
                "code": "&#xe6b3",
                "title": "职业测评",
                "name": "occupation"
            }, {
                "code": "&#xe6b4",
                "title": "智能志愿",
                "name": "voolunteer"
            }, {
                "code": "&#xe6b6",
                "title": "一分一段",
                "name": "branch"
            }, {
                "code": "&#xe6b8;",
                "title": "每日作文素材",
                "name": "day_composition"
            }
        ]
    }
}
</script>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | - | 可选 | 图标类型，只有通用图标才支持 | See [示例](#示例)
code | string | - | 可选 | 直接传入icon编码 | -
iconClass | string | - | 可选 | 图标类名；需要自定义图标类的时候自行传入，用于支持业务图标 | -



### Events


- **click**: 点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | Event | 透传点击事件对象



