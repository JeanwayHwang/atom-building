
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-image-viewer__yZLdj",class:( _obj = {}, _obj[_vm.$style.noInfo] = _vm.hideInfo, _obj[_vm.$style.noToolbar] = _vm.hideToolbar, _obj[_vm.$style.horizonal] = _vm.innerHeight < _vm.innerWidth, _obj[_vm.$style.blackBg] = _vm.isShowBg, _obj ),attrs:{"data-module":"c-iv"},on:{"touchstart":_vm.onTouchStart,"touchmove":_vm.onTouchMove,"touchend":_vm.onTouchEnd,"click":_vm.onClick}},[_c('c-image-viewer-content',{ref:"content",attrs:{"store":_vm.store,"state":_vm.state,"is-ad-show":_vm.isAdShow,"is-leaving":_vm.isLeaving,"enter-position":_vm.enterPosition,"leave-position":_vm.leavePosition,"inner-width":_vm.innerWidth,"inner-height":_vm.innerHeight,"swipe-up-height":_vm.swipeUpHeight,"easy-swipe":_vm.easySwipe,"swipe-duration":_vm.swipeDuration,"swipe-down-distance":_vm.swipeDownDistance,"image-clip-type":_vm.imageClipType,"swipe-end-option":_vm.swipeEndOption},on:{"enter-start":_vm.onEnterStart,"enter-end":_vm.onEnterEnd,"leave-start":_vm.onLeaveStart,"leave-end":_vm.onLeaveEnd,"tap":_vm.onTap,"hide-toast":_vm.onHideToast,"swipe-x":_vm.onSwipeX,"swipe-first":_vm.onSwipeFirst,"swipe-last":_vm.onSwipeLast,"swipe-end":_vm.onSwipeEnd,"swipe-down-start":_vm.onSwipeDownStart,"swipe-down-end":_vm.onSwipeDownEnd,"swipe-down-cancel":_vm.onSwipeDownCancel,"swipe-up-move":_vm.onSwipeUpMove,"swipe-up-end":_vm.onSwipeUpEnd,"swipe-up-down":_vm.onSwipeUpDown},scopedSlots:_vm._u([{key:"swipeEndTip",fn:function(slotProps){return [_vm._t("swipeEndTip",null,{swipeEndMoveX:slotProps.swipeEndMoveX})]}}])},[_c('template',{slot:"anchor"},[_vm._t("anchor")],2),_vm._v(" "),_c('template',{slot:"secondScreen"},[_vm._t("secondScreen")],2)],2),_vm._v(" "),_c('div',{ref:"top",staticClass:"c-image-viewer-top__3nl8c"},[_c('c-image-viewer-close',{ref:"close",on:{"click":_vm.onCloseClick}})],1),_vm._v(" "),_c('div',{ref:"bottom",staticClass:"c-image-viewer-bottom__3zEg1"},[(!_vm.hideInfo)?(_c('div',{ref:"info",staticClass:"c-image-viewer-info-wrapper__1wUHn"},[_vm._t("info",[(_vm.currentData)?(_c('c-image-viewer-info',{attrs:{"is-visible":!_vm.isImmersive,"obj":_vm.currentData,"count":_vm.count,"inner-width":_vm.innerWidth,"inner-height":_vm.innerHeight}})):(_vm._e())])],2)):(_vm._e()),_vm._v(" "),(!_vm.hideToolbar)?(_c('div',{ref:"toolbar",staticClass:"c-image-viewer-toolbar-wrapper__k8_aA"},[_c('div',{staticClass:"c-image-viewer-toolbar-bg__2w3jt"}),_vm._v(" "),_vm._t("toolbar")],2)):(_vm._e())]),_vm._v(" "),(!_vm.hidePageNum)?(_c('div',{ref:"immersiveToolbar",staticClass:"immersive-toolbar__2FziA"},[_c('div',{staticClass:"page-num__2I5wR"},[_vm._v(_vm._s(_vm.pn + 1)+"/"+_vm._s(_vm.count))])])):(_vm._e()),_vm._v(" "),_c('c-toast',{attrs:{"state":_vm.toast.state,"content":_vm.toast.msg,"duration":1500,"auto-close":""},on:{"change":_vm.onToastChange}})],1)},
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

var _animateConfig = _interopRequireDefault(require("./asset/js/animate-config.js"));

