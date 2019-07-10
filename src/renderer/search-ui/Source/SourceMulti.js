
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"source-multi__ziOQl",class:{
        'c-gap-inner-bottom-small': _vm.mList.length > 1
    },style:({
        marginTop: _vm.mList.length === 1 ? '-.05rem' : ''
    }),attrs:{"data-click":"{'clk_info':{}}"}},[_c('div',{staticClass:"left__HAEpb"},[(_vm.mList.length === 1)?(_c('div',{staticClass:"single__3EExU"},[_c('div',{staticClass:"icon__3elp1 c-gap-right-middle",style:({
                    backgroundImage: 'url(' + _vm.mList[0].icon + ')'
                })}),_vm._v(" "),_c('div',{staticClass:"c-color-gray c-gap-right"},[_vm._v("\n                "+_vm._s(_vm.mList[0].text)+"\n            ")])])):(_c('c-touchable-feedback',{staticClass:"WA_LOG_BTN",attrs:{"right":.1,"border-radius":"14px"}},[_c('div',{staticClass:"multi__3yX4F c-gap-inner-left c-gap-inner-right c-gap-right",on:{"click":_vm.handleMultiClick}},[_c('div',{staticClass:"icon-layout__oV_LA c-gap-right-small",style:({
                        width: 7 * _vm.listReverse.length + 8 + 'px'
                    })},_vm._l((_vm.listReverse),function(item,itemIndex){return _c('div',{key:'icon' + itemIndex,staticClass:"icon__3elp1",class:itemIndex !== _vm.listReverse.length - 1
                                ? _vm.$style.iconSmall
                                : '',style:({
                            backgroundImage: 'url(' + item.icon + ')',
                            left: 7 * (_vm.listReverse.length - 1 - itemIndex) + 'px'
                        })},[(itemIndex !== _vm.listReverse.length - 1)?(_c('div',{staticClass:"icon-inner__vU_e-"})):(_vm._e())])})),_vm._v(" "),_c('div',[_vm._v("\n                    "+_vm._s(_vm.mList[0].text)+"\n                ")])])])),_vm._v(" "),_c('div',{staticClass:"c-color-gray"},[_vm._v("\n            智能小程序\n        ")]),_vm._v(" "),((_vm.feedback && _vm.feedback.suggest && _vm.feedback.suggest.is_show == 1) || _vm.evaluate)?(_c('c-tooltip-func-btn',{staticClass:"c-gap-left",attrs:{"feedback":_vm.feedback,"evaluate":_vm.evaluate}})):(_vm._e())],1),_vm._v(" "),(_vm.more)?(_c('div',{staticClass:"more c-color-gray"},[_c('i',{staticClass:"c-icon"},[_vm._v("")])])):(_vm._e()),_vm._v(" "),(_vm.list.length > 1)?(_c('c-touchable-stop',[_c('c-popup',{attrs:{"is-open":_vm.showPopup,"title":"选择智能小程序"},on:{"close":_vm.handlePopupClose}},_vm._l((_vm.list),function(item,index){return _c('div',{key:'popup-inner' + index},[_c('c-touchable-feedback',{staticClass:"WA_LOG_BTN",attrs:{"left":-.17,"right":-.17},nativeOn:{"click":function($event){_vm.handleItemClick({
                        item: item,
                        index: index
                    })}}},[_c('div',{staticClass:"popup-inner-item__18giL c-gap-inner-top-large c-gap-inner-bottom-large"},[_c('div',{staticClass:"popup-inner-item-left__2I0Yg"},[_c('div',{staticClass:"popup-inner-item-icon__1c8_y c-gap-right-middle",style:({
                                    backgroundImage: 'url(' + item.icon + ')'
                                })}),_vm._v(" "),_c('div',{staticClass:"text c-font-medium c-line-clamp1"},[_vm._v("\n                                "+_vm._s(item.text)+"\n                            ")])]),_vm._v(" "),(_vm.selectedIndex === index)?(_c('div',{staticClass:"right"},[_c('i',{staticClass:"c-icon"},[_vm._v("\n                                \n                            ")])])):(_vm._e())])]),_vm._v(" "),_c('div',{staticClass:"c-row-tile",class:{
                        'c-line-bottom': index !== _vm.list.length - 1
                    }})],1)}))],1)):(_vm._e())],1)},
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
 * @file 来源 小程序们
 * @author wangkai37 <wangkai37@baidu.com>
 */
var _default = {
  mounted: function mounted() {
    // 需要浅复制，不能改变原数组
    this.mList = this.list.slice(0);
  },
  methods: {
    handleMultiClick: function handleMultiClick() {
      this.showPopup = true;
    },
    handlePopupClose: function handlePopupClose() {
      this.showPopup = false;
    },
    handleItemClick: function handleItemClick(obj) {
      /**
       * 项点击事件
       *
       * @event itemclick
       * @property {Object} param1.item 点击项对象
       * @property {number} param1.index 点击项索引
       */
      this.$emit('itemclick', obj);
      /**
       * 改变事件
       *
       * @event change
       * @property {Object} param1.item 点击项对象
       * @property {number} param1.index 点击项索引
       */

      this.$emit('change', obj); // 浅复制原数组，要避免改变 props 的顺序

      var tList1 = this.list.slice(0); // 在原数组的基础上，改变数组顺序

      var tList2 = tList1.splice(obj.index, 1);
      this.mList = tList2.concat(tList1);
      this.showPopup = false;
    }
  },
  computed: {
    // 逆序排列，为了实现 UE 效果
    listReverse: function listReverse() {
      // 策略，最多显示3个来源图标
      var listCopy = this.mList.slice(0, 3);
      listCopy.reverse();
      return listCopy;
    }
  },
  watch: {
    list: function list(newVal) {
      this.mList = newVal.slice(0);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"sourceMulti":"source-multi__ziOQl","left":"left__HAEpb","icon":"icon__3elp1","single":"single__3EExU","multi":"multi__3yX4F","iconLayout":"icon-layout__oV_LA","iconSmall":"icon-small__5bZgO","iconInner":"icon-inner__vU_e-","popupInnerItem":"popup-inner-item__18giL","popupInnerItemLeft":"popup-inner-item-left__2I0Yg","popupInnerItemIcon":"popup-inner-item-icon__1c8_y"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"list": {"type": Array},"selectedIndex": {"type": Number,"default": 0},"more": {"type": Boolean,"default": false},"feedback": Object,"evaluate": {"type": Object}};
            obj.components = {"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback"),"c-touchable-stop": require("../TouchableFeedback/TouchableStop"),"c-tooltip-func-btn": require("../TooltipFuncBtn/TooltipFuncBtn"),"c-popup": require("../Popup/Popup")};

            
            

            


            
            obj.data = function () {
                return {"showPopup": false,"mList": this["list"]};
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
    