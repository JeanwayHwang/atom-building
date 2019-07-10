
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{attrs:{"url":_vm.item.url,"params":_vm.params
        ? _vm.params
        : _vm.item.params},on:{"click":function($event){_vm.$emit('click', $event)}}},[_c('c-video-thumbnail',{attrs:{"img":_vm.item.poster,"mask-icon-type":_vm.iconType,"img-type":_vm.imgType,"default-image-type":_vm.item.defaultImageType,"duration":_vm.math_round(_vm.item.duration),"img-border-radius":_vm.imgBorderRadius,"aria-hidden":"true"}}),_vm._v(" "),_c('c-text-line',{staticClass:"c-video-scroll-title",attrs:{"clamp":_vm.titleClamp,"text":_vm.item.title,"label-front":_vm.item.labelFront,"label-front-type":_vm.item.labelFrontType,"fix-height":!!_vm.titleFixHeight,"color":"link"}}),_vm._v(" "),_c('c-line',{staticClass:"c-color-gray c-video-scroll-tips",attrs:{"clamp":"1"}},[(_vm.item.source && +_vm.infoLine === 1)?([_vm._v("\n            "+_vm._s(_vm.item.source)+"\n            "),_c('i',{staticClass:"c-gap-left-small c-video-scroll-split"})]):(_vm._e()),_vm._v(" "),(_vm.item.pubtime && _vm.item.pubtime !== '0')?([(_vm.item.pubtime)?(_c('c-timespan',{attrs:{"time":_vm.math_round(_vm.item.pubtime)}})):(_vm._e()),_vm._v(" "),_c('i',{staticClass:"c-video-scroll-split",class:[+_vm.infoLine === 2 ? 'c-gap-left-middle' : 'c-gap-left-small']})]):(_vm._e()),_vm._v(" "),(_vm.item.playtime && _vm.item.playtime !== '0')?([_vm._v("\n            "+_vm._s(_vm.item.playtime)+"次播放\n            "),_c('i',{staticClass:"c-gap-left-small c-video-scroll-split"})]):(_vm._e()),_vm._v(" "),(_vm.item.source && +_vm.infoLine === 2)?(_c('c-line',[_vm._v("\n            "+_vm._s(_vm.item.source)+"\n        ")])):(_vm._e())],2)],1)},
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

            obj.props = {"item": {"type": Object,"default": function () { return {}; }},"imgType": {"type": String,"default": "y"},"iconType": {"type": String,"default": ""},"titleClamp": {"type": [String,Number],"default": 1},"infoLine": {"type": [String,Number],"default": 1},"params": Object,"titleFixHeight": Boolean,"imgBorderRadius": {"type": Object}};
            obj.components = {"c-line": require("../Line/Line"),"c-text-line": require("../TextLine/TextLine"),"c-link": require("../Link/Link"),"c-video-thumbnail": require("../Video/VideoThumbnail"),"c-timespan": require("../Timespan/Timespan")};

            
            

            


            
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
            
            obj._scopeId = "data-a-38673666";

            module.exports = obj;

            
        });
    