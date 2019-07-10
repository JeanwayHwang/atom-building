
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-image-viewer-content-wrapper__1fo2M",style:({
        height: _vm.innerHeight ? _vm.innerHeight + 'px' : '100%'
    }),on:{"touchstart":function($event){_vm.onTouchStart($event, true)},"touchmove":function($event){_vm.onTouchMove($event, true)},"touchend":function($event){_vm.onTouchEnd($event, true)},"touchcancel":function($event){_vm.onTouchEnd($event, true)}}},[_c('div',{ref:"bg",staticClass:"c-image-viewer-content-bg__38DfL"}),_vm._v(" "),_c('div',{ref:"content",staticClass:"c-image-viewer-content__3hSyK",style:({
            transform: _vm.contentTransform,
            webkitTransform: _vm.contentTransform
        })},_vm._l((_vm.state),function(slider,name){return _c('div',{key:name,staticClass:"c-image-viewer-item-wrapper",class:[_vm.classNames[name]],attrs:{"data-name":name}},[(slider.isAd && slider.item.adData)?(_c('c-image-viewer-ad-item',{attrs:{"ad-data":slider.item.adData}})):(_c('c-image-viewer-item',{attrs:{"store":_vm.store,"obj":slider,"is-current":_vm.classNames[name] === 'c-image-viewer-item-current',"is-leaving":_vm.isLeaving,"is-swiping-down":_vm.isSwipingDown,"inner-width":_vm.innerWidth,"inner-height":_vm.innerHeight,"pos-y":_vm.posY,"enter-position":_vm.enterPosition,"leave-position":_vm.leavePosition,"swipe-up-height":_vm.swipeUpHeight,"swipe-up-y":_vm.swipeUpY,"has-second-screen":_vm.hasSecondScreen,"is-second-screen-show":_vm.isSecondScreenShow,"image-clip-type":_vm.imageClipType,"easy-swipe":_vm.easySwipe},on:{"enter-start":_vm.onEnterStart,"enter-end":_vm.onEnterEnd,"leave-start":_vm.onLeaveStart,"leave-end":_vm.onLeaveEnd,"zoom-tap":_vm.onZoomTap,"zoom-swipe-down-start":_vm.onZoomSwipeDownStart,"zoom-swipe-down-move":_vm.onZoomSwipeDownMove,"zoom-swipe-down-end":_vm.onZoomSwipeDownEnd,"zoom-swipe-down-cancel":_vm.onZoomSwipeDownCancel,"swipe-up-end":_vm.onSwipeUpEnd,"swipe-up-down":_vm.onSwipeUpDown,"zoom-swipe-up-end":_vm.onZoomSwipeUpEnd}},[(_vm.classNames[name] === 'c-image-viewer-item-current')?(_c('template',{slot:"anchor"},[_vm._t("anchor")],2)):(_vm._e()),_vm._v(" "),(_vm.classNames[name] === 'c-image-viewer-item-current')?(_c('template',{slot:"secondScreen"},[_vm._t("secondScreen")],2)):(_vm._e())],2))],1)})),_vm._v(" "),(_vm.swipeEndOption.isSwipeEnd)?(_c('div',{ref:"swipeEndTip",staticClass:"c-image-viewer-swipe-end-tip__LrB1B",style:({transform: 'translate3d(' + (_vm.swipeEndTipWidth + _vm.swipeEndMoveX) + 'px, 0, 0)'})},[_vm._t("swipeEndTip",null,{swipeEndMoveX:_vm.swipeEndMoveX})],2)):(_vm._e())])},
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

var _util = _interopRequireDefault(require("./asset/js/util.js"));

var _animateConfig = _interopRequireDefault(require("./asset/js/animate-config.js"));

