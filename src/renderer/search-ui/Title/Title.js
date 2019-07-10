
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{attrs:{"url":_vm.url,"params":_vm.urlParams,"voice-tag":_vm.text,"visited":_vm.visited,"data-module":"c-t","voice-action":"click"},on:{"click":_vm.onClick}},[(!_vm.arrow)?(_c('title-base',{attrs:{"text":_vm.text,"label":_vm.label,"label-type":_vm.labelType,"icon":_vm.icon,"size":_vm.size,"clamp":_vm.clamp,"color":_vm.color,"clamp-strategy":_vm.clampStrategy,"font-weight":_vm.fontWeight}})):(_c('c-row',[_c('c-span',{attrs:{"col":_vm.$platform === 'pc' ? (24 - _vm.rightCol) : (12 - _vm.rightCol)}},[_c('title-base',{attrs:{"text":_vm.text,"label":_vm.label,"label-type":_vm.labelType,"icon":_vm.icon,"clamp":_vm.clamp,"size":_vm.size,"color":_vm.color,"clamp-strategy":_vm.clampStrategy,"font-weight":_vm.fontWeight}})],1),_vm._v(" "),_c('c-span',{attrs:{"col":_vm.rightCol,"aria-hidden":"true"}},[_c('div',{staticClass:"right-wrapper"},[_c('c-line',{staticClass:"c-color right-text"},[_vm._v("\n                    "+_vm._s(_vm.rightText)+"\n                ")]),_vm._v(" "),_vm._t("right"),_vm._v(" "),(_vm.arrow)?(_c('c-icon',{staticClass:"c-color c-gap-left-small",attrs:{"type":"right"}})):(_vm._e())],2)])],1))],1)},
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
  methods: {
    onClick: function onClick(e) {
      /**
       * click event.
       *
       * @event click
       */
      this.$emit('click', e);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": String,"urlParams": Object,"text": String,"icon": String,"arrow": {"type": Boolean,"default": false},"label": String,"labelType": String,"size": {"type": String,"default": "t1"},"fontWeight": {"type": String},"clamp": [String,Number],"visited": {"type": Boolean,"default": true},"color": {"type": String},"rightText": {"type": String},"rightCol": {"type": Number,"default": 2},"clampStrategy": {"type": String}};
            obj.components = {"c-link": require("../Link/Link"),"c-line": require("../Line/Line"),"c-icon": require("../Icon/Icon"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"title-base": require("./TitleBase")};

            
            

            


            
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
            
            obj._scopeId = "data-a-3c2a160e";

            module.exports = obj;

            
        });
    