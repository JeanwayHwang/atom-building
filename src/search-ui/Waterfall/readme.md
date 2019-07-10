---
name: Waterfall
title: 瀑布流
category: 图片类
owner: 王凯，杨启帆
---

## 使用场景

## 示例

### 点击触发加载；mode="click"

```atom 瀑布流；点击触发加载
<template>
    <c-aladdin
        :style="{
            'margin-top': 0,
            'margin-bottom': 0,
            'padding-top': 0,
            'padding-bottom': 0
        }"
        hide-header
        hide-footer
    >
        <c-waterfall
            :img-list="imgList"
            :column="col"
            mode="click"
            class="c-row-tile"
            @load="onLoad"
            @imgclick="handleImgClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            col: 2,
            imgList: [
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1209510574,3798153592&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#be5a37",
                    "text":57,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=654209871,3137675108&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#0f0903",
                    "text":37,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1550973917,908476441&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#0f0903",
                    "text":57,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=502700174,2738815057&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#0f0903",
                    "text":19,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1580409648,2952116213&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#64808f",
                    "text":39,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769453033,3610836141&fm=27&gp=0.jpg",
                    "width":264,
                    "height":220,
                    "color":"#64808f",
                    "text":31,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2392168814,2384524295&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":43,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3841357154,908469818&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#c7945f",
                    "text":0,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1476524740,2364960550&fm=27&gp=0.jpg",
                    "width":300,
                    "height":178,
                    "color":"#0f0903",
                    "text":6,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1881361018,1063365012&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":58,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2399948217,3328345225&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#0f0903",
                    "text":11,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2948675722,716246996&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#64808f",
                    "text":78,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=229105535,1094865216&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":73,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3947635750,4283307901&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#1f372c",
                    "text":11,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4174740071,1428297721&fm=27&gp=0.jpg",
                    "width":300,
                    "height":176,
                    "color":"#0f0903",
                    "text":43,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4284610914,4059864572&fm=27&gp=0.jpg",
                    "width":300,
                    "height":169,
                    "color":"#617e9f",
                    "text":84,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1292786991,477490411&fm=27&gp=0.jpg",
                    "width":243,
                    "height":220,
                    "color":"#0f0903",
                    "text":58,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1606577108,2280769466&fm=27&gp=0.jpg",
                    "width":300,
                    "height":175,
                    "color":"#617e9f",
                    "text":99,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1834000962,2005569219&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#c7945f",
                    "text":16,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2262211702,1838433674&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":53,
                    "icon":"imgs"
                }
            ],
            pn: 20,
            rn: 20
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-waterfall': 'search-ui/Waterfall/Waterfall'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleImgClick(obj) {
                console.log('handleImgClick', obj);
            },
            onLoad(refer) {
                // xhr 模拟请求
                let xhr = new XMLHttpRequest();
                let url = `http://118.126.116.234:13003/getbaiduImgs?word=刺客信条&pn=${this.pn}&rn=${this.rn}&isWh=true&isColor=true`;
                xhr.open('GET', url);
                xhr.onreadystatechange = () => {
                    console.log(`xhr.readyState: ${xhr.readyState}、xhr.statusText: ${xhr.statusText}、xhr.response: ${xhr.response.length}`);
                    if (xhr.readyState === 4 && xhr.response) {
                        let array = JSON.parse(xhr.response);
                        console.log('加载完成 pn', this.pn, 'array', array);
                        // 加载完成
                        if (array.length === 0) {
                            refer.complete();
                            return;
                        }
                        // 加载成功
                        else {
                            // 故意设置第一张图为错误地址，测试图片加载失败的情况
                            array[0].src = 'https://www.baidu.com/defaultwaka.jpeg';
                            this.imgList = this.imgList.concat(array);
                            this.pn += this.rn;
                            // 这里做延时是因为直接设置 refer.success 会导致加载按钮在加载图片前再次出现，会很诡异
                            setTimeout(() => {
                                refer.success();
                            }, 1000);
                        }
                    }
                    else if (xhr.readyState === 2 || xhr.readyState === 3) {
                    }
                    // 加载失败
                    else {
                        refer.fail();
                    }
                };
                xhr.send();
            }
        }
    }
