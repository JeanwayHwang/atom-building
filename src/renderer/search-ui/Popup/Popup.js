
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-popup-wrapper",style:(_vm.isFixed ? 'position: fixed' : '')},[_c('c-transition',{attrs:{"enter":{
            animations: {
                fadeIn: {
                    fill: 'end'
                }
            },
            options: {
                duration: 300,
                easing: 'cubic-bezier(0.42, 0, 0.52, 1)'
            }
        },"leave":{
            animations: {
                fadeIn: {
                    reverse: true,
                    fill: 'end'
                }
            },
            options: {
                duration: 300,
                easing: 'cubic-bezier(0, 0, 0.3, 1)'
            }
        }},on:{"after-leave":_vm.afterMaskLeave,"before-enter":_vm.beforeMaskEnter}},[(_vm.isOpen)?(_c('div',{staticClass:"c-popup-mask",attrs:{"role":"button","aria-label":"关闭"},on:{"click":_vm.close,"touchmove":function($event){$event.preventDefault();}}})):(_vm._e())]),_vm._v(" "),_c('c-transition',{attrs:{"enter":{
            animations: {
                slideUp: {}
            },
            options: {
                duration: 300,
                easing: 'cubic-bezier(0.42, 0, 0.52, 1)'
            }
        },"leave":{
            animations: {
                slideUp: {
                    reverse: true,
                    fill: 'end'
                }
            },
            options: {
                duration: 160,
                easing: 'cubic-bezier(0.46, 0, 1, 1)'
            }
        }}},[(_vm.isOpen)?(_c('div',{staticClass:"c-popup-box",style:({
                'max-height': _vm.maxHeight,
                'min-height': _vm.minHeight
            })},[(!_vm.isHideHeader)?(_c('div',{staticClass:"c-popup-header",class:{
                    'c-line-bottom': !_vm.isHideHeaderBorderBottom
                },style:({padding: _vm.hasPadding ? '0 .17rem' : '0'}),on:{"touchmove":function($event){$event.preventDefault();}}},[(_vm.isHasTitleSlot)?(_c('div',{staticClass:"c-gap-top c-gap-bottom"},[_c('div',{staticClass:"c-popup-slothd-close",on:{"click":_vm.close}},[(_vm.isHasCloseSlot)?(_vm._t("close")):(_c('c-icon',{staticClass:"c-font-medium",attrs:{"type":"close_line"}}))],2),_vm._v(" "),_vm._t("title")],2)):(_c('c-row',[(_vm.isHasTLeftSlot)?(_c('c-span',{staticClass:"c-popup-ver-middle",attrs:{"col":"3"}},[_vm._t("left")],2)):(_vm._e()),_vm._v(" "),_c('c-span',{attrs:{"col":_vm.isHasTLeftSlot ? 6 : 9}},[_c('div',{staticClass:"c-popup-title"},[_c('div',{staticClass:"c-popup-header-middle"},[_c('c-line',{staticClass:"c-title c-color-link",attrs:{"align":_vm.isHasTLeftSlot ? 'center' : 'left'}},[_vm._v("\n                                    "+_vm._s(_vm.title)+"\n                                ")]),_vm._v(" "),(_vm.subtitle)?(_c('c-line',{staticClass:"c-color-gray c-gap-inner-top-small c-popup-subtitle",attrs:{"align":_vm.isHasTLeftSlot ? 'center' : 'left'}},[_vm._v("\n                                    "+_vm._s(_vm.subtitle)+"\n                                ")])):(_vm._e())],1)])]),_vm._v(" "),_c('c-span',{staticClass:"c-popup-tar c-span-middle",attrs:{"col":"3"}},[_c('c-touchable-feedback',{staticClass:"c-popup-ib",attrs:{"top":.15,"bottom":.15,"left":-.05,"right":-.05,"background-color":"rgba(0, 0, 0, .08)"}},[_c('div',{on:{"click":_vm.close}},[(_vm.isHasCloseSlot)?(_vm._t("close")):(_c('c-icon',{staticClass:"c-font-medium c-popup-close-icon",attrs:{"type":"close_line"}}))],2)])],1)],1))],1)):(_vm._e()),_vm._v(" "),_c('div',{ref:"content",staticClass:"c-popup-content",style:({padding: _vm.hasPadding ? '0 .17rem' : '0'}),on:{"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove}},[_vm._t("default")],2),_vm._v(" "),(_vm.isHasFooterSlot)?(_c('div',{staticClass:"c-popup-footer",style:({padding: _vm.hasPadding ? '0 .17rem' : '0'}),on:{"touchmove":function($event){$event.preventDefault();}}},[_vm._t("footer")],2)):(_vm._e())])):(_vm._e())])],1)},
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
* @file 弹层组件
* @author haoyan
*/
var _default = {
  methods: {
    close: function close() {
      /**
       * close event.
       *
       * @event close
       */
      this.$emit('close');
    },
    afterMaskLeave: function afterMaskLeave() {
      this.isFixed = false;
    },
    beforeMaskEnter: function beforeMaskEnter() {
      this.isFixed = true;
    },
    handleTouchStart: function handleTouchStart(e) {
      this.startY = e.touches[0].clientY;
    },
    handleTouchMove: function handleTouchMove(e) {
      if (!this.stopTouchEventThrough) {
        return true;
      }

      this.touchMoveEvent = e; // 0 代表该没有滚动区域；1 代表有滚动区域且滚动到了最上面；2 代表滚动到底部了且滚动到了最下面；3 代表滚动在滚动区域

      this.status = 3; // 拿到需要滚动的 dom

      var el = this.$refs.content;
      var currentY = e.touches[0].clientY;

      if (el.scrollTop === 0) {
        // 如果内容小于容器则同时禁止上下滚动
        this.status = el.offsetHeight >= el.scrollHeight ? 0 : 1;
      } else if (el.scrollTop + el.offsetHeight + 1 >= el.scrollHeight) {
        // 已经滚到底部了只能向上滚动
        this.status = 2;
      }

      if (this.status !== 3) {
        // 判断当前的滚动方向；10 为向上；01 为向下
        this.direction = currentY - this.startY > 0 ? 1 : 2; // 没有滚动区域

        if (this.status === 0) {
          e.cancelable && e.preventDefault();
        } // 已经滑到最上了还滑
        else if (this.status === 1 && this.direction === 1) {
            e.cancelable && e.preventDefault();
          } // 已经滑到最下了还滑
          else if (this.status === 2 && this.direction === 2) {
              e.cancelable && e.preventDefault();
            }
      }
    }
  },
  computed: {
    isHasCloseSlot: function isHasCloseSlot() {
      if (this.$slots.close && this.$slots.close.length) {
        return true;
      }

      return false;
    },
    isHasTLeftSlot: function isHasTLeftSlot() {
      if (this.$slots.left && this.$slots.left.length) {
        return true;
      }

      return false;
    },
    isHasTitleSlot: function isHasTitleSlot() {
      if (this.$slots.title && this.$slots.title.length) {
        return true;
      }

      return false;
    },
    isHasFooterSlot: function isHasFooterSlot() {
      if (this.$slots.footer && this.$slots.footer.length) {
        return true;
      }

      return false;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"title": {"type": String,"default": ""},"subtitle": {"type": String,"default": ""},"isOpen": {"type": Boolean,"default": false},"hasPadding": {"type": Boolean,"default": true},"transition": {"type": Boolean,"default": true},"isHideHeader": {"type": Boolean,"default": false},"isHideHeaderBorderBottom": {"type": Boolean,"default": false},"maxHeight": {"type": String},"minHeight": {"type": String},"stopTouchEventThrough": {"type": Boolean,"default": true}};
            obj.components = {"c-line": require("../Line/Line"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-icon": require("../Icon/Icon"),"c-transition": require("../Motion/Transition"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"isFixed": false};
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
            
            obj._scopeId = "data-a-53867729";

            module.exports = obj;

            
        });
    