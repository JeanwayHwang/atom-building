
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"c-filter-multi-rangeinput c-gap-bottom-large"},[_c('div',{staticClass:"c-gap-top-large"},[_vm._v("\n        "+_vm._s(_vm.item.label)+"\n    ")]),_vm._v(" "),_c('c-row',{staticClass:"c-gap-top-small c-gap-bottom-small c-vertical-center",style:(_vm.transition
            ? {
                'padding-left': '0',
                'padding-right': '0'
            }
            : null)},[_c('c-span',{attrs:{"col":"1"}},[_c('c-input',{attrs:{"value":_vm.minValue,"placeholder":_vm.item.input.min.placeholder,"primary-color":_vm.primaryColor,"right-text":_vm.item.input.unit,"is-show-close-icon":false,"type":"number"},on:{"change":function($event){_vm.handleInputChange($event, _vm.item, 0)}}})],1),_vm._v(" "),_c('span',{staticClass:"c-gap-left-middle c-gap-right-middle c-filter-multi-range-input-split-line"}),_vm._v(" "),_c('c-span',{attrs:{"col":"1"}},[_c('c-input',{attrs:{"value":_vm.maxValue,"placeholder":_vm.item.input.max.placeholder,"primary-color":_vm.primaryColor,"right-text":_vm.item.input.unit,"is-show-close-icon":false,"type":"number","padding-right":".3rem"},on:{"change":function($event){_vm.handleInputChange($event, _vm.item, 1)}}})],1)],1),_vm._v(" "),_vm._l((_vm.math_ceil(_vm.item.options.length / 3)),function(item1,index1){return _c('c-row',{key:index1,staticClass:"c-gap-top",style:(_vm.transition
            ? {
                'padding-left': '0',
                'padding-right': '0'
            }
            : null)},[_vm._l((_vm.item.options),function(item2,index2){return [(index2 >= index1 * 3 && index2 < (index1 + 1) * 3)?(_c('c-checkbox',{key:index2,attrs:{"text":item2.text,"checked":_vm.isChecked(_vm.item, item2),"primary-color":_vm.primaryColor,"border-color":_vm.primaryColor,"col":"4"},on:{"click":function($event){_vm.handleRangeInputItemClick({
                    item: _vm.item,
                    option: item2,
                    optionIndex: index2
                })}}})):(_vm._e())]}),_vm._v(" "),(index1 == (_vm.math_ceil(_vm.item.options.length / 3) - 1) && (_vm.item.options.length % 3) !== 0)?(_vm._l(((3 - _vm.item.options.length % 3)),function(item3,index3){return _c('c-span',{key:index3,attrs:{"col":"4"}})})):(_vm._e())],2)}),_vm._v(" "),(_vm.item.input && _vm.item.input.isShowErrorTips)?(_c('div',{staticClass:"c-color-red c-gap-top c-filter-multi-range-input-errortips"},[_vm._v("\n        "+_vm._s(_vm.item.input.errorTips)+"\n    ")])):(_vm._e())],2)},
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
    // 输入事件改变
    handleInputChange: function handleInputChange(obj, item, inputIndex) {
      // 容错兼容
      if (!item.defaultValue) {
        item.defaultValue = '';
      } // 转化为数组


      var defaultValueArray = item.defaultValue.split(',');
      defaultValueArray = defaultValueArray.map(function (item) {
        return item.trim();
      }); // 将最小/最大值放入相应位置

      defaultValueArray[inputIndex] = obj.value; // 重新赋值

      this.$set(item, 'defaultValue', defaultValueArray.join(',')); // 重置错误提示

      this.$set(item.input, 'isShowErrorTips', false);
    },
    // 范围输入点击
    handleRangeInputItemClick: function handleRangeInputItemClick(obj) {
      var item = obj.item,
          option = obj.option; // 默认值数组

      var defaultValueArray = [];

      if (item.defaultValue) {
        defaultValueArray = item.defaultValue.split(',').map(function (item) {
          return item.trim();
        });
      } // 选项的值数组


      var optionValueArray = [];

      if (option.value) {
        optionValueArray = option.value.split(',').map(function (item) {
          return item.trim();
        });
      } // 如果相等，代表选中了相同的项，置空


      if (defaultValueArray.join(',') === optionValueArray.join(',')) {
        this.$set(item, 'defaultValue', '');
      } // 如果不相等，设置为选中项的项
      else {
          this.$set(item, 'defaultValue', option.value);
        } // 重置错误提示


      this.$set(item.input, 'isShowErrorTips', false);
    },
    // 是否被选中
    isChecked: function isChecked(item, option) {
      if (!item.defaultValue) {
        return false;
      } // 首先通过逗号分隔将字符串转化为数组，为了实现单选和多选同时默认值的问题


      var defaultValueArray = item.defaultValue.split(','); // 这里要注意去掉首尾空格，否则会有问题

      defaultValueArray = defaultValueArray.map(function (arrItem) {
        return arrItem.trim();
      }); // 把选项里的值也转换成数组

      var optionValueArray = option.value.split(',');
      optionValueArray = optionValueArray.map(function (arrItem) {
        return arrItem.trim();
      }); // 依次对比

      for (var i = 0; i < defaultValueArray.length; i++) {
        if (defaultValueArray[i] !== optionValueArray[i]) {
          return false;
        }
      }

      return true;
    }
  },
  computed: {
    minValue: function minValue() {
      if (!this.item.defaultValue) {
        return null;
      }

      var defaultValueArray = this.item.defaultValue.split(',');

      if (defaultValueArray[0]) {
        return defaultValueArray[0].trim();
      }
    },
    maxValue: function maxValue() {
      if (!this.item.defaultValue) {
        return null;
      }

      var defaultValueArray = this.item.defaultValue.split(',');

      if (defaultValueArray[1]) {
        return defaultValueArray[1].trim();
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"store": {"type": Object},"item": {"type": Object},"primaryColor": {"type": String},"transition": Boolean};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-input": require("../Input/Input"),"c-checkbox": require("../FilterEnhanced/Checkbox")};

            
            

            


            
            obj.data = function () {
                return {};
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
            
            obj._scopeId = "data-a-d7121f0e";

            module.exports = obj;

            
        });
    