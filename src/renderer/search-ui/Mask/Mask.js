
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"mask",staticClass:"mask__2kIt5",style:({
        'width': _vm.width,
        'height': 0,
        'background-color': _vm.backgroundColor,
        'z-index': -1,
        'opacity': 0
    }),on:{"click":_vm.handleClick,"touchmove":_vm.handleMaskTouchmove}},[_vm._t("default")],2)},
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

var _domUtil = require("../util/domUtil");

// dom 操作
var _default = {
  methods: {
    handleClick: function handleClick() {
      this.$emit('click');
    },
    handleMaskTouchmove: function handleMaskTouchmove(e) {
      this.$emit('touchmove', e);

      if (this.preventDefaultTouchmove) {
        e.cancelable && e.preventDefault();
      }
    },

    /**
     * show event.
     *
     * @event show
     */
    show: function show() {
      var dom = this.$refs.mask;
      (0, _domUtil.clearDomTransition)(dom);
      dom.style.zIndex = this.zIndex;
      dom.style.opacity = 0;
      dom.style.height = this.height;
      dom.offsetHeight;
      (0, _domUtil.addDomTransition)(dom, this.transitionOpts.showTransition);
      dom.style.opacity = 1;
    },

    /**
     * hide event.
     *
     * @event hide
     * @param {boolean} animation 默认为true
     */
    hide: function hide() {
      var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var dom = this.$refs.mask;
      (0, _domUtil.clearDomTransition)(dom);

      if (animation) {
        dom.style.opacity = 1;
        dom.offsetHeight;
        (0, _domUtil.addDomTransition)(dom, this.transitionOpts.hideTransition);
      }

      dom.style.opacity = 0;
      setTimeout(function () {
        dom.style.zIndex = -1;
        dom.style.height = 0;
      }, 300);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"mask":"mask__2kIt5"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"zIndex": {"type": [Number,String],"default": -1},"width": {"type": String,"default": "100%"},"height": {"type": String,"default": "1500px"},"backgroundColor": {"type": String,"default": "rgba(0, 0, 0, .5)"},"transitionOpts": {"type": Object,"default": function () { return {"showTransition": "height,opacity .3s cubic-bezier(0.42, 0, 0.52, 1)","hideTransition": "height,opacity .3s cubic-bezier(0, 0, 0.3, 1)"}; }},"preventDefaultTouchmove": {"type": Boolean,"default": true},"touchmove": Function,"click": Function};
            obj.components = {"c-transition": require("../Motion/Transition")};

            
            

            


            
            obj.data = function () {
                return {"mZIndex": -1};
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
    