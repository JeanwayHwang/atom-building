
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.useDivider)?(_c('c-divider')):(_vm._e()),_vm._v(" "),(_vm.type === 'toolBar')?(_c('div',{attrs:{"id":"onlyshow-bar"}},[_c('div',{staticClass:"bar"},[_c('div',{staticClass:"bar-l WA_LOG_BTN"},[(_vm.hideOtherResult)?(_c('span',[_vm._v("\n                    更多搜索结果\n                ")])):(_c('span',[_vm._v("\n                    搜索智能聚合\n                ")])),_vm._v(" "),_c('i',{staticClass:"sicon-down"})]),_vm._v(" "),_vm._m(0)])])):((_vm.type==='linkBar')?(_c('div',{staticClass:"wa-onlyshow-kgbar-wrapper c-row-tile c-line-top"},[_c('c-link',{staticClass:"c-color",attrs:{"url":_vm.url,"params":_vm.urlParams}},[_c('span',{staticClass:"wa-onlyshow-kgbar-text c-gap-right",style:({
                    color: _vm.iconColor
                        ? _vm.iconColor
                        : ''
                })},[_vm._v("\n                "+_vm._s(_vm.text)+"\n            ")]),_vm._v(" "),_c('span',{staticClass:"wa-onlyshow-kgbar-icon"},[_c('c-icon',{style:({color: _vm.iconColor ? _vm.iconColor : ''}),attrs:{"type":_vm.iconType}})],1)])],1)):((_vm.hideOtherResult)?(_c('div',{staticClass:"onlyshow-bar-wapper"},[_c('div',{staticClass:"onlyshow-bar-seperate"}),_vm._v(" "),_c('div',{staticClass:"c-color-gray-a WA_LOG_BTN onlyshow-bar-text"},[_vm._v("\n            展开其他结果\n            "),_c('i',{staticClass:"c-icon c-gap-left-small"},[_vm._v("\n                \n            ")])])])):(_vm._e())))],1)},
staticRenderFns: [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bar-r"},[_c('span',{staticClass:"btn-fb WA_LOG_BTN"},[_c('i',{staticClass:"sicon-fb"}),_vm._v("\n                    反馈\n                ")]),_vm._v(" "),_c('span',{staticClass:"slipt"},[_vm._v("\n                    |\n                ")]),_vm._v(" "),_c('span',{staticClass:"btn-share WA_LOG_BTN"},[_c('i',{staticClass:"sicon-share"}),_vm._v("\n                    分享\n                ")])])}]
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

            obj.props = {"type": String,"text": String,"url": String,"urlParams": Object,"useDivider": Boolean,"hideOtherResult": Boolean,"iconType": String,"iconColor": String};
            obj.components = {"c-divider": require("../Divider/Divider"),"c-link": require("../Link/Link"),"c-icon": require("../Icon/Icon")};

            
            

            


            
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
            
            obj._scopeId = "data-a-21e785f4";

            module.exports = obj;

            
        });
    