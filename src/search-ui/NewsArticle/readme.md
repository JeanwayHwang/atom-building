---
name: NewsArticle
title: 资讯组件
category: 文章图文类
owner: 王凯
---

## 示例

<h6 id="资讯组件：目前只支持 6n 样式，在实际使用过程中，需要与 Scroll 组件配合一起使用"></h6>

```atom 资讯组件：目前只支持 6n 样式，在实际使用过程中，需要与 Scroll 组件配合一起使用
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-row>
            <c-span
                col="6">
                <c-news-article
                    :url="url"
                    :params="params"
                    :title="title"
                    :is-title-html="isTitleHtml"
                    :avatar="avatar"
                    :avatar-url="avatarUrl"
                    :avatar-url-params="avatarUrlParams"
                    :source="source"
                    :time="time"
                    :extra="extra"
                    :img-src="imgSrc"
                    :content="content">
                </c-news-article>
            </c-span>
            <c-span
                col="6">
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            url: 'http://www.baidu.com',
            params: {},
            title: 'NBA未来是谁的全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑',
            isTitleHtml: false,
            avatarUrl: 'https://www.jianshu.com/',
            avatarUrlParams: {},
            avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522065980274&di=6e9fcf7c1bd02be3a9e3df7e99ba3395&imgtype=0&src=http%3A%2F%2Fi49.tinypic.com%2Ft7movd.jpg',
            source: '腾讯网',
            time: '13天前',
            extra: '',
            imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
            content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-news-article': 'search-ui/NewsArticle/NewsArticle',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
        }
    }
</script>

<script>
    export default {
        methods: {
        }
    }
</script>
```

<h6 id="一般使用场景：6n横滑，与 Scroll 组件配合使用"></h6>

```atom 一般使用场景：6n横滑，与 Scroll 组件配合使用，Scroll 使用 flex 布局，实现[查看更多]点击态填满容器高度
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll @scrollEnd="onScroll" scroller-flex>
            <c-scroll-item
                class="templatename-scroll-item"
                a-for="(item, index) in list"
                :key="index"
                :col="6">
                <c-news-article
                    :url="item.url"
                    :params="item.params"
                    :title="item.title"
                    :is-title-html="item.isTitleHtml"
                    :label="item.label"
                    :label-type="item.labelType"
                    :avatar="item.avatar"
                    :avatar-url="item.avatarUrl"
                    :avatar-url-params="item.avatarUrlParams"
                    :source="item.source"
                    :time="item.time"
                    :extra="item.extra"
                    :img-src="item.imgSrc"
                    :content="item.content"
                    :show-first-type="item.showFirstType">
                </c-news-article>
            </c-scroll-item>
            <c-scroll-item :col="4">
            <!-- 使用定位来解决 iOS 10.1 及以下高度 100% 填充问题 -->
            <!-- In Safari 10.1 and below, the height of (non flex) children are not recognized in percentages -->
            <!-- https://bugs.webkit.org/show_bug.cgi?id=137730 -->
            <c-touchable-feedback
                :open="!!(moreUrl || (moreUrlParams && moreUrlParams.tcUrl))"
                is-jump
                :url="moreUrl"
                :url-params="moreUrlParams"
                expand
                style="position: absolute; top: 0; bottom: 0; left: 0; right: 0"
            >
                <c-more
                    :url="moreUrl"
                    :params="moreUrlParams"/>
            </c-touchable-feedback>
            </c-scroll-item>
        </c-scroll>
    </c-aladdin>
</template>

<style lang="less" scoped>
    // 在与横滑一起使用时需要模板自行给 c-scroll-item 元素增加一个 padding-bottom: 1px 属性，用来避免底部边线显示不出来的问题
    .templatename-scroll-item {
        padding-bottom: 1px;
    }
</style>

<script type="config">
    {
        data: {
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [{
                url: 'http://www.baidu.com',
                params: {},
                title: '<em>NBA未来是谁的</em>?全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                isTitleHtml: true,
                label: '解析',
                labelType: 'box_red',
                avatarUrl: 'https://www.jianshu.com/',
                avatarUrlParams: {},
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522065980274&di=6e9fcf7c1bd02be3a9e3df7e99ba3395&imgtype=0&src=http%3A%2F%2Fi49.tinypic.com%2Ft7movd.jpg',
                source: '搜狐网搜狐网搜狐网',
                time: '13天前',
                extra: '',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁',
                source: '搜狐网',
                time: '13天前13天前13天前',
                extra: '',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: '<em>NBA未来是谁的</em>？全能',
                isTitleHtml: true,
                label: '解析',
                labelType: 'box_red',
                avatarUrl: 'https://www.jianshu.com/',
                avatarUrlParams: {},
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522065980274&di=6e9fcf7c1bd02be3a9e3df7e99ba3395&imgtype=0&src=http%3A%2F%2Fi49.tinypic.com%2Ft7movd.jpg',
                source: '搜狐网',
                time: '13天前',
                extra: '',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
            'c-news-article': 'search-ui/NewsArticle/NewsArticle',
            'c-more': 'search-ui/More/More',
            'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback',
        }
    }
</script>

<script>
    export default {
        methods: {
            onScroll() {
                console.log('scrollEnd');
            }
        }
    }
</script>
```

