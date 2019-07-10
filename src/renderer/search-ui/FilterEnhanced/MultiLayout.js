
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"filterMultiLayout",staticClass:"c-filter-multi-layout c-gap-inner-top-small"},[(_vm.data && _vm.data.type === 'multi')?(_c('section',{ref:"filterMultiListLayout",staticClass:"c-filter-multi-list-layout"},_vm._l((_vm.data.options),function(item,index){return _c('section',{key:index,staticClass:"c-filter-multi-list-item"},[((item.type === 'radio' || item.type === 'checkbox') && item.options)?(_c('multi-checkbox',{attrs:{"item":item,"transition":_vm.transition,"primary-color":_vm.primaryColor,"store":_vm.store}})):(_vm._e()),_vm._v(" "),(item.type === 'rangeInput' && item.input)?(_c('multi-range-input',{attrs:{"item":item,"transition":_vm.transition,"primary-color":_vm.primaryColor,"store":_vm.store}})):(_vm._e())],1)}))):(_vm._e()),_vm._v(" "),(_vm.data && _vm.data.type === 'multi')?(_c('div',{ref:"filterMultiBottomBtnLayout",staticClass:"c-filter-multi-bottom-btn-layout c-line-top"},[_c('c-row',{style:(_vm.transition
                ? {
                    'padding-left': '0',
                    'padding-right': '0'
                }
                : null)},[_c('c-span',[_c('c-btn',{staticClass:"c-filter-multi-bottom-btn-reset WA_LOG_BTN",style:({
                        'color': _vm.primaryColor,
                        'border-color': _vm.primaryColor
                    }),attrs:{"text":"重置"},on:{"click":_vm.handleResetBtnClick}})],1),_vm._v(" "),_c('c-span',[_c('c-btn',{staticClass:"c-filter-multi-bottom-btn-confirm WA_LOG_BTN",style:({
                        'background-color': _vm.primaryColor,
                        'border-color': _vm.primaryColor
                    }),attrs:{"text":"确定"},on:{"click":_vm.handleConfirmBtnClick}})],1)],1)],1)):(_vm._e())])},
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
    // 重置按钮点击
    handleResetBtnClick: function handleResetBtnClick() {
      if (!this.data) {
        return;
      }

      if (!this.data.options) {
        return;
      }

      for (var i = 0; i < this.data.options.length; i++) {
        var item = this.data.options[i];

        if (item.input) {
          // 重置错误提示
          this.$set(item.input, 'isShowErrorTips', false);
        }

        this.$set(item, 'defaultValue', '');
      } // 重置完成后立即关闭
      // this.store.closeBottomLayoutAction(false);

    },
    // 确定按钮点击
    handleConfirmBtnClick: function handleConfirmBtnClick() {
      var vm = this;

      if (!this.data) {
        return;
      }

      if (!this.data.options) {
        return;
      } // 错误提示校验


      for (var i = 0; i < this.data.options.length; i++) {
        var item = this.data.options[i]; // 范围输入时

        if (item.type === 'rangeInput') {
          if (!item.defaultValue) {
            // 如果范围输入没有默认值，置为 ','，因为范围输入需要有两个值
            item.defaultValue = ',';
          } // 生成数组


          var defaultValueArray = item.defaultValue.split(',');
          defaultValueArray = defaultValueArray.map(function (item) {
            return item.trim();
          }); // 判断是否为数字

          if (isNaN(defaultValueArray[0]) || isNaN(defaultValueArray[1])) {
            this.$set(item.input, 'isShowErrorTips', true); // 存入错误信息

            vm.store.setErrorInfoAction({
              errObj: item,
              errno: 2,
              errTips: '不是数字'
            });
            return;
          }

          if (defaultValueArray && defaultValueArray[0] && defaultValueArray[1]) {
            var number0 = parseFloat(defaultValueArray[0]);
            var number1 = parseFloat(defaultValueArray[1]); // 负数错误

            if (number0 < 0 || number1 < 0) {
              this.$set(item.input, 'isShowErrorTips', true); // 存入错误信息

              vm.store.setErrorInfoAction({
                errObj: item,
                errno: 3,
                errTips: '负数错误'
              });
              return;
            } // 最小值大于最大值错误


            if (number0 > number1) {
              this.$set(item.input, 'isShowErrorTips', true); // 存入错误信息

              vm.store.setErrorInfoAction({
                errObj: item,
                errno: 4,
                errTips: '最小值大于最大值错误'
              });
              return;
            }
          }
        }
      } // 当前改变项的数据


      var currentChange = {
        type: this.data.type,
        index: this.data.index,
        result: {}
      }; // 把每列的键值都装进去

      this.data.options.forEach(function (optionItem) {
        currentChange.result[optionItem.key] = optionItem.defaultValue;
      }); // 确定

      vm.store.closeBottomLayoutAction(true, currentChange);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"store": {"type": Object},"data": {"type": Object},"primaryColor": {"type": String},"transition": Boolean};
            obj.components = {"multi-checkbox": require("./MultiCheckbox"),"multi-range-input": require("./MultiRangeInput"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-btn": require("../Button/Button")};

            
            

            


            
            obj.data = function () {
                return {"btnLayoutTop": 0,"btnLayoutHeight": 0};
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
            
            obj._scopeId = "data-a-492703d4";

            module.exports = obj;

            
        });
    