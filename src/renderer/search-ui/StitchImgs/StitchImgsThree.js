
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-row',_vm._l((3),function(idx){return _c('c-span',{key:idx},[_c('c-touchable-feedback',{attrs:{"open":!!(_vm.imgList[idx-1].url || (_vm.imgList[idx-1].params && _vm.imgList[idx-1].params.tcUrl)),"top":-.05,"bottom":-.05,"left":-.04,"right":-.04,"is-jump":""}},[_c('c-link',{attrs:{"url":_vm.imgList[idx-1].url,"params":_vm.imgList[idx-1].params}},[_c('c-img',{staticClass:"c-stitch-imgs-three-rel c-color-link",attrs:{"img-src":_vm.imgList[idx-1].src,"src":_vm.imgList[idx-1].src,"type":_vm.imgList[idx-1].type},on:{"click":function($event){_vm.onImgClick(_vm.imgList[idx-1])}}},[(_vm.imgList[idx-1].imgNum)?(_c('div',{staticClass:"c-stitch-imgs-three-mask"},[_c('span',{staticClass:"c-stitch-imgs-three-collection"},[_c('c-icon',{staticClass:"c-gap-right-small",attrs:{"type":_vm.imgs}}),_vm._v("\n                            "+_vm._s(_vm.imgList[idx-1].imgNum)+"\n                        ")],1)])):(_vm._e())])],1)],1)],1)}))},
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
    onImgClick: function onImgClick(item) {
      this.$emit('imgClick', item);
    }
  }
};
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"imgList": {"type": Array}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-link": require("../Link/Link"),"c-img": require("../Image/Image"),"c-icon": require("../Icon/Icon"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"imgs": "imgs"};
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
    