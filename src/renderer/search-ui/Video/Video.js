
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{staticClass:"c-video",attrs:{"url":_vm.video.url,"params":_vm.params},on:{"click":function($event){_vm.$emit('click', $event)}}},[_c('c-row',[_c('c-span',{attrs:{"col":_vm.showCol}},[_c('c-video-thumbnail',{attrs:{"img":_vm.video.poster,"img-type":_vm.imgType,"duration":_vm.math_round(_vm.video.duration),"icontype-defined":_vm.video.icontypeDefined,"icontxt":_vm.video.icontxt,"show-col-defined":_vm.video.showColDefined,"mask-icon-type":_vm.video.maskIconType,"img-border-radius":_vm.video.imgBorderRadius,"show-txt":_vm.video.showTxt,"default-image-type":_vm.video.defaultImageType}})],1),_vm._v(" "),((_vm.showCol != 12 && _vm.$platform !== 'pc') || (_vm.showCol != 24 && _vm.$platform === 'pc'))?(_c('c-span',{attrs:{"col":(_vm.$platform === 'pc' ? 24 : 12 )- _vm.showCol}},[_c('c-text-line',{class:{'c-video-single-title-feed': _vm.feedType},attrs:{"clamp":_vm.titleClamp,"size":_vm.feedType ? 't1' : 't2',"text":_vm.video.title,"fix-height":_vm.showConfig.titleFixHeight,"color":"link","role":"text","aria-roledescription":"视频"}}),_vm._v(" "),_c('c-text-line',{attrs:{"text":_vm.video.text,"color":_vm.showConfig.textColor,"fix-height":_vm.showConfig.textFixHeight,"clamp":_vm.showConfig.textClamp ? _vm.showConfig.textClamp : 2,"role":"text"}}),_vm._v(" "),_c('c-line',{staticClass:"c-color-gray c-video-scroll-tips",attrs:{"clamp":1,"role":"text"}},[(_vm.video.source)?([_vm._v("\n                    "+_vm._s(_vm.video.source)+"\n                    "),_c('i',{staticClass:"c-gap-left-small c-video-scroll-split"})]):(_vm._e()),_vm._v(" "),(_vm.video.pubtime && _vm.video.pubtime !== '0')?([(_vm.video.pubtime)?(_c('c-timespan',{attrs:{"time":_vm.math_round(_vm.video.pubtime)}})):(_vm._e()),_vm._v(" "),_c('i',{staticClass:"c-gap-left-small c-video-scroll-split"})]):(_vm._e()),_vm._v(" "),(_vm.video.playtime && _vm.video.playtime !== '0')?([_vm._v("\n                    "+_vm._s(_vm.video.playtime)+"次播放\n                    "),_c('i',{staticClass:"c-gap-left-small c-video-scroll-split"})]):(_vm._e())],2),_vm._v(" "),_vm._t("default")],2)):(_vm._e())],1)],1)},
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

            obj.props = {"video": {"type": Object,"default": function () { return {}; }},"showConfig": {"type": Object,"default": function () { return {}; }},"params": Object};
            obj.components = {"c-line": require("../Line/Line"),"c-link": require("../Link/Link"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-video-thumbnail": require("../Video/VideoThumbnail"),"c-timespan": require("../Timespan/Timespan"),"c-text-line": require("../TextLine/TextLine")};

            
            

            
    var computed = obj.computed || {};
    computed["showCol"] = function () { return ((this["video"]["showColDefined"])?(this["video"]["showColDefined"]):(4)); };
computed["imgType"] = function () { return ((this["showConfig"]["imgType"])?(this["showConfig"]["imgType"]):("y")); };
computed["feedType"] = function () { return this["showConfig"]["feedType"]; };
computed["titleClamp"] = function () { return ((this["showConfig"]["titleClamp"])?(this["showConfig"]["titleClamp"]):(1)); };
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
    