
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"filterCustomLayout",staticClass:"c-filter-custom-layout"},[(_vm.data && _vm.data.type === 'custom')?(_c('section',{ref:"filterCustomLayout",staticClass:"c-filter-custom-list-layout"},[_vm._t("default")],2)):(_vm._e()),_vm._v(" "),(_vm.data && _vm.data.type === 'custom' && !_vm.hideCustomBottomBtn)?(_c('div',{ref:"filterCustomBottomBtnLayout",staticClass:"c-filter-custom-bottom-btn-layout c-line-top"},[_c('c-row',{style:(_vm.transition
                ? {
                    'padding-left': '0',
                    'padding-right': '0'
                }
                : null)},[_c('c-span',[_c('c-btn',{staticClass:"c-filter-custom-bottom-btn-reset WA_LOG_BTN",style:({
                        'color': _vm.primaryColor,
                        'border-color': _vm.primaryColor
                    }),attrs:{"text":"重置"},on:{"click":_vm.handleResetBtnClick}})],1),_vm._v(" "),_c('c-span',[_c('c-btn',{staticClass:"c-filter-custom-bottom-btn-confirm WA_LOG_BTN",style:({
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
      this.store.customResetBtnClick();
    },
    // 确定按钮点击
    handleConfirmBtnClick: function handleConfirmBtnClick() {
      this.store.customConfirmBtnClick();
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"store": {"type": Object},"data": {"type": Object},"primaryColor": {"type": String},"hideCustomBottomBtn": {"type": Boolean,"default": false},"transition": Boolean};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-btn": require("../Button/Button")};

            
            

            


            
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
            
            obj._scopeId = "data-a-b7bc538c";

            module.exports = obj;

            
        });
    