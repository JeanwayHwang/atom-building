
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-touchable-feedback c-touchable-feedback-no-default",class:{
        'WA_LOG_SF': _vm.open && _vm.urlParams && _vm.urlParams.type === 'sf',
        'WA_LOG_XCX': _vm.open && _vm.urlParams && _vm.urlParams.type === 'xcx',
        'WA_LOG_LIGHT': _vm.open && _vm.urlParams && _vm.urlParams.type === 'easybrowse'
    },attrs:{"data-aftclk":_vm.open && _vm.tcUrl ? '' : false,"rl-node":_vm.open ? '' : null,"rl-type":_vm.open && !_vm.isJump ? 'button': null,"rl-highlight-position":_vm.open ? _vm.position : null,"rl-highlight-background":_vm.open ? _vm.backgroundColor : null,"rl-highlight-radius":_vm.open ? _vm.borderRadius : null,"rl-highlight-self":_vm.open && _vm.self ? '' : null,"rl-link-href":_vm.open ? _vm.tcUrl : null,"rl-link-data-sf-href":(_vm.open && _vm.urlParams && _vm.urlParams.sfUrl) ? _vm.urlParams.sfUrl : null,"rl-link-data-sf-options":(_vm.open && _vm.urlParams && _vm.urlParams.options) ? _vm.urlParams.options : null,"rl-link-data-url":(_vm.open && _vm.urlParams && _vm.urlParams.originUrl) ? _vm.urlParams.originUrl : null,"rl-link-data-log":(_vm.open && _vm.urlParams && _vm.urlParams.log) ? _vm.urlParams.log : null,"rl-link-data-click":(_vm.open && _vm.urlParams && _vm.urlParams.clickData) ? _vm.urlParams.clickData : null,"rl-link-data-tc-redirect":(_vm.open && _vm.urlParams && _vm.urlParams.tcRedirect) ? _vm.urlParams.tcRedirect : null,"rl-link-rt-disable":(_vm.open && _vm.urlParams && _vm.urlParams.rtDisable) ? '' : null,"rl-link-origin-url":(_vm.open && _vm.urlParams && _vm.urlParams.fastUrl) ? _vm.urlParams.fastUrl : null,"rl-link-data-xcx":_vm._f("json")((_vm.open && _vm.urlParams && _vm.urlParams.type === 'xcx') ? _vm.urlParams.options : false),"rl-link-data-ivk":_vm._f("json")((_vm.open && _vm.urlParams && _vm.urlParams.ivkParams) ? _vm.urlParams.ivkParams : false),"rl-link-data-light":_vm._f("json")((_vm.open && _vm.urlParams && _vm.urlParams.type === 'easybrowse') ? _vm.urlParams.options : false)}},[(!_vm.expand)?([_vm._t("default")]):(_c('div',{staticClass:"c-touchable-feedback-content"},[_vm._t("default")],2)),_vm._v(" "),(_vm.open && _vm.expand)?(_c('div',{staticClass:"c-touchable-feedback-expand",style:({
            top: _vm.cTop,
            right: _vm.cRight,
            bottom: _vm.cBottom,
            left: _vm.cLeft
        })})):(_vm._e())],2)},
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

            obj.props = {"open": {"type": Boolean,"default": true},"top": {"type": Number,"default": 0},"right": {"type": Number,"default": 0},"bottom": {"type": Number,"default": 0},"left": {"type": Number,"default": 0},"borderRadius": {"type": String,"default": "0"},"backgroundColor": {"type": String,"default": "rgba(0, 0, 0, .05)"},"isJump": {"type": Boolean,"default": false},"expand": {"type": Boolean,"default": false},"self": {"type": Boolean,"default": true},"url": {"type": String,"default": ""},"urlParams": {"type": Object,"default": function () { return {}; }},"title": {"type": String,"default": ""}};
            obj.components = {"c-link": require("../Link/Link")};

            
            

            
    var computed = obj.computed || {};
    computed["cTop"] = function () { return (this["top"]+"rem"); };
computed["cRight"] = function () { return (this["right"]+"rem"); };
computed["cBottom"] = function () { return (this["bottom"]+"rem"); };
computed["cLeft"] = function () { return (this["left"]+"rem"); };
computed["position"] = function () { return ((this["top"])+("rem,")+(this["right"])+("rem,")+(this["bottom"])+("rem,")+(this["left"])+("rem")); };
computed["tcUrl"] = function () { return (((this["urlParams"]&&this["urlParams"]["tcUrl"]))?(this["urlParams"]["tcUrl"]):(this["url"])); };
computed["isBlockJump"] = function () { return ((this["open"]&&this["isJump"])&&((this["urlParams"]&&this["urlParams"]["tcUrl"])||this["url"])); };
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
    