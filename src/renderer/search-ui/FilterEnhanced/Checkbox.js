
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-span',{attrs:{"col":_vm.col},nativeOn:{"click":function($event){_vm.handleClick($event)}}},[_c('div',{staticClass:"c-checkbox WA_LOG_BTN",class:{
            'c-checkbox-checked': _vm.checked
        },style:({
            'color': _vm.checked ? _vm.primaryColor : '#000',
            'border-color': _vm.checked ? _vm.borderColor : '#f8f8f8'
        })},[_c('div',{staticClass:"c-line-clamp1"},[_vm._v("\n            "+_vm._s(_vm.text)+"\n        ")]),_vm._v(" "),(_vm.checked)?(_c('section',[_c('div',{staticClass:"c-checkbox-triangle",style:({
                    'border-bottom': _vm.borderBottom
                })}),_vm._v(" "),_c('span',{staticClass:"c-checkbox-icon-wrapper"},[_c('i',{staticClass:"c-icon c-checkbox-icon"},[_vm._v("\n                    \n                ")])])])):(_vm._e())])])},
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
    // 确定按钮点击
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    }
  },
  computed: {
    borderBottom: function borderBottom() {
      return '.18rem solid ' + this.borderColor;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"text": {"type": String},"col": {"type": String,"default": "4"},"checked": {"type": Boolean,"default": false},"primaryColor": {"type": String,"default": "#000"},"borderColor": {"type": String,"default": "#555"}};
            obj.components = {"c-span": require("../Row/Span"),"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"defalutColor": "#555","defaultBorder": "1px solid #f8f8f8"};
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
            
            obj._scopeId = "data-a-727b0430";

            module.exports = obj;

            
        });
    