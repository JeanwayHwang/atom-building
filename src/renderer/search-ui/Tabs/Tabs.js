
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-tabs",attrs:{"rl-type":_vm.contentTouchableStop ? 'stop' : null}},[(!_vm.noContent && _vm.bottom)?(_c('c-tabs-content',{ref:"content",attrs:{"selected":_vm.oSelected,"has-slide-animation":_vm.hasSlideAnimation,"content-gap-top":_vm.contentGapTop,"inner-height":_vm.innerHeight,"loading-data":_vm.tabList,"force-height-transition":_vm.forceHeightTransition},on:{"transitionend":_vm.handleContentWrapperTransitionEnd}},[_vm._l((_vm.tabList),function(item,index){return _vm._t('__c__' + index)})],2)):(_vm._e()),_vm._v(" "),_c('c-row',{class:{
            'c-gap-top-small': _vm.gapTop,
            'c-gap-bottom-small': !_vm.bottom && _vm.gapBottom && _vm.contentGapTop
        },style:({
            display: (_vm.hideNav && _vm.len === 1) ? 'none' : 'block',
            overflow: 'hidden'
        }),attrs:{"type":"tile","data-module":"c-tb","rl-type":"stop"}},[_c('div',{class:{'c-tabs-nav-view': _vm.bottom || _vm.allowScroll}},[_c('ul',{ref:"tabsNav",class:{
                    'c-tabs-nav': true,
                    'c-tabs-nav-bottom': _vm.bottom
                },style:(_vm.tabsNavSty),attrs:{"voice-action":"switch","role":"tablist"}},[_vm._l((_vm.tabList),function(tab,index){return [_c('li',{key:index,ref:"labels",refInFor:true,staticClass:"WA_LOG_TAB c-tabs-nav-li",class:[{
                            'c-tabs-nav-selected': index === _vm.oSelected,
                            'c-navs-scroll-select-bottom': index === _vm.oSelected && !_vm.bottomAnimation,
                            'c-tabs-nav-selected-bg': _vm.bottom && index === _vm.oSelected,
                            'c-tabs-nav-bottom-padding': _vm.bottom,
                            'c-tabs-nav-touch-active': (_vm.activeIndex !== _vm.oSelected) && (_vm.activeIndex === index),
                            'c-tabs-nav-touch-selected': (_vm.activeIndex !== _vm.oSelected) && (_vm.oSelected === index)
                        }],attrs:{"data-module":tab.dataModule ? tab.dataModule : '',"data-log":tab.logContent,"data-nolog":!_vm.isOpenLog,"voice-config":'switch.item:' + tab.label,"aria-selected":_vm.oSelected === index,"role":"tab"},on:{"click":function($event){_vm.headerItemClick(index)},"touchstart":function($event){_vm.touchNav(index)}}},[_c('c-link',{staticClass:"c-tabs-a",attrs:{"url":(tab.params && tab.params.url) ? tab.params.url : null,"params":(tab.params && tab.params.linkOption) ? tab.params.linkOption : null}},[(tab.params && tab.params.url)?([(tab.icon)?(_c('img',{staticClass:"c-gap-right-small",attrs:{"src":tab.icon}})):(_vm._e()),_vm._v(" "),_c('span',{staticClass:"c-tabs-nav-li-span"},[_vm._v("\n                                    "+_vm._s(tab.label)+"\n                                ")])]):([(tab.icon)?(_c('img',{staticClass:"c-gap-right-small",attrs:{"src":tab.icon}})):(_vm._e()),_vm._v(" "),_c('span',[_vm._v(_vm._s(tab.label))])])],2)],1)]}),_vm._v(" "),_c('div',{ref:"bottomBar",staticClass:"c-tabs-nav-bottombar",style:(_vm.bottombarStyle)})],2)])]),_vm._v(" "),(!_vm.noContent && !_vm.bottom)?(_c('c-tabs-content',{ref:"content",attrs:{"selected":_vm.oSelected,"has-slide-animation":_vm.hasSlideAnimation,"content-gap-top":_vm.contentGapTop,"inner-height":_vm.innerHeight,"loading-data":_vm.tabList,"force-height-transition":_vm.forceHeightTransition},on:{"transitionend":_vm.handleContentWrapperTransitionEnd}},[_vm._l((_vm.tabList),function(item,index){return _vm._t('__c__' + index)})],2)):(_vm._e())],1)},
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

/**
 * @file Tabs
 * @author yaochang(yaochang@baidu.com)
 */
