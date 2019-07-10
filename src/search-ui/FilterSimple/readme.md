---
name: FilterSimple
title: 简单筛选
category: 交互类
owner: 王凯
---

## 使用场景

> 参考UE规范：[简单筛选](http://soy.baidu-int.com:8905/static/specification/ue-guide/Filter.html)

## 示例

### 简单筛选组件 FilterSimple

```atom 简单筛选组件
<template>
    <c-aladdin
        touchable
    >
        <c-filter-simple
            :selection-list="selectionList"
            :selected-index="selectedIndex"
            class="c-row-tile"
            @click="onClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        selectionList: [
            {
                filterKey: 'time',
                label: '时间'
            },
            {
                filterKey: 'city',
                label: '城市'
            },
            {
                filterKey: 'price',
                label: '价格'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-filter-simple': 'search-ui/FilterSimple/FilterSimple'
    }
}
</script>

<script>
export default {
    methods: {
        onClick(selectedSelection) {
            this.selectedIndex = selectedSelection.index;
            console.log(selectedSelection);
        }
    }
};
</script>
```


```atom 简单筛选组件；修改背景色
<template>
    <c-aladdin
        touchable
    >
        <c-filter-simple
            :selection-list="selectionList"
            :selected-index="selectedIndex"
            background-color="#fff"
            class="c-row-tile"
            @click="onClick"
        />
    </c-aladdin>
</template>

<script type="config">
{
    data: {
        selectedIndex: -1,
        selectionList: [
            {
                filterKey: 'time',
                label: '时间'
            },
            {
                filterKey: 'city',
                label: '城市'
            },
            {
                filterKey: 'price',
                label: '价格'
            }
        ]
    },
    components: {
        'c-aladdin': 'search-ui/Aladdin/Aladdin',
        'c-filter-simple': 'search-ui/FilterSimple/FilterSimple'
    }
}
</script>

<script>
export default {
    methods: {
        onClick(selectedSelection) {
            this.selectedIndex = selectedSelection.index;
            console.log(selectedSelection);
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
            }, 3000);
        },
        handleSelectorClose() {
            console.log('handleSelectorClose');
            this.selectedIndex = -1;
        }
    }
};
</script>
```

### 筛选标签栏组件 FilterTagLayout

```atom 筛选标签栏组件
<template>
    <c-aladdin>
        <c-filter-tag-layout
            :options="options"
            class="c-row-tile"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            options: [
                {
                    text: '标签0'
                },
                {
                    text: '标签1',
                    type: 'order'
                },
                {
                    text: '标签2'
                },
                {
                    text: '标签3',
                    type: 'order'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-tag-layout': 'search-ui/FilterSimple/FilterTagLayout'
        }
    }
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('筛选标签栏 change', obj);
        }
    }
};
</script>

<style module>
</style>
```

```atom 设置强制选中
<template>
    <c-aladdin>
        <c-filter-tag-layout
            :options="options"
            class="c-row-tile"
            @change="handleChange"
        />
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            options: [
                {
                    text: '标签0',
                    selected: true
                },
                {
                    text: '标签1',
                    type: 'order',
                    direction: 'down'
                },
                {
                    text: '标签2'
                },
                {
                    text: '标签3',
                    type: 'order'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-tag-layout': 'search-ui/FilterSimple/FilterTagLayout'
        }
    }
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('筛选标签栏 change', obj);
        }
    }
};
</script>

<style module>
</style>
```

```atom 添加 slot
<template>
    <c-aladdin>
        <c-filter-tag-layout
            :options="options"
            class="c-row-tile"
            @change="handleChange"
        >
            <div>
                <c-icon
                    type="list"
                    @click="handleIconClick"
                />
            </div>
        </c-filter-tag-layout>
    </c-aladdin>
</template>

<script type="config">
    {
        data: {
            options: [
                {
                    text: '标签0'
                },
                {
                    text: '标签1',
                    direction: 'down'
                },
                {
                    text: '标签2'
                },
                {
                    text: '标签3',
                    type: 'order'
                }
            ]
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-filter-tag-layout': 'search-ui/FilterSimple/FilterTagLayout',
            'c-icon': 'search-ui/Icon/Icon'
        }
    }
</script>

<script>
export default {
    methods: {
        handleChange(obj) {
            console.log('筛选标签栏 change', obj);
        },
        handleIconClick() {
            console.log('handleIconClick', handleIconClick);
        }
    }
};
</script>

<style module>
</style>
```

## 注意事项

1. 此组件内部不维护任何跟当前选中项相关的状态数据；
2. 要控制组件的选中状态，需要开发者自己在 click 回调函数中更新组件的 selectedIndex 属性，详见上面示例的源码；
3. 在 click 回调函数中可以根据 index 或 filterKey(需要保障 filterKey 的唯一性)来识别点击的是哪一项。

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
selectionList | array | - | 必选 | 筛选项列表 | -
>> selectionList[].filterKey | string | - | - | 筛选项的key | -
>> selectionList[].label | string | - | - | 筛选项的显示文字 | -
selectedIndex | number | -1 | 可选 | 当前选中项的索引，默认值-1表示不选中任何筛选项 | -
backgroundColor | string | #f5f5f5 | 可选 | 背景色 | -

#### FilterTagLayout

名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
options | array | - | 可选 | 标签数据数组 | -
>> options[].text | string | - | - | 标签文案 | -
>> options[].type | string | normal | - | 标签的类型：normal，正常；order，排序 | -
>> options[].direction | string | down | - | 标签箭头的方向：up，向上；down，向下 | -
>> options[].selected | boolean | - | - | 是否强制选中 | -
>> options[].color | string | #666 | - | 默认颜色 | -
>> options[].selectedColor | string | #333 | - | 选中的颜色 | -
border | object | {"top":false,"bottom":true} | 可选 | 分割线 | -
>> border.top | boolean | - | - | 上分割线 | -
>> border.bottom | boolean | true | - | 下分割线 | -
preventDefaultTouchMove | boolean | false | 可选 | 是否阻止`touchmove`事件 | -
primaryColor | string | - | 可选 | 主颜色 | -

### Slots

#### FilterTagLayout

名称 | 描述
--- | ---
default | 右侧自定义区域

### Events


- **click**: 点击选项卡时触发，参数对象中包含index、filterKey和label(如果index为-1，这两个值为undefined)属性

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.index | number | 选中索引
  ${param1}.filterKey | number \| undefined | 选中项的key，如果index为-1，则为undefined
  ${param1}.label | number \| undefined | 选中项显示文字，如果index为-1，则为undefined


#### FilterTagLayout


- **click**: 改变事件，点击标签项时触发

  名称 | 类型 | 描述
  --- | --- | ---
  ${param1}.selectedIndex | number \| string | 选中索引
  ${param1}.lastSelectedIndex | number \| string | 上一次的选中项索引
  ${param1}.type | string | 选中项类型
  ${param1}.direction | string | 选中项方向