<h6 id="标题飘红"></h6>


```atom 标题飘红
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll @scrollEnd="onScroll" scroller-flex>
            <c-scroll-item
                class="templatename-scroll-item"
                a-for="(item, index) in list"
                :key="index"
                :col="6">
                <c-news-article
                    :url="item.url"
                    :params="item.params"
                    :title="item.title"
                    :is-title-html="item.isTitleHtml"
                    :label="item.label"
                    :label-type="item.labelType"
                    :avatar="item.avatar"
                    :avatar-url="item.avatarUrl"
                    :avatar-url-params="item.avatarUrlParams"
                    :source="item.source"
                    :time="item.time"
                    :extra="item.extra"
                    :img-src="item.imgSrc"
                    :content="item.content"
                    :show-first-type="item.showFirstType">
                </c-news-article>
            </c-scroll-item>
            <c-scroll-item :col="4">
            <c-touchable-feedback
                :open="!!(moreUrl || (moreUrlParams && moreUrlParams.tcUrl))"
                is-jump
                :url="moreUrl"
                :url-params="moreUrlParams"
                expand
                style="position: absolute; top: 0; bottom: 0; left: 0; right: 0"
            >
                <c-more
                    :url="moreUrl"
                    :params="moreUrlParams"/>
            </c-touchable-feedback>
            </c-scroll-item>
        </c-scroll>
    </c-aladdin>
</template>

<style lang="less" scoped>
    // 在与横滑一起使用时需要模板自行给 c-scroll-item 元素增加一个 padding-bottom: 1px 属性，用来避免底部边线显示不出来的问题
    .templatename-scroll-item {
        padding-bottom: 1px;
    }
</style>

<script type="config">
    {
        data: {
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [{
                url: 'http://www.baidu.com',
                params: {},
                title: '<em>NBA未来是谁的</em>？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                isTitleHtml: true,
                source: '搜狐网',
                time: '13天前',
                extra: '',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: '<em>NBA未来是谁的</em>？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                isTitleHtml: true,
                source: '搜狐网',
                time: '13天前',
                extra: '',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: '<em>NBA未来是谁的</em>？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                isTitleHtml: true,
                source: '搜狐网',
                time: '13天前',
                extra: '',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
            'c-news-article': 'search-ui/NewsArticle/NewsArticle',
            'c-more': 'search-ui/More/More',
            'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback',
        }
    }
</script>

<script>
    export default {
        methods: {
            onScroll() {
                console.log('scrollEnd');
            }
        }
    }
</script>
```

<h6 id="标题增加标签"></h6>

