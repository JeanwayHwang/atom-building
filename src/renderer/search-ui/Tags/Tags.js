
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-tags-container",style:({
        'margin-top': _vm.gap.top,
        'margin-bottom': _vm.gap.bottom
    })},[(!_vm.allowScroll)?(_c('ul',{staticClass:"c-tags-content c-tags-row c-color c-row",attrs:{"role":"tablist"}},_vm._l((_vm.labelList),function(label,index){return _c('li',{key:index,staticClass:"c-span4 WA_LOG_BTN",class:{
                'c-tags-selected': index === _vm.oSelectedIndex,
                'c-tags-negative': (label.type === 'negative' && index !== _vm.oSelectedIndex)
            },attrs:{"aria-selected":index === _vm.oSelectedIndex,"role":"tab","rl-type":"stop"},on:{"click":function($event){_vm.handleTagItemClick(index)}}},[_c(label.tagUrl ? 'c-touchable-feedback' : 'div',{tag:"component",attrs:{"left":-.1,"right":-.1,"border-radius":"5px"}},[_c('c-link',{staticClass:"c-color c-line-clamp1",class:{
                        'c-tags-selected': index === _vm.oSelectedIndex,
                        'c-tags-negative': (label.type === 'negative' && index !== _vm.oSelectedIndex)
                    },attrs:{"url":label.tagUrl,"params":label.tagParams}},[_c('span',[_vm._v("\n                        "+_vm._s(label.name)+"\n                    ")])])],1)],1)}))):(_c('div',{ref:"scrollView",staticClass:"c-tags-scroll-wrapper"},[_c('div',{staticClass:"c-tags-scroll-content",class:{
                'c-tags-scroll-container-open': _vm.isMoreOpen,
                'c-tags-scroll-container-close': !_vm.isMoreOpen
            }},[_c('ul',{staticClass:"c-color",class:{
                    'c-tags-scroll-expand': _vm.isExpand
                },attrs:{"role":"tablist"}},_vm._l((_vm.labelList),function(label,index){return _c('li',{key:index,ref:"item",refInFor:true,class:{
                        'WA_LOG_BTN': true,
                        'c-tags-negative': (label.type === 'negative' && index !== _vm.oSelectedIndex),
                        'c-tags-selected': index === _vm.oSelectedIndex
                    },attrs:{"aria-selected":index === _vm.oSelectedIndex,"role":"tab"},on:{"click":function($event){_vm.handleTagItemClick(index)}}},[_c(label.tagUrl ? 'c-touchable-feedback' : 'div',{tag:"component",attrs:{"left":-.1,"right":-.1,"border-radius":"5px"}},[_c('c-link',{staticClass:"c-color c-line-clamp1",style:({
                                paddingTop: '2px'
                            }),attrs:{"url":label.tagUrl,"params":label.tagParams}},[_c('span',[_vm._v("\n                                "+_vm._s(label.name)+"\n                            ")])])],1)],1)}))]),_vm._v(" "),(_vm.allowScroll && _vm.isExpand)?(_c('p',{staticClass:"c-color-gray c-tags-wrap-toggleLabe",class:{
                'c-tags-wrap-toggleLabe-open': _vm.isMoreOpen,
                'c-tags-wrap-toggleLabe-close': !_vm.isMoreOpen
            },on:{"touchmove":function($event){$event.preventDefault();}}},[_vm._v("\n            "+_vm._s(_vm.toggleLabel)+"\n        ")])):(_vm._e()),_vm._v(" "),(_vm.allowScroll && _vm.isExpand)?(_c('div',{staticClass:"c-tags-more-icon WA_LOG_OTHER",on:{"click":_vm.toggleMore}},[_c('i',{class:{
                    'c-tags-more-icon-open': _vm.isMoreOpen,
                    'c-tags-more-icon-close': !_vm.isMoreOpen
                }})])):(_vm._e()),_vm._v(" "),(!_vm.isExpand)?(_c('div',{staticClass:"c-tags-scroll-right-mask"})):(_vm._e())])),_vm._v(" "),_c('div',{staticClass:"c-tags-mask-cont"},[_c('c-transition',{attrs:{"enter":{
                animations: {opacity: {}},
                options: {
                    duration: 300,
                    easing: 'cubic-bezier(.42, 0, .52, 1)'
                }
            },"leave":{
                animations: {
                    opacity: {
                        reverse: true,
                        fill: 'end'
                    }
                },
                options: {
                    duration: 300,
                    easing: 'cubic-bezier(0, 0, .3, 1)'
                }
            }}},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.allowScroll && _vm.isExpand && _vm.isMoreOpen),expression:"allowScroll && isExpand && isMoreOpen"}],ref:"mask",staticClass:"c-tags-mask",attrs:{"role":"button","aria-label":"关闭"},on:{"touchmove":function($event){$event.preventDefault();},"click":function($event){_vm.toggleMore('mask')}}})])],1),_vm._v(" "),_c('div',{staticClass:"c-tags-more-cont",on:{"touchmove":function($event){$event.preventDefault();}}},[_c('c-transition',{attrs:{"enter":{
                animations: {slideDown: {}},
                options: {
                    duration: 300,
                    easing: 'cubic-bezier(.42, 0, .52, 1)'
                }
            },"leave":{
                animations: {
                    slideDown: {
                        reverse: true,
                        fill: 'end'
                    }
                },
                options: {
                    duration: 160,
                    easing: 'cubic-bezier(.46, 0, 1, 1)'
                }
            }}},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.isMoreOpen),expression:"isMoreOpen"}]},[_vm._t("default",[_c('div',{staticClass:"c-tags-layout"},_vm._l((_vm.oLabelList),function(row,rowIndex){return _c('c-row',{key:rowIndex,staticClass:"c-gap-bottom-large c-color-gray-a"},_vm._l((row),function(label,index){return _c('c-span',{key:index,attrs:{"col":"4"}},[(label !== null)?(_c('div',{staticClass:"c-tags-btn WA_LOG_BTN",class:index + rowIndex * 3 === _vm.oSelectedIndex
                                        ? {'c-tags-selected': true}
                                        : {'c-tags-negative': label.type === 'negative'},on:{"click":function($event){_vm.toggleChange(index+rowIndex*3)}}},[_c('span',[_vm._v("\n                                        "+_vm._s(label.name)+"\n                                    ")])])):(_vm._e())])}))}))])],2)])],1)])},
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

