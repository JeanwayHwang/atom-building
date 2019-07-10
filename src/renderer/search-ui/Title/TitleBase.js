
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{staticClass:"c-title",class:[
        ( _obj = {
            'c-font-medium c-color-link': _vm.size === 't2',
            'c-title-label': _vm.label,
            'c-line-clamp1': !_vm.clamp && _vm.size === 't2'
        }, _obj['c-line-clamp' + _vm.clamp] = _vm.clamp, _obj['clamp-strategy-l1s2'] =  _vm.clampStrategy === 'L1S2' && !_vm.label && !_vm.icon, _obj )
    ],style:([
        _vm.color
            ? {
                color: _vm.color
            }
            : {},
        _vm.fontWeight
            ? {
                fontWeight: _vm.fontWeight
            }
            : {}
    ]),attrs:{"role":"text"}},[_c('span',{staticClass:"c-title-text",domProps:{"innerHTML":_vm._s(_vm.text)}}),_vm._v(" "),(_vm.label)?(_c('c-label',{staticClass:"c-gap-left-small",attrs:{"text":_vm.label,"type":_vm.labelType}})):(_vm._e()),_vm._v(" "),(_vm.icon)?(_c('c-icon',{staticClass:"c-gap-left-small",attrs:{"type":_vm.icon,"aria-hidden":"true"}})):(_vm._e())],1)},
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

            obj.props = {"text": String,"icon": String,"label": String,"labelType": String,"size": {"type": String,"default": "t1"},"clamp": [String,Number],"color": {"type": String},"fontWeight": {"type": String},"clampStrategy": {"type": String}};
            obj.components = {"c-icon": require("../Icon/Icon"),"c-label": require("../Label/Label")};

            
            

            


            
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
            
            obj._scopeId = "data-a-152e3f56";

            module.exports = obj;

            
        });
    