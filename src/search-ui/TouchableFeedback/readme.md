---
name: TouchableFeedback
title:  点击态组件
category: 交互类
owner: 姚昌
---


## 示例

```atom 简单卡片添加点击态 new
<template>
    <div class="se-page-bd" ref="wraper"
        :class="{
            'mark-open': markOpen
        }"
    >
    <c-row class="c-gap-left c-gap-right c-gap-bottom">
        <c-span col="3">
            <c-btn text="显示标注" @click="markOpen = !markOpen" />
        </c-span>
        <c-span col="9" style="font-size: .14rem">红色背景表示A链接</c-span>  
    </c-row>
    <c-row class="c-gap-left c-gap-right c-gap-bottom">
        <c-span col="8">
            <c-btn text="手动关闭点击态接口测试" @click="onDispatch" />
        </c-span>
        <c-span col="4"></c-span>
    </c-row>

    <c-aladdin
        touchable
        title="不跳转的点击态组件 不保持点击态"
    >
        <c-slink type="auto" text="不跳转" />
        <c-touchable-feedback
            :left="-.06"
            :right="-.06"
            :style="{
                display: 'inline-block'
            }"
            backgroundColor="rgba(0, 0, 0, .08)"
            class="c-gap-left"
        >
           <span
                class="c-color-gray c-footer-feedback-text">
                反馈
            </span>
        </c-touchable-feedback>
    </c-aladdin>

    <c-aladdin
        class="aladdin-1"
        show-right-url="https://m.baidu.com"
        show-right-text="百度首页"
        :url="url"
        title="京东商城 单独点击态"
        title-feedback>
        <c-touchable-feedback
            isJump
            expand
            :url-params="params"
            :top="-.05"
            :bottom="-.05"
            :left="-.17"
            :right="-.17">
            <c-img-content :img-src="src" :img-url="url" :img-touchable="false">
                <c-link :params="params">
                    <c-line>{{url}}</c-line>
                    <c-line :clamp="3">简介：刘德华（Andy Lau），1961年9月27日出生于中国香港，演员、歌手、作词人、制片人。1981年出演电影处女作《彩云曲》。</c-line>
                </c-link>
            </c-img-content>
        </c-touchable-feedback>
    </c-aladdin>

    <c-aladdin
        touchable
        footerRightTouchable
        show-right-url="https://m.hao123.com"
        show-right-text="hao123"
        showLeftText="左下角文本"
        url="https://m.baidu.com"
        title="百度首页 与整卡可点结合"
        title-feedback>
        <c-touchable-feedback
            isJump
            expand
            :url-params="params"
            :top="-.05"
            :bottom="-.05"
            :left="-.17"
            :right="-.17">
            <c-img-content :img-src="src" :img-url="url2" :img-touchable="false">
                <c-link :params="params">
                    <c-line>{{url2}}</c-line>
                    <c-line>概况：174cm  63kg  天秤座</c-line>
                    <c-line :clamp="3">简介：刘德华（Andy Lau），1961年9月27日出生于中国香港，演员、歌手、作词人、制片人。1981年出演电影处女作《彩云曲》。</c-line>
                </c-link>
            </c-img-content>
            <c-link :params="params">
                <c-line>
                    作品：
                    <c-slink type="auto" text="暗战" url="http://m.baidu.com/s?wd=暗战" />
                    <c-slink type="auto" text="无间道" url="http://m.baidu.com/s?wd=无间道" class="c-gap-left" />
                </c-line>
            </c-link>
        </c-touchable-feedback>
    </c-aladdin>
    
    <c-aladdin 
        touchable
        footerRightTouchable
        showRightText="百度知道"
        show-right-url="http://zhidao.baidu.com" 
        showLeftText="百度"
        title="Query=百度 整卡可点" 
        url="https://m.baidu.com/s?wd=%E7%99%BE%E5%BA%A6">
        
        <c-img-content :img-src="src" :img-touchable="false" img-url="https://m.baidu.com/s?wd=%E7%99%BE%E5%BA%A6">
            <c-link :params="params">
                <c-line>生日：1961年9月27日</c-line>
                <c-line>概况：174cm  63kg  天秤座</c-line>
                <c-line :clamp="3">简介：刘德华（Andy Lau），1961年9月27日出生于中国香港，演员、歌手、作词人、制片人。1981年出演电影处女作《彩云曲》。1983年主演的武侠剧《神雕侠侣》在香港获得62点的收视纪录。1985年因拒签五年合约而被TVB雪藏。1988年将事业重心转向电影。1991年创办天幕电影公司。1994年担任剧情片《天与地》的制片人。2000年凭借警匪片《暗战》获得第19届香港电影金像奖最佳男主角奖。2004年凭借警匪片《无间道3：终极无间》获得第41届台湾金马奖最佳男主角奖。2005年获得香港UA院线颁发的“1985-2005年全港最高累积票房香港男演员”奖。2006年获得釜山国际电影节亚洲最有贡献电影人奖。2011年主演剧情片《桃姐》，并凭借该片先后获得台湾金马奖最佳男主角奖、香港电影金像奖最佳男主角奖；同年担任第49届台湾电影金马奖评审团主席。2017年主演警匪动作片《拆弹专家》。1985年</c-line>
            </c-link>
        </c-img-content>
        <c-link :params="params">
            <c-line>
                作品：
                <c-slink type="auto" text="暗战" url="http://m.baidu.com/s?wd=暗战" />
                <c-slink type="auto" text="无间道" url="http://m.baidu.com/s?wd=无间道" class="c-gap-left" />
            </c-line>
        </c-link>
    </c-aladdin>
    </div>
</template>

<style lang="less">

a {
    color: #000;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(23,23,23,.1);
}

.se-page-bd {
    background-color: #f1f1f1;
    padding: 30px 0;
}

.mark-open {
    [rl-node] {
        background-color: rgba(255, 167, 58, 0.1);
    }

    [rl-node] a {
        background-color: rgba(255, 58, 58, 0.1);
    }
}
</style>

<script type="config">
    {
        data: {
            src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
            url: 'http://m.jd.com',
            url2: 'http://m.hao123.com?2',
            markOpen: false,
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            }
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-line": "search-ui/Line/Line",
            "c-slink": "search-ui/Slink/Slink",
            "c-img-content": "search-ui/ImgContent/ImgContent",
            "c-touchable-feedback": "search-ui/TouchableFeedback/TouchableFeedback",
            "c-link": "search-ui/Link/Link",
            "c-btn": "search-ui/Button/Button",
            "c-line": "search-ui/Line/Line",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
export default {
    mounted() {
       
    },
    methods: {
        toggleMark() {
            this.markOpen = !this.markOpen;
        },
        onDispatch() {
            setTimeout(() => {
                console.log('after dispatchEvent setTimeout');
            });
            
            window.dispatchEvent(new Event('tf_touchReset'));
            console.log('after dispatchEvent');
        }
    }
};
</script>
```

