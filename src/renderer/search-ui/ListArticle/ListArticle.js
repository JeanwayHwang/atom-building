
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.articleType == '1' ? 'c-list-article-one' : 'c-list-article-two',attrs:{"role":"listbox"}},[_vm._l((_vm.articleList),function(item,index){return [_c('c-single-article',{key:index,class:{
                'c-gap-bottom': index !== _vm.articleList.length - 1,
                'c-gap-top': index !== 0
            },attrs:{"article-type":_vm.articleType,"title":item.title,"url":item.url,"url-params":item.urlParams,"abstract":item.abstract,"img-list":item.imgList,"img-col":item.imgCol,"img-type":item.imgType,"time":item.time,"source":item.source,"read-num":item.readNum,"label-text":item.labelText,"label-type":item.labelType,"role":"option"}},[(item.extInfo)?(_c('span',{slot:"extInfo"},[_vm._v(_vm._s(item.extInfo))])):(_vm._e())]),_vm._v(" "),(index < _vm.articleList.length - 1)?(_c('c-divider',{key:index})):(_vm._e())]})],2)},
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

            obj.props = {"articleList": {"type": Array},"articleType": {"type": String,"default": "2"}};
            obj.components = {"c-single-article": require("../Article/Article"),"c-divider": require("../Divider/Divider")};

            
            

            


            
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
    