
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tcUrl ? 'a' : 'div',{tag:"component",class:{
        'c-blocka': _vm.tcUrl,
        'WA_LOG_SF': _vm.params && _vm.params.type === 'sf',
        'WA_LOG_XCX': _vm.params && _vm.params.type === 'xcx',
        'WA_LOG_LIGHT': _vm.params && _vm.params.type === 'easybrowse'
    },attrs:{"href":_vm.tcUrl,"target":_vm.$platform === 'pc' ? _vm.target : '_self',"data-sf-href":(_vm.params && _vm.params.sfUrl) ? _vm.params.sfUrl : null,"data-sf-options":(_vm.params && _vm.params.options) ? _vm.params.options : null,"data-url":(_vm.params && _vm.params.originUrl) ? _vm.params.originUrl : null,"data-log":(_vm.params && _vm.params.log) ? _vm.params.log : null,"data-click":(_vm.params && _vm.params.clickData) ? _vm.params.clickData : null,"data-tc-redirect":(_vm.params && _vm.params.tcRedirect) ? _vm.params.tcRedirect : null,"rt-disable":(_vm.params && _vm.params.rtDisable) ? '' : null,"origin-url":(_vm.params && _vm.params.fastUrl) ? _vm.params.fastUrl : null,"data-visited":_vm.visited ? null : 'off',"data-xcx":_vm._f("json")((_vm.params && _vm.params.type === 'xcx') ? _vm.params.options : false),"data-ivk":_vm._f("json")((_vm.params && _vm.params.ivkParams) ? _vm.params.ivkParams : false),"data-light":_vm._f("json")((_vm.params && _vm.params.type === 'easybrowse') ? _vm.params.options : false)},on:{"click":_vm.onClick}},[_vm._t("default")],2)},
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
 * @file 跳转链接
 * @author cxtom <cxtom2008@gmail.com>
 * @changer wangkai37 <wangkai37@baidu.com>
 */

/* global page */
var _default = {
  methods: {
    onClick: function onClick(e) {
      /**
       * 点击事件
       *
       * @event title-click
       * @property {Event} param1 透传事件对象
       */
      this.$emit('click', e);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": [String,Object],"params": {"type": [String,Object]},"visited": {"type": Boolean,"default": false},"target": {"type": String,"default": "_blank"}};
            obj.components = {};

            
            

            
    var computed = obj.computed || {};
    computed["tcUrl"] = function () { return (((this["params"]&&this["params"]["tcUrl"]))?(this["params"]["tcUrl"]):(this["url"])); };
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
            
            

            module.exports = obj;

            
        });
    