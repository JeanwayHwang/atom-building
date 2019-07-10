---
name: Content
title: 内容组件
category: 框架类
owner: 王凯
---

## 示例

```atom 配合导航（Navs）组件
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-navs
            :label-list="navsList"
            @change="handleNavsChange"
        />
        <!-- 这里可以增加间距 -->
        <div class="c-gap-top"/>
        <c-content
            :selected-index="selectedIndex"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
            </div>
            <div>
                沿对革，异对同，白叟对黄童。江风对海雾，牧子对渔翁。颜巷陋，阮途穷，冀北对辽东。池中濯足水，门外打头风。梁帝讲经同泰寺，汉皇置酒未央宫。尘虑萦心，懒抚七弦绿绮；霜华满鬓，羞看百炼青铜。
                <br>
                贫对富，塞对通，野叟对溪童。鬓皤对眉绿，齿皓对唇红。天浩浩，日融融，佩剑对弯弓。半溪流水绿，千树落花红。野渡燕穿杨柳雨，芳池鱼戏芰荷风。女子眉纤，额下现一弯新月；男儿气壮，胸中吐万丈长虹。
            </div>
            <div>
                春对夏，秋对冬，暮鼓对晨钟。观山对玩水，绿竹对苍松。冯妇虎，叶公龙，舞蝶对鸣蛩。衔泥双紫燕，课蜜几黄蜂。春日园中莺恰恰，秋天塞外雁雍雍。秦岭云横，迢递八千远路；巫山雨洗，嵯峨十二危峰。
                <br>
                明对暗，淡对浓，上智对中庸。镜奁对衣笥，野杵对村舂。花灼烁，草蒙茸，九夏对三冬。台高名戏马，斋小号蟠龙。手擘蟹螯从毕卓，身披鹤氅自王恭。五老峰高，秀插云霄如玉笔；三姑石大，响传风雨若金镛。
                <br>
                仁对义，让对恭，禹舜对羲农。雪花对云叶，芍药对芙蓉。陈后主，汉中宗，绣虎对雕龙。柳塘风淡淡，花圃月浓浓。春日正宜朝看蝶，秋风那更夜闻蛩。战士邀功，必借干戈成勇武；逸民适志，须凭诗酒养踈慵。
            </div>
        </c-content>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        navsList: [
            {
                txt:"中国"
            },
            {
                txt:"美国"
            },
            {
                txt:"新西兰"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-navs': 'search-ui/Navs/Navs',
        'c-content': 'search-ui/Content/Content'
    }
}
</script>

<script>
export default {
    methods: {
        handleNavsChange(obj) {
            console.log('handleNavsChange', obj);
            this.selectedIndex = obj.current;
        }
    }
};
</script>
```

```atom 配合导航（Navs）组件；首屏展示非第一项
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-navs
            :label-list="navsList"
            :selected-index="selectedIndex"
            @change="handleNavsChange"
        />
        <!-- 这里可以增加间距 -->
        <div class="c-gap-top"/>
        <c-content
            :selected-index="selectedIndex"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
            </div>
            <div>
                沿对革，异对同，白叟对黄童。江风对海雾，牧子对渔翁。颜巷陋，阮途穷，冀北对辽东。池中濯足水，门外打头风。梁帝讲经同泰寺，汉皇置酒未央宫。尘虑萦心，懒抚七弦绿绮；霜华满鬓，羞看百炼青铜。
                <br>
                贫对富，塞对通，野叟对溪童。鬓皤对眉绿，齿皓对唇红。天浩浩，日融融，佩剑对弯弓。半溪流水绿，千树落花红。野渡燕穿杨柳雨，芳池鱼戏芰荷风。女子眉纤，额下现一弯新月；男儿气壮，胸中吐万丈长虹。
            </div>
            <div>
                春对夏，秋对冬，暮鼓对晨钟。观山对玩水，绿竹对苍松。冯妇虎，叶公龙，舞蝶对鸣蛩。衔泥双紫燕，课蜜几黄蜂。春日园中莺恰恰，秋天塞外雁雍雍。秦岭云横，迢递八千远路；巫山雨洗，嵯峨十二危峰。
                <br>
                明对暗，淡对浓，上智对中庸。镜奁对衣笥，野杵对村舂。花灼烁，草蒙茸，九夏对三冬。台高名戏马，斋小号蟠龙。手擘蟹螯从毕卓，身披鹤氅自王恭。五老峰高，秀插云霄如玉笔；三姑石大，响传风雨若金镛。
                <br>
                仁对义，让对恭，禹舜对羲农。雪花对云叶，芍药对芙蓉。陈后主，汉中宗，绣虎对雕龙。柳塘风淡淡，花圃月浓浓。春日正宜朝看蝶，秋风那更夜闻蛩。战士邀功，必借干戈成勇武；逸民适志，须凭诗酒养踈慵。
            </div>
        </c-content>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: 1,
        navsList: [
            {
                txt:"中国"
            },
            {
                txt:"美国"
            },
            {
                txt:"新西兰"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-navs': 'search-ui/Navs/Navs',
        'c-content': 'search-ui/Content/Content'
    }
}
</script>

<script>
export default {
    methods: {
        handleNavsChange(obj) {
            console.log('handleNavsChange', obj);
            this.selectedIndex = obj.current;
        }
    }
};
</script>
```

