
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-row',{attrs:{"type":"tile"}},[_c('div',{directives:[{name:"voice-processor",rawName:"a-voice-processor:scroll-page",value:(_vm.scrollPageProcessor),expression:"scrollPageProcessor",arg:"scroll-page"},{name:"voice-provider",rawName:"a-voice-provider:scroll-page",value:(_vm.scrollPageProvider),expression:"scrollPageProvider",arg:"scroll-page"}],staticClass:"c-page-scroll",style:([
            _vm.overflow
                ? {
                    overflow: _vm.overflow
                }
                : {}
        ]),attrs:{"voice-config":'scroll-page.total:' + _vm.pageNum + ';scroll-page.current:' + _vm.page,"rl-type":_vm.contentTouchableStop ? 'stop' : null,"voice-action":"scroll-page"}},[_c('div',{staticClass:"c-page-scroller",style:({
                width: _vm.pageNum * 100 + '%'
            })},_vm._l((_vm.pageNum),function(i,index){return _c('div',{directives:[{name:"voice-invisible",rawName:"a-voice-invisible",value:(_vm.pageIndex === index ? null : true),expression:"pageIndex === index ? null : true"}],key:index,style:({
                    width: 100 / _vm.pageNum + '%'
                })},[_vm._t('__c__' + (i - 1))],2)}))]),_vm._v(" "),(_vm.indicator === undefined || _vm.indicator)?(_c('div',{staticClass:"c-page-scroll-indicator c-gap-top c-gap-bottom-small"},[_c('div',{staticClass:"c-scroll-indicator"},_vm._l((_vm.pageNum),function(i,index){return _c('span',{key:index,class:[
                    'c-page-scroll-dotty',
                    {
                        'c-scroll-dotty-now': _vm.pageIndex === i - 1
                    }
                ],attrs:{"aria-current":(_vm.pageIndex === i - 1) ? 'page' : false}})}))])):(_vm._e())])},
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

var _default = {
  render: function render(ctx) {
    var _this = this;

    var vnodes = this.$slots["default"];
    this.pageNum = vnodes.length;
    vnodes.forEach(function (vnode, index) {
      _this.$slots['__c__' + index] = [vnode];
    });
    return this.$super.render();
  },
  mounted: function mounted() {
    var _this2 = this;

    var isSupportTouch = 'ontouchend' in document;
    this.oScroll = new _betterScroll["default"](this.$el.children[0], {
      bindToWrapper: true,
      disablePointer: true,
      disableMouse: !isSupportTouch,
      // 移动端禁止鼠标操作
      scrollX: true,
      scrollY: false,
      momentum: this.momentum,
      // 滑动势能动画开关,默认开
      eventPassthrough: 'vertical',
      scrollbars: false,
      snapThreshold: 0.1,
      snapSpeed: 400,
      snap: true
    });

    if (this.pageIndex !== 0) {
      this.goToPage(this.pageIndex);
    }

    this.oScroll.on('scrollEnd', function (a, b, c) {
      _this2.pageIndex = _this2.oScroll.currentPage.pageX;
      /**
       * scrollEnd event.
       *
       * @event scrollEnd
       * @property {number} params1 页码
       */

      _this2.$emit('scrollend', _this2.pageIndex);
    });
    this.refresh = this.refresh.bind(this);
    this.$root.$on('attach', function () {
      _this2.refresh();
    });
    window.addEventListener('orientationchange', this.refresh);
    window.addEventListener('pageshow', this.refresh);
  },
  destroyed: function destroyed() {
    window.removeEventListener('orientationchange', this.refresh);
    window.removeEventListener('pageshow', this.refresh);
  },
  watch: {
    page: function page(val) {
      this.pageIndex = val;
      this.goToPage(val);
    },
    isShow: function isShow(value) {
      if (value) {
        this.refresh();
      }
    }
  },
  methods: {
    scrollPageProcessor: function scrollPageProcessor(result, action) {
      this.pageIndex = result.index;
      this.goToPage(result.index);
    },
    scrollPageProvider: function scrollPageProvider(action) {
      return {
        current: String(this.pageIndex)
      };
    },
    update: function update() {
      var _this3 = this;

      if (this.oScroll && !this.oScroll.wrapperWidth) {
        setTimeout(function () {
          _this3.oScroll.refresh();
        }, 300);
      }
    },
    refresh: function refresh() {
      this.oScroll.refresh();
    },
    goToPage: function goToPage(val) {
      this.oScroll.goToPage(val, 0, 300);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"momentum": {"type": Boolean,"default": false},"page": {"type": Number,"default": 0},"indicator": {"type": Boolean,"default": true},"isShow": {"type": Boolean,"default": true},"contentTouchableStop": {"type": Boolean,"default": true},"overflow": {"type": String}};
            obj.components = {"c-row": require("../Row/Row")};

            
            

            


            
            obj.data = function () {
                return {"pageIndex": ((this["page"])?(this["page"]):(0))};
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
            
            obj._scopeId = "data-a-38ebd59c";

            module.exports = obj;

            
        });
    