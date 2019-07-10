
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"item-wrapper__3H36I"},[_c('div',{staticClass:"item__vbXSM c-font-normal",on:{"click":_vm.handleClick}},[(_vm.text)?(_c('span',{staticClass:"text c-line-clamp1",style:([
                {
                    color: _vm.color
                },
                (_vm.type !== 'order' && _vm.direction === 'up') || (_vm.type === 'order' && _vm.direction) || _vm.selected
                    ? {
                        'color': _vm.selectedColor,
                        'font-weight': 'bold'
                    }
                    : {}
            ])},[_vm._v("\n            "+_vm._s(_vm.text)+"\n        ")])):(_vm._e()),_vm._v(" "),(_vm.type === 'order')?(_c('div',{staticClass:"order-wrapper__1vO2x c-gap-left-small"},[_c('c-triangle',{staticClass:"order-top",attrs:{"direction":2,"color":_vm.direction === 'up'
                        ? _vm.selectedColor
                        : _vm.color,"animation":false,"default-line-height":false}}),_vm._v(" "),_c('c-triangle',{staticClass:"order-bottom__1RRP6",attrs:{"direction":1,"color":_vm.direction === 'down'
                        ? _vm.selectedColor
                        : _vm.color,"animation":false,"default-line-height":false}})],1)):(_c('c-triangle',{staticClass:"c-gap-left-small",attrs:{"direction":_vm.direction === 'up'
                    ? 2
                    : 1,"color":_vm.direction === 'up' || _vm.selected
                    ? _vm.selectedColor
                    : _vm.color}}))],1)])},
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
    handleClick: function handleClick() {
      var _this = this;

      // 点击保护
      if (this.clickProtect) {
        return;
      }

      this.clickProtect = true;
      this.clickProtectTimeout = setTimeout(function () {
        _this.clickProtect = false;
      }, 300);
      this.$emit('click', {
        text: this.text,
        index: this.index,
        type: this.type,
        direction: this.direction
      });
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"itemWrapper":"item-wrapper__3H36I","item":"item__vbXSM","orderWrapper":"order-wrapper__1vO2x","orderBottom":"order-bottom__1RRP6"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"text": String,"index": [String,Number],"type": {"type": String,"default": "normal"},"direction": String,"selected": {"type": Boolean,"default": false},"color": {"type": String,"default": "#666"},"selectedColor": {"type": String,"default": "#333"}};
            obj.components = {"c-triangle": require("../AnimateIcon/Triangle")};

            
            

            


            
            obj.data = function () {
                return {"clickProtect": false,"clickProtectTimeout": null};
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
    