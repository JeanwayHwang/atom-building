
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{staticClass:"c-slink",class:_vm.cls,attrs:{"url":_vm.url,"params":_vm.params,"rl-type":!_vm.isJump
        ? 'button'
        : null,"rl-node":"","rl-highlight-color":"rgba(0, 0, 0, .08)","rl-highlight-radius":"5px"},on:{"click":function($event){_vm.$emit('click', $event)}},nativeOn:{"rlShow":function($event){_vm.onRlShow($event)},"rlHide":function($event){_vm.onRlHide($event)}}},[(!!_vm.iconType)?(_c('c-icon',{staticClass:"c-gap-right-small",attrs:{"type":_vm.iconType,"aria-hidden":"true"}})):(_vm._e()),_vm._v(" "),_c('span',{style:({
            color: _vm.textColor
        })},[_vm._v("\n        "+_vm._s(_vm.text)+"\n    ")]),_vm._v(" "),(_vm.tail)?(_c('span',{style:({color: _vm.tailColor})},[_vm._v("\n        "+_vm._s(_vm.tail)+"\n    ")])):(_vm._e()),_vm._v(" "),(_vm.label)?(_c('c-label',{staticClass:"c-gap-left-small",attrs:{"text":_vm.label,"type":_vm.labelType}})):(_vm._e())],1)},
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
  methods: {
    onRlShow: function onRlShow(e) {
      // 使用 ResponsiveLink 提供的事件来实现自定义 background 点击态
      // 使用 background 是因为全局的点击态在位置变化时会错位，而使用 rl-highlight-self 可能会影响组件的布局
      // 自定义实现方案依赖 js 执行，自然模板如果不输出 js 则仍是全局的点击态
      this.touchActive = true;
      e.preventDefault();
    },
    onRlHide: function onRlHide(e) {
      this.touchActive = false;
    }
  }
};
/**
 * 点击事件
 *
 * @event click
 * @property {Event} param1 透传点击事件
 */

exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": {"type": String,"default": "default"},"url": String,"params": Object,"text": String,"tail": String,"textColor": String,"tailColor": String,"iconType": String,"label": String,"labelType": String,"noGap": {"type": Boolean,"default": false}};
            obj.components = {"c-link": require("../Link/Link"),"c-icon": require("../Icon/Icon"),"c-label": require("../Label/Label")};

            
            

            
    var computed = obj.computed || {};
    computed["cls"] = function () { return {"c-slink-new": (this["type"]==="default"),"c-slink-new-strong": (this["type"]==="strong"),"c-slink-auto": (this["type"]==="auto"),"c-gap-top-small": (!this["noGap"]),"c-gap-bottom-small": (!this["noGap"]),"c-slink-touchable-active": this["touchActive"]}; };
computed["isJump"] = function () { return (!(!(this["url"]||(this["params"]&&this["params"]["tcUrl"])))); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"touchActive": false};
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
            
            obj._scopeId = "data-a-ee76526c";

            module.exports = obj;

            
        });
    