
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dialog",staticClass:"dialog__1hGcO",style:([
        {
            position: 'fixed',
            top: '0',
            left: '0',
            width: _vm.screenWidth + 'px'
        }
    ])},[_c('div',{ref:"wrapper",staticClass:"wrapper__3_k4Z",style:([
            {
                position: 'relative',
                width: _vm.screenWidth + 'px'
            }
        ])},[_c('c-mask',{ref:"mask",staticClass:"mask__Mu-OR",attrs:{"z-index":1,"prevent-default-touchmove":false,"background-color":"rgba(0, 0, 0, .65)"},on:{"click":_vm.handleMaskClick,"touchmove":_vm.handleMaskTouchmove}}),_vm._v(" "),_c('div',{ref:"layer",staticClass:"layer__BrMoR",style:([
                {
                    'display': 'none',
                    'width': _vm.width + 'px',
                    'max-height': _vm.maxHeight + 'px',
                    'background-color': '#fff',
                    'z-index': 1
                }
            ]),on:{"touchmove":_vm.handleLayerTouchMove}},[_c('div',{staticClass:"top__2_438",on:{"touchmove":_vm.handleTopTouchMove}},[(_vm.gapTop)?(_c('div',{staticClass:"gap-top",style:({
                        paddingTop: _vm.gapTop + 'px'
                    })})):(_vm._e()),_vm._v(" "),(_vm.title)?(_c('div',{staticClass:"title__12E1m",on:{"touchmove":function($event){$event.preventDefault();}}},[_vm._v("\n                    "+_vm._s(_vm.title)+"\n                ")])):(_vm._e()),_vm._v(" "),_vm._t("title"),_vm._v(" "),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.visible)?(_c('div',[(_vm.content)?(_c('div',{ref:"content",staticClass:"content__Fv8Qk c-font-medium c-color-gray",style:([
                                {
                                    'max-height': _vm.contentMaxHeight + 'px',
                                    'text-align': _vm.contentTextAlign
                                }
                            ]),on:{"touchstart":_vm.handleContentTouchStart,"touchmove":_vm.handleContentTouchMove}},[_vm._v("\n                            "+_vm._s(_vm.content)+"\n                        ")])):(_vm._e()),_vm._v(" "),(_vm.isDefaultSlot)?(_c('div',{ref:"slot",staticClass:"slot__3wfdI",style:([
                                {
                                    'max-height': _vm.contentMaxHeight + 'px',
                                    'text-align': _vm.contentTextAlign
                                }
                            ]),on:{"touchstart":_vm.handleSlotTouchStart,"touchmove":_vm.handleSlotTouchMove}},[_vm._t("default")],2)):(_vm._e())])):(_vm._e())])],2),_vm._v(" "),(_vm.gapBottom)?(_c('div',{style:({
                    paddingBottom: _vm.gapBottom + 'px'
                })})):(_vm._e()),_vm._v(" "),(_vm.btnOpts && _vm.btnOpts.length > 0)?(_c('div',{staticClass:"bottom__3wuUs c-line-top",on:{"touchmove":function($event){$event.preventDefault();}}},_vm._l((_vm.btnOpts),function(btn,btnIndex){return _c('c-touchable-feedback',{key:btnIndex,staticClass:"btn-touch__2TO_c",style:([
                        btnIndex !== 0
                            ? {
                                'border-left': '1px solid #eee'
                            }
                            : {}
                    ]),attrs:{"data-module":"c-db"}},[_c('div',{staticClass:"btn__3yu8Z c-font-big c-color-link",style:({
                            color: btn.color
                        }),on:{"click":function($event){_vm.handleBtnClick({
                            e: $event,
                            btn: btn,
                            btnIndex: btnIndex
                        })}}},[_vm._v("\n                        "+_vm._s(btn.text)+"\n                    ")])])}))):(_vm._e())])],1)])},
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

var _stopScrollThroughMixin = _interopRequireDefault(require("../util/stopScrollThroughMixin"));

var _orientationMixin = _interopRequireDefault(require("../util/orientationMixin"));

var _stopIOSDoubleTapMixin = _interopRequireDefault(require("../util/stopIOSDoubleTapMixin"));

