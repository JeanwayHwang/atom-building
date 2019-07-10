
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-to-top-wrapper WA_LOG_BTN",attrs:{"role":"button","aria-label":"回到顶部","data-module":"c-tt"},on:{"click":_vm.handleClick}},[_c('c-touchable-feedback',{ref:"toTopTouchableFeedback",staticClass:"c-to-top",style:({
            'width': _vm.size,
            'height': _vm.size,
            'right': _vm.right,
            'bottom': _vm.bottom,
            'z-index': _vm.zIndex,
            'visibility': _vm.isHidden ? 'hidden' : 'visible',
            'opacity': _vm.show ? '1' : '0'
        }),attrs:{"border-radius":"50%","background-color":"rgba(0, 0, 0, .2)"}},[_c('c-icon',{staticClass:"c-color-link",style:({
                'font-size': _vm.iconFontSize,
                'line-height': _vm.size
            }),attrs:{"aria-hidden":"true","type":"back_to_top"}})],1)],1)},
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
 * @file 返回顶部组件
 * @author dongrenguang (dongrenguang@baidu.com)
 *         wangkai37 (wangkai37@baidu.com)
 */
var _default = {
  mounted: function mounted() {
    var _this = this;

    // 获取网页可视区域高度
    var visualHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.scrollHeightThreshold = visualHeight * this.showThreshold;
    this.inited = false;
    this.$root.$on('attach', function () {
      _this.attach();
    });
    this.$root.$on('detach', function () {
      _this.detach();
    });

    if (!this.inited) {
      this.attach();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.detach();
  },
  methods: {
    attach: function attach() {
      if (!this.inited) {
        this.inited = true;
      }

      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('touchstart', this.handleWindowTouchStart); // 监听动画完成事件

      this.$refs.toTopTouchableFeedback.$el.addEventListener('webkitTransitionEnd', this.handleTransitionEnd);
      this.$refs.toTopTouchableFeedback.$el.addEventListener('transitionend', this.handleTransitionEnd);
    },
    detach: function detach() {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('touchstart', this.handleWindowTouchStart);
    },
    // window touchstart
    handleWindowTouchStart: function handleWindowTouchStart(e) {
      // 获得当前 scrollTop
      this.lastScrollTop = this.scrollTop(window);
    },
    // 判断是否展现
    judgeIsShow: function judgeIsShow() {
      // 获得当前 scrollTop
      this.curScrollTop = this.scrollTop(window);

      if (this.lastScrollTop) {
        this.diffScrollTop = this.lastScrollTop - this.curScrollTop;

        if (this.curScrollTop <= this.scrollHeightThreshold) {
          this.show = false;
          return;
        }

        if (this.diffScrollTop > 1) {
          // 在控制透明度前要先显示出来
          this.isHidden = false;
          this.show = true;
        } else if (this.diffScrollTop < -1) {
          this.show = false;
        }
      }

      this.lastScrollTop = this.curScrollTop;
    },
    // 点击事件
    handleClick: function handleClick(e) {
      this.show = false;
      this.scrollTop(window, 0);
      /**
       * click event.
       *
       * @event click
       */

      this.$emit('click', e);
    },
    onScroll: function onScroll() {
      this.scrollCount++;
      this.judgeIsShow();
    },
    // 得到当前滚动到顶部的位置
    scrollTop: function scrollTop(el, value) {
      var hasScrollTop = 'scrollTop' in el;

      if (value === undefined) {
        return hasScrollTop ? el.scrollTop : el.pageYOffset;
      }

      if (hasScrollTop) {
        el.scrollTop = value;
      } else {
        el.scrollTo(el.scrollX, value);
      }
    },
    // transition 动画结束
    handleTransitionEnd: function handleTransitionEnd() {
      if (this.show) {
        this.isHidden = false;
      } else {
        this.isHidden = true;
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"size": {"type": String,"default": "40px"},"right": {"type": String,"default": "17px"},"bottom": {"type": String,"default": "73px"},"zIndex": {"type": Number,"default": 200},"iconFontSize": {"type": String,"default": "20px"},"showThreshold": {"type": Number,"default": 1}};
            obj.components = {"c-icon": require("../Icon/Icon"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"show": false,"isHidden": false,"lastScrollTop": 0,"diffScrollTop": 0,"curScrollTop": 0,"touchMoveCount": 0,"scrollCount": 0};
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
            
            obj._scopeId = "data-a-133e54d1";

            module.exports = obj;

            
        });
    