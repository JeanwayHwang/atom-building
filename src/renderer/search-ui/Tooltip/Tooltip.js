
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip__189D9"},[_c('c-touchable-stop',{style:({
            visibility: _vm.mShow ? 'visible' : 'hidden'
        })},[(_vm.mask)?(_c('div',{ref:"mask",staticClass:"mask__3uD6x",style:({
                zIndex: _vm.zIndex
            }),on:{"click":_vm.onMaskClick,"touchmove":function($event){$event.preventDefault();}}})):(_vm._e()),_vm._v(" "),_c('div',{ref:"inner",staticClass:"inner__20-Hj",style:([
                {
                    width: _vm.mWidth + 'px',
                    zIndex: _vm.zIndex + 1,
                    top: _vm.vDirection === 'up'
                        ? _vm.top - _vm.height - _vm.triangleArrow.height - _vm.gap.top + 'px'
                        : _vm.top + _vm.triggerDom.height + _vm.triangleArrow.height + _vm.gap.top + 'px',
                    left: _vm.hDirection === 'left'
                        ? _vm.rowTileGap + 'px'
                        : '',
                    right: _vm.hDirection === 'right'
                        ? _vm.rowTileGap + 'px'
                        : '',
                    transformOrigin: _vm.transformOrigin,
                    webkitTransformOrigin: _vm.transformOrigin
                },
                _vm.hDirectionEnd === 'right' && _vm.vDirection === 'down'
                    ? {
                        borderTopRightRadius: 0
                    }
                    : {},
                _vm.hDirectionEnd === 'right' && _vm.vDirection === 'up'
                    ? {
                        borderBottomRightRadius: 0
                    }
                    : {},
                _vm.hDirectionEnd === 'left' && _vm.vDirection === 'down'
                    ? {
                        borderTopLeftRadius: 0
                    }
                    : {},
                _vm.hDirectionEnd === 'left' && _vm.vDirection === 'up'
                    ? {
                        borderBottomLeftRadius: 0
                    }
                    : {}
            ]),on:{"touchmove":function($event){$event.preventDefault();}}},[_vm._t("default"),_vm._v(" "),(_vm.vDirection === 'down')?(_c('div',{staticClass:"triangle-up__3LNOk",style:([
                    {
                        left: _vm.triangleArrow.left + 'px'
                    },
                    _vm.hDirectionEnd === 'right'
                        ? {
                            left: null,
                            right: '0',
                            borderWidth: '0 0 7px 7px'
                        }
                        : {},
                    _vm.hDirectionEnd === 'left'
                        ? {
                            left: 0,
                            borderWidth: '0 7px 7px 0'
                        }
                        : {}
                ])})):(_vm._e()),_vm._v(" "),(_vm.vDirection === 'up')?(_c('div',{staticClass:"triangle-down__R9wlg",style:([
                    {
                        left: _vm.triangleArrow.left + 'px'
                    },
                    _vm.hDirectionEnd === 'right'
                        ? {
                            left: null,
                            right: '0',
                            borderWidth: '7px 0 0 7px'
                        }
                        : {},
                    _vm.hDirectionEnd === 'left'
                        ? {
                            left: 0,
                            borderWidth: '7px 7px 0 0'
                        }
                        : {}
                ])})):(_vm._e())],2)])],1)},
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

