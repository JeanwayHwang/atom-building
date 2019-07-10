---
name: Toast
title: 提示框
category: 交互类
owner: 宋少康
---

## 使用场景

> 参考UE规范：[D20 【基础组件】-【Toast】](http://sfe.baidu.com:8186/ue-guide/toast.html)

## 示例

```atom toast示例
<template>
    <div class="c-container c-">
        <p>toast</p>
        <div class="demo-toast">
            <c-row class="c-gap-bottom">
                <c-span>
                    <c-btn text="单行toast" @click="btn0Click"  />
                </c-span>
                <c-span>
                    <c-btn text="带图标toast" @click="btn1Click" />
                </c-span>
                <c-span>
                    <c-btn text="2s自动关闭toast" @click="btn2Click" />
                </c-span>
                <c-span>
                    <c-btn text="10s自动关闭toast" @click="btn3Click" />
                </c-span>
            </c-row>
            <c-row class="c-gap-bottom">
                <c-span>
                    <c-btn text="多行toast" @click="btn4Click"  />
                </c-span>
                <c-span>
                    <c-btn text="自定义颜色" @click="btn5Click"  />
                </c-span>
                <c-span>
                    <c-btn text="自定义top" @click="btn6Click"  />
                </c-span>
                <c-span>
                    <c-btn text="自定义bottom" @click="btn7Click"  />
                </c-span>
            </c-row>
        </div>
        <c-toast
            :state="toastState0"
            content="前方高能你好今后请注意"
        >
        </c-toast>
        <c-toast
            content="最多七个中文字"
            iconType="baidu"
            :state="toastState1"
        >
        </c-toast>
        <c-toast
            content="最多七个中文字"
            iconType="baidu"
            :state="toastState2"
            @change="change"
            auto-close
        >
        </c-toast>
        <c-toast
            content="最多中文字"
            iconType="baidu"
            :state="toastState3"
            @change="change1"
            auto-close
            :duration="10000"
        >
        </c-toast>
        <c-toast
            clamp="2"
            :state="toastState4"
            content="前方高能你好今后请注意前方高能你好今后请注意前方高能你好今后请注意前方高能你好今后请注意前方高能你好今后请注意前方高能你好今后请注意前方高能你好今后请注意前方高能你好今后请注意"
        >
        </c-toast>
        <c-toast
            :state="toastState5"
            content="自定义背景色字体色"
            :customStyle="{background: 'linear-gradient(135deg, #fed6e3 0%, #a8edea 100%)', color: '#FF3030'}"
        >
        </c-toast>
        <c-toast
            :state="toastState6"
            content="自定义top"
            top="20px"
        >
        </c-toast>
        <c-toast
            :state="toastState7"
            content="自定义bottom"
            bottom="20px"
        >
        </c-toast>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-line': 'search-ui/Line/Line',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-toast': 'search-ui/Toast/Toast'
        },
        data: {
            toastState0: false,
            toastState1: false,
            toastState2: false,
            toastState3: false,
            toastState4: false,
            toastState5: false,
            toastState6: false,
            toastState7: false
        }
    }
</script>

<script>
export default {
    methods: {
        btn0Click() {
            this.toastState0 = ! this.toastState0;
        },
        btn1Click(){
            this.toastState1 = ! this.toastState1;

        },
        btn2Click(){
            this.toastState2 = ! this.toastState2;
        },
        btn3Click(){
            this.toastState3 = ! this.toastState3;
        },
        btn4Click(){
            this.toastState4 = ! this.toastState4;
        },
        btn5Click(){
            this.toastState5 = ! this.toastState5;
        },
        btn6Click(){
            this.toastState6 = ! this.toastState6;
        },
        btn7Click(){
            this.toastState7 = ! this.toastState7;
        },
        change(value) {
            if(value !== this.toastState2) {
                this.toastState2 = value;
            }
        },
        change1(value) {
            if(value !== this.toastState3) {
                this.toastState3 = value;
            }
        }


    }
}
</script>
<style lang="less" scoped>
   .demo-toast{
       margin:200px 0;
   }
</style>
```

```atom 自定义 slot
<template>
    <div class="c-container">
        <c-row>
            <c-span>
                <c-btn
                    text="按钮"
                    @click="handleBtnClick"
                >
                </c-btn>
            </c-span>
        </c-row>
        <c-row>
            <c-span>
                <c-btn
                    text="按钮2"
                    @click="handleBtnClick2"
                >
                </c-btn>
            </c-span>
        </c-row>
        <c-toast
            :state="toastState"
            :duration="2000"
            bottom="10px"
            auto-close
            @change="change"
        >
            <div
                class="custom-content"
            >
                <i class="c-icon c-gap-right-small">&#xe780</i>
                <div>
                    单行字最多显示十个字
                </div>
                <div
                    class="divider c-gap-left c-gap-right"
                >
                </div>
                <c-link
                    url="//m.baidu.com"
                >
                    <div
                        class="link-wrapper"
                    >
                        <div>
                            某按钮
                        </div>
                        <i
                            class="c-icon triangle"
                        >
                            &#xe66a
                        </i>
                    </div>
                </c-link>
            </div>
        </c-toast>
        <c-toast
            :state="toastState2"
            :duration="2000"
            :custom-style="{
                maxWidth: '90%'
            }"
            auto-close
            bottom="10px"
            @change="change2"
        >
            <div
                class="custom-content"
            >
                <div>
                    单行字最多显示十二个文字
                </div>
                <div
                    class="divider c-gap-left c-gap-right"
                >
                </div>
                <c-link
                    url="//m.baidu.com"
                >
                    <div
                        class="link-wrapper"
                    >
                        <div>
                            某按钮
                        </div>
                        <i
                            class="c-icon triangle"
                        >
                            &#xe66a
                        </i>
                    </div>
                </c-link>
            </div>
        </c-toast>
    </div>
</template>

<script type="config">
    {
        components: {
            'c-link': 'search-ui/Link/Link',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-toast': 'search-ui/Toast/Toast'
        },
        data: {
            toastState: false,
            toastState2: false
        }
    }
</script>

<script>
export default {
    methods: {
        handleBtnClick() {
            this.toastState = !this.toastState;
        },
        change(value) {
            console.log(value);
            if (value !== this.toastState) {
                this.toastState = value;
            }
        },
        handleBtnClick2() {
            this.toastState2 = !this.toastState2;
        },
        change2(value) {
            console.log(value);
            if (value !== this.toastState2) {
                this.toastState2 = value;
            }
        }
    }
}
</script>
<style lang="less" module>
.custom-content {
    display: flex;
    align-items: center;
}
.divider {
    flex-shrink: 0;
    height: 16px;
    background-color: #999;
    width: 1px;
}
.link-wrapper {
    display: flex;
    align-items: center;
    color: #fff;
}
.triangle {
    position: relative;
    right: -1px;
    font-size: 10px;
    vertical-align: center;
}
</style>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
iconType | string |  | 可选 | 图标类型 | -
iconCode | string |  | 可选 | 图标编码 | -
content | string |  | 可选 | 提示文字 | -
state | boolean | false | 可选 | toast状态&nbsp;true&nbsp;为打开&nbsp;false为关闭 | -
autoClose | boolean | false | 可选 | 是否自动关闭 | -
duration | number | 2000 | 可选 | tip提示展示时间 | -
sdk | boolean | false | 可选 | 手百上是否使用端能力 | -
customStyle | object | {"background":"rgba(0, 0, 0, 0.8)","color":"#fff"} | 可选 | 自定义Toast颜色<br>背景，字体颜色 | -
top | string | 50% | 可选 | Toast离顶部的距离 | -
bottom | string |  | 可选 | Toast离底部的距离 | -
clamp | number \| string | 1 | 可选 | 显示行数，范围为1-5 | -

#### ToastPopup

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
dismissible | boolean | true | 可选 | 点击组件内容外部可关闭组件 | -
transition | string | zoom-in-from-big | 可选 | 动画名称 | -
state | boolean | false | 可选 | 组件状态 | -
hasMask | boolean | true | 可选 | 是否有遮罩 | -
top | string | 50% | 可选 | Toast离顶部的距离 | -
bottom | string |  | 可选 | Toast离底部的距离 | -

### Slots



名称 | 描述
--- | ---
default | 自定义区域

#### ToastPopup

名称 | 描述
--- | ---
default | 默认&nbsp;slot

### Events


- **change**: 状态state 发生变化时触发 true 为打开，false 为关闭.
	无参数


#### ToastPopup


- **change**: 状态state 发生变化时触发 true 为打开，false 为关闭.
	无参数



