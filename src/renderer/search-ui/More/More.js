
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{staticClass:"c-color",class:{'c-more-wrapper-inline': _vm.inline},attrs:{"url":_vm.url,"params":_vm.params},on:{"click":_vm.showMore}},[_c('div',{staticClass:"c-more-icon-box",class:{'c-more-icon-box-inline': _vm.inline},attrs:{"role":"text"}},[_c('c-icon',{staticClass:"c-more-icon",attrs:{"type":"right_arrow"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.text))])],1)])},
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

/**
 * @file 查看更多
 * @author cxtom <cxtom2008@gmail.com>
 */
var _default = {
  methods: {
    /**
     * showMore event.
     *
     * @event showMore
     */
    showMore: function showMore() {
      this.$emit('showMore');
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": String,"params": Object,"text": {"type": String,"default": "查看更多"},"inline": {"type": Boolean,"default": false}};
            obj.components = {"c-icon": require("../Icon/Icon"),"c-link": require("../Link/Link")};

            
            

            


            
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
            
            obj._scopeId = "data-a-f03bb4c6";

            module.exports = obj;

            
        });
    