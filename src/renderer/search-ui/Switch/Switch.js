
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container__6rK_I"},[_c('div',{ref:"switchBox",staticClass:"main__3_B0o WA_LOG_BTN",class:[
            _vm.innerValue ? _vm.$style.on : '',
            _vm.showMotion ? _vm.$style.transit : ''
        ],attrs:{"aria-checked":_vm.innerValue,"role":"checkbox"},on:{"touchstart":_vm.onTouch,"touchmove":_vm.onDrag,"touchend":_vm.onDrop}},[_c('div',{ref:"slider",staticClass:"slider__15QAu"},[_vm._v(" ")]),_vm._v(" "),_c('div',{ref:"shadow",staticClass:"shadow__1oJP-"},[_vm._v(" ")])])])},
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

/**
 * @file switch
 * @author toxni <liyuhang01@baidu.com>
 */
var _default = {
  beforeUpdate: function beforeUpdate() {
    this.showMotion = this.transition;
  },
  methods: {
    xor: function xor(a, b) {
      return !!a !== !!b;
    },
    onSwitch: function onSwitch() {
      this.showMotion = this.transition;
      this.changeShadowTrans(this.innerValue);
      this.innerValue = !this.innerValue;
      /**
       * 点击切换
       *
       * @event change
       * @property {string} param1 当前开关value
       */

      this.$emit('change', this.innerValue);
    },
    onTouch: function onTouch(e) {
      this.dragStartX = e.targetTouches[0].clientX;
    },
    onDrag: function onDrag(e) {
      e.preventDefault();
      this.showMotion = false;
      var dragDistanceX = e.targetTouches[0].clientX - this.dragStartX;
      var dragDirection = dragDistanceX > 0;

      if (this.innerValue) {
        dragDistanceX = dragDistanceX + 16;
      } else {
        dragDistanceX = dragDistanceX;
      }

      dragDistanceX = dragDirection && dragDistanceX >= 18 ? 18 - 4.5 : dragDistanceX;
      dragDistanceX = !dragDirection && dragDistanceX <= 1 ? 1 : dragDistanceX;
      dragDistanceX = dragDistanceX.toFixed(2);
      var dragProgress = (this.innerValue ? 1 - dragDistanceX / 18 : dragDistanceX / 18).toFixed(2);
      var dragValue = this.xor(this.innerValue, dragProgress > 0.5);
      var slider = this.$refs.slider;
      var shadow = this.$refs.shadow;
      var switchBox = this.$refs.switchBox;
      slider.style.transition = '0.3s';
      slider.style.left = dragDistanceX - 1.5 + 'px';
      slider.style.width = '24px';
      shadow.style.transition = 'transform 0.18s ease 0s';
      shadow.style.transform = 'scale(0)';
      shadow.style.transition = '';
      switchBox.style.background = dragValue ? '#38f' : '#e5e5e5';
      switchBox.style.borderColor = dragValue ? '#38f' : 'transparent';
      this.dragDistanceX = dragDistanceX;
      this.dragProgress = dragProgress;
      this.dragValue = dragValue;
    },
    onDrop: function onDrop(e) {
      if (!this.dragDistanceX) {
        this.onSwitch();
        return void 0;
      }

      var slider = this.$refs.slider;
      var shadow = this.$refs.shadow;
      var switchBox = this.$refs.switchBox;
      slider.style.left = '';
      slider.style.transition = 'left 0.18s ease 0s, width 0.18s ease 0s';
      slider.style.width = '';
      shadow.style.transform = '';
      switchBox.style.background = '';
      switchBox.style.borderColor = '';
      this.showMotion = true;

      if (this.innerValue !== this.dragValue) {
        this.innerValue = this.dragValue;
        this.$emit('change', this.innerValue);
      }

      this.dragStartX = 0;
      this.dragDistanceX = 0;
      this.dragProgress = 0;
      setTimeout(function () {
        slider.style.transition = '';
      }, 180);
    },
    changeShadowTrans: function changeShadowTrans(bool) {
      if (!this.transition) {
        return void 0;
      }

      var shadow = this.$refs.shadow;
      shadow.style.transition = this.innerValue ? 'transform 0.6s cubic-bezier(0.28, 0.38, 0.4, 1) 0s' : 'transform 0.3s cubic-bezier(0.28, 0.38, 0.4, 1) 0s';
    }
  },
  watch: {
    value: function value(n) {
      if (this.innerValue !== n) {
        this.changeShadowTrans(n);
        this.innerValue = n;
        this.$emit('change', this.innerValue);
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"container":"container__6rK_I","main":"main__3_B0o","slider":"slider__15QAu","shadow":"shadow__1oJP-","shadowHalf":"shadow-half__23mW4","transit":"transit__2FLnH","shadowTransit":"shadow-transit__1Be9t","on":"on__ZQtx5"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"value": {"type": Boolean,"required": true},"transition": {"type": Boolean,"default": true}};
            obj.components = {};

            
            

            


            
            obj.data = function () {
                return {"innerValue": this["value"],"showMotion": true,"dragStartX": 0,"dragDistanceX": 0,"dragProgress": 0,"dragValue": false};
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
    