
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-image-viewer-zoom__2VPtb"},[_vm._t("default")],2)},
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

var _touchHelper = _interopRequireDefault(require("./asset/js/touch-helper.js"));

var _animateConfig = _interopRequireDefault(require("./asset/js/animate-config.js"));

var _animate = require("./asset/js/animate.js");

var _util = _interopRequireDefault(require("./asset/js/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var EventType = _touchHelper["default"].EventType;
var SWIPE_DOWN_DISTANCE = 123;
var _default = {
  mounted: function mounted() {
    var _this = this;

    this.helper = _touchHelper["default"].create(this.$el); // 单击

    this.helper.on(EventType.TAP, function (touchEvent) {
      _this.onTap(touchEvent);
    }); // 双击

    this.helper.on(EventType.DOUBLE_TAP, function (touchEvent) {
      _this.onDoubleTap(touchEvent);
    }); // 滑动

    this.helper.on(EventType.MOVE, function (touchEvent) {
      if (touchEvent.isFinished) {
        _this.onMoveEnd(touchEvent);
      } else {
        _this.onMove(touchEvent);
      }
    }); // pinch手势

    this.helper.on(EventType.PINCH, function (touchEvent) {
      if (touchEvent.isFinished) {
        _this.onPinchEnd(touchEvent);
      } else {
        _this.onPinch(touchEvent);
      }
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.helper.destroy();
  },
  watch: {
    isZoomed: function isZoomed(newval) {
      this.store.set('zoom.isZoomed', this.isZoomed);
      this.$emit('zoom-change', newval);
    },
    isAnimating: function isAnimating(newval) {
      if (newval) {
        // 动画过程中暂停事件响应
        this.helper.pause();
      } else {
        // 动画之后恢复事件响应
        this.helper.resume();
      }
    },
    isSwipingDown: function isSwipingDown(newval) {
      if (newval) {
        this.$emit('zoom-swipe-down-start');
      }
    },
    isCurrent: function isCurrent(newval) {
      if (newval) {
        this.store.set('zoom.isZoomed', this.isZoomed);
        this.store.set('zoom.needCancelMove', this.needCancelMove);
        this.updateBoundaryStatus();
      }
    },
    target: function target(newval) {
      var _newval$position = newval.position,
          left = _newval$position.left,
          top = _newval$position.top,
          width = _newval$position.width,
          height = _newval$position.height;
      this.scale = 1;
      this.lastScale = 1;
      this.isZoomed = false;
      this.isLongImage = !!newval.isLongImage; // 更新scale参数

      if (width < height) {
        this.maxScale = this.innerWidth * 6 / width;
        this.fixedScale = this.innerWidth * 3.5 / width;
      } else {
        this.maxScale = this.innerHeight * 3.5 / height;
        this.fixedScale = this.innerHeight * 2 / height;
      } // 记录target位置


      this.targetBounding = {
        left: left,
        top: top,
        width: width,
        height: height,
        right: left + width,
        bottom: top + height
      }; // 记录target transform状态

      this.targetTransform = {
        origin: false,
        translate: {
          x: 0,
          y: 0
        }
      };
    },
    targetBounding: function targetBounding(newval) {
      if (this.isCurrent) {
        this.updateBoundaryStatus();
      }
    },
    needCancelMove: function needCancelMove(newval) {
      if (this.isCurrent) {
        this.store.set('zoom.needCancelMove', newval);
      }
    }
  },
  methods: {
    onMove: function onMove(touchEvent) {
      if (!this.isZoomed && !this.isLongImage) {
        return;
      }

      var _touchEvent$delta = touchEvent.delta,
          x = _touchEvent$delta.x,
          y = _touchEvent$delta.y;
      var _touchEvent$delta$fir = touchEvent.delta.first,
          firstX = _touchEvent$delta$fir.x,
          firstY = _touchEvent$delta$fir.y;
      var _this$targetBounding = this.targetBounding,
          left = _this$targetBounding.left,
          right = _this$targetBounding.right,
          top = _this$targetBounding.top,
          bottom = _this$targetBounding.bottom,
          width = _this$targetBounding.width,
          height = _this$targetBounding.height;
      var borderDistance = this.easySwipe ? 20 : 2; // 翻页

      if ((left > -borderDistance && firstX > 0 || right < this.innerWidth + borderDistance && firstX < 0) && this.isHorizonalSwipe(firstX, firstY)) {
        this.isSwipingHorizonal = true; // 禁止反向滑动

        if (firstX * x < 0) {
          touchEvent.cancel();
        }

        return;
      } // 上拉


      if (this.hasSecondScreen && bottom < window.innerHeight + 2 && firstY < 0 && this.isVerticalSwipe(firstX, firstY)) {
        touchEvent.cancel();
        this.$emit('zoom-swipe-up-move', y);
        this.isSwipingUp = true;
        return;
      } // 下拉


      if (top > -2 && firstY > 0 && (this.isVerticalSwipe(firstX, firstY) || this.target.isLongImage && !this.isZoomed)) {
        touchEvent.cancel();
        this.swipeDownTarget(touchEvent);
        this.isSwipingDown = true;
        return;
      } // 拖拽当前图片
      // 取消事件冒泡


      touchEvent.cancel(); // 对 放大宽度=屏幕宽 或 放大高度=屏幕高 做特殊处理

      if (Math.abs(width - this.innerWidth) < 2 && Math.abs(firstY) > Math.abs(firstX)) {
        x = 0;
      } else if (Math.abs(height - this.innerHeight) < 2 && Math.abs(firstX) > Math.abs(firstY)) {
        y = 0;
      } // 离开边缘加阻力


      if (x > 0 && left < 1 && left + x > 0) {
        x = -left + 0.3 * (left + x);
      } else if (x < 0 && right > this.innerWidth - 1 && right + x < this.innerWidth) {
        x = this.innerWidth - right + 0.3 * (right + x - this.innerWidth);
      }

      if (y > 0 && top < 1 && top + y > 0) {
        y = -top + 0.3 * (top + y);
      } else if (y < 0 && bottom > this.innerHeight - 1 && bottom + y < this.innerHeight) {
        y = this.innerHeight - bottom + 0.3 * (bottom + y - this.innerHeight);
      } // 记录偏移量


      this.targetTransform.translate = {
        x: x,
        y: y
      };

      _util["default"].setCss(this.target.el, {
        transform: "translate3d(".concat(x, "px, ").concat(y, "px, 0)")
      });
    },
    onMoveEnd: function onMoveEnd(touchEvent) {
      var _this2 = this;

      if (!this.isZoomed && !this.isLongImage) {
        return;
      } // 翻页


      if (this.isSwipingHorizonal) {
        this.isSwipingHorizonal = false;
        return;
      } // 上拉


      if (this.isSwipingUp) {
        touchEvent.cancel();
        this.isSwipingUp = false;
        return;
      } // 下拉


      if (this.isSwipingDown) {
        touchEvent.cancel(); // 退场

        if (touchEvent.delta.y > SWIPE_DOWN_DISTANCE || !this.isZoomed && this.target.isLongImage && touchEvent.delta.y > 10) {
          // TODO 看一下能不能优化
          this.updateTargetStyle();
          this.$emit('zoom-swipe-down-end');
        } // 恢复原来位置
        else {
            (0, _animate.cssAnimate)(this.target.el, {
              transform: 'none'
            }, {
              duration: _animateConfig["default"].duration.swipeDownCancel,
              ease: _animateConfig["default"].transition['ease-in-out']
            }).then(function () {
              _this2.isAnimating = false;
            });
            this.isAnimating = true;
            this.$emit('zoom-swipe-down-cancel');
          }

        this.isSwipingDown = false;
        return;
      } // 拖拽当前图片
      // 取消事件冒泡


      touchEvent.cancel(); // 更新位置信息

      var _this$targetTransform = this.targetTransform.translate,
          x = _this$targetTransform.x,
          y = _this$targetTransform.y;
      this.targetBounding.left += x;
      this.targetBounding.right += x;
      this.targetBounding.top += y;
      this.targetBounding.bottom += y; // 回弹

      var needKickBack = this.autoKickBack({
        duration: _animateConfig["default"].duration.dragKickBack
      });

      if (needKickBack) {
        return;
      } // 调整位置


      if (this.adjustTargetPosition(true)) {
        return;
      } // 惯性滑动降级


      if (_util["default"].animationDowngrade) {
        this.updateTargetStyle();
      } else {
        this.autoMove(touchEvent);
      }
    },
    onTap: function onTap(touchEvent) {
      touchEvent.cancel();
      this.$emit('zoom-tap');
    },
    onDoubleTap: function onDoubleTap(touchEvent) {
      var _this3 = this;

      touchEvent.cancel();

      if (!this.isReady) {
        return;
      } // 恢复


      if (this.lastScale !== 1) {
        // 缩小到原位
        (0, _animate.scaleImage)(this.target.el, this.target.position, function () {
          _this3.recoverTargetStyle();

          _this3.$nextTick(function () {
            _this3.isAnimating = false;
          });
        }, {
          duration: _animateConfig["default"].duration.zoomOut,
          ease: _animateConfig["default"].transition['ease-in-out2']
        });
        this.isAnimating = true;
        this.scale = 1;
      } // 放大
      else {
          var scale = 2.5;
          var origin = touchEvent.points.center; // 计算放大倍数和中心

          var _this$targetBounding2 = this.targetBounding,
              left = _this$targetBounding2.left,
              top = _this$targetBounding2.top,
              width = _this$targetBounding2.width,
              height = _this$targetBounding2.height;

          if (width * 2 <= this.innerWidth) {
            scale = this.innerWidth / width;
            origin = {
              x: this.innerWidth / 2,
              y: origin.y
            };
          } else if (height * 2 <= this.innerHeight) {
            scale = this.innerHeight / height;
            origin = {
              x: origin.x,
              y: this.innerHeight / 2
            };
          }

          var _origin = origin,
              x = _origin.x,
              y = _origin.y;
          x = 100 * (x - left) / width;
          y = 100 * (y - top) / height; // 如果在图片外部点击，默认改为中心点放大
          // 如果是小图，默认改为中心点放大

          if (x < 0 || x > 100 || y < 0 || y > 100 || this.target.isSmallImage) {
            x = 50;
            y = 50;
          }

          _util["default"].setCss(this.target.el, {
            'transform-origin': "".concat(x, "% ").concat(y, "%")
          });

          (0, _animate.cssAnimate)(this.target.el, {
            transform: "scale3d(".concat(scale, ", ").concat(scale, ", 1)")
          }, {
            duration: _animateConfig["default"].duration.zoomIn,
            ease: _animateConfig["default"].transition['ease-in-out2']
          }).then(function () {
            _this3.updateTargetStyle();

            _this3.$nextTick(function () {
              _this3.isAnimating = false;
            });
          });
          this.isAnimating = true;
          this.scale = scale;
        }

      this.lastScale = this.scale;
      this.isZoomed = this.scale !== 1;
    },
    onPinch: function onPinch(touchEvent) {
      touchEvent.cancel();

      if (!this.isReady) {
        return;
      }

      var _touchEvent$points$ce = touchEvent.points.center,
          x = _touchEvent$points$ce.x,
          y = _touchEvent$points$ce.y;
      var _this$targetBounding3 = this.targetBounding,
          left = _this$targetBounding3.left,
          top = _this$targetBounding3.top,
          width = _this$targetBounding3.width,
          height = _this$targetBounding3.height;
      var scale = touchEvent.delta.zoom * this.lastScale;
      var beforeMaxScale = this.fixedScale;
      var beforeMinScale = 1; // 接近最大时增加阻力，降级情况

      if (scale > beforeMaxScale && _util["default"].animationDowngrade) {
        scale = beforeMaxScale;
      } // 接近最大时增加阻力，不降级情况
      else if (scale > beforeMaxScale) {
          scale = beforeMaxScale + 0.1 * (beforeMaxScale / this.lastScale) * (scale - beforeMaxScale);
        } // 接近最小时增加阻力
        else if (scale < beforeMinScale) {
            scale = beforeMinScale - 0.56 * (1 - scale / beforeMinScale);
          } // scale限制


      this.scale = Math.max(this.minScale, Math.min(this.maxScale, scale));
      scale = this.scale / this.lastScale; // 设置origin

      x = 100 * (x - left) / width;
      y = 100 * (y - top) / height; // 设置transform属性

      var props = {
        transform: "scale3d(".concat(scale, ", ").concat(scale, ", 1)")
      };

      if (!this.targetTransform.origin) {
        this.targetTransform.origin = true;
        props['transform-origin'] = "".concat(x, "% ").concat(y, "%");
      }

      _util["default"].setCss(this.target.el, props);

      this.isZoomed = true;
    },
    onPinchEnd: function onPinchEnd(touchEvent) {
      var _this4 = this;

      if (!this.isReady) {
        return;
      }

      var needReset = false;
      var needAnimation = false;

      if (this.scale <= 1) {
        this.scale = 1;
        needReset = true;
        needAnimation = true;
      } else if (this.scale > this.fixedScale) {
        this.scale = this.fixedScale;
        needAnimation = true;
      }

      if (needAnimation) {
        if (needReset) {
          this.updateTargetStyle();
          this.$nextTick(function () {
            (0, _animate.scaleImage)(_this4.target.el, _this4.target.position, function () {
              _this4.recoverTargetStyle();

              _this4.$nextTick(function () {
                _this4.isAnimating = false;
              });
            }, {
              ease: _animateConfig["default"].transition['ease-in-out2'],
              duration: _animateConfig["default"].duration.pinchKickBack
            });
          });
        } else {
          var scale = this.scale / this.lastScale;
          (0, _animate.cssAnimate)(this.target.el, {
            transform: "scale3d(".concat(scale, ", ").concat(scale, ", 1)")
          }, {
            duration: _animateConfig["default"].duration.pinchKickBack,
            ease: _animateConfig["default"].transition['ease-in-out2']
          }).then(function () {
            _this4.updateTargetStyle();

            _this4.$nextTick(function () {
              _this4.isAnimating = false;
            });
          });
        }

        this.isAnimating = true;
      } else {
        this.updateTargetStyle();
        this.adjustTargetPosition();
      }

      this.lastScale = this.scale;
      this.isZoomed = this.scale !== 1;
    },
    // 拖拽
    isHorizonalSwipe: function isHorizonalSwipe(x, y) {
      if (this.easySwipe) {
        // 横向位移较大
        return Math.abs(y) <= Math.abs(x);
      } // tan20度 = 0.364


      return Math.abs(y) <= Math.abs(x) * 0.364;
    },
    isVerticalSwipe: function isVerticalSwipe(x, y) {
      // tan20度 = 0.364
      return Math.abs(x) <= Math.abs(y) * 0.364;
    },
    // 回弹
    autoKickBack: function autoKickBack(_ref) {
      var _this5 = this;

      var _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 100 : _ref$duration,
          _ref$delta = _ref.delta,
          delta = _ref$delta === void 0 ? null : _ref$delta;
      // 计算元素位置
      var _this$targetBounding4 = this.targetBounding,
          left = _this$targetBounding4.left,
          right = _this$targetBounding4.right,
          top = _this$targetBounding4.top,
          bottom = _this$targetBounding4.bottom,
          width = _this$targetBounding4.width,
          height = _this$targetBounding4.height;
      var moveX = 0;
      var moveY = 0;
      var offsetX = 0;
      var offsetY = 0; // 边界检查

      var needKickBack = false;
      var needKickBackForX = false;
      var needKickBackForY = false;

      if (width + 1 >= this.innerWidth) {
        if (left > 1) {
          this.targetTransform.translate.x += -left;
          needKickBack = true;
          needKickBackForX = true;
          offsetX = left;
        } else if (right + 1 < this.innerWidth) {
          this.targetTransform.translate.x += this.innerWidth - right;
          needKickBack = true;
          needKickBackForX = true;
          offsetX = this.innerWidth - right;
        }

        if (height + 1 < this.innerHeight) {
          // 调整高度居中
          moveY = this.innerHeight / 2 - (top + height / 2);
        }
      }

      if (height + 1 >= this.innerHeight) {
        if (bottom + 1 < this.innerHeight) {
          this.targetTransform.translate.y += this.innerHeight - bottom;
          needKickBack = true;
          needKickBackForY = true;
          offsetY = this.innerHeight - bottom;
        } else if (top > 1) {
          this.targetTransform.translate.y += -top;
          needKickBack = true;
          needKickBackForY = true;
          offsetY = top;
        }

        if (width + 1 < this.innerWidth) {
          // 调整宽度居中
          moveX = this.innerWidth / 2 - (left + width / 2);
        }
      } // 回弹


      if (needKickBack) {
        if (Math.abs(moveX) + Math.abs(moveY) > 0) {
          this.targetTransform.translate.x += moveX;
          this.targetTransform.translate.y += moveY;
        }

        if (delta) {
          this.adjustKickBack({
            delta: delta,
            needKickBackForX: needKickBackForX,
            needKickBackForY: needKickBackForY
          });
        } // 计算时长


        if (typeof duration === 'function') {
          duration = duration.call(this, offsetX, offsetY);
        }

        var _this$targetTransform2 = this.targetTransform.translate,
            x = _this$targetTransform2.x,
            y = _this$targetTransform2.y;
        (0, _animate.cssAnimate)(this.target.el, {
          transform: "translate3d(".concat(x, "px, ").concat(y, "px, 0)")
        }, {
          duration: duration,
          ease: _animateConfig["default"].transition['ease-in-out5']
        }).then(function () {
          _this5.updateTargetStyle();

          _this5.$nextTick(function () {
            _this5.isAnimating = false;
          });
        });
        this.isAnimating = true;
      }

      return needKickBack;
    },
    // 回弹优化
    adjustKickBack: function adjustKickBack(_ref2) {
      var delta = _ref2.delta,
          needKickBackForX = _ref2.needKickBackForX,
          needKickBackForY = _ref2.needKickBackForY;
      var _this$targetBounding5 = this.targetBounding,
          left = _this$targetBounding5.left,
          right = _this$targetBounding5.right,
          top = _this$targetBounding5.top,
          bottom = _this$targetBounding5.bottom;
      var deltaX = delta.deltaX,
          deltaY = delta.deltaY;

      if (!needKickBackForX && Math.abs(deltaX) > 1) {
        // 不滑出窗口
        if (deltaX > 0 && left + deltaX > 0) {
          deltaX = Math.max(0, -left);
        } else if (deltaX < 0 && right + deltaX < this.innerWidth) {
          deltaX = Math.min(0, this.innerWidth - right);
        }

        this.targetTransform.translate.x += deltaX;
      }

      if (!needKickBackForY && Math.abs(deltaY) > 1) {
        // 不滑出窗口
        if (deltaY > 0 && top + deltaY > 0) {
          deltaY = Math.max(0, -top);
        } else if (deltaY < 0 && bottom + deltaY < this.innerHeight) {
          deltaY = Math.min(0, this.innerHeight - bottom);
        }

        this.targetTransform.translate.y += deltaY;
      }
    },
    // 调整居中或贴边
    adjustTargetPosition: function adjustTargetPosition(needUpdateTarget) {
      var _this6 = this;

      // 判断target宽高和位移
      var _this$targetBounding6 = this.targetBounding,
          left = _this$targetBounding6.left,
          right = _this$targetBounding6.right,
          top = _this$targetBounding6.top,
          bottom = _this$targetBounding6.bottom,
          width = _this$targetBounding6.width,
          height = _this$targetBounding6.height;
      var moveX = 0;
      var moveY = 0;
      var needAnimation = false;

      if (height + 2 < this.innerHeight && width + 2 < this.innerWidth) {
        // 调整高度居中
        moveY = this.innerHeight / 2 - (top + height / 2); // 调整宽度居中

        moveX = this.innerWidth / 2 - (left + width / 2);
      } else if (height + 2 < this.innerHeight) {
        // 调整高度居中
        moveY = this.innerHeight / 2 - (top + height / 2);

        if (left > 1) {
          moveX = -left;
        } else if (right + 1 < this.innerWidth) {
          moveX = this.innerWidth - right;
        }
      } else if (width + 2 < this.innerWidth) {
        // 调整宽度居中
        moveX = this.innerWidth / 2 - (left + width / 2);

        if (top > 1) {
          moveY = -top;
        } else if (bottom + 1 < this.innerHeight) {
          moveY = this.innerHeight - bottom;
        }
      } else {
        // 保持贴边
        if (left > 1) {
          moveX = -left;
        } else if (right + 1 < this.innerWidth) {
          moveX = this.innerWidth - right;
        }

        if (top > 1) {
          moveY = -top;
        } else if (bottom + 1 < this.innerHeight) {
          moveY = this.innerHeight - bottom;
        }
      }

      if (Math.abs(moveX) + Math.abs(moveY) > 2) {
        needAnimation = true;
      }

      if (needAnimation) {
        this.targetBounding.left = left + moveX;
        this.targetBounding.right = right + moveX;
        this.targetBounding.top = top + moveY;
        this.targetBounding.bottom = bottom + moveY;

        if (needUpdateTarget) {
          this.updateTargetStyle();
        }

        this.$nextTick(function () {
          (0, _animate.cssAnimate)(_this6.target.el, {
            transform: "translate3d(".concat(moveX, "px, ").concat(moveY, "px, 0)")
          }, {
            duration: _animateConfig["default"].duration.dragKickBack,
            ease: _animateConfig["default"].transition['ease-in-out5']
          }).then(function () {
            _this6.updateTargetStyle();

            _this6.$nextTick(function () {
              _this6.isAnimating = false;
            });
          });
        });
        this.isAnimating = true;
      }

      return needAnimation;
    },
    // 惯性滑动
    autoMove: function autoMove(touchEvent) {
      var _this7 = this;

      var _this$targetTransform3 = this.targetTransform.translate,
          x = _this$targetTransform3.x,
          y = _this$targetTransform3.y;
      var _touchEvent$delta$fir2 = touchEvent.delta.first,
          firstX = _touchEvent$delta$fir2.x,
          firstY = _touchEvent$delta$fir2.y;
      var _touchEvent$delta$las = touchEvent.delta.last,
          lastX = _touchEvent$delta$las.x,
          lastY = _touchEvent$delta$las.y,
          distance = _touchEvent$delta$las.distance; // 对 放大宽度=屏幕宽 或 放大高度=屏幕高 做特殊处理

      var _this$targetBounding7 = this.targetBounding,
          width = _this$targetBounding7.width,
          height = _this$targetBounding7.height;

      if (Math.abs(width - this.innerWidth) < 2 && Math.abs(firstY) > Math.abs(firstX)) {
        lastX = 0;
        distance = Math.abs(lastY);
      } else if (Math.abs(height - this.innerHeight) < 2 && Math.abs(firstX) > Math.abs(firstY)) {
        lastY = 0;
        distance = Math.abs(lastX);
      } // 基于最后一次滑动计算惯性


      var duration = Math.min(1000, _animateConfig["default"].duration.dragAutoMove * distance);
      var timeRatio = 64;
      var moveTimes = duration / timeRatio;
      var moveX = lastX * moveTimes;
      var moveY = lastY * moveTimes; // 限制离开边界的距离

      var boundaryDistance = 33;
      var ret = this.adjustAutoMoveWithBoundary({
        boundaryDistance: boundaryDistance,
        timeRatio: timeRatio,
        moveX: moveX,
        moveY: moveY,
        lastX: lastX,
        lastY: lastY
      }); // 计算回弹动画中不回弹方向的delta

      var deltaX = 0;
      var deltaY = 0;

      if (ret.isUpdated) {
        // 更新delta
        deltaX = moveX - ret.moveX;
        deltaY = moveY - ret.moveY; // 更新位移和时长

        duration = ret.duration;
        moveX = ret.moveX;
        moveY = ret.moveY;
      } // 限制delta最大值


      var maxDelta = boundaryDistance * 3;

      if (Math.abs(deltaX) > maxDelta) {
        deltaX = deltaX > 0 ? maxDelta : -maxDelta;
      }

      if (Math.abs(deltaY) > maxDelta) {
        deltaY = deltaY > 0 ? maxDelta : -maxDelta;
      } // 更新位置信息


      this.targetBounding.left += moveX;
      this.targetBounding.right += moveX;
      this.targetBounding.top += moveY;
      this.targetBounding.bottom += moveY;
      x += moveX;
      y += moveY;
      this.targetTransform.translate = {
        x: x,
        y: y
      };
      (0, _animate.cssAnimate)(this.target.el, {
        transform: "translate3d(".concat(x, "px, ").concat(y, "px, 0)")
      }, {
        duration: duration,
        ease: _animateConfig["default"].transition['ease-out2']
      }).then(function () {
        // 检测是否回弹
        var needKickBack = _this7.autoKickBack({
          duration: function duration() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            x = Math.max(x, y);
            return _animateConfig["default"].duration.autoMoveKickBack - 100 * x / boundaryDistance;
          },
          delta: {
            deltaX: deltaX,
            deltaY: deltaY
          }
        });

        if (!needKickBack) {
          _this7.updateTargetStyle();

          _this7.$nextTick(function () {
            _this7.isAnimating = false;
          });
        }
      });
      this.isAnimating = true;
    },
    // 惯性滑动考虑边界距离
    adjustAutoMoveWithBoundary: function adjustAutoMoveWithBoundary(_ref3) {
      var moveX = _ref3.moveX,
          moveY = _ref3.moveY,
          lastX = _ref3.lastX,
          lastY = _ref3.lastY,
          boundaryDistance = _ref3.boundaryDistance,
          timeRatio = _ref3.timeRatio;
      var _this$targetBounding8 = this.targetBounding,
          left = _this$targetBounding8.left,
          right = _this$targetBounding8.right,
          top = _this$targetBounding8.top,
          bottom = _this$targetBounding8.bottom;
      var xTimes = 0;
      var yTimes = 0;

      if (moveX > 0 && left + moveX > boundaryDistance) {
        moveX = boundaryDistance - left;
        xTimes = moveX / lastX;
      } else if (moveX < 0 && right + moveX < this.innerWidth - boundaryDistance) {
        moveX = this.innerWidth - boundaryDistance - right;
        xTimes = moveX / lastX;
      }

      if (moveY > 0 && top + moveY > boundaryDistance) {
        moveY = boundaryDistance - top;
        yTimes = moveY / lastY;
      } else if (moveY < 0 && bottom + moveY < this.innerHeight - boundaryDistance) {
        moveY = this.innerHeight - boundaryDistance - bottom;
        yTimes = moveY / lastY;
      }

      var ret = {
        isUpdated: false,
        duration: 0,
        moveX: 0,
        moveY: 0
      }; // 调整滑动距离

      if (xTimes || yTimes) {
        var moveTimes = 0;

        if (xTimes && yTimes) {
          moveTimes = Math.min(xTimes, yTimes);
        } else if (xTimes) {
          moveTimes = xTimes;
        } else {
          moveTimes = yTimes;
        }

        ret.duration = Math.round(timeRatio * moveTimes);
        ret.moveX = lastX * moveTimes;
        ret.moveY = lastY * moveTimes;
        ret.isUpdated = true;
      }

      return ret;
    },
    // target相关
    // 下拉操作
    swipeDownTarget: function swipeDownTarget(touchEvent) {
      var _touchEvent$points$st = touchEvent.points.start,
          x1 = _touchEvent$points$st.x,
          y1 = _touchEvent$points$st.y;
      var _touchEvent$points$mo = touchEvent.points.move,
          x2 = _touchEvent$points$mo.x,
          y2 = _touchEvent$points$mo.y;
      var y = touchEvent.delta.y;
      var scale = 1;

      if (y > 0) {
        var distance = y;
        var minScale = 2; // 长图默认状态时下拉

        if (this.isLongImage && this.scale === 1) {
          minScale = 0.3;
        } // 计算方法: 418 / (this.scale - minScale) = distance / (this.scale - scale)


        scale = Math.min(this.scale, Math.max(minScale, this.scale - distance * (this.scale - minScale) / 418));
        scale /= this.scale;
      } // 计算公式
      // (x1 - x0) / width = (x2 - (x0 + moveX)) / (width * scale)
      // (y1 - y0) / height = (y2 - (y0 + moveY)) / (height * scale)
      // moveX =  (x2 - x0) - scale * (x1 - x0)
      // moveY =  (y2 - y0) - scale * (y1 - y0)


      var moveX = x2 - this.targetBounding.left - scale * (x1 - this.targetBounding.left);
      var moveY = y2 - this.targetBounding.top - scale * (y1 - this.targetBounding.top);

      _util["default"].setCss(this.target.el, {
        transform: "translate3d(".concat(moveX, "px, ").concat(moveY, "px, 0) scale(").concat(scale, ", ").concat(scale, ")")
      });

      this.$emit('zoom-swipe-down-move', {
        y: y
      });
    },
    // 更新target样式
    updateTargetStyle: function updateTargetStyle() {
      var _this$target$el$getBo = this.target.el.getBoundingClientRect(),
          left = _this$target$el$getBo.left,
          top = _this$target$el$getBo.top,
          width = _this$target$el$getBo.width,
          height = _this$target$el$getBo.height,
          right = _this$target$el$getBo.right,
          bottom = _this$target$el$getBo.bottom;

      var props = {
        left: left + 'px',
        top: top + 'px',
        width: width + 'px',
        height: height + 'px'
      };

      _util["default"].setCss(this.target.el, Object.assign({}, props, {
        'transform': '',
        'transform-origin': ''
      }));

      this.targetBounding = {
        left: left,
        top: top,
        width: width,
        height: height,
        right: right,
        bottom: bottom
      };
      this.targetTransform.origin = false;
      this.targetTransform.translate = {
        x: 0,
        y: 0
      };
      this.$emit('zoom-target-update', {
        props: props
      });
    },
    // 恢复target原来样式
    recoverTargetStyle: function recoverTargetStyle() {
      var _this$target$position = this.target.position,
          left = _this$target$position.left,
          top = _this$target$position.top,
          width = _this$target$position.width,
          height = _this$target$position.height;
      var props = {
        left: left + 'px',
        top: top + 'px',
        width: width + 'px',
        height: height + 'px'
      };

      _util["default"].setCss(this.target.el, {
        'transform': '',
        'transform-origin': ''
      });

      this.targetBounding = {
        left: left,
        top: top,
        width: width,
        height: height,
        right: left + width,
        bottom: top + height
      };
      this.$emit('zoom-target-update', {
        props: props
      });
    },
    // 更新临近边缘状态
    updateBoundaryStatus: function updateBoundaryStatus() {
      if (!this.isZoomed) {
        this.store.set('zoom.nearLeftBoundary', true);
        this.store.set('zoom.nearRightBoundary', true);
        this.store.set('zoom.nearBottomBoundary', true);
        this.isNearBoundary = true;
      } else {
        var nearLeftBoundary = this.targetBounding.left > -2;
        var nearRightBoundary = this.targetBounding.right < this.innerWidth + 2;
        var nearBottomBoundary = this.targetBounding.bottom < this.innerHeight + 2;
        this.store.set('zoom.nearLeftBoundary', nearLeftBoundary);
        this.store.set('zoom.nearRightBoundary', nearRightBoundary);
        this.store.set('zoom.nearBottomBoundary', nearBottomBoundary);
        this.isNearBoundary = nearLeftBoundary || nearRightBoundary || nearBottomBoundary;
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cImageViewerZoom":"c-image-viewer-zoom__2VPtb"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"isReady": {"type": Boolean,"default": false},"isCurrent": {"type": Boolean,"default": false},"innerWidth": {"type": Number,"required": true},"innerHeight": {"type": Number,"required": true},"target": {"type": Object,"required": true},"store": {"type": Object,"default": function () { return {}; }},"hasSecondScreen": {"type": Boolean,"default": false},"easySwipe": {"type": Boolean,"default": false}};
            obj.components = {};

            
            

            
    var computed = obj.computed || {};
    computed["needCancelMove"] = function () { return (this["isAnimating"]||((this["isNearBoundary"]===false)&&this["isZoomed"])); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"isZoomed": false,"isAnimating": false,"isSwipingHorizonal": false,"isSwipingDown": false,"isSwipingUp": false,"isLongImage": false,"isNearBoundary": false,"maxScale": 3,"minScale": 0.5,"fixedScale": 2,"lastScale": 1,"scale": 1,"targetBounding": {},"targetTransform": {}};
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
    