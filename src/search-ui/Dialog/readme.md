---
name: Dialog
title: 对话框组件
category: 交互类
owner: 陈硕，王凯
---

## 示例

```atom 对话框
<template>
    <c-aladdin>
        <c-row>
            <c-span col="12">
                <c-btn
                    text="打开弹窗"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-dialog
            :visible="visible"
            :title="title"
            :content="content"
            @close="handleClose"
            @btnclick="handleDialogBtnClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dialog': 'search-ui/Dialog/Dialog'
        },
        data: {
            visible: false,
            title: '标题',
            content: '党的十八大提出，倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。党的十八大提出，倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleBtnClick() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            },
            handleDialogBtnClick(obj) {
                console.log('handleDialogBtnClick', obj);
            }
        }
    }
</script>
```

```atom 对话框；内容不足最大高度；单按钮
<template>
    <c-aladdin>
        <c-row>
            <c-span col="12">
                <c-btn
                    text="打开弹窗"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-dialog
            :visible="visible"
            :title="title"
            :content="content"
            :btn-opts="btnOpts"
            content-text-align="center"
            @close="handleClose"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dialog': 'search-ui/Dialog/Dialog'
        },
        data: {
            visible: false,
            title: '标题',
            content: '党的十八大提出。',
            btnOpts: [
                {
                    event: 'confirm',
                    text: '确定'
                }
            ]
        }
    }
</script>

<script>
    export default {
        methods: {
            handleBtnClick() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            }
        }
    }
</script>
```

```atom 对话框；使用 slot
<template>
    <c-aladdin>
        <c-row>
            <c-span col="12">
                <c-btn
                    text="打开弹窗"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-dialog
            :visible="visible"
            :btn-opts="btnOpts"
            @close="handleClose"
        >
            <div
                a-for="(i, index) in 20"
                :key="index"
            >
                自定义区 {{ index }}
            </div>
        </c-dialog>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dialog': 'search-ui/Dialog/Dialog'
        },
        data: {
            visible: false,
            btnOpts: [
                {
                    event: 'confirm',
                    text: '确定'
                }
            ]
        }
    }
</script>

<script>
    export default {
        methods: {
            handleBtnClick() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            }
        }
    }
</script>
```

```atom 对话框；使用内容 slot，并添加标题
<template>
    <c-aladdin>
        <c-row>
            <c-span col="12">
                <c-btn
                    text="打开弹窗"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-dialog
            :visible="visible"
            :btn-opts="btnOpts"
            title="我是一个标题"
            @close="handleClose"
        >
            <div
                a-for="(i, index) in 20"
                :key="index"
            >
                自定义区 {{ index }}
            </div>
        </c-dialog>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dialog': 'search-ui/Dialog/Dialog'
        },
        data: {
            title: '123',
            visible: false,
            btnOpts: [
                {
                    event: 'confirm',
                    text: '确定'
                }
            ]
        }
    }
</script>

<script>
    export default {
        methods: {
            handleBtnClick() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            }
        }
    }
</script>
```

```atom 对话框；使用内容 slot 和标题 slot；使用 gap-top 去除顶部间距
<template>
    <c-aladdin>
        <c-row>
            <c-span col="12">
                <c-btn
                    text="打开弹窗"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-dialog
            :visible="visible"
            :btn-opts="btnOpts"
            :title-height="60"
            :gap-top="0"
            @close="handleClose"
        >
            <div
                slot="title"
                class="title-slot"
            >
                我是一个标题
            </div>
            <div
                a-for="(i, index) in 20"
                :key="index"
            >
                自定义区 {{ index }}
            </div>
        </c-dialog>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dialog': 'search-ui/Dialog/Dialog'
        },
        data: {
            title: '123',
            visible: false,
            btnOpts: [
                {
                    event: 'confirm',
                    text: '确定'
                }
            ]
        }
    }
</script>

<script>
    export default {
        methods: {
            handleBtnClick() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            }
        }
    }
</script>

<style lang="less" module>
.title-slot {
    height: 60px;
    color: red;
    line-height: 60px;
    text-align: center;
    font-size: 30px;
}
</style>
```

