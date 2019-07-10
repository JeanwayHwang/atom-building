
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-touchable-feedback',{attrs:{"top":_vm.touchableFeedbackTop,"bottom":_vm.touchableFeedbackBottom,"left":-.17,"right":-.17}},[_c('div',{staticClass:"spread-bottom-btn",class:[
            _vm.logClass
                ? 'WA_LOG_BTN'
                : ''
        ],style:({
            'text-align': _vm.textAlign,
            'padding-top': _vm.paddingTop,
            'padding-bottom': _vm.paddingBottom
        }),attrs:{"aria-expanded":_vm.spread,"role":"button"},on:{"click":_vm.handleClick}},[_c('span',[_vm._v("\n            "+_vm._s(_vm.spread
                    ? _vm.foldText
                    : _vm.spreadText)+"\n        ")]),_vm._v(" "),_c('c-arrow',{staticClass:"c-gap-left-small",attrs:{"direction":_vm.spread
                    ? 2
                    : 1,"fill-color":_vm.bgColor,"color":_vm.iconColor,"aria-hidden":"true"}})],1)])},
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

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"spread": {"type": Boolean,"default": false},"spreadText": {"type": String,"default": "展开"},"foldText": {"type": String,"default": "收起"},"textAlign": {"type": String,"default": "center"},"paddingTop": {"type": String,"default": ".1rem"},"paddingBottom": {"type": String,"default": ".1rem"},"touchableFeedbackTop": {"type": Number,"default": 0},"touchableFeedbackBottom": {"type": Number,"default": 0},"logClass": {"type": Boolean,"default": true},"bgColor": String,"iconColor": {"type": String,"default": "#555"}};
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

                

                originCreated && originCreated.call(self);
            };
            
            

            module.exports = obj;

            
        });
    