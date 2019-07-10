
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"carouselFrame",staticClass:"carousel-frame__LQRvW",on:{"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove,"touchend":_vm.handleTouchEnd}},[_c('div',{ref:"carouselLayout",staticClass:"carousel-layout__3hst6",style:({
            '-webkit-transform': 'translateX(' + _vm.disX + 'px) scale(1)',
            'transform': 'translateX(' + _vm.disX + 'px) scale(1)'
        })},_vm._l((_vm.slotsLength),function(i,index){return _c('div',{key:index,staticClass:"carousel-item__2hZAf"},[_vm._t('carouselItem' + index)],2)})),_vm._v(" "),_c('div',{staticClass:"indicator__3YUiG"},[_c('c-indicator',{attrs:{"length":_vm.slotsLength,"cur-index":_vm.activeIndex}})],1)])},
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

var _orientationMixin = _interopRequireDefault(require("../util/orientationMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  mixins: [_orientationMixin["default"]],
  mounted: function mounted() {
    // 计算横滑的宽度
    this.width = this.$refs.carouselFrame.offsetWidth;
  },
  render: function render() {
    var _this = this;

    var vnodes = this.$slots["default"];

    if (vnodes && vnodes.length) {
      vnodes.forEach(function (vnode, index) {
        // 放入指定 slot
        _this.$slots['carouselItem' + index] = vnode;
      }); // 设置 slots 长度

      this.slotsLength = vnodes.length;
    }

    return this.$super.render();
  },
  methods: {
    // 横竖屏切换监听
    mediaQueryOrientationListenerMixin: function mediaQueryOrientationListenerMixin(mediaQueryList) {
      var _this2 = this;

      // 这里的延迟是为了计算出准确的翻转手机后的 width、height
      setTimeout(function () {
        // 计算横滑的宽度
        _this2.width = _this2.$refs.carouselFrame.offsetWidth;
      }, 500);
    },
    handleTouchStart: function handleTouchStart(e) {
      // 滑动保护
      if (this.slideProtect) {
        return;
      }

      e = e || event; // tounches 类数组，等于1时表示此时有只有一只手指在触摸屏幕

      if (e.changedTouches.length !== 1) {
        return;
      } // 记录开始位置


      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
    },
    handleTouchMove: function handleTouchMove(e) {
      // 滑动保护
      if (this.slideProtect) {
        e.cancelable && e.preventDefault();
        e.stopPropagation();
        return true;
      }

      e = e || event; // tounches 类数组，等于1时表示此时有只有一只手指在触摸屏幕

      if (e.changedTouches.length !== 1) {
        return true;
      } // 滑动时距离浏览器左侧实时距离


      this.moveX = e.touches[0].clientX;
      this.moveY = e.touches[0].clientY; // 起始位置减去 实时的滑动的距离，得到手指实时偏移距离

      var disX = this.moveX - this.startX;
      var disY = this.moveY - this.startY; // 增加不循环时对手势的判断

      if (this.loopTouchJudgement(disX)) {
        return true;
      } // 每次滑动的时候都计算方向


      var direction = this.getDirection(disX, disY); // 水平滑动时阻止点击事件透传；手百兼容

      if (direction === 3 || direction === 4) {
        e.cancelable && e.preventDefault();
        e.stopPropagation();
        this.disX = disX - this.activeIndex * this.width;
      }

      return true;
    },
    handleTouchEnd: function handleTouchEnd(e) {
      // 滑动保护
      if (this.slideProtect) {
        return;
      }

      e = e || event; // tounches 类数组，等于1时表示此时有只有一只手指在触摸屏幕

      if (e.changedTouches.length !== 1) {
        return;
      }

      this.endX = e.changedTouches[0].clientX;
      this.endY = e.changedTouches[0].clientY;
      var disX = this.endX - this.startX;
      var disY = this.endY - this.startY; // 增加循环时对手势的判断

      if (this.loopTouchJudgement(disX)) {
        return true;
      }

      this.disX = disX;
      this.disY = disY; // 移动的距离大于最小距离

      if (Math.abs(this.disX) > this.minChangeWidth) {
        // 往左移
        if (this.disX > 0) {
          this.activeIndex -= 1;
        } // 往右移
        else {
            this.activeIndex += 1;
          }
      }

      this.disX = -this.activeIndex * this.width; // 打开动画保护

      this.setSlideProtect();
    },
    // 滑动保护
    setSlideProtect: function setSlideProtect() {
      var _this3 = this;

      if (this.slideProtectTimeout) {
        this.clearSlideProtect();
      } // 打开标志位


      this.slideProtect = true; // 延迟动画时间清除滑动保护

      this.slideProtectTimeout = setTimeout(function () {
        _this3.clearSlideProtect();
      }, 300);
    },
    clearSlideProtect: function clearSlideProtect() {
      this.slideProtect = false;

      if (this.slideProtectTimeout) {
        clearTimeout(this.slideProtectTimeout);
        this.slideProtectTimeout = null;
      }
    },
    // 不循环时对手势的判断
    loopTouchJudgement: function loopTouchJudgement(disX) {
      // 如果不循环
      if (!this.loop) {
        // 如果 dix 为负（代表往右划）并且 当前划动项的索引+1后与原始长度相等
        if (disX < 0 && this.activeIndex + 1 === this.slotsLength) {
          // 直接返回
          return true;
        } // 如果 dix 为正（代表往左划）并且 当前划动项的索引为0


        if (disX > 0 && this.activeIndex === 0) {
          // 直接返回
          return true;
        }
      } // 不直接 return


      return false;
    },
    // ** 判断滑动手势方向；对手百做兼容
    // 根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    getDirection: function getDirection(angx, angy) {
      var result = 0; // 如果滑动距离太短

      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
      }

      var angle = this.getAngle(angx, angy);

      if (angle >= -135 && angle <= -45) {
        result = 1;
      } else if (angle > 45 && angle < 135) {
        result = 2;
      } else if (angle >= 135 && angle <= 180 || angle >= -180 && angle < -135) {
        result = 3;
      } else if (angle >= -45 && angle <= 45) {
        result = 4;
      }

      return result;
    },
    // 获得角度
    getAngle: function getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"carouselFrame":"carousel-frame__LQRvW","carouselLayout":"carousel-layout__3hst6","carouselItem":"carousel-item__2hZAf","indicator":"indicator__3YUiG"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"loop": {"type": Boolean,"default": false},"transitionOpts": {"type": Object,"default": function () { return {"animationTime": 300}; }}};
            obj.components = {"c-indicator": require("./Indicator")};

            
            

            


            
            obj.data = function () {
                return {"activeIndex": 0,"slotsLength": 0,"width": 0,"minChangeWidth": 50,"startX": 0,"startY": 0,"moveX": 0,"moveY": 0,"disX": 0,"disY": 0,"slideProtect": false,"slideProtectTimeout": null,"fixLoopTimeout": null};
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
    