
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c((_vm.url || (_vm.params && _vm.params.tcUrl))
            ? 'c-link'
            : 'button',{tag:"component",staticClass:"c-btn c-gap-top-small c-gap-bottom-small",class:[
        {
            'c-btn-small': _vm.size === 'small'
                && _vm.type !== 'circle',
            'c-btn-disable': _vm.disabled,
            'c-btn-weak': _vm.type === 'weak',
            'c-btn-weak-auto': _vm.type === 'weak_auto',
            'c-btn-weak-gray': _vm.type === 'weak_gray',
            'c-btn-pills': _vm.type === 'pills',
            'c-btn-circle-big': _vm.type === 'circle'
                && _vm.size !== 'small',
            'c-btn-circle': _vm.type === 'circle'
                && _vm.size === 'small',
            'c-btn-touchable': !_vm.disabled,
            'c-btn-touchable-primary': _vm.type === 'primary',
            'c-btn-touchable-active': _vm.touchActive
        }
    ],style:([
        _vm.primaryColor
            ? {
                'border-color': _vm.primaryColor,
                'color': _vm.primaryColor
            }
            : {},
        _vm.type === 'primary' && _vm.touchActive
            ? {
                opacity: .9
            }
            : {},
        _vm.type === 'primary'
            ? {
                'background-color': _vm.primaryColor ? _vm.primaryColor : '#555',
                'color': '#fff',
                'border-color': _vm.primaryColor
            }
            : {}
    ]),attrs:{"url":_vm.url,"params":_vm.params,"voice-tag":_vm.text,"rl-type":_vm.disabled ? 'stop' : (!_vm.isJump ? 'button' : null),"rl-highlight-color":_vm.type === 'primary' ? 'rgba(255, 255, 255, .08)' : 'rgba(0, 0, 0, .08)',"rl-highlight-radius":"3px","rl-node":"","voice-action":"click","role":"button"},on:{"rlShow":_vm.onRlShow,"rlHide":_vm.onRlHide,"click":_vm.onClick},nativeOn:{"rlShow":function($event){_vm.onRlShow($event)},"rlHide":function($event){_vm.onRlHide($event)}}},[(_vm.icon || _vm.iconCode)?(_c('c-icon',{class:[
            _vm.type === 'pills'
                ? ''
                : 'c-color',
            _vm.iconClass ? 'icon-custom' : ''
        ],style:(_vm.type === 'primary'
                ? {
                    color: '#fff'
                }
                : {
                    color: _vm.primaryColor ? _vm.primaryColor : ''
                }),attrs:{"type":_vm.icon,"icon-class":_vm.iconClass,"code":_vm.iconCode}})):(_vm._e()),_vm._v(" "),((_vm.text || _vm.text === '0') && _vm.type !== 'pills')?([_c('span',[_vm._v("\n            "+_vm._s(_vm.text)+"\n        ")])]):((_vm.text || _vm.text === '0')?(_c('span',[_vm._v(_vm._s(_vm.text))])):(_vm._e()))],2)},
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
    onClick: function onClick(e) {
      if (this.disabled) {
        return;
      }
      /**
       * 点击事件
       *
       * @event click
       * @property {Event} param1 透传事件对象
       */


      this.$emit('click', e);
    },
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
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": String,"text": String,"size": String,"disabled": {"type": Boolean,"default": false},"icon": String,"iconClass": String,"iconCode": String,"url": String,"params": Object,"primaryColor": {"type": String}};
            obj.components = {"c-icon": require("../Icon/Icon"),"c-link": require("../Link/Link")};

            
            

            
    var computed = obj.computed || {};
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
            
            obj._scopeId = "data-a-f9e819f2";

            module.exports = obj;

            
        });
    