
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"role":_vm.rightUrl
        ? 'link'
        : 'text',"data-module":"c-f"}},[(_vm.useDivider)?(_c('c-divider')):(_vm._e()),_vm._v(" "),(_vm.showUrl)?(_c('div',{staticClass:"c-showurl c-line-clamp1"},[_c('span',{staticClass:"c-showurl c-footer-showurl"},[_vm._v("\n            "+_vm._s(_vm.showUrl)+"\n        ")]),_vm._v(" "),(_vm.time)?(_c('span',{staticClass:"c-footer-showurl c-gap-left"},[(_vm.isTimeNumber)?(_c('c-timespan',{attrs:{"time":_vm.time,"server-time":_vm.serverTime}})):(_c('span',[_vm._v("\n                "+_vm._s(_vm.time)+"\n            ")]))],1)):(_vm._e()),_vm._v(" "),_vm._t("default"),_vm._v(" "),((_vm.feedback && _vm.feedback.suggest && _vm.feedback.suggest.is_show == 1) || _vm.evaluate)?(_c('c-tooltip-func-btn',{staticClass:"func-btn c-gap-left",attrs:{"feedback":_vm.feedback,"evaluate":_vm.evaluate},on:{"feedbackclick":_vm.handleFeedbackClick}})):(_vm._e())],2)):(_c('c-row',{staticClass:"c-footer-no-showurl",class:_vm.useDivider
            ? 'c-gap-top'
            : ''},[_c('c-span',{staticClass:"c-line-clamp1",nativeOn:{"click":function($event){_vm.onLeftClick($event)}}},[_c('span',{staticClass:"c-color-gray"},[_vm._v("\n                "+_vm._s(_vm.leftText)+"\n            ")]),_vm._v(" "),(_vm.leftIcon)?(_c('span',{staticClass:"c-foot-icon c-gap-left-small",class:['c-foot-icon-' + _vm.leftIcon, 'c-foot-icon-' + _vm.leftIcon + '-aladdin']})):(_vm._e()),_vm._v(" "),_vm._t("default"),_vm._v(" "),(_vm.isFeedbackBoolean)?(_c('span',{staticClass:"c-gap-left c-color-gray c-footer-feedback-text",on:{"click":_vm.feedbackClick}},[_vm._v("\n                反馈\n            ")])):(_vm._e()),_vm._v(" "),((!_vm.isFeedbackBoolean && _vm.feedback && _vm.feedback.suggest && _vm.feedback.suggest.is_show == 1) || _vm.evaluate)?(_c('c-tooltip-func-btn',{staticClass:"func-btn c-gap-left",attrs:{"feedback":_vm.feedback,"evaluate":_vm.evaluate},on:{"feedbackclick":_vm.handleFeedbackClick}})):(_vm._e())],2),_vm._v(" "),_c('c-span',{staticClass:"c-footer-moreinfo-wrapper",attrs:{"data-module":_vm.footerMoreDataModule}},[_c('c-touchable-feedback',{attrs:{"open":_vm.rightTouchable,"is-jump":_vm.rightTouchable,"background-color":"rgba(0, 0, 0, .08)"}},[_c('c-link',{staticClass:"c-moreinfo c-footer-moreinfo",attrs:{"url":_vm.rightUrl,"params":_vm.rightUrlParams},on:{"click":_vm.onClick}},[_c('div',{staticClass:"c-flexbox c-footer-moreinfo"},[(_vm.rightText)?(_c('span',{staticClass:"c-line-clamp1 c-footer-moreinfo-text",style:({
                                'padding-right': (_vm.rightUrl
                                    || (_vm.rightUrlParams && _vm.rightUrlParams.tcUrl))
                                    ? '.2rem'
                                    : '0'
                            })},[_vm._v("\n                            "+_vm._s(_vm.rightText)+"\n                        ")])):(_vm._e()),_vm._v(" "),(_vm.rightUrl || (_vm.rightUrlParams && _vm.rightUrlParams.tcUrl))?(_c('c-icon',{staticClass:"c-gap-left-small c-footer-moreinfo-icon-abs",attrs:{"type":"right"}})):(_vm._e())],1)])],1)],1)],1))],1)},
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
    onLeftClick: function onLeftClick(e) {
      /**
       * 脚注左侧点击事件
       *
       * @event leftclick
       * @property {Event} param1 透传点击事件对象
       */
      this.$emit('leftclick', e);
    },
    onClick: function onClick(e) {
      /**
       * 点击事件
       *
       * @event click
       * @property {Event} param1 透传点击事件对象
       */
      this.$emit('click', e);
    },
    // 旧反馈入口
    feedbackClick: function feedbackClick(e) {
      this.$emit('feedback-click', e);
    },
    // 新反馈入口点击
    handleFeedbackClick: function handleFeedbackClick(obj) {
      /**
       * 反馈点击事件
       *
       * @event feedbackclick
       * @property {object} param1 反馈点击事件对象
       * @property {Event} param1.event 透传点击事件对象
       * @property {Event} param1.feedback 反馈数据
       */
      this.$emit('feedbackclick', obj);
    }
  },
  computed: {
    // 判断反馈字段 feedback 是否为 boolean 型
    isFeedbackBoolean: function isFeedbackBoolean() {
      if (this.feedback) {
        return typeof this.feedback === 'boolean';
      }

      return false;
    },
    // 判断时间字段 time 是否为 number 型
    isTimeNumber: function isTimeNumber() {
      if (this.time) {
        return typeof this.time === 'number';
      }

      return false;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"showUrl": String,"leftText": String,"leftIcon": String,"rightText": String,"rightUrl": String,"rightUrlParams": Object,"divider": {"type": Boolean,"default": false},"time": [Number,String],"serverTime": [Number,String],"feedback": [Boolean,Object],"rightTouchable": {"type": Boolean,"default": false},"evaluate": Object,"footerMoreDataModule": {"type": String,"default": ""}};
            obj.components = {"c-link": require("../Link/Link"),"c-icon": require("../Icon/Icon"),"c-divider": require("../Divider/Divider"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-timespan": require("../Timespan/Timespan"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback"),"c-tooltip-func-btn": require("../TooltipFuncBtn/TooltipFuncBtn")};

            
            

            


            
            obj.data = function () {
                return {"useDivider": ((this["divider"]||this["rightUrl"])&&(this["divider"]!==false))};
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
            
            obj._scopeId = "data-a-bde54cd0";

            module.exports = obj;

            
        });
    