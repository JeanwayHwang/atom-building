
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-scroll-two-frame',{attrs:{"orientation":_vm.orientation,"col":_vm.col,"length":_vm.list.length,"more-url":_vm.moreUrl,"more-url-params":_vm.moreUrlParams,"role":"listbox"},on:{"showmore":_vm.handleShowMore,"scrollend":_vm.handleScrollEnd,"itemclick":_vm.handleItemClick}},_vm._l((_vm.list),function(item,index){return _c('c-touchable-feedback',{key:index,attrs:{"open":!!(item.url || (item.urlParams && item.urlParams.tcUrl)),"top":-.05,"bottom":-.05,"left":-.04,"right":-.04,"is-jump":"","role":"option"},slot:'c-scroll-two-frame-slot' + index},[_c('c-link',{key:index,attrs:{"url":item.url,"params":item.urlParams}},[_c('c-img',{attrs:{"src":item.imgSrc,"type":_vm.imgType,"lazy":item.lazy,"show-num":item.showNum,"icon-type":item.iconType,"hack-white-stroke":item.hackWhiteStroke,"maskgap-size":item.maskgapSize,"progressive":item.progressive,"blur":item.blur}}),_vm._v(" "),_c('c-line',{staticClass:"c-color-link",attrs:{"clamp":"1"}},[_vm._v("\n                "+_vm._s(item.title)+"\n            ")]),_vm._v(" "),_vm._t('c-scroll-two-slot' + index)],2)],1)}))},
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
    handleShowMore: function handleShowMore() {
      /**
       * 当最后一项展示『查看更多』并且需要有特殊操作时，可在组件外层调用的地方绑定该事件
       *
       * @event showmore
       */
      this.$emit('showmore');
    },
    handleScrollEnd: function handleScrollEnd() {
      /**
       * 滚动事件结束时触发
       *
       * @event scrollend
       */
      this.$emit('scrollend');
    },
    handleItemClick: function handleItemClick(index) {
      /**
       * 当点击项不做url跳转有特殊操作时，可在组件外层调用的地方绑定该事件
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

            obj.props = {"orientation": {"type": String,"default": "horizontal"},"list": {"type": Array,"required": true},"imgType": {"type": String,"default": "l"},"col": {"type": Number,"default": 4},"moreUrl": {"type": String},"moreUrlParams": {"type": Object}};
            obj.components = {"c-scroll-two-frame": require("../ScrollTwoFrame/ScrollTwoFrame"),"c-img": require("../Image/Image"),"c-line": require("../Line/Line"),"c-link": require("../Link/Link"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
    