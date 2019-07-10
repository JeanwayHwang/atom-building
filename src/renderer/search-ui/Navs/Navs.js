
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-navs-wrap c-navs-container",class:{
        'c-line-bottom': _vm.bottomLine,
        'c-navs-wrap-open': _vm.isMoreOpen && _vm.allowScroll,
        'c-navs-wrap-close': !_vm.isMoreOpen && _vm.allowScroll,
        'c-navs-pc': _vm.$platform === 'pc'
    },attrs:{"data-module":"c-n"}},[(!_vm.allowScroll)?(_c('c-navs-common',{attrs:{"label-list":_vm.convertedList,"selected-index":_vm.oSelectedIndex,"type":_vm.type,"selected-color":_vm.selectedColor,"background-color":_vm.backgroundColor,"is-open-log":_vm.isOpenLog,"log-content":{logList: _vm.oLogList},"item-style":_vm.itemStyle,"disable-event":_vm.disableEvent,"feedback-color":_vm.feedbackColor},on:{"clickItem":_vm.itemClick}})):(_vm._e()),_vm._v(" "),(_vm.allowScroll)?(_c('c-navs-scroll',{attrs:{"label-list":_vm.convertedList,"selected-index":_vm.oSelectedIndex,"background-color":_vm.backgroundColor,"item-style":_vm.itemStyle,"is-open":_vm.isMoreOpen,"type":_vm.type,"selected-color":_vm.selectedColor,"is-open-log":_vm.isOpenLog,"log-content":{logList: _vm.oLogList},"gap-right":_vm.isExpand?0.34:-0.17,"has-mask":_vm.hasMask},on:{"clickItem":_vm.itemClick,"scrollEnd":_vm.onScrollEnd}})):(_vm._e()),_vm._v(" "),_c('div',{staticClass:"c-navs-more-cont",class:{
            'c-navs-more-cont-sub': _vm.type === 'navSub'
        },on:{"touchmove":function($event){$event.preventDefault();}}},[_c('c-transition',{attrs:{"enter":{
                animations: {
                    slideDown: {}
                },
                options: {
                    duration: 300,
                    easing: 'cubic-bezier(0.42, 0, 0.52, 1)'
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
                    easing: 'cubic-bezier(0.46, 0, 1, 1)'
                }
            }}},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.allowScroll && _vm.isExpand && _vm.isMoreOpen),expression:"allowScroll && isExpand && isMoreOpen"}]},[_vm._t("default",[_c('c-navs-more',{attrs:{"label-list":_vm.convertedList,"selected-index":_vm.oSelectedIndex,"is-open":_vm.isMoreOpen,"type":_vm.type,"selected-color":_vm.selectedColor,"toggle-label":_vm.toggleLabel,"is-open-log":_vm.isOpenLog,"log-content":{logList: _vm.oLogList}},on:{"clickItem":_vm.itemClick,"toggle":_vm.toggleMore}})])],2)])],1),_vm._v(" "),(_vm.allowScroll&&_vm.isExpand)?(_c('p',{staticClass:"c-color-gray c-navs-wrap-toggleLabe",class:{
            'c-navs-wrap-toggleLabe-open': _vm.isMoreOpen,
            'c-navs-wrap-toggleLabe-close': !_vm.isMoreOpen
        },on:{"touchmove":function($event){$event.preventDefault();}}},[_vm._v("\n        "+_vm._s(_vm.toggleLabel)+"\n    ")])):(_vm._e()),_vm._v(" "),(_vm.allowScroll && _vm.isExpand)?(_c('div',{staticClass:"c-navs-more-icon WA_LOG_BTN",attrs:{"data-nolog":!_vm.isOpenLog},on:{"click":_vm.toggleMore}},[_c('i',{class:{
                'c-navs-more-icon-transform-open': _vm.isMoreOpen,
                'c-navs-more-icon-transform-close': !_vm.isMoreOpen
            }})])):(_vm._e()),_vm._v(" "),_c('div',{staticClass:"c-navs-mask-cont"},[_c('c-transition',{attrs:{"enter":{
                animations: {
                    opacity: {}
                },
                options: {
                    duration: 300,
                    easing: 'cubic-bezier(0.42, 0, 0.52, 1)'
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
                    easing: 'cubic-bezier(0, 0, 0.3, 1)'
                }
            }}},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.allowScroll && _vm.isExpand && _vm.isMoreOpen),expression:"allowScroll && isExpand && isMoreOpen"}],ref:"mask",staticClass:"c-navs-mask",on:{"touchmove":function($event){$event.preventDefault();},"click":function($event){_vm.toggleMore('mask')}}})])],1)],1)},
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
  methods: {
    itemClick: function itemClick(index) {
      if (this.disableEvent) {
        return;
      }
      /**
       * clickItem event.
       *
       * @event clickItem
       * @property {object} param1.index 序号
       */


      this.$emit('clickItem', {
        index: index
      });
      this.onChange(index);
    },
    onChange: function onChange(index) {
      if (this.isMoreOpen) {
        this.toggleMore();
      }

      if (this.oSelectedIndex === index || index < 0 || index >= this.labelList.length) {
        return;
      }
      /**
       * change event.
       *
       * @event change
       * @property {object} param1.current 序号
       * @property {object} param1.text 文本
       * @property {object} param1.old 改变前序号
       */


      this.$emit('change', {
        current: index,
        text: this.labelList[index].txt || this.labelList[index],
        old: this.oSelectedIndex
      });
      this.oSelectedIndex = index;
    },
    toggleMore: function toggleMore(val) {
      if (val === 'mask') {
        // 简搜下快速点击会出现蒙层闪动问题,动效库bug修复生效后删除
        if (!this.isClickMask && this.isMoreOpen) {
          this.isClickMask = true;
          this.isMoreOpen = !this.isMoreOpen;
          this.isClickMask = false;
        }
      } else {
        this.isMoreOpen = !this.isMoreOpen;
      }
      /**
       * toggle event.
       *
       * @event toggle
       * @property {object} param1.toggle isMoreOpen
       */


      this.$emit('toggle', {
        toggle: this.isMoreOpen
      });
    },
    onScrollEnd: function onScrollEnd() {
      /**
       * scrollEnd event.
       *
       * @event scrollEnd
       */
      this.$emit('scrollEnd');
    }
  },
  computed: {
    oLogList: function oLogList() {
      if (!this.logContent || !this.logContent.logList instanceof Array) {
        return [];
      }

      return this.logContent.logList.map(function (value) {
        return JSON.stringify(value);
      });
    },
    convertedList: function convertedList() {
      return this.labelList.map(function (value, index) {
        return typeof value === 'string' ? {
          txt: value
        } : value;
      });
    }
  },
  watch: {
    selectedIndex: function selectedIndex(value, oldValue) {
      if (value === this.oSelectedIndex) {
        return;
      }

      this.onChange(value);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"labelList": {"type": Array,"required": true},"selectedIndex": {"type": Number,"default": 0},"allowScroll": {"type": Boolean,"default": false},"toggleLabel": {"type": String,"default": "请选择分类"},"type": {"type": String,"default": "nav"},"selectedColor": {"type": String,"default": "#333"},"backgroundColor": {"type": String,"default": "#fff"},"itemStyle": {"type": Object,"default": function () { return {"color": "#666","opacity": "1"}; }},"disableEvent": {"type": Boolean,"default": false},"feedbackColor": {"type": String,"default": "rgba(0, 0, 0, .08)"},"isExpand": {"type": Boolean,"default": true},"hasMask": {"type": Boolean,"default": true},"isOpenLog": {"type": Boolean,"default": true},"logContent": {"type": Object,"default": function () { return {"logList": []}; }},"bottomLine": {"type": Boolean,"default": true}};
            obj.components = {"c-navs-common": require("./NavsCommon"),"c-navs-scroll": require("./NavsScroll"),"c-navs-more": require("./ListMore"),"c-transition": require("../Motion/Transition")};

            
            

            


            
            obj.data = function () {
                return {"oSelectedIndex": this["selectedIndex"],"isMoreOpen": false,"isClickMask": false};
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
            
            obj._scopeId = "data-a-719c70e2";

            module.exports = obj;

            
        });
    