```atom 标题增加标签
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll @scrollEnd="onScroll" scroller-flex>
            <c-scroll-item
                class="templatename-scroll-item"
                a-for="(item, index) in list"
                :key="index"
                :col="6">
                <c-news-article
                    :url="item.url"
                    :params="item.params"
                    :title="item.title"
                    :is-title-html="item.isTitleHtml"
                    :label="item.label"
                    :label-type="item.labelType"
                    :avatar="item.avatar"
                    :avatar-url="item.avatarUrl"
                    :avatar-url-params="item.avatarUrlParams"
                    :source="item.source"
                    :time="item.time"
                    :extra="item.extra"
                    :img-src="item.imgSrc"
                    :content="item.content"
                    :show-first-type="item.showFirstType">
                </c-news-article>
            </c-scroll-item>
            <c-scroll-item :col="4">
            <c-touchable-feedback
                :open="!!(moreUrl || (moreUrlParams && moreUrlParams.tcUrl))"
                is-jump
                :url="moreUrl"
                :url-params="moreUrlParams"
                expand
                style="position: absolute; top: 0; bottom: 0; left: 0; right: 0"
            >
                <c-more
                    :url="moreUrl"
                    :params="moreUrlParams"/>
            </c-touchable-feedback>
            </c-scroll-item>
        </c-scroll>
    </c-aladdin>
</template>

<style lang="less" scoped>
    // 在与横滑一起使用时需要模板自行给 c-scroll-item 元素增加一个 padding-bottom: 1px 属性，用来避免底部边线显示不出来的问题
    .templatename-scroll-item {
        padding-bottom: 1px;
    }
</style>

<script type="config">
    {
        data: {
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [{
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                label: '解析',
                labelType: 'box_red',
                source: '搜狐网',
                time: '13天前',
                extra: '',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                label: '解析',
                labelType: 'box_red',
                source: '搜狐网',
                time: '13天前',
                extra: '',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                label: '解析',
                labelType: 'box_red',
                source: '搜狐网',
                time: '13天前',
                extra: '',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
            'c-news-article': 'search-ui/NewsArticle/NewsArticle',
            'c-more': 'search-ui/More/More',
            'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback',
        }
    }
</script>

<script>
    export default {
        methods: {
            onScroll() {
                console.log('scrollEnd');
            }
        }
    }
</script>
```

<h6 id="熊掌号"></h6>

```atom 熊掌号
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll @scrollEnd="onScroll" scroller-flex>
            <c-scroll-item
                class="templatename-scroll-item"
                a-for="(item, index) in list"
                :key="index"
                :col="6">
                <c-news-article
                    :url="item.url"
                    :params="item.params"
                    :title="item.title"
                    :is-title-html="item.isTitleHtml"
                    :label="item.label"
                    :label-type="item.labelType"
                    :avatar="item.avatar"
                    :avatar-url="item.avatarUrl"
                    :avatar-url-params="item.avatarUrlParams"
                    :source="item.source"
                    :time="item.time"
                    :extra="item.extra"
                    :img-src="item.imgSrc"
                    :content="item.content"
                    :show-first-type="item.showFirstType">
                </c-news-article>
            </c-scroll-item>
            <c-scroll-item :col="4">
            <c-touchable-feedback
                :open="!!(moreUrl || (moreUrlParams && moreUrlParams.tcUrl))"
                is-jump
                :url="moreUrl"
                :url-params="moreUrlParams"
                expand
                style="position: absolute; top: 0; bottom: 0; left: 0; right: 0"
            >
                <c-more
                    :url="moreUrl"
                    :params="moreUrlParams"/>
            </c-touchable-feedback>
            </c-scroll-item>
        </c-scroll>
    </c-aladdin>
</template>

<style lang="less" scoped>
    // 在与横滑一起使用时需要模板自行给 c-scroll-item 元素增加一个 padding-bottom: 1px 属性，用来避免底部边线显示不出来的问题
    .templatename-scroll-item {
        padding-bottom: 1px;
    }
</style>

<script type="config">
    {
        data: {
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [{
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                avatarUrl: 'https://www.jianshu.com/',
                avatarUrlParams: {},
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522065980274&di=6e9fcf7c1bd02be3a9e3df7e99ba3395&imgtype=0&src=http%3A%2F%2Fi49.tinypic.com%2Ft7movd.jpg',
                source: '搜狐网',
                time: '13天前',
                extra: '',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                avatarUrl: 'https://www.jianshu.com/',
                avatarUrlParams: {},
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522065980274&di=6e9fcf7c1bd02be3a9e3df7e99ba3395&imgtype=0&src=http%3A%2F%2Fi49.tinypic.com%2Ft7movd.jpg',
                source: '搜狐网',
                time: '13天前13天前13天前',
                extra: '',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                avatarUrl: 'https://www.jianshu.com/',
                avatarUrlParams: {},
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522065980274&di=6e9fcf7c1bd02be3a9e3df7e99ba3395&imgtype=0&src=http%3A%2F%2Fi49.tinypic.com%2Ft7movd.jpg',
                source: '搜狐网',
                time: '13天前',
                extra: '',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
            'c-news-article': 'search-ui/NewsArticle/NewsArticle',
            'c-more': 'search-ui/More/More',
            'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback',
        }
    }
</script>

<script>
    export default {
        methods: {
            onScroll() {
                console.log('scrollEnd');
            }
        }
    }
</script>
```

