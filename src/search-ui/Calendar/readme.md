---
name: Calendar
title: 日历
category: 基础组件
owner: 王凯
---

## 注意事项

1. 请自行在回调事件里控制显示隐藏

## 示例

<h6 id="日历 单选"></h6>

```atom 日历 单选
<template>
    <c-aladdin>
        <c-calendar
            :is-show="isShow"
            start-text="出发"
            :type="1"
            :before-month-num="0"
            :after-month-num="5"
            @change="handleChange"
            @confirm="handleConfirm"
            @reset="handleReset"/>
        <c-row class="c-gap-bottom">
            <c-span col="12">
                <c-btn
                    text="打开日历"
                    @click="handleOpenCalendar"/>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: false
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span",
            "c-calendar": "search-ui/Calendar/Calendar"
        }
    }
</script>

<script>
    export default {
        methods: {
            handleOpenCalendar() {
                this.isShow = true;
            },
            handleConfirm(obj) {
                console.log('确认事件 confirm', obj);
                this.isShow = false;
            },
            handleChange(obj) {
                console.log('改变事件 change obj', obj);
            },
            handleReset() {
                console.log('重置按钮点击事件 reset');
            }
        }
    };
</script>
```

<h6 id="日历 范围选择"></h6>

```atom 日历 范围选择
<template>
    <c-aladdin>
        <c-calendar
            :is-show="isShow"
            start-text="入住"
            end-text="离店"
            :before-month-num="0"
            :after-month-num="7"
            @change="handleChange"
            @confirm="handleConfirm"
            @reset="handleReset"/>
        <c-row class="c-gap-bottom">
            <c-span col="12">
                <c-btn
                    text="打开日历"
                    @click="handleOpenCalendar"/>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: false
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span",
            "c-calendar": "search-ui/Calendar/Calendar"
        }
    }
</script>

<script>
    export default {
        methods: {
            handleOpenCalendar() {
                this.isShow = true;
            },
            handleConfirm(obj) {
                console.log('确认事件 confirm', obj);
                this.isShow = false;
            },
            handleChange(obj) {
                console.log('改变事件 change obj', obj);
            },
            handleReset() {
                console.log('重置按钮点击事件 reset');
            }
        }
    };
</script>
```

<h6 id="日历 设置默认选中项"></h6>

```atom 日历 默认选中项
<template>
    <c-aladdin>
        <c-calendar
            ref="calendar"
            :is-show="isShow"
            start-text="出发"
            end-text="返程"
            :before-month-num="0"
            :after-month-num="7"
            :default-checked-arr="defaultCheckedArr"
            @change="handleChange"
            @confirm="handleConfirm"
            @reset="handleReset"/>
        <c-row class="c-gap-bottom">
            <c-span col="12">
                <c-btn
                    text="打开日历"
                    @click="handleOpenCalendar"/>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: false,
            defaultCheckedArr: []
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span",
            "c-calendar": "search-ui/Calendar/Calendar"
        }
    }
</script>

<script>
    export default {
        mounted() {
            this.defaultCheckedArr = [
                {
                    year: 2018,
                    month: 8,
                    day: 25
                },
                {
                    year: 2018,
                    month: 8,
                    day: 30
                }
            ];
            console.log('this.defaultCheckedArr', this.defaultCheckedArr);
        },
        methods: {
            handleOpenCalendar() {
                this.isShow = true;
            },
            handleConfirm(obj) {
                console.log('确认事件 confirm', obj);
                this.isShow = false;
            },
            handleChange(obj) {
                console.log('改变事件 change obj', obj);
            },
            handleReset() {
                console.log('重置按钮点击事件 reset');
            }
        }
    };
</script>
```

<h6 id="日历 设置可以选中同一天"></h6>

```atom 日历 设置可以选中同一天
<template>
    <c-aladdin>
        <c-calendar
            ref="calendar"
            :is-show="isShow"
            start-text="出发"
            end-text="返程"
            same-day-text="往返"
            :before-month-num="0"
            :after-month-num="7"
            :default-checked-arr="defaultCheckedArr"
            @change="handleChange"
            @confirm="handleConfirm"
            @reset="handleReset"/>
        <c-row class="c-gap-bottom">
            <c-span col="12">
                <c-btn
                    text="打开日历"
                    @click="handleOpenCalendar"/>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: false,
            defaultCheckedArr: [
                {
                    year: 2018,
                    month: 7,
                    day: 18
                },
                {
                    year: 2018,
                    month: 7,
                    day: 18
                }
            ]
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span",
            "c-calendar": "search-ui/Calendar/Calendar"
        }
    }
</script>

<script>
    export default {
        methods: {
            handleOpenCalendar() {
                this.isShow = true;
            },
            handleConfirm(obj) {
                console.log('确认事件 confirm', obj);
                this.isShow = false;
            },
            handleChange(obj) {
                console.log('改变事件 change obj', obj);
            },
            handleReset() {
                console.log('重置按钮点击事件 reset');
            }
        }
    };
</script>
```

