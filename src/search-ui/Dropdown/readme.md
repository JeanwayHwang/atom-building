---
name: Dropdown
title: 下拉选择框
category: 表单类
owner: 陈骁
---

## 使用场景

> 参考UE规范：[D8.2 【基础组件】-【筛选器】-【表单筛选】](http://sfe.baidu.com:8186/ue-guide/dropdown.html)

## 示例

```atom 下拉选择框
<template>
    <c-aladdin
        touchable
    >
        <c-row>
            <c-span>
                <c-dropdown
                    label="标签："
                    value="v2"
                    :options="options"
                    @change="handleChange"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            options: [
                {
                    value: 'v1',
                    text: 'first'
                },
                {
                    value: 'v2',
                    text: 'second'
                },
                {
                    value: 'v3',
                    text: 'last'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-dropdown': 'search-ui/Dropdown/Dropdown',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
        handleClick() {
            console.log('handleClick');
        },
        handleChange(obj) {
            console.log('handleChange obj', obj);
        }
    }
};
</script>
```

```atom 调用Selector组件
<template>
    <c-aladdin
        touchable
    >
        <c-row>
            <c-span>
                <c-dropdown
                    label="标签："
                    :options="options"
                    @change="handleChange"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            options: [
                {
                    value: 'v1',
                    text: 'first'
                },
                {
                    value: 'v2',
                    text: 'second'
                },
                {
                    value: 'v3',
                    text: 'last'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-dropdown': 'search-ui/Dropdown/DropdownEnhanced',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('handleChange obj', obj);
        }
    }
};
</script>
```

```atom 禁用
<template>
    <c-aladdin touchable>
        <c-row>
            <c-span>
                <c-dropdown
                    label="禁用："
                    disabled
                    :options="options"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        data: {
            options: [
                {
                    value: 'v1',
                    text: 'first'
                },
                {
                    value: 'v2',
                    text: 'second'
                },
                {
                    value: 'v3',
                    text: 'last'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dropdown': 'search-ui/Dropdown/Dropdown',
        }
    }
</config>
```

```atom 选项组 optGroup
<template>
    <c-aladdin touchable>
        <c-row>
            <c-span>
                <c-dropdown
                    :opt-group="optGroup"
                    label="选项组："
                    @change="handleChange"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        data: {
            optGroup: [
                {
                    label: '食物',
                    options: [
                        {
                            text: '汉堡',
                            value: '汉堡 value'
                        },
                        {
                            text: '薯条',
                            value: '薯条 value'
                        }
                    ]
                },
                {
                    label: '电影',
                    options: [
                        {
                            text: '泰坦尼克号',
                            value: '泰坦尼克号 value'
                        },
                        {
                            text: '教父',
                            value: '教父 value'
                        }
                    ]
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dropdown': 'search-ui/Dropdown/Dropdown',
        }
    }
</config>

<script>
export default {
    methods: {
        handleClick() {
            console.log('handleClick');
        },
        handleChange(obj) {
            console.log('handleChange obj', obj);
        }
    }
};
</script>
```

```atom 动态修改数据
<template>
    <c-aladdin touchable>
        <c-row>
            <c-span>
                <c-dropdown
                    :options="options"
                    :value="value"
                    @change="handleChange"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span a-for="option in options" :key="option.value">
                <c-button
                    :disabled="value === option.value"
                    :text="'改为' + option.text"
                    @click="value = option.value"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            options: [
                {
                    value: 'v1',
                    text: 'first'
                },
                {
                    value: 'v2',
                    text: 'second'
                },
                {
                    value: 'v3',
                    text: 'third thirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthird'
                }
            ],
            value: 'v1'
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-dropdown': 'search-ui/Dropdown/Dropdown',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-button': 'search-ui/Button/Button'
        }
    }
</script>

<script>
export default {
    methods: {
        handleClick() {
            console.log('handleClick');
        },
        handleChange(obj) {
            console.log('handleChange obj', obj);
        }
    }
};
</script>
```

```atom 取消边框和设置朝向；调用Selector组件

<template>
    <c-aladdin touchable>
        <c-row>
            <c-span col="6" style="line-height:48px">剧集</c-span>
            <c-span col="6">
                <c-dropdown
                    :options="options"
                    direction="rtl"
                    no-border
                    @change="handleChange"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            options: [
                {
                    value: 'v1',
                    text: '爱奇艺'
                },
                {
                    value: 'v2',
                    text: '腾讯'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-dropdown': 'search-ui/Dropdown/DropdownEnhanced',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span'
        }
    }
</script>

<script>
export default {
    methods: {
        handleClick() {
            console.log('handleClick');
        },
        handleChange(obj) {
            console.log('handleChange obj', obj);
        }
    }
};
</script>
```

```atom 有/无默认项；调用Selector组件
<template>
    <c-aladdin touchable>
        <c-row>
            <c-span>
                <c-dropdown
                    label="无默认项："
                    :options="options"
                    @change="handleChange"
                />
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-dropdown
                    label="有默认选项："
                    value="v2"
                    :options="options"
                    @change="handleChange"
                />
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        data: {
            options: [
                {
                    value: 'v1',
                    text: 'first'
                },
                {
                    value: 'v2',
                    text: 'second'
                },
                {
                    value: 'v3',
                    text: 'last'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dropdown': 'search-ui/Dropdown/DropdownEnhanced',
        }
    }
</config>

<script>
export default {
    methods: {
        handleClick() {
            console.log('handleClick');
        },
        handleChange(obj) {
            console.log('handleChange obj', obj);
        }
    }
};
</script>
```

## 注意事项

1. `options` 和 `otpGroup` 不可共存，优先取 `options`

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
disabled | boolean | false | 可选 | 是否禁用 | -
value | number \| string | - | 可选 | 选中的值 | -
options | array | [] | 可选 | 选择列表的值 | -
>> options[].text | string | - | - | 选项文案 | -
>> options[].value | string \| number | - | - | 选项值 | -
optGroup | array | [] | 可选 | 选项分组列表的值 | -
>> optGroup[].label | string | - | - | 选项组标签文案 | -
>> optGroup[].options | Array.&lt;Object&gt; | - | - | 自选项列表 | -
>> optGroup[].options[].text | string | - | - | 选项文案 | -
>> optGroup[].options[].value | string \| number | - | - | 选项值 | -
label | string | - | 可选 | 下拉框上方的标签名 | -
name | string | - | 可选 | `select`标签需要的表单项名称 | -
direction | string | ltr | 可选 | 文字方向，可选值：`ltr`，`rtl` | -
noBorder | boolean | false | 可选 | 是否去掉边框 | -
silent | boolean | false | 可选 | 静默参数：是否在值改变时不触发&nbsp;change&nbsp;事件，默认为&nbsp;false | -



### Events

- **change**: 单选类型时选择后的改变事件

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.target | object | 当前组件实例
  ${param1}.value | number \| string | 改变后的值
  ${param1}.optGroupSelectedIndex | number | 改变后的选中的组索引
  ${param1}.selectedIndex | number | 改变后的选中的项索引



