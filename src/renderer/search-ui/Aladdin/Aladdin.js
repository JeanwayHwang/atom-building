
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"c-container aladdin__3qKHL",class:( _obj = {
        'c-sigma-container': _vm.tplInfo.style === 'sigma',
        'c-zk-container': _vm.tplInfo.is_group,
        'variant-card': _vm.oldUi
    }, _obj[_vm.$style.feedback] = _vm.touchable, _obj['WA_LOG_SF'] =  _vm.touchable && _vm.urlParams && _vm.urlParams.type === 'sf', _obj['WA_LOG_XCX'] =  _vm.touchable && _vm.urlParams && _vm.urlParams.type === 'xcx', _obj['WA_LOG_LIGHT'] =  _vm.touchable && _vm.urlParams && _vm.urlParams.type === 'easybrowse', _obj['c-border'] =  _vm.tplInfo.style === 'sigma' && _vm.$platform === 'pc', _obj ),attrs:{"data-module":_vm.dataModule,"data-aftclk":(_vm.touchable && (_vm.url || (_vm.urlParams && _vm.urlParams.tcUrl))) ? '' : false,"rl-node":_vm.touchable ? '' : null,"rl-highlight-self":_vm.touchable ? '' : null,"rl-link-href":_vm.touchable ? ((_vm.urlParams && _vm.urlParams.tcUrl) ? _vm.urlParams.tcUrl : _vm.url) : null,"rl-link-data-sf-href":(_vm.touchable && _vm.urlParams && _vm.urlParams.sfUrl) ? _vm.urlParams.sfUrl : null,"rl-link-data-sf-options":(_vm.touchable && _vm.urlParams && _vm.urlParams.options) ? _vm.urlParams.options : null,"rl-link-data-url":(_vm.touchable && _vm.urlParams && _vm.urlParams.originUrl) ? _vm.urlParams.originUrl : null,"rl-link-data-log":(_vm.touchable && _vm.urlParams && _vm.urlParams.log) ? _vm.urlParams.log : null,"rl-link-data-click":(_vm.touchable && _vm.urlParams && _vm.urlParams.clickData) ? _vm.urlParams.clickData : null,"rl-link-data-tc-redirect":(_vm.touchable && _vm.urlParams && _vm.urlParams.tcRedirect) ? _vm.urlParams.tcRedirect : null,"rl-link-data-xcx":_vm._f("json")((_vm.touchable && _vm.urlParams && _vm.urlParams.type === 'xcx') ? _vm.urlParams.options : false),"rl-link-data-ivk":_vm._f("json")((_vm.touchable && _vm.urlParams && _vm.urlParams.ivkParams) ? _vm.urlParams.ivkParams : false),"rl-link-data-light":_vm._f("json")((_vm.touchable && _vm.urlParams && _vm.urlParams.type === 'easybrowse')
    ? _vm.urlParams.options : false),"rl-link-rt-disable":(_vm.touchable && _vm.urlParams && _vm.urlParams.rtDisable) ? '' : null,"rl-link-origin-url":(_vm.touchable && _vm.urlParams && _vm.urlParams.fastUrl) ? _vm.urlParams.fastUrl : null}},[_vm._t("beforeTitle"),_vm._v(" "),(!_vm.hideHeader && (_vm.tplInfo.style !== 'sigma' || _vm.tplInfo.is_group))?(_c('header',{class:_vm.oldUi ? '' : 'c-gap-bottom-small'},[_vm._t("title",[_c('c-touchable-feedback',{attrs:{"open":!_vm.touchable && (_vm.titleFeedback || (_vm.url ? true : false)),"is-jump":!!(_vm.url || (_vm.urlParams && _vm.urlParams.tcUrl)),"left":-.17,"right":-.17,"top":_vm.hasSlotBeforeTitle ? 0 : -.15}},[(_vm.title)?(_c(_vm.tplInfo.is_group ? 'c-sub-title' : 'c-title',{tag:"component",attrs:{"text":_vm.title,"clamp":_vm.titleClamp,"clamp-strategy":_vm.titleClampStrategy,"icon":_vm.titleIcon,"arrow":_vm.titleArrow,"url":_vm.url,"url-params":_vm.urlParams,"label":_vm.titleLabel,"label-type":_vm.titleLabelType,"size":_vm.titleSize,"font-weight":_vm.titleFontWeight,"aria-roledescription":(_vm.tplInfo && _vm.tplInfo.order) ? ("搜索结果第" + (_vm.tplInfo.order) + "条.标题") : null,"color":_vm.titleColor,"data-module":_vm.titleDataModule,"visited":_vm.titleVisited,"role":"button"},on:{"click":_vm.onTitleClick}})):(_vm._e())],1)])],2)):(_vm._e()),_vm._v(" "),_c('section',[_vm._t("default")],2),_vm._v(" "),(!_vm.hideFooter && _vm.tplInfo.style !== 'sigma' && !_vm.tplInfo.is_group)?(_c('footer',{class:_vm.oldUi ? '' : 'c-gap-top-small',attrs:{"role":"text"}},[_vm._t("footer",[(_vm.showUrl || _vm.showLeftText || _vm.showRightUrl)?(_c('c-footer',{attrs:{"divider":_vm.footerDivider,"show-url":_vm.showUrl,"left-text":_vm.showLeftText,"left-icon":_vm.showLeftIcon,"right-text":_vm.showRightText,"right-url":_vm.showRightUrl,"right-url-params":_vm.showRightUrlParams,"feedback":_vm.feedback,"evaluate":_vm.evaluate,"right-touchable":_vm.footerRightTouchable,"footer-more-data-module":_vm.footerMoreDataModule},on:{"feedback-click":_vm.feedbackClick,"feedbackclick":_vm.handleFeedbackClick,"click":_vm.onFooterClick,"leftclick":_vm.onLeftFooterClick}})):(_vm._e())])],2)):(_vm._e())],2)},
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
  computed: {
    hasSlotBeforeTitle: function hasSlotBeforeTitle() {
      return this.$slots.beforeTitle !== undefined;
    }
  },
  methods: {
    onTitleClick: function onTitleClick(e) {
      /**
       * 标题点击事件
       *
       * @event title-click
       * @property {Event} param1 透传标题的事件对象
       */
      this.$emit('title-click', e);
    },
    onFooterClick: function onFooterClick(e) {
      /**
       * 脚注点击事件
       *
       * @event footer-click
       * @property {Event} param1 透传脚注的事件对象
       */
      this.$emit('footer-click', e);
    },
    onLeftFooterClick: function onLeftFooterClick(e) {
      /**
       * 脚注左侧点击事件
       *
       * @event leftfooterclick
       * @property {Event} param1 透传脚注的事件对象
       */
      this.$emit('leftfooterclick', e);
    },
    feedbackClick: function feedbackClick(e) {
      this.$emit('feedback-click', e);
    },
    handleFeedbackClick: function handleFeedbackClick(obj) {
      /**
       * 反馈按钮点击事件
       *
       * @event feedbackclick
       * @property {object} param1 事件对象
       * @property {Event} param1.event 透传的事件对象
       * @property {object} param1.feedback 反馈数据
       */
      this.$emit('feedbackclick', obj);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"aladdin":"aladdin__3qKHL","feedback":"feedback__2hgHf"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"url": String,"urlParams": Object,"title": String,"titleClamp": [String,Number],"titleClampStrategy": {"type": String},"titleIcon": String,"titleArrow": Boolean,"titleLabel": String,"titleLabelType": String,"titleSize": String,"titleFontWeight": {"type": String},"titleFeedback": {"type": Boolean,"default": false},"titleColor": String,"titleVisited": Boolean,"showUrl": String,"showLeftText": String,"showLeftIcon": String,"showRightText": String,"showRightUrl": String,"showRightUrlParams": Object,"footerDivider": {"type": Boolean,"default": false},"hideHeader": {"type": Boolean,"default": false},"hideFooter": {"type": Boolean,"default": false},"oldUi": {"type": Boolean,"default": false},"feedback": [Boolean,Object],"evaluate": Object,"tplInfo": {"type": Object,"default": function () { return {"style": "normal"}; }},"touchable": {"type": Boolean,"default": false},"footerRightTouchable": {"type": Boolean,"default": false},"footerMoreDataModule": {"type": String,"default": ""},"dataModule": String,"titleDataModule": String};
            obj.components = {"c-title": require("../Title/Title"),"c-sub-title": require("../Title/SubTitle"),"c-link": require("../Link/Link"),"c-footer": require("../Footer/Footer"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
    