```atom 配合 Switch 组件
<template>
    <c-aladdin>
        <c-row>
            <c-span col="12">
                <c-switch
                    :value="dialogVisible"
                    @change="handleSwitchChange"
                />
            </c-span>
        </c-row>
        <c-dialog
            :visible="dialogVisible"
            :title="dialogTitle"
            :content="dialogContent"
            :btn-opts="btnOpts"
            @close="handleClose"
            @maskclick="handleMaskClick"
            @btnclick="handleDialogBtnClick"
            @cancel="handleCancel"
            @confirm="handleConfirm"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dialog': 'search-ui/Dialog/Dialog',
            'c-switch': 'search-ui/Switch/Switch'
        },
        data: {
            dialogTitle: '提示',
            dialogVisible: false,
            dialogContent: '设置提示',
            btnOpts: [
                {
                    event: 'cancel',
                    text: '取消'
                },
                {
                    event: 'confirm',
                    text: '确定'
                }
            ]
        }
    }
</script>

<script>
    export default {
        methods: {
            // 注：Switch 组件的 change 事件触发是在 touchend 时触发，会有延时，在修改 Dialog 的 visible 状态时需要放在 setTimeout(() => {}, 0) 里，避免出现未知问题
            handleSwitchChange(open) {
                console.log('handleSwitchChange', open);
                setTimeout(() => {
                    this.dialogVisible = open;
                }, 0);
            },
            handleClose() {
                // this.visible = false;
            },
            handleDialogBtnClick(obj) {
                // console.log('handleDialogBtnClick', obj);
            },
            openDialog() {
                console.log('openDialog');
                this.dialogVisible = true;
            },
            handleCancel() {
                console.log('handleCancel');
                this.dialogVisible = false;
            },
            handleMaskClick() {
                console.log('handleMaskClick');
                this.dialogVisible = false;
            },
            handleConfirm() {
                console.log('handleConfirm');
                this.dialogVisible = false;
            }
        }
    }
</script>
```

```atom 对话框；修改按钮文字颜色
<template>
    <c-aladdin>
        <c-row>
            <c-span col="12">
                <c-btn
                    text="打开弹窗"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-dialog
            :visible="visible"
            :title="title"
            :content="content"
            :btn-opts="btnOpts"
            @close="handleClose"
            @btnclick="handleDialogBtnClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dialog': 'search-ui/Dialog/Dialog'
        },
        data: {
            visible: false,
            title: '标题',
            content: '党的十八大提出，倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。党的十八大提出，倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。',
            btnOpts: [
                {
                    color: 'green',
                    event: 'cancel',
                    text: '取消'
                },
                {
                    color: 'red',
                    event: 'confirm',
                    text: '确定'
                }
            ]
        }
    }
</script>

<script>
    export default {
        methods: {
            handleBtnClick() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            },
            handleDialogBtnClick(obj) {
                console.log('handleDialogBtnClick', obj);
            }
        }
    }
</script>
```

```atom 不要按钮；使用 gapBottom 自定义底部间距
<template>
    <c-aladdin>
        <c-row>
            <c-span col="12">
                <c-btn
                    text="打开弹窗"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-dialog
            :visible="visible"
            :title="title"
            :content="content"
            :btn-opts="btnOpts"
            :gap-bottom="30"
            content-text-align="center"
            @close="handleClose"
            @btnclick="handleDialogBtnClick"
            @maskclick="handleMaskClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-btn': 'search-ui/Button/Button',
            'c-row': 'search-ui/Row/Row',
            'c-span': 'search-ui/Row/Span',
            'c-dialog': 'search-ui/Dialog/Dialog'
        },
        data: {
            visible: false,
            title: '标题',
            content: '党的十八大提出，倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。党的十八大提出，倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。',
            btnOpts: []
        }
    }
</script>

<script>
    export default {
        methods: {
            handleBtnClick() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            },
            handleDialogBtnClick(obj) {
                console.log('handleDialogBtnClick', obj);
            },
            handleMaskClick() {
                this.visible = false;
            }
        }
    }
</script>
```

