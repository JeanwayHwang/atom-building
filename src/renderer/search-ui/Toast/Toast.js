
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-toast-popup',{attrs:{"state":_vm.oState && !_vm.isBox,"has-mask":false,"top":_vm.top,"bottom":_vm.bottom,"role":"alert"},on:{"change":_vm.changeState}},[(_vm.iconType || _vm.iconCode)?(_c('div',{staticClass:"c-toast-content-with-icon",style:(_vm.customStyle)},[_c('c-icon',{staticClass:"c-toast-icon",attrs:{"code":_vm.iconCode,"type":_vm.iconType}}),_vm._v(" "),_c('div',[_vm._v("\n            "+_vm._s(_vm.content)+"\n            "),_vm._v(" "),_vm._t("default")],2)],1)):(_c('div',{staticClass:"c-toast-content-without-icon",style:(_vm.customStyle)},[_c('p',{staticClass:"c-gap-bottom-zero",class:['c-line-clamp' + _vm.clamp]},[_vm._v("\n            "+_vm._s(_vm.content)+"\n        ")]),_vm._v(" "),_c('p',[_vm._t("default")],2)]))])},
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

var _userAgent = _interopRequireDefault(require("@searchfe/user-agent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  methods: {
    changeState: function changeState(value) {
      var _this = this;

      /**
       * 状态state 发生变化时触发 true 为打开，false 为关闭.
       *
       * @event change
       */
      this.$emit('change', value);
      this.oState = value;

      if (this.autoClose && value === true) {
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          _this.changeState(false);
        }, this.duration);
      }
    }
  },
  watch: {
    state: function state(value) {
      this.changeState(value);

      if (this.isBox && this.sdk) {
        var params = {
          type: 1,
          message: this.content
        };
        /* eslint-disable fecs-no-require */

        require(['@baidu/toast'], function (Jssdk) {
          Jssdk.toast(params);
        });
        /* eslint-enable fecs-no-require */

      }
    }
  },
  mounted: function mounted() {
    var verArr = _userAgent["default"].baiduBoxVersion();

    if (_userAgent["default"].isBaiduBox() && this.sdk && parseFloat(verArr[0] * 10 + verArr[1]) / 10 >= 9.1) {
      this.isBox = true;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"iconType": {"type": String,"default": ""},"iconCode": {"type": String,"default": ""},"content": {"type": String,"default": ""},"state": {"type": Boolean,"default": false},"autoClose": {"type": Boolean,"default": false},"duration": {"type": Number,"default": 2000},"sdk": {"type": Boolean,"default": false},"customStyle": {"type": Object,"default": function () { return {"background": "rgba(0, 0, 0, 0.8)","color": "#fff"}; }},"top": {"type": String,"default": "50%"},"bottom": {"type": String,"default": ""},"clamp": {"type": [Number,String],"default": 1}};
            obj.components = {"c-toast-popup": require("./ToastPopup"),"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"oState": this["state"],"timer": null,"isBox": false};
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
            
            obj._scopeId = "data-a-322c3fd0";

            module.exports = obj;

            
        });
    