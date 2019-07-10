
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kg-header-wrapper",attrs:{"data-module":"c-kh"}},[(!_vm.isWeaken && ((_vm.feedback && _vm.feedback.suggest && _vm.feedback.suggest.is_show == 1) || _vm.evaluate || _vm.shareParams))?(_c('c-tooltip-func-btn',{staticClass:"func-btn c-gap-left",attrs:{"feedback":_vm.feedback,"evaluate":_vm.evaluate,"share-params":_vm.shareParams,"triangle-color":_vm.backgroundColor,"circle-color":"rgba(245,245,245,.5)","size":"large"},on:{"feedbackclick":_vm.handleFeedbackClick}})):(_vm._e()),_vm._v(" "),(_vm.headerImg || _vm.title || _vm.abstract || _vm.showHead)?(_c('div',{staticClass:"c-kg-header c-row-tile c-kg-header-vertical-center",class:_vm.$platform == 'pc' ? 'c-kg-header-pc' : '',style:([
            {
                'color': _vm.fontColor,
                'background-color': _vm.backgroundColor,
                'background-image': _vm.backgroundImage,
                'background-size': _vm.bgSize,
                'min-height': _vm.headerHeight
            },
            _vm.background
                ? {
                    background: _vm.background
                }
                : {}
        ]),attrs:{"data-module":_vm.titleDataModule}},[_c('div',{style:({
                background: _vm.isWeaken
                    ? ''
                    : _vm.bg2
            })},[_c('c-link',{style:({
                    'min-height': _vm.headerHeight
                }),attrs:{"url":_vm.url,"params":_vm.params,"voice-tag":_vm.title,"voice-action":"click"}},[_c('c-touchable-feedback',{staticClass:"c-kg-header-vertical-center",style:({
                        'color': _vm.fontColor,
                        'min-height': _vm.headerHeight
                    }),attrs:{"open":!_vm.isWeaken && !!(_vm.url || (_vm.params && _vm.params.tcUrl)),"is-jump":!!(_vm.url || (_vm.params && _vm.params.tcUrl)),"background-color":_vm.feedbackColor.header,"bottom":_vm.isWeaken
                        ? -0.05
                        : 0}},[_c('c-row',{class:{
                            'c-gap-bottom-small': _vm.isWeaken
                        }},[(_vm.headerImg)?(_c('c-span',{staticClass:"headimg",class:{
                                'v-center': _vm.headerImgAlign === 'v-center'
                            },attrs:{"col":_vm.$platform === 'pc' ? 4 : 2,"aria-hidden":"true"}},[_c('c-img',{attrs:{"src":_vm.headerImg,"type":_vm.headerImgType,"is-show-default-image":false,"background-color":"inherit"}})],1)):(_vm._e()),_vm._v(" "),_c('c-span',{staticClass:"c-kg-header-vertical-center",class:_vm.$platform === 'pc' ? 'c-kg-header-vertical-center-pc' : '',attrs:{"col":_vm.headerImg
                                ? _vm.$platform === 'pc' ? 19 : 9
                                : _vm.bgImg && _vm.halfBg
                                    ? _vm.$platform === 'pc' ? 12 : 6
                                    : _vm.$platform === 'pc' ? 23 : _vm.titleColumnNumber}},[_c('c-line',{staticClass:"c-kg-header-title",class:[
                                    {
                                        'c-font-sigma': !_vm.isWeaken,
                                        'c-font-medium': _vm.isWeaken,
                                        'c-gap-top-small': _vm.isWeaken && !_vm.headerImg
                                    },
                                    !_vm.isWeaken && _vm.titleColumnNumber === 7 && _vm.titleLength > 6 && _vm.titleLength <= 8
                                        ? 'title-font-6-8'
                                        : '',
                                    !_vm.isWeaken && _vm.titleColumnNumber === 7 && _vm.titleLength > 8 && _vm.titleLength <= 9
                                        ? 'title-font-8-9'
                                        : '',
                                    !_vm.isWeaken && _vm.titleColumnNumber === 7 && _vm.titleLength > 9
                                        ? 'title-font-9'
                                        : ''
                                ],style:({
                                    color: _vm.fontColor
                                }),attrs:{"clamp":_vm.bgImg && _vm.halfBg ? 2 : 1}},[_vm._t("title",[_vm._v("\n                                    "+_vm._s(_vm.title)+"\n                                ")])],2),_vm._v(" "),_c('c-line',{staticClass:"c-kg-header-abstract c-font-normal",class:{
                                    'c-kg-header-abstract-weak': _vm.isWeaken
                                },style:({
                                    color: _vm.fontColor
                                }),attrs:{"clamp":"1"}},[_vm._t("abstract",[_vm._v("\n                                    "+_vm._s(_vm.abstract)+"\n                                ")])],2)],1),_vm._v(" "),(_vm.bgImg && _vm.halfBg)?(_c('c-span',{attrs:{"col":"5"}})):((_vm.titleColumnNumber < _vm.totalCols - _vm.rightColumnNumber)?(_c('c-span',{attrs:{"col":_vm.totalCols - _vm.titleColumnNumber - _vm.rightColumnNumber}})):(_vm._e())),_vm._v(" "),(_vm.rightColumnNumber && _vm.$platform !== 'pc')?(_c('c-span',{staticClass:"c-kg-header-share",attrs:{"col":_vm.rightColumnNumber}},[(!_vm.isWeaken)?(_vm._t("share")):(_vm._e())],2)):(_vm._e())],1),_vm._v(" "),_vm._t("extInfo")],2)],1),_vm._v(" "),(_vm.halfBg)?(_c('div',{staticClass:"c-kg-header-half-bg",style:({
                    'background-image': _vm.bgImg
                        ? 'url(' + _vm.bgImg + ')'
                        : null,
                    'background-size': _vm.bgSize
                }),attrs:{"aria-hidden":"true"}})):(_vm._e())],1)])):(_vm._e()),_vm._v(" "),(_vm.tabList && _vm.tabList.length && !_vm.isWeaken)?(_c('c-navs',{attrs:{"label-list":_vm.tabList,"background-color":_vm.navBackgroundColor,"selected-color":_vm.navFontColor,"item-style":{
            color: _vm.navFontColor,
            opacity: '0.5'
        },"selected-index":_vm.selectedIndex,"feedback-color":_vm.feedbackColor.tabs,"disable-event":_vm.disableEvent,"bottom-line":false,"allow-scroll":_vm.tabScroll,"is-expand":false},on:{"clickItem":_vm.onClick}})):(_vm._e()),_vm._v(" "),(_vm.tabList && _vm.tabList.length && _vm.isWeaken)?(_c('c-tabs',{attrs:{"selected":_vm.selectedIndex,"disable-event":_vm.disableEvent,"gap-top":!!(_vm.headerImg || _vm.title || _vm.abstract || _vm.showHead),"gap-bottom":false,"allow-scroll":_vm.tabScroll,"no-content":""},on:{"clickHeaderItem":_vm.onClick}},_vm._l((_vm.tabList),function(tab,index){return _c('c-tabs-item',{key:index,attrs:{"label":tab.txt,"params":{
                url: tab.url,
                linkOption: tab.params
            },"tab-data-module":tab.dataModule ? tab.dataModule : ''}})}))):(_vm._e())],1)},
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
  render: function render() {
    var vNodeTitle = this.$slots.title;
    var vNodeAbstract = this.$slots["abstract"];
    var vNodeExtInfo = this.$slots.extInfo;

    if (vNodeTitle && vNodeTitle.length || vNodeAbstract && vNodeAbstract.length || vNodeExtInfo && vNodeExtInfo.length) {
      this.showHead = true;
    }

    return this.$super.render();
  },
  watch: {
    bgColor: function bgColor(newBgColor) {
      this.backgroundColor = this.isWeaken ? '#fff' : newBgColor;
      this.navBackgroundColor = this.isWeaken ? '#f8f8f8' : this.tabBgColor ? this.tabBgColor : newBgColor;
    }
  },
  methods: {
    onClick: function onClick(value) {
      /**
       * tab点击时触发
       *
       * @event navclick
       * @property {object} param1 事件对象
       * @property {number} param1.index 点击项的索引
       */
      !this.disableEvent && this.$emit('navclick', value);
    },
    // 新反馈入口点击
    handleFeedbackClick: function handleFeedbackClick(obj) {
      this.$emit('feedbackclick', obj);
    }
  },
  computed: {
    titleLength: function titleLength() {
      return this.title ? this.title.length : 0;
    },
    headerHeight: function headerHeight() {
      return this.isWeaken ? 'auto' : this.$platform === 'pc' && (this.bgImg || this.bg2) ? this.disperse ? '213px' : '114px' : this.disperse ? '1.64rem' : '.88rem';
    },
    totalCols: function totalCols() {
      // pc 上的 kgheader 头部内总栅格数为23，而非正常的24。因为 pc kgheader 的边距为20px，而不是9px
      return this.$platform === 'pc' ? 23 : 12;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"title": {"type": String},"titleColumnNumber": {"type": Number,"default": 11},"rightColumnNumber": {"type": Number,"default": 1},"url": {"type": String,"default": ""},"params": {"type": Object},"abstract": {"type": String},"headerImg": {"type": String},"headerImgType": {"type": String,"default": "s"},"headerImgAlign": {"type": String},"background": {"type": String},"bgColor": {"type": String,"default": "#7d7d7d"},"bgImg": {"type": String},"bgSize": {"type": String},"bg2": {"type": String,"default": ""},"halfBg": {"type": Boolean,"default": false},"color": {"type": String,"default": "#fff"},"tabList": {"type": Array},"tabColor": {"type": String},"tabBgColor": {"type": String},"selectedIndex": {"type": Number,"default": 0},"isWeaken": {"type": Boolean,"default": false},"disableEvent": {"type": Boolean,"default": false},"disperse": {"type": Boolean,"default": false},"feedbackColor": {"type": Object,"default": function () { return {"header": "rgba(225,225,225,0.08)","tabs": "rgba(225,225,225,0.08)"}; }},"tabScroll": {"type": Boolean,"default": false},"feedback": Object,"evaluate": Object,"shareParams": Object,"titleDataModule": {"type": String,"default": ""}};
            obj.components = {"c-img": require("../Image/Image"),"c-span": require("../Row/Span"),"c-row": require("../Row/Row"),"c-link": require("../Link/Link"),"c-line": require("../Line/Line"),"c-icon": require("../Icon/Icon"),"c-tabs": require("../Tabs/Tabs"),"c-tabs-item": require("../Tabs/TabsItem"),"c-navs": require("../Navs/Navs"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback"),"c-tooltip-func-btn": require("../TooltipFuncBtn/TooltipFuncBtn")};

            
            

            


            
            obj.data = function () {
                return {"showHead": false,"fontColor": ((this["isWeaken"])?("#000"):(this["color"])),"backgroundColor": ((this["isWeaken"])?("#fff"):(this["bgColor"])),"backgroundImage": (((this["isWeaken"]||this["halfBg"]))?("none"):(((this["bgImg"])?((("url("+this["bgImg"])+")")):("none")))),"navFontColor": ((this["isWeaken"])?("#000"):(((this["tabColor"])?(this["tabColor"]):(this["color"])))),"navBackgroundColor": ((this["isWeaken"])?("#f8f8f8"):(((this["tabBgColor"])?(this["tabBgColor"]):(this["bgColor"])))),"screenWidth": 0};
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
            
            obj._scopeId = "data-a-389e8738";

            module.exports = obj;

            
        });
    