</script>
```

```atom 瀑布流；点击触发加载；改变间距
<template>
    <c-aladdin
        :style="{
            'margin-top': 0,
            'margin-bottom': 0,
            'padding-top': 0,
            'padding-bottom': 0
        }"
        hide-header
        hide-footer
    >
        <c-waterfall
            :img-list="imgList"
            :column="col"
            :gap-opts="{
                inside: 8,
                outside: 0,
                bottom: 8
            }"
            :border-radius="{
                tl: true,
                tr: true,
                bl: true,
                br: true
            }"
            load-btn-text="点我查看更多"
            mode="click"
            @load="onLoad"
            @imgclick="handleImgClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            col: 2,
            imgList: [
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1209510574,3798153592&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#be5a37",
                    "text":57,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=654209871,3137675108&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#0f0903",
                    "text":37,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1550973917,908476441&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#0f0903",
                    "text":57,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=502700174,2738815057&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#0f0903",
                    "text":19,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1580409648,2952116213&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#64808f",
                    "text":39,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769453033,3610836141&fm=27&gp=0.jpg",
                    "width":264,
                    "height":220,
                    "color":"#64808f",
                    "text":31,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2392168814,2384524295&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":43,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3841357154,908469818&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#c7945f",
                    "text":0,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1476524740,2364960550&fm=27&gp=0.jpg",
                    "width":300,
                    "height":178,
                    "color":"#0f0903",
                    "text":6,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1881361018,1063365012&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":58,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2399948217,3328345225&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#0f0903",
                    "text":11,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2948675722,716246996&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#64808f",
                    "text":78,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=229105535,1094865216&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":73,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3947635750,4283307901&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#1f372c",
                    "text":11,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4174740071,1428297721&fm=27&gp=0.jpg",
                    "width":300,
                    "height":176,
                    "color":"#0f0903",
                    "text":43,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4284610914,4059864572&fm=27&gp=0.jpg",
                    "width":300,
                    "height":169,
                    "color":"#617e9f",
                    "text":84,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1292786991,477490411&fm=27&gp=0.jpg",
                    "width":243,
                    "height":220,
                    "color":"#0f0903",
                    "text":58,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1606577108,2280769466&fm=27&gp=0.jpg",
                    "width":300,
                    "height":175,
                    "color":"#617e9f",
                    "text":99,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1834000962,2005569219&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#c7945f",
                    "text":16,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2262211702,1838433674&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":53,
                    "icon":"imgs"
                }
            ],
            pn: 20,
            rn: 20
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-waterfall': 'search-ui/Waterfall/Waterfall'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleImgClick(obj) {
                console.log('handleImgClick', obj);
            },
            onLoad(refer) {
                // xhr 模拟请求
                let xhr = new XMLHttpRequest();
                let url = `http://118.126.116.234:13003/getbaiduImgs?word=刺客信条&pn=${this.pn}&rn=${this.rn}&isWh=true&isColor=true`;
                xhr.open('GET', url);
                xhr.onreadystatechange = () => {
                    console.log(`xhr.readyState: ${xhr.readyState}、xhr.statusText: ${xhr.statusText}、xhr.response: ${xhr.response.length}`);
                    if (xhr.readyState === 4 && xhr.response) {
                        let array = JSON.parse(xhr.response);
                        console.log('加载完成 pn', this.pn, 'array', array);
                        // 加载完成
                        if (array.length === 0) {
                            refer.complete();
                            return;
                        }
                        // 加载成功
                        else {
                            // 故意设置第一张图为错误地址，测试图片加载失败的情况
                            array[0].src = 'https://www.baidu.com/defaultwaka.jpeg';
                            this.imgList = this.imgList.concat(array);
                            this.pn += this.rn;
                            // 这里做延时是因为直接设置 refer.success 会导致加载按钮在加载图片前再次出现，会很诡异
                            setTimeout(() => {
                                refer.success();
                            }, 1000);
                        }
                    }
                    else if (xhr.readyState === 2 || xhr.readyState === 3) {
                    }
                    // 加载失败
                    else {
                        refer.fail();
                    }
                };
                xhr.send();
            }
        }
    }
