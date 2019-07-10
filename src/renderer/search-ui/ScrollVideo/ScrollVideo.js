
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-scroll',{staticClass:"c-gap-bottom-small c-scroll-video",attrs:{"col":_vm.imgCol,"scroller-flex":""},on:{"scrollEnd":_vm.scrollEnd}},[_vm._l((_vm.video),function(item,index){return _c('c-scroll-item',{key:index,attrs:{"col":_vm.imgCol},nativeOn:{"click":function($event){_vm.handleScrollItemClick({
            item: item,
            index: index
        })}}},[_c('c-touchable-feedback',{attrs:{"open":!!item.url,"top":-.05,"bottom":-.05,"left":-.04,"right":-.04,"is-jump":""}},[_c('c-video-col',{attrs:{"item":item,"img-type":_vm.showConfig && _vm.showConfig.imgType ? _vm.showConfig.imgType : 'y',"icon-type":_vm.iconType,"title-clamp":_vm.showConfig && _vm.showConfig.titleClamp ? _vm.showConfig.titleClamp : 1,"info-line":_vm.showConfig && _vm.showConfig.infoLine ? _vm.showConfig.infoLine : 1,"title-fix-height":_vm.showConfig ? _vm.showConfig.titleFixHeight : false}})],1)],1)}),_vm._v(" "),(_vm.moreInfo)?(_c('c-scroll-item',{attrs:{"col":_vm.moreCol}},[_c('c-touchable-feedback',{staticStyle:{"position":"absolute","top":".05rem","bottom":"0","left":"0","right":"0"},attrs:{"open":!!(_vm.moreInfo.url || (_vm.moreInfo.params && _vm.moreInfo.params.tcUrl)),"url":_vm.moreInfo.url,"url-params":_vm.moreInfo.params,"expand":"","is-jump":""}},[_c('c-more',{attrs:{"url":_vm.moreInfo.url,"params":_vm.moreInfo.params,"text":_vm.moreInfo.text},on:{"showMore":_vm.showMore}})],1)],1)):(_vm._e())],2)},
staticRenderFns: []
}

})(_module1, _module1.exports)

            /* get script output data */
            var _module2 = {
                exports: {}
            };
            (function (module, exports) {
    "use strict";

module.exports = {
  methods: {
    showMore: function showMore() {
      /**
       * 当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件
       *
       * @event showMore
       */
      this.$emit('showMore');
    },
    scrollEnd: function scrollEnd() {
      /**
       * 滑动结束后触发
       *
       * @event scrollEnd
       */
      this.$emit('scrollEnd');
    },
    handleScrollItemClick: function handleScrollItemClick(obj) {
      /**
       * 项点击事件
       *
       * @event itemclick
       *
       * @property {object} param1 参数对象
       * @property {object} param1.item 点击项数据对象
       * @property {object} param1.index 点击项的索引
       */
      this.$emit('itemclick', obj);
    }
  }
};
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"video": Array,"showConfig": Object,"moreInfo": Object,"col": Number};
            obj.components = {"c-link": require("../Link/Link"),"c-icon": require("../Icon/Icon"),"c-video-col": require("../Video/VideoCol"),"c-scroll": require("../Scroll/Scroll"),"c-scroll-item": require("../Scroll/ScrollItem"),"c-more": require("../More/More"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            
    var computed = obj.computed || {};
    computed["imgCol"] = function () { return ((this["col"])?(this["col"]):((((this["showConfig"]&&this["showConfig"]["col"]))?(this["showConfig"]["col"]):(8)))); };
computed["iconType"] = function () { return (((this["showConfig"]&&this["showConfig"]["iconType"]))?(this["showConfig"]["iconType"]):("")); };
computed["moreCol"] = function () { return 4; };
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
    