```atom TouchableStop 示例
<template>
    
    <div class="se-page-bd" ref="wraper"
        :class="{
            'mark-open': markOpen
        }"
    >
    <c-row class="c-gap-left c-gap-right c-gap-bottom">
        <c-span col="3">
            <c-btn text="显示标注" @click="markOpen = !markOpen" />
        </c-span>
        <c-span col="9" style="font-size: .14rem">蓝色背景表示屏蔽整卡点击态</c-span>  
    </c-row>
    
    <c-aladdin 
        touchable
        footerRightTouchable
        showRightText="百度知道"
        show-right-url="http://zhidao.baidu.com" 
        showLeftText="百度"
        title="Query=百度 整卡可点" 
        url="https://m.baidu.com/s?wd=%E7%99%BE%E5%BA%A6">
    
        <c-touchable-stop>
        <c-img-content :img-src="src" :img-touchable="false" img-url="https://m.baidu.com/s?wd=%E7%99%BE%E5%BA%A6">
            <c-line>屏蔽了整卡点击态</c-line>
            <c-line>概况：174cm  63kg  天秤座</c-line>
            <c-line :clamp="3">简介：刘德华（Andy Lau），1961年9月27日出生于中国香港，演员、歌手、作词人、制片人。1981年出演电影处女作《彩云曲》。1983年主演的武侠剧《神雕侠侣》在香港获得62点的收视纪录。1985年因拒签五年合约而被TVB雪藏。1988年将事业重心转向电影。1991年创办天幕电影公司。1994年担任剧情片《天与地》的制片人。2000年凭借警匪片《暗战》获得第19届香港电影金像奖最佳男主角奖。2004年凭借警匪片《无间道3：终极无间》获得第41届台湾金马奖最佳男主角奖。2005年获得香港UA院线颁发的“1985-2005年全港最高累积票房香港男演员”奖。2006年获得釜山国际电影节亚洲最有贡献电影人奖。2011年主演剧情片《桃姐》，并凭借该片先后获得台湾金马奖最佳男主角奖、香港电影金像奖最佳男主角奖；同年担任第49届台湾电影金马奖评审团主席。2017年主演警匪动作片《拆弹专家》。1985年</c-line>
        </c-img-content>
        </c-touchable-stop>
        <c-line>
            作品：
            <c-slink type="auto" text="暗战" url="http://m.baidu.com/s?wd=暗战" />
            <c-slink type="auto" text="无间道" url="http://m.baidu.com/s?wd=无间道" class="c-gap-left" />
        </c-line>
    </c-aladdin>
    </div>
</template>

<style lang="less">
.se-page-bd {
    background-color: #f1f1f1;
    padding: 30px 0;
}

.mark-open {
    [rl-node] {
        background-color: rgba(255, 167, 58, 0.1);
    }

    [rl-type="stop"] {
        background-color: rgba(3, 169, 244, .1);
    }

    [rl-node] a {
        background-color: rgba(255, 58, 58, 0.1);
    }
}
</style>

<script type="config">
    {
        data: {
            src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
            url: 'http://m.jd.com',
            url2: 'http://m.hao123.com?2',
            markOpen: false
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-line": "search-ui/Line/Line",
            "c-slink": "search-ui/Slink/Slink",
            "c-img-content": "search-ui/ImgContent/ImgContent",
            "c-touchable-stop": "search-ui/TouchableFeedback/TouchableStop",
            "c-link": "search-ui/Link/Link",
            "c-btn": "search-ui/Button/Button",
            "c-line": "search-ui/Line/Line",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span"
        }
    }
</script>

<script>
export default {
    mounted() {
       
    },
    methods: {
        toggleMark() {
            this.markOpen = !this.markOpen;
        }
    }
};
</script>
```

