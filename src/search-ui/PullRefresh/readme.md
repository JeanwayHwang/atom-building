---
name: PullRefresh
title: 下拉刷新组件
category: 交互类
owner: 姚昌
---

## 使用场景

> 参考UE规范：[【附录&其他】-【下拉刷新交互类组件】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Loading.html)

## 示例

```atom 下拉刷新示例
<template>
    <div class="c-refresh-demo">
        <c-pull-refresh @on-refresh="handleLoaded">
            <c-line 
                a-for="item in list" 
                class="c-refresh-demo-item"
            >
                {{item.title}}
            </c-line>
        </c-pull-refresh>
    </div>
</template>

<script>
export default {
    methods: {
        handleLoaded(defer) {
            // 模拟异步请求
            setTimeout(() => {
                if (Math.round(Math.random())) {
                    defer.success(1);
                    this.list.unshift({title: '新增一条数据'});
                }
                else {
                    defer.fail();
                }
            }, 3000);
        }
    }
}
</script>

<style lang="less">
    .c-refresh-demo-item {
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        background-color: #fff;
    }
</style>

<script type="config">
    {
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-pull-refresh': 'search-ui/PullRefresh/PullRefresh'
        },
        data: {
            list: [
                {title: "下拉刷新组件测试"},
                {title: "下拉刷新组件测试"},
                {title: "下拉刷新组件测试"},
                {title: "下拉刷新组件测试"},
                {title: "下拉刷新组件测试"},
                {title: "下拉刷新组件测试"}
            ]
        }
    }
</script>
```

## 注意事项

异步操作之后，需要执行`defer.success(dataSize)`或`deder.fail()`来告诉组件展示提示信息，其中dataSize是请求数据的长度。

## API：

### Props

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
|offset|Number|58|下拉多少距离触发`on-refresh`|
|errorTip|String|"暂时没有更新，休息一下吧"|异步请求失败后的提示|
|tipShowTime|Number|1280|tip提示展示时间|

### Slots

无

### Events

| 名称 | 参数 | 描述 |
| --- | ----- | ----|
| on-refresh | defer | 当下拉到指定高度后松开，触发刷新事件，用户在此时进行异步操作 |
