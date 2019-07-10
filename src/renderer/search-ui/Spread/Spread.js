
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"c-spread-button c-color WA_LOG_OTHER",on:{"click":_vm.handleClick}},[(_vm.spreadText || _vm.foldText)?(_c('span',{staticClass:"c-font-normal"},[_vm._v(_vm._s(_vm.isSpread ? _vm.spreadText : _vm.foldText))])):(_vm._e()),_vm._v(" "),(_vm.hasIcon)?(_c('c-icon',{staticClass:"c-gap-left-small icon",attrs:{"type":_vm.isSpread ? 'down' : 'top'}})):(_vm._e())],1)},
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
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    }
  }
};
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"isShow": {"type": Boolean,"default": true},"isSpread": {"type": Boolean,"default": true},"hasIcon": {"type": Boolean,"default": true},"spreadText": {"type": String,"default": "展开"},"foldText": {"type": String,"default": "收起"}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
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
            
            obj._scopeId = "data-a-9431fb6c";

            module.exports = obj;

            
        });
    