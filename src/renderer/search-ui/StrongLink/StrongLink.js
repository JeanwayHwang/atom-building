
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{staticClass:"c-category-box",attrs:{"url":_vm.url,"params":_vm.params},on:{"click":function($event){_vm.$emit('click', $event)}}},[_c('c-touchable-feedback',{staticClass:"c-category-box-inner",attrs:{"is-jump":!!(_vm.url || (_vm.params && _vm.params.tcUrl)),"role":"text"}},[(_vm.name && _vm.name !== '')?(_c('p',{staticClass:"c-color-link"},[_vm._v(_vm._s(_vm.name))])):(_vm._e()),_vm._v(" "),_vm._t("default"),_vm._v(" "),(_vm.num && _vm.num !== '' && _vm.num !== 0)?(_c('p',{staticClass:"c-color-gray"},[(_vm.num)?([_vm._v("\n                "+_vm._s(_vm.text1)+"\n                "),_c('span',{staticClass:"c-category-num"},[_vm._v(_vm._s(_vm.num))]),_vm._v("\n                "+_vm._s(_vm.text2)+"\n            ")]):(_vm._e())],2)):(_vm._e())],2)],1)},
staticRenderFns: []
}

})(_module1, _module1.exports)

            /* get script output data */
            var _module2 = {
                exports: {}
            };
            (function (module, exports) {
    "use strict";
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": {"type": String},"params": {"type": Object},"name": {"type": String,"default": ""},"num": {"type": String},"text1": {"type": String},"text2": {"type": String}};
            obj.components = {"c-link": require("../Link/Link"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
            
            obj._scopeId = "data-a-551827ac";

            module.exports = obj;

            
        });
    