var _default = {
  render: function render(ctx) {
    var _this = this;

    var vnodes = this.$slots["default"];
    this.tabList = [];
    vnodes.forEach(function (vnode, index) {
      _this.$slots['__c__' + index] = [vnode];
      var data = vnode.componentOptions.propsData;
      var itemObj = {
        label: data.label,
        icon: data.icon,
        isLoading: data.isLoading ? data.isLoading : false,
        logContent: JSON.stringify(data.logContent),
        params: data.params,
        dataModule: data.tabDataModule ? data.tabDataModule : ''
      };

      _this.tabList.push(itemObj);
    });
    this.len = this.tabList.length;
    return this.$super.render();
  },
  watch: {
    selected: function selected(value, old) {
      var _this2 = this;

      if (value === this.oSelected) {
        return;
      }

      if (value > this.tabList.length) {
        return;
      } // 为了避免 len 和 selected 同时被修改时，导致 selected tab 的下边线定位错误的问题，加上 nextTick


      this.$nextTick(function () {
        _this2.oSelected = value;

        _this2.change(value, old);
      });
    },
    len: function len(value) {
      this.$nextTick(this.reset);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.getNavsWidth();
    this.position = this.getPosition(this.$refs.labels[this.oSelected]);
    this.reset();
    this.$root.$on('attach', function () {
      _this3.activeIndex = _this3.oSelected;

      _this3.reset();
    });
    this.$nextTick(function () {
      _this3.bottomAnimation = true;

      _this3.animationInit();
    });
    window.addEventListener('resize', this.reset);
    window.addEventListener('orientationchange', this.reset);
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.reset);
    window.removeEventListener('orientationchange', this.reset);
  },
  methods: {
    reset: function reset(index) {
      var _this4 = this;

      // 组件已经被销毁，就不要 reset 了
      if (this._isDestroyed) {
        return;
      }

      index = typeof index === 'number' ? index : this.oSelected;
      this.position = this.getPosition(this.$refs.labels[this.oSelected]);
      this.$nextTick(function () {
        _this4.animationInit();

        if (_this4.bottom || _this4.allowScroll) {
          _this4.setScroll();
        }
      });
    },
    refresh: function refresh() {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.reset();

        _this5.$refs.content.reset();
      });
    },
    contentRefresh: function contentRefresh() {
      var _this6 = this;

      this.$nextTick(function () {
        _this6.$refs.content.reset();
      });
    },
    headerItemClick: function headerItemClick(index) {
      if (this.disableEvent) {
        return;
      }
      /**
       * 点击组件头部时可选项时触发.
       *
       * @event clickHeaderItem
       * @property {object} param1.index 点击 tab 序号
       */


      this.$emit('clickHeaderItem', {
        index: index
      });
      this.change(index);
    },
    touchNav: function touchNav(index) {
      this.activeIndex = index;
    },
    getPosition: function getPosition(dom) {
      if (!dom || !dom.offsetParent) {
        return {
          left: null,
          right: null
        };
      }

      var parentDom = dom.offsetParent;
      var left = dom.offsetLeft + parentDom.offsetLeft;
      var right = left + dom.offsetWidth;
      return {
        left: left,
        right: right
      };
    },
    animationInit: function animationInit() {
      var _this$position = this.position,
          left = _this$position.left,
          right = _this$position.right;

      if (!this.$refs.bottomBar) {
        return;
      }

      this.$refs.bottomBar.setAttribute('style', "\n                height: 1px;\n                background-color: ".concat(this.bottombarColor, ";\n                left: ").concat(left, "px;\n                width: ").concat(right - left, "px;\n            "));
    },
    animation: function animation(value) {
      var _this7 = this;

      var _this$position2 = this.position,
          oldLeft = _this$position2.left,
          oldRight = _this$position2.right;
      this.position = this.getPosition(this.$refs.labels[value]);
      var _this$position3 = this.position,
          left = _this$position3.left,
          right = _this$position3.right;
      this.$nextTick(function () {
        var scaleX = (right - left) / (oldRight - oldLeft);
        var tranX = (right + left - oldRight - oldLeft) / 2;

        _this7.$refs.bottomBar.setAttribute('style', "\n                    height: 1px;\n                    background-color: ".concat(_this7.bottombarColor, ";\n                    left: ").concat(oldLeft, "px;\n                    width: ").concat(oldRight - oldLeft, "px;\n                    transition: transform .24s cubic-bezier(.4, 0, .2, 1);\n                    -webkit-transition: -webkit-transform .24s cubic-bezier(.4, 0, .2, 1);\n                    transform: translate3d(").concat(tranX, "px, 0, 0) scaleX(").concat(scaleX, ") ;\n                    -webkit-transform: translate3d(").concat(tranX, "px, 0, 0) scaleX(").concat(scaleX, ") ;\n                    transform-origin: 50% 0 0;\n                    -webkit-transform-origin: 50% 0 0;\n                "));
      });
    },
    change: function change(value, old) {
      var _this8 = this;

      old = old === undefined ? this.oSelected : old;

      if (value === old) {
        return;
      }

      this.oSelected = value;
      /**
       * 改变选定项时触发.
       *
       * @event change
       * @property {object} param1 新 tab 序号
       * @property {object} param2 旧 tab 序号
       */

      this.$emit('change', value, old); // 下方是动画的逻辑处理代码

      this.$nextTick(function () {
        _this8.animationInit();

        _this8.animation(value);
      }); // 滑动对象存在,执行滑动并传递autoScroll标记用于scrollEnd事件判断

      if (this.tabScroll) {
        var scrollToIndex = value > 0 ? value - 1 : value;
        var nav = this.tabsNav.children[scrollToIndex];
        this.tabScroll.scrollToElement(nav, 240, 0, 0, '', {
          autoScroll: true
        });
      }
    },
    setScroll: function setScroll() {
      var _this9 = this;

      this.$nextTick(function () {
        if (!_this9.$refs.tabsNav) {
          return;
        }

        var view = _this9.$refs.tabsNav.parentNode;
        var viewWidth = view.offsetWidth;
        var current = _this9.oSelected;
        var sum = _this9.tabList.length;

        if (!_this9.tabScroll) {
          _this9.tabScroll = new _betterScroll["default"](view, {
            bindToWrapper: true,
            // 将 touchmove 事件绑定至 dom 而非全局
            disableMouse: true,
            disablePointer: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: true,
            scrollbars: false
          });
        } // 前置检测选中的tab是否在可视区


        if (current > 0 && current < sum) {
          var currentTab = Math.min(current, sum - 1);

          if (_this9.position.right > viewWidth) {
            var scrollToIndex = currentTab > 0 ? currentTab - 1 : currentTab;

            _this9.tabScroll.scrollToElement(_this9.tabsNav.children[scrollToIndex], 240);
          }
        } // 若tab横滑回调方法存在,执行回调


        _this9.tabScroll.on('scrollEnd', function () {
          if (_this9.customFlag && _this9.customFlag.autoScroll) {
            // 若为自动触发滑动，不执行回调
            return;
          }
          /**
           * 选项卡nav滑动结束触发.
           *
           * @event onTabScrollEnd
           */


          _this9.$emit('onTabScrollEnd', _this9);
        });
      });
    },
    getNavsWidth: function getNavsWidth() {
      if (this.bottom || this.allowScroll) {
        // c-tabs-nav节点的左右padding
        this.tabsNav = this.$refs.tabsNav;
        var pdl = parseFloat(getComputedStyle(this.tabsNav).paddingLeft);
        var pdr = parseFloat(getComputedStyle(this.tabsNav).paddingRight); // 计算navs总宽度

        var navsWidth = pdl + pdr;
        Array.prototype.forEach.call(this.tabsNav.children, function (el) {
          if (el.tagName.toLowerCase() === 'li') {
            navsWidth += parseFloat(getComputedStyle(el).width);
          }
        }); // 设置tabs实际区域宽度

        this.tabsNavSty = {
          width: navsWidth + 'px'
        };
      }
    },
    handleContentWrapperTransitionEnd: function handleContentWrapperTransitionEnd() {
      /**
       * transitionend event.
       *
       * @event transitionend
       */
      this.$emit('transitionend');
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"selected": {"type": Number,"default": 0},"allowScroll": {"type": Boolean,"default": false},"bottom": {"type": Boolean,"default": false},"hasSlideAnimation": {"type": Boolean,"default": false},"isOpenLog": {"type": Boolean,"default": true},"hideNav": {"type": Boolean,"default": false},"innerHeight": {"type": Number,"default": 0},"disableEvent": {"type": Boolean,"default": false},"noContent": {"type": Boolean,"default": false},"gapTop": {"type": Boolean,"default": true},"gapBottom": {"type": Boolean,"default": true},"contentGapTop": {"type": Boolean,"default": true},"contentTouchableStop": {"type": Boolean,"default": true},"forceHeightTransition": Boolean};
            obj.components = {"c-row": require("../Row/Row"),"c-loading": require("../Loading/Loading"),"c-tabs-content": require("./TabsContent"),"c-link": require("../Link/Link")};

            
            

            


            
            obj.data = function () {
                return {"oSelected": this["selected"],"len": 0,"bottombarColor": "#000","tabsNavSty": {},"bottombarStyle": "","activeIndex": this["selected"],"bottomAnimation": false,"position": {"left": 0,"right": 0}};
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
            
            obj._scopeId = "data-a-1bfe34b3";

            module.exports = obj;

            
        });
    