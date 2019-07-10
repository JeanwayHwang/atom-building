
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"data-module":"c-vis"}},[(_vm.isShowBase)?(_c('c-base',{ref:"base",attrs:{"list":_vm.list,"start-index":_vm.startIndex,"image-clip-type":_vm.imageClipType},on:{"before-enter":_vm.onBeforeEnter,"before-leave":_vm.onBeforeLeave,"after-leave":_vm.onAfterLeave,"switch":_vm.onSwitch,"tap":_vm.onTap,"swipe-down-start":_vm.onSwipeDownStart,"swipe-down-cancel":_vm.onSwipeDownCancel}},[_c('template',{slot:"feature"},[(!_vm.hidePageNum || !_vm.hideSaveButton)?(_c('toolbar',{directives:[{name:"show",rawName:"a-show",value:(_vm.isShowToolbar),expression:"isShowToolbar"}],attrs:{"index":_vm.currentIndex,"count":_vm.total,"hide-page-num":_vm.hidePageNum,"hide-save-button":_vm.hideSaveButton},on:{"save-click":_vm.onSaveClick}})):(_vm._e())],1)],2)):(_vm._e())],1)},
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

var _promise = _interopRequireDefault(require("@searchfe/promise"));

var _userAgent = _interopRequireDefault(require("@searchfe/user-agent"));