<h6 id="传入时间字符串"></h6>

```atom 传入时间字符串
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll @scrollEnd="onScroll" scroller-flex>
            <c-scroll-item
                class="templatename-scroll-item"
                a-for="(item, index) in list"
                :key="index"
                :col="6">
                <c-news-article
                    :url="item.url"
                    :params="item.params"
                    :title="item.title"
                    :is-title-html="item.isTitleHtml"
                    :label="item.label"
                    :label-type="item.labelType"
                    :avatar="item.avatar"
                    :avatar-url="item.avatarUrl"
                    :avatar-url-params="item.avatarUrlParams"
                    :source="item.source"
                    :time="item.time"
                    :extra="item.extra"
                    :img-src="item.imgSrc"
                    :content="item.content"
                    :show-first-type="item.showFirstType">
                </c-news-article>
            </c-scroll-item>
            <c-scroll-item :col="4">
            <c-touchable-feedback
                :open="!!(moreUrl || (moreUrlParams && moreUrlParams.tcUrl))"
                is-jump
                :url="moreUrl"
                :url-params="moreUrlParams"
                expand
                style="position: absolute; top: 0; bottom: 0; left: 0; right: 0"
            >
                <c-more
                    :url="moreUrl"
                    :params="moreUrlParams"/>
            </c-touchable-feedback>
            </c-scroll-item>
        </c-scroll>
    </c-aladdin>
</template>

<style lang="less" scoped>
    // 在与横滑一起使用时需要模板自行给 c-scroll-item 元素增加一个 padding-bottom: 1px 属性，用来避免底部边线显示不出来的问题
    .templatename-scroll-item {
        padding-bottom: 1px;
    }
</style>

<script type="config">
    {
        data: {
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [{
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                source: '搜狐网',
                time: '2018年1月1日',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                source: '搜狐网',
                time: '2018年1月1日',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                source: '搜狐网',
                time: '2018年1月1日',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
            'c-news-article': 'search-ui/NewsArticle/NewsArticle',
            'c-more': 'search-ui/More/More',
            'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback',
        }
    }
</script>

<script>
    export default {
        methods: {
            onScroll() {
                console.log('scrollEnd');
            }
        }
    }
</script>
```

<h6 id="传入其他字符串"></h6>

