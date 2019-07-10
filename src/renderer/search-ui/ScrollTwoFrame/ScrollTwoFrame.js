
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.type === 'auto')?(_c('div',{staticClass:"scroll-auto__3jUhc",on:{"touchstart":_vm.touchstart,"touchmove":_vm.touchmove,"touchend":_vm.touchend,"touchcancel":_vm.touchend}},[_c('div',{staticClass:"wrapper__3o6aV"},[_c('div',{staticClass:"scroller__1DYkA",style:([
                    {
                        width: _vm.width + '%'
                    }
                ])},_vm._l((2),function(i,rowIndex){return _c('div',{key:rowIndex,staticClass:"row__3MdwI"},_vm._l((_vm.column),function(j,columnIndex){return _c('div',{key:columnIndex,staticClass:"item__tKbbR",style:([
                            {
                                width: _vm.col * _vm.rate / _vm.width * 100 + '%',
                                paddingRight: _vm.right / _vm.allCols + '%'
                            }
                        ])},[_vm._t('c-scroll-two-frame-slot' + (_vm.orientation === 'horizontal'
                                ? (columnIndex + rowIndex * _vm.column)
                                : (rowIndex + columnIndex * 2)
                            ))],2)}))}))])])):(_c('c-scroll',{ref:"scroll",attrs:{"bounce":_vm.bounce,"probe-type":_vm.probeType,"snap":_vm.snap,"snap-step-x":_vm.snapStepX,"scroller-flex":""},on:{"beforescrollstart":_vm.handleBeforeScrollStart,"scrollstart":_vm.handleScrollStart,"scroll":_vm.handleScroll,"touchend":_vm.handleTouchEnd,"scrollend":_vm.handleScrollEnd}},[_vm._l((_vm.column),function(item,index){return _c('c-scroll-item',{key:index,attrs:{"col":_vm.col}},_vm._l((2),function(item2,index2){return _c('div',{key:index2,class:[
                    'c-scroll-two-item',
                    index2 ? 'c-gap-top' : ''
                ],on:{"click":function($event){_vm.handleItemClick(
                    _vm.orientation === 'horizontal'
                        ? (index + index2 * _vm.column)
                        : (index2 + index * 2)
                )}}},[_vm._t('c-scroll-two-frame-slot' + (_vm.orientation === 'horizontal'
                        ? (index + index2 * _vm.column)
                        : (index2 + index * 2)
                    ))],2)}))}),_vm._v(" "),(_vm.moreUrl)?(_c('c-scroll-item',{attrs:{"col":4}},[_c('c-touchable-feedback',{staticStyle:{"position":"absolute","top":".05rem","bottom":"0","left":"0","right":"0"},attrs:{"open":!!(_vm.moreUrl || (_vm.moreUrlParams && _vm.moreUrlParams.tcUrl)),"url":_vm.moreUrl,"url-params":_vm.moreUrlParams,"is-jump":"","expand":""}},[_c('c-more',{attrs:{"url":_vm.moreUrl,"params":_vm.moreUrlParams},on:{"showMore":_vm.showMore}})],1)],1)):(_vm._e()),_vm._v(" "),(_vm.rightSlotCol)?(_c('c-scroll-item',{attrs:{"col":_vm.rightSlotCol}},[_vm._t("right")],2)):(_vm._e())],2))],1)},
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
var _default = {
  mounted: function mounted() {
    this.navControl = this.navControl = navigator.control || {};
    this.direcObj = {};
  },
  methods: {
    showMore: function showMore() {
      /**
       * 当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件
       *
       * @event showmore
       */
      this.$emit('showmore');
    },
    handleItemClick: function handleItemClick(index) {
      /**
       * 当点击项不做url跳转有特殊操作时，可在组件外层调用的地方绑定该事件
       *
       * @event itemclick
       * @property {number} param1 索引
       */
      this.$emit('itemclick', index);
    },
    handleBeforeScrollStart: function handleBeforeScrollStart() {
      /**
       * 滚动开始之前，同[Scroll](./Scroll#API)
       *
       * @event beforescrollstart
       */
      this.$emit('beforescrollstart');
    },
    handleScrollStart: function handleScrollStart() {
      /**
       * 滚动开始，同[Scroll](./Scroll#API)
       *
       * @event scrollstart
       */
      this.$emit('scrollstart');
    },
    handleScroll: function handleScroll(obj) {
      /**
       * 滚动中，同[Scroll](./Scroll#API)
       *
       * @event scroll
       */
      this.$emit('scroll', obj);
    },
    handleTouchEnd: function handleTouchEnd(obj) {
      /**
       * 触摸结束，同[Scroll](./Scroll#API)
       *
       * @event touchend
       */
      this.$emit('touchend', obj);
    },
    handleScrollEnd: function handleScrollEnd(pageIndex, obj) {
      /**
       * 滚动结束，同[Scroll](./Scroll#API)
       *
       * @event scrollend
       */
      this.$emit('scrollend', pageIndex, obj);
    },

    /**
     * 得到 better-scroll 的实例
     *
     * @public
     * @return {Object} better-scroll 的实例
     */
    getBScrollIns: function getBScrollIns() {
      return this.$refs.scroll.getBScrollIns();
    },
    // 浏览器原生滑动
    touchstart: function touchstart(e) {
      if (this.navControl.gesture) {
        this.navControl.gesture(false);
      }

      this.direcObj.sx = e.touches[0].clientX;
      this.direcObj.ex = e.touches[0].clientX;
      this.direcObj.sy = e.touches[0].clientY;
    },
    touchmove: function touchmove(e) {
      this.direcObj.ex = e.touches[0].clientX;
      this.direcObj.ey = e.touches[0].clientY;
    },
    touchend: function touchend(e) {
      // 只考虑横滑,纵向滑动忽略
      if (this.navControl.gesture) {
        this.navControl.gesture(true);
      }

      if (Math.abs(this.direcObj.ex - this.direcObj.sx) > 30) {
        // 符合规范的事件名
        this.$emit('scrollend');
      }
    }
  },
  computed: {
    width: function width() {
      var width = 0;

      for (var i = 0; i < this.column; i++) {
        width += this.col * this.rate;
      }

      return width;
    },
    allCols: function allCols() {
      var allCols = 0;

      for (var i = 0; i < this.column; i++) {
        allCols += this.col;
      }

      return allCols;
    }
  },
  watch: {
    // 监听 length 变化
    length: function length(newVal, oldVal) {
      if (!newVal) {
        return;
      } // 重新设置列数


      this.column = newVal === 1 ? 1 : Math.floor(newVal / 2);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"scrollAuto":"scroll-auto__3jUhc","wrapper":"wrapper__3o6aV","scroller":"scroller__1DYkA","row":"row__3MdwI","item":"item__tKbbR"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"orientation": {"type": String,"default": "horizontal"},"length": {"type": Number},"col": {"type": Number,"default": 4},"moreUrl": {"type": String},"moreUrlParams": {"type": Object},"bounce": {"type": Boolean,"default": false},"probeType": {"type": Number,"default": 0},"rightSlotCol": Number,"snap": Boolean,"snapStepX": Number,"type": {"type": String,"default": "normal"}};
            obj.components = {"c-scroll": require("../Scroll/Scroll"),"c-scroll-item": require("../Scroll/ScrollItem"),"c-more": require("../More/More"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"column": (((this["length"]===1))?(1):(this['math_floor']((this["length"]/2)))),"rate": 8.508771929824562,"right": 24.742268041237114};
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
    