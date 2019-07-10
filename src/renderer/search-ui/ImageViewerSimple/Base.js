
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"viewer-base__2X5OO",class:( _obj = {}, _obj[_vm.$style.blackBg] = _vm.isShowBg, _obj ),on:{"touchstart":_vm.onTouchStart,"touchmove":_vm.onTouchMove,"touchend":_vm.onTouchEnd,"click":_vm.onClick}},[_c('c-image-viewer-content',{ref:"content",attrs:{"store":_vm.store,"state":_vm.state,"is-leaving":_vm.isLeaving,"enter-position":_vm.enterPosition,"leave-position":_vm.leavePosition,"inner-width":_vm.innerWidth,"inner-height":_vm.innerHeight,"image-clip-type":_vm.imageClipType},on:{"enter-start":_vm.onEnterStart,"enter-end":_vm.onEnterEnd,"leave-start":_vm.onLeaveStart,"leave-end":_vm.onLeaveEnd,"tap":_vm.onTap,"hide-toast":_vm.onHideToast,"swipe-x":_vm.onSwipeX,"swipe-first":_vm.onSwipeFirst,"swipe-last":_vm.onSwipeLast,"swipe-down-start":_vm.onSwipeDownStart,"swipe-down-end":_vm.onSwipeDownEnd,"swipe-down-cancel":_vm.onSwipeDownCancel}}),_vm._v(" "),_c('c-toast',{attrs:{"state":_vm.toast.state,"content":_vm.toast.msg,"duration":1500,"auto-close":""},on:{"change":_vm.onToastChange}}),_vm._v(" "),_vm._t("feature")],2)},
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