var _animate = require("./asset/js/animate.js");

var _util = _interopRequireDefault(require("./asset/js/util.js"));

var _store = _interopRequireDefault(require("./asset/js/store.js"));

var _link = _interopRequireDefault(require("./asset/js/link.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file 大图浏览组件
 * @author rongweiwei@baidu.com
 */
// 裁剪类型
var ClipType = {
  0: 'none',
  1: 'none',
  2: 'center',
  3: 'top center'
}; // 其他剪裁类型

var OTHER_CLIP = 0;
var _default = {
  beforeMount: function beforeMount() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.store = _store["default"].create();
    this.link = _link["default"].create(this.list);
    this.link.setAdGap(this.adGap, this.adStartIndex);
    this.link.updateAdItem(this.adItems);
    this.state = this.getInitialState();
    this.emitEnterStartEvent(); // 判断图片裁剪方式

    this.imageClipType = ClipType[this.imageClip] || ClipType[OTHER_CLIP];
  },
  mounted: function mounted() {
    this.initEvent();
  },
  activated: function activated() {
    this.initEvent();
  },
  deactivated: function deactivated() {
    this.dispose();
  },
  beforeDestroy: function beforeDestroy() {
    this.store.destroy();
    this.link.destroy();
    this.dispose();
  },
  watch: {
    // 沉浸态切换
    isImmersive: function isImmersive(newVal) {
      if (newVal) {
        this.enterImmersive();
      } else {
        this.exitImmersive();
      }

      this.$emit('imgclick', {
        status: newVal,
        index: this.pn,
        setIndex: this.spn,
        data: this.currentData
      });
    }
  },
  methods: {
    // 对外接口
    showSecondScreen: function showSecondScreen() {
      return this.$refs.content.showSecondScreen();
    },
    updateSetInfo: function updateSetInfo(index, setInfo) {
      if (typeof index !== 'number' || !setInfo) {
        return false;
      }

      var ret = this.link.updateSetInfo(index, setInfo); // 更新当前index的图集

      if (ret && this.pn === index && this.spn === 0) {
        this.nextData = this.link.getNext(this.currentData);
        this.state[this.itemMap.next] = {
          isSet: !!this.nextData,
          item: this.nextData
        };
      } // 更新前一个index的图集
      else if (ret && this.pn - 1 === index && this.spn === 0) {
          this.prevData = this.link.getPrev(this.currentData);
          this.state[this.itemMap.prev] = {
            isSet: !!this.prevData,
            item: this.prevData
          };
        }

      return ret;
    },
    append: function append(list) {
      var ret = this.link.append(list);

      if (ret) {
        if (!this.state[this.itemMap.next].isSet) {
          this.nextData = this.link.getNext(this.currentData);
          this.state[this.itemMap.next] = {
            isSet: !!this.nextData,
            item: this.nextData
          };
        }

        this.count = Math.max(this.count, this.link.count());
      }

      return ret;
    },
    updateList: function updateList(startIndex, list) {
      if (typeof startIndex !== 'number' || startIndex >= this.count || !list || !list.length) {
        return false;
      }

      if (startIndex + list.length > this.pn) {
        list = list.slice(0, this.pn - startIndex);
      }

      var ret = this.link.updateList(startIndex, list);

      if (ret && startIndex + list.length === this.pn && this.prevData === null) {
        this.prevData = this.link.getPrev(this.currentData);
        this.state[this.itemMap.prev] = {
          isSet: !!this.prevData,
          item: this.prevData
        };
      }

      return ret;
    },
    updateItem: function updateItem(index, setIndex, data) {
      return this.link.updateItem(index, setIndex, data);
    },
    updateAdItem: function updateAdItem(adDataList) {
      this.link.updateAdItem(adDataList);
    },
    close: function close() {
      if (this.isLeaving) {
        return false;
      }

      this.emitLeaveStartEvent({
        type: 'close'
      });
      return true;
    },
    initEvent: function initEvent() {
      if (this.isEventStart) {
        return;
      }

      this.isEventStart = true;
      window.addEventListener('resize', this.onResize, false);
      window.addEventListener('orientationchange', this.onResize, false);
    },
    onResize: function onResize() {
      var _this = this;

      if (this.innerHeight === window.innerHeight) {
        return;
      }

      this.resizeTimer && clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(function () {
        _this.innerWidth = window.innerWidth;
        _this.innerHeight = window.innerHeight;
        _this.resizeTimer = 0;
      }, 50);
    },
    dispose: function dispose() {
      this.resizeTimer && clearTimeout(this.resizeTimer);
      this.bottomTimer && clearTimeout(this.bottomTimer);
      this.isEventStart = false;
      window.removeEventListener('resize', this.onResize, false);
      window.removeEventListener('orientationchange', this.onResize, false);
    },
    // 数据相关
    getInitialState: function getInitialState() {
      var current = this.link.get(this.pn, this.spn);
      var prev = this.link.getPrev(current);
      var next = this.link.getNext(current);
      var state = {
        item1: {
          isSet: !!prev,
          isAd: prev && !!prev.isAd,
          item: prev
        },
        item2: {
          isSet: !!current,
          isAd: prev && !!prev.isAd,
          item: current
        },
        item3: {
          isSet: !!next,
          isAd: next && !!next.isAd,
          item: next
        }
      };
      this.prevData = prev;
      this.currentData = current;
      this.nextData = next;
      this.itemMap = {
        prev: 'item1',
        current: 'item2',
        next: 'item3'
      };
      this.count = Math.max(this.count, this.link.count());
      return state;
    },
    updateState: function updateState(data) {
      var itemName = data.name;
      var itemData;
      this.isAdShow = false;

      if (data.dir > 0) {
        if (this.nextData && this.nextData.isAd) {
          itemData = this.link.getNext(this.nextData);
          this.isAdShow = true;
        } else {
          this.link.countSwitch(data.dir);
          itemData = this.link.getNext(this.nextData);
        }
      } else {
        if (this.prevData && this.prevData.isAd) {
          itemData = this.link.getPrev(this.prevData);
          this.isAdShow = true;
        } else {
          this.link.countSwitch(data.dir);
          itemData = this.link.getPrev(this.prevData);
        }
      } // 更新其中一个item


      this.state[itemName] = {
        isSet: !!itemData,
        isAd: !!itemData && itemData.isAd,
        item: itemData
      };
      this.prevData = this.state[data.itemMap.prev].item;
      this.currentData = this.state[data.itemMap.current].item;
      this.nextData = this.state[data.itemMap.next].item;
      this.itemMap = data.itemMap;
      this.onSwitch(data.dir);
    },
    // 翻页相关
    onSwipeX: function onSwipeX(data) {
      // 更新state
      this.updateState(data);
    },
    onSwipeFirst: function onSwipeFirst(obj) {
      // 退场
      if (this.isSwipeFirstLeave) {
        this.emitLeaveStartEvent({
          type: 'swipe-first'
        });
      } // 恢复位置
      else {
          this.$refs.content.resetPosition();
          this.$emit('swipefirst');
        }
    },
    onSwipeLast: function onSwipeLast() {
      this.toast = {
        state: true,
        msg: '已是最后一张'
      };
    },
    // 最后一张图片 滑动停止
    onSwipeEnd: function onSwipeEnd() {
      if (this.swipeEndOption.isSwipeEnd) {
        this.$emit('swipeend');
      }
    },
    onSwitch: function onSwitch(dir) {
      var _this2 = this;

      // 记录一下上次的翻页方向
      // 更新pn
      this.pn = this.currentData.index;
      this.spn = this.currentData.setIndex;
      this.emitSwitchEvent(dir);

      if (this.isImmersive) {
        this.$nextTick(function () {
          // 先显示才能计算高度
          _util["default"].setCss(_this2.$refs.bottom, {
            display: ''
          });

          _this2.bottomTimer = setTimeout(function () {
            // 重新计算bottom高度
            var bottomHeight = 0;

            if (!_this2.hideInfo) {
              bottomHeight += _this2.$refs.info.getBoundingClientRect().height;
            }

            if (!_this2.hideToolbar) {
              bottomHeight += _this2.$refs.toolbar.getBoundingClientRect().height;
            }

            _util["default"].setCss(_this2.$refs.bottom, {
              display: 'none',
              transform: "translate3d(0, ".concat(bottomHeight, "px, 0)")
            });
          }, 10);
        });
      }
    },
    emitSwitchEvent: function emitSwitchEvent() {
      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      // 翻页事件，传递当前图片信息
      // TODO data考虑复制一份
      this.$emit('switch', {
        dir: dir,
        index: this.pn,
        setIndex: this.spn,
        data: this.currentData,
        prevData: this.prevData,
        nextData: this.nextData
      });
    },
    // 进场相关
    onEnterStart: function onEnterStart(data) {
      var _this3 = this;

      // 当前还没有mount
      this.$nextTick(function () {
        _this3.changeOpacity(1, {
          duration: _animateConfig["default"].duration.enter
        });
      });
    },
    onEnterEnd: function onEnterEnd(data) {
      this.$emit('enter', {
        index: this.pn,
        setIndex: this.spn,
        data: this.currentData,
        prevData: this.prevData,
        nextData: this.nextData
      });
    },
    emitEnterStartEvent: function emitEnterStartEvent() {
      var _this4 = this;

      // 通过钩子获取进场动画参数
      this.$emit('enterstart', {
        index: this.pn,
        setIndex: this.spn
      }, function (el) {
        if (el && el.getBoundingClientRect) {
          var _el$getBoundingClient = el.getBoundingClientRect(),
              left = _el$getBoundingClient.left,
              top = _el$getBoundingClient.top,
              width = _el$getBoundingClient.width,
              height = _el$getBoundingClient.height;

          _this4.enterPosition = {
            left: left,
            top: top,
            width: width,
            height: height
          };
        }
      });
    },
    // 退场相关
    onCloseClick: function onCloseClick(event) {
      event.stopPropagation();
      this.hideToast();

      if (this.isAdShow) {
        this.emitCloseAdEvent();
      } else {
        this.emitLeaveStartEvent({
          type: 'close-button'
        });
      }
    },
    onLeaveStart: function onLeaveStart(data) {
      this.changeOpacity(0, {
        duration: _animateConfig["default"].duration.leave
      });
    },
    onLeaveEnd: function onLeaveEnd(data) {
      this.$emit('leave', {
        index: this.pn,
        setIndex: this.spn,
        type: this.leaveType
      });
    },
    // 需要处理广告关闭的逻辑
    emitCloseAdEvent: function emitCloseAdEvent() {
      this.link.removeAdItem(this.currentData);
      this.$refs.content.switchToNext(1);
      this.$emit('close-ad-event'); // 重新计算当前的状态，不然广告dom 还在

      this.state = this.getInitialState();
    },
    emitLeaveStartEvent: function emitLeaveStartEvent(opt) {
      var _this5 = this;

      opt = Object.assign({
        index: this.pn,
        setIndex: this.spn
      }, opt); // 通过钩子获取退场动画参数

      this.$emit('leavestart', opt, function (elOrRect) {
        var rect = null;

        if (elOrRect && elOrRect.getBoundingClientRect) {
          rect = elOrRect.getBoundingClientRect();
        } else if (elOrRect && elOrRect.width) {
          rect = elOrRect;
        }

        if (rect) {
          var _rect = rect,
              _rect$left = _rect.left,
              left = _rect$left === void 0 ? 0 : _rect$left,
              _rect$top = _rect.top,
              top = _rect$top === void 0 ? 0 : _rect$top,
              width = _rect.width,
              height = _rect.height;
          _this5.leavePosition = {
            left: left,
            top: top,
            width: width,
            height: height
          };
        }
      });
      this.isShowBg = false;
      this.isLeaving = true;
      this.leaveType = opt.type || 'close';
    },
    // 滑动相关
    onTouchStart: function onTouchStart(event) {
      this.$refs.content.onTouchStart(event);
      this.hideToast();
    },
    onTouchMove: function onTouchMove(event) {
      this.$refs.content.onTouchMove(event);
    },
    onTouchEnd: function onTouchEnd(event) {
      this.$refs.content.onTouchEnd(event);
    },
    // toast相关
    onHideToast: function onHideToast() {
      // 清除toast
      this.hideToast();
    },
    onClick: function onClick() {
      // 清除toast
      this.hideToast();
    },
    onToastChange: function onToastChange(val) {
      if (val !== this.toast.state) {
        this.toast.state = val;
      }
    },
    hideToast: function hideToast() {
      this.toast.state = false;
    },
    // 下拉退场相关
    onSwipeDownStart: function onSwipeDownStart() {
      this.isShowBg = false; // 动画降级

      this.changeOpacity(0, {
        duration: _util["default"].animationDowngrade ? 0 : _animateConfig["default"].duration.swipeDownStart
      });
    },
    onSwipeDownEnd: function onSwipeDownEnd() {
      this.emitLeaveStartEvent({
        type: 'swipe-down'
      });
    },
    onSwipeDownCancel: function onSwipeDownCancel() {
      this.isShowBg = true; // 动画降级

      this.changeOpacity(1, {
        duration: _util["default"].animationDowngrade ? 0 : _animateConfig["default"].duration.swipeDownCancel
      });
    },
    changeOpacity: function changeOpacity(opacity) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var elements = [this.$refs.top, this.$refs.bottom];

      if (!options.duration) {
        elements.forEach(function (el) {
          _util["default"].setCss(el, {
            opacity: opacity
          });
        });
      } else {
        elements.forEach(function (el) {
          (0, _animate.cssAnimate)(el, {
            opacity: opacity
          }, {
            duration: options.duration,
            ease: 'linear'
          });
        });
      }
    },
    // 上拉
    onSwipeUpMove: function onSwipeUpMove(moveY) {
      // 非沉浸态
      if (!this.isImmersive) {
        _util["default"].setCss(this.$refs.bottom, {
          bottom: moveY + 'px',
          opacity: moveY > 20 ? 0.001 : 1
        });
      } // 沉浸态页码
      else if (!this.hidePageNum) {
          _util["default"].setCss(this.$refs.immersiveToolbar, {
            bottom: moveY + 'px',
            opacity: moveY > 20 ? 0.001 : 1
          });
        }
    },
    onSwipeUpEnd: function onSwipeUpEnd() {
      // 非沉浸态
      if (this.isAdShow) {
        return;
      }

      if (!this.isImmersive) {
        _util["default"].setCss(this.$refs.bottom, {
          opacity: 1,
          display: 'none',
          bottom: window.innerHeight - this.swipeUpHeight + 'px'
        });
      } // 沉浸态页码
      else if (!this.hidePageNum) {
          _util["default"].setCss(this.$refs.immersiveToolbar, {
            opacity: 1,
            display: 'none',
            bottom: window.innerHeight - this.swipeUpHeight + 'px'
          });
        } // 发送第二屏显示事件


      this.$emit('secondscreenshow', {
        index: this.pn,
        setIndex: this.spn,
        data: this.currentData
      });
    },
    onSwipeUpDown: function onSwipeUpDown() {
      // 非沉浸态
      if (!this.isImmersive) {
        _util["default"].setCss(this.$refs.bottom, {
          display: '',
          bottom: ''
        });
      } // 沉浸态页码
      else if (!this.hidePageNum) {
          _util["default"].setCss(this.$refs.immersiveToolbar, {
            display: '',
            bottom: ''
          });
        } // 发送第二屏隐藏事件


      this.$emit('secondscreenhide', {
        index: this.pn,
        setIndex: this.spn,
        data: this.currentData
      });
    },
    // 沉浸态
    enterImmersive: function enterImmersive() {
      var _this6 = this;

      var topHeight = this.$refs.close.getHeight();
      var bottomHeight = 0;

      if (!this.hideInfo) {
        bottomHeight += this.$refs.info.getBoundingClientRect().height;
      }

      if (!this.hideToolbar) {
        bottomHeight += this.$refs.toolbar.getBoundingClientRect().height;
      } // top上移隐藏


      (0, _animate.cssAnimate)(this.$refs.top, {
        transform: "translate3d(0, ".concat(-topHeight, "px, 0)")
      }, {
        duration: _animateConfig["default"].duration.hideTop,
        ease: _animateConfig["default"].transition['ease-in-out3']
      }).then(function () {
        // 防止翻页时露出
        _this6.$nextTick(function () {
          _util["default"].setCss(_this6.$refs.top, {
            opacity: 0,
            display: 'none'
          });
        });
      }); // bottom下移隐藏

      (0, _animate.cssAnimate)(this.$refs.bottom, {
        transform: "translate3d(0, ".concat(bottomHeight, "px, 0)")
      }, {
        duration: _animateConfig["default"].duration.hideBottom,
        ease: _animateConfig["default"].transition['ease-in-out4']
      }).then(function () {
        // 防止翻页时露出
        _this6.$nextTick(function () {
          _util["default"].setCss(_this6.$refs.bottom, {
            opacity: 0,
            display: 'none'
          });
        });
      }); // 沉浸态页码

      if (!this.hidePageNum) {
        (0, _animate.cssAnimate)(this.$refs.immersiveToolbar, {
          opacity: 1
        }, {
          duration: 200,
          ease: 'linear',
          delay: _animateConfig["default"].duration.hideBottom
        });

        _util["default"].setCss(this.$refs.immersiveToolbar, {
          display: '',
          bottom: ''
        });
      }
    },
    exitImmersive: function exitImmersive() {
      // 先恢复显示
      _util["default"].setCss(this.$refs.top, {
        opacity: 1,
        display: ''
      });

      _util["default"].setCss(this.$refs.bottom, {
        opacity: 1,
        display: ''
      }); // top下移显示


      (0, _animate.cssAnimate)(this.$refs.top, {
        transform: 'none'
      }, {
        duration: _animateConfig["default"].duration.showTop,
        ease: _animateConfig["default"].transition['ease-in-out3']
      }); // bottom上移显示

      (0, _animate.cssAnimate)(this.$refs.bottom, {
        transform: 'none'
      }, {
        duration: _animateConfig["default"].duration.showBottom,
        ease: _animateConfig["default"].transition['ease-in-out4']
      }); // 沉浸态页码

      if (!this.hidePageNum) {
        (0, _animate.cssAnimate)(this.$refs.immersiveToolbar, {
          opacity: 0
        }, {
          duration: 200,
          ease: 'linear'
        });

        _util["default"].setCss(this.$refs.immersiveToolbar, {
          display: '',
          bottom: ''
        });
      }
    },
    onTap: function onTap(data) {
      this.isImmersive = !this.isImmersive;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cImageViewer":"c-image-viewer__yZLdj","cImageViewerTop":"c-image-viewer-top__3nl8c","cImageViewerBottom":"c-image-viewer-bottom__3zEg1","cImageViewerToolbarWrapper":"c-image-viewer-toolbar-wrapper__k8_aA","cImageViewerToolbarBg":"c-image-viewer-toolbar-bg__2w3jt","cImageViewerInfoWrapper":"c-image-viewer-info-wrapper__1wUHn","noInfo":"no-info__25kXI","noToolbar":"no-toolbar__2VeNi","horizonal":"horizonal__3Y8ZJ","blackBg":"black-bg__2GgWM","immersiveToolbar":"immersive-toolbar__2FziA","pageNum":"page-num__2I5wR"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"list": {"type": Array,"required": true},"total": {"type": Number,"default": 0},"adGap": {"type": Number,"default": 15},"adStartIndex": {"type": Number,"default": 5},"adItems": {"type": Array,"default": function () { return []; }},"startIndex": {"type": Number,"default": 0},"setIndex": {"type": Number,"default": 0},"hideInfo": {"type": Boolean,"default": false},"hideToolbar": {"type": Boolean,"default": false},"hidePageNum": {"type": Boolean,"default": false},"isSwipeFirstLeave": {"type": Boolean,"default": false},"easySwipe": {"type": Boolean,"default": false},"swipeDuration": {"type": Number,"default": 0},"swipeDownDistance": {"type": Number,"default": 0},"imageClip": {"type": Number,"default": 0},"swipeEndOption": {"type": Object,"default": function () { return {"isSwipeEnd": false,"maxSwipeEndDistance": 0}; }}};
            obj.components = {"c-image-viewer-content": require("./ImageViewerContent"),"c-image-viewer-close": require("./ImageViewerClose"),"c-image-viewer-info": require("./ImageViewerInfo"),"c-toast": require("../Toast/Toast")};

            
            

            
    var computed = obj.computed || {};
    computed["swipeUpHeight"] = function () { return (((this["innerHeight"]>this["innerWidth"]))?(138):(200)); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"pn": this["startIndex"],"spn": this["setIndex"],"count": this["total"],"state": {},"currentData": null,"prevData": null,"nextData": null,"itemMap": null,"isLeaving": false,"isImmersive": false,"isEventStart": false,"enterPosition": {},"leavePosition": {},"toast": {"state": false,"msg": ""},"store": {},"link": {},"innerWidth": 0,"innerHeight": 0,"resizeTimer": 0,"bottomTimer": 0,"leaveType": "","isShowBg": true,"imageClipType": "none","isAdShow": false};
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
    