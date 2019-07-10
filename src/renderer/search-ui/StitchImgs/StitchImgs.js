
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.imgNum == 2 && !(_vm.imgType=='combImg'))?(_c('c-stitch-imgs-two',{attrs:{"img-list":_vm.imgList}})):((_vm.imgNum == 2 && _vm.imgType=='combImg')?(_c('c-stitch-imgs-two-revert',{attrs:{"img-list":_vm.imgList}},[_vm._t("img")],2)):((_vm.imgNum == 3)?(_c('c-stitch-imgs-three',{attrs:{"img-list":_vm.imgList}})):((_vm.imgNum == 5)?(_c('c-stitch-imgs-five',{attrs:{"img-list":_vm.imgList}})):(_c('span')))))},
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

            obj.props = {"num": {"type": Number,"required": true},"imgList": {"type": Array,"required": true},"imgType": {"type": String}};
            obj.components = {"c-stitch-imgs-two": require("./StitchImgsTwo"),"c-stitch-imgs-two-revert": require("./StitchImgsRevertTwo"),"c-stitch-imgs-three": require("./StitchImgsThree"),"c-stitch-imgs-five": require("./StitchImgsFive")};

            
            

            


            
            obj.data = function () {
                return {"imgNum": (((this["num"]>0))?(this["num"]):(this["imgList"].length))};
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
    