
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-touchable-feedback',{attrs:{"top":_vm.touchableFeedbackTop,"bottom":_vm.touchableFeedbackBottom,"left":_vm.touchableFeedbackLeft,"right":_vm.touchableFeedbackRight}},[_c('div',{staticClass:"spread-top-btn__31Duk",class:[
            _vm.logClass
                ? 'WA_LOG_BTN'
                : ''
        ],style:({
            'padding-top': _vm.paddingTop,
            'padding-bottom': _vm.paddingBottom,
            'padding-left': _vm.paddingLeft,
            'padding-right': _vm.paddingRight
        }),on:{"click":_vm.handleClick}},[_c('span',{staticClass:"spread-top-btn-text-left c-line-clamp1"},[_vm._v("\n            "+_vm._s(_vm.leftText)+"\n            "),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),_c('span',{staticClass:"spread-top-btn-main__mDz27"},[_c('span',[_vm._v("\n                "+_vm._s(_vm.spread
                        ? _vm.foldText
                        : _vm.spreadText)+"\n            ")]),_vm._v(" "),_c('c-arrow',{staticClass:"c-gap-left-small",attrs:{"direction":_vm.spread
                        ? 2
                        : 1,"color":"#555"}})],1)])])},
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
    handleClick: function handleClick() {
      this.$emit('click', {
        spread: this.spread
      });
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"spreadTopBtn":"spread-top-btn__31Duk","spreadTopBtnMain":"spread-top-btn-main__mDz27"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"spread": {"type": Boolean,"default": false},"leftText": String,"spreadText": {"type": String,"default": "展开"},"foldText": {"type": String,"default": "收起"},"paddingTop": {"type": String,"default": ".1rem"},"paddingBottom": {"type": String,"default": ".1rem"},"paddingLeft": {"type": String},"paddingRight": {"type": String},"touchableFeedbackTop": {"type": Number,"default": 0},"touchableFeedbackBottom": {"type": Number,"default": 0},"touchableFeedbackLeft": {"type": Number,"default": -0.17},"touchableFeedbackRight": {"type": Number,"default": -0.17},"logClass": {"type": Boolean,"default": true}};
            obj.components = {"c-arrow": require("../AnimateIcon/Arrow"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
    