
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"c-container"},[(!_vm.hideHeader)?(_c('header',{staticClass:"c-gap-bottom-small"},[_vm._t("title",[(_vm.title)?(_c('c-title',{attrs:{"text":_vm.title,"clamp":_vm.titleClamp,"icon":_vm.titleIcon,"arrow":_vm.titleArrow,"url":_vm.url,"url-params":_vm.urlParams,"label":_vm.titleLabel,"label-type":_vm.titleLabelType},on:{"click":_vm.onTitleClick}})):(_vm._e())])],2)):(_vm._e()),_vm._v(" "),_c('section',[_vm._t("default")],2)])},
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
    onTitleClick: function onTitleClick(e) {
      /**
       * 标题点击事件
       *
       * @event title-click
       * @property {Event} param1 透传标题的事件对象
       */
      this.$emit('title-click', e);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": String,"urlParams": Object,"title": String,"titleClamp": [String,Number],"titleIcon": String,"titleArrow": Boolean,"titleLabel": String,"titleLabelType": String,"titleSize": String,"hideHeader": {"type": Boolean,"default": false}};
            obj.components = {"c-title": require("../Title/Title")};

            
            

            


            
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
            
            obj._scopeId = "data-a-1c9c798d";

            module.exports = obj;

            
        });
    