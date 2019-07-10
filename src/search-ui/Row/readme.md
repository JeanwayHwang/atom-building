---
name: Row
title: 栅格行
category: 布局类
owner: 王凯
---

### 使用说明

出现在c-container中，显示栅格中一行。

## 示例

```atom 栅格行 c-row \ c-span
<template>
	<c-aladdin>
        <div>普通：</div>
    	<c-row>
            <c-span col="3" ><c-slink text="col3"></c-slink></c-span>
            <c-span col="3" ><c-slink text="col3"></c-slink></c-span>
            <c-span col="3" ><c-slink text="col3"></c-slink></c-span>
    		<c-span col="3" ><c-slink text="col3"></c-slink></c-span>
    	</c-row>
    	<c-divider/>
    	<c-row >
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
    	</c-row>
    	<c-divider/>
    	<c-row >
            <c-span col="6" ><c-slink text="col6"></c-slink></c-span>
            <c-span col="6" ><c-slink text="col6"></c-slink></c-span>
    	</c-row>
        <c-divider/>
        <c-row >
            <c-span ><c-slink text="浮动span"></c-span>
            <c-span ><c-slink text="浮动span"></c-span>
        </c-row>
        <c-divider/>
    </c-aladdin>
</template>

<config>
    {
        components: {
        	'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
        	'c-slink': 'search-ui/Slink/Slink',
        	'c-span': 'search-ui/Row/Span',
        	'c-divider': 'search-ui/Divider/Divider'
        },
        data: {
        	text: 'c-row测试'
        }
    }
</config>
```

```atom 去除到页面两边的间距 c-row-tile / 去除内部栅格元素间的间距 c-row-tight:
<template>
	<c-aladdin>
        <div>c-row c-row-tile</div>
        <c-row type="tile" class="c-row">
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
        </c-row>
        <c-divider />
        <div>c-row</div>
        <c-row >
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
        </c-row>
        <c-divider />
        <div>c-row c-row-tight</div>
        <c-row type="tight">
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
        </c-row>
    </c-aladdin>
</template>

<config>
    {
        components: {
			'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
        	'c-slink': 'search-ui/Slink/Slink',
        	'c-span': 'search-ui/Row/Span',
        	'c-divider': 'search-ui/Divider/Divider'
        },
        data: {
        	text: 'c-span测试',
        	tile: 'tile',
        	num: 3
        }
    }
</config>
```

```atom 内容垂直方向布局，默认为向上
<template>
	<c-aladdin>
        <div class="c-gap-bottom">c-row 内容垂直向上(蓝色为父容器)</div>
        <c-row class="c-row c-row-test">
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
        </c-row>
        <div class="c-gap-bottom c-gap-top">c-row 内容垂直居中(蓝色为父容器)</div>
        <c-row class="c-row c-row-test" :verticalAlign="aligns">
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
        </c-row>
        <div class="c-gap-bottom c-gap-top">c-row 内容垂直向下(蓝色为父容器)</div>
        <c-row class="c-row c-row-test" verticalAlign="bottom">
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
            <c-span col="4" ><c-slink text="col4"></c-slink></c-span>
        </c-row>
    </c-aladdin>
</template>

<style lang="less">
    .c-row-test {
        height: 100px;
        background-color: #2b99ff;
    }
</style>

<config>
    {
        components: {
			'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
        	'c-slink': 'search-ui/Slink/Slink',
        	'c-span': 'search-ui/Row/Span',
        	'c-divider': 'search-ui/Divider/Divider'
        },
        data: {
        	text: 'c-span测试',
        	tile: 'tile',
        	num: 3,
            aligns: 'middle'
        }
    }
</config>
```

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | - | 可选 | 接受参数 `tile`、`tigh`t，对应 pmd 中的 c-row-title、c-row-tight | -
verticalAlign | string | - | 可选 | 接受参数 top\middle\bottom，分别生成c-row-align-top\c-row-align-middle\c-row-align-bottom | -

#### Span

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
col | string \| number | - | 可选 | 栅格宽度， 1-12 | -

### Slots



名称 | 描述
--- | ---
default | 栅格内容，只能包含 `Span` 组件

#### Span

名称 | 描述
--- | ---
default | 栅格块内容

### Events
无
### Methods
无