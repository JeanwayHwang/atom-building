---
name: Filter
title: 筛选
category: 筛选类
owner: 辛洋汐
---

## 使用场景

> 参考UE规范：[【简单筛选】](http://soy.baidu-int.com:8905/static/specification/ue-guide/Filter.html)

## 示例

由于数据比较大，编译需要很长事件，故先吧示例中的数据改成了json字符串+filter的形式，使用时正常传入数组即可

```atom 筛选

<template>
    <div class="c-container" style="height:300px;">
        <c-filter :selection="selection | decode" @change="changeTab">
        </c-filter>
    </div>
</template>

<script type="config">
    {
        data: {
            selection: '[{"filterKey":"tag1","defaultText":"筛选one","label":"筛选头部1","default":"value1","type":"one","values":[{"value":"","text":"全部"},{"value":"value1","text":"text1"}]},{"filterKey":"tag2","defaultText":"筛选two","label":"筛选头部2","default":"","type":"two","values":[{"value":"","text":"全部","subCate":{"filterKey":"sub_tag","default":"sub_value1","values":[{"value":"","text":"不限"},{"value":"sub_value1","text":"中文说明1"}]}},{"value":"value1","text":"text1","subCate":{"filterKey":"sub_tag","default":"","values":[{"value":"","text":"全部"},{"value":"sub_value1","text":"中文说明1"}]}}]},{"filterKey":"三级左","label":"科目三级","default":"","type":"three","values":[{"value":"","text":"it","subCate":{"filterKey":"三级中","default":"","values":[{"value":"","text":"全部、erjikemu","subCate":{"filterKey":"three_tag","default":"","values":[{"value":"","text":"不限0"},{"value":"sub_value1","text":"中文说明10"}]}},{"value":"sub_value1","text":"中文说明1","subCate":{"filterKey":"three_tag","default":"","values":[{"value":"","text":"不限1"},{"value":"sub_value1","text":"中文说明11"}]}},{"value":"sub_value2","text":"中文说明2","subCate":{"filterKey":"three_tag","default":"","values":[{"value":"","text":"不限2"},{"value":"sub_value1","text":"中文说明12"}]}},{"value":"sub_value3","text":"中文说明3","subCate":{"filterKey":"three_tag","default":"","values":[{"value":"","text":"不限3"},{"value":"sub_value1","text":"中文说明13"}]}}]}},{"value":"value1","text":"text1","subCate":{"filterKey":"sub_tagsan","default":"","values":[{"value":"","text":"不限1","subCate":{"filterKey":"three_tag","default":"","values":[{"value":"","text":"不限4"},{"value":"sub_value1","text":"中文说明14"}]}},{"value":"sub_value1","text":"中文说明1","subCate":{"filterKey":"three_tag","default":"","values":[{"value":"","text":"不限5"},{"value":"sub_value1","text":"中文说明15"}]}},{"value":"sub_value2","text":"中文说明2","subCate":{"filterKey":"three_tag","default":"","values":[{"value":"","text":"不限6"},{"value":"sub_value1","text":"中文说明16"}]}},{"value":"sub_value3","text":"中文说明3","subCate":{"filterKey":"three_tag","default":"","values":[{"value":"","text":"不限7"},{"value":"sub_value1","text":"中文说明17"}]}}]}}]},{"filterKey":"tag1","label":"更多筛选","default":"","type":"multi","values":[{"value":"","text":"口味","subCate":{"filterKey":"multisub_tag1","default":"2","type":"list","values":[{"value":"1","text":"香甜"},{"value":"2","text":"辣味"}]}},{"value":"","text":"工艺","subCate":{"filterKey":"rangeInput","default":"","type":"rangeInput","input":{"placeHold":"请输入价格范围","unit":"元","errortip":"输入错误"}}}]}]'
        },
        components: {
            'c-filter': 'search-ui/Filter/Filter'
        }
    }
</script>

<script type="php">
    function filter_decode($json) {
        return json_decode($json, true);
    }
</script>

<script>
    module.exports = {
        filters: {
            decode(json) {
                return JSON.parse(json);
            }
        },
        methods: {
            changeTab(filters) {
                console.log('readme', filters);  
            }
        }
    }
</script>


```

## API
### Props



名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
selection | array | - | 可选 | 选项数组 | -
>> selection[].type | string | - | - | 扩展字段，必选，设置筛选的类型：一级筛选（one）、二级筛选（two）、三级筛选（three）、更多筛选（multi）、不展开样式（normal） | -
>> selection[].defaultText | string | - | - | 扩展字段，可选，标题文本说明，优先`label`显示 | -
>> selection[].label | string | - | - | 扩展字段，必选，标题文本说明 | -
>> selection[].filterKey | string | - | - | 必选，筛选相关key，一级筛选的key | -
>> selection[].default | string | - | - | 可选，默认选中值，与value对应 | -
>> selection[].values | Array | - | - | 必选，筛选项数组 | -
>> selection[].values[].value | string | - | - | 筛选值，必选，用于与后端交互 | -
>> selection[].values[].text | string | - | - | 必选，用于页面展现的文案 | -
>> selection[].values[].subCate | Object | - | - | 可选，二级筛选，用来显示在右侧 | -
>> selection[].values[].subCate.filterKey | string | - | - | 筛选相关key | -
>> selection[].values[].subCate.default | Array | - | - | 默认选中值，与value对应，兼容单选和多选 | -
>> selection[].values[].subCate.type | string | - | - | 更多筛选项的类型，目前支持三种类型：`list`表示列表型；`rangeInput`表示范围输入型；`multi`多选型。默认`list`列表型 | -
>> selection[].values[].subCate.spreadLevel | boolean | - | - | 可选，多选里边控制默认展开收起字段 | -
>> selection[].values[].subCate.defShowNum | number \| string | - | - | 可选，每行默认展示的列表个数 | -
>> selection[].values[].subCate.input | Object | - | - | 二级内容，`rangeInput`型的筛选项值 | -
>> selection[].values[].subCate.input.unit | string | - | - | 可选，输入框的单位 | -
>> selection[].values[].subCate.input.placeHold | string | - | - | 可选，输入框里的默认文案 | -
>> selection[].values[].subCate.input.placeHold2 | string | - | - | 可选，右侧显示文案，用于左右文案不一样的情况 | -
>> selection[].values[].subCate.input.listButton | string | - | - | 可选，显示在input下边的可选列表button&nbsp;筛选相关key | -
>> selection[].values[].subCate.input.leftNum | string | - | - | 必选，显示在listButton中的左侧文案 | -
>> selection[].values[].subCate.input.rightNum | string | - | - | 必选，显示在listButton中的右侧文案 | -
>> selection[].values[].subCate.values | Array | - | - | 二级内容，列表型的筛选项值，当筛选类型是`rangeInput`时，无此字段 | -
>> selection[].values[].subCate.values[].filterKey | string | - | - | 可选，更多里多选的key值 | -
>> selection[].values[].subCate.values[].value | string | - | - | 必选，用于后端交互 | -
>> selection[].values[].subCate.values[].text | string | - | - | 必选，用于展现 | -
>> selection[].values[].subCate.values[].subCate | Object | - | - | 可选，三级筛选，用来显示三级筛选 | -
>> selection[].values[].subCate.values[].subCate.filterKey | string | - | - | 必选，三级筛选相关key | -
>> selection[].values[].subCate.values[].subCate.default | string | - | - | 可选，默认选中值，与value对应 | -
>> selection[].values[].subCate.values[].subCate.values | Array | - | - | 必选，筛选项数组 | -
>> selection[].values[].subCate.values[].subCate.values[].value | string | - | - | 必选，用于后端交互 | -
>> selection[].values[].subCate.values[].subCate.values[].text | string | - | - | 必选，用于展现 | -



### Events

- **fliterStatus**: 筛选状态返回`info`，当`Filter`组件筛选状态函数值
当值不为-1的时候为打开状态，-1时候为关闭筛选状态
	无参数

- **change**: 筛选后触发
	无参数



