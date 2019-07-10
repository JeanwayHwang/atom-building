
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-infinite-scroll"},[_c('div',{staticClass:"c-infinite-scroll-topbar c-infinite-scroll-animating",style:({
            height: _vm.topHeight + 'px'
        })}),_vm._v(" "),_vm._t("default"),_vm._v(" "),(_vm.mode === 'click')?(_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.status === 0),expression:"status === 0"}],on:{"click":_vm.load}},[(_vm.loadBtnShow)?(_c('c-spread-bottom-btn',{attrs:{"log-class":_vm.logClass,"spread-text":_vm.loadBtnText}})):(_vm._e()),_vm._v(" "),_vm._t("loadBtnSlot")],2)):(_vm._e()),_vm._v(" "),(_vm.mode === 'scroll'
            ||
            (_vm.mode === 'click' && _vm.status !== 0)
        )?(_c('c-infinite-scroll-bottom-bar',{attrs:{"status":_vm.status,"loading-text":_vm.loadingText,"load-end-text":_vm.loadEndText,"load-fail-text":_vm.loadFailText,"bg-color":_vm.bottomOpts && _vm.bottomOpts.bgColor,"icon-color":_vm.bottomOpts && _vm.bottomOpts.iconColor,"text-color":_vm.bottomOpts && _vm.bottomOpts.textColor,"row-tile":_vm.bottomOpts && _vm.bottomOpts.rowTile},on:{"click":_vm.reload}})):(_vm._e())],2)},
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
 * @file 无限滚动组件 c-infinite-scroll
 * @author chenrui09@baidu.com
 * @changer wangkai37@baidu.com
 */
