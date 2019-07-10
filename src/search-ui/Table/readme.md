---
name: Table
title: 表格
category: 基础组件
owner: 王凯
---

## 使用场景

> 参考UE规范：[D15 【基础组件】-【表格】](http://sfe.baidu.com:8186/ue-guide/table.html)

## 示例

### 标准表格

```atom 整行可点
<template>
    <c-aladdin
        title="标准表格_整行可点"
        touchable
        show-left-text="来源"
        show-right-url="http://m.hao123.com">
        <c-table 
            :content="tableData" 
            type="standardLine">
        </c-table>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        data: {
            tableData: {
                tHead: ['表头一', '表头二', '表头三'],
                tRow: [
                    {
                        url: 'https://m.baidu.com',
                        params: {
                            type: '',
                            sfUrl: '',
                            options:''
                        },
                        tCell:[
                            {
                                text:'表内容1-1',
                                abstract:'表内容灰色内容1-1'
                            }, {
                                text:'表内容1-2',
                                abstract:'表内容灰色内容1-2'
                            }, {
                                text:'表内容1-3',
                                abstract:'表内容灰色内容1-3'
                            }
                        ]
                    }, 
                    {
                        url: 'https://m.baidu.com',
                        params: {
                            type: '',
                            sfUrl: '',
                            options:''
                        },
                        urlType: '',
                        tCell: [{
                            text: '表内容2-1',
                            abstract: '表内容灰色内容2-1',
                        }, {
                            text: '表内容2-2',
                            abstract: '表内容灰色内容2-2',
                        }, {
                            text: '表内容2-3',
                            abstract: '表内容灰色内容2-3',
                        }]
                    }, 
                    {
                        url: 'https://m.baidu.com',
                        params: {
                            type: '',
                            sfUrl: '',
                            options:''
                        },
                        tCell:[
                            {
                                text:'表内容3-1',
                                abstract:'表内容灰色内容3-1'
                            }, {
                                text:'表内容3-2',
                                abstract:'表内容灰色内容3-2'
                            }, {
                                text:'表内容3-3',
                                abstract:'表内容灰色内容3-3'
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-table': 'search-ui/Table/Table'
        }
    }
</config>
```

```atom 单/多字段可点
<template>
    <c-aladdin
        touchable
        title="标准表格_单个/多个字段可点"
        show-left-text="来源"
        show-right-url="http://m.hao123.com">
        <c-table 
            :content="tableData" 
            type="standardBlock">
        </c-table>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        data: {
            tableData: {
                tHead:['表头一', '表头二', '表头三'],
                tRow: [{
                    tCell:[
                        {
                            text:'表内容1-1',
                            abstract:'表内容灰色内容1-1'
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
                        }
                    ]
                },
                {
                    tCell: [{
                        text: '表内容2-1',
                        abstract: '表内容灰色内容2-1',
                    }, {
                        text: '表内容2-2',
                        abstract: '表内容灰色内容2-2',
                        url: 'https://m.baidu.com',
                        params: {
                            type: '',
                            sfUrl: '',
                            options:''
                        },
                    }, {
                        text: '表内容2-3内容过长内容过长内容过长内容过长',
                        abstract: '表内容灰色内容2-3',
                    }]
                },
                {
                    tCell:[
                        {
                            text:'表内容3-1',
                            abstract:'表内容灰色内容2-1',
                        }, {
                            text:'表内容3-2',
                            abstract:'表内容灰色内容2-2',
                            url:'https://m.baidu.com',
                            params:{
                                type:'',
                                sfUrl:'',
                                options:''
                            }
                        }, {
                            text:'表内容3-3',
                            abstract:'表内容灰色内容3-3'
                        }
                    ]
                }]
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-table': 'search-ui/Table/Table'
        }
    }
</config>
```

### 摘要表格

```atom 单行通用样式
<template>
    <c-aladdin
        touchable
        title="标准表格_整个区域可点"
        show-left-text="来源"
        show-right-url="http://www.baidu.com">
        <c-table 
            :content="tableData" 
            type="abstractLine">
        </c-table>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        data: {
            tableData: {
                tHead:['表头一', '表头二', '表头三'],
                tRow: [
                    {
                        tCell:[
                            {
                                text:'表内容1-1',
                                abstract:'表内容灰色内容1-1'
                            }, {
                                text:'表内容1-2',
                                abstract:'表内容灰色内容1-2'
                            }, {
                                text:'表内容1-3',
                                abstract:'表内容灰色内容1-3'
                            }
                        ]
                    },
                    {
                        tCell:[
                            {
                                text:'表内容2-1',
                                abstract:'表内容灰色内容2-1'
                            }, {
                                text:'表内容2-2',
                                abstract:'表内容灰色内容2-2'
                            }, {
                                text:'表内容2-3内容过长内容过长内容过长内容过长内容过长内容过长',
                                abstract:'表内容灰色内容2-3'
                            }
                        ]
                    },
                    {
                        tCell:[
                            {
                                text:'表内容3-1',
                                abstract:'表内容灰色内容3-1'
                            }, {
                                text:'表内容3-2',
                                abstract:'表内容灰色内容3-2'
                            }, {
                                text:'表内容3-3',
                                abstract:'表内容灰色内容3-3'
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-table': 'search-ui/Table/Table'
        }
    }
</config>
```

```atom 多行通用样式
<template>
    <c-aladdin
        touchable
        title="标准表格_整个区域可点"
        show-left-text="来源"
        show-right-url="http://www.baidu.com">
        <c-table 
            :content="tableData" 
            type="abstractMulti">
        </c-table>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        data: {
            tableData: {
                tHead:['表头一', '表头二'],
                tRow: [
                    {
                        tCell:[
                            {
                                text:'表内容1-1',
                                abstract:'表内容灰色内容1-1'
                            }, {
                                text:'表内容1-2',
                                abstract:'表内容灰色内容1-2'
                            }
                        ]
                    },
                    {
                        tCell:[
                            {
                                text:'表内容2-1',
                                abstract:'表内容灰色内容2-1'
                            }, {
                                text:'表内容2-2',
                                abstract:'表内容灰色内容2-2'
                            }
                        ]
                    },
                    {
                        tCell:[
                            {
                                text:'表内容3-1',
                                abstract:'表内容灰色内容3-1'
                            }, {
                                text:'表内容3-2',
                                abstract:'表内容灰色内容3-2'
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-table': 'search-ui/Table/Table'
        }
    }
</config>
```

### 改变栅格数

```atom 改变栅格数
<template>
    <c-aladdin
        touchable
        title="栅格比例为 3:4:5；标准表格_单个/多个字段可点"
        show-left-text="来源"
        show-right-url="http://www.baidu.com">
        <c-table
            :content="tableData"
            type="standardBlock">
        </c-table>
    </c-aladdin>
</template>

<style scoped>
</style>

<config>
    {
        data: {
            tableData: {
                cols: [
                    3, 4, 5
                ],
                tHead:[
                    '表头一',
                    '表头二',
                    '表头三'
                ],
                tRow: [
                    {
                        tCell: [
                            {
                                text:'表内容1-1',
                                abstract:'表内容灰色内容1-1'
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
                            }
                        ]
                    },
                    {
                        tCell: [
                            {
                                text: '表内容2-1',
                                abstract: '表内容灰色内容2-1',
                            }, {
                                text: '表内容2-2',
                                abstract: '表内容灰色内容2-2',
                                url: 'https://m.baidu.com',
                                params: {
                                    type: '',
                                    sfUrl: '',
                                    options:''
                                },
                            }, {
                                text: '表内容2-3内容过长内容过长内容过长内容过长',
                                abstract: '表内容灰色内容2-3',
                            }
                        ]
                    },
                    {
                        tCell:[
                            {
                                text:'表内容3-1',
                                abstract:'表内容灰色内容2-1',
                            }, {
                                text:'表内容3-2',
                                abstract:'表内容灰色内容2-2',
                                url:'https://m.baidu.com',
                                params:{
                                    type:'',
                                    sfUrl:'',
                                    options:''
                                }
                            }, {
                                text:'表内容3-3',
                                abstract:'表内容灰色内容3-3'
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            'c-aladdin': 'search-ui/Aladdin/Aladdin',
            'c-table': 'search-ui/Table/Table'
        }
    }
</config>
```

## API
### Props


名称 | 类型 | 默认值 | 是否必选 | 描述 | 其他
--- | --- | --- | --- | --- | ----
content | object | - | 可选 | 表格数据 | -
>> content.cols | Array | - | - | 栅格数组，设置表格的栅格比例，数组中每一项为&nbsp;number | -
>> content.tHead | Array | - | - | 表头数组，数组中每一项为string | -
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
type | string | - | 可选 | 表格类型（standardLine：整行可点；standardBlock：单个可点；abstractLine：概要表格-单行；abstractMulti：概览表格：多行） | -






