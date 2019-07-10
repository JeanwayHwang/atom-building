
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-scroll',{staticClass:"c-scroll-article",attrs:{"count":_vm.count,"scroller-flex":"","role":"listbox"},on:{"scrollEnd":_vm.handleScrollEnd}},[_vm._l((_vm.count),function(idx){return _c('c-scroll-item',{key:idx,attrs:{"col":_vm.col,"role":"option"}},[(idx <= _vm.count && _vm.articleList[idx - 1])?(_c('div',{on:{"click":function($event){_vm.itemClick(idx, _vm.articleList[idx - 1])}}},[_c('c-scroll-article-item',{attrs:{"idx":idx - 1,"item":_vm.articleList[idx - 1],"show-ext":_vm.showExt}},[_vm._t('c-scroll-article-ext' + (idx - 1))],2)],1)):(_vm._e())])}),_vm._v(" "),(_vm.moreUrl)?(_c('c-scroll-item',{staticClass:"c-scroll-article-more-box",attrs:{"col":4}},[_c('c-touchable-feedback',{staticStyle:{"position":"absolute","top":"0","bottom":"0","left":"0","right":"0"},attrs:{"open":!!(_vm.moreUrl || (_vm.moreUrlParams && _vm.moreUrlParams.tcUrl)),"url":_vm.moreUrl,"url-params":_vm.moreUrlParams,"expand":"","is-jump":""}},[_c('c-link',{staticClass:"c-color c-scroll-article-box",attrs:{"url":_vm.moreUrl,"params":_vm.moreUrlParams},on:{"click":_vm.showMore}},[_c('div',{staticClass:"c-scroll-article-more"},[_c('c-icon',{staticClass:"c-scroll-article-icon",attrs:{"type":"right_arrow"}}),_vm._v(" "),_c('div',[_vm._v("查看更多")])],1)])],1)],1)):(_vm._e())],2)},
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
       * 点击『查看更多』
       *
       * @event showMore
       */
      this.$emit('showMore');
    },
    handleScrollEnd: function handleScrollEnd() {
      /**
       * 滚动事件结束
       *
       * @event scrollEnd
       */
      this.$emit('scrollEnd');
    },
    itemClick: function itemClick(idx, item) {
      item.idx = idx - 1;
      /**
       * 点击文章
       *
       * @event itemClick
       * @property {number} idx 当前文章index，从0开始，其他同上表 imgList 中各字段
       */

      this.$emit('itemClick', item);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"col": {"type": Number,"default": 6},"articleList": {"type": Array},"moreUrl": {"type": String},"moreUrlParams": {"type": Object},"showExt": {"type": Boolean,"default": false}};
            obj.components = {"c-scroll": require("../Scroll/Scroll"),"c-scroll-item": require("../Scroll/ScrollItem"),"c-scroll-article-item": require("./ScrollArticleItem"),"c-span": require("../Row/Span"),"c-link": require("../Link/Link"),"c-icon": require("../Icon/Icon"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"count": ((this["articleList"].length)?(this["articleList"].length):(0))};
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
            
            obj._scopeId = "data-a-df4e99a0";

            module.exports = obj;

            
        });
    