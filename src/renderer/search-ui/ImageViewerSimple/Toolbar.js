
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-transition',{attrs:{"enter":{
        animations: {
            opacity: {
                frames: [0, 1]
            }
        },
        options: {
            duration: 200
        }
    },"leave":{
        animations: {
            opacity: {
                frames: [0, 1],
                reverse: true
            }
        },
        options: {
            duration: 200
        }
    }}},[_c('div',{staticClass:"toolbar__2URaH"},[(!_vm.hidePageNum)?(_c('div',{staticClass:"toolbar-pagenum__1ngzw"},[_vm._v("\n            "+_vm._s(_vm.index + 1)+"/"+_vm._s(_vm.count)+"\n        ")])):(_vm._e()),_vm._v(" "),(!_vm.hideSaveButton)?(_c('div',{staticClass:"toolbar-save__2Bz8C",on:{"touchstart":function($event){$event.stopPropagation();},"touchmove":function($event){$event.stopPropagation();},"touchend":function($event){$event.stopPropagation();},"click":function($event){$event.stopPropagation();_vm.onSaveClick($event)}}},[_vm._v("\n            保存\n        ")])):(_vm._e())])])},
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
 * @file 简单工具栏
 * @author rongweiwei@baidu.com
 */
var _default = {
  methods: {
    onSaveClick: function onSaveClick() {
      this.$emit('save-click');
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"toolbar":"toolbar__2URaH","toolbarPagenum":"toolbar-pagenum__1ngzw","toolbarSave":"toolbar-save__2Bz8C"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"index": {"type": Number,"required": true},"count": {"type": Number,"required": true},"hidePageNum": {"type": Boolean,"default": false},"hideSaveButton": {"type": Boolean,"default": false}};
            obj.components = {"c-transition": require("../Motion/Transition")};

            
            

            


            
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

                
                        Object.keys(cssModules).forEach(function (key) {
                            self[key] = cssModules[key];
                        });
                    

                originCreated && originCreated.call(self);
            };
            
            

            module.exports = obj;

            
        });
    