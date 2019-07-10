
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-scroll',{staticClass:"c-scroll-imgs",attrs:{"voice-action":"select-list","scroller-flex":"","role":"listbox"},on:{"scrollEnd":_vm.onScrollEnd}},[_vm._l((_vm.count),function(idx){return _c('c-scroll-item',{key:idx,attrs:{"col":_vm.col,"role":"option"}},[_c('c-touchable-feedback',{staticStyle:{"height":"100%"},attrs:{"open":!!(_vm.imgList[idx - 1].url || (_vm.imgList[idx - 1].params && _vm.imgList[idx - 1].params.tcUrl)),"top":-.05,"bottom":-.05,"left":-.04,"right":-.04,"url":_vm.imgList[idx - 1].url,"url-params":_vm.imgList[idx - 1].params,"is-jump":"","expand":""}},[_c('div',{on:{"click":function($event){_vm.handleItemClick(idx-1)}}},[(idx <= _vm.count && _vm.imgList[idx - 1])?(_c('c-scroll-imgs-item',{attrs:{"idx":idx - 1,"col":_vm.col,"item":_vm.imgList[idx - 1],"title-fix-height":_vm.titleFixHeight,"voice-config":'select-list.item:' + _vm.imgList[idx - 1].title + ' ' + _vm.imgList[idx - 1].subTitle,"default-image-type":_vm.defaultImageType}},[_vm._t('c-scroll-imgs' + (idx - 1))],2)):(_vm._e()),_vm._v(" "),_vm._t('c-scroll-imgs-ext' + (idx - 1))],2)])],1)}),_vm._v(" "),(_vm.moreUrl)?(_c('c-scroll-item',{attrs:{"col":_vm.moreCol}},[_c('c-touchable-feedback',{staticStyle:{"position":"absolute","top":".05rem","bottom":"0","left":"0","right":"0"},attrs:{"open":!!(_vm.moreUrl || (_vm.moreUrlParams && _vm.moreUrlParams.tcUrl)),"url":_vm.moreUrl,"url-params":_vm.moreUrlParams,"is-jump":"","expand":""}},[_c('c-more',{attrs:{"url":_vm.moreUrl,"params":_vm.moreUrlParams,"voice-config":'select-list.item:查看更多',"text":"查看更多"},on:{"showMore":_vm.showMore}})],1)],1)):(_vm._e())],2)},
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
    showMore: function showMore() {
      /**
       * 当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件
       *
       * @event showMore
       */
      this.$emit('showMore');
    },
    onScrollEnd: function onScrollEnd() {
      /**
       * 滚动事件
       *
       * @event imgScrollEnd
       */
      this.$emit('imgScrollEnd');
    },
    handleItemClick: function handleItemClick(index) {
      /**
       * 当点击图片不做url跳转有特殊操作时，可在组件外层调用的地方绑定该事件
       *
       * @event itemclick
       * @property {number} param1 索引
       */
      this.$emit('itemclick', index);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"col": {"type": [Number,String],"default": 3},"imgList": {"type": Array,"default": function () { return []; }},"moreUrl": String,"moreUrlParams": Object,"moreCol": {"type": [Number,String],"default": 4},"titleFixHeight": {"type": Boolean,"default": false},"defaultImageType": String};
            obj.components = {"c-scroll": require("../Scroll/Scroll"),"c-scroll-item": require("../Scroll/ScrollItem"),"c-scroll-imgs-item": require("./ScrollImgsItem"),"c-span": require("../Row/Span"),"c-link": require("../Link/Link"),"c-more": require("../More/More"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            
    var computed = obj.computed || {};
    computed["count"] = function () { return ((this["imgList"].length)?(this["imgList"].length):(0)); };
    obj.computed = computed;



            
            obj.data = function () {
                return {};
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
            
            

            module.exports = obj;

            
        });
    