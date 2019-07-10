
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"contentWrapper",staticClass:"c-tabs-content-wrapper",class:{
        'c-tabs-content-wrapper-animation': (!_vm.isDownGrade && !_vm.isResetAnimation) || _vm.forceHeightTransition
    },style:({
        height: _vm.wrapperHeight > 0 ? _vm.wrapperHeight + 'px' : 'auto',
        margin: _vm.$platform === 'pc' ? '0 -9px' : '0 -.17rem'
    }),attrs:{"inner-height":_vm.innerHeight},on:{"transitionend":_vm.handleContentWrapperTransitionEnd,"webkitTransitionEnd":_vm.handleContentWrapperTransitionEnd}},[_c('transition-group',{attrs:{"name":_vm.animation,"tag":"div"},on:{"before-enter":_vm.beforeContentEnter,"enter":_vm.contentEnter}},_vm._l((_vm.tabList),function(tab,index){return _c('div',{directives:[{name:"show",rawName:"a-show",value:(index === _vm.selected),expression:"index === selected"}],key:'_c_' + index,ref:"tabs",refInFor:true,staticClass:"c-tabs-content",class:{'c-tabs-content-animation': _vm.contentPosition},style:({
                height: (_vm.loadingDur[index] || tab.isLoading) && _vm.wrapperHeight
                    ? _vm.wrapperHeight + 'px'
                    : 'auto'
            })},[_c('transition',{on:{"before-enter":_vm.beforeContentEnter,"enter":_vm.contentEnter}},[_c('c-loading',{directives:[{name:"show",rawName:"a-show",value:(_vm.loadingDur[index] || tab.isLoading),expression:"loadingDur[index] || tab.isLoading"}],key:'__loading__' + index,staticClass:"c-tabs-loading"})],1),_vm._v(" "),_c('transition',{attrs:{"name":"display"},on:{"enter":_vm.contentEnter,"before-enter":_vm.beforeContentEnter}},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(!_vm.loadingDur[index] && !tab.isLoading),expression:"!loadingDur[index] && !tab.isLoading"}],staticClass:" c-tabs-content-inner",class:{'c-gap-top-small': _vm.contentGapTop}},[_vm._t('__c__' + index)],2)])],1)}))],1)},
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
 * @file TabsContent
 * @author yaochang(yaochang@baidu.com)
 */
var _default = {
  render: function render(ctx) {
    var _this = this;

    var vnodes = this.$slots["default"];
    this.tabList = vnodes.map(function (vnode, index) {
      _this.$slots['__c__' + index] = [vnode];
      var data = vnode.componentOptions.propsData;
      var itemObj = {
        isLoading: data.isLoading ? data.isLoading : false
      };
      return itemObj;
    });
    return this.$super.render();
  },
  watch: {
    selected: function selected(newVal, oldVal) {
      var _this2 = this;

      if (newVal === oldVal) {
        return;
      }

      this.wrapperHeight = this.$refs.contentWrapper.offsetHeight; // 设置最少 loading 时间

      if (this.tabList[newVal].isLoading) {
        setTimeout(function () {
          _this2.$set(_this2.loadingDur, newVal, false);
        }, 640);
      }

      this.setSlideAnimation(newVal, oldVal);
      this.$nextTick(function () {
        if (_this2.animation) {
          _this2.animation = null;
        }
      });
    },
    innerHeight: function innerHeight(newVal, oldVal) {
      var _this3 = this;

      if (newVal) {
        this.$nextTick(function () {
          _this3.isResetAnimation = false;
          _this3.wrapperHeight = newVal;
        });
      }
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.isDownGrade = this.isIosSmall() || this.isLowChrome();
    this.wrapperHeight = this.$refs.contentWrapper.offsetHeight;
    this.contentPosition = true;
    this.loadingDur = this.tabList.map(function (value) {
      return value.isLoading;
    });
    this.$root.$on('attach', function () {
      _this4.reset();
    });
    window.addEventListener('resize', this.reset);
    window.addEventListener('orientationchange', this.reset);
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.reset);
    window.removeEventListener('orientationchange', this.reset);
  },
  methods: {
    // 判断手机型号为iPhone 小屏机，包括4, 4s, 5, 5s, se 等
    isIosSmall: function isIosSmall() {
      var isIphone = /iphone/.test(navigator.userAgent.toLowerCase());
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      return width < 321 && isIphone;
    },
    isLowChrome: function isLowChrome() {
      var ua = navigator.userAgent.toLowerCase();
      var isAndroid = /android/.test(ua);

      if (isAndroid) {
        var chromeReg = /chrome\/(\w*)/g;
        var chromeos = ua.match(chromeReg);

        if (chromeos && chromeos[0]) {
          chromeos = parseInt(chromeos[0].substring(7), 10);

          if (chromeos > 52) {
            return false;
          }

          return true;
        }
      }

      return false;
    },
    setSlideAnimation: function setSlideAnimation(value, old) {
      if (!this.hasSlideAnimation) {
        return;
      }

      if (value < old) {
        this.animation = 'c-tabs-left';
      } else {
        this.animation = 'c-tabs-right';
      }
    },
    beforeContentEnter: function beforeContentEnter(dom) {
      if (this.hasSlideAnimation) {
        this.isResetAnimation = false;
      }
    },
    contentEnter: function contentEnter(dom) {
      var _this5 = this;

      if (this.tabList[this.selected].isLoading) {
        this.wrapperHeight = this.wrapperHeight < 120 ? 120 : this.wrapperHeight;
      } else {
        // 这里的 nextTick 是为了保证当 loading 结束时，只有 dom 完全渲染以后才开始取高度
        this.$nextTick(function () {
          _this5.wrapperHeight = _this5.$refs.tabs[_this5.selected].offsetHeight;
        });
      }

      setTimeout(function () {
        _this5.isResetAnimation = true;
      }, 400);
    },
    reset: function reset() {
      this.wrapperHeight = this.$refs.tabs[this.selected].offsetHeight;
    },
    refresh: function refresh() {
      var _this6 = this;

      this.$nextTick(function () {
        _this6.reset();
      });
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

            obj.props = {"selected": {"type": Number,"default": 0},"hasSlideAnimation": {"type": Boolean,"default": false},"innerHeight": {"type": Number,"default": 0},"contentGapTop": {"type": Boolean,"default": true},"loadingData": Array,"forceHeightTransition": Boolean};
            obj.components = {"c-loading": require("../Loading/Loading")};

            
            

            


            
            obj.data = function () {
                return {"animation": null,"contentPosition": false,"wrapperHeight": null,"isResetAnimation": true,"loadingDur": [],"isDownGrade": false};
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
            
            obj._scopeId = "data-a-6dd083dd";

            module.exports = obj;

            
        });
    