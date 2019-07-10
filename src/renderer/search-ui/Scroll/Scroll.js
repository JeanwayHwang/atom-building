
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-row-tile"},[_c('div',{staticClass:"c-scroll-wrapper",on:{"touchend":function($event){_vm.needTouch ? _vm.touchend($event) : null},"touchcancel":function($event){_vm.needTouch ? _vm.touchend($event) : null},"touchstart":function($event){_vm.needTouch ? _vm.touchstart($event) : null},"touchmove":function($event){_vm.needTouch ? _vm.touchmove($event) : null}}},[(_vm.width)?(_c('div',{ref:"scrollHorizontal",class:[
                _vm.snap ? 'c-scroll-inner' : 'c-scroll-touch',
                _vm.bounce ? 'c-scroll-bounce' : ''
            ],attrs:{"voice-action":"scroll-horizontal"},on:{"scroll":function($event){_vm.bounce ? _vm.onScroll($event) : null}}},[_c('div',{ref:"scroller",staticClass:"c-scroll-scroller",class:{
                    'c-scroll-scroller-flex': _vm.scrollerFlex
                },style:([
                    {
                        width: _vm.width + '%'
                    },
                    _vm.snap
                        ? {
                            'padding-right': '.17rem'
                        }
                        : {}
                ])},[_vm._l((_vm.list),function(node,i){return _c('div',{key:i,ref:"scrollItem",refInFor:true,staticClass:"c-scroll-item",style:({
                        width: node.col * _vm.rate / _vm.width * 100 + '%',
                        paddingRight: _vm.right / _vm.allCols + '%'
                    })},[_vm._t('__c__' + i)],2)}),_vm._v(" "),_vm._t("more")],2)])):(_vm._e())])])},
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

var _betterScroll = _interopRequireDefault(require("@baidu/better-scroll"));

var _userAgent = _interopRequireDefault(require("@searchfe/user-agent"));

