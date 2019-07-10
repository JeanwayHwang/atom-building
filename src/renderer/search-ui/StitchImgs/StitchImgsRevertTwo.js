
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-row',[_c('c-span',{attrs:{"col":8}},[_c('c-touchable-feedback',{attrs:{"open":!!(_vm.imgList[0].url || (_vm.imgList[0].params && _vm.imgList[0].params.tcUrl)),"top":-.05,"bottom":-.05,"left":-.04,"right":-.04,"is-jump":""}},[_c('c-link',{attrs:{"url":_vm.imgList[0].url,"params":_vm.imgList[0].params},on:{"click":function($event){_vm.onImgClick(_vm.imgList[0])}}},[_c('c-img',{staticClass:" c-color-link",attrs:{"img-src":_vm.imgList[0].src,"src":_vm.imgList[0].src,"type":_vm.imgList[0].type,"padding-bottom":_vm.leftHeight,"show-num":_vm.imgList[0].imgNum,"icon-type":_vm.imgList[0].imgNum?'imgs':''},on:{"click":function($event){_vm.onImgClick(_vm.imgList[0])}}}),_vm._v(" "),_vm._t("default")],2)],1)],1),_vm._v(" "),_c('c-span',{attrs:{"col":4}},[_c('c-touchable-feedback',{attrs:{"open":!!(_vm.imgList[1].url || (_vm.imgList[1].params && _vm.imgList[1].params.tcUrl)),"top":-.05,"bottom":-.05,"left":-.04,"right":-.04,"is-jump":""}},[_c('c-link',{attrs:{"url":_vm.imgList[1].url,"params":_vm.imgList[1].params}},[_c('c-img',{staticClass:"c-color-link",attrs:{"img-src":_vm.imgList[1].src,"src":_vm.imgList[1].src,"type":_vm.imgList[1].type,"show-num":_vm.imgList[1].imgNum,"icon-type":_vm.imgList[1].imgNum?'imgs':''},on:{"click":function($event){_vm.onImgClick(_vm.imgList[1])}}})],1)],1)],1)],1)},
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

            obj.props = {"imgList": {"type": Array,"default": function () { return []; }}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-link": require("../Link/Link"),"c-img": require("../Image/Image"),"c-icon": require("../Icon/Icon"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            
    var computed = obj.computed || {};
    computed["leftHeight"] = function () { return ((31.271477653*this["rightHeight"][this["imgList"][0]["type"]])/64.60481099); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"imgs": "imgs","rightHeight": {"s": 100,"l": 133.33333333,"v": 33.33333333,"w": 56.25,"x": 75,"y": 66.66666667,"z": 40}};
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
    