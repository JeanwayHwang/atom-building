
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.count >= 1 && _vm.count < 3)?(_c('div',{class:_vm.articleType == '1' ? 'c-article-one' : 'c-article-two'},[_c('c-link',{attrs:{"url":_vm.url,"params":_vm.urlParams}},[_c('c-img-content',{attrs:{"img-src":_vm.imgList[0].src,"default-image-type":_vm.imgList[0].defaultImageType,"img-type":_vm.imgType,"img-col":_vm.imgCol,"is-vertical-middle":_vm.imgCol === 2 && (!_vm.abstract || (!_vm.time && !_vm.readNum && !_vm.source))}},[_c('c-line',{staticClass:"c-article-title",class:[
                    _vm.titleClass,
                    {
                        'c-article-title-clamp1': _vm.abstract || _vm.imgCol === 2
                    }
                ],attrs:{"clamp":!_vm.abstract && _vm.imgCol !== 2 ? 2 : 1,"color":"link"}},[(_vm.labelText)?(_c('c-label',{attrs:{"text":_vm.labelText,"type":_vm.labelType}})):(_vm._e()),_vm._v("\n                "+_vm._s(_vm.title)+"\n            ")],1),_vm._v(" "),(_vm.abstract)?(_c('c-line',{staticClass:"c-color c-gap-bottom-zero",class:[
                    {
                        'c-article-abstract-clamp1': _vm.imgCol === 2
                    }
                ],attrs:{"clamp":_vm.imgCol === 2 ? 1 : 2}},[_vm._v("\n                "+_vm._s(_vm.abstract)+"\n            ")])):(_vm._e()),_vm._v(" "),_c('c-article-ext-info',{class:{
                    'c-article-ext-info-margintop': _vm.abstract
                },attrs:{"time":_vm.time,"read-num":_vm.readNum,"source":_vm.source,"show-ext-info":_vm.showExtInfo,"role":"text"}},[_vm._t("extInfo")],2)],1)],1)],1)):(_c('div',{class:_vm.articleType == '1' ? 'c-article-one' : 'c-article-two'},[_c('c-link',{staticClass:"c-gap-bottom-small",attrs:{"url":_vm.url,"params":_vm.urlParams}},[_c('c-line',{staticClass:"c-article-title c-article-title-clamp1",class:_vm.titleClass,attrs:{"clamp":1,"color":"link"}},[(_vm.labelText)?(_c('c-label',{attrs:{"text":_vm.labelText,"type":_vm.labelType}})):(_vm._e()),_vm._v("\n            "+_vm._s(_vm.title)+"\n        ")],1)],1),_vm._v(" "),(_vm.count >=3)?(_c('c-row',[_vm._l((_vm.imgList),function(img,index){return [(index < 3)?(_c('c-span',{key:index,attrs:{"col":_vm.$platform === 'pc' ? '8' : ''}},[_c('c-link',{attrs:{"url":_vm.url,"params":_vm.urlParams}},[_c('c-img',{attrs:{"src":img.src,"default-image-type":img.defaultImageType,"type":img.type ? img.type : 'x',"border-radius":index === 0
                                ? {
                                    tl: true,
                                    tr: false,
                                    bl: true,
                                    br: false
                                }
                                : index === 2
                                    ? {
                                        tl: false,
                                        tr: true,
                                        bl: false,
                                        br: true
                                    }
                                    : {}}})],1)],1)):(_vm._e())]})],2)):((_vm.abstract)?(_c('c-link',{attrs:{"url":_vm.url,"params":_vm.urlParams}},[_c('c-line',{staticClass:"c-color c-gap-bottom-zero",attrs:{"clamp":"2"}},[_vm._v("\n            "+_vm._s(_vm.abstract)+"\n        ")])],1)):(_vm._e())),_vm._v(" "),(_vm.source || _vm.readNum || _vm.time || _vm.showExtInfo)?(_c('c-article-ext-info',{class:{
            'c-article-ext-info-margintop': _vm.abstract && _vm.count < 3
        },attrs:{"time":_vm.time,"read-num":_vm.readNum,"source":_vm.source,"show-ext-info":_vm.showExtInfo}},[_vm._t("extInfo")],2)):(_vm._e())],1))},
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

/**
 * @file 文章拓展信息
 * @auth guoyong03
 */
var _default = {
  render: function render() {
    var vNodeExtInfo = this.$slots.extInfo;
    this.showExtInfo = !!vNodeExtInfo && vNodeExtInfo.length > 0;
    return this.$super.render();
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"title": {"type": String},"articleType": {"type": String,"default": "2"},"url": {"type": String},"urlParams": {"type": Object},"abstract": {"type": String},"imgList": {"type": Array},"imgCol": {"type": Number},"imgType": {"type": String,"default": "s"},"time": {"type": [Number,String]},"readNum": {"type": [Number,String]},"source": {"type": String},"labelText": {"type": String},"labelType": {"type": String},"titleFontSize": String,"titleClamp": String};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-img": require("../Image/Image"),"c-link": require("../Link/Link"),"c-line": require("../Line/Line"),"c-label": require("../Label/Label"),"c-img-content": require("../ImgContent/ImgContent"),"c-article-ext-info": require("./ArticleExtInfo")};

            
            

            
    var computed = obj.computed || {};
    computed["count"] = function () { return (((this["imgList"]&&this["imgList"].length))?(this["imgList"].length):(0)); };
computed["titleClass"] = function () { return {"c-title": (this["articleType"]==="1"),"c-font-medium": (this["articleType"]==="2")}; };
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
            
            obj._scopeId = "data-a-59c5952e";

            module.exports = obj;

            
        });
    