```atom 配合导航（Navs）组件；异步
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <!-- <c-loading/> -->
        <c-navs
            :label-list="navsList"
            @change="handleNavsChange"
        />
        <!-- 这里可以增加间距 -->
        <div class="c-gap-top"/>
        <c-content
            :selected-index="selectedIndex"
            :list="navsList"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535038146186&di=c67fdeb846fced916b2d0beb8e00990b&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa8ec8a13632762d04e42fdf4a7ec08fa513dc679.jpg"
                    type="z"
                />
                两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
            </div>
            <div>
                沿对革，异对同，白叟对黄童。江风对海雾，牧子对渔翁。颜巷陋，阮途穷，冀北对辽东。池中濯足水，门外打头风。梁帝讲经同泰寺，汉皇置酒未央宫。尘虑萦心，懒抚七弦绿绮；霜华满鬓，羞看百炼青铜。
                <br>
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530199702668&di=5a2eb2bb392afe97869ebc075d61e63f&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F279759ee3d6d55fb70532f6d6a224f4a21a4dde0.jpg"
                    type="z"
                />
                贫对富，塞对通，野叟对溪童。鬓皤对眉绿，齿皓对唇红。天浩浩，日融融，佩剑对弯弓。半溪流水绿，千树落花红。野渡燕穿杨柳雨，芳池鱼戏芰荷风。女子眉纤，额下现一弯新月；男儿气壮，胸中吐万丈长虹。
            </div>
            <div>
                春对夏，秋对冬，暮鼓对晨钟。观山对玩水，绿竹对苍松。冯妇虎，叶公龙，舞蝶对鸣蛩。衔泥双紫燕，课蜜几黄蜂。春日园中莺恰恰，秋天塞外雁雍雍。秦岭云横，迢递八千远路；巫山雨洗，嵯峨十二危峰。
                <br>
                明对暗，淡对浓，上智对中庸。镜奁对衣笥，野杵对村舂。花灼烁，草蒙茸，九夏对三冬。台高名戏马，斋小号蟠龙。手擘蟹螯从毕卓，身披鹤氅自王恭。五老峰高，秀插云霄如玉笔；三姑石大，响传风雨若金镛。
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535632942&di=874efbceb202a5bc38f3c5cf4b424846&imgtype=jpg&er=1&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F3812b31bb051f8193909739cddb44aed2e73e73c.jpg"
                    type="z"
                />
                仁对义，让对恭，禹舜对羲农。雪花对云叶，芍药对芙蓉。陈后主，汉中宗，绣虎对雕龙。柳塘风淡淡，花圃月浓浓。春日正宜朝看蝶，秋风那更夜闻蛩。战士邀功，必借干戈成勇武；逸民适志，须凭诗酒养踈慵。
            </div>
        </c-content>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        navsList: [
            {
                txt:"中国",
                loading: false
            },
            {
                txt:"美国",
                loading: true
            },
            {
                txt:"新西兰",
                loading: true
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-navs': 'search-ui/Navs/Navs',
        'c-img': 'search-ui/Image/Image',
        'c-content': 'search-ui/Content/Content',
        'c-loading': 'search-ui/Loading/Loading'
    }
}
</script>

<script>
export default {
    methods: {
        handleNavsChange(obj) {
            console.log('handleNavsChange', obj);
            this.selectedIndex = obj.current;
            setTimeout(() => {
                this.navsList[this.selectedIndex].loading = false;
            }, 1000);
        }
    }
};
</script>
```

