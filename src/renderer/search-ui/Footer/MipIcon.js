
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"c-mip-icon__13S3a"},[_c('c-touchable-feedback',{staticClass:"touchable__3r8uV c-gap-inner-left-small c-gap-inner-right-small"},[_c('c-link',{staticClass:"link__15nLV",attrs:{"url":_vm.url,"params":_vm.params},nativeOn:{"click":function($event){_vm.handleClick($event)}}},[_c('c-icon',{staticClass:"icon__3ybxy",attrs:{"type":"mip"}})],1)],1)],1)},
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
 * @file Mip 图标
 * @author wangkai <wangkai37@baidu.com>
 */
var _default = {
  methods: {
    handleClick: function handleClick(e) {
      /**
       * 点击事件
       *
       * @event click
       */
      this.$emit('click');
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cMipIcon":"c-mip-icon__13S3a","touchable":"touchable__3r8uV","link":"link__15nLV","icon":"icon__3ybxy"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": {"type": String,"default": "https://m.baidu.com/sf?pd=gloryweb&actname=introduction&title=%E6%9E%81%E9%80%9F%E6%B5%8F%E8%A7%88%E6%A8%A1%E5%BC%8"},"params": {"type": Object,"default": function () { return {"type": "sf","tcUrl": "https://m.baidu.com/sf?pd=gloryweb&actname=introduction&title=%E6%9E%81%E9%80%9F%E6%B5%8F%E8%A7%88%E6%A8%A1%E5%BC%8F","sfUrl": "/sf?pd=gloryweb&actname=introduction&title=%E6%9E%81%E9%80%9F%E6%B5%8F%E8%A7%88%E6%A8%A1%E5%BC%8F"}; }}};
            obj.components = {"c-icon": require("../Icon/Icon"),"c-link": require("../Link/Link"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
    