// 滑动动画时间
var scrollTime = 500;
var _default = {
  methods: {
    handleTagItemClick: function handleTagItemClick(index) {
      if (this.disableEvent) {
        return;
      }

      this.onChange(index);
    },
    onChange: function onChange(index) {
      if (this.allowScroll) {
        if (index - 1 <= 0) {
          this.iScroll.scrollTo(0, 0, scrollTime);
        }

        if (index - 1 > 0) {
          this.iScroll.scrollToElement(this.$refs.item[index - 1], scrollTime);
        }
      }

      this.oSelectedIndex = index;
      /**
       * 选项卡改变时触发.
       *
       * @property {number} param1 选中的标签的索引
       * @property {string} param2 选中的标签的文字
       * @event change
       */

      this.$emit('change', {
        current: index,
        text: this.labelList[index].name
      });
    },
    // 切换展开状态
    toggleMore: function toggleMore(val) {
      if (val === 'mask') {
        // 快速点击会出现蒙层闪动问题
        if (!this.isClickMask && this.isMoreOpen) {
          this.isClickMask = true;
          this.isMoreOpen = !this.isMoreOpen;
          this.isClickMask = false;
        }
      } else {
        this.isMoreOpen = !this.isMoreOpen;
      }
      /**
       * 当滑动tags展开关闭时触发.
       *
       * @property {boolean} param1 为true是为展开，为false时为关闭
       * @event toggle
       */


      this.$emit('toggle', {
        toggle: this.isMoreOpen
      });
    },
    // 在展开状态选择label
    toggleChange: function toggleChange(index) {
      this.onChange(index);

      if (this.isMoreOpen) {
        this.toggleMore();
      }
    }
  },
  watch: {
    selectedIndex: function selectedIndex(value) {
      this.onChange(value);
    },
    labelList: function labelList(value) {
      if (this.allowScroll) {
        // 将label转化为二维数组方便栅格化布局
        this.oLabelList = [];
        var row = value.length / 3;

        for (var i = 0; i < row; i++) {
          var arr = [];

          for (var j = 0; j < 3; j++) {
            if (i * 3 + j < value.length) {
              arr.push(value[i * 3 + j]);
            } else {
              arr.push(null);
            }
          }

          this.oLabelList.push(arr);
        }

        this.$nextTick(function () {
          // 更新滑动框
          this.iScroll.refresh();
          this.onChange(this.selectedIndex);
        });
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.allowScroll) {
      // 初始化 IScroll
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
      this.iScroll = new _betterScroll["default"](this.$refs.scrollView, scrollOpt);
      this.$root.$on('attach', function () {
        _this.iScroll.refresh();
      });
      var me = this;
      this.iScroll.on('scrollEnd', function () {
        /**
         * 当tags横划时触发，主要用于日志.
         *
         * @event scrollEnd
         */
        me.$emit('scrollEnd');
      }); // 初始化时将默认selected滑动到中间

      if (this.selectedIndex - 1 <= 0) {
        this.iScroll.scrollTo(0, 0, scrollTime);
      }

      if (this.selectedIndex - 1 > 0) {
        this.iScroll.scrollToElement(this.$refs.item[this.selectedIndex - 1], scrollTime);
      } // 将label转化为二维数组方便栅格化布局


      var row = this.labelList.length / 3;

      for (var i = 0; i < row; i++) {
        var arr = [];

        for (var j = 0; j < 3; j++) {
          if (i * 3 + j < this.labelList.length) {
            arr.push(this.labelList[i * 3 + j]);
          } else {
            arr.push(null);
          }
        }

        this.oLabelList.push(arr);
      }
    }
  },
  beforeDestory: function beforeDestory() {
    this.iScroll && this.iScroll.destory();
    this.iScroll = null;
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"labelList": {"type": Array,"required": true},"selectedIndex": {"type": Number,"default": 0},"allowScroll": {"type": Boolean,"default": false},"toggleLabel": {"type": String,"default": "请选择分类"},"isExpand": {"type": Boolean,"default": true},"gap": {"type": Object,"default": function () { return {"top": ".1rem","bottom": ".1rem"}; }},"disableEvent": {"type": Boolean,"default": false}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-link": require("../Link/Link"),"c-transition": require("../Motion/Transition"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"oSelectedIndex": this["selectedIndex"],"isMoreOpen": false,"oLabelList": [],"isClickMask": false};
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
            
            obj._scopeId = "data-a-1e559a14";

            module.exports = obj;

            
        });
    