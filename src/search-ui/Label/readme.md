---
name: Label
title: 标签
category: 基础组件
owner: 陈骁
---

## 使用场景

> 参考UE规范：[D5 【基础组件】-【标签】](http://sfe.baidu.com:8186/ue-guide/label.html)

## 示例

```atom 标签
<template>
    <div class="c-container">
        <c-list>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="官网" type="public" /><br>
                    </c-span>
                    <c-span col="7">public</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="风险" type="danger" /><br>
                    </c-span>
                    <c-span col="7">danger</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="正版" type="secondary" /><br>
                    </c-span>
                    <c-span col="7">secondary</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="新" type="box_red" /><br>
                    </c-span>
                    <c-span col="7">box_red</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="热" type="box_pink" /><br>
                    </c-span>
                    <c-span col="7">box_pink</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="付费" type="box_orange" /><br>
                    </c-span>
                    <c-span col="7">box_orange</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="黄" type="box_yellow" /><br>
                    </c-span>
                    <c-span col="7">box_yellow</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="超清" type="box_blue" /><br>
                    </c-span>
                    <c-span col="7">box_blue</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="主任医师" type="box_gray" /><br>
                    </c-span>
                    <c-span col="7">box_gray</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="破解" type="box_green" /><br>
                    </c-span>
                    <c-span col="7">box_green</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <span>前面的文案</span><c-label text="咨询" type="info" /><br>
                    </c-span>
                    <c-span col="7">info</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <c-label text="1" type="index" /><span>后面的文案</span><br>
                        <c-label text="2" type="index" /><span>后面的文案</span><br>
                        <c-label text="3" type="index" /><span>后面的文案</span><br>
                    </c-span>
                    <c-span col="7">index</c-span>
                </c-row>
            </c-list-item>
            <c-list-item>
                <c-row>
                    <c-span col="5">
                        <c-label text="1" type="index_hot1" /><span>后面的文案</span><br>
                        <c-label text="2" type="index_hot2" /><span>后面的文案</span><br>
                        <c-label text="3" type="index_hot3" /><span>后面的文案</span><br>
                        <c-label text="4" type="index_gray" /><span>后面的文案</span><br>
                    </c-span>
                    <c-span col="7">index_hot1、index_hot2、index_hot3、index_gray</c-span>
                </c-row>
            </c-list-item>
        <c-list>
    </div>
</template>
<script type="config">
    {
        components: {
            'c-row':'search-ui/Row/Row',
            'c-span':'search-ui/Row/Span',
            'c-list': 'search-ui/List/List',
            'c-list-item': 'search-ui/List/ListItem',
            'c-label':'search-ui/Label/Label'
        }
    }
</script>
```

```atom 标题列表
<template>
    <div class="c-container">
        <c-list>
            <c-list-item>
                <c-label text="1" type="index_hot1"/>
                <span class="c-color-link">壹号标题</span>
            </c-list-item>
            <c-list-item>
                <c-label text="2" type="index_hot2"/>
                <span class="c-color-link">贰号标题</span>
            </c-list-item>
            <c-list-item>
                <c-label text="3" type="index_hot3"/>
                <span class="c-color-link">叁号标题</span>
            </c-list-item>
            <c-list-item>
                <c-label text="04" type="index"/>
                <span class="c-color-link">肆号标题</span>
            </c-list-item>
            <c-list-item>
                <c-label text="05" type="index"/>
                <span class="c-color-link">伍号标题</span>
            </c-list-item>
            <c-list-item>
                <c-label text="06" type="index"/>
                <span class="c-color-link">陆号标题</span>
            </c-list-item>
        <c-list>
    </div>
</template>
<script type="config">
    {
        components: {
            'c-list': 'search-ui/List/List',
            'c-list-item': 'search-ui/List/ListItem',
            'c-label':'search-ui/Label/Label'
        }
    }
</script>
```
```atom 横滑列表
<template>
    <div class="c-container">
        <c-scroll
			@scrollend="handleScrollEnd"
		>
			<c-scroll-item
				a-for="(i, index) in 10"
				:col="4"
				:key="index"
			>
				<section class="example-section">
                    <c-img
                        hack-white-stroke
                    />
                    <c-label class="example-label" :text="i" :type="i <= 3 ? 'index_hot' + i : 'index_gray'"  />
                </section>
				<div>
					二级标题 {{ index}}
				</div>
				<div>
					辅助功能 {{ index}}
				</div>
			</c-scroll-item>
			<c-scroll-item
				:col="4"
			>
				<c-more
					url="//www.baidu.com"
				/>
			</c-scroll-item>
		</c-scroll>
    </div>
</template>
<script type="config">
    {
        components: {
            'c-label':'search-ui/Label/Label',
            'c-more': 'search-ui/More/More',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
            'c-img': 'search-ui/Image/Image',
            'c-line': 'search-ui/Line/Line'
        }
    }
</script>
<script>
export default {
	methods: {
		handleScrollEnd() {
			console.log('handleScrollEnd');
		}
	}
}
</script>
<style>
.example-section {
    position: relative;
}
.example-label {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
```
```atom 左图右文列表
<template>
    <div class="c-container">
        <c-list>
            <c-list-item >
                <c-img-content
                    img-type="y"
                    :img-src="src"
                    @imgclick="handleImgClick"
                    @load="handleLoad">
                    <c-line clamp="1" >
                        <c-link :params="params" class="c-font-medium">
                            <c-label text="1" type="index_hot1"/>
                            <span>48px二级标题<span>
                        </c-link>
                    </c-line>
                    <c-line
                        clamp="2"
                        class="c-color c-font-normal"
                    >
                        摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                    </c-line>
                </c-img-content>
            </c-list-item>
            <c-list-item >
                <c-img-content
                    img-type="y"
                    :img-src="src"
                    @imgclick="handleImgClick"
                    @load="handleLoad">
                    <c-line clamp="1">
                        <c-link :params="params" class="c-font-medium">
                            <c-label text="2" type="index_hot2"/>
                            <span>48px二级标题<span>
                        </c-link>
                    </c-line>
                    <c-line
                        clamp="2"
                        class="c-color c-font-normal"
                    >
                        摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                    </c-line>
                </c-img-content>
            </c-list-item>
            <c-list-item >
                <c-img-content
                    img-type="y"
                    :img-src="src"
                    @imgclick="handleImgClick"
                    @load="handleLoad">
                    <c-line clamp="1">
                        <c-link :params="params" class="c-font-medium">
                            <c-label text="3" type="index_hot3"/>
                            <span>48px二级标题<span>
                        </c-link>
                    </c-line>
                    <c-line
                        clamp="2"
                        class="c-color c-font-normal"
                    >
                        摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                    </c-line>
                </c-img-content>
            </c-list-item>
            <c-list-item >
                <c-img-content
                    img-type="y"
                    :img-src="src"
                    @imgclick="handleImgClick"
                    @load="handleLoad">
                    <c-line clamp="1">
                        <c-link :params="params" class="c-font-medium">
                            <c-label text="04" type="index"/>
                            <span>48px二级标题<span>
                        </c-link>
                    </c-line>
                    <c-line
                        clamp="2"
                        class="c-color c-font-normal"
                    >
                        摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息摘要信息
                    </c-line>
                </c-img-content>
            </c-list-item>
        <c-list>
    </section>
</template>
<script type="config">
    {
        data: {
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519884649&di=a619b1f2c20827cb85cd9c6b17e1d92d&imgtype=jpg&er=1&src=http%3A%2F%2Fattimg.dospy.com%2Fimg%2Fday_150330%2F20150330_08144cb3ca75c7e29835JctCCoZ09K8c.jpg',
            params: {
                type: 'tc',
                tcUrl: 'http://m.baidu.com/from=0/bd_page_type=1/ssid=0/uid=0/pu=usm%405%2Csz%401320_2001%2Cta%40iphone_1_10.3_3_602/baiduid=2394DF1734739A2640096401142BE0B8/w=0_10_/t=iphone/l=1/tc?ref=www_iphone&lid=9040466913824092276&order=1&fm=alop&tj=www_normal_1_0_10_title&url_mf_score=5&vit=osres&m=8&cltj=cloud_title&asres=1&nt=wnor&title=%E7%99%BE%E5%BA%A6%E6%90%9C%E7%B4%A2%E9%A3%8E%E4%BA%91%E6%A6%9C&dict=32&w_qd=IlPT2AEptyoA_ykytR9c5OK64ClTeJEo9Ca&tcplug=1&sec=26675&di=3f1880e3152c77d6&bdenc=1&nsrc=IlPT2AEptyoA_yixCFOxXnANedT62v3IEhmF_yxZ_zqb95qshbWxBa'
            }
        },
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-img-content': 'search-ui/ImgContent/ImgContent',
            'c-list': 'search-ui/List/List',
            'c-list-item': 'search-ui/List/ListItem',
            'c-label':'search-ui/Label/Label',
            'c-link': 'search-ui/Link/Link'
        }
    }
</script>
<script>
    export default {
        methods: {
            handleImgClick() {
                console.log('handleImgClick');
            },
            handleLoad() {
                console.log('load');
            }
        }
    };
</script>
```

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | public | 可选 | 标签类型：public；danger；secondary；box_red；box_orange；box_blue；<br>box_pink；box_gray；box_green；box_yellow；info；index；index_hot1；<br>index_hot2；index_hot3；index_gray | See [文字图标](http://pmd.baidu.com/doc/#texticon)
text | string \| number | - | 必选 | 文案 | -



### Events


- **click**: 点击事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1} | Event | 透传事件对象