var _default = {
  mounted: function mounted() {
    var _this = this;

    var self = this;
    var maxHeight = this.bottomHeightDef;
    var lockedUp = false;
    var lockedDown = false;
    var pos = {
      startY: 0,
      moveY: 0,
      dy: 0
    }; // 初始化事件

    this.onTouchStart = function (e) {
      // document.body.scrollHeight 页面整个的高度（包括超出屏幕的部分）
      // scrollY 当前滚动高度
      // window.innerHeight 屏幕高度
      // 页面滚动到顶部
      if (window.scrollY === 0) {
        lockedUp = true;
        pos.startY = e.touches[0].clientY;
      } // 页面滚动到底部


      if (document.body.scrollHeight - window.scrollY - window.innerHeight === 0) {
        lockedDown = true;
        pos.startY = e.touches[0].clientY;
      }
    };

    this.onTouchMove = function (e) {
      if (lockedDown) {
        pos.moveY = e.touches[0].clientY;

        if (pos.moveY < pos.startY) {
          pos.dy = Math.min(Math.sqrt(pos.startY - pos.moveY) * 3, maxHeight);
          self.bottomHeight = self.bottomHeightDef + pos.dy;
        }
      }
    };

    this.onTouchEnd = function () {
      if (lockedUp) {
        lockedUp = false;
        self.topHeight = self.topHeightDef;
      }

      if (lockedDown) {
        lockedDown = false;
        self.bottomHeight = self.bottomHeightDef;
      }
    };

    this.onScroll = function () {
      if (_this.mode !== 'scroll') {
        return;
      }

      if (!self.active || self.status !== self.LOAD_STATUS.IDLE) {
        return;
      }

      var buffer = self.bufferHeightPx; // 当文档高度不满一屏时，scrollHeight 在 Safari 中还是一屏的高度，并不是实际文档的高度，这里改用 offsetHeight

      var left = document.body.offsetHeight - window.scrollY - window.innerHeight;

      if (left <= buffer) {
        self.load();
      }
    };

    this.$root.$on('attach', function () {
      self.attach();
    });
    this.$root.$on('detach', function () {
      self.detach();
    });

    if (!this.inited && !this.active) {
      this.inited = true;
      this.attach(); // 自动加载

      if (this.autoLoad) {
        self.onScroll();
      }
    }
  },
  destroyed: function destroyed() {
    this.detach();
  },
  methods: {
    /**
     * 触发加载
     *
     * @public
     */
    load: function load() {
      var self = this;
      this.status = this.LOAD_STATUS.LOADING;
      this.bottomText = this.loadingText;
      /**
       * 触发加载事件
       *
       * @event load
       * @property {number} param1.index 页码
       * @property {Function} param1.success 控制将状态置为加载成功的函数
       * @property {Function} param1.complete 控制将状态置为加载完成的函数
       * @property {Function} param1.fail 控制将状态置为加载失败的函数
       */

      this.$emit('load', {
        index: self.oPageNum,
        success: function success() {
          self.status = self.LOAD_STATUS.IDLE;
          self.bottomText = '';
          self.oPageNum++;
          self.$nextTick(function () {
            self.onScroll();
          });
        },
        complete: function complete() {
          self.status = self.LOAD_STATUS.LOAD_END;
          self.bottomText = self.loadEndText;
        },
        fail: function fail() {
          self.status = self.LOAD_STATUS.LOAD_FAIL;
          self.bottomText = self.loadFailText;
        }
      });
    },
    reload: function reload() {
      if (this.status === this.LOAD_STATUS.LOAD_FAIL) {
        this.load();
      }
    },
    attach: function attach() {
      var container = window;
      var viewer = this.$el;

      if (this.inited && !this.active && this.mode === 'scroll') {
        this.active = true;
        viewer.addEventListener('touchstart', this.onTouchStart);
        viewer.addEventListener('touchmove', this.onTouchMove);
        viewer.addEventListener('touchend', this.onTouchEnd);
        viewer.addEventListener('touchcancel', this.onTouchEnd);
        container.addEventListener('scroll', this.onScroll);
      }
    },
    detach: function detach() {
      var container = window;
      var viewer = this.$el;

      if (this.inited && this.active && this.mode === 'scroll') {
        this.active = false;
        viewer.removeEventListener('touchstart', this.onTouchStart);
        viewer.removeEventListener('touchmove', this.onTouchMove);
        viewer.removeEventListener('touchend', this.onTouchEnd);
        viewer.removeEventListener('touchcancel', this.onTouchEnd);
        container.removeEventListener('scroll', this.onScroll);
      }
    },

    /**
     * 重置组件状态
     *
     * @public
     * @param {number} pageNum 初始化到第几页
     */
    reset: function reset(pageNum) {
      this.oPageNum = pageNum || 0;
      this.status = this.LOAD_STATUS.IDLE;
      this.bottomText = '';
    },

    /**
     * 主动设置加载状态为加载成功
     *
     * @public
     */
    success: function success() {
      var _this2 = this;

      this.status = this.LOAD_STATUS.IDLE;
      this.bottomText = '';
      this.oPageNum++;
      this.$nextTick(function () {
        _this2.onScroll();
      });
    },

    /**
     * 主动设置加载状态为加载完成
     *
     * @public
     */
    complete: function complete() {
      this.status = this.LOAD_STATUS.LOAD_END;
      this.bottomText = this.loadEndText;
    },

    /**
     * 主动设置加载状态为加载失败
     *
     * @public
     */
    fail: function fail() {
      this.status = this.LOAD_STATUS.LOAD_FAIL;
      this.bottomText = this.loadFailText;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"pageNum": {"type": Number,"default": 0},"loadingText": {"type": String,"default": "正在加载..."},"loadEndText": {"type": String,"default": "到底了 没有更多内容了"},"loadFailText": {"type": String,"default": "加载失败 点击重新加载"},"bufferHeightPx": {"type": Number,"default": 10},"mode": {"type": String,"default": "scroll"},"loadBtnShow": {"type": Boolean,"default": true},"loadBtnText": {"type": String,"default": "展开更多"},"logClass": {"type": Boolean,"default": true},"bottomOpts": {"type": Object},"autoLoad": {"type": Boolean,"default": true}};
            obj.components = {"c-infinite-scroll-bottom-bar": require("./InfiniteScrollBottomBar"),"c-spread-bottom-btn": require("../SpreadEnhanced/SpreadBottomBtn")};

            
            

            


            
            obj.data = function () {
                return {"LOAD_STATUS": {"IDLE": 0,"LOADING": 1,"LOAD_END": 2,"LOAD_FAIL": 3},"inited": false,"active": false,"status": 0,"oPageNum": this["pageNum"],"topHeight": 0,"topHeightDef": 0,"bottomText": "","bottomHeight": 52,"bottomHeightDef": 52};
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
            
            obj._scopeId = "data-a-2cfc2664";

            module.exports = obj;

            
        });
    