</script>
```

```atom 瀑布流；点击触发加载；加载按钮使用 slot
<template>
    <c-aladdin
        :style="{
            'margin-top': 0,
            'margin-bottom': 0,
            'padding-top': 0,
            'padding-bottom': 0
        }"
        hide-header
        hide-footer
    >
        <c-waterfall
            :img-list="imgList"
            :column="col"
            :load-btn-show="false"
            mode="click"
            class="c-row-tile"
            @load="onLoad"
            @imgclick="handleImgClick"
        >
            <div slot="loadBtnSlot">
                我是一个 slot，点我加载
            </div>
        </c-waterfall>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            col: 2,
            imgList: [
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1209510574,3798153592&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#be5a37",
                    "text":57,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=654209871,3137675108&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#0f0903",
                    "text":37,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1550973917,908476441&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#0f0903",
                    "text":57,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=502700174,2738815057&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#0f0903",
                    "text":19,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1580409648,2952116213&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#64808f",
                    "text":39,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769453033,3610836141&fm=27&gp=0.jpg",
                    "width":264,
                    "height":220,
                    "color":"#64808f",
                    "text":31,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2392168814,2384524295&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":43,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3841357154,908469818&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#c7945f",
                    "text":0,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1476524740,2364960550&fm=27&gp=0.jpg",
                    "width":300,
                    "height":178,
                    "color":"#0f0903",
                    "text":6,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1881361018,1063365012&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":58,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2399948217,3328345225&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#0f0903",
                    "text":11,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2948675722,716246996&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#64808f",
                    "text":78,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=229105535,1094865216&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":73,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3947635750,4283307901&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#1f372c",
                    "text":11,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4174740071,1428297721&fm=27&gp=0.jpg",
                    "width":300,
                    "height":176,
                    "color":"#0f0903",
                    "text":43,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4284610914,4059864572&fm=27&gp=0.jpg",
                    "width":300,
                    "height":169,
                    "color":"#617e9f",
                    "text":84,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1292786991,477490411&fm=27&gp=0.jpg",
                    "width":243,
                    "height":220,
                    "color":"#0f0903",
                    "text":58,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1606577108,2280769466&fm=27&gp=0.jpg",
                    "width":300,
                    "height":175,
                    "color":"#617e9f",
                    "text":99,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1834000962,2005569219&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#c7945f",
                    "text":16,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2262211702,1838433674&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":53,
                    "icon":"imgs"
                }
            ],
            pn: 20,
            rn: 20
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-waterfall': 'search-ui/Waterfall/Waterfall'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleImgClick(obj) {
                console.log('handleImgClick', obj);
            },
            onLoad(refer) {
                // xhr 模拟请求
                let xhr = new XMLHttpRequest();
                let url = `http://118.126.116.234:13003/getbaiduImgs?word=刺客信条&pn=${this.pn}&rn=${this.rn}&isWh=true&isColor=true`;
                xhr.open('GET', url);
                xhr.onreadystatechange = () => {
                    console.log(`xhr.readyState: ${xhr.readyState}、xhr.statusText: ${xhr.statusText}、xhr.response: ${xhr.response.length}`);
                    if (xhr.readyState === 4 && xhr.response) {
                        let array = JSON.parse(xhr.response);
                        console.log('加载完成 pn', this.pn, 'array', array);
                        // 加载完成
                        if (array.length === 0) {
                            refer.complete();
                            return;
                        }
                        // 加载成功
                        else {
                            // 故意设置第一张图为错误地址，测试图片加载失败的情况
                            array[0].src = 'https://www.baidu.com/defaultwaka.jpeg';
                            this.imgList = this.imgList.concat(array);
                            this.pn += this.rn;
                            // 这里做延时是因为直接设置 refer.success 会导致加载按钮在加载图片前再次出现，会很诡异
                            setTimeout(() => {
                                refer.success();
                            }, 1000);
                        }
                    }
                    else if (xhr.readyState === 2 || xhr.readyState === 3) {
                    }
                    // 加载失败
                    else {
                        refer.fail();
                    }
                };
                xhr.send();
            }
        }
    }