## 注意事项

0、【NA2.0】新的点击态实现方案采用 http://icode.baidu.com/repos/baidu/ps-se-fe-tpl/responsive-link/tree/master

1、【NA2.0】升级之后的点击态组件有两个功能，点击态和块级（非 A 链接）点击跳转功能，其中点击态功能与之前保持一致；
【重要事项】能用 A 标签实现的跳转，不建议用点击态的块级点击跳转来实现，块级点击跳转使用js实现的跳转，不能完全代替A链接的跳转，只是为了解决 A 标签不能嵌套的一个增强方案。

2、【NA2.0】由于原点击态组件默认不保持点击态，新的交互规范要求跳转类的点击态需要保持到跳转，需要设置 `isJump` 属性来开启；

3、【NA2.0】为点击态组件设置 `isJump` 和 `url`(或 `urlParams.tcUrl`) 属性之后，会开启块级点击跳转功能，此时点击组件范围内非 A 链接的区域时，就会触发块级跳转功能，注意默认点击触发的范围是组件节点的区域，而不是点击态背景区域，因为点击态背景区域可以通过定位来扩展；为了让块级跳转与目标 A 链接跳转参数和统计日志一致，需要设置 `urlParams` 和 `title` 属性与期望跳转的目标 A 链接一致。

4、【NA2.0】使用 `TouchableStop` 组件，可以屏蔽其上层的整卡可点或块级可点及点击态。

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
open | boolean | true | 可选 | 是否添加点击态 | -
top | number | 0 | 可选 | 基于被包裹容器&nbsp;absolute&nbsp;定位，top&nbsp;值 | -
right | number | 0 | 可选 | 基于被包裹容器&nbsp;absolute&nbsp;定位，right&nbsp;值 | -
bottom | number | 0 | 可选 | 基于被包裹容器&nbsp;absolute&nbsp;定位，bottom&nbsp;值 | -
left | number | 0 | 可选 | 基于被包裹容器&nbsp;absolute&nbsp;定位，left&nbsp;值 | -
borderRadius | string | 0 | 可选 | 设置&nbsp;borderRadius | -
backgroundColor | string | rgba(0, 0, 0, .05) | 可选 | 设置点击态的颜色，透明度取值为&nbsp;.05,&nbsp;.08,&nbsp;.12&nbsp;其中之一 | -
isJump | boolean | false | 可选 | 是否是跳转类型&nbsp;跳转类型会保持点击态到跳转&nbsp;并具备块级跳转功能 | -
expand | boolean | false | 可选 | 是否扩展点击跳转响应区域，区域大小同点击态的区域 | -
self | boolean | true | 可选 | - | -
url | string |  | 可选 | 点击态区域块级跳转链接的&nbsp;url&nbsp;地址 | -
urlParams | object | {} | 可选 | 点击态区域块级跳转链接的&nbsp;urlParams | -
title | string |  | 可选 | 点击态区域块级跳转链接的&nbsp;title | -

#### TouchableStop

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
open | boolean | true | 可选 | 是否添加点击态 | -

### Slots



名称 | 描述
--- | ---
default | -

#### TouchableStop

名称 | 描述
--- | ---
default | 默认&nbsp;slot




