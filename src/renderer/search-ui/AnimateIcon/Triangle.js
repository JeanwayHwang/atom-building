
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"wrapper__2Fs0T",style:({
        height: _vm.defaultLineHeight
            ? '24px'
            : _vm.size + 'px'
    }),attrs:{"aria-hidden":"true"}},[_c('span',{ref:"triangle",staticClass:"triangle__13NIC",class:[
            _vm.direction === 1
                ? ''
                : _vm.$style.triangleUp,
            _vm.animation
                ? _vm.direction === 1
                    ? _vm.$style.triangleTransition
                    : _vm.$style.triangleUpTransition
                : ''
        ],style:({
            'border-color': _vm.color + ' transparent transparent',
            'border-width': _vm.size + 'px ' + _vm.size + 'px 0',
            'top': _vm.defaultLineHeight
                ? (24 - _vm.size) / 2 + 'px'
                : 0
        })})])},
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

            var cssModules = {"$style":{"wrapper":"wrapper__2Fs0T","triangle":"triangle__13NIC","triangleTransition":"triangle-transition__2wNAR","triangleUp":"triangle-up__2-CST","triangleUpTransition":"triangle-up-transition__aolDK"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"color": {"type": String,"default": "#000"},"direction": {"type": Number,"default": 1},"animation": {"type": Boolean,"default": true},"size": {"type": Number,"default": 4},"defaultLineHeight": {"type": Boolean,"default": true}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
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
    