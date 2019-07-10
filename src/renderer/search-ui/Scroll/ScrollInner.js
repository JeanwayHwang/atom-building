
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-scroll-inner__3q00u"},[_c('div',{staticClass:"c-flexbox"},_vm._l((_vm.innerCols),function(item,index){return _c('div',{key:index,staticClass:"c-scroll-inner-item__q4icR",class:[
                _vm.verticalAlign === 'center'
                    ? _vm.$style.cScrollInnerItemVerticalAlign
                    : ''
            ],style:({
                width: (97 * item + (index === (_vm.length - 1) ? -24 : 0)) / (97 * _vm.col - 24) * 100 + '%',
                paddingRight: (index === (_vm.length - 1) ? 0 : _vm.paddingRight) + '%'
            })},[_vm._t('__c__' + index)],2)}))])},
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

            var cssModules = {"$style":{"cScrollInner":"c-scroll-inner__3q00u","cScrollInnerItem":"c-scroll-inner-item__q4icR","cScrollInnerItemVerticalAlign":"c-scroll-inner-item-vertical-align__2nCLB"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"col": {"type": [Number,String]},"innerCols": {"type": Array,"default": function () { return []; }},"touchable": {"type": Boolean,"default": false},"verticalAlign": {"type": String,"default": "top"}};
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

                
                        Object.keys(cssModules).forEach(function (key) {
                            self[key] = cssModules[key];
                        });
                    

                originCreated && originCreated.call(self);
            };
            
            

            module.exports = obj;

            
        });
    