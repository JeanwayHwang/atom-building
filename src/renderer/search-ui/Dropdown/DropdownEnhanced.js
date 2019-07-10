
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown__37-FQ c-gap-bottom-small",class:{
        'dropdown-disable': _vm.disabled,
        'c-gap-top-small': !_vm.label
    },attrs:{"rl-type":"stop"}},[(_vm.label)?(_c('label',{staticClass:"dropdown-label__4LLKf"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")])):(_vm._e()),_vm._v(" "),_c('div',{staticClass:"dropdown-btn__Nbxsh",style:([
            _vm.direction !== 'ltr'
                ? {
                    direction: _vm.direction
                }
                : {},
            _vm.noBorder
                ? {
                    border: 'none'
                }
                : {},
            _vm.focus
                ? {
                    borderColor: '#000'
                }
                : {}
        ]),on:{"click":_vm.handleClick}},[_c('span',{style:([
                _vm.innerValue === ''
                    ? {
                        color: '#999'
                    }
                    : {},
                _vm.disabled
                    ? {
                        color: '#dbdbdb'
                    }
                    : {},
                _vm.noBorder
                    ? {
                        color: '#555'
                    }
                    : {}
            ])},[_vm._v("\n            "+_vm._s(_vm.innerValue === '' ? '请选择' : _vm.selectorOptions[_vm.selectedIndex].text)+"\n        ")])]),_vm._v(" "),_c('c-arrow',{staticClass:"dropdown-arrow__2N0D9",attrs:{"direction":_vm.focus
            ? 2
            : 1,"color":_vm.disabled
            ? '#dbdbdb'
            : '#555',"animation":""}}),_vm._v(" "),_c('c-selector',{attrs:{"title":_vm.label,"data":_vm.selectorOptions,"open":_vm.showSelector},on:{"select":_vm.handleSelectorSelect,"close":_vm.handleSelectorClose}})],1)},
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
  computed: {
    selectedIndex: {
      get: function get() {
        return this.getSelectedIndex(this.innerValue);
      }
    }
  },
  watch: {
    value: function value(v) {
      this.innerValue = v;
    }
  },
  mounted: function mounted() {
    // 深拷贝一份选项
    this.selectorOptions = JSON.parse(JSON.stringify(this.options));
  },
  methods: {
    getSelectedIndex: function getSelectedIndex(v) {
      for (var i = 0, len = this.options.length; i < len; i++) {
        if (this.options[i].value === v) {
          return i;
        }
      }
    },
    handleClick: function handleClick(e) {
      if (this.disabled) {
        return;
      }

      this.focus = true; // 处理默认选中

      for (var i = 0, len = this.selectorOptions.length; i < len; i++) {
        if (this.selectorOptions[i].value === this.innerValue) {
          this.selectorOptions[i].selected = true;
        } else {
          this.selectorOptions[i].selected = false;
        }
      } // 调用选择框组件


      this.showSelector = true;
    },
    handleSelectorSelect: function handleSelectorSelect(e) {
      if (this.innerValue === e.value) {
        return;
      }

      this.innerValue = e.value;

      if (!this.silent) {
        this.$emit('change', {
          target: this,
          value: e.value,
          selectedIndex: e.index
        });
      }
    },
    handleSelectorClose: function handleSelectorClose(e) {
      this.showSelector = false;
      this.focus = false;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"dropdown":"dropdown__37-FQ","dropdownDisable":"dropdown-disable__1WlQZ","dropdownBtn":"dropdown-btn__Nbxsh","dropdownLabel":"dropdown-label__4LLKf","dropdownArrow":"dropdown-arrow__2N0D9"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"disabled": {"type": Boolean,"default": false},"value": {"type": [Number,String],"default": ""},"options": {"type": Array,"default": function () { return []; }},"label": {"type": String,"default": ""},"direction": {"type": String,"default": "ltr"},"noBorder": {"type": Boolean,"default": false},"silent": {"type": Boolean,"default": false}};
            obj.components = {"c-arrow": require("../AnimateIcon/Arrow"),"c-selector": require("../Selector/Selector")};

            
            

            


            
            obj.data = function () {
                return {"focus": false,"innerValue": this["value"],"showSelector": false,"selectorOptions": this["options"]};
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
    