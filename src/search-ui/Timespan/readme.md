---
name: Timespan
title: 时间差组件
category: 展示元素类
owner: 陈骁
---

## 使用场景

时间差组件，规范化时间差显示

时间差显示规范：
1. 1小时内：xx分钟前
2. 24小时内：xx小时前
3. 7天内：xx天前
4. 当年内：MM-dd
5. 非当年内：yyyy-MM-dd

## 技术示例

```atom 时间差
<template>
    <c-aladdin>
        <span class="c-gap-right">[{{nowDsp}}]</span>
        <span>服务器时间</span>
        <c-divider />

        <span class="c-gap-right">[{{pre10minDsp}}]</span>
        <c-timespan :time="pre10min" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{pre30sDsp}}]</span>
        <c-timespan :time="pre30s" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{now0Dsp}}]</span>
        <c-timespan :time="now0" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{next30sDsp}}]</span>
        <c-timespan :time="next30s" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{next10minDsp}}]</span>
        <c-timespan :time="next10min" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{pre2hourDsp}}]</span>
        <c-timespan :time="pre2hour" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{next2hourDsp}}]</span>
        <c-timespan :time="next2hour" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{pre3dayDsp}}]</span>
        <c-timespan :time="pre3day" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{next3dayDsp}}]</span>
        <c-timespan :time="next3day" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{pre8dayDsp}}]</span>
        <c-timespan :time="pre8day" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{next8dayDsp}}]</span>
        <c-timespan :time="next8day" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{pre1yearDsp}}]</span>
        <c-timespan :time="pre1year" :server-time="now" />
        <c-divider />

        <span class="c-gap-right">[{{next1yearDsp}}]</span>
        <c-timespan :time="next1year" :server-time="now" />
        <c-divider />
    </c-aladdin>
</template>

<config>
    {
        data: {
            now: 1509519986000,
            nowDsp: ''
        },
        computed: {
            pre10min: now - 10 * 60 * 1000,
            pre30s: now - 30 * 1000,
            now0: now + 0 * 60 * 1000,
            next30s: now + 30 * 1000,
            next10min: now + 10 * 60 * 1000,
            pre2hour: now - 2 * 60 * 60 * 1000,
            next2hour: now + 2 * 60 * 60 * 1000,
            pre3day: now - 3 * 24 * 60 * 60 * 1000,
            next3day: now + 3 * 24 * 60 * 60 * 1000,
            pre8day: now - 8 * 24 * 60 * 60 * 1000,
            next8day: now + 8 * 24 * 60 * 60 * 1000,
            pre1year: now - 1 * 365 * 24 * 60 * 60 * 1000,
            next1year: now + 1 * 365 * 24 * 60 * 60 * 1000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-timespan': 'search-ui/Timespan/Timespan',
            'c-divider': 'search-ui/Divider/Divider'
        }
    }
</config>

<script>
    export default {
        mounted() {
            this.nowDsp = new Date(this.now).toLocaleString();
            // 十分钟前
            this.pre10minDsp = new Date(this.pre10min).toLocaleString();
            // 30s前
            this.pre30sDsp = new Date(this.pre30s).toLocaleString();
            // 刚刚
            this.now0Dsp = new Date(this.now0).toLocaleString();
            // 30s后
            this.next30sDsp = new Date(this.next30s).toLocaleString();
            // 十分钟后
            this.next10minDsp = new Date(this.next10min).toLocaleString();
            // 两小时前
            this.pre2hourDsp = new Date(this.pre2hour).toLocaleString();
            // 两小时后
            this.next2hourDsp = new Date(this.next2hour).toLocaleString();
            // 3天前
            this.pre3dayDsp = new Date(this.pre3day).toLocaleString();
            // 3天后
            this.next3dayDsp = new Date(this.next3day).toLocaleString();
            // 8天前
            this.pre8dayDsp = new Date(this.pre8day).toLocaleString();
            // 8天后
            this.next8dayDsp = new Date(this.next8day).toLocaleString();
            // 1年前
            this.pre1yearDsp = new Date(this.pre1year).toLocaleString();
            // 1年后
            this.next1yearDsp = new Date(this.next1year).toLocaleString();
        }
    }
</script>
```