```atom 配合选项卡（Tabs）组件
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-tabs
            :selected="0"
            has-slide-animation
            @change="handleTabsChange">
            <c-tabs-item
                a-for="(tab, index) in tabsList"
                :key="index"
                :label="tab.label"
                :log-content="{
                    'key': 'value'
                }"
            />
        </c-tabs>
        <c-content
            :selected-index="selectedIndex"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
            </div>
            <div>
                沿对革，异对同，白叟对黄童。江风对海雾，牧子对渔翁。颜巷陋，阮途穷，冀北对辽东。池中濯足水，门外打头风。梁帝讲经同泰寺，汉皇置酒未央宫。尘虑萦心，懒抚七弦绿绮；霜华满鬓，羞看百炼青铜。
                <br>
                贫对富，塞对通，野叟对溪童。鬓皤对眉绿，齿皓对唇红。天浩浩，日融融，佩剑对弯弓。半溪流水绿，千树落花红。野渡燕穿杨柳雨，芳池鱼戏芰荷风。女子眉纤，额下现一弯新月；男儿气壮，胸中吐万丈长虹。
            </div>
            <div>
                春对夏，秋对冬，暮鼓对晨钟。观山对玩水，绿竹对苍松。冯妇虎，叶公龙，舞蝶对鸣蛩。衔泥双紫燕，课蜜几黄蜂。春日园中莺恰恰，秋天塞外雁雍雍。秦岭云横，迢递八千远路；巫山雨洗，嵯峨十二危峰。
                <br>
                明对暗，淡对浓，上智对中庸。镜奁对衣笥，野杵对村舂。花灼烁，草蒙茸，九夏对三冬。台高名戏马，斋小号蟠龙。手擘蟹螯从毕卓，身披鹤氅自王恭。五老峰高，秀插云霄如玉笔；三姑石大，响传风雨若金镛。
                <br>
                仁对义，让对恭，禹舜对羲农。雪花对云叶，芍药对芙蓉。陈后主，汉中宗，绣虎对雕龙。柳塘风淡淡，花圃月浓浓。春日正宜朝看蝶，秋风那更夜闻蛩。战士邀功，必借干戈成勇武；逸民适志，须凭诗酒养踈慵。
            </div>
        </c-content>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        tabsList: [
            {
                label: '第一个'
            },
            {
                label: '第二个'
            },
            {
                label: '第三个'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tabs': 'search-ui/Tabs/Tabs',
        'c-tabs-item': 'search-ui/Tabs/TabsItem',
        'c-content': 'search-ui/Content/Content'
    }
}
</script>

<script>
export default {
    methods: {
        handleTabsChange(selectedIndex) {
            console.log(selectedIndex);
            this.selectedIndex = selectedIndex;
        }
    }
};
</script>
```

```atom 配合选项卡（Tabs）组件；Tabs 下再嵌套 Tags + Content
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-tabs
            :selected="0"
            has-slide-animation
            @change="handleTabsChange">
            <c-tabs-item
                a-for="(tab, index) in tabsList"
                :key="index"
                :label="tab.label"
                :log-content="{
                    'key': 'value'
                }"
            >
                <div a-if="index === 0">
                    <c-tags
                        :selected-index="tagSelectedIndex"
                        :label-list="tagsList"
                        @change="handleTagsChange"
                    />
                    <c-content
                        :selected-index="tagSelectedIndex"
                        :horizontal-transition="false"
                    >
                        <div>
                            tag 内容1
                        </div>
                        <div>
                            tag 内容2
                            <br>
                            tag 内容2
                        </div>
                        <div>
                            tag 内容3
                            <br>
                            tag 内容3
                            <br>
                            tag 内容3
                        </div>
                    </c-content>
                </div>
                <div a-else>
                    tab 内容 {{ index }}
                </div>
            </c-tabs-item>
        </c-tabs>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        tabsList: [
            {
                label: 'tab1'
            },
            {
                label: 'tab2'
            },
            {
                label: 'tab3'
            }
        ],
        tagSelectedIndex: 1,
        tagsList: [
            {
                name: 'tag1'
            },
            {
                name: 'tag2'
            },
            {
                name: 'tag3'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tabs': 'search-ui/Tabs/Tabs',
        'c-tags': 'search-ui/Tags/Tags',
        'c-tabs-item': 'search-ui/Tabs/TabsItem',
        'c-content': 'search-ui/Content/Content'
    }
}
</script>

<script>
export default {
    methods: {
        handleTabsChange(selectedIndex) {
            console.log(selectedIndex);
            this.selectedIndex = selectedIndex;
        },
        handleTagsChange(obj) {
            console.log(obj);
            this.tagSelectedIndex = obj.current;
        }
    }
};
</script>
```

