
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-tabs-item",style:({padding: _vm.$platform === 'pc' ? '0 9px' : '0 .17rem'}),attrs:{"tab-data-module":_vm.tabDataModule}},[(!_vm.isLoading)?(_vm._t("default")):(_vm._e())],2)},
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

            obj.props = {"label": {"type": String},"icon": {"type": String,"default": ""},"isLoading": {"type": Boolean,"default": false},"logContent": {"type": Object,"default": function () { return {}; }},"params": {"type": Object,"default": function () { return {}; }},"tabDataModule": {"type": String,"default": ""}};
            obj.components = {};

            
            

            


            
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
            
            obj._scopeId = "data-a-3342a144";

            module.exports = obj;

            
        });
    