var _userAgent = _interopRequireDefault(require("@searchfe/user-agent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// dom 操作
// 阻止滚动穿透 mixin
// 横竖屏切换监听 mixin
// 阻止 iOS 默认双击上/下滑 mixin
// UA 用来判断是否是 iOS
var _default = {
  mixins: [_stopScrollThroughMixin["default"], _orientationMixin["default"], _stopIOSDoubleTapMixin["default"]],
  // render
  render: function render() {
    var defaultSlots = this.$slots["default"];

    if (defaultSlots && defaultSlots.length) {
      // 设置 contentSlot 标识
      this.isDefaultSlot = true;
    }

    return this.$super.render();
  },
  mounted: function mounted() {
    var _this = this;

    // 计算宽高
    this.calculateWidthHeight(); // 如果默认显示

    if (this.visible) {
      // 在主线程完成后显示
      setTimeout(function () {
        _this.show();
      }, 0);
    }
  },
  methods: {
    // 横竖屏切换监听
    mediaQueryOrientationListenerMixin: function mediaQueryOrientationListenerMixin(mediaQueryList) {
      var _this2 = this;

      // 如果对话框还显示
      if (this.visible) {
        // 先关闭对话框（不带动效），避免在横竖屏切换时出现奇怪的问题
        this.hide(false); // 触发关闭事件，保持内部和外部 visible 状态一致

        this.$emit('close');
      } // 这里的延迟是为了计算出准确的翻转手机后的 width、height


      setTimeout(function () {
        _this2.calculateWidthHeight();
      }, 500);
    },
    // 计算宽高
    calculateWidthHeight: function calculateWidthHeight() {
      this.screenWidth = (0, _domUtil.getScreenWidth)();
      this.screenHeight = (0, _domUtil.getScreenHeight)();
      this.width = parseInt(this.$platform === 'pc' ? this.pcWidth : this.screenWidth * .8, 10);
      this.maxHeight = parseInt(this.screenHeight * .55, 10); // 48 px 是底部按钮栏的高度

      this.contentMaxHeight = this.maxHeight - this.gapTop - this.titleHeight - 48;
    },
    handleMaskClick: function handleMaskClick() {
      /**
       * 蒙层点击事件
       *
       * @event maskclick
       */
      this.$emit('maskclick');
    },
    handleBtnClick: function handleBtnClick(obj) {
      /**
       * 按钮点击事件
       *
       * @event btnclick
       * @property {Event} param1.e 透传的事件对象
       * @property {number} param1.btnIndex 点击按钮的索引
       * @property {object} param1.btn 点击的按钮配置
       * @property {string} param1.btn.event 该按钮绑定的事件名
       * @property {string} param1.btn.text 该按钮的文案
       */
      this.$emit('btnclick', obj); // 如果 .event 存在

      if (obj.btn.event) {
        /**
         * 确认事件
         *
         * @event confirm
         * @property {Event} param1.e 透传的事件对象
         * @property {number} param1.btnIndex 点击按钮的索引
         * @property {object} param1.btn 点击的按钮配置
         * @property {string} param1.btn.event 该按钮绑定的事件名
         * @property {string} param1.btn.text 该按钮的文案
         */

        /**
         * 取消事件
         *
         * @event cancel
         * @property {Event} param1.e 透传的事件对象
         * @property {number} param1.btnIndex 点击按钮的索引
         * @property {object} param1.btn 点击的按钮配置
         * @property {string} param1.btn.event 该按钮绑定的事件名
         * @property {string} param1.btn.text 该按钮的文案
         */
        this.$emit(obj.btn.event, obj);
      } // 如果事件名不是 close，触发 close


      if (obj.btn.event !== 'close') {
        /**
         * 关闭事件
         *
         * @event close
         */
        this.$emit('close');
      }
    },
    // 显示
    show: function show() {
      this.$refs.mask.show();
      var dom = this.$refs.layer;
      (0, _domUtil.clearDomTransition)(dom);
      dom.style.display = 'block';
      dom.style.transform = 'scale(1.17)';
      dom.style.webkitTransform = 'scale(1.17)';
      dom.style.opacity = 0;
      this.$refs.dialog.style.height = this.screenHeight + 'px';
      this.$refs.wrapper.style.height = this.screenHeight + 'px';
      dom.offsetHeight;
      (0, _domUtil.addDomTransition)(dom, this.transitionOpts.showTransition);
      dom.style.opacity = 1;
      dom.style.transform = 'scale(1)';
      dom.style.webkitTransform = 'scale(1)'; // iOS 取消双击上滑

      if (_userAgent["default"].isIOS()) {
        this.addBodyTouchendListenerStopIOSDoubleTapMixin();
      }
    },
    // 隐藏
    hide: function hide() {
      var _this3 = this;

      var animation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // hide 方法保护，同一时间仅能触发一次 hide 方法
      if (this.hideProtection) {
        return;
      }

      this.hideProtection = true;
      this.$refs.mask.hide(animation);
      var dom = this.$refs.layer;
      (0, _domUtil.clearDomTransition)(dom);

      if (animation) {
        dom.style.display = 'block';
        dom.style.opacity = 1;
        dom.offsetHeight;
        (0, _domUtil.addDomTransition)(dom, this.transitionOpts.hideTransition);
      }

      dom.style.opacity = 0;
      setTimeout(function () {
        dom.style.display = 'none';
        _this3.$refs.dialog.style.height = 0;
        _this3.$refs.wrapper.style.height = 0;
        _this3.hideProtection = false;
      }, 300); // iOS 取消双击上滑

      if (_userAgent["default"].isIOS()) {
        this.removeBodyTouchendListenerStopIOSDoubleTapMixin();
      }
    },
    handleMaskTouchmove: function handleMaskTouchmove(e) {
      if (e.target !== this.$refs.content) {
        e.cancelable && e.preventDefault();
      }
    },
    handleLayerTouchMove: function handleLayerTouchMove(e) {
      if (e.target === e.currentTarget) {
        e.cancelable && e.preventDefault();
        e.stopPropagation();
      }
    },
    handleTopTouchMove: function handleTopTouchMove(e) {
      if (e.target === e.currentTarget) {
        e.cancelable && e.preventDefault();
        e.stopPropagation();
      }
    },
    handleContentTouchStart: function handleContentTouchStart(e) {
      this.handleTouchStartStopScrollThroughMixin(e);
    },
    handleContentTouchMove: function handleContentTouchMove(e) {
      this.handleTouchMoveStopScrollThroughMixin(e, this.$refs.content);
    },
    handleSlotTouchStart: function handleSlotTouchStart(e) {
      this.handleTouchStartStopScrollThroughMixin(e);
    },
    handleSlotTouchMove: function handleSlotTouchMove(e) {
      this.handleTouchMoveStopScrollThroughMixin(e, this.$refs.slot);
    }
  },
  watch: {
    visible: function visible(newVal, oldVal) {
      if (newVal) {
        this.show();
      } else {
        this.hide();
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"dialog":"dialog__1hGcO","wrapper":"wrapper__3_k4Z","mask":"mask__Mu-OR","layer":"layer__BrMoR","top":"top__2_438","title":"title__12E1m","content":"content__Fv8Qk","slot":"slot__3wfdI","bottom":"bottom__3wuUs","btnTouch":"btn-touch__2TO_c","btn":"btn__3yu8Z"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"visible": {"type": Boolean,"default": false},"gapTop": {"type": Number,"default": 23},"gapBottom": {"type": Number,"default": 0},"title": {"type": String,"default": ""},"titleHeight": {"type": Number,"default": 48},"content": {"type": String,"default": ""},"contentTextAlign": {"type": String,"default": "left"},"btnOpts": {"type": Array,"default": function () { return [{"event": "cancel","text": "取消"},{"event": "confirm","text": "确定"}]; }},"zIndex": {"type": Number,"default": 501},"transitionOpts": {"type": Object,"default": function () { return {"transition": "all .3s cubic-bezier(.14, .1, .12, 1)","showTransition": "all .3s cubic-bezier(.14, .1, .12, 1)","hideTransition": "all .16s cubic-bezier(0, 0, 0.3, 1)"}; }}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-line": require("../Line/Line"),"c-button": require("../Button/Button"),"c-mask": require("../Mask/Mask"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"width": 0,"pcWidth": 538,"maxHeight": "auto","contentMaxHeight": "auto","hideProtection": false};
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
            
            obj._scopeId = "data-a-37fed729";

            module.exports = obj;

            
        });
    