```atom 配合标签（Tags）组件；不带水平切换动效
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-tags
            :label-list="tagsList"
            @change="handleTagsChange"
        />
        <c-content
            :selected-index="selectedIndex"
            :horizontal-transition="false"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
            </div>
            <div>
                沿对革，异对同，白叟对黄童。江风对海雾，牧子对渔翁。颜巷陋，阮途穷，冀北对辽东。池中濯足水，门外打头风。梁帝讲经同泰寺，汉皇置酒未央宫。尘虑萦心，懒抚七弦绿绮；霜华满鬓，羞看百炼青铜。
                <br>
                贫对富，塞对通，野叟对溪童。鬓皤对眉绿，齿皓对唇红。天浩浩，日融融，佩剑对弯弓。半溪流水绿，千树落花红。野渡燕穿杨柳雨，芳池鱼戏芰荷风。女子眉纤，额下现一弯新月；男儿气壮，胸中吐万丈长虹。
            </div>
            <div>
                春对夏，秋对冬，暮鼓对晨钟。观山对玩水，绿竹对苍松。冯妇虎，叶公龙，舞蝶对鸣蛩。衔泥双紫燕，课蜜几黄蜂。春日园中莺恰恰，秋天塞外雁雍雍。秦岭云横，迢递八千远路；巫山雨洗，嵯峨十二危峰。
                <br>
                明对暗，淡对浓，上智对中庸。镜奁对衣笥，野杵对村舂。花灼烁，草蒙茸，九夏对三冬。台高名戏马，斋小号蟠龙。手擘蟹螯从毕卓，身披鹤氅自王恭。五老峰高，秀插云霄如玉笔；三姑石大，响传风雨若金镛。
                <br>
                仁对义，让对恭，禹舜对羲农。雪花对云叶，芍药对芙蓉。陈后主，汉中宗，绣虎对雕龙。柳塘风淡淡，花圃月浓浓。春日正宜朝看蝶，秋风那更夜闻蛩。战士邀功，必借干戈成勇武；逸民适志，须凭诗酒养踈慵。
            </div>
        </c-content>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        tagsList: [
            {
                name: '第一个'
            },
            {
                name: '第二个'
            },
            {
                name: '第三个'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tags': 'search-ui/Tags/Tags',
        'c-content': 'search-ui/Content/Content'
    }
}
</script>

<script>
export default {
    methods: {
        handleTagsChange(obj) {
            console.log(obj);
            this.selectedIndex = obj.current;
        }
    }
};
</script>
```

```atom 配合标签（Tags）组件；内容区增加点击态
<template>
    <c-aladdin
        touchable
        show-right-url="http://www.baidu.com"
        show-right-text="右侧文案"
        show-left-text="左侧文案"
    >
        <c-tags
            :label-list="tagsList"
            @change="handleTagsChange"
        />
        <c-content
            :selected-index="selectedIndex"
            :horizontal-transition="false"
        >
            <div a-for="(tagsItem, index) in tagsList" :key="index">
                <div
                    a-for="(item, idx) in tagsItem.list"
                    :key="idx"
                    class="c-line-bottom"
                >
                    <c-touchable-feedback
                        :left="-.17"
                        :right="-.17"
                    >
                        <div
                            class="c-gap-inner-top c-gap-inner-bottom"
                        >
                            <div class="c-color-link" clamp="1">
                                {{ item.text }}
                            </div>
                        </div>
                    </c-touchable-feedback>
                </div>
            </div>
        </c-content>
        <div class="c-gap-top-small"/>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        tagsList: [
            {
                name: '第一个',
                list: [
                    {
                        text: 11111111
                    },
                    {
                        text: 22222222
                    },
                    {
                        text: 33333333
                    }
                ]
            },
            {
                name: '第二个',
                list: [
                    {
                        text: 4444444
                    },
                    {
                        text: 5555555
                    }
                ]
            },
            {
                name: '第三个',
                list: [
                    {
                        text: 666666
                    },
                    {
                        text: 777777
                    },
                    {
                        text: 888888
                    }
                ]
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tags': 'search-ui/Tags/Tags',
        'c-content': 'search-ui/Content/Content',
        'c-touchable-feedback': 'search-ui/TouchableFeedback/TouchableFeedback'
    }
}
</script>

<script>
export default {
    methods: {
        handleTagsChange(obj) {
            console.log(obj);
            this.selectedIndex = obj.current;
        }
    }
};
</script>
```

