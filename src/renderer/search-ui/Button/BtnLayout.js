
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-layout__50MMY c-line-top c-line-bottom c-gap-inner-top c-gap-inner-bottom",style:({
        'border-top': _vm.borderTop,
        'border-bottom': _vm.borderBottom
    })},[_c('c-row',_vm._l((_vm.options),function(option,optionIndex){return _c('c-span',{key:optionIndex},[_c('c-btn',{attrs:{"text":option.text,"type":option.type,"primary-color":_vm.primaryColor},on:{"click":function($event){_vm.handleBtnClick({
                    optionIndex: optionIndex,
                    option: option
                })}}})],1)}))],1)},
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
    handleBtnClick: function handleBtnClick(obj) {
      obj.option.index = obj.optionIndex;
      /**
       * 点击事件
       *
       * @event click
       * @property {object} param1 事件对象
       * @property {number} param1.option.index 被点击的按钮的索引
       * @property {number} param1.option.type 被点击的按钮的类型
       * @property {number} param1.option.text 被点击的按钮的文案
       */

      this.$emit('click', obj.option);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"btnLayout":"btn-layout__50MMY"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"options": {"type": Array,"default": function () { return [{"text": "重置"},{"text": "确定","type": "primary"}]; }},"borderTop": {"type": String,"default": "1px solid #eee"},"borderBottom": {"type": String,"default": "1px solid #eee"},"primaryColor": String};
            obj.components = {"c-btn": require("../Button/Button"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span")};

            
            

            


            
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

                
                        Object.keys(cssModules).forEach(function (key) {
                            self[key] = cssModules[key];
                        });
                    

                originCreated && originCreated.call(self);
            };
            
            

            module.exports = obj;

            
        });
    