</script>
```

### 滚动到底部触发加载；mode="scroll"

```atom 瀑布流 两列布局
<template>
    <c-aladdin
        :style="{
            'margin-top': 0,
            'margin-bottom': 0,
            'padding-top': 0,
            'padding-bottom': 0
        }"
        hide-header
        hide-footer
    >
        <c-waterfall
            :img-list="imgList"
            :column="col"
            class="c-row-tile"
            @load="onLoad"
            @imgclick="handleImgClick"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            col: 2,
            imgList: [
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1209510574,3798153592&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#be5a37",
                    "text":57,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=654209871,3137675108&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#0f0903",
                    "text":37,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1550973917,908476441&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#0f0903",
                    "text":57,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=502700174,2738815057&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#0f0903",
                    "text":19,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1580409648,2952116213&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#64808f",
                    "text":39,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3769453033,3610836141&fm=27&gp=0.jpg",
                    "width":264,
                    "height":220,
                    "color":"#64808f",
                    "text":31,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2392168814,2384524295&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":43,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3841357154,908469818&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#c7945f",
                    "text":0,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1476524740,2364960550&fm=27&gp=0.jpg",
                    "width":300,
                    "height":178,
                    "color":"#0f0903",
                    "text":6,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1881361018,1063365012&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":58,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2399948217,3328345225&fm=27&gp=0.jpg",
                    "width":300,
                    "height":168,
                    "color":"#0f0903",
                    "text":11,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2948675722,716246996&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#64808f",
                    "text":78,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=229105535,1094865216&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":73,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3947635750,4283307901&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#1f372c",
                    "text":11,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4174740071,1428297721&fm=27&gp=0.jpg",
                    "width":300,
                    "height":176,
                    "color":"#0f0903",
                    "text":43,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4284610914,4059864572&fm=27&gp=0.jpg",
                    "width":300,
                    "height":169,
                    "color":"#617e9f",
                    "text":84,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1292786991,477490411&fm=27&gp=0.jpg",
                    "width":243,
                    "height":220,
                    "color":"#0f0903",
                    "text":58,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1606577108,2280769466&fm=27&gp=0.jpg",
                    "width":300,
                    "height":175,
                    "color":"#617e9f",
                    "text":99,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1834000962,2005569219&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#c7945f",
                    "text":16,
                    "icon":"imgs"
                },
                {
                    "src":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2262211702,1838433674&fm=27&gp=0.jpg",
                    "width":300,
                    "height":187,
                    "color":"#617e9f",
                    "text":53,
                    "icon":"imgs"
                }
            ],
            pn: 20,
            rn: 20
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-waterfall': 'search-ui/Waterfall/Waterfall'
        }
    }
</script>