```atom 传入其他字符串
<template>
    <c-aladdin touchable title="整卡可点的 Aladdin 卡">
        <c-scroll @scrollEnd="onScroll" scroller-flex>
            <c-scroll-item
                class="templatename-scroll-item"
                a-for="(item, index) in list"
                :key="index"
                :col="6">
                <c-news-article
                    :url="item.url"
                    :params="item.params"
                    :title="item.title"
                    :is-title-html="item.isTitleHtml"
                    :label="item.label"
                    :label-type="item.labelType"
                    :avatar="item.avatar"
                    :avatar-url="item.avatarUrl"
                    :avatar-url-params="item.avatarUrlParams"
                    :source="item.source"
                    :time="item.time"
                    :extra="item.extra"
                    :img-src="item.imgSrc"
                    :content="item.content"
                    :show-first-type="item.showFirstType">
                </c-news-article>
            </c-scroll-item>
            <c-scroll-item :col="4">
            <c-touchable-feedback
                :open="!!(moreUrl || (moreUrlParams && moreUrlParams.tcUrl))"
                is-jump
                :url="moreUrl"
                :url-params="moreUrlParams"
                expand
                style="position: absolute; top: 0; bottom: 0; left: 0; right: 0"
            >
                <c-more
                    :url="moreUrl"
                    :params="moreUrlParams"/>
            </c-touchable-feedback>
            </c-scroll-item>
        </c-scroll>
    </c-aladdin>
</template>

<style lang="less" scoped>
    // 在与横滑一起使用时需要模板自行给 c-scroll-item 元素增加一个 padding-bottom: 1px 属性，用来避免底部边线显示不出来的问题
    .templatename-scroll-item {
        padding-bottom: 1px;
    }
</style>

<script type="config">
    {
        data: {
            moreUrl: 'http://www.baidu.com',
            moreUrlParams: {},
            list: [{
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                source: '搜狐网',
                extra: '500阅读',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                source: '搜狐网',
                extra: '500阅读500阅读500阅读',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }, {
                url: 'http://www.baidu.com',
                params: {},
                title: 'NBA未来是谁的？全能中锋井喷或上演华山论剑NBA未来是谁的？全能中锋井喷或上演华山论剑未来是谁的？全能中锋井喷或上演华山论剑',
                source: '搜狐网',
                extra: '500阅读',
                imgSrc: 'https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=356e51bd6087fc6c9f488f7a3b584ceb&auto=format&fit=crop&w=934&q=80',
                content: 'NBA代表了篮球这项运动的最高成就和全部魅力。如果你喜欢劲爆的扣篮，格里芬标志性的迎面劈扣，詹姆斯君临天下的滑翔扣篮，麦迪技惊四座的自抛自扣，文斯卡特力拔山兮的死亡隔扣，拉文和戈登火星四溅的扣篮对决，一个个超乎想象的扣篮将篮球运动的暴力美学体现得淋漓尽致。如果你喜欢精彩的突破，韦德招牌的迷踪步，艾弗森令人叹为观止的体前变向，威少快若惊雷的突然启动，罗斯身体腾空后的折叠上篮，吉诺比利鬼魅难辨的蛇形突破，每一个动作都令人如痴如醉。如果你想看精准的投篮，老科美如画的后仰跳投，库里令人绝望的快速三分，雷阿伦投篮机器一般的接球跳投，欧文和克劳福德让人拍手叫绝的转身中投，投篮这项技巧在他们的手里成为了一种艺术。如果你想看疯狂的个人表演，那么科比独得81分，一个人吊打猛龙的屠杀之夜，韦德总决赛场均35分的封神之战，麦迪35秒13分感动上帝的惊世表演，每一幕都让人热血沸腾。如果你想看默契的团队配合，太阳纳什时期冠绝联盟的炮轰战术，马刺GDP数年如一日的团队协作，勇士水花兄弟、海啸兄弟水银泻地的流畅进攻，看他们的比赛，总是让人酣畅淋漓，不得不感叹原来男人间也可以有这样惊人的默契。'
            }]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-title': 'search-ui/Title/Title',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
            'c-news-article': 'search-ui/NewsArticle/NewsArticle',
            'c-more': 'search-ui/More/More',
            'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback',
        }
    }
</script>

<script>
    export default {
        methods: {
            onScroll() {
                console.log('scrollEnd');
            }
        }
    }
</script>
```

## 注意事项

1. 为了未来的扩展性，将该组件抽离为单独的独立组件；在实际使用过程中，需要与 Scroll 组件配合一起使用，目前只支持 6n 样式
2. 在与横滑一起使用时需要模板自行给 c-scroll-item 元素增加一个 padding-bottom: 1px 属性，用来避免底部边线显示一半或者不显示的问题
3. 与 ScrollArticle 组件（上图下文样式）在使用场景上相仿，具体选择哪种样式请垂类根据自己的需求，来判断用哪个效果
4. 关于医疗和汽车KG垂类资讯类卡片开发，请垂类自行实现

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
url | string | - | 可选 | 跳转的&nbsp;url | -
params | object | - | 可选 | 跳转&nbsp;url&nbsp;的&nbsp;params | -
label | string | - | 可选 | 标题的标签文案 | -
labelType | string | - | 可选 | 标题的标签类型，可参考Label&nbsp;组件 | -
title | string | - | 可选 | 标题 | -
isTitleHtml | boolean | false | 可选 | 标题是否作为&nbsp;innerHtml&nbsp;插入到&nbsp;dom&nbsp;中；标题飘红需求时使用，默认为&nbsp;false | -
avatar | string | - | 可选 | 熊掌号头像地址 | -
avatarUrl | string | - | 可选 | 熊掌号跳转&nbsp;url | -
avatarUrlParams | object | - | 可选 | 熊掌号&nbsp;urlParams | -
source | string | - | 可选 | 来源字段 | -
time | string \| number | - | 可选 | 来源字段 | -
extra | string | - | 可选 | 除了来源、时间之外的其他信息 | -
imgSrc | string | - | 可选 | 图片地址 | -
content | string | - | 可选 | 段落文字内容 | -
showFirstType | string | img | 可选 | 当图片和内容数据同时存在的时候优先显示的类型；默认为图片优先 | -






