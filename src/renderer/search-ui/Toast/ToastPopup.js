
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.oState)?([_c('div',{staticClass:"c-toast-popup-wrapper",style:(_vm.wrapperStyle)},[_c('transition',{attrs:{"name":_vm.transition,"appear":""}},[_c('div',{staticClass:"c-toast-popup-content"},[_vm._t("default")],2)])],1),_vm._v(" "),(_vm.hasMask)?(_c('div',{class:{
                'c-toast-popup-mask': true,
                'WA_LOG_OTHER': _vm.dismissible
            },on:{"touchmove":function($event){$event.preventDefault();},"click":_vm.maskClick}})):(_vm._e())]):(_vm._e())],2)},
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
  watch: {
    state: function state(value, old) {
      this.change(value);
    }
  },
  computed: {
    wrapperStyle: function wrapperStyle() {
      return {
        'top': this.bottom === '' ? this.top : 'auto',
        'bottom': this.bottom,
        'transform': this.top === '50%' ? 'translate(0, -50%)' : '',
        '-webkit-transform': this.top === '50%' ? 'translate(0, -50%)' : ''
      };
    }
  },
  methods: {
    maskClick: function maskClick() {
      if (!this.dismissible) {
        return;
      }

      this.change(false);
    },
    change: function change(value) {
      /**
       * 状态state 发生变化时触发 true 为打开，false 为关闭.
       *
       * @event change
       */
      this.$emit('change', value);
      this.oState = value;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"dismissible": {"type": Boolean,"default": true},"transition": {"type": String,"default": "zoom-in-from-big"},"state": {"type": Boolean,"default": false},"hasMask": {"type": Boolean,"default": true},"top": {"type": String,"default": "50%"},"bottom": {"type": String,"default": ""}};
            obj.components = {};

            
            

            


            
            obj.data = function () {
                return {"oState": this["state"]};
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
            
            obj._scopeId = "data-a-2fb38e4d";

            module.exports = obj;

            
        });
    