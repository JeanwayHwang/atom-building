
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{attrs:{"url":_vm.item.url,"params":_vm.item.params}},[_c('c-img',{staticClass:"c-color-link",attrs:{"img-src":_vm.item.src,"src":_vm.item.src,"type":_vm.item.type,"title":_vm.item.title,"titleClamp":_vm.item.titleClamp,"subTitle":_vm.item.subTitle,"subTitleClamp":_vm.item.subTitleClamp,"titleAlign":_vm.item.titleAlign ? _vm.item.titleAlign : 'left',"subTitleAlign":_vm.item.subTitleAlign ? _vm.item.subTitleAlign : 'left',"showNum":_vm.item.imgNum,"iconType":_vm.item.iconType,"hackWhiteStroke":!!_vm.item.hackWhiteStroke},on:{"click":function($event){_vm.onImgClick(_vm.item)}}},[_vm._t("default")],2),_vm._v(" "),_vm._t('c-page-scroll-imgs-ext'+_vm.idx)],2)},
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

            obj.props = ["idx","col","item"];
            obj.components = {"c-img": require("../Image/Image"),"c-link": require("../Link/Link")};

            
            

            


            
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
    