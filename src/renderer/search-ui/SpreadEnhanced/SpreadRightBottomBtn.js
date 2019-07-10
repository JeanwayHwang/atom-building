
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-touchable-feedback',{attrs:{"left":.1,"right":-.08}},[_c('div',{staticClass:"spread-right-bottom-btn__127a2"},[_c('div',{ref:"before",staticClass:"before__pqPmM",style:([
                _vm.bgColor
                    ? {
                        background: '-webkit-gradient(linear,left top,right top,from(' + _vm.bgColorRgba + '),to('
                            + _vm.bgColor
                            + '))',
                        background: '-webkit-linear-gradient(left,' + _vm.bgColorRgba + ',' + _vm.bgColor + ')',
                        background: 'linear-gradient(to right,' + _vm.bgColorRgba + ',' + _vm.bgColor + ')'
                    }
                    : {}
            ])}),_vm._v(" "),_c('div',{staticClass:"spread-right-bottom-btn-wrapper__W1FP9",class:[
                _vm.logClass
                    ? 'WA_LOG_BTN'
                    : ''
            ],style:([
                _vm.bgColor
                    ? {
                        backgroundColor: _vm.bgColor
                    }
                    : {}
            ]),on:{"click":_vm.handleClick}},[_c('span',[_vm._v("\n                "+_vm._s(_vm.spread
                        ? _vm.foldText
                        : _vm.spreadText)+"\n            ")]),_vm._v(" "),_c('c-arrow',{staticClass:"c-gap-left-small",attrs:{"direction":_vm.spread
                        ? 2
                        : 1,"fill-color":_vm.bgColor,"color":_vm.iconColor}})],1)])])},
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
      this.$emit('click', {
        spread: this.spread
      });
    }
  },
  computed: {
    bgColorRgba: function bgColorRgba() {
      var bgColorRgba = this.bgColor;

      if (!bgColorRgba) {
        return;
      }

      if (bgColorRgba.indexOf('rgb') !== -1 && bgColorRgba.indexOf('rgba') === -1) {
        bgColorRgba = bgColorRgba.replace('rgb', 'rgba');
        bgColorRgba = bgColorRgba.replace(')', ' ,0)');
      }

      return bgColorRgba;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"spreadRightBottomBtnWrapper":"spread-right-bottom-btn-wrapper__W1FP9","spreadRightBottomBtn":"spread-right-bottom-btn__127a2","before":"before__pqPmM"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"spread": {"type": Boolean,"default": false},"spreadText": {"type": String,"default": "展开"},"foldText": {"type": String,"default": "收起"},"textAlign": {"type": String,"default": "center"},"iconColor": {"type": String,"default": "#555"},"bgColor": String,"logClass": {"type": Boolean,"default": true}};
            obj.components = {"c-arrow": require("../AnimateIcon/Arrow"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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

                
                        Object.keys(cssModules).forEach(function (key) {
                            self[key] = cssModules[key];
                        });
                    

                originCreated && originCreated.call(self);
            };
            
            

            module.exports = obj;

            
        });
    