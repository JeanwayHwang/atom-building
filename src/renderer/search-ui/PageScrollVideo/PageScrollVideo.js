
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-page-scroll',{staticClass:"c-page-scroll-video",attrs:{"col":_vm.imgCol},on:{"scrollend":_vm.scrollEnd}},_vm._l((_vm.math_ceil(_vm.count / (12 / _vm.imgCol))),function(page){return _c('c-page-scroll-item',[_c('c-row',[_vm._l((( 12 / _vm.imgCol )),function(idx){return [(( page - 1 ) * 12 / _vm.imgCol + ( idx - 1 ) < _vm.count)?(_c('c-span',[_c('c-video-col',{attrs:{"item":_vm.video[( page -1 ) * 12 / _vm.imgCol + ( idx - 1 )],"imgType":_vm.showConfig && _vm.showConfig.imgType ? _vm.showConfig.imgType : 'y'}})],1)):((( page -1 ) * 12 /_vm.imgCol + ( idx - 1 ) == _vm.count)?(_c('c-span',[(_vm.moreInfo)?(_c('c-more',{attrs:{"url":_vm.moreInfo.url,"params":_vm.moreInfo.params,"text":_vm.moreInfo.text},on:{"showMore":_vm.showMore}})):(_vm._e())],1)):(_c('c-span')))]})],2)],1)}))},
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
      this.$emit('showMore');
    },
    scrollEnd: function scrollEnd() {
      this.$emit('scrollEnd');
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = ["video","showConfig","moreInfo","col"];
            obj.components = {"c-link": require("../Link/Link"),"c-more": require("../More/More"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-icon": require("../Icon/Icon"),"c-video-col": require("../Video/VideoCol"),"c-page-scroll": require("../PageScroll/PageScroll"),"c-page-scroll-item": require("../PageScroll/PageScrollItem")};

            
            

            


            
            obj.data = function () {
                return {"count": (((this["video"]&&this["video"].length))?(this["video"].length):(0)),"imgCol": (12/this['math_ceil']((12/((this["col"])?(this["col"]):((((this["showConfig"]&&this["showConfig"]["col"]))?(this["showConfig"]["col"]):(4))))))),"moreCol": 4};
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
    