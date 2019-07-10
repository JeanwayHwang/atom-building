
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"contentWrapper",staticClass:"c-tags-content-wrapper",class:{'c-tags-content-wrapper-animation': !_vm.isDownGrade && !_vm.isResetAnimation},style:({height: _vm.wrapperHeight > 0 ? _vm.wrapperHeight + 'px' : 'auto'}),attrs:{"inner-height":_vm.innerHeight}},[_c('transition-group',{attrs:{"tag":"div","name":"display"},on:{"before-enter":_vm.beforeContentEnter,"enter":_vm.contentEnter}},_vm._l((_vm.tagList),function(tag,index){return _c('div',{directives:[{name:"show",rawName:"a-show",value:(index === _vm.selected),expression:"index === selected"}],key:'_c_' + index,ref:"tags",refInFor:true,staticClass:"c-tags-content",class:{'c-tags-content-animation': _vm.contentPosition},style:({height: (_vm.loadingDur[index] || tag.isLoading) && _vm.wrapperHeight > 0
            ? _vm.wrapperHeight + 'px' : 'auto'})},[_c('transition',{attrs:{"name":"display"},on:{"before-enter":_vm.beforeContentEnter,"enter":_vm.contentEnter}},[(_vm.loadingDur[index] || tag.isLoading)?(_c('c-loading',{key:'__loading__' + index,staticClass:"c-tags-loading"})):(_vm._e())],1),_vm._v(" "),_c('transition',{attrs:{"name":"display"},on:{"enter":_vm.contentEnter,"before-enter":_vm.beforeContentEnter}},[(!_vm.loadingDur[index] && !tag.isLoading)?(_c('div',{staticClass:"c-tags-content-inner"},[_vm._t('__c__' + index)],2)):(_vm._e())])],1)}))],1)},
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
 * @file tagsContent
 * @author zhangjingyuan02
 */
var _default = {
  render: function render(ctx) {
    var _this = this;

    var vnodes = this.$slots["default"];
    this.tagList = vnodes.map(function (vnode, index) {
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

      if (this.tagList[newVal].isLoading) {
        setTimeout(function () {
          _this2.$set(_this2.loadingDur, newVal, false);
        }, 640);
      }

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
    this.contentPosition = true; // this.loadingDur = this.tagData.isLoading;

    this.loadingDur = this.tagList.map(function (value) {
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
    // 内核版本chrome/53以下的做动画降级
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
    beforeContentEnter: function beforeContentEnter(dom) {
      this.isResetAnimation = false;
    },
    contentEnter: function contentEnter(dom) {
      var _this5 = this;

      if (this.tagList[this.selected].isLoading) {
        this.wrapperHeight = this.wrapperHeight < 120 ? 120 : this.wrapperHeight;
      } else {
        // 这里的 nextTick 是为了保证当 loading 结束时，只有 dom 完全渲染以后才开始取高度
        this.$nextTick(function () {
          _this5.wrapperHeight = _this5.$refs.tags[_this5.selected].offsetHeight;
        });
      }

      setTimeout(function () {
        _this5.isResetAnimation = true;
      }, 400);
    },
    reset: function reset() {
      this.wrapperHeight = this.$refs.tags[this.selected].offsetHeight;
    },
    refresh: function refresh() {
      var _this6 = this;

      this.$nextTick(function () {
        _this6.reset();
      });
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"selected": {"type": [Number,String],"default": 0,"required": true},"innerHeight": {"type": Number,"default": 0},"loadingData": Array};
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
            
            obj._scopeId = "data-a-4968bd45";

            module.exports = obj;

            
        });
    