### 注意事项

1. 可在 btnOpts 里传入自定义事件在该按钮点击时触发
2. 注：Switch 组件的 change 事件触发是在 touchend 时触发，会有延时，在修改 Dialog 的 visible 状态时需要放在 setTimeout(() => {}, 0) 里，避免出现未知问题

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
visible | boolean | false | 可选 | 是否显示 | -
gapTop | number | 23 | 可选 | 距离顶部的距离，单位为&nbsp;px；默认为&nbsp;23px； | -
gapBottom | number | 0 | 可选 | 距离底部的距离，单位为&nbsp;px；默认为&nbsp;0px；一般用于不显示按钮栏的时候做一些间距处理 | -
title | string |  | 可选 | 标题 | -
titleHeight | number | 48 | 可选 | 标题高度，单位为&nbsp;px；默认高度为&nbsp;48px，其中34px&nbsp;是标题的高度；14px&nbsp;是标题距离顶部的距离；注：当使用自定义&nbsp;title&nbsp;slot&nbsp;的时候，需要传入&nbsp;title&nbsp;slot&nbsp;的高度 | -
content | string |  | 可选 | 内容 | -
contentTextAlign | string | left | 可选 | 内容居中方式 | -
btnOpts | array | [{"event":"cancel","text":"取消"},{"event":"confirm","text":"确定"}] | 可选 | 按钮配置；传空数组则不显示按钮栏 | -
>> btnOpts[].event | string | - | - | 该按钮绑定的事件名，点击该按钮时触发 | -
>> btnOpts[].text | string | - | - | 文案 | -
>> btnOpts[].color | string | - | - | 按钮文字颜色 | -
zIndex | number | 501 | 可选 | `z-index`值 | -
transitionOpts | object | {"transition":"all .3s cubic-bezier(.14, .1, .12, 1)","showTransition":"all .3s cubic-bezier(.14, .1, .12, 1)","hideTransition":"all .16s cubic-bezier(0, 0, 0.3, 1)"} | 可选 | 动效配置 | -
>> transitionOpts.transition | string | - | - | 渐变动效 | -
>> transitionOpts.showTransition | string | - | - | 显示动效 | -
>> transitionOpts.hideTransition | string | - | - | 隐藏动效 | -

### Slots



名称 | 描述
--- | ---
title | title&nbsp;标题&nbsp;slot
default | 自定义内容区

### Events


- **close**: 关闭事件
	无参数

- **cancel**: 取消事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.e | Event | 透传的事件对象
  ${param1}.btnIndex | number | 点击按钮的索引
  ${param1}.btn | object | 点击的按钮配置
  ${param1}.btn.event | string | 该按钮绑定的事件名
  ${param1}.btn.text | string | 该按钮的文案

- **confirm**: 确认事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.e | Event | 透传的事件对象
  ${param1}.btnIndex | number | 点击按钮的索引
  ${param1}.btn | object | 点击的按钮配置
  ${param1}.btn.event | string | 该按钮绑定的事件名
  ${param1}.btn.text | string | 该按钮的文案

- **btnclick**: 按钮点击事件

名称 | 类型 | 描述
--- | --- | ---
${param1}.e | Event | 透传的事件对象
  ${param1}.btnIndex | number | 点击按钮的索引
  ${param1}.btn | object | 点击的按钮配置
  ${param1}.btn.event | string | 该按钮绑定的事件名
  ${param1}.btn.text | string | 该按钮的文案

- **maskclick**: 蒙层点击事件
	无参数



