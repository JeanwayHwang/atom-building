
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-row',{staticClass:"c-source c-line-clamp1",attrs:{"role":"text"},nativeOn:{"click":function($event){_vm.handleClick($event)}}},[_c('c-span',[_c('c-touchable-feedback',{staticClass:"link-touchable",attrs:{"open":!!(_vm.urlData || (_vm.paramsData && _vm.paramsData.tcUrl)),"left":-.05,"right":-.05,"is-jump":"","background-color":"rgba(0, 0, 0, .08)"}},[_c('c-link',{staticClass:"link",attrs:{"url":_vm.urlData,"params":_vm.paramsData,"data-module":"c-sr"}},[(_vm.imgSrcData)?(_c('span',{staticClass:"c-source-img-wrapper c-gap-right-small",style:({
                        'background-image': 'url(' + _vm.imgSrcData + ')'
                    }),attrs:{"aria-hidden":"true"}})):(_vm._e()),_vm._v(" "),(_vm.sourceData)?(_c('span',{staticClass:"c-color-gray",attrs:{"aria-label":("来自." + _vm.sourceData)}},[_vm._v("\n                    "+_vm._s(_vm.sourceData)+"\n                ")])):(_vm._e())])],1),_vm._v(" "),_vm._t("default"),_vm._v(" "),(_vm.timeData !== undefined && _vm.timeData !== null)?(_c('span',{staticClass:"c-color-gray",style:({
                'margin-left': _vm.timeMarginLeft
            })},[(_vm.isTimeNumber)?(_c('c-timespan',{attrs:{"time":_vm.timeData,"server-time":_vm.serverTimeData,"type":2}})):(_c('span',[_vm._v("\n                "+_vm._s(_vm.timeData)+"\n            ")]))],1)):(_vm._e()),_vm._v(" "),((_vm.feedback && _vm.feedback.suggest && _vm.feedback.suggest.is_show == 1) || _vm.evaluate)?(_c('c-tooltip-func-btn',{staticClass:"func-btn c-gap-left",attrs:{"feedback":_vm.feedback,"evaluate":_vm.evaluate},on:{"feedbackclick":_vm.handleFeedbackClick},nativeOn:{"click":function($event){_vm.handleTooltipFuncBtnClick($event)}}})):(_vm._e())],2)],1)},
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
 * @file 来源
 * @author wangkai <wangkai37@baidu.com>
 */
var _default = {
  methods: {
    handleClick: function handleClick(e) {
      /**
       * 点击事件
       *
       * @event click
       * @property {Event} param1 透传点击事件
       */
      this.$emit('click', e);
    },
    // 新反馈入口点击
    handleFeedbackClick: function handleFeedbackClick(obj) {
      /**
       * 反馈入口点击事件
       *
       * @event feedbackclick
       * @property {Object} param1 对象参数
       * @property {Event} param1.event 事件对象
       * @property {Object} param1.feedback 反馈数据对象
       */
      this.$emit('feedbackclick', obj);
    },
    // 弹层按钮点击
    handleTooltipFuncBtnClick: function handleTooltipFuncBtnClick(e) {
      e.stopPropagation();
      /**
       * 功能按钮点击事件
       *
       * @event funcbtnclick
       */

      this.$emit('funcbtnclick');
    }
  },
  computed: {
    isTimeNumber: function isTimeNumber() {
      // 避免 time === 0 的情况
      if (this.time === 0) {
        return true;
      }

      if (this.time) {
        return typeof this.time === 'number';
      }

      if (this.xzhInfo && this.xzhInfo.otime) {
        return typeof this.xzhInfo.otime === 'number';
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

            obj.props = {"url": String,"params": Object,"imgSrc": String,"source": String,"time": [String,Number],"serverTime": Number,"timeMarginLeft": {"type": String,"default": ".1rem"},"xzhInfo": {"type": Object,"default": null},"feedback": Object,"evaluate": Object};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-timespan": require("../Timespan/Timespan"),"c-link": require("../Link/Link"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback"),"c-tooltip-func-btn": require("../TooltipFuncBtn/TooltipFuncBtn")};

            
            

            


            
            obj.data = function () {
                return {"urlData": ((this["url"])?(this["url"]):((((this["xzhInfo"]&&this["xzhInfo"]["url"]))?(this["xzhInfo"]["url"]):(null)))),"paramsData": ((this["params"])?(this["params"]):((((this["xzhInfo"]&&this["xzhInfo"]["params"]))?(this["xzhInfo"]["params"]):({})))),"imgSrcData": ((this["imgSrc"])?(this["imgSrc"]):((((this["xzhInfo"]&&this["xzhInfo"]["logo"]))?(this["xzhInfo"]["logo"]):("")))),"sourceData": ((this["source"])?(this["source"]):((((this["xzhInfo"]&&this["xzhInfo"]["title"]))?(this["xzhInfo"]["title"]):("")))),"timeData": ((((this["time"]!==(undefined))&&(this["time"]!==null)))?(this["time"]):((((this["xzhInfo"]&&this["xzhInfo"]["otime"]))?(this["xzhInfo"]["otime"]):(null)))),"serverTimeData": this["serverTime"]};
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
            
            obj._scopeId = "data-a-37d1a19b";

            module.exports = obj;

            
        });
    