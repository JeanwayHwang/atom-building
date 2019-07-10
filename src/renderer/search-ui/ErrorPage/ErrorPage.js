
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-error-page",class:{
        'c-error-page-black': _vm.black
    },attrs:{"data-module":"c-ep"}},[_c('div',{staticClass:"content",class:{
            searchcraft: _vm.searchcraft,
            half: _vm.half
        }},[_c('div',{staticClass:"center"},[(_vm.logo === 'blank')?(_c('div',{staticClass:"logo logo-blank"})):((_vm.logo === 'error')?(_c('div',{staticClass:"logo logo-error"})):((_vm.logo === 'trouble')?(_c('div',{staticClass:"logo logo-network"})):((_vm.logo === 'noContent')?(_c('div',{staticClass:"logo logo-blank"})):((_vm.logo === 'network')?(_c('div',{staticClass:"logo logo-network"})):((_vm.logo === 'noComment')?(_c('div',{staticClass:"logo logo-noComment"})):(_vm._e()))))))]),_vm._v(" "),(_vm.title)?(_c('c-line',{staticClass:"c-font-medium c-color-gray-a",class:_vm.searchcraft || _vm.half
                    ? 'c-gap-inner-top'
                    : 'c-gap-inner-top-large',attrs:{"align":"center"}},[_vm._v("\n            "+_vm._s(_vm.title)+"\n        ")])):(_vm._e()),_vm._v(" "),(_vm.desc)?(_c('c-line',{staticClass:"c-font-normal c-color-gray-a",attrs:{"align":"center"}},[_vm._v("\n            "+_vm._s(_vm.desc)+"\n        ")])):(_vm._e()),_vm._v(" "),(_vm.hasBtn)?(_c('c-row',{staticClass:"c-gap-inner-top-small c-gap-inner-bottom-large"},[_c('c-span',{attrs:{"col":4}}),_vm._v(" "),_c('c-span',{attrs:{"col":4}},[(_vm.black)?(_c('c-btn',{style:([
                        {
                            'background-color': '#000',
                            'color': '#666'
                        },
                        _vm.searchcraft
                            ? {
                                'border-radius': '.2rem'
                            }
                            : {}
                    ]),attrs:{"text":_vm.btnText,"type":"primary"}})):(_c('c-btn',{style:([
                        _vm.searchcraft
                            ? {
                                'border-radius': '.2rem'
                            }
                            : {}
                    ]),attrs:{"text":_vm.btnText,"url":_vm.btnUrl},on:{"click":_vm.onClick}}))],1),_vm._v(" "),_c('c-span',{attrs:{"col":4}})],1)):(_vm._e()),_vm._v(" "),_vm._t("c-error-page-bottom-slot")],2)])},
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
    onClick: function onClick(e) {
      /**
       * 点击事件
       *
       * @event click
       * @property {Event} param1 透传事件对象
       */
      this.$emit('click', e);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"logo": {"type": String,"default": "blank"},"hasBtn": {"type": Boolean,"default": false},"btnText": String,"title": String,"btnUrl": String,"desc": String,"half": {"type": Boolean,"default": false},"black": {"type": Boolean,"default": false},"searchcraft": {"type": Boolean,"default": false}};
            obj.components = {"c-btn": require("../Button/Button"),"c-line": require("../Line/Line"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
            
            obj._scopeId = "data-a-6f63b22c";

            module.exports = obj;

            
        });
    