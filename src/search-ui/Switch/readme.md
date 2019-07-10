---
name: Switch
title: 开关
category: 交互类
owner: 李宇航
---

## 示例

```atom 简单的示例
<template>
    <div>
        <div class="c-container">
            <h2>默认关闭</h2>
            <c-switch :value="false"></c-switch>

            <h2>默认开启</h2>
            <c-switch :value="true"></c-switch>

            <h2>无动效</h2>
            <c-switch :value="false" :transition="false"></c-switch>

            <h2>双向绑定</h2>
            <c-switch :value="value" @change="onChange"></c-switch>
            <c-row>
                <c-btn @click="onClick" :text="value ? '⭕️  点我关闭 ⭕️ ' : '❌  点我开启 ❌ '" />
            </c-row>
        </div>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-btn': 'search-ui/Button/Button',
            'c-switch': 'search-ui/Switch/Switch'
        },
        data: {
            value: false
        }
    }
</script>

<script>
    export default {
        methods: {
            onChange (e) {
                this.value = e
                console.log('change')
            },
            onClick () {
                this.value = !this.value
            }
        }
    };
</script>

```

## 注意事项

开关组件的默认 css display 值为 inline-block


## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
value | boolean | - | 必选 | 开关状态值 | -
transition | boolean | true | 可选 | 是否开启动效 | -



### Events


- **change**: 点击切换

名称 | 类型 | 描述
--- | --- | ---
${param1} | string | 当前开关value