```atom 日历 自定义距离顶部的间距
<template>
    <c-aladdin>
        <c-calendar
            :is-show="isShow"
            start-text="入住"
            end-text="离店"
            :before-month-num="0"
            :after-month-num="7"
            top="55px"
            @change="handleChange"
            @confirm="handleConfirm"
            @reset="handleReset"/>
        <c-row class="c-gap-bottom">
            <c-span col="12">
                <c-btn
                    text="打开日历"
                    @click="handleOpenCalendar"/>
            </c-span>
        </c-row>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            isShow: false
        },
        components: {
            "c-aladdin": "search-ui/Aladdin/Aladdin",
            "c-btn": "search-ui/Button/Button",
            "c-row": "search-ui/Row/Row",
            "c-span": "search-ui/Row/Span",
            "c-calendar": "search-ui/Calendar/Calendar"
        }
    }
</script>

<script>
    export default {
        methods: {
            handleOpenCalendar() {
                this.isShow = true;
            },
            handleConfirm(obj) {
                console.log('确认事件 confirm', obj);
                this.isShow = false;
            },
            handleChange(obj) {
                console.log('改变事件 change obj', obj);
            },
            handleReset() {
                console.log('重置按钮点击事件 reset');
            }
        }
    };
</script>
```

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
isShow | boolean | false | 可选 | 是否显示 | -
top | string | 0 | 可选 | 日历组件距离顶部的距离&nbsp;(css&nbsp;fixed&nbsp;top) | -
bottom | string | 0 | 可选 | 日历组件距离底部的距离&nbsp;(css&nbsp;fixed&nbsp;top) | -
zIndex | number | 501 | 可选 | 日历组件的&nbsp;z-index&nbsp;层级 | -
btnColor | string | #000 | 可选 | 重置按钮文字颜色 | -
btnBorderColor | string | #707379 | 可选 | 重置按钮边框颜色 | -
btnFillColor | string | #555 | 可选 | 日历重置按钮填充颜色 | -
dateCheckedBgColor | string | #3388ff | 可选 | 日期选中背景颜色 | -
dateCheckedAreaBgColor | string | rgba(51, 136, 255, .1) | 可选 | 日期选中区域背景颜色 | -
year | number \| string | - | 可选 | 年，不选则为今天的年份 | -
month | number \| string | - | 可选 | 月，不选则为今天的月份 | -
day | number \| string | - | 可选 | 日，不选则为今天的日期 | -
type | number | 2 | 可选 | 类型：1&nbsp;单选日期；2&nbsp;范围选择 | -
startText | string | - | 可选 | 起始日期的文案；不传则不显示 | -
endText | string | - | 可选 | 结束日期的文案；不传则不显示 | -
sameDayText | string | - | 可选 | 范围选择选择同一天的显示文案；不传则不允许选择同一天 | -
beforeMonthNum | number | 0 | 可选 | 在当前月份之前要显示的月个数 | -
afterMonthNum | number | 5 | 可选 | 在当前月份之后要显示的月个数 | -
defaultCheckedArr | array | [] | 可选 | 默认选中项数组；最多两个； | -
>> defaultCheckedArr[].year | number \| string | - | - | 年 | -
>> defaultCheckedArr[].month | number \| string | - | - | 月 | -
>> defaultCheckedArr[].day | number \| string | - | - | 日 | -



### Events

- **confirm**: 确认按钮点击时触发

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.selectedArr | Array.&lt;object&gt; | 为选中的日期数组(数组长度为&nbsp;0&nbsp;时代表没有选中项；长度为&nbsp;1&nbsp;时代表只选择了一个日期；长度为&nbsp;2&nbsp;时代表选择了两个日期，有先后顺序)
  ${param1}.selectedArr[].date | Date | 日期对象
  ${param1}.selectedArr[].text | string | 日期显示文案
  ${param1}.selectedArr[].year | number | 日期年份
  ${param1}.selectedArr[].month | number | 日期月份
  ${param1}.selectedArr[].day | number | 日期天数
  ${param1}.selectedArr[].weekday | number | 日期星期数
  ${param1}.selectedArr[].timestamp | number | 日期时间戳
  ${param1}.selectedArr[].type | number | 组件类型

- **reset**: 重置按钮点击时触发
	无参数

- **change**: 点击有效日期项的时候触发

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1} | object | 点选日期的信息对象
  ${param1}.date | Date | 日期对象
  ${param1}.text | string | 日期显示文案
  ${param1}.year | number | 日期年份
  ${param1}.month | number | 日期月份
  ${param1}.day | number | 日期天数
  ${param1}.weekday | number | 日期星期数
  ${param1}.timestamp | number | 日期时间戳
  ${param1}.type | number | 组件类型


### Methods

- **reset**: 组件重置
	无参数

