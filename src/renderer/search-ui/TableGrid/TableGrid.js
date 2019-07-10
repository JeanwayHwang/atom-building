
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.content.tRow),function(trItem,rowIndex){return _c('div',{key:rowIndex,staticClass:"c-row"},_vm._l((trItem.tCell),function(tdItem,itemIndex){return _c('div',{key:rowIndex + '' + itemIndex,class:'c-span' + _vm.gridClass},[(tdItem.text)?(_c('c-btn',{staticClass:"c-table-grid-border",attrs:{"url":tdItem.url,"text":tdItem.text,"params":tdItem.params}})):(_vm._e())],1)}))}))},
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

            obj.props = {"content": Object};
            obj.components = {"c-btn": require("../Button/Button")};

            
            

            


            
            obj.data = function () {
                return {"gridClass": (12/this["content"]["tRow"][0]["tCell"].length)};
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
            
            obj._scopeId = "data-a-7627bb70";

            module.exports = obj;

            
        });
    