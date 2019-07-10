
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-btn",class:{
        'c-btn-pills': _vm.type === 'pills',
        'c-btn-circle-big': _vm.type === 'circle' && _vm.size !== 'small',
        'c-btn-circle': _vm.type === 'circle' && _vm.size === 'small'
    },on:{"click":_vm.handleClick}},[(_vm.type === 'circle' ? (!_vm.text && _vm.icon) : _vm.icon)?(_c('c-icon',{style:([
            {
                'margin-right': (_vm.text != null && _vm.text !== '') ? '.04rem' : 0
            },
            _vm.$platform === 'pc'
                ? {
                    float: 'none'
                }
                : {}
        ]),attrs:{"type":_vm.icon}})):(_vm._e()),_vm._v(" "),(_vm.pillBigText)?(_c('span',{staticClass:"pill-big-text c-font-normal"},[_vm._v("\n        "+_vm._s(_vm.pillBigText)+"\n    ")])):(_vm._e()),_vm._v(" "),(_vm.text || _vm.text === '0')?(_c('span',{style:([
            _vm.$platform === 'pc'
                ? {
                    color: '#fff'
                }
                : {}
        ])},[_vm._v("\n        "+_vm._s(_vm.text)+"\n    ")])):(_vm._e())],1)},
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
    handleClick: function handleClick(e) {
      /**
       * 点击事件
       *
       * @event click
       * @property {Event} param1 透传点击事件对象
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

            obj.props = {"type": {"type": String,"default": "pills"},"pillBigText": [String,Number],"text": [String,Number],"size": String,"icon": String};
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

                

                originCreated && originCreated.call(self);
            };
            
            obj._scopeId = "data-a-24a5ef82";

            module.exports = obj;

            
        });
    