---
name: Scroll
title: 横滑
category: 交互类
owner: 姚昌
---

## 使用场景

> 参考UE规范：[D12 【基础组件】-【橫滑】](http://sfe.baidu.com:8186/ue-guide/scroll.html)

## 示例

```atom 卡片示例
<template>
    <c-aladdin
		title="周杰伦代表作品"
		show-right-url="//www.baidu.com"
        show-left-text="百度知识图谱"
		show-right-text="查看更多电影"
	>
        <c-scroll
			@scrollend="handleScrollEnd"
		>
			<c-scroll-item
				a-for="(item, index) in imgs"
				:col="col"
				:key="index"
			>
				<c-img
					hack-white-stroke
					type="l"
					:src="item.src"
				/>
				<c-line>
					{{ item.title }}
				</c-line>
				<c-line class="c-color-gray">
					{{ item.abstract }}
				</c-line>
			</c-scroll-item>
			<c-scroll-item
				:col="col"
			>
				<c-more
					url="//www.baidu.com"
				/>
			</c-scroll-item>
		</c-scroll>
    </c-aladdin>
</template>

<script type="config">
{
	data: {
		imgs: [
			{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534220720941&di=291b3566560fd60222a5c2ac3a0d38f0&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160602%2FImg452472486.jpg',
				title: '惊天魔盗团',
				abstract: '豆瓣 6.5'
			},
			{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534220577152&di=5fb9f79880c14b2b5325621bdd61b3e0&imgtype=0&src=http%3A%2F%2Fpic0.qiyipic.com%2Fimage%2F20140410%2F26%2F64%2Fcc%2Fli_9401_li_601.jpg',
				title: '不能说的秘密',
				abstract: '豆瓣 7.6'
			},
			{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534220595353&di=92b9c51803fc5ccd134ebd1eb6af54b0&imgtype=0&src=http%3A%2F%2Fp2.qhimg.com%2Ft01a94bd2d277c2738f.jpg',
				title: '天台爱情',
				abstract: '豆瓣 6.8'
			},
			{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534220621746&di=146dece3df4ca4ee29c128fe96bda2b3&imgtype=0&src=http%3A%2F%2Fi-7.vcimg.com%2Fcrop%2F034d18817c138e5e034efbea588fc97c760357%2528600x%2529%2Fthumb.jpg',
				title: '满城尽带黄金甲',
				abstract: '豆瓣 5.2'
			},
			{
				src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534220675946&di=bd42ed9b18072b48ee5b865610d1fea6&imgtype=0&src=http%3A%2F%2Fwww.kfzimg.com%2FG05%2FM00%2F8B%2F53%2Fp4YBAFg1dViAR21DAB7-rjScCnY947_b.jpg',
				title: '头文字D',
				abstract: '豆瓣 6.9'
			}
		],
		col: 4
	},
	components: {
		'c-aladdin': 'search-ui/Aladdin/Aladdin',
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
```

```atom 横滑
<template>
	<c-aladdin>
		<c-scroll
			@scrollend="handleScrollEnd"
		>
			<c-scroll-item
				a-for="(i, index) in 8"
				:col="4"
				:key="index"
			>
				<c-img
					hack-white-stroke
				/>
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
	</c-aladdin>
</template>

<script type="config">
{
	data: {
	},
	components: {
		'c-aladdin': 'search-ui/Aladdin/Aladdin',
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
```

```atom 弹性
<template>
	<c-aladdin>
		<c-scroll
			ref="scroll"
			bounce
			@touchend="end"
			@scroll="scroll"
			@scrollend="scrollend"
		>
			<c-scroll-item
				a-for="(i, index) in 8"
				:col="4"
				:key="index"
			>
				<c-img
					hack-white-stroke
				/>
				<div>
					二级标题 {{ index}}
				</div>
				<div>
					辅助功能 {{ index}}
				</div>
			</c-scroll-item>
			<div
				slot="more"
				:col="4"
				:style="{
					top: 0,
					right: 0,
					transform: 'translateX(50%)',
					position: 'absolute'
				}"
			>
				<div class="more-wrapper">
					<div class="more">
						<div class="more-bg"></div>
						<i class="more-icon" style="font-size:.16rem;" :style="{
							transform: `rotate(${iconRotate}deg) translateZ(0)`,
							WebkitTransform: `rotate(${iconRotate}deg) translateZ(0)`
						}"></i>
						<p :style="{visibility: bounce ? 'hidden' : 'visible'}">滑动查看更多</p>
						<p :style="{visibility: bounce ? 'visible' : 'hidden'}">释放查看更多</p>
					</div>
				</div>
			</div>
		</c-scroll>
	</c-aladdin>
</template>

<script type="config">
{
	data: {
		iconRotate: 180,
		bounce: false
	},
	components: {
		'c-aladdin': 'search-ui/Aladdin/Aladdin',
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

		end(e) {

			this.iconRotate = 180;
			this.bounce = false;
			console.log('touchend', e);

			const {
				x,
				maxScrollX,
				startX
			} = e;

			// 快速滚动不触发
			if (maxScrollX - x < 5) {
				return;
			}

			console.log('走，去看更多吧！');
		},

		scroll(e) {

			const {
				x,
				maxScrollX,
				startX
			} = e;

			// 快速滚动不触发
			if (startX - x > document.documentElement.clientWidth) {
				return;
			}

			let deltaX = maxScrollX - x;

			if (deltaX > 15) {
				this.iconRotate = 360;
				this.bounce = true;
			}
			else {
				this.iconRotate = 180;
				this.bounce = false;
			}

			console.log('scroll', e);

		},

		scrollend(index, e) {
			console.log('scrollend', e)
		}
	}
};
</script>

<style module>
.more-wrapper {
    height: 100%;
    position: relative;
}
.more {
    width: 80px;
    height: 2rem;
    display: inline-block;
    position: relative;
    font-size: .14rem;
    vertical-align: top;
}
.more-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .1;
}
.more-icon {
    position: absolute;
    top: 50%;
    left: .24rem;
    margin-top: -.08rem;
	display: inline-block;
	width: .16rem;
	height: .16rem;
	text-alight: center;
	overflow: hidden;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-transition: transform .2s;
    transition: transform .2s;
	background-image: url(/asset/more.png);
	background-size: 100% 100%;
}
.more p {
    position: absolute;
    left: .45rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    line-height: .18rem;
    width: 20px;
    color: #555;
    white-space: normal;
    display: inline-block;
    text-align: center;
}
</style>
```

<br>

> 注意：
> 1. 回弹的实现方式在 IOS 和 Android 上不同，IOS 上使用原生滚动加 touch 事件实现，Android 上是用的 better-scroll
> 2. 示例中更多的图标直接是用的图片来做的，这是因为用字体在旋转过程中会有位移，图片下载地址 [下载](http://icode.baidu.com/rest/files/blob/get/fileraw?repo=baidu/ps-se-fe-tpl/search-ui&commit=HEAD&path=public/asset/more.png)

<br>

```atom snap 定位到元素；建议横滑元素 >=8n 时使用（须每项的宽度都相等才生效）
<template>
    <c-aladdin>
    	这是一个示例，滑动后会对齐到元素上
    	<c-scroll
			ref="scroll"
			snap
			@scrollend="handleScrollEnd"
		>
			<c-scroll-item
				a-for="(item, index) in imgs"
				:col="col"
				:key="index"
				@click.native="handleScrollItemClick({
					item,
					index
				})"
			>
				<c-img
					hack-white-stroke
					type="y"
					:src="item.src"
				/>
				<div>
					NO.{{ index }}
				</div>
			</c-scroll-item>
		</c-scroll>
		我是第{{page}}页
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-more': 'search-ui/More/More',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
			'c-img': 'search-ui/Image/Image'
        },
        data: {
            imgs: [
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				},
				{
					src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg'
				}
			],
			col: 8,
			urlSfParams: {
				tcUrl: '//m.baidu.com'
			},
			page: 1
        }
    }
</config>

<script >
export default {
	methods: {
		handleScrollItemClick(obj) {
			console.log('handleScrollItemClick', obj);
			// this.$refs.scroll.scrollTo(obj.index);
		},
		handleScrollEnd(pageIndex) {
			this.page = pageIndex + 1;
			console.log();
		}
	}
};
</script>

<style scoped>
img {
	width: 100%;
}
</style>
```

```atom 强制使用 better-scroll；点击项滑动到指定位置
<template>
    <c-aladdin>
    	<c-scroll
			ref="scroll"
			better-scroll
			bounce
			@scrollend="handleScrollEnd"
		>
			<c-scroll-item
				a-for="(i, index) in 10"
				:col="4"
				:key="index"
				@click.native="handleScrollItemClick({
					item,
					index
				})"
			>
				<c-img
					type="y"
					:src="src"
				/>
				<div>
					NO.{{ index }}
				</div>
			</c-scroll-item>
		</c-scroll>
		我是第{{page}}页
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-more': 'search-ui/More/More',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
			'c-img': 'search-ui/Image/Image'
        },
        data: {
			src:'http://img5.imgtn.bdimg.com/it/u=2335247747,2169262354&fm=26&gp=0.jpg',
			col: 8
        }
    }
</config>

<script >
export default {
	methods: {
		handleScrollItemClick(obj) {
			console.log('handleScrollItemClick', obj);
			this.$refs.scroll.scrollTo(obj.index - 1);
		},
		handleScrollEnd() {
			console.log('handleScrollEnd');
		}
	}
};
</script>
```

```atom 不等宽 scroll-item:
<template>
    <c-aladdin>
        <c-scroll>
			<c-scroll-item
				a-for="(item, index) in imgs"
				:col="item.col"
				:key="index"
			>
				<div
					:style="{
						paddingBottom: index === 0
							? '48.4%'
							: '100%'
					}"
					class="c-img c-img-s img-wrapper"
				>
					<img :src="item.src" />
				</div>
				<div>
					{{item.title}}
				</div>
			</c-scroll-item>
			<c-scroll-item :col="4">
			<c-more
				:url="urlSfParams.tcUrl"
				:params="urlSfParams"
			/>
			</c-scroll-item>
		</c-scroll>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-more': 'search-ui/More/More',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
			'c-img': 'search-ui/Image/Image'
        },
        data: {
			imgs: [
				{
					title:'No.1',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
					col: 8
				},
				{
					title:'No.2',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
					col: 4
				},
				{
					title:'No.3',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
					col: 4
				},
				{
					title:'No.4',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
					col: 4
				},
				{
					title:'No.5',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg',
					col: 4
				}
			],
			urlSfParams: {
			tcUrl: '//m.baidu.com'
			},
			page: 1
        }
    }
</config>

<style scoped>
.img-wrapper {
	border-radius: 3px;
}
img {
	width: 100%;
}
</style>
```

### 栅格套栅格

```atom 栅格套栅格；单元内分2列布局（4:6）
<template>
    <c-aladdin>
		<c-scroll
			scroller-flex
			@scrollend="getIndex"
		>
			<c-scroll-item
				a-for="(img, idx) in imgs"
				margin-bottom="0"
				has-border
				:col="col"
			>
				<c-scroll-inner
					vertical-align="center"
					:col="col"
					:inner-cols="innerCols"
				>
					<c-img
						:src="img.src"
						type="s"
						hack-white-stroke
						class="c-gap-top-zero c-gap-bottom-zero"
					/>
					<div
						class="content c-gap-inner-right-middle"
					>
						{{ img.content }}
					</div>
				</c-scroll-inner>
			</c-scroll-item>
			<c-scroll-item
				:col="4"
			>
				<c-more
					:url="urlSfParams.tcUrl"
					:params="urlSfParams"
				/>
			</c-scroll-item>
		</c-scroll>
    </c-aladdin>
</template>

<script type="config">
{
	data: {
		imgs: [
			{
				content:'这是内容这是内容这是内容这是内容这是内容',
				src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
			},
			{
				content:'这是内容这是内容这是内容这是内容这是内容',
				src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
			},
			{
				content:'这是内容这是内容这是内容这是内容这是内容',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
			},
			{
				content:'这是内容这是内容这是内容这是内容这是内容',
				src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
			},
			{
				content:'这是内容这是内容这是内容这是内容这是内容',
				src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
			}
		],
		col: 10,
		innerCols: [4, 6],
		urlSfParams: {
			tcUrl: '//m.baidu.com'
		},
		page: 1
	},
	components: {
		'c-aladdin': 'search-ui/Aladdin/Aladdin',
		'c-img': 'search-ui/Image/Image',
		'c-more': 'search-ui/More/More',
		'c-scroll': 'search-ui/Scroll/Scroll',
		'c-scroll-item': 'search-ui/Scroll/ScrollItem',
		'c-scroll-inner': 'search-ui/Scroll/ScrollInner',
		'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback'
	}
}
</script>

<script>
export default {
	methods: {
		getIndex(pageIndex) {
			this.page = pageIndex + 1;
		}
	}
};
</script>

<style scoped>
.c-img {
	margin: 0;
}
.content {
	display: flex;
	align-items: center;
	height: 100%;
}
</style>
```

```atom 栅格套栅格；单元内分2列布局（4:6）；增加点击态
<template>
    <c-aladdin>
		<c-scroll
			scroller-flex
			@scrollend="getIndex"
		>
			<c-scroll-item
				a-for="(img, idx) in imgs"
				margin-bottom="0"
				has-border
				:col="col"
			>
				<c-touchable-feedback>
					<c-scroll-inner
						vertical-align="center"
						:col="col"
						:inner-cols="innerCols"
					>
						<c-img
							:src="img.src"
							type="s"
							hack-white-stroke
							class="c-gap-top-zero c-gap-bottom-zero"
						/>
						<div
							class="content c-gap-inner-right-middle"
						>
							{{ img.content }}
						</div>
					</c-scroll-inner>
				</c-touchable-feedback>
			</c-scroll-item>
			<c-scroll-item
				:col="4"
			>
				<!-- 使用定位来解决 iOS 10.1 及以下高度 100% 填充问题 -->
				<!-- In Safari 10.1 and below, the height of (non flex) children are not recognized in percentages -->
				<!-- https://bugs.webkit.org/show_bug.cgi?id=137730 -->
				<c-touchable-feedback
					is-jump
					expand
					:style="{
						position: 'absolute',
						top: '0',
						bottom: '0',
						left: '0',
						right: '0'
					}"
					:url="urlSfParams.tcUrl"
					:url-params="urlSfParams"
					:open="!!(urlSfParams.tcUrl || (urlSfParams && urlSfParams.tcUrl))"
				>
					<c-more
						:url="urlSfParams.tcUrl"
						:params="urlSfParams"
					/>
				</c-touchable-feedback>
			</c-scroll-item>
		</c-scroll>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
			'c-img': 'search-ui/Image/Image',
            'c-more': 'search-ui/More/More',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
			'c-scroll-inner': 'search-ui/Scroll/ScrollInner',
			'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback'
        },
        data: {
			imgs: [
				{
					content:'这是内容这是内容这是内容这是内容这是内容',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
				},
				{
					content:'这是内容这是内容这是内容这是内容这是内容',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
				},
				{
					content:'这是内容这是内容这是内容这是内容这是内容',
						src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
				},
				{
					content:'这是内容这是内容这是内容这是内容这是内容',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
				},
				{
					content:'这是内容这是内容这是内容这是内容这是内容',
					src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
				}
			],
			col: 10,
			innerCols: [4, 6],
			urlSfParams: {
				tcUrl: '//m.baidu.com'
			},
			page: 1
        }
    }
</script>

<script>
export default {
	methods: {
		getIndex(pageIndex) {
			this.page = pageIndex + 1;
		}
	}
};
</script>

<style scoped>
.c-img {
	margin: 0;
}
.content {
	display: flex;
	align-items: center;
	height: 100%;
}
</style>
```

```atom 栅格套栅格；单元内分5列布局（1:2:2:2:1）
<template>
    <c-aladdin>
		<c-scroll @scrollend="getIndex">
			<c-scroll-item
				a-for="(img, idx) in imgs"
				:col="col2"
				:hasBorder="true"
			>
				<c-scroll-inner
					:col="col"
					:inner-cols="innerCols2"
					vertical-align="center"
				>
					<div></div>
					<c-img
						:src="img.src"
						type="s"
						hack-white-stroke
					/>
					<div
						:style="{
							'width': '100%',
							'text-align': 'center'
						}"
					>
						VS
					</div>
					<c-img
						:src="img.src"
						style="margin: .13rem 0;"
						type="s"
						hack-white-stroke
					/>
					<div></div>
				</c-scroll-inner>
			</c-scroll-item>
			<c-scroll-item :col="4">
			<c-more
				:url="urlSfParams.tcUrl"
				:params="urlSfParams"
			/>
			</c-scroll-item>
		</c-scroll>
    </c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
			'c-img': 'search-ui/Image/Image',
            'c-more': 'search-ui/More/More',
            'c-scroll': 'search-ui/Scroll/Scroll',
            'c-scroll-item': 'search-ui/Scroll/ScrollItem',
			'c-scroll-inner': 'search-ui/Scroll/ScrollInner'
        },
        data: {
	    imgs: [
		{
		    content:'这是内容这是内容这是内容这是内容这是内容这是内容',
		    src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
		},
		{
		    content:'这是内容这是内容这是内容这是内容这是内容这是内容',
		    src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
		},
		{
		    content:'这是内容这是内容这是内容这是内容这是内容这是内容',
	    	    src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
		},
		{
		    content:'这是内容这是内容这是内容这是内容这是内容这是内容',
		    src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
		},
		{
		    content:'这是内容这是内容这是内容这是内容这是内容这是内容',
		    src:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=778734358,597999377&fm=117&gp=0.jpg'
		}
	    ],
	    col: 10,
	    innerCols: [4, 6],
	    col2: 8,
	    innerCols2: [1, 2, 2, 2, 1],
	    urlSfParams: {
	    	tcUrl: '//m.baidu.com'
	    },
	    page: 1
        }
    }
</config>

<script>
    module.exports = {
        methods: {
            getIndex(pageIndex) {
                this.page = pageIndex + 1;
            }
        }
    };
</script>

<style scoped>
    .c-img {
	margin: 0;
    }
    .c-content {
		text-align: center;
    }
</style>
```

```atom 横滑；有可能为空节点的情况
<template>
	<c-aladdin>
		<c-scroll>
			<c-scroll-item
				a-for="(i, index) in 8"
				a-if="index > 0"
				:col="4"
				:key="index"
			>
				<c-img
					hack-white-stroke
				/>
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
	</c-aladdin>
</template>

<script type="config">
{
	data: {
	},
	components: {
		'c-aladdin': 'search-ui/Aladdin/Aladdin',
		'c-more': 'search-ui/More/More',
		'c-scroll': 'search-ui/Scroll/Scroll',
		'c-scroll-item': 'search-ui/Scroll/ScrollItem',
		'c-img': 'search-ui/Image/Image',
		'c-line': 'search-ui/Line/Line'
	}
}
</script>

<style scoped>
</style>
```

### ScrollAuto 自适应横滑容器

```atom 自适应横滑；单行
<template>
    <c-aladdin>
        <c-scroll-auto
			@scrollend="handleScrollEnd"
		>
			<div
				a-for="i in 15"
				:key="i"
				class="c-gap-right-middle"
			>
				<c-slink
					:text="'这是第' + i + '项'"
				/>
			</div>
		</c-scroll-auto>
    </c-aladdin>
</template>

<script type="config">
{
	data: {
	},
	components: {
		'c-aladdin': 'search-ui/Aladdin/Aladdin',
		'c-scroll-auto': 'search-ui/Scroll/ScrollAuto',
		'c-slink': 'search-ui/Slink/Slink'
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
```

```atom 自适应横滑；多行；水平排列
<template>
    <c-aladdin>
        <c-scroll-auto
			:row="2"
			@scrollend="handleScrollEnd"
		>
			<div
				a-for="i in 15"
				:key="i"
				class="c-gap-right-middle"
			>
				<c-slink
					:text="'这是第' + i + '项'"
				/>
			</div>
		</c-scroll-auto>
    </c-aladdin>
</template>

<script type="config">
{
	data: {
	},
	components: {
		'c-aladdin': 'search-ui/Aladdin/Aladdin',
		'c-scroll-auto': 'search-ui/Scroll/ScrollAuto',
		'c-slink': 'search-ui/Slink/Slink'
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
```

```atom 自适应横滑；多行；竖直排列
<template>
    <c-aladdin>
        <c-scroll-auto
			:row="2"
			sort-order="vertical"
			@scrollend="handleScrollEnd"
		>
			<div
				a-for="i in 15"
				:key="i"
				class="c-gap-right-middle"
			>
				<c-slink
					:text="'这是第' + i + '项'"
				/>
			</div>
		</c-scroll-auto>
    </c-aladdin>
</template>

<script type="config">
{
	data: {
	},
	components: {
		'c-aladdin': 'search-ui/Aladdin/Aladdin',
		'c-scroll-auto': 'search-ui/Scroll/ScrollAuto',
		'c-slink': 'search-ui/Slink/Slink'
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
```

## 注意事项

1. 非分页的原生滑动场景下使用，在不大于容器的情况下不可滑动，可自定义item展现样式。

2. NA2.0 区块点击态要求横滑 item (包括"查看更多") 点击态区域填满横滑容器高度，需要使用 flex 布局实现 (通过 `scrollerFlex` 设置)，因为"查看更多"实际高度不够填满容器高度，对 flex-item 子元素使用 `height: 100%` 在 iOS 10.1 及以下有bug (https://bugs.webkit.org/show_bug.cgi?id=137730)，目前通过对"查看更多"使用绝对定位解决。实现示例可参考 scrollImgs/srcollArticle/scrollTwo 源码，或者 NewsArticle 文档示例

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
snap | boolean | false | 可选 | snap&nbsp;滑动时定位到元素 | -
snapStepX | number | - | 可选 | snap&nbsp;滑动的距离（为&nbsp;itemWidth&nbsp;的倍数） | -
scrollerFlex | boolean | false | 可选 | 是否使用&nbsp;flex&nbsp;布局，示例见&nbsp;`ScrollImgs`&nbsp;/&nbsp;`SrcollArticle`&nbsp;/&nbsp;`ScrollTwo`&nbsp;/&nbsp;`NewsArticle` | -
bounce | boolean | false | 可选 | 是否是弹性滚动 | -
probeType | number | 3 | 可选 | 有时候我们需要知道滚动的位置。（只有在&nbsp;snap&nbsp;为&nbsp;true&nbsp;时可用）<br>当&nbsp;probeType&nbsp;为&nbsp;1&nbsp;的时候，会非实时（屏幕滑动超过一定时间后）派发scroll&nbsp;事件；<br>当&nbsp;probeType&nbsp;为&nbsp;2&nbsp;的时候，会在屏幕滑动的过程中实时的派发&nbsp;scroll&nbsp;事件；<br>当&nbsp;probeType&nbsp;为&nbsp;3&nbsp;的时候，不仅在屏幕滑动的过程中，而且在&nbsp;momentum&nbsp;滚动动画运行过程中实时派发&nbsp;scroll&nbsp;事件。 | -
betterScroll | boolean | false | 可选 | 是否强制开启&nbsp;better-scroll | -

#### ScrollAuto

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
row | number | 1 | 可选 | 横滑的行数 | -
sortOrder | string | horizontal | 可选 | 排序顺序：'horizontal'&nbsp;水平排列；'vertical'&nbsp;竖直排列 | -
rowTile | boolean | true | 可选 | 是否是通栏 | -

#### ScrollInner

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
col | number \| string | - | 可选 | 栅格宽度 | -
innerCols | array | [] | 可选 | 如果&nbsp;item&nbsp;内部符合分列布局，则设置&nbsp;innerCols&nbsp;可以设置每一列的栅格宽度，有n列就设置n个宽度。<br>数组中的元素之和必须为&nbsp;col。如果不是分列布局，则默认不填 | -
touchable | boolean | false | 可选 | 是否开启点击态 | -
verticalAlign | string | top | 可选 | 'vertical-align'&nbsp;样式 | -

#### ScrollItem

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
col | number \| string | - | 可选 | 栅格宽度 | -
innerCols | array | [] | 可选 | 如果&nbsp;item&nbsp;内部符合分列布局，则设置&nbsp;innerCols&nbsp;可以设置每一列的栅格宽度，有n列就设置n个宽度。<br>数组中的元素之和必须为&nbsp;col。如果不是分列布局，则默认不填 | -
hasBorder | boolean | false | 可选 | 是否有border，值为`border:&nbsp;solid&nbsp;1px&nbsp;#f1f1f1` | -

### Slots



名称 | 描述
--- | ---
default | 需要横滑的ScrollItem
more | 横滑的&nbsp;ScrollItem&nbsp;之后的内容&nbsp;一般为查看更多

#### ScrollAuto

名称 | 描述
--- | ---
default | 横滑项

#### ScrollInner

名称 | 描述
--- | ---
default | 栅格套栅格内部的栅格划分自定义区域

#### ScrollItem

名称 | 描述
--- | ---
default | 自定义&nbsp;item&nbsp;分列布局每一列的内容

### Events


- **scrollend**: 滚动/翻页结束事件

名称 | 类型 | 描述
--- | --- | ---
${param1} | number | 页码
  ${param2} | Object | 滚动相关参数
  ${param2}.x | number | 当前位置
  ${param2}.startX | number | 开始滚动的位置
  ${param2}.maxScrollX | number | 最大滚动位置

- **touchend**: 触摸结束事件，bounce === true || snap === true 时生效

名称 | 类型 | 描述
--- | --- | ---
x | number | 当前位置
  maxScrollX | number | 最大滚动位置

- **scroll**: 滚动中，bounce === true || snap === true 时生效

名称 | 类型 | 描述
--- | --- | ---
x | number | 当前位置
  startX | number | 开始滚动的位置
  maxScrollX | number | 最大滚动位置

- **scrollstart**: 滚动开始，bounce === true || snap === true 时生效
	无参数

- **beforescrollstart**: 滚动开始之前，bounce === true || snap === true 时生效
	无参数


#### ScrollAuto


- **scrollend**: 滑动结束事件
	无参数


### Methods


- **scrollTo**: 滚动到指定位置

名称 | 类型 | 描述
--- | --- | ---
index | number | 要滚动到位置的索引

- **getBScrollIns**: 得到 better-scroll 的实例
	无参数

