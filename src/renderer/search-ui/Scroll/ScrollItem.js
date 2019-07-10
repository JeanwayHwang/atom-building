
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
        'c-scroll-item-wrapper': _vm.hasBorder
    },style:([
        {
            height: '100%'
        },
        _vm.marginBottom !== undefined
            ? {
                'margin-bottom': _vm.marginBottom
            }
            : {}
    ])},[(_vm.length === 0 || _vm.length === 1)?(_c('div',{staticStyle:{"height":"100%"}},[_vm._t("default")],2)):(_c('div',{staticClass:"c-flexbox"},_vm._l((_vm.innerCols),function(item,index){return _c('div',{key:index,staticClass:"c-scroll-item-inner",style:({
                width: (97 * item + (index === (_vm.length - 1) ? -24 : 0)) / (97 * _vm.col - 24) * 100 + '%',
                paddingRight: (index === (_vm.length - 1) ? 0 : _vm.paddingRight) + '%'
            })},[_vm._t('__c__' + index)],2)})))])},
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
  render: function render() {
    var _this = this;

    var vnodes = this.$slots["default"] || [];
    vnodes.forEach(function (vnode, index) {
      _this.$slots['__c__' + index] = [vnode];
    });
    return this.$super.render();
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"col": {"type": [Number,String]},"innerCols": {"type": Array,"default": function () { return []; }},"hasBorder": {"type": Boolean,"default": false},"marginBottom": String};
            obj.components = {};

            
            

            
    var computed = obj.computed || {};
    computed["length"] = function () { return this["innerCols"].length; };
computed["paddingRight"] = function () { return ((24/((97*this["col"])-24))*100); };
    obj.computed = computed;



            
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
            
            obj._scopeId = "data-a-a6167542";

            module.exports = obj;

            
        });
    