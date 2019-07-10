
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-image-viewer-info__2H98Q"},[_c('div',{ref:"content",staticClass:"c-image-viewer-info-content__7Qzgx text__2H5JI"},[_c('p',{staticClass:"c-image-viewer-info-clamp__1BIW6",style:({'-webkit-line-clamp': _vm.clampNum}),on:{"click":function($event){_vm.onTextClick($event)}}},[_c('span',{staticClass:"c-image-viewer-info-index__jNEBg"},[_vm._v(_vm._s(_vm.obj.index + 1))]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"a-show",value:(_vm.count > 0),expression:"count > 0"}],staticClass:"c-image-viewer-info-total__eiEbE"},[_vm._v("/"+_vm._s(_vm.count))]),_vm._v("\n            "+_vm._s(_vm.obj.desc)+"\n        ")])]),_vm._v(" "),_c('div',{ref:"hidden",staticClass:"c-image-viewer-info-hidden__2kiH5 text__2H5JI"},[_c('p',{staticClass:"c-image-viewer-info-clamp__1BIW6",style:({'-webkit-line-clamp': _vm.clampNumHidden})},[_c('span',{staticClass:"c-image-viewer-info-index__jNEBg"},[_vm._v(_vm._s(_vm.obj.index + 1))]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"a-show",value:(_vm.count > 0),expression:"count > 0"}],staticClass:"c-image-viewer-info-total__eiEbE"},[_vm._v("/"+_vm._s(_vm.count))]),_vm._v("\n            "+_vm._s(_vm.obj.desc)+"\n        ")])])])},
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

var _animateConfig = _interopRequireDefault(require("./asset/js/animate-config.js"));

var _animate = require("./asset/js/animate.js");

var _util = _interopRequireDefault(require("./asset/js/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  watch: {
    obj: function obj() {
      var _this = this;

      // 恢复默认6行，有动画
      if (this.clampNum !== this.defaultLineNum && this.isVisible) {
        var height = this.$refs.content.getBoundingClientRect().height;
        var clonedEl = this.$refs.content.cloneNode(true); // 固定高度

        _util["default"].setCss(this.$el, {
          height: height + 'px'
        }); // 前插拷贝元素


        this.$el.insertBefore(clonedEl, this.$refs.content); // 更新行数

        this.clampNum = this.defaultLineNum;
        this.clampNumHidden = this.maxLineNum;
        this.$nextTick(function () {
          // 数据更新后的高度
          var newHeight = _this.$refs.content.getBoundingClientRect().height;

          (0, _animate.cssAnimate)(_this.$el, {
            height: newHeight + 'px'
          }, {
            duration: _animateConfig["default"].duration.infoCollapse,
            ease: _animateConfig["default"].transition['ease-in-out']
          }).then(function () {
            // 移除拷贝元素
            _this.$el.removeChild(clonedEl); // 恢复样式


            _util["default"].setCss(_this.$el, {
              height: ''
            });
          });
        });
      } // 恢复默认6行，没有动画
      else if (this.clampNum !== this.defaultLineNum) {
          // 更新行数
          this.clampNum = this.defaultLineNum;
          this.clampNumHidden = this.maxLineNum;
        }
    },
    defaultLineNum: function defaultLineNum(newVal, oldVal) {
      // 未展开状态
      if (this.clampNum === oldVal) {
        this.clampNum = this.defaultLineNum;
        this.clampNumHidden = this.maxLineNum;
      } // 展开状态
      else {
          this.clampNum = this.maxLineNum;
          this.clampNumHidden = this.defaultLineNum;
        }
    }
  },
  mounted: function mounted() {
    // iphone5展开12行，默认13行
    var isIphone5 = /iPhone/.test(navigator.userAgent) && Math.min(window.innerHeight, window.innerWidth) <= 320;
    this.maxLineNum = isIphone5 ? 12 : 13;
    this.clampNumHidden = this.maxLineNum;
  },
  methods: {
    onTextClick: function onTextClick(event) {
      var _this2 = this;

      var height = this.$refs.content.getBoundingClientRect().height;
      var newHeight = this.$refs.hidden.getBoundingClientRect().height; // 优化性能，高度不变时不需要动画

      if (Math.abs(height - newHeight) < 10) {
        return;
      } // 固定高度


      _util["default"].setCss(this.$el, {
        height: height + 'px'
      }); // 高度增加


      if (this.clampNum === this.defaultLineNum) {
        // 互换
        this.clampNum = this.maxLineNum;
        this.clampNumHidden = this.defaultLineNum;
        this.$nextTick(function () {
          (0, _animate.cssAnimate)(_this2.$el, {
            height: newHeight + 'px'
          }, {
            duration: _animateConfig["default"].duration.infoExpand,
            ease: _animateConfig["default"].transition['ease-in-out']
          }).then(function () {
            // 恢复样式
            _util["default"].setCss(_this2.$el, {
              height: ''
            });
          });
        });
      } // 高度减小
      else {
          (0, _animate.cssAnimate)(this.$el, {
            height: newHeight + 'px'
          }, {
            duration: _animateConfig["default"].duration.infoCollapse,
            ease: _animateConfig["default"].transition['ease-in-out']
          }).then(function () {
            // 互换
            _this2.clampNum = _this2.defaultLineNum;
            _this2.clampNumHidden = _this2.maxLineNum;

            _this2.$nextTick(function () {
              // 恢复样式
              _util["default"].setCss(_this2.$el, {
                height: ''
              });
            });
          });
        }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cImageViewerInfo":"c-image-viewer-info__2H98Q","text":"text__2H5JI","cImageViewerInfoContent":"c-image-viewer-info-content__7Qzgx","cImageViewerInfoHidden":"c-image-viewer-info-hidden__2kiH5","cImageViewerInfoClamp":"c-image-viewer-info-clamp__1BIW6","cImageViewerInfoIndex":"c-image-viewer-info-index__jNEBg","cImageViewerInfoTotal":"c-image-viewer-info-total__eiEbE"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"obj": {"type": Object,"required": true},"count": {"type": Number,"default": 0},"isVisible": {"type": Boolean,"default": true},"innerWidth": {"type": Number,"default": 0},"innerHeight": {"type": Number,"default": 0}};
            obj.components = {};

            
            

            
    var computed = obj.computed || {};
    computed["defaultLineNum"] = function () { return (((this["innerWidth"]>this["innerHeight"]))?(3):(6)); };
computed["maxLineNum"] = function () { return (((this["innerWidth"]>this["innerHeight"]))?(7):(13)); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"clampNum": (((this["innerWidth"]>this["innerHeight"]))?(3):(6)),"clampNumHidden": (((this["innerWidth"]>this["innerHeight"]))?(7):(13))};
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
    