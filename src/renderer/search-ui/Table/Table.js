
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"c-table",class:[
        (_vm.type !== 'standardLine' && _vm.type !== 'standardBlock') ? 'c-table-abstract' : '',
        _vm.type !== 'abstractMulti' ? 'c-blocka' : '',
        _vm.type == 'standardBlock' ? 'c-table-slink' : '','c-gap-bottom-small'
    ],attrs:{"aria-colcount":_vm.content.tRow.length,"aria-rowcount":_vm.content.tRow[0].length}},[_c('tbody',{staticClass:"c-blocka"},[(_vm.content.tHead)?(_c('tr',{staticClass:"c-row"},_vm._l((_vm.content.tHead),function(thItem,i){return _c('th',{key:i,staticClass:"c-line-clamp1",class:[
                    _vm.content.cols ? 'c-span' + _vm.content.cols[i] : 'c-span' + _vm.gridClass
                ]},[_vm._v("\n                "+_vm._s(thItem)+"\n            ")])}))):(_vm._e()),_vm._v(" "),(_vm.type === 'standardLine')?(_vm._l((_vm.content.tRow),function(trItem,i){return _c('tr',{key:i,staticClass:"c-blocka c-row"},[_c('td',{staticClass:"c-table-stantline-tr"},[_c('c-touchable-feedback',{attrs:{"is-jump":!!(trItem.url || (trItem.params && trItem.params.tcUrl)),"top":-.11,"bottom":-.11,"left":-.17,"right":-.17,"url":trItem.url,"url-params":trItem.params,"expand":""}},[_c('c-link',{staticClass:"c-row",attrs:{"url":trItem.url,"params":trItem.params}},_vm._l((trItem.tCell),function(tdItem,tdi){return _c('div',{key:tdi,staticClass:"c-line-clamp1",class:[
                                    _vm.content.cols ? 'c-span' + _vm.content.cols[tdi] : 'c-span' + _vm.gridClass,
                                    _vm.type !== 'abstractLine' ? 'c-color-link' : 'c-color'
                                ],attrs:{"aria-rowindex":i + 1,"aria-colindex":tdi + 1,"role":"cell"}},[_vm._v("\n                                "+_vm._s(tdItem.text)+"\n                            ")])}))],1)],1)])})):(_vm._e()),_vm._v(" "),(_vm.type !== 'abstractMulti' && _vm.type !== 'standardLine')?(_vm._l((_vm.content.tRow),function(trItem,i){return _c('tr',{key:i,staticClass:"c-blocka c-row"},_vm._l((trItem.tCell),function(tdItem,tdi){return _c('td',{key:tdi,staticClass:"c-line-clamp1 c-color",class:[
                        _vm.content.cols ? 'c-span' + _vm.content.cols[tdi] : 'c-span' + _vm.gridClass
                    ],attrs:{"aria-rowindex":i + 1,"aria-colindex":tdi + 1,"role":"cell"}},[(tdItem.url && _vm.type === 'standardBlock')?(_c('c-slink',{staticClass:"c-table-td-block",attrs:{"type":'auto',"url":tdItem.url,"text":tdItem.text,"params":tdItem.params}})):(_vm._e()),_vm._v(" "),(!tdItem.url || _vm.type !== 'standardBlock')?([_vm._v("\n                        "+_vm._s(tdItem.text)+"\n                    ")]):(_vm._e())],2)}))})):(_vm._e()),_vm._v(" "),(_vm.type === 'abstractMulti')?(_vm._l((_vm.content.tRow),function(trItem,i){return _c('tr',{key:i,staticClass:"c-blocka c-row"},_vm._l((trItem.tCell),function(tdItem,tdi){return _c('td',{key:tdi,staticClass:"c-line-clamp1 c-color",class:[
                        _vm.content.cols ? 'c-span' + _vm.content.cols[tdi] : 'c-span' + _vm.gridClass
                    ],attrs:{"aria-rowindex":i + 1,"aria-colindex":tdi + 1,"role":"cell"}},[(!tdItem.abstract)?([_vm._v("\n                        "+_vm._s(tdItem.text)+"\n                    ")]):(_vm._e()),_vm._v(" "),(tdItem.abstract)?(_c('div',{staticClass:"c-line-clamp1"},[_vm._v("\n                        "+_vm._s(tdItem.text)+"\n                    ")])):(_vm._e()),_vm._v(" "),(tdItem.abstract)?(_c('div',{staticClass:"c-line-clamp1 c-table-gray"},[_vm._v("\n                        "+_vm._s(tdItem.abstract)+"\n                    ")])):(_vm._e())],2)}))})):(_vm._e())],2)])},
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

            obj.props = {"content": Object,"type": String};
            obj.components = {"c-link": require("../Link/Link"),"c-slink": require("../Slink/Slink"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
            obj.data = function () {
                return {"gridClass": (12/this["content"]["tRow"][0]["tCell"].length)};
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
            
            obj._scopeId = "data-a-b3239c76";

            module.exports = obj;

            
        });
    