var _store = _interopRequireDefault(require("../ImageViewer/asset/js/store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file H5 图片查看器
 * @author rongweiwei@baidu.com
 */
var _default = {
  beforeMount: function beforeMount() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.store = _store["default"].create();
    this.state = this.getInitialState();
    this.emitEnterStartEvent();
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
    this.dispose();
  },
  watch: {
    pn: function pn(newVal) {
      this.emitSwitchEvent();
    },
    list: function list(newVal) {
      var nextData = this.getDataFromList(this.pn + 1);
      var nextShow = this.state.item3.isSet; // 拿到后续图片了，更新图片item

      if (nextData && !nextShow) {
        this.state.item3 = {
          isSet: !!nextData,
          item: nextData
        };
      }
    }
  },
  methods: {
    // 对外接口
    triggerLeaveEvent: function triggerLeaveEvent(opt) {
      this.emitLeaveStartEvent(opt);
    },
    showToast: function showToast(msg) {
      this.toast = {
        state: true,
        msg: msg
      };
    },
    // 事件绑定和销毁
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
      this.isEventStart = false;
      window.removeEventListener('resize', this.onResize, false);
      window.removeEventListener('orientationchange', this.onResize, false);
    },
    // 数据相关
    getInitialState: function getInitialState() {
      var item1 = this.getDataFromList(this.pn - 1);
      var item2 = this.getDataFromList(this.pn);
      var item3 = this.getDataFromList(this.pn + 1);
      var state = {
        item1: {
          isSet: !!item1,
          item: item1
        },
        item2: {
          isSet: !!item2,
          item: item2
        },
        item3: {
          isSet: !!item3,
          item: item3
        }
      };
      return state;
    },
    updateState: function updateState(data) {
      var itemName = data.name;
      var itemData = this.getDataFromList(this.pn + data.dir * 2); // 更新其中一个item

      this.state[itemName] = {
        isSet: !!itemData,
        item: itemData || null
      }; // 更新pn

      this.pn += data.dir;
    },
    getDataFromList: function getDataFromList(index) {
      var len = this.list.length;

      if (0 <= index && index < len) {
        var item = this.list[index];

        if (typeof item.index === 'undefined') {
          item.index = index;
        }

        return item;
      }

      return null;
    },
    resetListProps: function resetListProps() {
      for (var i = 0, len = this.list.length; i < len; i++) {
        var item = this.list[i];

        if (typeof item.index !== 'undefined') {
          delete item.index;
        }
      }
    },
    // 翻页相关
    onSwipeX: function onSwipeX(data) {
      // 更新state
      this.updateState(data);
    },
    onSwipeFirst: function onSwipeFirst(obj) {
      if (this.isSwipeFirstLeave) {
        this.emitLeaveStartEvent({
          type: 'swipe-first'
        });
      } else {
        this.$refs.content.resetPosition();
      }
    },
    onSwipeLast: function onSwipeLast() {
      this.toast = {
        state: true,
        msg: '已是最后一张'
      };
    },
    emitSwitchEvent: function emitSwitchEvent() {
      var data = this.getDataFromList(this.pn); // 翻页事件，传递当前图片信息
      // TODO data考虑复制一份

      this.$emit('switch', {
        index: this.pn,
        data: data
      });
    },
    // 进场相关
    onEnterStart: function onEnterStart(data) {
      this.$emit('enter');
    },
    onEnterEnd: function onEnterEnd(data) {
      this.$emit('after-enter');
    },
    emitEnterStartEvent: function emitEnterStartEvent() {
      var _this2 = this;

      // 通过钩子获取进场动画参数
      this.$emit('before-enter', {
        index: this.pn
      }, function (el) {
        if (el && el.getBoundingClientRect) {
          var _el$getBoundingClient = el.getBoundingClientRect(),
              left = _el$getBoundingClient.left,
              top = _el$getBoundingClient.top,
              width = _el$getBoundingClient.width,
              height = _el$getBoundingClient.height;

          _this2.enterPosition = {
            left: left,
            top: top,
            width: width,
            height: height
          };
        }
      });
    },
    // 退场相关
    onLeaveStart: function onLeaveStart(data) {
      this.$emit('leave');
    },
    onLeaveEnd: function onLeaveEnd(data) {
      this.isLeaving = false;
      this.resetListProps();
      this.$emit('after-leave');
    },
    emitLeaveStartEvent: function emitLeaveStartEvent(opt) {
      var _this3 = this;

      opt = Object.assign({
        index: this.pn
      }, opt); // 通过钩子获取退场动画参数

      this.$emit('before-leave', opt, function (el) {
        if (el && el.getBoundingClientRect) {
          var _el$getBoundingClient2 = el.getBoundingClientRect(),
              left = _el$getBoundingClient2.left,
              top = _el$getBoundingClient2.top,
              width = _el$getBoundingClient2.width,
              height = _el$getBoundingClient2.height;

          _this3.leavePosition = {
            left: left,
            top: top,
            width: width,
            height: height
          };
        }
      });
      this.isShowBg = false;
      this.isLeaving = true;
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
      this.isShowBg = false;
      this.$emit('swipe-down-start');
    },
    onSwipeDownEnd: function onSwipeDownEnd() {
      this.emitLeaveStartEvent({
        type: 'swipe-down'
      });
    },
    onSwipeDownCancel: function onSwipeDownCancel() {
      this.isShowBg = true;
      this.$emit('swipe-down-cancel');
    },
    onTap: function onTap(data) {
      this.$emit('tap');
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"viewerBase":"viewer-base__2X5OO","blackBg":"black-bg__nC6P9"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"list": {"type": Array,"required": true},"startIndex": {"type": Number,"default": 0},"isSwipeFirstLeave": {"type": Boolean,"default": false},"imageClipType": {"type": String,"default": "none"}};
            obj.components = {"c-image-viewer-content": require("../ImageViewer/ImageViewerContent"),"c-toast": require("../Toast/Toast")};

            
            

            


            
            obj.data = function () {
                return {"pn": this["startIndex"],"state": {},"isLeaving": false,"isEventStart": false,"enterPosition": {},"leavePosition": {},"toast": {"state": false,"msg": ""},"store": {},"innerWidth": 0,"innerHeight": 0,"resizeTimer": 0,"isShowBg": true};
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
    