<script>
    export default {
        methods: {
            handleImgClick(obj) {
                console.log('handleImgClick', obj);
            },
            onLoad(refer) {
                return;
                // xhr 模拟请求
                let xhr = new XMLHttpRequest();
                let url = `http://118.126.116.234:13003/getbaiduImgs?word=刺客信条&pn=${this.pn}&rn=${this.rn}&isWh=true&isColor=true`;
                xhr.open('GET', url);
                xhr.onreadystatechange = () => {
                    console.log(`xhr.readyState: ${xhr.readyState}、xhr.statusText: ${xhr.statusText}、xhr.response: ${xhr.response.length}`);
                    if (xhr.readyState === 4 && xhr.response) {
                        let array = JSON.parse(xhr.response);
                        console.log('加载完成 pn', this.pn, 'array', array);
                        // 加载完成
                        if (array.length === 0) {
                            refer.complete();
                            return;
                        }
                        // 加载成功
                        else {
                            // 故意设置第一张图为错误地址，测试图片加载失败的情况
                            array[0].src = 'https://www.baidu.com/defaultwaka.jpeg';
                            this.imgList = this.imgList.concat(array);
                            this.pn += this.rn;
                            refer.success();
                        }
                    }
                    else if (xhr.readyState === 2 || xhr.readyState === 3) {
                    }
                    // 加载失败
                    else {
                        refer.fail();
                    }
                };
                xhr.send();
            }
        }
    }
</script>
```

## 注意事项
1. 关于 UIWebview 的一些已知问题汇总：
    - 手百滑动到底部时，不会立即出现加载提示，而需要等待一下才会出现加载状态提示；
        - UIWebview 只能在滚动事件彻底停止时才触发回调，无法解决；需要手百升级内核；
    - 手百上翻时，已加载图片还会重新渲染加载；手百加载渐显到底再加载是有的，过程加载是无的；
        - UIWebview 渲染图片引擎所致，无法解决；手百升级内核
    - 手百图片渐显时出现慢，图片会与底色重叠一段时间
        - UIWebview 页面交互时会组织 animation 动画，无法解决；手百升级内核
2. 手百、简搜出现快速上下滑动时页面出现白色块
    - 图片过多，浏览器引擎会释放之前加载好的图片以释放内存，内存限制，无法解决；
3. 手百、简搜快速滑动会有闪白情况
    - 浏览器内存限制，图片过多的情况，浏览器为了释放内存，需要重新加载图片，无法解决；

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
imgList | array | - | 可选 | 图片列表 | -
column | number | 2 | 可选 | 列数 | -
type | number | 1 | 可选 | 类型；1：代表不传宽高；2：代表传入宽高； | -
defaultPlaceholderImgColor | string | #efefef | 可选 | 默认占位图颜色 | -
loadingText | string | 正在加载... | 可选 | 加载文案 | -
loadEndText | string | 到底了 没有更多内容了 | 可选 | 底部文案 | -
loadFailText | string | 加载失败 点击重新加载 | 可选 | 失败文案 | -
mode | string | scroll | 可选 | 触发模式；'scroll'&nbsp;滚动到底部触发；'click'&nbsp;点击按钮触发 | -
loadBtnShow | boolean | true | 可选 | 是否显示加载按钮 | -
loadBtnText | string | 展开更多 | 可选 | 加载按钮文案 | -
gapOpts | object | {"outside":2,"inside":2,"bottom":2} | 可选 | 间距配置 | -
borderRadius | object | - | 可选 | 圆角 | -

#### ImgItem

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
data | object | - | 可选 | 图片项数据 | -
defaultPlaceholderImgColor | string | #efefef | 可选 | 默认占位图颜色 | -
isUIWebview | boolean | false | 可选 | 是否是&nbsp;UIWebview | -
index | number | - | 可选 | 索引 | -
type | number | 1 | 可选 | - | -
marginBottom | number | 2 | 可选 | 底部间距 | -
borderRadius | object | {"tl":false,"tr":false,"bl":false,"br":false} | 可选 | 圆角 | -

### Slots



名称 | 描述
--- | ---
loadBtnSlot | 无限加载按钮&nbsp;slot

### Events


- **imgclick**: imgclick event.

名称 | 类型 | 描述
--- | --- | ---
${param1} | object | 图片对象
  ${param1}.index | number | 当前图片在数组中的索引
  ${param1}.success | function | 加载成功指令
  ${param1}.complete | function | 加载到尾部指令
  ${param1}.fail | function | 加载失败指令

- **load**: 选项卡改变时触发.
	无参数



