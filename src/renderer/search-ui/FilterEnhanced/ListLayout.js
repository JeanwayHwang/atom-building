
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"c-filter-list-wrapper",style:({
        'max-height': _vm.listLayerMaxHeight
    })},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"c-filter-list-column",class:{
            'c-filter-list-column-scrollbar': _vm.data.column === 1,
            'c-filter-list-left-border-index1': index === 1,
            'c-filter-list-left-border': index > 1 && index < _vm.list.length
        },style:({
            'width': 1 / _vm.data.column * 100 + '%',
            'background-color': index !== 0 ? '#fff' : '#f8f8f8'
        })},[(item.options)?(_vm._l((item.options),function(option,optionIndex){return _c('div',{key:optionIndex,staticClass:"c-line-clamp1 c-filter-list-item WA_LOG_BTN",class:{
                    'c-line-bottom': index === 0,
                    'c-filter-list-item-ganged-index0': index === 0 && _vm.data.column > 1,
                    'c-filter-list-item-selected': (item.defaultValue === option.value)
                        || (!item.defaultValue && item.selectedIndex === optionIndex)
                },style:({
                    color: (item.defaultValue === option.value
                        || (!item.defaultValue && item.selectedIndex === optionIndex))
                        ? _vm.selectedColor
                        : _vm.unselectedColor
                }),on:{"click":function($event){_vm.handleTagItemListItemClick({
                    optionIndex: optionIndex,
                    option: option,
                    item: item,
                    index: index
                })}}},[_vm._v("\n                "+_vm._s(option.text)+"\n                "),_vm._v(" "),(item.defaultValue === option.value
                        && (_vm.data.column === 1 || (_vm.data.column === 2 && index === 1))
                    )?(_c('c-icon',{staticClass:"c-filter-list-item-icon",attrs:{"type":"check"}})):(_vm._e())],1)})):(_vm._e()),_vm._v(" "),[_c('div',{staticClass:"c-row"})]],2)}))},
staticRenderFns: []
}

})(_module1, _module1.exports)

            /* get script output data */
            var _module2 = {
                exports: {}
            };
            (function (module, exports) {
    "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  methods: {
    // 选中项点击事件
    handleTagItemListItemClick: function handleTagItemListItemClick(obj) {
      var _this = this;

      var item = obj.item,
          index = obj.index,
          option = obj.option; // 判断是否是最后一列，如果是最后一列就代表确认操作

      if (index === this.data.column - 1) {
        // 清空同一 key 的所有 defaultValue
        this.clearSameKeyDefaultValue(this.list[0], item.key); // 设置值

        this.$set(item, 'defaultValue', option.value); // 设置 tag 显示的值
        // this.$set(this.data, 'text', option.text);
        // 当前改变项的数据

        var currentChange = {
          type: this.data.type,
          index: this.data.index,
          result: {}
        }; // 把每列的键值都装进去

        this.list.forEach(function (columnItem) {
          // 如果该列没有默认值但是存在 selectedIndex
          if (!columnItem.defaultValue) {
            // 这里写两行是因为 ESLint max-len 限制
            if (columnItem.selectedIndex !== undefined && columnItem.selectedIndex !== -1) {
              // 把选中值赋给默认值
              _this.$set(columnItem, 'defaultValue', columnItem.options[columnItem.selectedIndex].value);
            }
          }

          currentChange.result[columnItem.key] = columnItem.defaultValue;
        }); // 关闭底部区域

        this.store.closeBottomLayoutAction(true, currentChange);
      } // 不是最后一列
      else {
          // 设置值
          this.$set(item, 'defaultValue', option.value);
        }
    },
    // 清空同一 key 的所有 defaultValue；这个功能是当用户选择一个新的选项时，清除旧的选项，避免两个选项同时存在带来的混乱
    clearSameKeyDefaultValue: function clearSameKeyDefaultValue(item, key) {
      var self = this; // 递归中断条件

      if (!item) {
        return;
      } // 判断 key 是否相等


      if (item.key === key) {
        // 如果相等置为 null
        this.$set(item, 'defaultValue', null); // 找到相同的 key 即返回

        return;
      } // 如果没有返回，再从级联的层级里找


      if (item.options) {
        item.options.forEach(function (optionItem) {
          if (optionItem.options) {
            // 递归
            self.clearSameKeyDefaultValue(optionItem, key);
          }
        });
      }
    }
  },
  computed: {
    // 根据级联的 data 递归生成 list；把嵌套的 data 放到 list 数组里，把嵌套结构变成平行结构，便于遍历生成 dom
    list: function list() {
      // 建立一个空数组
      var list = []; // 取得第一个 item；这里直接引用对象，而不是深复制数据，是为了方便在选中项点击的时候通过打平后列表也可以直接修改原级联数据的值

      var item = this.data; // 开始递归遍历

      for (var i = 0; i < this.data.column; i++) {
        // 把数据放进数组里
        list.push(item); // 如果该 item 的选项存在，并且默认值也存在

        if (item && item.options && item.defaultValue) {
          // 选中项
          var theChosenOne = null; // 遍历 options，找到选中的那项

          for (var j = 0; j < item.options.length; j++) {
            var optionItem = item.options[j];

            if (optionItem.value === item.defaultValue) {
              theChosenOne = optionItem;
            }
          } // 如果选中项存在


          if (theChosenOne) {
            // 递归
            item = theChosenOne;
          }
        } // 如果没有 defaultValue，则默认选中第一项
        else if (item && !item.defaultValue) {
            // 如果不是最后一列
            if (i !== this.data.column - 1) {
              // 设置选中态
              this.$set(item, 'selectedIndex', 0);
            }

            item = item.options && item.options[0];
          } else {
            item = {};
          }
      }

      return list;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"store": {"type": Object},"data": {"type": Object},"listLayerMaxHeight": {"type": String,"default": "3.3rem"},"selectedColor": {"type": String,"default": "#000"},"unselectedColor": {"type": String,"default": "#555"}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"height": "0"};
            };
            var originCreated = obj.created;
            obj.created = function () {
                var self = this;
                self.$super = {
                    render: function () {
                        return _module1.exports.render.apply(self, arguments);
                    }
                };

                

                originCreated && originCreated.call(self);
            };
            
            obj._scopeId = "data-a-7b05f341";

            module.exports = obj;

            
        });
    