```atom 配合标签组（TagGroup）组件；不带水平切换动效
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-tag-group
            type="radio"
            :list="list"
            @change="handleTagGroupChange"
        />
        <!-- 这里可以增加间距 -->
        <div class="c-gap-top-small"/>
        <c-content
            :selected-index="selectedIndex"
            :horizontal-transition="false"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
            </div>
            <div>
                沿对革，异对同，白叟对黄童。江风对海雾，牧子对渔翁。颜巷陋，阮途穷，冀北对辽东。池中濯足水，门外打头风。梁帝讲经同泰寺，汉皇置酒未央宫。尘虑萦心，懒抚七弦绿绮；霜华满鬓，羞看百炼青铜。
                <br>
                贫对富，塞对通，野叟对溪童。鬓皤对眉绿，齿皓对唇红。天浩浩，日融融，佩剑对弯弓。半溪流水绿，千树落花红。野渡燕穿杨柳雨，芳池鱼戏芰荷风。女子眉纤，额下现一弯新月；男儿气壮，胸中吐万丈长虹。
            </div>
            <div>
                春对夏，秋对冬，暮鼓对晨钟。观山对玩水，绿竹对苍松。冯妇虎，叶公龙，舞蝶对鸣蛩。衔泥双紫燕，课蜜几黄蜂。春日园中莺恰恰，秋天塞外雁雍雍。秦岭云横，迢递八千远路；巫山雨洗，嵯峨十二危峰。
                <br>
                明对暗，淡对浓，上智对中庸。镜奁对衣笥，野杵对村舂。花灼烁，草蒙茸，九夏对三冬。台高名戏马，斋小号蟠龙。手擘蟹螯从毕卓，身披鹤氅自王恭。五老峰高，秀插云霄如玉笔；三姑石大，响传风雨若金镛。
                <br>
                仁对义，让对恭，禹舜对羲农。雪花对云叶，芍药对芙蓉。陈后主，汉中宗，绣虎对雕龙。柳塘风淡淡，花圃月浓浓。春日正宜朝看蝶，秋风那更夜闻蛩。战士邀功，必借干戈成勇武；逸民适志，须凭诗酒养踈慵。
            </div>
            <div>
                楼对阁，户对窗，巨海对长江。蓉裳对蕙帐，玉斝对银釭。青布幔，碧油幢，宝剑对金缸。忠心安社稷，利口覆家邦。世祖中兴延马武，桀王失道杀龙逄。秋雨潇潇，漫烂黄花都满径；春风袅袅，扶疏绿竹正盈窗。
                <br>
                旌对旆，盖对幢，故国对他邦。千山对万水，九泽对三江。山岌岌，水淙淙，鼓振对钟撞。清风生酒舍，皓月照书窗。阵上倒戈辛纣战，道旁系剑子婴降。夏日池塘，出没浴波鸥对对；春风帘幕，往来营垒燕双双。
                <br>
                铢对两，只对双，华岳对湘江。朝车对禁鼓，宿火对寒缸。青琐闼，碧纱窗，汉社对周邦。笙箫鸣细细，钟鼓响摐摐。主簿栖鸾名有览，治中展骥姓惟庞。苏武牧羊，雪屡餐于北海；庄周活鲋，水必决于西江。
            </div>
            <div>
                茶对酒，赋对诗，燕子对莺儿。栽花对种竹，落絮对游丝。四目颉，一足夔，鸲鹆对鹭鸶。半池红菡萏，一架白荼蘼。几阵秋风能应候，一犁春雨甚知时。智伯恩深，国士吞变形之炭；羊公德大，邑人竖堕泪之碑。
                <br>
                行对止，速对迟，舞剑对围棋。花笺对草字，竹简对毛锥。汾水鼎，岘山碑，虎豹对熊罴。花开红锦绣，水漾碧琉璃。去妇因探邻舍枣，出妻为种后园葵。笛韵和谐，仙管恰从云里降；橹声咿轧，渔舟正向雪中移。
            </div>
            <div>
                戈对甲，鼓对旗，紫燕对黄鹂。梅酸对李苦，青眼对白眉。三弄笛，一围棋，雨打对风吹。海棠春睡早，杨柳昼眠迟。张骏曾为槐树赋，杜陵不作海棠诗。晋士特奇，可比一斑之豹；唐儒博识，堪为五总之龟。
            </div>
        </c-content>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        list: [
            {
                text: '标签一',
                selected: true
            },
            {
                text: '标签二'
            },
            {
                text: '标签三'
            },
            {
                text: '标签四'
            },
            {
                text: '标签五'
            },
            {
                text: '标签六'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-tag-group': 'search-ui/TagGroup/TagGroup',
        'c-content': 'search-ui/Content/Content'
    }
}
</script>

<script>
export default {
    methods: {
        handleTagGroupChange(selectedIndex) {
            console.log(selectedIndex);
            this.selectedIndex = selectedIndex;
        }
    }
};
</script>
```

