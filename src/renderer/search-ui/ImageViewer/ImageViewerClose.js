
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-image-viewer-close__gi0uL"},[_c('div',{staticClass:"c-image-viewer-close-bg__3-JWS"}),_vm._v(" "),_c('div',{staticClass:"c-image-viewer-close-content__2VK_k",on:{"click":function($event){_vm.onClick($event)}}},[_vm._m(0)])])},
staticRenderFns: [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-image-viewer-close-icon__3mkBz"},[_c('i',{staticClass:"c-icon"},[_vm._v("")])])}]
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
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    getHeight: function getHeight() {
      return this.$el.getBoundingClientRect().height;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cImageViewerClose":"c-image-viewer-close__gi0uL","cImageViewerCloseBg":"c-image-viewer-close-bg__3-JWS","cImageViewerCloseContent":"c-image-viewer-close-content__2VK_k","cImageViewerCloseIcon":"c-image-viewer-close-icon__3mkBz"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = [];
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

                
                        Object.keys(cssModules).forEach(function (key) {
                            self[key] = cssModules[key];
                        });
                    

                originCreated && originCreated.call(self);
            };
            
            

            module.exports = obj;

            
        });
    