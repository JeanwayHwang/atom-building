---
name: TableGrid
title: 网格表格
category: 基础组件
owner: 王凯
---

## 使用场景

> 参考UE规范：[D15.3 【基础组件】-【表格】-【网络表格】](http://sfe.baidu.com:8186/ue-guide/table.html)

## 示例

```atom 网格表格

<template>
    <c-aladdin
        touchable
        title="网络表格_全部字段可点"
        show-left-text="来源"
        show-right-url="http://m.hao123.com">
        <c-table-grid
            :content="tableData">
        </c-table-grid>
    </c-aladdin>
</template>

<script type="config">
    {
        components: {
            'c-table-grid': 'search-ui/TableGrid/TableGrid',
            'c-aladdin': 'search-ui/Aladdin/Aladdin'
        },
        data: {
           tableData:{
                tRow: [
                    {
                        tCell:[
                            {
                                text:'表内容1-1',
                                abstract:'表内容灰色内容1-1',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容1-2',
                                abstract:'表内容灰色内容1-2',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容1-3',
                                abstract:'表内容灰色内容1-3',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容1-4',
                                abstract:'表内容灰色内容1-4',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }
                        ]
                    },
                    {
                        url:'',
                        urlType:'',
                        tCell:[
                            {
                                text:'表内容2-1',
                                abstract:'表内容灰色内容2-1',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容2-2',
                                abstract:'表内容灰色内容2-2',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容2-3',
                                abstract:'表内容灰色内容2-3',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容2-4',
                                abstract:'表内容灰色内容2-4',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }
                        ]
                    },
                    {
                        url:'',
                        urlType:'',
                        tCell:[
                            {
                                text:'表内容3-1',
                                abstract:'表内容灰色内容3-1',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容3-2',
                                abstract:'表内容灰色内容3-2',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容3-3',
                                abstract:'表内容灰色内容3-3',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<script>
    export default {
        methods: {
        }
    }
</script>

```

## 注意事项

1. 需要占位时请传入空对象

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
content | object | - | 可选 | 表格数据 | -
>> content.tRow | Array | - | - | 表行数组 | -
>> content.tRow.url | String | - | - | 整行可点的链接 | -
>> content.tRow.params | object | - | - | 整行可点的链接类型 | -
>> content.tRow.params.type | String | - | - | 链接参数中的类型 | -
>> content.tRow.params.sfUrl | String | - | - | 链接参数中的链接 | -
>> content.tRow.params.options | String | - | - | 链接参数中的选项 | -
>> content.tRow.tCell | Array | - | - | 表单行内容数组 | -
>> content.tRow.tCell.url | String | - | - | 表单元格可点的链接 | -
>> content.tRow.tCell.params | object | - | - | 表单元格可点的链接类型 | -
>> content.tRow.tCell.params.type | String | - | - | 链接参数中的类型 | -
>> content.tRow.tCell.params.sfUrl | String | - | - | 链接参数中的链接 | -
>> content.tRow.tCell.params.options | String | - | - | 链接参数中的选项 | -
>> content.tRow.tCell.text | String | - | - | 表单元格文案内容 | -
>> content.tRow.tCell.abstract | String | - | - | 表单元格灰色文案内容 | -