```atom 时间差 中文分割
<template>
    <c-aladdin>
        <span class="c-gap-right">[{{nowDsp}}]</span>
        <span>服务器时间</span>
        <c-divider />

        <span class="c-gap-right">[{{pre10minDsp}}]</span>
        <c-timespan :time="pre10min" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{next10minDsp}}]</span>
        <c-timespan :time="next10min" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{pre2hourDsp}}]</span>
        <c-timespan :time="pre2hour" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{next2hourDsp}}]</span>
        <c-timespan :time="next2hour" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{pre3dayDsp}}]</span>
        <c-timespan :time="pre3day" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{next3dayDsp}}]</span>
        <c-timespan :time="next3day" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{pre8dayDsp}}]</span>
        <c-timespan :time="pre8day" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{next8dayDsp}}]</span>
        <c-timespan :time="next8day" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{pre1yearDsp}}]</span>
        <c-timespan :time="pre1year" :server-time="now" :type="2"/>
        <c-divider />

        <span class="c-gap-right">[{{next1yearDsp}}]</span>
        <c-timespan :time="next1year" :server-time="now" :type="2"/>
        <c-divider />
    </c-aladdin>
</template>

<config>
    {
        data: {
            now: 1509519986000,
            nowDsp: ''
        },
        computed: {
            pre10min: now - 10 * 60 * 1000,
            next10min: now + 10 * 60 * 1000,
            pre2hour: now - 2 * 60 * 60 * 1000,
            next2hour: now + 2 * 60 * 60 * 1000,
            pre3day: now - 3 * 24 * 60 * 60 * 1000,
            next3day: now + 3 * 24 * 60 * 60 * 1000,
            pre8day: now - 8 * 24 * 60 * 60 * 1000,
            next8day: now + 8 * 24 * 60 * 60 * 1000,
            pre1year: now - 1 * 365 * 24 * 60 * 60 * 1000,
            next1year: now + 1 * 365 * 24 * 60 * 60 * 1000
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-timespan': 'search-ui/Timespan/Timespan',
            'c-divider': 'search-ui/Divider/Divider'
        }
    }
</config>

<script>
    export default {
        mounted() {
            this.nowDsp = new Date(this.now).toLocaleString();
            // 十分钟前
            this.pre10minDsp = new Date(this.pre10min).toLocaleString();
            // 十分钟后
            this.next10minDsp = new Date(this.next10min).toLocaleString();
            // 两小时前
            this.pre2hourDsp = new Date(this.pre2hour).toLocaleString();
            // 两小时后
            this.next2hourDsp = new Date(this.next2hour).toLocaleString();
            // 3天前
            this.pre3dayDsp = new Date(this.pre3day).toLocaleString();
            // 3天后
            this.next3dayDsp = new Date(this.next3day).toLocaleString();
            // 8天前
            this.pre8dayDsp = new Date(this.pre8day).toLocaleString();
            // 8天后
            this.next8dayDsp = new Date(this.next8day).toLocaleString();
            // 1年前
            this.pre1yearDsp = new Date(this.pre1year).toLocaleString();
            // 1年后
            this.next1yearDsp = new Date(this.next1year).toLocaleString();
        }
    }
</script>
```


## 注意事项

为保证显示时间差的时效性和准确性，建议获取服务器时间后通过serverTime属性传入

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
time | number \| string | - | 可选 | 时间戳&nbsp;单位：毫秒， | -
serverTime | number \| string | - | 可选 | 服务器时间戳&nbsp;单位：毫秒（注意：若不提供服务器时间，则以本地时间作为服务器时间） | -
type | number | 1 | 可选 | 分隔符类型；1：横杠&nbsp;'-'&nbsp;分割；2：中文&nbsp;'年、月、日'&nbsp;分割 | -






