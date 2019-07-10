
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"c-text-line",class:[
        _vm.color ? ('c-color-' + _vm.color) : '',
        _vm.onLineLabel ? 'variant-one-line-label' : _vm.clampClass
    ],style:({
        'text-align': _vm.align,
        'height': _vm.fixHeight ? '3.43em' : 'auto',
        'font-size': _vm.fontSize + 'px',
        'line-height': (_vm.fontSize + 10) + 'px',
        'margin-bottom': (_vm.fixHeight || !_vm.text) ? 0 : '',
        'padding-right': _vm.onLineLabel ? _vm.labelWidth : ''
    }),on:{"click":function($event){_vm.$emit('click', $event)}}},[(_vm.labelFront)?(_c('c-label',{staticClass:"c-gap-right-small",attrs:{"text":_vm.labelFront,"type":_vm.labelFrontType}})):(_vm._e()),_vm._v(" "),(_vm.text)?(_c('span',{staticClass:"c-text-line-text",domProps:{"innerHTML":_vm._s(_vm.text)}})):(_vm._e()),_vm._v(" "),(_vm.label)?(_c('c-label',{staticClass:"c-gap-left-small",attrs:{"text":_vm.label,"type":_vm.labelType}})):(_vm._e())],1)},
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
 * @file 一个文字的容器，里面只能是文字，主要是为了 hack 浏览器多行截断的 bug
 * @author cxtom <cxtom2008@gmail.com>
 */
var SIZE_MAP = {
  t1: 18,
  t2: 16,
  t3: 14,
  t4: 12
};
var _default = {
  computed: {
    fontSize: function fontSize() {
      return SIZE_MAP[this.size];
    },
    labelWidth: function labelWidth() {
      if (!this.label) {
        return 0;
      }

      return 12 * this.label.replace(/[^\x00-\xff]/g, '1').length + 9 + 'px';
    },
    height: function height() {
      if (this.clamp <= 1) {
        return 'auto';
      }

      return (SIZE_MAP[this.size] + 10) * this.clamp + 'px';
    }
  }
  /**
   * click event.
   *
   * @event click
   */

};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"text": String,"clamp": {"type": [String,Number],"default": 1},"color": String,"align": {"type": String,"default": "left"},"size": {"type": String,"default": "t3"},"fixHeight": {"type": Boolean,"default": false},"label": String,"labelType": String,"labelFront": String,"labelFrontType": String};
            obj.components = {"c-label": require("../Label/Label")};

            
            

            
    var computed = obj.computed || {};
    computed["clampClass"] = function () { return ("c-line-clamp"+this["clamp"]); };
computed["onLineLabel"] = function () { return ((this["clamp"]==1)&&(!(!this["label"]))); };
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
            
            obj._scopeId = "data-a-4c4d6bc0";

            module.exports = obj;

            
        });
    