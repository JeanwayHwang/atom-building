
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"c-label-radius",class:_vm.themes[_vm.type],attrs:{"aria-label":("标签." + _vm.text + ".")},on:{"click":function($event){_vm.$emit('click', $event)}}},[_vm._v("\n    "+_vm._s(_vm.text)+"\n")])},
staticRenderFns: []
}

})(_module1, _module1.exports)

            /* get script output data */
            var _module2 = {
                exports: {}
            };
            (function (module, exports) {
    /**
 * 点击事件
 *
 * @event click
 * @property {Event} param1 透传事件对象
 */
"use strict";
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": {"type": String,"default": "public"},"text": {"type": [String,Number],"required": true}};
            obj.components = {};

            
            

            


            
            obj.data = function () {
                return {"themes": {"public": ["c-text","c-text-public"],"danger": ["c-text","c-text-danger"],"secondary": ["c-text","c-text-secondary"],"box_red": ["c-text-box","c-text-box-red"],"box_orange": ["c-text-box","c-text-box-orange"],"box_blue": ["c-text-box","c-text-box-blue"],"box_pink": ["c-text-box","c-text-box-pink"],"box_gray": ["c-text-box","c-text-box-gray"],"box_green": ["c-text-box","c-text-box-green"],"box_yellow": ["c-text-box","c-text-box-yellow"],"info": ["c-text-info"],"index": ["c-index"],"index_hot1": ["c-index","c-index-hot1"],"index_hot2": ["c-index","c-index-hot2"],"index_hot3": ["c-index","c-index-hot3"],"index_gray": ["c-index","c-index-gray"]}};
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
            
            obj._scopeId = "data-a-04fdb2d4";

            module.exports = obj;

            
        });
    