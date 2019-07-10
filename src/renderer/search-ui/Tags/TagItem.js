
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spread-tag-item tag-item__2DDf_ c-gap-inner-left c-gap-inner-right",class:[
        !_vm.disable
            ? 'WA_LOG_BTN'
            : ''
    ],style:([
        {
            'position': 'relative',
            'overflow': 'hidden',
            'color': _vm.color,
            'background-color': '#fff',
            '-webkit-box-shadow': '0 0 0 1px ' + _vm.borderColor + ' inset',
            'box-shadow': '0 0 0 1px ' + _vm.borderColor + ' inset'
        },
        _vm.negative
            ? {
                color: _vm.negativeColor
            }
            : {},
        _vm.theme === 'gray'
            ? {
                'background-color': _vm.grayThemeColor,
                '-webkit-box-shadow': '0 0 0 1px ' + _vm.grayThemeColor + ' inset',
                'box-shadow': '0 0 0 1px ' + _vm.grayThemeColor + ' inset'
            }
            : {},
        _vm.selected
            ? {
                'color': _vm.selectedColor === '#555' ? '#000' : _vm.selectedColor,
                'background-color': '#fff',
                '-webkit-box-shadow': '0 0 0 1px ' + _vm.selectedColor + ' inset',
                'box-shadow': '0 0 0 1px ' + _vm.selectedColor + ' inset'
            }
            : {},
        _vm.size === 'large'
            ? {
                'padding-top': '7px',
                'padding-bottom': '7px'
            }
            : {},
        _vm.auto
            ? {
                display: 'inline-block'
            }
            : {}
    ]),on:{"click":_vm.handleClick}},[_c('span',{staticClass:"c-line-clamp1"},[(_vm.icon)?(_c('c-icon',{staticClass:"c-gap-right-small",attrs:{"type":_vm.icon}})):(_vm._e()),_vm._v(" "),_c('span',[_vm._v("\n            "+_vm._s(_vm.text)+"\n        ")])],1),_vm._v(" "),(
            (_vm.type === 'checkbox' || _vm.forceCheck)
                && _vm.selected
        )?([_c('div',{staticClass:"check-triangle__-sQ8I",style:({
                'border-bottom': '16px solid ' + _vm.selectedColor
            })}),_vm._v(" "),_c('div',{staticClass:"check-icon-wrapper__2vhWE"},[_c('c-icon',{staticClass:"check-icon__CSnIA",attrs:{"type":"check"}})],1)]):(_vm._e())],2)},
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
      this.$emit('click', e);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"tagItem":"tag-item__2DDf_","checkTriangle":"check-triangle__-sQ8I","checkIconWrapper":"check-icon-wrapper__2vhWE","checkIcon":"check-icon__CSnIA"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"text": String,"icon": {"type": String,"default": ""},"type": {"type": String,"default": "radio"},"theme": {"type": String,"default": "normal"},"size": {"type": String,"default": "normal"},"auto": {"type": Boolean,"default": false},"selected": {"type": Boolean,"default": false},"negative": {"type": Boolean,"default": false},"disable": {"type": Boolean,"default": false},"color": {"type": String,"default": "#000"},"borderColor": {"type": String,"default": "#eee"},"selectedColor": {"type": String,"default": "#555"},"forceCheck": {"type": Boolean,"default": false}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"negativeColor": "#999","grayThemeColor": "#f8f8f8"};
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
    