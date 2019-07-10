
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {
var _obj, _obj$1;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wrapper__3CDQm",class:( _obj = {}, _obj[_vm.$style.active] = _vm.showClose, _obj )},[_c('div',{staticClass:"wrapper-inner__3aoNy",style:({
            padding: _vm.paddingWrapper
        }),attrs:{"rl-type":"stop"}},[_c('input',{ref:"input",staticClass:"c-input WA_LOG_OTHER",class:( _obj$1 = {}, _obj$1[_vm.$style.active] = !_vm.value, _obj$1 ),style:([
                {
                    'margin-top': _vm.marginTop,
                    'margin-bottom': _vm.marginBottom,
                    'margin-left': _vm.marginLeft,
                    'margin-right': _vm.marginRight,
                    'color': _vm.disabled ? _vm.disabledColor : (_vm.focus ? _vm.primaryColor : _vm.unfocusColor),
                    'border-color': _vm.disabled
                        ? _vm.disabledBordercolor
                        : (_vm.borderColor != null
                            ? _vm.borderColor
                            : (_vm.focus
                                ? _vm.primaryColor
                                : _vm.unfocusBorderColor
                            )
                        ),
                    'padding-left': _vm.leftTextLength + 'rem',
                    'padding-right': _vm.rightTextLength + 'rem',
                    'border-width': _vm.noBorder ? '0px' : '',
                    'opacity': 1,
                    '-webkit-text-fill-color': _vm.disabled ? '#dbdbdb' : '',
                    'border-radius': '5px'
                },
                _vm.paddingLeft
                    ? {
                        'padding-left': _vm.paddingLeft
                    }
                    : {},
                _vm.paddingRight
                    ? {
                        'padding-right': _vm.paddingRight
                    }
                    : {}
            ]),attrs:{"type":_vm.type,"placeholder":_vm.placeholder,"disabled":_vm.disabled,"name":_vm.name,"maxlength":_vm.maxLength},domProps:{"value":_vm.innerValue},on:{"change":_vm.handleChange,"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur}})]),_vm._v(" "),(_vm.leftText)?(_c('span',{staticClass:"left-text__euvn7",style:({
            color: _vm.leftColor ? _vm.leftColor : (_vm.focus ? _vm.primaryColor : _vm.unfocusColor)
        }),attrs:{"rl-type":"stop"}},[_vm._v("\n        "+_vm._s(_vm.leftText)+"\n    ")])):(_vm._e()),_vm._v(" "),(_vm.rightText)?(_c('span',{staticClass:"right-text__1tb1z",style:({
            color: _vm.rightColor ? _vm.rightColor : (_vm.focus ? _vm.primaryColor : _vm.unfocusColor)
        }),attrs:{"rl-type":"stop"}},[_vm._v("\n        "+_vm._s(_vm.rightText)+"\n    ")])):(_vm._e()),_vm._v(" "),(_vm.showClose && _vm.isShowCloseIcon)?(_c('c-icon',{staticClass:"close__8KBoW WA_LOG_BTN",attrs:{"rl-type":"stop","type":"close"},on:{"click":_vm.handleClose}})):(_vm._e()),_vm._v(" "),(_vm.message)?(_c('c-line',{staticClass:"message-color__3G2ex",attrs:{"aria-live":"polite"}},[_vm._v(_vm._s(_vm.message))])):(_vm._e())],1)},
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
    handleInput: function handleInput(e) {
      this.innerValue = e.target.value;
      /**
       * 输入事件
       *
       * @event input
       * @property {string} param1.value 输入框的值
       */

      this.$emit('input', {
        value: e.target.value
      });
    },
    handleChange: function handleChange(e) {
      this.innerValue = e.target.value;
    },
    handleBlur: function handleBlur(e) {
      var _this = this;

      setTimeout(function () {
        _this.focus = false;
      }, 50);
      /**
       * 失去焦点事件
       *
       * @event blur
       * @property {string} param1.value 输入框的值
       */

      this.$emit('blur', {
        value: e.target.value
      });
    },
    checkClose: function checkClose(val) {
      var type = this.type;
      this.showClose = val && (type === 'text' || type === 'password' || type === 'search');
    },
    handleClose: function handleClose(val) {
      var _this2 = this;

      this.innerValue = '';
      /**
       * 点击关闭(清除)事件
       *
       * @event clear
       */

      this.$emit('clear');
      setTimeout(function () {
        _this2.$refs.input.focus();
      }, 60);
    },
    handleFocus: function handleFocus(e) {
      this.focus = true;
      /**
       * 获得焦点事件
       *
       * @event focus
       * @property {string} param1.value 输入框的值
       */

      this.$emit('focus', {
        value: e.target.value
      });
    },
    leftTextLength: function leftTextLength() {
      return this.leftText ? this.leftText.replace(/[\u0391-\uffe5]/g, 'xo').length / 2 + 0.16 : 0.08;
    },
    rightTextLength: function rightTextLength() {
      return this.rightText ? this.rightText.replace(/[\u0391-\uffe5]/g, 'xo').length / 2 + 0.16 : this.isShowCloseIcon ? 0.3 : 0.08;
    },

    /**
     * 设置输入框的值
     *
     * @public
     * @param {string} value 输入框的值
     */
    setValue: function setValue(value) {
      this.$refs.input.value = value;
      this.innerValue = value;
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    },
    innerValue: function innerValue(val) {
      this.checkClose(val && this.focus);
      this.$emit('change', {
        value: val
      });
    },
    focus: function focus(val) {
      this.checkClose(val && this.innerValue);
    },
    isFocus: function isFocus(_isFocus) {
      if (_isFocus) {
        this.$refs.input.focus();
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"wrapper":"wrapper__3CDQm","wrapperInner":"wrapper-inner__3aoNy","leftText":"left-text__euvn7","rightText":"right-text__1tb1z","close":"close__8KBoW","active":"active__3ZKjw","messageColor":"message-color__3G2ex"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": {"type": String,"default": "text"},"placeholder": String,"value": [String,Number],"disabled": {"type": Boolean,"default": false},"name": String,"message": String,"leftText": String,"leftColor": String,"rightText": String,"rightColor": String,"isShowCloseIcon": {"type": Boolean,"default": true},"primaryColor": {"type": String,"default": "#000"},"borderColor": String,"maxLength": [String,Number],"noBorder": Boolean,"isFocus": {"type": Boolean,"default": false},"paddingLeft": String,"paddingRight": String,"paddingWrapper": String,"marginTop": {"type": String,"default": ".05rem"},"marginBottom": {"type": String,"default": ".05rem"},"marginLeft": {"type": String,"default": ""},"marginRight": {"type": String,"default": ""}};
            obj.components = {"c-icon": require("../Icon/Icon"),"c-line": require("../Line/Line")};

            
            

            


            
            obj.data = function () {
                return {"focus": this["isFocus"],"innerValue": this["value"],"showClose": false,"unfocusColor": "#000","unfocusBorderColor": "#eee","disabledColor": "#dbdbdb","disabledBordercolor": "#f1f1f1"};
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
    