var _domUtil = require("../util/domUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  render: function render() {
    var _this = this;

    var vnodes = this.$slots["default"] || [];
    var width = 0;
    var index = 0;
    var allCols = 0;
    this.list = [];

    if (vnodes && vnodes.length) {
      // 拿到第一个 componentOptions 不为空的 vnode 节点，计算栅格数
      for (var i = 0; i < vnodes.length; i++) {
        var vnodeItem = vnodes[i];

        if (vnodeItem.componentOptions) {
          // 拿到第一个子节点的 col 栅格数
          this.col = ~~vnodeItem.componentOptions.propsData.col;
          break;
        }
      } // 计算 slots 的个数


      this.slotsCount = vnodes.length;
    } // 遍历所有 vnode 节点


    vnodes.forEach(function (vnode) {
      // 如果 vnode 配置都没有，就返回吧
      if (!vnode.componentOptions) {
        return;
      } // 拿到 propsData


      var data = vnode.componentOptions.propsData;
      var col = ~~data.col; // 计算总 col

      allCols += col; // 如果是 snap

      if (_this.snap || _this.betterScroll) {
        width += col * _this.$data.rate + 0.5;
      } // 普通滑动
      else {
          width += col * _this.$data.rate;
        } // 把 propsData 放入数组里


      _this.list.push(data); // 把节点放入特定的 slot


      _this.$slots['__c__' + index] = [vnode]; // 索引++

      index++;
    }); // 总宽度

    this.width = width; // 总栅格数

    this.allCols = allCols;
    return this.$super.render();
  },
  mounted: function mounted() {
    var _this2 = this;

    var wrapper = this.$refs.scrollHorizontal;
    this.isIOS = _userAgent["default"].isIOS(); // 如果是： snap 滑动时定位到元素 || 弹性并且不是 iOS || 强制使用 better-scroll
    // 则使用 better-scroll

    if (this.snap || this.bounce && !this.isIOS || this.betterScroll) {
      // 计算项宽度
      this.calculateItemWidth(); // 使用 better-scroll

      this.bScroll = new _betterScroll["default"](wrapper, {
        bindToWrapper: true,
        // 将 touchmove 事件绑定至 dom 而非全局
        scrollX: true,
        scrollY: false,
        momentum: this.bounce,
        disableMouse: true,
        disablePointer: true,
        eventPassthrough: true,
        scrollbars: false,
        probeType: this.probeType,
        // 只有 snap 才设置 snap
        snap: this.snap ? {
          loop: false,
          threshold: 0.1,
          stepX: this.getStepX(),
          easing: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }
        } : false
      });

      if (this.bounce) {
        this.maxScrollX = this.bScroll.maxScrollX;
        this.onScroll();
      }

      this.bScroll.on('beforeScrollStart', function () {
        /**
         * 滚动开始之前，bounce === true || snap === true 时生效
         *
         * @event beforescrollstart
         */
        _this2.$emit('beforescrollstart');
      });
      this.bScroll.on('scrollStart', function () {
        /**
         * 滚动开始，bounce === true || snap === true 时生效
         *
         * @event scrollstart
         */
        _this2.$emit('scrollstart');
      });
      this.bScroll.on('scroll', function (obj) {
        /**
         * 滚动中，bounce === true || snap === true 时生效
         *
         * @event scroll
         * @property {number} x 当前位置
         * @property {number} startX 开始滚动的位置
         * @property {number} maxScrollX 最大滚动位置
         */
        _this2.$emit('scroll', _this2.bounce ? {
          x: obj.x,
          maxScrollX: _this2.maxScrollX,
          startX: _this2.bScroll.startX
        } : obj);
      });
      this.bScroll.on('touchEnd', function (obj) {
        /**
         * 触摸结束事件，bounce === true || snap === true 时生效
         *
         * @event touchend
         * @property {number} x 当前位置
         * @property {number} maxScrollX 最大滚动位置
         */
        _this2.$emit('touchend', _this2.bounce ? {
          x: obj.x,
          maxScrollX: _this2.maxScrollX
        } : obj);
      });
      this.bScroll.on('scrollEnd', function (obj) {
        // 只有 snap 有值才会有 bScroll.currentPage 这个字段
        _this2.pageIndex = _this2.bScroll.currentPage && _this2.bScroll.currentPage.pageX;
        /**
         * 滚动/翻页结束事件
         *
         * @event scrollend
         * @property {number} param1 页码
         * @property {Object} param2 滚动相关参数
         * @property {number} param2.x 当前位置
         * @property {number} param2.startX 开始滚动的位置
         * @property {number} param2.maxScrollX 最大滚动位置
         */

        _this2.$emit('scrollend', _this2.pageIndex, _this2.bounce ? {
          x: obj.x,
          maxScrollX: _this2.maxScrollX,
          startX: _this2.bScroll.startX
        } : obj); // 线上稳定性兼容


        _this2.$emit('scrollEnd', _this2.pageIndex, obj);
      });
      this.refresh = this.refresh.bind(this);
      this.$root.$on('attach', function () {
        _this2.refresh();
      });
      window.addEventListener('orientationchange', this.refresh);
      window.addEventListener('pageshow', this.refresh);
    } else if (this.isIOS && this.bounce) {
      var scroller = wrapper.children[0];
      this.maxScrollX = wrapper.clientWidth - scroller.clientWidth - (0, _domUtil.getRect)(scroller).left;
    }

    this.navControl = navigator.control || {};
    this.direcObj = {};
  },
  destroyed: function destroyed() {
    window.removeEventListener('orientationchange', this.refresh);
    window.removeEventListener('pageshow', this.refresh);
  },
  methods: {
    // ***** snap 滑动到元素
    // 计算项宽度
    calculateItemWidth: function calculateItemWidth() {
      // 获得宽度；默认为屏幕宽度
      this.itemWidth = document.body.clientWidth;

      if (this.$refs.scrollItem && this.$refs.scrollItem[0]) {
        // 获得第一项的宽度
        this.itemWidth = this.$refs.scrollItem[0].offsetWidth;
      }
    },
    // snap 时，计算步长
    getStepX: function getStepX() {
      // 默认使用 item 的宽度
      var stepX = this.itemWidth; // 如果 snapStepX 存在并且是 number 类型的话

      if (this.snapStepX && typeof this.snapStepX === 'number') {
        stepX = this.snapStepX * this.itemWidth;
      }

      return stepX;
    },
    // 刷新
    refresh: function refresh() {
      var _this3 = this;

      // snap
      if (this.snap) {
        // 这里延迟是因为切换横竖屏后无法立即获得宽度
        setTimeout(function () {
          // 重新计算宽度
          _this3.calculateItemWidth(); // 判断 bScroll 实例里的 snap 是否是对象


          if (_typeof(_this3.bScroll.options.snap) === 'object') {
            // 重新设置 snap
            _this3.bScroll.options.snap.stepX = _this3.getStepX();
          } // 调用 api 刷新


          _this3.bScroll.refresh();
        }, 500);
      } // 弹性滑动
      else if (this.bounce) {
          this.bScroll.refresh();
        }
    },
    onScroll: function onScroll() {
      var _this4 = this;

      var wrapper = this.$refs.scrollHorizontal;
      var nowX = -wrapper.scrollLeft;

      if (this.bounce && !this.isIOS) {
        if (nowX) {
          clearTimeout(this.timer);
          this.timer = setTimeout(function () {
            _this4.bScroll.x = nowX;

            _this4.bScroll._translate(nowX, 0);

            wrapper.scrollLeft = 0;
          }, 200);
        }
      }
    },
    // ***** 浏览器原生滑动
    touchstart: function touchstart(e) {
      if (this.navControl.gesture) {
        this.navControl.gesture(false);
      }

      this.direcObj.sx = e.touches[0].clientX;
      this.direcObj.ex = e.touches[0].clientX;
      this.direcObj.sy = e.touches[0].clientY;
      this.direcObj.ey = e.touches[0].clientY;

      if (this.bounce && this.isIOS) {
        var wrapper = this.$refs.scrollHorizontal;
        this.pointX = this.startX = wrapper.scrollLeft;
        this.started = false;
        this.startTime = Date.now();
      }
    },
    touchmove: function touchmove(e) {
      this.direcObj.ex = e.touches[0].clientX;
      this.direcObj.ey = e.touches[0].clientY;

      if (this.bounce && this.isIOS) {
        var wrapper = this.$refs.scrollHorizontal;
        this.pointX = wrapper.scrollLeft;
        var absDistX = Math.abs(this.pointX - this.startX); // We need to move at least momentumLimitDistance pixels for the scrolling to initiate

        if (absDistX < 3) {
          return;
        }

        if (!this.started) {
          this.$emit('beforescrollstart');
          this.$emit('scrollstart');
        }

        this.started = true;
        this.$emit('scroll', {
          x: -this.pointX,
          maxScrollX: this.maxScrollX,
          startX: -this.startX
        });
      }
    },
    touchend: function touchend(e) {
      // 只考虑横滑,纵向滑动忽略
      if (this.navControl.gesture) {
        this.navControl.gesture(true);
      } // 弹性 Android 走 better-scroll，忽略


      if (this.bounce && !this.isIOS) {
        return;
      }

      if (this.bounce && this.isIOS) {
        this.$emit('touchend', {
          x: -this.pointX,
          maxScrollX: this.maxScrollX
        });
      }

      if (Math.abs(this.direcObj.ex - this.direcObj.sx) > 30) {
        // 符合规范的事件名
        this.$emit('scrollend', 0, {
          x: -this.pointX,
          maxScrollX: this.maxScrollX,
          startX: -this.startX
        }); // 线上稳定性兼容

        this.$emit('scrollEnd', 0, {
          x: -this.pointX,
          maxScrollX: this.maxScrollX,
          startX: -this.startX
        });
      }
    },

    /**
     * 得到 better-scroll 的实例
     *
     * @public
     * @return {Object} better-scroll 的实例
     */
    getBScrollIns: function getBScrollIns() {
      return this.bScroll;
    },

    /**
     * 滚动到指定位置
     *
     * @public
     * @param {number} index 要滚动到位置的索引
     */
    scrollTo: function scrollTo(index) {
      if (!this.bScroll) {
        return;
      }

      if (index <= 0) {
        this.bScroll.scrollTo(0, 0, this.scrollTime);
      } else {
        this.bScroll.scrollToElement(this.$slots["default"][index].elm, this.scrollTime);
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"snap": {"type": Boolean,"default": false},"snapStepX": Number,"scrollerFlex": {"type": Boolean,"default": false},"bounce": {"type": Boolean,"default": false},"probeType": {"type": Number,"default": 3},"betterScroll": {"type": Boolean,"default": false}};
            obj.components = {};

            
            

            
    var computed = obj.computed || {};
    computed["needTouch"] = function () { return (!(this["snap"]||(this["bounce"]&&(!this["isIOS"])))); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"rate": 8.508771929824562,"right": 24.742268041237114,"itemWidth": 0,"slotsCount": 0,"pageNum": 0,"pageIndex": 0,"isIOS": false,"scrollTime": 500};
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
            
            obj._scopeId = "data-a-43035d5c";

            module.exports = obj;

            
        });
    