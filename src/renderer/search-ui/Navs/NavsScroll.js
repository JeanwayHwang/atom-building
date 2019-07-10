
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-navs-scroll-container",class:{
        'c-navs-scroll-container-zindex': _vm.hasMask,
        'c-navs-scroll-container-open': _vm.isOpen,
        'c-navs-scroll-container-close': !_vm.isOpen
    },style:({'background-color': _vm.backgroundColor})},[_c('div',{ref:"scrollWrapper",staticClass:"c-navs-scroll-wrapper",class:{'c-navs-sub-scroll-wrapper': _vm.type === 'navSub'},style:({'margin-right': _vm.gapRight + 'rem'})},[_c('div',{ref:"scroll",staticClass:"c-navs-scroll-content"},[_c('ul',{attrs:{"voice-action":"switch","voice-tag":"导航","role":"tablist"}},_vm._l((_vm.labelList),function(label,index){return _c('c-link',{key:index,ref:"items",refInFor:true,staticClass:"c-color-gray-a li",class:{
                        'c-navs-scroll-selected': index === _vm.selectedIndex,
                        'c-navs-scroll-select-bottom': index === _vm.selectedIndex && !_vm.bottomAnimation,
                        'WA_LOG_TAB': !label.url
                    },style:({
                        display: 'block'
                    }),attrs:{"data-nolog":!_vm.isOpenLog,"data-log":_vm.logContent.logList && _vm.logContent.logList[index] ? _vm.logContent.logList[index] : null,"voice-config":'switch.item:' + label.txt,"url":label.url,"params":label.params,"aria-checked":index === _vm.selectedIndex,"role":"tab"},on:{"click":function($event){_vm.itemClick(index)}}},[_c('span',{style:(index === _vm.selectedIndex
                            ? {
                                'color': _vm.selectedColor,
                                'border-color': _vm.selectedColor
                            }
                            : {
                                color: _vm.itemStyle.color,
                                opacity: _vm.itemStyle.opacity
                            })},[_vm._v("\n                        "+_vm._s(label.txt)+"\n                    ")])])}))]),_vm._v(" "),_c('div',{ref:"bottomBar",staticClass:"c-navs-scroll-bottom",style:(_vm.bottomStyle)})])])},
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 动画原理实现 初始化时使用的为选项的 border-bottom 显示下划线 改变初始化时下划线闪烁现象
// 更改选定选项时，使用的是 bottom div 来生成动画效果， 当单纯的scroll 滑动时bottom div 隐藏，选项border-bottom出现
var _default = {
  methods: {
    itemClick: function itemClick(index) {
      this.$emit('clickItem', index);
    },
    getPosition: function getPosition(dom) {
      if (dom === undefined) {
        return {
          left: 0,
          right: 0
        };
      }

      var transform = this.$refs.scroll.style.transform || this.$refs.scroll.style.webkitTransform;
      var parentLeft = transform.match(/\d+/g)[0];
      var left = dom.offsetLeft - parentLeft + this.$refs.scroll.offsetLeft;
      var right = left + dom.offsetWidth;
      return {
        left: left,
        right: right
      };
    },
    // 判断具体手机型号是否进行降级处理
    supportAnimation: function supportAnimation() {
      var ua = navigator.userAgent.toLowerCase();
      var version = ua.match(/zte\sn939st/);

      if (version) {
        return false;
      }

      return true;
    },
    animationInit: function animationInit(old) {
      var _this$position = this.position,
          left = _this$position.left,
          right = _this$position.right;
      this.bottomAnimation = true;
      this.$refs.bottomBar && this.$refs.bottomBar.setAttribute('style', "\n                height: 2px;\n                background-color: ".concat(this.selectedColor, ";\n                left: ").concat(left, "px;\n                width: ").concat(right - left, "px;\n            "));
    },
    animation: function animation(value) {
      var _this$position2 = this.position,
          oldLeft = _this$position2.left,
          oldRight = _this$position2.right;
      this.position = this.getPosition(this.$refs.items[value].$el);
      var _this$position3 = this.position,
          left = _this$position3.left,
          right = _this$position3.right;
      this.$nextTick(function () {
        var scaleX = (right - left) / (oldRight - oldLeft);
        var tranX = (right + left - oldRight - oldLeft) / 2;
        this.$refs.bottomBar && this.$refs.bottomBar.setAttribute('style', "\n                    height: 2px;\n                    background-color: ".concat(this.selectedColor, ";\n                    left: ").concat(oldLeft, "px;\n                    width: ").concat(oldRight - oldLeft, "px;\n                    transition: transform .24s cubic-bezier(0.4, 0, 0.2, 1);\n                    -webkit-transition: -webkit-transform .24s cubic-bezier(0.4, 0, 0.2, 1);\n                    transform: translate3d(").concat(tranX, "px, 0, 0) scaleX(").concat(scaleX, ") ;\n                    -webkit-transform: translate3d(").concat(tranX, "px, 0, 0) scaleX(").concat(scaleX, ") ;\n                    transform-origin: 50% 0 0;\n                    -webkit-transform-origin: 50% 0 0;\n                "));
      });
    },
    animationDone: function animationDone() {
      var _this = this;

      this.bottomAnimation = false;
      this.$nextTick(function () {
        _this.$refs.bottomBar && _this.$refs.bottomBar.setAttribute('style', '');
      });
    }
  },
  watch: {
    selectedIndex: function selectedIndex(value, oldValue) {
      // 滑动动画
      this.$nextTick(function () {
        if (value <= 1 && value >= 0) {
          this.iScroll.scrollToElement(this.$refs.items[0].$el, 240);
        }

        if (value > 1 && value < this.labelList.length) {
          this.iScroll.scrollToElement(this.$refs.items[value - 1].$el, 240);
        }

        if (this.type === 'navSub' || this.isDownGrade) {
          return;
        }

        this.animationInit(oldValue);
        this.animation(value);
      });
    },
    labelList: function labelList() {
      this.$nextTick(function () {
        // 更新滑动框
        this.iScroll.refresh();
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var scrollOpt = {
      bindToWrapper: true,
      // 将 touchmove 事件绑定至 dom 而非全局
      scrollX: true,
      scrollY: false,
      disableMouse: true,
      disablePointer: true,
      eventPassthrough: true,
      scrollbars: false
    };
    this.iScroll = new _betterScroll["default"](this.$refs.scrollWrapper, scrollOpt);
    this.$nextTick(function () {
      var value = this.selectedIndex;
      this.iScroll.scrollToElement(this.$refs.items[Math.max(0, value - 1)].$el, 240);
    });
    var me = this;
    this.iScroll.on('scrollEnd', function () {
      me.$emit('scrollEnd');
    });

    if (this.type === 'navSub') {
      return;
    }

    this.isDownGrade = !this.supportAnimation();
    this.iScroll.on('scrollStart', function () {
      me.position = me.getPosition(me.$refs.items[me.selectedIndex].$el);
      me.animationDone();
    });
    this.iScroll.on('scrollEnd', function () {
      me.position = me.getPosition(me.$refs.items[me.selectedIndex].$el);
    });
    this.position = this.getPosition(this.$refs.items[this.selectedIndex].$el);
    this.$refs.bottomBar && this.$refs.bottomBar.addEventListener('transitionend', this.animationDone, false);
    this.$root.$on('attach', function () {
      _this2.iScroll.refresh();
    });
  },
  destroyed: function destroyed() {
    this.iScroll && this.iScroll.destroy();
    this.iScroll = null;
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"labelList": {"type": Array,"required": true},"selectedIndex": {"type": Number,"default": 0},"itemStyle": {"type": Object,"default": function () { return {"color": "#666","opacity": "1"}; }},"selectedColor": {"type": String,"default": "#333"},"backgroundColor": {"type": String,"default": "#fff"},"type": {"type": String,"default": "nav"},"isOpenLog": {"type": Boolean,"default": true},"logContent": {"type": Object,"default": function () { return {}; }},"gapRight": {"type": Number,"default": 0.34},"hasMask": {"type": Boolean,"default": false},"isOpen": {"type": Boolean,"default": false}};
            obj.components = {"c-link": require("../Link/Link")};

            
            

            


            
            obj.data = function () {
                return {"position": {"left": 0,"right": 0},"isDownGrade": false,"bottomAnimation": false};
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
            
            obj._scopeId = "data-a-5785bea8";

            module.exports = obj;

            
        });
    