
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"c-container c-sigma-container",class:[_vm.$platform === 'pc' ? 'c-border' : '']},[_c('section',[_vm._t("default")],2),_vm._v(" "),_c('footer',[(!_vm.hideFooter)?(_vm._t("footer",[_c('c-sigma-footer',{attrs:{"type":_vm.footerType,"text":_vm.footerText,"url":_vm.footerUrl,"url-params":_vm.footerUrlParams,"use-divider":_vm.footerUseDivider,"hide-other-result":_vm.hideOtherResult,"icon-color":_vm.iconColor,"icon-type":_vm.iconType}})])):(_vm._e())],2)])},
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

            obj.props = {"footerType": String,"footerText": String,"footerUrl": String,"footerUrlParams": Object,"footerUseDivider": Boolean,"hideFooter": Boolean,"hideOtherResult": Boolean,"iconType": String,"iconColor": String};
            obj.components = {"c-sigma-footer": require("../Sigma/SigmaFooter")};

            
            

            


            
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
            
            obj._scopeId = "data-a-b25433a0";

            module.exports = obj;

            
        });
    