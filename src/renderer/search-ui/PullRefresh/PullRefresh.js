
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-pull-refresh-wrap"},[_c('div',{staticClass:"c-pull-refresh-header",class:{
            'c-pull-refresh-header-loading': _vm.currentStep === 3,
            'c-pull-refresh-header-loaded': _vm.currentStep === 4
        },style:({
            height: _vm.height + 'px'
        }),attrs:{"aria-live":"assertive"}},[_c('div',{staticClass:"c-pull-refresh-loading",attrs:{"aria-hidden":_vm.currentStep !== 3,"role":"alert","aria-label":"加载中"}},[_c('i',{staticClass:"c-pull-refresh-pulling-icon",style:({
                    'background-position-y': _vm.iconPosY + 'px'
                })}),_vm._v(" "),_c('i',{staticClass:"c-pull-refresh-loading-icon"}),_vm._v(" "),_c('span',{staticClass:"c-pull-refresh-loading-text c-gap-left-small"})]),_vm._v(" "),_c('div',{staticClass:"c-pull-refresh-loaded"},[_c('c-icon',{staticClass:"c-icon",attrs:{"type":"commit"}}),_vm._v(" "),_c('span',{staticClass:"c-pull-refresh-loaded-text c-gap-left-middle"},[_vm._v("\n                "+_vm._s(_vm.dataSize > 0
                        ? '为你推荐' + _vm.dataSize + '条更新'
                        : _vm.errorTip)+"\n            ")])],1)]),_vm._v(" "),_c('div',{staticClass:"c-pull-refresh-content",on:{"touchstart":_vm.onTouchStart,"touchmove":_vm.onTouchMove,"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd}},[_vm._t("default")],2)])},
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
var STATUS_NORMAL = 1;
var STATUS_PULLING = 2;
var STATUS_LOADING = 3;
var STATUS_LOADED = 4;
/**
 * @const
 * 更新动画icon是一个图片，通过position定位
 * ICON_COUNT：icon总数
 * PER_ICON_HEIGHT：每个icon的高度
 */

var ICON_COUNT = 26;
var PER_ICON_HEIGHT = 22;
var _default = {
  methods: {
    onTouchStart: function onTouchStart(e) {
      if (this.loading) {
        return;
      }

      this.currentStep = STATUS_NORMAL;
      this.originY = e.touches[0].clientY;
      this.scrollTopStart = window.pageYOffset;
    },
    onTouchMove: function onTouchMove(e) {
      if (this.loading) {
        return;
      }

      var curScrollTop = 0;
      this.curY = e.touches[0].clientY;
      this.moveY = this.curY - this.originY;
      curScrollTop = this.scrollTopStart - this.moveY;

      if (this.moveY > 0 && curScrollTop <= 0 && !this.scrollTopStart) {
        e.preventDefault();
        this.height = this.moveY;
        this.currentStep = STATUS_PULLING;
        this.triggerFlag = this.moveY > this.offset; // 跟随动画

        var limit = 20;

        if (this.moveY >= limit) {
          var iconNum = Math.round(ICON_COUNT * (this.moveY - limit) / this.offset);
          iconNum = iconNum > ICON_COUNT - 1 ? ICON_COUNT - 1 : iconNum;
          this.iconPosY = iconNum * -PER_ICON_HEIGHT;
        }
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      var that = this;

      if (that.loading) {
        return;
      }

      if (!that.triggerFlag) {
        that.reset();
        return;
      }

      that.loading = true;
      this.currentStep = STATUS_LOADING;
      this.height = this.offset;
      /**
       * on-refresh event.
       *
       * @event on-refresh
       * @property {object} param1 defer
       * @property {function} param1.success
       * @property {function} param1.fail
       */

      that.$emit('on-refresh', {
        success: function success(size) {
          if (typeof size === 'number') {
            that.refreshCallback(size);
          } else {
            that.refreshCallback(0);
          }
        },
        fail: function fail() {
          that.refreshCallback(0);
        }
      });
    },
    refreshCallback: function refreshCallback(size) {
      this.dataSize = size;
      this.currentStep = STATUS_LOADED;
      setTimeout(this.reset, this.tipShowTime);
    },
    reset: function reset() {
      this.loading = false;
      this.triggerFlag = false;
      this.height = 0;
      this.iconPosY = 0;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"offset": {"type": Number,"default": 58},"errorTip": {"type": String,"default": "暂时没有更新，休息一下吧"},"tipShowTime": {"type": Number,"default": 1280}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"curY": 0,"moveY": 0,"height": 0,"originY": 0,"iconPosY": 0,"loading": false,"triggerFlag": false,"scrollTopStart": 0,"dataSize": 0,"currentStep": 1};
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
            
            obj._scopeId = "data-a-7737df3c";

            module.exports = obj;

            
        });
    