var _versionsCompare = _interopRequireDefault(require("versions-compare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// 裁剪类型
var ClipType = {
  0: 'other',
  1: 'none',
  2: 'center',
  3: 'top center'
}; // 其他剪裁类型

var OTHER_CLIP = 0; // NA 裁剪类型

var NaClipType = {
  0: 'none',
  1: 'none',
  2: 'none',
  3: 'clipping'
}; // NA 退场动画

var NaExitAnimation = {
  0: 'fade',
  1: 'scale',
  2: 'scale',
  3: 'scale'
}; // NA图片查看器调起错误

var OpenNaError = {
  errCode: 1001,
  errMsg: '大图NA_调起过于频繁'
}; // 客户端类型 0: h5 1: 手百 2: 简搜

var Client = _userAgent["default"].isBaiduBox() ? 1 : _userAgent["default"].isSearchCraft() ? 2 : 0; // 简搜支持剪裁的版本

var SECR_CLIP_VERSION = '2.13.0';
var _default = {
  mounted: function mounted() {
    var _this = this;

    // 兼容业务方手动改变disableBaiduNA 强制调起老的feed图片查看器场景
    this.disableBaiduNA = !this.isNeedBoxOpen(); // pc 不加载 @baidu/view-image 库

    if (this.$platform !== 'pc') {
      /* eslint-disable fecs-no-require */
      require(['@baidu/view-image'], function (ViewImage) {
        _this.ViewImage = ViewImage;
      });
      /* eslint-enable fecs-no-require */

    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clearWindowCallbacks();
    this.clearTimers();
  },
  methods: {
    // 函数接口
    open: function open(_ref) {
      var _this2 = this;

      var list = _ref.list,
          _ref$startIndex = _ref.startIndex,
          startIndex = _ref$startIndex === void 0 ? 0 : _ref$startIndex,
          _ref$total = _ref.total,
          total = _ref$total === void 0 ? 0 : _ref$total,
          _ref$el = _ref.el,
          el = _ref$el === void 0 ? null : _ref$el;

      if (!list || !list.length || !list[0].src) {
        return false;
      }

      this.isOpen = true;
      this.startIndex = startIndex;
      this.currentIndex = startIndex;
      this.position = {
        index: startIndex,
        el: el
      }; // 调用者明确设置了total

      this.isTotalGiven = total > 0;
      this.total = this.isTotalGiven ? total : list.length; // 复制数组，隔离外界影响

      this.list = list.slice(0, this.total); // 给图片对象增加默认属性

      this.setListProperties(this.list); // 判断图片裁剪方式

      this.imageClipType = ClipType[this.imageClip] || ClipType[OTHER_CLIP];

      if (_userAgent["default"].isBaiduBox() && !this.disableBaiduNA || Client === 2) {
        this.openNA()["catch"](function (error) {
          // 避免快速点击重复调起端上大图
          var isReopenError = error && +error.errCode === OpenNaError.errCode && error.errMsg === OpenNaError.errMsg;

          if (!isReopenError) {
            _this2.openBase();
          }
        });
      } else {
        this.openBase();
      }

      return true;
    },
    isNeedBoxOpen: function isNeedBoxOpen() {
      return _userAgent["default"].isBaiduBox() && (0, _versionsCompare["default"])(_userAgent["default"].baiduBoxVersion(), [11, 11]) >= 0;
    },
    setPosition: function setPosition(_ref2) {
      var index = _ref2.index,
          _ref2$el = _ref2.el,
          el = _ref2$el === void 0 ? null : _ref2$el;

      if (typeof index !== 'number' || !el) {
        return false;
      }

      if (this.isShowBase) {
        this.setBasePosition(index, el);
      } else {
        this.setNAPosition(index, el);
      }

      return true;
    },
    append: function append(_ref3) {
      var list = _ref3.list;

      if (!list || !list.length || !list[0].src) {
        return false;
      } // 调用者明确设置了total


      if (this.isTotalGiven) {
        // 列表数据已满
        if (this.list.length >= this.total) {
          return false;
        } // 保证不超出total大小


        if (this.list.length + list.length > this.total) {
          list = list.slice(0, this.total - this.list.length);
        }
      } else {
        this.total = this.list.length + list.length;
      } // 给图片对象增加默认属性


      this.setListProperties(list);

      if (this.isShowBase) {
        this.appendToBase(list);
      } else {
        this.appendToNA(list);
      }

      return true;
    },
    close: function close() {
      if (this.isOpen && this.isShowBase) {
        this.$refs.base.triggerLeaveEvent({
          type: 'close'
        });
        this.isOpen = false;
        return true;
      }

      return false;
    },
    // 事件接口
    onSwitch: function onSwitch(_ref4) {
      var index = _ref4.index,
          data = _ref4.data,
          _ref4$forceEmit = _ref4.forceEmit,
          forceEmit = _ref4$forceEmit === void 0 ? false : _ref4$forceEmit;
      var lastIndex = this.currentIndex;
      this.currentIndex = index;
      this.currentData = data; // 防止重复发事件

      if (lastIndex !== index || forceEmit) {
        this.$emit('switch', {
          index: index,
          data: data
        });
      }
    },
    onSaveClick: function onSaveClick() {
      this.$refs.base.showToast('请长按图片保存');
    },
    // 以下函数是内部逻辑
    // NA调用
    openNA: function openNA() {
      var _this3 = this;

      var list = this.list.map(function (item) {
        return {
          url: item.src,
          thumbnailUrl: item.thumbnail,
          imageWidth: item.width,
          imageHeight: item.height
        };
      });
      var total = this.total;
      var startIndex = this.startIndex;
      var el = this.position.el;
      var previewRect = [0, 0, 0, 0];
      var previewBase64 = '';

      var open = function open(resolve, reject) {
        _this3.callViewImageOpen(list, total, startIndex, previewRect, previewBase64).then(function (res) {
          resolve(res); // 调起后发翻页事件

          _this3.emitSwitchTimer = setTimeout(function () {
            _this3.onSwitch({
              index: _this3.currentIndex,
              data: _this3.list[_this3.currentIndex],
              forceEmit: true
            });
          }, 100);
        })["catch"](function (error) {
          reject(error);
        });
      };

      return new _promise["default"](function (resolve, reject) {
        if (el && el.getBoundingClientRect) {
          _this3.ViewImage.imgToBase64(list[startIndex].url).then(function (imgBase64) {
            previewRect = _this3.getElRect(el, true);
            previewBase64 = imgBase64;
            open(resolve, reject);
          })["catch"](function (error) {
            open(resolve, reject);
          });
        } else {
          open(resolve, reject);
        }
      });
    },
    callViewImageOpen: function callViewImageOpen(list, total, startIndex, previewRect, previewBase64) {
      var _this4 = this;

      // 清除之前的回调函数
      this.clearWindowCallbacks(); // 每次重新生成id

      this.naId = '' + +new Date(); // 注册全局函数给NA调用

      var swipeCallback = 'image_viewer_simple_swipe_' + this.naId;
      var closeCallback = 'image_viewer_simple_close_' + this.naId;
      this.addWindowCallback(swipeCallback, function (res) {
        var index = Client === 2 ? res.data.cur_index : res.data.curIndex;

        _this4.onSwitch({
          index: index,
          data: _this4.list[index]
        });
      });
      this.addWindowCallback(closeCallback, function (res) {
        _this4.clearWindowCallbacks();

        _this4.onClose();
      }); // 设置图片裁剪类型

      var naClip = NaClipType[OTHER_CLIP];
      var exitAnimation = NaExitAnimation[OTHER_CLIP]; // 判断 简搜 2.13.0 版本或者手百 11.11 版本

      if (Client === 2 && (0, _versionsCompare["default"])(_userAgent["default"].secrVersion(), SECR_CLIP_VERSION.split('.')) >= 0 || this.isNeedBoxOpen()) {
        naClip = NaClipType[this.imageClip] || NaClipType[OTHER_CLIP];
        exitAnimation = NaExitAnimation[this.imageClip] || NaExitAnimation[OTHER_CLIP];
        list.forEach(function (item, i) {
          item.exitClipping = naClip;
          item.exitClippingInfo = _this4.ViewImage.getClippingInfo({
            imageWidth: _this4.list[i] && _this4.list[i].width,
            imageHeight: _this4.list[i] && _this4.list[i].height,
            el: _this4.position.el,
            imageClip: _this4.imageClip
          });
        });
      }

      var options = {
        id: this.naId,
        imagesList: list,
        source: 'search-ui',
        index: startIndex,
        startIndex: 0,
        endIndex: list.length - 1,
        totalCount: total,
        entranceAnimation: previewBase64 ? 'scale' : 'none',
        exitAnimation: exitAnimation,
        previewRect: previewRect,
        currentImageBase64: previewBase64,
        swipeCallback: swipeCallback,
        closeCallback: closeCallback,
        isShowPageIndex: !this.hidePageNum ? '1' : '0'
      };
      return new _promise["default"](function (resolve, reject) {
        _this4.ViewImage.open(options).then(function (res) {
          resolve(res);
        })["catch"](function (error) {
          _this4.clearWindowCallbacks();

          reject(error);
        });
      });
    },
    setNAPosition: function setNAPosition(index, el) {
      var options = {
        id: this.naId,
        index: index,
        previewRect: this.getElRect(el, true),
        exitClippingInfo: this.ViewImage.getClippingInfo({
          imageWidth: this.list[index] && this.list[index].width,
          imageHeight: this.list[index] && this.list[index].height,
          el: el,
          imageClip: this.imageClip
        })
      };
      this.ViewImage.position(options);
    },
    getElRect: function getElRect(el, needRound) {
      var rect = el && el.getBoundingClientRect ? el.getBoundingClientRect() : {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      };
      return needRound ? [Math.round(rect.left), Math.round(rect.top), Math.round(rect.width), Math.round(rect.height)] : [rect.left, rect.top, rect.width, rect.height];
    },
    appendToNA: function appendToNA(list) {
      var _this$list;

      (_this$list = this.list).splice.apply(_this$list, [this.list.length, 0].concat(_toConsumableArray(list)));

      list = list.map(function (item) {
        return {
          url: item.src,
          thumbnailUrl: item.thumbnail,
          imageWidth: item.width,
          imageHeight: item.height
        };
      });
      var options = {
        id: this.naId,
        imagesList: list,
        totalCount: this.total
      };
      this.ViewImage.append(options);
    },
    setListProperties: function setListProperties(list) {
      list.forEach(function (item) {
        if (!item.thumbnail) {
          item.thumbnail = '';
        }

        if (!item.width || item.width < 10) {
          item.width = 0;
        }

        if (!item.height || item.height < 10) {
          item.height = 0;
        }
      });
    },
    addWindowCallback: function addWindowCallback(name, func) {
      window[name] = func;
      this.windowCallbacks.push(name);
    },
    clearWindowCallbacks: function clearWindowCallbacks() {
      this.windowCallbacks.forEach(function (name) {
        window[name] = null;
      });
      this.windowCallbacks = [];
    },
    clearTimers: function clearTimers() {
      if (this.emitSwitchTimer) {
        clearTimeout(this.emitSwitchTimer);
        this.emitSwitchTimer = null;
      }
    },
    // atom组件调用
    openBase: function openBase() {
      var _this5 = this;

      this.isShowBase = true; // 调起后发翻页事件

      this.$nextTick(function () {
        _this5.onSwitch({
          index: _this5.currentIndex,
          data: _this5.list[_this5.currentIndex],
          forceEmit: true
        });
      });
    },
    setBasePosition: function setBasePosition(index, el) {
      this.position = {
        index: index,
        el: el
      };
    },
    appendToBase: function appendToBase(list) {
      var _this$list2;

      // 属性变更会直接反映到组件内部
      (_this$list2 = this.list).splice.apply(_this$list2, [this.list.length, 0].concat(_toConsumableArray(list)));
    },
    // atom组件事件处理
    onBeforeEnter: function onBeforeEnter(_ref5, animate) {
      var index = _ref5.index;

      if (index === this.position.index && typeof animate === 'function') {
        animate(this.position.el);
      }
    },
    onBeforeLeave: function onBeforeLeave(_ref6, animate) {
      var index = _ref6.index;

      if (this.imageClipType !== ClipType[OTHER_CLIP]) {
        // 图片落坑
        if (index === this.position.index && typeof animate === 'function') {
          animate(this.position.el);
        }
      } // 工具栏隐藏


      this.isShowToolbar = false;
    },
    onAfterLeave: function onAfterLeave() {
      if (this.isShowBase) {
        this.isShowBase = false;
      }

      this.isShowToolbar = true;
      this.onClose();
    },
    onTap: function onTap() {
      this.$refs.base.triggerLeaveEvent({
        type: 'tap'
      });
    },
    onSwipeDownStart: function onSwipeDownStart() {
      this.isShowToolbar = false;
    },
    onSwipeDownCancel: function onSwipeDownCancel() {
      this.isShowToolbar = true;
    },
    onClose: function onClose() {
      this.isOpen = false;
      this.$emit('close', {
        index: this.currentIndex,
        data: this.list[this.currentIndex]
      });
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"hidePageNum": {"type": Boolean,"default": false},"hideSaveButton": {"type": Boolean,"default": false},"imageClip": {"type": Number,"default": 0}};
            obj.components = {"c-base": require("./Base"),"toolbar": require("./Toolbar")};

            
            

            


            
            obj.data = function () {
                return {"list": [],"total": 0,"startIndex": 0,"currentIndex": 0,"currentData": null,"isOpen": false,"isShowBase": false,"isShowToolbar": true,"isTotalGiven": false,"naId": "1","position": {},"windowCallbacks": [],"disableBaiduNA": true,"imageClipType": "none"};
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
            
            

            module.exports = obj;

            
        });
    