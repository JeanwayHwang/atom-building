
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-line',{staticClass:"c-article-ext-info c-color-gray",attrs:{"clamp":1}},[(_vm.source)?(_c('span',{staticClass:"c-gap-right"},[_vm._v("\n        "+_vm._s(_vm.source)+"\n    ")])):(_vm._e()),_vm._v(" "),(_vm.time)?(_c('c-timespan',{staticClass:"c-gap-right",attrs:{"time":_vm.time}})):(_vm._e()),_vm._v(" "),(_vm.readNum)?(_c('span',{staticClass:"c-gap-right"},[_vm._v("\n        "+_vm._s(_vm.readNum)+"人阅读\n    ")])):(_vm._e()),_vm._v(" "),_vm._t("default")],2)},
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

            obj.props = {"time": [Number,String],"readNum": [Number,String],"source": String,"showExtInfo": {"type": Boolean,"default": false}};
            obj.components = {"c-line": require("../Line/Line"),"c-timespan": require("../Timespan/Timespan")};

            
            

            


            
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
    