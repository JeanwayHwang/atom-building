
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"c-filter-multi-checkbox"},[(_vm.math_ceil(_vm.item.options.length / 3) <= 1 || _vm.item.noSpread)?([_c('div',{staticClass:"c-gap-top-large"},[_vm._v("\n            "+_vm._s(_vm.item.label)+"\n        ")]),_vm._v(" "),_vm._l((_vm.math_ceil(_vm.item.options.length / 3)),function(item1,index1){return _c('c-row',{key:index1,staticClass:"c-gap-top",style:(_vm.transition
                ? {
                    'padding-left': '0',
                    'padding-right': '0'
                }
                : null)},[_vm._l((_vm.item.options),function(item2,index2){return [(index2 >= index1 * 3 && index2 < (index1 + 1) * 3)?(_c('c-checkbox',{key:index2,attrs:{"text":item2.text,"checked":_vm.isChecked(_vm.item, item2),"primary-color":_vm.primaryColor,"border-color":_vm.primaryColor,"col":"4"},on:{"click":function($event){_vm.handleCheckboxItemClick({
                        item: _vm.item,
                        option: item2,
                        optionIndex: index2,
                        e: $event
                    })}}})):(_vm._e())]}),_vm._v(" "),(index1 == (_vm.math_ceil(_vm.item.options.length / 3) - 1) && (_vm.item.options.length % 3) !== 0)?(_vm._l(((3 - _vm.item.options.length % 3)),function(item3,index3){return _c('c-span',{key:index3,attrs:{"col":"4"}})})):(_vm._e())],2)})]):(_c('c-spread',{staticClass:"c-gap-top-small",attrs:{"bottom":false,"fold-height":38,"type":"height"},on:{"change":function($event){_vm.handleSpreadChange({
            index: _vm.index,
            item: _vm.item
        })}}},[_c('div',{slot:"button"},[_vm._v("\n            "+_vm._s(_vm.item.label)+"\n        ")]),_vm._v(" "),_vm._l((_vm.math_ceil(_vm.item.options.length / 3)),function(item1,index1){return _c('c-row',{key:index1,class:{
                'c-gap-top': index1 > 0
            },style:([
                {
                    'padding-bottom': index1 === (_vm.math_ceil(_vm.item.options.length / 3) - 1)
                        ? '.01rem'
                        : '0'
                },
                _vm.transition
                    ? {
                        'padding-left': '0',
                        'padding-right': '0'
                    }
                    : null
            ])},[_vm._l((_vm.item.options),function(item2,index2){return [(index2 >= index1 * 3 && index2 < (index1 + 1) * 3)?(_c('c-checkbox',{key:index2,attrs:{"text":item2.text,"checked":_vm.isChecked(_vm.item, item2),"primary-color":_vm.primaryColor,"border-color":_vm.primaryColor,"col":"4"},on:{"click":function($event){_vm.handleCheckboxItemClick({
                        item: _vm.item,
                        option: item2,
                        optionIndex: index2,
                        e: $event
                    })}}})):(_vm._e())]}),_vm._v(" "),(index1 == (_vm.math_ceil(_vm.item.options.length / 3) - 1) && (_vm.item.options.length % 3) !== 0)?(_vm._l(((3 - _vm.item.options.length % 3)),function(item3,index3){return _c('c-span',{key:index3,attrs:{"col":"4"}})})):(_vm._e())],2)})],2))],2)},
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
    // 单选项点击事件
    handleCheckboxItemClick: function handleCheckboxItemClick(obj) {
      var item = obj.item,
          option = obj.option; // 判断类型时单选还是多选
      // 单选

      if (item.type === 'radio') {
        // 如果是上次选中的
        if (item.defaultValue === option.value) {
          // 设置为空
          this.$set(item, 'defaultValue', '');
        } else {
          // 直接设置默认值即可
          this.$set(item, 'defaultValue', option.value);
        }
      } // 多选
      else if (item.type === 'checkbox') {
          // 生成数组方便判断
          var defaultValueArray = [];

          if (item.defaultValue) {
            defaultValueArray = item.defaultValue.split(',');
          } // 这里要注意去掉首尾空格，否则会有问题


          defaultValueArray = defaultValueArray.map(function (item) {
            return item.trim();
          }); // 算出选中的值在数组中的位置

          var indexOfValue = defaultValueArray.indexOf(option.value); // 如果默认数组里没有该值

          if (indexOfValue === -1) {
            // 把改值添加到数组里
            defaultValueArray.push(option.value);
          } // 如果默认数组里有该值
          else {
              // 删除该元素
              defaultValueArray.splice(indexOfValue, 1);
            } // 重新赋值


          this.$set(item, 'defaultValue', defaultValueArray.join(','));
        } // 触发多选项点击事件


      this.store.emitCheckboxClick(obj);
    },
    // 展开收起改变事件
    handleSpreadChange: function handleSpreadChange(obj) {},
    // 判断是否被选中
    isChecked: function isChecked(item, option) {
      if (!(item.defaultValue || item.defaultValue === '')) {
        return false;
      } // 首先通过逗号分隔将字符串转化为数组，为了实现单选和多选同时默认值的问题


      var defaultValueArray = item.defaultValue.split(','); // 这里要注意去掉首尾空格，否则会有问题

      defaultValueArray = defaultValueArray.map(function (arrItem) {
        return arrItem = arrItem.trim();
      });

      if (defaultValueArray.indexOf(option.value) !== -1) {
        return true;
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
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-checkbox": require("../FilterEnhanced/Checkbox"),"c-spread": require("../SpreadEnhanced/SpreadEnhanced")};

            
            

            


            
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
            
            

            module.exports = obj;

            
        });
    