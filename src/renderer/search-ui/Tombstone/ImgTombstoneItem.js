
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-img-tombstone-item",style:([
        {
            'margin-bottom': '2px',
            'background-color': _vm.color,
            'height': 0,
            'padding-bottom': _vm.math_floor(1 / _vm.whScale * 100) + '%'
        },
        _vm.borderRadius.tl
            ? {
                'border-top-left-radius': '3px'
            }
            : {},
        _vm.borderRadius.tr
            ? {
                'border-top-right-radius': '3px'
            }
            : {},
        _vm.borderRadius.bl
            ? {
                'border-bottom-left-radius': '3px'
            }
            : {},
        _vm.borderRadius.br
            ? {
                'border-bottom-right-radius': '3px'
            }
            : {}
    ])})},
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

            obj.props = {"index": Number,"color": {"type": String,"default": "#f4f2f2"},"whScale": {"type": Number,"default": 1},"borderRadius": {"type": Object,"default": function () { return {"tl": false,"tr": false,"bl": false,"br": false}; }}};
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
            
            

            module.exports = obj;

            
        });
    