```atom 配合简单筛选（FilterSimple）组件、选择器（Selector）组件；
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-filter-simple
            :selection-list="selectionList"
            :selected-index="selectedIndex"
            class="c-row-tile"
            @click="handleFilterSimpleClick"
        />
        <!-- 这里可以增加间距 -->
        <div class="c-gap-top"/>
        <c-content
            :horizontal-transition="false"
            :list="contentList"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
                <c-img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535038146186&di=c67fdeb846fced916b2d0beb8e00990b&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa8ec8a13632762d04e42fdf4a7ec08fa513dc679.jpg"
                    type="z"
                />
            </div>
        </c-content>
        <c-selector
            :open="selectedIndex !== -1"
            :title="selectorTitle"
            :data="selectorList"
            @select="handleSelectorSelect"
            @close="handleSelectorClose"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        selectionList: [
            {
                filterKey: 'food',
                label: '食物',
                selectorList: [
                    {"text":"汉堡","value":"1"},
                    {"text":"拌面","value":"2"},
                    {"text":"神户牛肉","value":"3"},
                    {"text":"墨西哥鸡肉卷","value":"4"},
                    {"text":"蓝旗金枪鱼","value":"5"},
                    {"text":"波士顿龙虾","value":"6"},
                    {"text":"烤全羊","value":"7"},
                    {"text":"黄金大闸蟹","value":"8"}
                ]
            },
            {
                filterKey: 'city',
                label: '地点',
                selectorList: [
                    {"text":"北京","value":"1"},
                    {"text":"雅加达","value":"2"},
                    {"text":"郑州","value":"3"},
                    {"text":"西安","value":"4"},
                    {"text":"杭州","value":"5"},
                    {"text":"香港","value":"6"},
                    {"text":"青岛","value":"7"},
                    {"text":"厦门","value":"8"}
                ]
            },
            {
                filterKey: 'game',
                label: '游戏',
                selectorList: [
                    {"text":"英雄联盟","value":"1"},
                    {"text":"魔兽世界","value":"2"},
                    {"text":"Dota","value":"3"},
                    {"text":"绝地求生","value":"4"},
                    {"text":"堡垒之夜","value":"5"},
                    {"text":"反恐精英","value":"6"},
                    {"text":"王者荣耀","value":"7"},
                    {"text":"NBA2K18","value":"8"}
                ]
            }
        ],
        selectorTitle: '',
        selectorList: [],
        contentList: [
            {
                loading: false
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-filter-simple': 'search-ui/FilterSimple/FilterSimple',
        'c-content': 'search-ui/Content/Content',
        'c-img': 'search-ui/Image/Image',
        'c-selector': 'search-ui/Selector/Selector'
    }
}
</script>

<script>
export default {
    methods: {
        handleFilterSimpleClick(selectedSelection) {
            this.selectedIndex = selectedSelection.index;
            this.selectorTitle = this.selectionList[this.selectedIndex].label;
            this.selectorList = this.selectionList[this.selectedIndex].selectorList;
        },
        handleSelectorSelect(obj) {
            console.log('handleSelectorSelect', obj);
            // 选中选项
            this.selectorList.forEach((item, index) => {
                item.selected = false;
            });
            this.selectorList[obj.index].selected = true;
            // 设置加载中
            this.contentList[0].loading = true;
            setTimeout(() => {
                this.contentList[0].loading = false;
            }, 1000);
        },
        handleSelectorClose() {
            console.log('handleSelectorClose');
            this.selectedIndex = -1;
        }
    }
};
</script>
```