var _orientationMixin = _interopRequireDefault(require("../util/orientationMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// dom 操作
// 横竖屏切换监听 mixin
var _default = {
  mixins: [_orientationMixin["default"]],
  mounted: function mounted() {
    this.calculateWidthHeight();
  },
  activated: function activated() {
    var _this = this;

    // 这里的延迟是为了计算出准确的翻转手机后的 width、height
    setTimeout(function () {
      _this.calculateWidthHeight();
    }, 500);
  },
  deactivated: function deactivated() {
    this.hideFunc(false);
  },
  methods: {
    // 横竖屏切换监听
    mediaQueryOrientationListenerMixin: function mediaQueryOrientationListenerMixin(mediaQueryList) {
      var _this2 = this;

      // 如果对话框还显示
      if (this.mShow) {
        // 触发关闭事件，保持内部和外部 visible 状态一致
        this.$emit('close'); // 这里用 $nextTick 是因为 $emit('close') 以后会触发 watch show 的变化，就会触发 this.hideFunc() 带动效，为了避免带动效关闭，所以这里要在 nextTick 以后再无动效的关闭一次

        this.$nextTick(function () {
          // 先关闭对话框（不带动效），避免在横竖屏切换时出现奇怪的问题
          _this2.hideFunc(false);
        });
      } // 这里的延迟是为了计算出准确的翻转手机后的 width、height


      setTimeout(function () {
        _this2.calculateWidthHeight();
      }, 500);
    },
    // 计算宽高
    calculateWidthHeight: function calculateWidthHeight() {
      this.screenWidth = (0, _domUtil.getScreenWidth)();
      this.screenHeight = (0, _domUtil.getScreenHeight)();
      this.height = this.$refs.inner.offsetHeight;

      if (this.screenWidth <= 360) {} // this.rowTileGap = this.rowTileGap * .9;
      // 这里是为了处理当页面宽度超过 Tooltip 宽度（默认为 200） 的时候，箭头和提示气泡分离，所以将提示气泡加宽的处理


      var diff = this.screenWidth / 2 - (this.width - this.triangleArrow.width / 2);

      if (diff > 0) {
        this.mWidth = this.width + diff + this.triangleArrow.width / 2;
      }
    },
    onMaskClick: function onMaskClick() {
      this.$emit('close');
    },
    showFunc: function showFunc() {
      var isAnimation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.domShowOrHide(true, isAnimation);
    },
    hideFunc: function hideFunc() {
      var isAnimation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.domShowOrHide(false, isAnimation);
    },
    // 元素动画
    domShowOrHide: function domShowOrHide(isShow, isAnimation) {
      var _this3 = this;

      var maskDom = this.$refs.mask;
      var tooltipDom = this.$refs.inner;
      (0, _domUtil.clearDomTransition)(maskDom);
      (0, _domUtil.clearDomTransition)(tooltipDom); // 显示

      if (isShow) {
        this.mShow = true;

        if (isAnimation) {
          // 缩放从 0.83 到 1
          tooltipDom.style.transform = 'scale(0.83)';
          tooltipDom.style.webkitTransform = 'scale(0.83)'; // 透明度从 0 到 1

          maskDom.style.opacity = 0;
          tooltipDom.style.opacity = 0; // 强制更新 dom

          maskDom.offsetHeight;
          (0, _domUtil.addDomTransition)(maskDom, this.transitionOpts.maskShowTransition);
          (0, _domUtil.addDomTransition)(tooltipDom, this.transitionOpts.tooltipShowTransition); // 只有有动画的时候才做缩放

          tooltipDom.style.transform = 'scale(1)';
          tooltipDom.style.webkitTransform = 'scale(1)';
        }

        maskDom.style.opacity = 1;
        tooltipDom.style.opacity = 1;
      } // 隐藏
      else {
          if (isAnimation) {
            // 透明度从 1 到 0
            maskDom.style.opacity = 1;
            tooltipDom.style.opacity = 1; // 缩放从 1 到 0.83

            tooltipDom.style.transform = 'scale(1)';
            tooltipDom.style.webkitTransform = 'scale(1)'; // 强制更新 dom

            maskDom.offsetHeight;
            (0, _domUtil.addDomTransition)(maskDom, this.transitionOpts.maskHideTransition);
            (0, _domUtil.addDomTransition)(tooltipDom, this.transitionOpts.tooltipHideTransition); // 只有有动画的时候才做缩放

            tooltipDom.style.transform = 'scale(0.83)';
            tooltipDom.style.webkitTransform = 'scale(0.83)';
          }

          maskDom.style.opacity = 0;
          tooltipDom.style.opacity = 0; // 这里的延时设置为 mShow = false 是因为需要同步状态，延时是因为需要在动画做完以后再设置状态

          setTimeout(function () {
            _this3.mShow = false;
          }, 300);
        }
    }
  },
  computed: {
    transformOrigin: function transformOrigin() {
      var h = '';
      var v = '';

      if (this.hDirection === 'left') {
        h = this.triangleArrow.left + 'px';
      } else {
        h = this.triangleArrow.left + 'px';
      }

      if (this.vDirection === 'up') {
        v = 'bottom';
      } else {
        v = 'top';
      }

      return h + ' ' + v;
    }
  },
  watch: {
    show: function show(newVal, oldVal) {
      if (newVal) {
        this.showFunc(this.animate);
      } else {
        this.hideFunc(this.animate);
      }
    },
    top: function top(newVal, oldVal) {
      if (newVal > this.screenHeight / 2) {
        this.vDirection = 'up';
      } else {
        this.vDirection = 'down';
      }
    },
    left: function left(newVal, oldVal) {
      // 屏幕的宽度减去 rowTile 的宽度，再减去三角形箭头的宽度，再减去边框的弧度
      var rowTileGapTemp = this.rowTileGap;

      if (window.innerWidth <= 360) {
        rowTileGapTemp = Math.floor(rowTileGapTemp * .9);
      } // 箭头顶到左侧


      if (newVal >= rowTileGapTemp && newVal < rowTileGapTemp + this.triangleArrow.width / 2 + 5) {
        this.hDirectionEnd = 'left';
      } // 箭头顶到右侧
      else if (newVal > this.screenWidth - rowTileGapTemp - this.triangleArrow.width - 5) {
          this.hDirectionEnd = 'right';
        } // 箭头哪也没顶，就在中间
        else {
            this.hDirectionEnd = '';
          }

      if (newVal > this.screenWidth / 2) {
        this.hDirection = 'right';
        var innerRight = this.screenWidth - this.mWidth - this.rowTileGap * 2;
        /* eslint-disable max-len */

        this.triangleArrow.left = this.left - this.rowTileGap - (this.triangleArrow.width / 2 - this.triggerDom.width / 2) - innerRight;
        /* eslint-enable max-len */
      } else {
        this.hDirection = 'left';
        /* eslint-disable max-len */

        this.triangleArrow.left = this.left - this.rowTileGap - (this.triangleArrow.width / 2 - this.triggerDom.width / 2);
        /* eslint-enable max-len */
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"tooltip":"tooltip__189D9","innerWrapper":"inner-wrapper__1-0Xs","inner":"inner__20-Hj","triangleUp":"triangle-up__3LNOk","triangleDown":"triangle-down__R9wlg","mask":"mask__3uD6x"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"show": {"type": Boolean,"default": false,"required": true},"top": {"type": Number,"required": true},"left": {"type": Number,"required": true},"gap": {"type": Object,"default": function () { return {"top": 0}; }},"width": {"type": Number,"default": 200},"triggerDom": {"type": Object,"default": function () { return {"width": 0,"height": 0}; }},"mask": {"type": Boolean,"default": true},"zIndex": {"type": [Number,String],"default": 501},"animate": {"type": Boolean,"default": true},"transitionOpts": {"type": Object,"default": function () { return {"tooltipShowTransition": "opacity .2s cubic-bezier(.4,.2,.6,1),transform .2s cubic-bezier(.4,.2,.6,1)","tooltipHideTransition": "opacity .26s cubic-bezier(.4,.2,.6,1), transform .26s cubic-bezier(.4,.2,.6,1)","maskShowTransition": "opacity .2s cubic-bezier(.42,0,.52,1)","maskHideTransition": "opacity .3s cubic-bezier(0,0,.3,1)"}; }}};
            obj.components = {"c-touchable-stop": require("../TouchableFeedback/TouchableStop")};

            
            

            


            
            obj.data = function () {
                return {"mShow": this["show"],"mWidth": this["width"],"screenWidth": 0,"screenHeight": 0,"rowTileGap": 17,"height": 0,"triangleArrow": {"height": 7,"width": 14,"left": 0},"vDirection": "down","hDirection": "left","hDirectionEnd": ""};
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
    