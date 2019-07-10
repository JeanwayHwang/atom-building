
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"data-module":"c-kf"}},[_c('div',{staticClass:"wa-onlyshow-kgbar-wrapper c-row-tile",style:([
            {
                backgroundColor: _vm.backgroundColor,
                borderTop: _vm.borderTop,
                borderBottom: _vm.borderBottom
            },
            _vm.$platform === 'pc' ? {padding: '7px 0'} : {}
        ])},[_c('c-touchable-feedback',{attrs:{"is-jump":!!(_vm.url || (_vm.urlParams && _vm.urlParams.tcUrl)),"top":-.1,"bottom":-.1,"url":_vm.url,"url-params":_vm.urlParams,"expand":""}},[_c('c-link',{staticClass:"c-color",attrs:{"url":_vm.url,"params":_vm.urlParams,"voice-tag":_vm.text,"voice-action":"click"}},[_c('span',{staticClass:"wa-onlyshow-kgbar-text c-gap-right",style:({
                        color: _vm.textColor
                    })},[_vm._v("\n                    "+_vm._s(_vm.text)+"\n                ")]),_vm._v(" "),_c('span',{staticClass:"wa-onlyshow-kgbar-icon c-font-medium",attrs:{"aria-hidden":"true"}},[_c('c-icon',{style:({
                            color: _vm.iconColor
                        }),attrs:{"type":_vm.iconType}})],1)])],1),_vm._v(" "),(_vm.feedback && _vm.feedback.suggest && _vm.feedback.suggest.is_show == 1)?(_c('c-touchable-feedback',{staticClass:"c-feedback-touchable WA_LOG_BTN",style:(_vm.$platform === 'pc' ? {padding: '8px 0'} : {}),attrs:{"left":-.05,"right":-.05,"background-color":"rgba(0, 0, 0, .08)","expand":""},nativeOn:{"click":function($event){$event.stopPropagation();_vm.handleFeedbackClick({
                feedback: _vm.feedback,
                event: $event
            })}}},[_c('span',{staticClass:"c-feedback c-color-gray c-font-normal"},[_vm._v("\n                反馈\n            ")])])):(_vm._e())],1)])},
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
    handleFeedbackClick: function handleFeedbackClick(obj) {
      /**
       * 反馈按钮点击事件
       *
       * @event feedbackclick
       * @property {object} param1 事件参数
       * @property {Event} param1.event 透传的事件
       * @property {object} param1.feedback 反馈数据
       */
      this.$emit('feedbackclick', obj); // 这里增加 try catch 是因为 openFeedBack 是在 ala-cli root 模板里的代码，在组件上线时不能保证模板里一定存在该方法

      try {
        this.$root.openFeedBack();
      } catch (e) {}
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"text": {"type": String,"default": "查看更多"},"url": String,"urlParams": Object,"iconType": {"type": String,"default": "kg_right_arrow"},"textColor": {"type": String,"default": "#000"},"iconColor": {"type": String,"default": "#000"},"feedback": Object,"backgroundColor": {"type": String,"default": "#f8f8f8"},"borderTop": {"type": String,"default": "1px solid #eee"},"borderBottom": {"type": String,"default": "1px solid #e1e1e1"}};
            obj.components = {"c-link": require("../Link/Link"),"c-icon": require("../Icon/Icon"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
            
            obj._scopeId = "data-a-6e3c22cc";

            module.exports = obj;

            
        });
    