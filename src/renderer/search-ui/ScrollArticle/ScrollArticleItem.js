
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-touchable-feedback',{staticClass:"c-scroll-article-item",attrs:{"open":!!(_vm.item.url || (_vm.item.params && _vm.item.params.tcUrl)),"url":_vm.item.url,"url-params":_vm.item.params,"is-jump":""}},[_c('c-link',{attrs:{"url":_vm.item.url,"params":_vm.item.params}},[(_vm.item.src || _vm.item.defaultImageType)?([(_vm.item.type != 'video')?(_c('c-img',{staticClass:"c-scroll-article-item-rel c-gap-top-zero",attrs:{"src":_vm.item.src,"default-image-type":_vm.item.defaultImageType,"border-radius":{
                    tl: true,
                    tr: true,
                    bl: false,
                    br: false
                },"type":"y"}})):(_c('c-video-thumbnail',{attrs:{"img":_vm.item.src,"icontype-defined":_vm.item.icontypeDefined,"show-col-defined":_vm.item.showColDefined,"show-txt":_vm.item.duration,"img-type":"y"}}))]):(_vm._e()),_vm._v(" "),_c('div',{staticClass:"c-scroll-article-item-inner",style:({
                'margin-top': (_vm.item.src || _vm.item.defaultImageType)
                    ? '.05rem'
                    : '.1rem'
            })},[_c('c-line',{staticClass:"c-font-normal c-color-link",attrs:{"clamp":"2"}},[_c('span',{staticClass:"c-gap-right-small"},[(_vm.item.labelText)?(_c('c-label',{attrs:{"text":_vm.item.labelText,"type":_vm.item.labelType}})):(_vm._e())],1),_vm._v("\n                "+_vm._s(_vm.item.title)+"\n            ")]),_vm._v(" "),(!(_vm.item.src || _vm.item.defaultImageType))?(_c('c-line',{staticClass:"c-color c-gap-top-small",attrs:{"clamp":"4"}},[_vm._v("\n                "+_vm._s(_vm.item.content)+"\n            ")])):(_vm._e())],1)],2),_vm._v(" "),(_vm.item.source || _vm.item.time || _vm.showExt)?(_c('div',{staticClass:"c-scroll-article-extInfo c-color-gray c-line-clamp1"},[_vm._t("default",[_c('c-link',{staticClass:"c-line-clamp1",attrs:{"url":_vm.item.url,"params":_vm.item.params}},[(_vm.item.time)?(_c('c-timespan',{staticClass:"c-gap-right-large",attrs:{"time":_vm.item.time}})):(_vm._e()),_vm._v(" "),(_vm.item.source)?(_c('span',[_vm._v("\n                    "+_vm._s(_vm.item.source)+"\n                ")])):(_vm._e())],1)])],2)):(_vm._e())],1)},
staticRenderFns: []
}

})(_module1, _module1.exports)

            /* get script output data */
            var _module2 = {
                exports: {}
            };
            (function (module, exports) {
    "use strict";
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"idx": {"type": Number},"item": {"type": Object},"showExt": {"type": Boolean,"default": false}};
            obj.components = {"c-img": require("../Image/Image"),"c-link": require("../Link/Link"),"c-line": require("../Line/Line"),"c-timespan": require("../Timespan/Timespan"),"c-video-thumbnail": require("../Video/VideoThumbnail"),"c-label": require("../Label/Label"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
            
            obj._scopeId = "data-a-77d67ae2";

            module.exports = obj;

            
        });
    