var _animate = require("./asset/js/animate.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ITEM_CLASS_PREFIX = 'c-image-viewer-item-';
var ITEM_BORDER_WIDTH = 20;
var LEFT_SAFE_DISTANCE = 20;
var RIGHT_SAFE_DISTANCE = 10;
var MIN_SWIPE_DISTANCE = 30;
var MIN_HORIZONAL_DISTANCE = 30;
var MIN_VERTICAL_DISTANCE = 10;
var MIN_VERTICAL_DISTANCE2 = 123;
var MIN_SWIPE_UP_DISTANCE = 5;
var IS_BAIDU_APP = _util["default"].browser.isBaidu;
var _default = {
  render: function render() {
    this.hasSecondScreen = !!this.$slots.secondScreen;
    return this.$super.render();
  },
  mounted: function mounted() {
    // 获取最后一张图后内容的宽度
    if (this.swipeEndOption.isSwipeEnd) {
      this.swipeEndTipWidth = this.$refs.swipeEndTip.offsetWidth;
    }
  },
  watch: {
    isSwipingDown: function isSwipingDown(newVal) {
      if (newVal && !this.isAdShow) {
        this.emitSwipeDownStartEvent();
      }
    },
    isSecondScreenShow: function isSecondScreenShow(newVal) {
      if (newVal) {
        this.$emit('swipe-up-end');
      }
    },
    innerHeight: function innerHeight(newVal) {
      var _this = this;

      // 转屏恢复到第一屏
      if (this.isSecondScreenShow) {
        this.$nextTick(function () {
          var scrollEl = _this.getItemElement('current').firstChild;

          scrollEl.scrollTop = 0;
          _this.swipeUpY = (_this.swipeUpHeight - _this.innerHeight) / 2;
        });
      }
    }
  },
  methods: {
    // 对外接口：恢复位置
    resetPosition: function resetPosition() {
      this.dir = 0;
      this.doSwitchAnimation();
    },
    // 对外接口：显示第二屏
    showSecondScreen: function showSecondScreen() {
      if (!this.hasSecondScreen || this.isSecondScreenShow || this.isAdShow) {
        return false;
      }

      this.isSecondScreenShow = true;
      this.swipeUpY = -MIN_SWIPE_UP_DISTANCE;
      return true;
    },
    onTouchStart: function onTouchStart(event, fromSelf) {
      // 停止冒泡
      event.stopPropagation(); // 防止多指操作

      if (this.isMoving) {
        event.preventDefault();
        return;
      }

      this.isSwipingX = null;
      this.isSwipingY = null;
      this.isMultiTouch = event.touches.length >= 2;
      var touch = event.touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
      this.startT = new Date().getTime();
      var scrollEl = this.getItemElement('current').firstChild;
      this.scrollTop = scrollEl.scrollTop;
      this.maxScrollTop = scrollEl.scrollHeight - scrollEl.clientHeight;
    },
    onTouchMove: function onTouchMove(event, fromSelf) {
      // 停止冒泡
      event.stopPropagation();

      if (this.isAnimating || this.isMultiTouch) {
        event.preventDefault();
        return;
      }

      var touch = event.touches[0];
      var moveX = touch.clientX - this.startX;
      var moveY = touch.clientY - this.startY; // 左右滑

      if (this.isSwipingX === null) {
        this.isSwipingX = Math.abs(moveX) >= Math.abs(moveY);
      } // 判断zoom状态


      if (!fromSelf && !this.checkZoomStatus(moveX, moveY)) {
        event.preventDefault();
        return;
      } // 上下滑动


      if (this.isSwipingY === null) {
        if (this.isAdShow) {
          event.preventDefault();
        } else {
          this.isSwipingY = !this.isSwipingX;
          this.isSwipingUp = this.isSwipingY && moveY < 0;

          if (this.isSecondScreenShow) {
            this.isSwipingUpDown = this.isSwipingY && moveY > 0;
          } else {
            this.isSwipingDown = this.isSwipingY && moveY > 0;
          }
        }
      } // 第二屏底部禁止上拉


      if (this.isSwipingUp && this.isSecondScreenShow && this.scrollTop && this.scrollTop + 1 >= this.maxScrollTop) {
        event.preventDefault();
        return;
      } // 解决手百划出窗口问题


      this.updateAutoTouchendTimeout(touch);

      if (IS_BAIDU_APP && this.isSwipingDown && (this.startY < 0 || this.startY > this.innerHeight)) {
        event.preventDefault();
        return;
      } // 左右翻页


      if (this.isSwipingX) {
        var isNearBoundary = this.startX < LEFT_SAFE_DISTANCE || this.startX > window.innerWidth - RIGHT_SAFE_DISTANCE; // 屏幕边缘滑动问题

        if (isNearBoundary) {
          moveX = 0;
        } else {
          moveX = this.swipingX(moveX);
        }

        event.preventDefault();
      } // 上划
      else if (this.isSwipingUp) {
          this.maxScrollTop === 0 && event.preventDefault();
          this.swipingUp(moveY, event);
        } // 第二屏下划
        else if (this.isSwipingUpDown && this.scrollTop === 0) {
            // 回到第一屏
            this.swipingToFirstScreen(moveY); // 触发滚动后不能取消

            event.cancelable && event.preventDefault();
          } // 下划
          else if (this.isSwipingDown) {
              !this.isAdShow && this.swipingDown(moveX, moveY, touch);
              event.preventDefault();
            }

      this.moveX = moveX;
      this.moveY = moveY;
      this.isMoving = true;
    },
    onTouchEnd: function onTouchEnd(event, fromSelf) {
      // 停止冒泡
      event.stopPropagation();

      if (this.isAnimating || event.touches.length > 0) {
        event.preventDefault();
        return;
      } // 解决手百划出窗口问题


      this.clearAutoTouchendTimeout();

      if (IS_BAIDU_APP && this.isSwipingDown && (this.startY < 0 || this.startY > this.innerHeight)) {
        event.preventDefault();
        return;
      } // 左右滑动


      if (this.isSwipingX) {
        this.isAnimating = true;
        this.animateAfterSwipeX();
      } // 上划
      else if (this.isSwipingUp) {
          this.isAnimating = true;
          this.animateAfterSwipeUp();
        } // 第二屏下划
        else if (this.isSwipingUpDown && this.scrollTop === 0) {
            this.isAnimating = true;
            this.animateToFirstScreen();
          } // 下划
          else if (this.isSwipingDown) {
              this.isAnimating = true;
              this.animateAfterSwipeDown();
            } // 默认处理
            else {
                this.resetMoveData();
              }

      this.isMoving = false;
    },
    resetMoveData: function resetMoveData() {
      this.moveX = 0;
      this.moveY = 0; // 左右滑动
      // 记录上一次滑动的方向

      this.dir = 0;
      this.isSwipeFirst = false;
      this.isSwipeLast = false; // 上下滑动

      this.posY = {};
      this.isSwipingUp = false;
      this.isSwipingUpDown = false;
      this.isSwipingDown = false;
    },
    // 左右滑动
    swipingX: function swipingX(moveX) {
      var prev = this.getData('prev');
      var next = this.getData('next'); // 左翻第一张图

      if (moveX > 0 && (!prev || !prev.isSet)) {
        if (moveX > MIN_SWIPE_DISTANCE) {
          this.isSwipeFirst = true;
        }

        moveX = Math.min(this.maxSwipeDistance, moveX * 0.3);
      } // 右翻最后一张图
      else if (moveX < 0 && (!next || !next.isSet)) {
          // 后有提示内容
          if (this.swipeEndOption.isSwipeEnd) {
            this.isSwipeLast = true;
            moveX = -Math.min(this.maxSwipeEndDistance, -moveX * 0.6);
            this.swipeEndMoveX = moveX;
          } // 后无提示内容
          else {
              if (-moveX >= MIN_SWIPE_DISTANCE) {
                this.isSwipeLast = true;
                this.emitSwipeLastEvent();
              }

              moveX = -Math.min(this.maxSwipeDistance, -moveX * 0.3);
            }
        }

      if (moveX < 0) {
        this.dir = 1;
      } else if (moveX > 0) {
        this.dir = -1;
      } // 左翻


      if (moveX > 0) {
        this.emitHideToastEvent();
      } // 直接改样式快一点


      var props = {
        transform: "translate3d(".concat(moveX, "px, 0, 0)")
      };

      _util["default"].modifyTransformProperty(props);

      this.contentTransform = props.transform;
      return moveX;
    },
    animateAfterSwipeX: function animateAfterSwipeX() {
      if (this.isSwipeFirst) {
        this.emitSwipeFirstEvent();
        return;
      }

      var timeDiff = new Date().getTime() - this.startT;
      var distance = Math.abs(this.moveX);

      if (this.isSwipeLast) {
        this.dir = 0; // 触发滑到最后事件

        if (this.swipeEndOption.isSwipeEnd) {
          this.emitSwipeEnd();
        }
      } else if ((timeDiff <= 380 || this.easySwipe) && distance > MIN_HORIZONAL_DISTANCE) {
        if (this.moveX > 0) {
          this.dir = -1;
        } else {
          this.dir = 1;
        }
      } else if (timeDiff > 380 && distance > (this.innerWidth + ITEM_BORDER_WIDTH) / 2) {
        if (this.moveX > 0) {
          this.dir = -1;
        } else {
          this.dir = 1;
        }
      } else {
        this.dir = 0;
      }

      this.doSwitchAnimation();
    },
    doSwitchAnimation: function doSwitchAnimation() {
      var _this2 = this;

      var endPos = -this.dir * (window.innerWidth + ITEM_BORDER_WIDTH);
      var animateDuration = this.swipeDuration > 0 ? this.swipeDuration : _animateConfig["default"].duration.swipe; // 最后一张图右滑结束时, 有内容且滑动超过阈值时停留200ms再执行动画，否则不停留

      var animateDelay = this.swipeEndOption.isSwipeEnd && this.isSwipeLast && Math.abs(this.swipeEndMoveX) >= Math.abs(this.swipeEndOption.maxSwipeEndDistance) ? _animateConfig["default"].delay.lastPicSwipeEnd : 0;
      (0, _animate.cssAnimate)(this.$refs.content, {
        transform: 'translate3d(' + endPos + 'px, 0, 0)'
      }, {
        duration: animateDuration,
        ease: _animateConfig["default"].transition['ease-out'],
        delay: animateDelay
      }).then(function () {
        _this2.updateItemStyle();

        _this2.resetMoveData();

        _this2.isAnimating = false;
      });
    },
    switchToNext: function switchToNext(dir) {
      this.dir = dir;
      this.updateItemStyle();
      this.resetMoveData();
    },
    updateItemStyle: function updateItemStyle() {
      if (this.dir === 0) {
        return;
      }

      var dir = this.dir;
      var prev = this.getItemName('prev');
      var current = this.getItemName('current');
      var next = this.getItemName('next');
      var itemMap = {}; // 翻到下一张

      if (this.dir === 1) {
        this.classNames[prev] = "".concat(ITEM_CLASS_PREFIX, "next");
        this.classNames[current] = "".concat(ITEM_CLASS_PREFIX, "prev");
        this.classNames[next] = "".concat(ITEM_CLASS_PREFIX, "current");
        itemMap.prev = current;
        itemMap.current = next;
        itemMap.next = prev;
      } // 翻到上一张
      else {
          this.classNames[prev] = "".concat(ITEM_CLASS_PREFIX, "current");
          this.classNames[current] = "".concat(ITEM_CLASS_PREFIX, "next");
          this.classNames[next] = "".concat(ITEM_CLASS_PREFIX, "prev");
          itemMap.prev = next;
          itemMap.current = prev;
          itemMap.next = current;
        } // 翻页后重置第二屏


      this.swipeUpY = 0;
      this.isSecondScreenShow = false; // 需要先恢复样式

      this.contentTransform = 'none'; // 发出翻页事件

      this.$emit('swipe-x', {
        dir: dir,
        name: dir === 1 ? prev : next,
        itemMap: itemMap
      });
    },
    getItemName: function getItemName(key) {
      var el = this.getItemElement(key);
      return el.getAttribute('data-name');
    },
    getData: function getData(key) {
      var name = this.getItemName(key);
      return name ? this.state[name] : null;
    },
    getItemElement: function getItemElement(key) {
      var el = this.$el.querySelector('.' + ITEM_CLASS_PREFIX + key);
      return el;
    },
    // 下划操作
    swipingDown: function swipingDown(disX, disY, touch) {
      this.posY = {
        startX: this.startX,
        startY: this.startY,
        endX: touch.clientX,
        endY: touch.clientY,
        deltaX: disX || 0,
        deltaY: disY || 0
      };

      if (Math.abs(disY) > 0) {
        this.emitHideToastEvent();
      } // 更新背景透明度


      var opacity = 1;

      if (disY > 0) {
        // 计算方法: 418 / (100% - 1%) = distance / (1 - opacity)
        opacity = Math.max(0.01, (100 - disY * 99 / 418) / 100);
      }

      this.$refs.bg.style.opacity = opacity;
    },
    animateAfterSwipeDown: function animateAfterSwipeDown() {
      var _this3 = this;

      var timeDiff = new Date().getTime() - this.startT;
      var isMatchDistance = false; // 自定义条件

      if (this.swipeDownDistance > 0) {
        isMatchDistance = this.moveY >= this.swipeDownDistance;
      } // 默认条件
      else {
          isMatchDistance = timeDiff <= 380 && this.moveY >= MIN_VERTICAL_DISTANCE || timeDiff > 380 && this.moveY >= MIN_VERTICAL_DISTANCE2;
        } // 退场


      if (isMatchDistance) {
        this.$emit('swipe-down-end');
      } // 恢复大图
      else {
          this.isSwipingDown = false; // 背景色渐显

          (0, _animate.cssAnimate)(this.$refs.bg, {
            opacity: 1
          }, {
            duration: _animateConfig["default"].duration.swipeDownCancel,
            ease: 'linear'
          }).then(function () {
            _this3.resetMoveData();

            _this3.isAnimating = false;
          });
          this.$emit('swipe-down-cancel');
        }
    },
    // 上划第二屏
    swipingUp: function swipingUp(moveY, event) {
      if (!this.hasSecondScreen || this.isAdShow) {
        event.preventDefault();
        return;
      }

      if (!this.isSecondScreenShow) {
        if (this.store.get('zoom.isZoomed') && moveY < -MIN_SWIPE_UP_DISTANCE) {
          this.onZoomSwipeUpEnd();
          return;
        }

        if (moveY < -MIN_SWIPE_UP_DISTANCE) {
          var maxDelta = (this.innerHeight - this.swipeUpHeight) / 2;
          this.swipeUpY = Math.max(-maxDelta, moveY);
        } else {
          this.swipeUpY = 0;
        }

        this.$emit('swipe-up-move', -this.swipeUpY * 2);
        event.preventDefault();
      } else if (moveY >= -5) {
        this.swipingToFirstScreen(moveY);
      }
    },
    animateAfterSwipeUp: function animateAfterSwipeUp() {
      if (!this.hasSecondScreen) {
        this.resetMoveData();
        this.isAnimating = false;
        return;
      }

      if (!this.isSecondScreenShow) {
        if (this.moveY < -MIN_SWIPE_UP_DISTANCE) {
          this.isSecondScreenShow = true;
        } else {
          this.swipeUpY = 0;
          this.resetMoveData();
          this.isAnimating = false;
        }
      } else if (this.moveY >= this.scrollTop + MIN_SWIPE_UP_DISTANCE) {
        this.animateToFirstScreen();
      } else {
        this.resetMoveData();
        this.isAnimating = false;
      }
    },
    // 下划回到第一屏
    swipingToFirstScreen: function swipingToFirstScreen(moveY) {
      moveY = moveY > MIN_SWIPE_UP_DISTANCE ? moveY : 0;
      this.swipeUpY = (this.swipeUpHeight + moveY - this.innerHeight) / 2;
    },
    animateToFirstScreen: function animateToFirstScreen() {
      if (this.moveY > MIN_SWIPE_UP_DISTANCE) {
        this.swipingUpDown();
      } else {
        this.resetMoveData();
        this.isAnimating = false;
      }
    },
    swipingUpDown: function swipingUpDown() {
      this.isSecondScreenShow = false;
    },
    onSwipeUpDown: function onSwipeUpDown() {
      if (this.isAdShow) {
        return;
      }

      this.resetMoveData();
      this.isAnimating = false;
      this.swipeUpY = 0;
      this.$emit('swipe-up-down');
    },
    onSwipeUpEnd: function onSwipeUpEnd() {
      if (this.isAdShow) {
        return;
      }

      this.resetMoveData();
      this.isAnimating = false;
    },
    // 自动触发touchend
    updateAutoTouchendTimeout: function updateAutoTouchendTimeout(touch) {
      var _this4 = this;

      if (!IS_BAIDU_APP) {
        return;
      }

      this.clearAutoTouchendTimeout();
      var x = touch.clientX,
          y = touch.clientY; // 划出窗口

      if (this.isSwipingDown && (y < 5 || y > this.innerHeight - 5) || this.isSwipingX && (x >= this.innerWidth - 10 || x < 10)) {
        this.touchEndTimeout = setTimeout(function () {
          var fakeEvent = {
            touches: [],
            targetTouches: [],
            changedTouches: [],
            preventDefault: _util["default"].noop,
            stopPropagation: _util["default"].noop
          };

          _this4.onTouchEnd(fakeEvent); // 手百还在touchmove阶段


          _this4.startX = x;
          _this4.startY = y;
        }, 380);
      }
    },
    clearAutoTouchendTimeout: function clearAutoTouchendTimeout() {
      if (!IS_BAIDU_APP || !this.touchEndTimeout) {
        return;
      }

      clearTimeout(this.touchEndTimeout);
      this.touchEndTimeout = null;
    },
    // 进场
    onEnterStart: function onEnterStart(data) {
      var _this5 = this;

      this.$emit('enter-start', data); // 当前还没有mount

      this.$nextTick(function () {
        _this5.$refs.bg.style.opacity = 1;
      });
    },
    onEnterEnd: function onEnterEnd(data) {
      this.$emit('enter-end', data);
    },
    // 退场
    onLeaveStart: function onLeaveStart(data) {
      // 直接更新样式
      _util["default"].setCss(this.$refs.content, {
        transform: 'none'
      }); // 背景色渐隐


      (0, _animate.cssAnimate)(this.$refs.bg, {
        opacity: 0
      }, {
        duration: _animateConfig["default"].duration.leave,
        ease: 'linear',
        delay: _animateConfig["default"].delay.leave
      });
      this.$emit('leave-start', data);
    },
    onLeaveEnd: function onLeaveEnd(data) {
      this.$emit('leave-end', data);
      this.resetMoveData();
      this.isAnimating = false;
    },
    // 事件传递
    emitSwipeFirstEvent: function emitSwipeFirstEvent() {
      this.$emit('swipe-first');
    },
    emitSwipeLastEvent: function emitSwipeLastEvent() {
      var _this6 = this;

      if (this.swipeLastTimeout) {
        return;
      }

      this.$emit('swipe-last');
      this.swipeLastTimeout = setTimeout(function () {
        _this6.swipeLastTimeout = null;
      }, 200);
    },
    // 最后一张图右滑结束
    emitSwipeEnd: function emitSwipeEnd() {
      var _this7 = this;

      if (Math.abs(this.swipeEndMoveX) >= Math.abs(this.swipeEndOption.maxSwipeEndDistance)) {
        if (this.swipeEndTimeout) {
          return;
        } // 滑动超过阈值时, 内容停留200ms再弹回


        this.swipeEndTimeout = setTimeout(function () {
          _this7.swipeEndMoveX = 0;
          _this7.swipeEndTimeout = null;
        }, 200);
        this.$emit('swipe-end');
      } else {
        this.swipeEndMoveX = 0;
      }
    },
    emitHideToastEvent: function emitHideToastEvent(msg) {
      var _this8 = this;

      if (this.hideToastTimeout) {
        return;
      }

      this.$emit('hide-toast', msg);
      this.hideToastTimeout = setTimeout(function () {
        _this8.hideToastTimeout = null;
      }, 200);
    },
    emitSwipeDownStartEvent: function emitSwipeDownStartEvent() {
      this.$emit('swipe-down-start');
    },
    // zoom
    onZoomTap: function onZoomTap(data) {
      if (this.isSecondScreenShow) {
        this.swipingUpDown();
      } else {
        this.$emit('tap');
      }
    },
    onZoomSwipeDownStart: function onZoomSwipeDownStart() {
      this.$emit('swipe-down-start');
    },
    onZoomSwipeDownMove: function onZoomSwipeDownMove(_ref) {
      var y = _ref.y;
      // 更新背景透明度
      var opacity = 1;

      if (y > 0) {
        // 计算方法: 418 / (100% - 1%) = distance / (1 - opacity)
        opacity = Math.max(0.01, (100 - y * 99 / 418) / 100);
      }

      this.$refs.bg.style.opacity = opacity;
    },
    onZoomSwipeDownEnd: function onZoomSwipeDownEnd() {
      this.$emit('swipe-down-end');
    },
    onZoomSwipeDownCancel: function onZoomSwipeDownCancel() {
      // 背景色渐显
      (0, _animate.cssAnimate)(this.$refs.bg, {
        opacity: 1
      }, {
        duration: _animateConfig["default"].duration.swipeDownCancel,
        ease: 'linear'
      });
      this.$emit('swipe-down-cancel');
    },
    onZoomSwipeUpEnd: function onZoomSwipeUpEnd() {
      if (!this.hasSecondScreen) {
        return;
      }

      this.isSecondScreenShow = true;
      this.swipeUpY = -MIN_SWIPE_UP_DISTANCE;
    },
    checkZoomStatus: function checkZoomStatus(moveX, moveY) {
      if (this.store.get('zoom.needCancelMove') // 右滑
      || this.isSwipingX && moveX > 0 && !this.store.get('zoom.nearLeftBoundary') // 左滑
      || this.isSwipingX && moveX < 0 && !this.store.get('zoom.nearRightBoundary') // 下滑
      || !this.isSwipingX && moveY > 0 // 上滑
      || !this.isSwipingX && moveY < 0 && !this.store.get('zoom.nearBottomBoundary')) {
        return false;
      }

      return true;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cImageViewerContentWrapper":"c-image-viewer-content-wrapper__1fo2M","cImageViewerContent":"c-image-viewer-content__3hSyK","cImageViewerContentBg":"c-image-viewer-content-bg__38DfL","cImageViewerSwipeEndTip":"c-image-viewer-swipe-end-tip__LrB1B"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"state": {"type": Object,"default": function () { return {}; }},"innerWidth": {"type": Number,"required": true},"innerHeight": {"type": Number,"required": true},"enterPosition": {"type": Object,"default": function () { return {}; }},"leavePosition": {"type": Object,"default": function () { return {}; }},"isLeaving": {"type": Boolean,"default": false},"store": {"type": Object,"default": function () { return {}; }},"swipeUpHeight": {"type": Number,"default": 0},"easySwipe": {"type": Boolean,"default": false},"swipeDuration": {"type": Number,"default": 0},"swipeDownDistance": {"type": Number,"default": 0},"imageClipType": {"type": String,"default": "none"},"isAdShow": {"type": Boolean,"default": false},"swipeEndOption": {"type": Object,"default": function () { return {"isSwipeEnd": false,"maxSwipeEndDistance": 0}; }}};
            obj.components = {"c-image-viewer-item": require("./ImageViewerItem"),"c-image-viewer-ad-item": require("./ImageViewerAdItem")};

            
            

            
    var computed = obj.computed || {};
    computed["maxSwipeDistance"] = function () { return (this["innerWidth"]/3); };
computed["maxSwipeEndDistance"] = function () { return (this["innerWidth"]/2); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"startT": 0,"startX": 0,"startY": 0,"moveX": 0,"moveY": 0,"dir": 0,"posY": {},"isMoving": false,"isAnimating": false,"isSwipingX": null,"isSwipingY": null,"isSwipingUp": false,"isSwipingDown": false,"isSwipeFirst": false,"isSwipeLast": false,"isMultiTouch": false,"classNames": {"item1": "c-image-viewer-item-prev","item2": "c-image-viewer-item-current","item3": "c-image-viewer-item-next"},"swipeUpY": 0,"isSecondScreenShow": false,"scrollTop": 0,"maxScrollTop": 0,"contentTransform": "none","swipeEndMoveX": 0,"swipeEndTipWidth": 0};
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
    