
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-row',[_c('c-span',{attrs:{"col":_vm.imgCol,"data-module":_vm.imgDataModule}},[_c('c-link',{attrs:{"url":_vm.imgUrl,"params":_vm.imgUrlParams}},[_c('c-touchable-feedback',{attrs:{"open":_vm.imgTouchable && (_vm.imgUrl ? true : false),"background-color":"rgba(0, 0, 0, .08)"}},[_c('c-img',{attrs:{"src":_vm.imgSrc,"hack-white-stroke":_vm.imgHackWhiteStroke,"lazy":_vm.imgLazy,"type":_vm.imgType,"maskgap-size":_vm.imgMaskgapSize,"show-num":_vm.imgShowNum,"icon-type":_vm.imgIconType,"is-round":_vm.imgIsRound,"default-image-type":_vm.defaultImageType,"grid-size":_vm.imgCol,"progressive":_vm.progressive,"is-background-image":_vm.isBackgroundImage,"background-size":_vm.backgroundSize,"aria-hidden":"true"},on:{"load":_vm.handleLoad,"error":_vm.handleError},nativeOn:{"click":function($event){_vm.handleImgClick($event)}}},[_vm._t("img")],2)],1)],1)],1),_vm._v(" "),_c('c-span',{class:{'c-span-middle': _vm.isVerticalMiddle},attrs:{"col":(_vm.$platform === 'pc' ? 24 : 12) - _vm.imgCol}},[_vm._t("default")],2)],1)},
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
    handleImgClick: function handleImgClick() {
      /**
       * 左侧图片点击事件
       *
       * @event imgclick
       */
      this.$emit('imgclick');
    },
    handleLoad: function handleLoad(e) {
      /**
       * 图片加载完成事件，当使用背景图片的时候不支持
       *
       * @event load
       * @property {Event} param1 透传事件对象
       */
      this.$emit('load', e);
    },
    handleError: function handleError(e) {
      /**
       * 图片加载错误事件，当使用背景图片的时候不支持
       *
       * @event error
       * @property {Event} param1 透传事件对象
       */
      this.$emit('error', e);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"imgSrc": {"type": String},"imgType": {"type": String,"default": "s"},"imgUrl": String,"imgUrlParams": Object,"imgHackWhiteStroke": {"type": Boolean,"default": false},"imgLazy": {"type": Boolean,"default": false},"imgMaskgapSize": {"type": [Number,String],"default": ""},"imgShowNum": {"type": [Number,String],"default": ""},"imgIconType": {"type": String,"default": ""},"imgIsRound": {"type": Boolean,"default": false},"imgCol": {"type": Number,"default": 4},"imgTouchable": {"type": Boolean,"default": true},"defaultImageType": String,"isBackgroundImage": {"type": Boolean,"default": false},"backgroundSize": {"type": String,"default": "cover"},"progressive": {"type": Boolean,"default": false},"isVerticalMiddle": {"type": Boolean,"default": false},"imgDataModule": {"type": String,"default": ""}};
            obj.components = {"c-img": require("../Image/Image"),"c-span": require("../Row/Span"),"c-row": require("../Row/Row"),"c-link": require("../Link/Link"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            


            
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
            
            

            module.exports = obj;

            
        });
    