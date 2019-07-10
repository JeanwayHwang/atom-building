---
name: Drawer
title: 抽屉组件
category: 交互类
owner: 王凯
---


## 示例

```atom 列表单选类型
<template>
    <c-aladdin>
        <c-drawer
            :is-open="isOpen"
            :title="title"
            :list="list"
            @close="handleClose"
            @change="handleChange">
        </c-drawer>
        <c-row>
            <c-span col="12">
                <c-btn
                    text="打开抽屉，单选类型"
                    @click="handleOpenDrawer"/>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isOpen: false,
            title: '目录',
            list: [
                {
                    text: '概览'
                },
                {
                    text: '什么是爵士舞'
                },
                {
                    text: '零基础如何学Jazz零基础如何学Jazz零基础如何学Jazz零基础如何学Jazz零基础如何学Jazz'
                },
                {
                    text: 'Jazz基础动作教学'
                },
                {
                    text: 'Jazz成品舞分解动作'
                },
                {
                    text: '大咖学Jazz的经历体会'
                },
                {
                    text: '爵士舞练习的基本方法'
                },
                {
                    text: '男生爵士舞专属训练1'
                },
                {
                    text: '男生爵士舞专属训练2'
                },
                {
                    text: '男生爵士舞专属训练3'
                },
                {
                    text: '男生爵士舞专属训练4'
                },
                {
                    text: '男生爵士舞专属训练5'
                },
                {
                    text: '男生爵士舞专属训练6'
                },
                {
                    text: '男生爵士舞专属训练7'
                },
                {
                    text: '男生爵士舞专属训练8'
                },
                {
                    text: '男生爵士舞专属训练9'
                },
                {
                    text: '男生爵士舞专属训练10'
                },
                {
                    text: '男生爵士舞专属训练11'
                },
                {
                    text: '男生爵士舞专属训练12'
                },
                {
                    text: '男生爵士舞专属训练13'
                },
                {
                    text: '男生爵士舞专属训练14'
                },
                {
                    text: '男生爵士舞专属训练15'
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-drawer": "search-ui/Drawer/Drawer",
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
    module.exports = {
        methods: {
            handleOpenDrawer() {
                this.isOpen = true;
                console.log('handleOpenDrawer');
            },
            handleClose() {
                this.isOpen = false;
            },
            handleChange(obj) {
                console.log('handleChange obj', obj);
            }
        }
    }
</script>
```

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
isOpen | boolean | false | 可选 | 控制是否显示 | -
title | string | - | 可选 | 标题 | -
list | array | [] | 可选 | 单选类型列表数据 | -
>> list[].text | string | - | - | 显示文案 | -
direction | string | right | 可选 | 方向 | -
cols | object | {"left":4,"right":8} | 可选 | 栅格比例 | -
>> cols.left | number | 4 | - | 左边区域宽度（1-12） | -
>> cols.right | number | 4 | - | 右边边区域宽度（1-12） | -
leftTips | object | {"text":"轻触关闭目录","icon":"gesture"} | 可选 | 左侧蒙层关闭提示 | -
>> leftTips.text | string | 轻触关闭目录 | - | 提示文案 | -
>> leftTips.icon | string | gesture | - | 提示icon | -
zIndex | number | 501 | 可选 | zIndex | -

### Slots



名称 | 描述
--- | ---
default | 内容区插槽，可完全自定义

### Events

- **change**: 单选类型时选择后的改变事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.item | object | 选中项数据
  ${param1}.index | number | 选中项索引

- **close**: 关闭浮层事件，需要监听该事件控制抽屉组件是否显示
	无参数



