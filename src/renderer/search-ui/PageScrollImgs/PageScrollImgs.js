
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-page-scroll',{staticClass:"c-page-scroll-imgs",attrs:{"col":_vm.showCol}},_vm._l((_vm.math_ceil(_vm.imgList.length / (12 / _vm.col))),function(page){return _c('c-page-scroll-item',[_c('c-row',[_vm._l((( 12 / _vm.showCol )),function(idx){return [(( page - 1 ) * 12 / _vm.showCol + ( idx - 1 ) < _vm.imgLen)?(_c('c-span',[_c('c-page-scroll-img',{attrs:{"idx":( page - 1 ) * 12 / _vm.showCol + ( idx - 1 ),"col":_vm.showCol,"item":_vm.imgList[( page - 1 ) * 12 / _vm.showCol + ( idx - 1 )]}},[_vm._t('c-page-scroll-imgs'+(( page - 1 ) * 12 / _vm.showCol + ( idx - 1 )))],2),_vm._v(" "),_vm._t('c-page-scroll-imgs-ext'+(( page - 1 ) * 12 / _vm.showCol + ( idx - 1 )))],2)):((( page - 1 ) * 12 /_vm.showCol + ( idx - 1 ) == _vm.imgLen)?(_c('c-span',[_c('c-link',{staticClass:"c-color",attrs:{"url":_vm.moreUrl,"params":_vm.moreUrlParams},on:{"click":_vm.showMore}},[_c('div',{staticClass:"c-page-scroll-imgs-more"},[_c('i',{staticClass:"c-icon c-page-scroll-imgs-icon"},[_vm._v("")]),_vm._v(" "),_c('div',[_vm._v("查看更多")])])])],1)):(_c('c-span')))]})],2)],1)}))},
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
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = ["col","pageNum","imgList","moreUrl","moreUrlParams"];
            obj.components = {"c-page-scroll": require("../PageScroll/PageScroll"),"c-page-scroll-item": require("../PageScroll/PageScrollItem"),"c-page-scroll-img": require("./PageScrollImgsItem"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-link": require("../Link/Link")};

            
            

            


            
            obj.data = function () {
                return {"showCol": ((this["col"])?(this["col"]):(3)),"imgLen": this["imgList"].length};
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
    