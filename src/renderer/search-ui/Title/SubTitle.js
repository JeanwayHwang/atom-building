
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-link',{attrs:{"url":_vm.url,"params":_vm.urlParams,"voice-tag":_vm.text,"visited":_vm.visited,"data-module":"c-t-sub","voice-action":"click"},on:{"click":_vm.onClick}},[_c('c-row',[_c('c-span',{attrs:{"col":_vm.$platform === 'pc' ? 22 : 10}},[_c('h3',{staticClass:"c-title c-font-medium__1nQMO c-color-link c-line-clamp1",attrs:{"role":"text"}},[_c('span',{staticClass:"c-title-text"},[_vm._v(_vm._s(_vm._f("rmHighlight")(_vm.text)))])])]),_vm._v(" "),_c('c-span',{attrs:{"col":_vm.rightCol,"aria-hidden":"true"}},[_c('div',{staticClass:"right-wrapper__2-noi"},[_c('c-icon',{staticClass:"c-color c-gap-left-small",attrs:{"type":"right"}})],1)])],1)],1)},
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
  filters: {
    rmHighlight: function rmHighlight(text) {
      if (!text) {
        return text;
      }

      text = text.replace(/<em>/g, '');
      text = text.replace(/<\/em>/g, '');
      return text;
    }
  },
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

            var cssModules = {"$style":{"rightWrapper":"right-wrapper__2-noi","cFontMedium":"c-font-medium__1nQMO"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": String,"urlParams": Object,"text": String,"visited": {"type": Boolean,"default": true}};
            obj.components = {"c-link": require("../Link/Link"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-icon": require("../Icon/Icon")};

            
            

            


            
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
    