```atom 上下切换；仅有一项 slot
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-row>
            <c-span>
                <c-btn
                    text="点我切换"
                    @click="handleBtnClick"
                />
            </c-span>
        </c-row>
        <c-content
            :selected-index="selectedIndex"
            :vertical-transition="true"
        >
            <div>
                云对雨，雪对风，晚照对晴空。来鸿对去燕，宿鸟对鸣虫。三尺剑，六钧弓，岭北对江东。人间清暑殿，天上广寒宫。两岸晓烟杨柳绿，一园春雨杏花红。两鬓风霜，途次早行之客；一蓑烟雨，溪边晚钓之翁。
            </div>
        </c-content>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        navsList: [
            {
                txt:"中国"
            },
            {
                txt:"美国"
            },
            {
                txt:"新西兰"
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-navs': 'search-ui/Navs/Navs',
        'c-btn': 'search-ui/Button/Button',
        'c-content': 'search-ui/Content/Content',
        'c-row': 'search-ui/Row/Row',
        'c-span': 'search-ui/Row/Span'
    }
}
</script>

<script>
export default {
    methods: {
        handleBtnClick() {
            if (this.selectedIndex === -1) {
                this.selectedIndex = 0;
            }
            else if (this.selectedIndex === 0) {
                this.selectedIndex = -1;
            }
        }
    }
};
</script>
```

```atom 配合导航（Navs）组件、展开收起（SpreadEnhanced）组件；（selectedIndex 不能为 -1）
<template>
    <c-aladdin
        hide-header
        hide-footer
    >
        <c-navs
            :label-list="navsList"
            @change="handleNavsChange"
        />
        <!-- 这里可以增加间距 -->
        <div class="c-gap-top"/>
        <c-content
            ref="content"
            :selected-index="selectedIndex"
        >
            <div
                a-for="(item, index) in navsList"
                :key="index"
            >
                <!--<div
                    :style="{
                        color: item.color
                    }"
                >
                    第 {{ index }} 页
                </div>-->
                <c-spread
                    :threshold="item.threshold"
                    @change="handleSpreadChange({
                        data: $event,
                        item,
                        index
                    })"
                >
                    <div
                        a-for="(i, index2) in item.num"
                        :key="index + '' + index2"
                    >
                        第 {{ index2 }} 行
                    </div>
                </c-spread>
            </div>
        </c-content>
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: 0,
        navsList: [
            {
                txt:"中国",
                num: 3,
                threshold: 1,
                color: 'red'
            },
            {
                txt:"美国",
                num: 5,
                threshold: 3,
                color: 'blue'
            },
            {
                txt:"新西兰",
                num: 7,
                threshold: 5,
                color: 'green'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-navs': 'search-ui/Navs/Navs',
        'c-content': 'search-ui/Content/Content',
        'c-spread': 'search-ui/SpreadEnhanced/Spread'
    }
}
</script>

<script>
export default {
    methods: {
        handleNavsChange(obj) {
            console.log('handleNavsChange', obj);
            this.selectedIndex = obj.current;
        },
        handleSpreadChange(obj) {
            console.log('handleSpreadChange', obj);
            let height = obj.data.height;
            this.$refs.content.setHeight(height);
        }
    }
};
</script>
```

## 注意事项

1. Content 内部不要嵌套 fixed dom 元素，会导致页面错乱；


## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
selectedIndex | number | 0 | 可选 | 当前显示项的索引，改变时会触发相应的内容区变化 | -
list | array | [] | 可选 | 数据列表，这里主要是为了拿到每一个内容区的&nbsp;loading&nbsp;状态 | -
>> list[].loading | boolean | - | - | 用来表示异步加载 | -
verticalTransition | boolean | false | 可选 | 上下滑动动效，`selectedIndex`改变时触发（从-1到x或从x到-1） | -
horizontalTransition | boolean | true | 可选 | 左右滑动动效，`selectedIndex`改变时触发（从x到x） | -
opacityTransition | boolean | true | 可选 | 透明度动效 | -
loadingOpts | object | {"paddingTop":".15rem"} | 可选 | 加载中配置 | -
>> loadingOpts.paddingTop | string | .15rem | - | loading距离顶部的距离 | -

### Slots



名称 | 描述
--- | ---
default | 内容区域，可以传多个

### Events
无

