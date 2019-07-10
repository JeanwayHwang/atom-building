
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-news-article-item"},[_c('c-touchable-feedback',{attrs:{"open":!!(_vm.url || (_vm.params && _vm.params.tcUrl)),"url":_vm.url,"url-params":_vm.params,"border-radius":"3px","is-jump":"","expand":""}},[_c('div',{staticClass:"top"},[(_vm.title)?(_c('c-link',{attrs:{"url":_vm.url,"params":_vm.params}},[_c('c-line',{staticClass:"title c-font-medium c-color-link c-gap-top c-gap-bottom c-gap-inner-left-middle c-gap-inner-right-middle",attrs:{"clamp":"2","role":"text"}},[(_vm.label)?(_c('c-label',{staticClass:"c-gap-right-small",attrs:{"text":_vm.label,"type":_vm.labelType}})):(_vm._e()),_vm._v(" "),(_vm.isTitleHtml)?(_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}})):(_c('span',[_vm._v("\n                        "+_vm._s(_vm.title)+"\n                    ")]))],1)],1)):(_vm._e()),_vm._v(" "),(_vm.avatar || _vm.source || _vm.time || _vm.extra)?(_c('c-line',{staticClass:"abstract c-color-gray c-gap-top-small c-gap-inner-left-middle c-gap-inner-right-middle",attrs:{"clamp":"1","role":"text"}},[_c('c-touchable-feedback',{staticClass:"avatar-link-wrapper",attrs:{"open":!!(_vm.avatarUrl || (_vm.avatarUrlParams && _vm.avatarUrlParams.tcUrl)),"left":-.08,"is-jump":"","background-color":"rgba(0, 0, 0, .08)"}},[_c('c-link',{staticClass:"avatar-link",attrs:{"url":_vm.avatarUrl ? _vm.avatarUrl : null,"params":_vm.avatarUrlParams ? _vm.avatarUrlParams : null}},[(_vm.avatar)?(_c('span',{staticClass:"icon c-gap-right-small",style:({
                                'background-image': 'url(' + _vm.avatar + ')'
                            })})):(_vm._e()),_vm._v(" "),(_vm.source)?(_c('span',{staticClass:"source c-gap-right-middle c-color-gray"},[_vm._v("\n                            "+_vm._s(_vm.source)+"\n                        ")])):(_vm._e())])],1),_vm._v(" "),(_vm.time)?(_c('span',{staticClass:"time c-gap-right-middle"},[(_vm.isTimeNumber)?(_c('c-timespan',{attrs:{"time":_vm.time}})):(_c('span',[_vm._v("\n                        "+_vm._s(_vm.time)+"\n                    ")]))],1)):(_vm._e()),_vm._v(" "),(_vm.extra)?(_c('span',{staticClass:"extra"},[_vm._v("\n                    "+_vm._s(_vm.extra)+"\n                ")])):(_vm._e())],1)):(_vm._e()),_vm._v(" "),_c('div',{staticClass:"c-gap-inner-bottom"}),_vm._v(" "),(_vm.imgSrc)?(_c('div',{staticStyle:{"height":"1px"}})):(_vm._e())],1),_vm._v(" "),(_vm.content || _vm.imgSrc)?(_c('c-link',{attrs:{"url":_vm.url,"params":_vm.params,"role":"text"}},[(_vm.imgSrc)?(_c('c-img',{staticClass:"c-gap-bottom-zero c-gap-top-zero",attrs:{"src":_vm.imgSrc,"type":_vm.imgType,"border-radius":{
                    tl: false,
                    tr: false,
                    bl: true,
                    br: true
                },"hack-white-stroke":""}})):((_vm.content)?(_c('div',{staticClass:"content-wrapper"},[_c('div',{staticClass:"content bottom-border"}),_vm._v(" "),_c('c-line',{staticClass:"content-text c-gap-inner-left-middle c-gap-inner-right-middle c-color",attrs:{"clamp":"4"}},[_vm._v("\n                    "+_vm._s(_vm.content)+"\n                ")])],1)):(_vm._e()))],1)):(_vm._e())],1)],1)},
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
  computed: {
    isTimeNumber: function isTimeNumber() {
      if (this.time) {
        return typeof this.time === 'number';
      }

      return false;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": String,"params": Object,"label": String,"labelType": String,"title": String,"isTitleHtml": {"type": Boolean,"default": false},"avatar": String,"avatarUrl": String,"avatarUrlParams": Object,"source": String,"time": [String,Number],"extra": String,"imgSrc": String,"content": String,"showFirstType": {"type": String,"default": "img"}};
            obj.components = {"c-title": require("../Title/Title"),"c-line": require("../Line/Line"),"c-link": require("../Link/Link"),"c-img": require("../Image/Image"),"c-label": require("../Label/Label"),"c-timespan": require("../Timespan/Timespan"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"imgType": "y"};
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
            
            obj._scopeId = "data-a-16d3896a";

            module.exports = obj;

            
        });
    