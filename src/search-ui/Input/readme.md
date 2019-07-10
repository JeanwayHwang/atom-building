---
name: Input
title: 表单组件
category: 表单类
owner: 陈骁
---

## 使用场景

> 参考UE规范：[D7 【基础组件】-【输入框】](http://sfe.baidu.com:8186/ue-guide/input.html)

## 示例

```atom 输入框组件
<template>
<c-aladdin touchable title="整卡可点的 Aladdin 卡">
    <form class="" action="">
        text:
        <c-row>
            <c-span>
                <c-input :placeholder="placeholder" />
            </c-span>
        </c-row>
        <c-divider />
        search:
        <c-row>
            <c-span>
                <c-input
                    type="search"
                    name="haha"
                    :placeholder="placeholder"
                />
            </c-span>
        </c-row>
        <c-divider />
        容错:
        <c-row>
            <c-span>
                <c-input :placeholder="placeholder" message="请输入正确内容" />
            </c-span>
        </c-row>
        <c-divider />
        disabled:
        <c-row>
            <c-span>
                <c-input
                    type="text"
                    :placeholder="placeholder1"
                    disabled
                />
            </c-span>
        </c-row>
        <c-divider />
        password:
        <c-row>
            <c-span>
                <c-input type="password" value="password" />
            </c-span>
        </c-row>
        <c-divider />
        隐藏关闭图标:
        <c-row>
            <c-span>
                <c-input
                    value="500"
                    :is-show-close-icon="false"/>
            </c-span>
        </c-row>
        添加右侧文字（注：使用右侧文字时必须隐藏关闭图标）:
        <c-row>
            <c-span>
                <c-input
                    value="10000"
                    right-text="日元"
                    right-color="#999"
                    :is-show-close-icon="false"
                />
            </c-span>
        </c-row>
        添加左侧文字:
        <c-row>
            <c-span>
                <c-input
                    value="北京"
                    left-text="城市"
                    left-color="#999"
                />
            </c-span>
        </c-row>
        改变主颜色:
        <c-row>
            <c-span>
                <c-input
                    value="20000"
                    placeholder="请输入文字"
                    primary-color="#02B7CA"
                    right-text="元"
                    right-color="#999"
                    :is-show-close-icon="false"
                />
            </c-span>
        </c-row>
        改变边框颜色:
        <c-row>
            <c-span>
                <c-input
                    value="20000"
                    placeholder="请输入文字"
                    primary-color="#02B7CA"
                    border-color="#2b99ee"
                    right-text="元"
                    right-color="#999"
                    :is-show-close-icon="false"
                />
            </c-span>
        </c-row>
        事件响应:
        <c-row>
            <c-span>
                <c-input
                    value="20000"
                    placeholder="请输入文字"
                    @focus="onFocus"
                    @input="onInput"
                    @blur="onBlur"
                    @clear="onClear"
                />
            </c-span>
        </c-row>
        <c-divider />
        focus：
        <c-row class="c-gap-bottom">
            <c-span>
                <div @click="changeFocus" >change Focus </div>
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-input :isFocus="isFocus" :placeholder="placeholder" />
            </c-span>
        </c-row>
    </form>
</c-aladdin>
</template>

<config>
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-divider': 'search-ui/Divider/Divider',
            'c-input': 'search-ui/Input/Input',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            "c-btn": "search-ui/Button/Button",
        },
        data: {
            type: 'text',
            placeholder: '请输入文字',
            placeholder1: 'disabled',
            isFocus: false
        }
    }
</config>

<script>
export default {
    methods: {
        changeFocus() {
            this.isFocus = !this.isFocus;
            console.log(`focus：${this.isFocus}`);
        },
        onFocus(obj) {
            console.log("onFocus:" + obj.value);
        },
        onInput(obj) {
            console.log("onInput:" + obj.value);
        },
        onBlur(obj) {
            console.log("onBlur:" + obj.value);
        },
        onClear() {
            console.log("onClear");
        },
    }
};
</script>
```

### 范围输入框

```atom 范围输入框 RangeInput；placeholder
<template>
    <c-aladdin>
        <c-range-input
            ref="rangeInput"
            :label="label"
            :options="options"
            :unit="unit"
            :default-value="defaultValue"
            :min="min"
            :max="max"
        />
        <c-btn-layout
            :style="{
                'margin-left': '-.17rem',
                'margin-right': '-.17rem'
            }"
            border-top="1px solid #fff"
            border-bottom="1px solid #fff"
            @click="handleBtnLayoutClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    props: {
    },
    data: {
        label: '价格',
        unit: '元',
        min: {
            placeholder: '请输入最小值'
        },
        max: {
            placeholder: '请输入最大值'
        },
        options: [
            {
                "text": "100-500",
                "value": "100, 500"
            }, {
                "text": "1000-5000",
                "value": "1000,5000"
            }, {
                "text": "10000-50000",
                "value": "10000,50000"
            }, {
                "text": "50000-100000",
                "value": "50000,100000"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-range-input': 'search-ui/Input/RangeInput',
        'c-btn-layout': 'search-ui/Button/BtnLayout',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
        handleBtnLayoutClick(obj) {
            console.log('handleBtnLayoutClick', obj);
            if (obj.index === 1) {
                let err = this.$refs.rangeInput.check();
                console.log('err', err);
            }
            else if (obj.index === 0) {
                this.$refs.rangeInput.reset();
            }
        }
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

```atom 范围输入框 RangeInput；默认值
<template>
    <c-aladdin>
        <c-row>
            <c-span>
                <c-btn
                    text="点我通过 js 改变 defaultValue"
                    @click="handleBtnClick"
                >
                </c-btn>
            </c-span>
        </c-row>
        <c-range-input
            ref="rangeInput"
            :label="label"
            :options="options"
            :unit="unit"
            :default-value="defaultValue"
            @change="handleRangeInputChange"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        defaultValue: '100,500',
        label: '价格',
        unit: '元',
        options: [
            {
                "text": "100-500",
                "value": "100,500"
            }, {
                "text": "1000-5000",
                "value": "1000,5000"
            }, {
                "text": "10000-50000",
                "value": "10000,50000"
            }, {
                "text": "50000-100000",
                "value": "50000,100000"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-range-input': 'search-ui/Input/RangeInput',
        'c-btn': 'search-ui/Button/Button',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>

<script>
export default {
    mounted() {
    },
    methods: {
        handleRangeInputChange(obj) {
            console.log(obj);
        },
        handleBtnClick() {
            console.log('按钮点击');
            if (this.defaultValue === '100,500') {
                this.defaultValue = '1000,5000';
                this.$refs.rangeInput.setDefaultValue(this.defaultValue);
            }
            else {
                this.defaultValue = '100,500';
                this.$refs.rangeInput.setDefaultValue(this.defaultValue);
            }
        }
    },
    watch: {
    }
};
</script>

<style module>
.tag-item {
}
</style>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
type | string | text | 可选 | 输入类型，如text、password等 | -
placeholder | string | - | 可选 | 占位 | -
value | string \| number | - | 可选 | 输入框的值 | -
disabled | boolean | false | 可选 | 是否禁用 | -
name | string | - | 可选 | 表单中的名称 | -
message | string | - | 可选 | 错误提示信息 | -
leftText | string | - | 可选 | 左侧文案 | -
leftColor | string | - | 可选 | 左侧文案颜色 | -
rightText | string | - | 可选 | 右侧文案 | -
rightColor | string | - | 可选 | 右侧文案颜色 | -
isShowCloseIcon | boolean | true | 可选 | 是否显示清除按钮 | -
primaryColor | string | #000 | 可选 | 主题颜色 | -
borderColor | string | - | 可选 | 边框颜色 | -
maxLength | string \| number | - | 可选 | 输入内容的最大长度 | -
noBorder | boolean | - | 可选 | 是否没有边框 | -
isFocus | boolean | false | 可选 | 是否获取焦点 | -
marginTop | string | .05rem | 可选 | 外边距top值 | -
marginBottom | string | .05rem | 可选 | 外边距bottom值 | -
marginLeft | string |  | 可选 | 外边距left值 | -
marginRight | string |  | 可选 | 外边距right值 | -

#### RangeInput

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
label | string | - | 可选 | 标签 | -
defaultValue | string | - | 可选 | 默认值 | -
unit | string | - | 可选 | 单位 | -
allowMinus | boolean | false | 可选 | 是否允许负数 | -
errorTips | string | 错误提示： | 可选 | 错误提示语；如果该值为空，则不显示错误提示 | -
min | object | {"placeholder":""} | 可选 | 最小值 | -
max | object | {"placeholder":""} | 可选 | 最大值 | -
ins | object | - | 可选 | 外部实例；外部传入的实例，在部分场景下，需要把&nbsp;vnode&nbsp;挂载到外部传入的实例上 | -
spreadOpts | object | {"show":true,"spread":false,"threshold":2,"paddingBottom":".05rem","touchableFeedbackBottom":-0.05} | 可选 | 展开收起配置 | -
>> spreadOpts.show | boolean | true | - | 是否显示展开收起 | -
>> spreadOpts.spread | boolean | true | - | 是否展开 | -
>> spreadOpts.threshold | number | 2 | - | 收起状态时的高度 | -
options | array | [] | 可选 | 范围输入的预置选项们 | -
>> options[].text | string | - | - | 文案 | -
>> options[].value | string | - | - | 值 | -
forceCheck | boolean | false | 可选 | 强制显示对勾；不论是&nbsp;radio&nbsp;还是&nbsp;checkbox，显示对勾就完事了 | -
marginInner | string |  | 可选 | 内部&nbsp;margin&nbsp;为了解决在某些&nbsp;Android&nbsp;浏览器上边线消失的问题 | -
primaryColor | string | - | 可选 | 主颜色 | -



### Events


- **focus**: 获得焦点事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.value | string | 输入框的值

- **clear**: 点击关闭(清除)事件
	无参数

- **blur**: 失去焦点事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.value | string | 输入框的值

- **input**: 输入事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.value | string | 输入框的值


#### RangeInput


- **change**: 改变事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.value | string | 值
  ${param1}.type | string | 类型：min（最小值）；max（最大值）

- **spreadchange**: 展开收起状态改变后触发的回调

名称 | 类型 | 描述
--- | --- | ---
spread | boolean | 是否展开
  type | string | 当前展开收起的类型
  height | number | 当前高度
  diffHeight | number | 相较于上一次变化的高度，主要用来配合外侧元素动态计算高度


### Methods


- **setValue**: 设置输入框的值

名称 | 类型 | 描述
--- | --- | ---
value | string | 输入框的值


#### RangeInput


- **reset**: 重置
	无参数

- **check**: 检查是否有输入框错误的问题，返回值 err 为错误对象；err.errno 错误代码，err.errmsg 错误信息；对照关系如下表
  | errno | errmsg |
  | --- | --- |
  | 0 | |
  | 1 | 最小值不是数字 |
  | 2 | 最大值不是数字 |
  | 3 | 最小值大于最大值 |
  | 4 | 最小值为负数 |
  | 5 | 最大值为负数 |
	无参数

- **setDefaultValue**: 处理默认值

名称 | 类型 | 描述
--- | --- | ---
defaultValue | string | 默认值，多个时用`,`分隔

