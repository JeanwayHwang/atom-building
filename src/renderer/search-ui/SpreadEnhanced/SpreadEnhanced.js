
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-spread-wrapper"},[(_vm.isShow
            && _vm.noFoldButtonShow
            && (
            _vm.type === 'list' && _vm.len > _vm.threshold
            || _vm.type === 'height' && _vm.typeHeightButtonShow
            || _vm.type === 'paragraph'
        ) && !_vm.bottom)?(_c('div',{class:[
            'c-spread-button',
            'c-color',
            'WA_LOG_OTHER',
            _vm.hasBorder ? 'c-line-bottom' : '',
            _vm.gapTopClass,
            _vm.gapBottomClass
        ],on:{"click":_vm.change}},[_c('c-touchable-feedback',{attrs:{"top":-_vm.btnFeedbackTop,"bottom":-_vm.btnFeedbackBottom,"left":-.17,"right":-.17}},[_c('div',{staticClass:"c-flexbox"},[(_vm.hasButtonSlot)?(_c('div',{staticClass:"c-spread-button-slot"},[_vm._t("button")],2)):(_c('div',{staticClass:"c-spread-button-content"},[(_vm.spreadText || _vm.foldText)?(_c('span',{staticClass:"c-font-normal c-spread-tips"},[_vm._v("\n                        "+_vm._s(_vm.hasSpread ? _vm.foldText : _vm.spreadText)+"\n                    ")])):(_vm._e()),_vm._v(" "),(_vm.spreadRightText || _vm.foldRightText)?(_c('span',{staticClass:"c-spread-tips-right"},[_vm._v("\n                        "+_vm._s(_vm.hasSpread ? _vm.foldRightText : _vm.spreadRightText)+"\n                    ")])):(_vm._e())])),_vm._v(" "),(_vm.hasIcon)?(_c('svg',{staticClass:"c-gap-left-small",attrs:{"xmlns":"http://www.w3.org/2000/svg","version":"1.1","width":"14","height":"24"}},[_c('path',{attrs:{"d":_vm.iconStatus ? 'M0 15 L6 9 L12 15' : 'M0 9 L6 15 L12 9',"fill":"#fff","stroke":"currentColor","stroke-width":"1"}},[_c('animate',{ref:"svgAnimateSpread",attrs:{"attributeName":"d","from":"M0 9 L6 15 L12 9","to":"M0 15 L6 9 L12 15","dur":".3s","begin":"indefinite","calcMode":"spline","keySplines":"0.18, 0, 0.26, 1"}}),_vm._v(" "),_c('animate',{ref:"svgAnimateFold",attrs:{"attributeName":"d","from":"M0 15 L6 9 L12 15","to":"M0 9 L6 15 L12 9","dur":".3s","begin":"indefinite","calcMode":"spline","keySplines":"0.18, 0, 0.26, 1"}})])])):(_vm._e())])])],1)):(_vm._e()),_vm._v(" "),_c('div',{staticClass:"c-spread-animate"},[(!_vm.bottom && _vm.type == 'list')?(_c('div',{class:[
                _vm.isAnimate ? 'c-spread-animate-height' : ''
            ],style:({
                height: (_vm.animateHeight + 'px')
            })})):(_vm._e()),_vm._v(" "),_c('div',{ref:"content",class:[
                'c-spread-content',
                _vm.useTransition && _vm.transition
                    ? (!_vm.bottom && _vm.type == 'list')
                        ? 'c-spread-margin-transition'
                        : 'c-spread-transition'
                    : ''
            ],style:({
                height: (_vm.height !== null) ? (_vm.height + 'px') : 'auto',
                top: _vm.marginTop + 'px'
            }),on:{"click":function($event){_vm.noFoldButtonShow
                && !(
                    _vm.isShow && (
                    _vm.type === 'list' && _vm.len > _vm.threshold
                    || _vm.type === 'height' && _vm.typeHeightButtonShow
                    || _vm.type === 'paragraph'
            )) && _vm.change()}}},[_c('div',{ref:"innerContent"},[(_vm.type === 'list')?(_vm._l((_vm.len),function(index){return _c('div',{directives:[{name:"show",rawName:"a-show",value:(index <= _vm.oThreshold),expression:"index <= oThreshold"}],key:index,ref:"list",refInFor:true},[_vm._t('__c__' + (index - 1))],2)})):((_vm.type === 'paragraph')?([_c('div',{ref:"paraContent",class:[_vm.clampClass, 'WA_LOG_OTHER']},[_vm._t("paragraph")],2),_vm._v(" "),_c('div',{ref:"shadow",staticClass:"c-spread-content-shadow",style:({
                            display: _vm.switcher ? 'none' : 'block'
                        })},[_vm._t("paragraph-shadow")],2)]):([_vm._t("default")]))],2)])]),_vm._v(" "),(_vm.isShow
            && _vm.noFoldButtonShow
            && (
            _vm.type === 'list' && _vm.len > _vm.threshold
            || _vm.type === 'height' && _vm.typeHeightButtonShow
            || _vm.type === 'paragraph'
        ) && _vm.bottom)?(_c('div',{class:[
            'c-spread-button-bottom',
            'c-color',
            'WA_LOG_OTHER',
            _vm.hasBorder ? 'c-line-top' : '',
            _vm.gapTopClass,
            _vm.gapBottomClass,
            _vm.oFoldMask ? 'c-spread-button-mask' : ''
        ],attrs:{"aria-expanded":_vm.hasSpread,"aria-label":_vm.hasSpread ? ("已" + _vm.spreadText + ".双击以" + _vm.foldText) : ("已" + _vm.foldText + ".双击以" + _vm.spreadText),"aria-live":"polite"},on:{"click":_vm.change}},[_c('c-touchable-feedback',{attrs:{"top":-_vm.btnFeedbackTop,"bottom":-_vm.btnFeedbackBottom,"left":-.17,"right":-.17}},[(_vm.spreadText || _vm.foldText)?(_c('span',{staticClass:"c-font-normal"},[_vm._v("\n                "+_vm._s(_vm.hasSpread ? _vm.foldText : _vm.spreadText)+"\n            ")])):(_vm._e()),_vm._v(" "),(_vm.hasIcon)?(_c('svg',{staticClass:"c-gap-left-small",attrs:{"xmlns":"http://www.w3.org/2000/svg","version":"1.1","width":"14","height":"24","aria-hidden":"true"}},[_c('path',{attrs:{"d":_vm.iconStatus ? 'M0 15 L6 9 L12 15' : 'M0 9 L6 15 L12 9',"fill":"#fff","stroke":"currentColor","stroke-width":"1"}},[_c('animate',{ref:"svgAnimateSpread",attrs:{"attributeName":"d","from":"M0 9 L6 15 L12 9","to":"M0 15 L6 9 L12 15","dur":".3s","begin":"indefinite","calcMode":"spline","keySplines":"0.18, 0, 0.26, 1"}}),_vm._v(" "),_c('animate',{ref:"svgAnimateFold",attrs:{"attributeName":"d","from":"M0 15 L6 9 L12 15","to":"M0 9 L6 15 L12 9","dur":".3s","begin":"indefinite","calcMode":"spline","keySplines":"0.18, 0, 0.26, 1"}})])])):(_vm._e())])],1)):(_vm._e())])},
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
    var _this = this;

    var type = this.type;
    var vnodes = this.$slots["default"];

    if (vnodes && vnodes.length) {
      if (type === 'list') {
        vnodes.forEach(function (vnode, index) {
          _this.$slots['__c__' + index] = [vnode];
        });

        if (this.status && !this.oThreshold && this.len < 0) {
          this.oThreshold = vnodes.length;
        }

        this.len = vnodes.length;
      } else if (type === 'paragraph') {
        var vnode = vnodes[0];
        this.$slots.paragraph = [vnode];
        this.$slots['paragraph-shadow'] = [vnode];
      } else if (!this.status && !this.height) {
        this.height = this.foldHeight;
      }

      this.getClass();
    }

    if (this.$slots.button && this.$slots.button.length) {
      this.hasButtonSlot = true;
    }

    return this.$super.render();
  },
  methods: {
    getClass: function getClass() {
      switch (this.btnPaddingTop) {
        case 0:
          this.gapTopClass = '';
          this.btnFeedbackTop = 0;
          break;

        case 5:
          this.gapTopClass = 'c-gap-inner-top-small';
          this.btnFeedbackTop = .05;
          break;

        case 10:
          this.gapTopClass = 'c-gap-inner-top';
          this.btnFeedbackTop = .1;
          break;

        case 15:
          this.gapTopClass = 'c-gap-inner-top-large';
          this.btnFeedbackTop = .15;
          break;
      }

      switch (this.btnPaddingBottom) {
        case 0:
          this.gapBottomClass = ''; // 当展开收起按钮下边距为0时，表示展开收起按钮在卡片最下方，这里将点击态覆盖到卡片最下边

          this.btnFeedbackBottom = .15;
          break;

        case 5:
          this.gapBottomClass = 'c-gap-inner-bottom-small';
          this.btnFeedbackBottom = .05;
          break;

        case 10:
          this.gapBottomClass = 'c-gap-inner-bottom';
          this.btnFeedbackBottom = .1;
          break;

        case 15:
          this.gapBottomClass = 'c-gap-inner-bottom-large';
          this.btnFeedbackBottom = .15;
          break;
      }
    },
    change: function change() {
      var _this2 = this;

      this.isAnimate = true;

      if (this.switcher || this.isActive) {
        return;
      }

      var newThreshold = !this.step ? null : this.hasSpread ? this.oThreshold - this.step : this.oThreshold + this.step;
      var newStatus = this.type === 'list' && this.step ? !(newThreshold < this.len) : !this.hasSpread;
      this.oFoldMask = this.foldMask && !newStatus;
      this.curStatus = newStatus;
      this.isActive = true;

      if (this.hasSpread) {
        this.fold();
        this.$emit('change', newStatus);
      } else {
        this.spread(function () {
          _this2.$emit('change', newStatus);
        });
      }
    },
    fold: function fold() {
      var _this3 = this;

      var num = this.step ? this.oThreshold - this.step : this.threshold;

      if (this.bottom || this.type !== 'list') {
        if (this.type === 'list') {
          if (!this.threshold) {
            this.height = 0;
          } else {
            this.height = this.getListHeight(num - 1);
          }
        } else if (this.type === 'height') {
          this.height = this.foldHeight;
        } else {
          this.$refs.paraContent.setAttribute('class', 'c-line-clamp' + num + ' WA_LOG_OTHER');
          var height = this.$refs.innerContent.clientHeight;
          this.height = height;
          this.$refs.paraContent.setAttribute('class', 'WA_LOG_OTHER');
        }
      }

      if (num <= this.threshold && this.$refs.svgAnimateFold) {
        this.$refs.svgAnimateFold.beginElement();
      }

      setTimeout(function () {
        if (num <= _this3.threshold) {
          _this3.hasSpread = false;
          _this3.iconStatus = false;
          _this3.marginTop = -_this3.height;
          _this3.animateHeight = 0;
        }
      }, 0);
      setTimeout(function () {
        _this3.oThreshold = num;
        _this3.isActive = false;
      }, this.delay);
    },
    spread: function spread(callback) {
      var _this4 = this;

      var num = this.step ? this.oThreshold + this.step : this.len;

      if (this.type === 'list' && !this.threshold || this.type === 'height') {
        this.height = this.$refs.content.clientHeight;
      }

      this.oThreshold = num;

      if (this.oThreshold >= this.len) {
        this.hasSpread = true;

        if (this.$refs.svgAnimateSpread) {
          this.$refs.svgAnimateSpread.beginElement();
        }
      }

      this.$nextTick(function () {
        var targetHeight = _this4.$refs.innerContent.clientHeight;
        _this4.height = targetHeight;

        if (_this4.noFold && _this4.hasSpread) {
          _this4.noFoldButtonShow = false;
        }

        setTimeout(function () {
          _this4.isActive = false;
          _this4.iconStatus = _this4.hasSpread;
          _this4.marginTop = 0;
          _this4.animateHeight = targetHeight;
        }, 0);
        callback();
      });
    },
    getListHeight: function getListHeight(index) {
      if (!(index < this.$refs.list.length)) {
        return -1;
      }

      var lastItem = this.$refs.list[index];
      var height = lastItem.offsetTop + lastItem.offsetHeight;
      return height;
    },
    sendSpreadChange: function sendSpreadChange() {
      var _this5 = this;

      var innerContentHeight = this.$refs.innerContent.offsetHeight;

      if (this.hasSpread) {
        this.height = innerContentHeight;
        return;
      }

      if (this.type === 'paragraph') {
        this.height = innerContentHeight;
        this.$forceUpdate();
        this.$nextTick(function () {
          var shadowHeight = _this5.$refs.shadow.clientHeight;

          if (_this5.height === shadowHeight) {
            _this5.switcher = true;

            _this5.$emit('spreadOff');
          } else {
            _this5.switcher = false;

            _this5.$emit('spreadOn');
          }
        });
      }

      if (this.type === 'height') {
        if (innerContentHeight <= this.foldHeight) {
          this.typeHeightButtonShow = false;
          this.height = innerContentHeight;
          this.switcher = true;
        } else {
          this.typeHeightButtonShow = true;
          this.switcher = false;
          this.height = this.foldHeight;
        }
      }

      if (this.type === 'list') {
        this.height = innerContentHeight;
      }
    },
    onOrientationChange: function onOrientationChange() {
      var _this6 = this;

      setTimeout(function () {
        _this6.sendSpreadChange();
      }, 200);
    },
    init: function init() {
      var _this7 = this;

      this.sendSpreadChange();
      this.marginTop = this.status ? 0 : -this.$refs.content.clientHeight;
      this.animateHeight = !this.status ? 0 : this.$refs.content.clientHeight;

      if (this.type === 'list') {
        this.height = this.$refs.content.clientHeight;
      }

      this.$nextTick(function () {
        _this7.useTransition = true;
      });
      window.addEventListener('orientationchange', this.onOrientationChange);
      var init = false;
      this.$root.$on('attach', function () {
        if (init) {
          _this7.onOrientationChange();

          return;
        }

        init = true;
      });
    }
  },
  mounted: function mounted() {
    if (this.show) {
      this.init();
    }
  },
  destroyed: function destroyed() {
    if (this.show) {
      window.removeEventListener('orientationchange', this.onOrientationChange);
    }
  },
  watch: {
    reset: function reset(value) {
      if (value && this.hasSpread) {
        this.fold();
      }
    },
    show: function show(value) {
      if (value) {
        this.init();
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"show": {"type": Boolean,"default": true},"type": {"type": String,"default": "list"},"threshold": {"type": Number,"default": 1},"foldHeight": {"type": Number,"default": 24},"isShow": {"type": Boolean,"default": true},"hasBorder": {"type": Boolean,"default": false},"hasIcon": {"type": Boolean,"default": true},"spreadText": {"type": String,"default": "展开"},"foldText": {"type": String,"default": "收起"},"spreadRightText": {"type": String,"default": ""},"foldRightText": {"type": String,"default": ""},"transition": {"type": Boolean,"default": true},"bottom": {"type": Boolean,"default": true},"reset": {"type": Boolean,"default": false},"btnPaddingTop": {"type": Number,"default": 10},"btnPaddingBottom": {"type": Number,"default": 10},"noFold": {"type": Boolean,"default": false},"step": Number,"foldMask": {"type": Boolean,"default": false},"status": {"type": Boolean,"default": false}};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-icon": require("../Icon/Icon"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback")};

            
            

            
    var computed = obj.computed || {};
    computed["clampClass"] = function () { return ((this["hasSpread"])?(""):(("c-line-clamp"+this["oThreshold"]))); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"len": -1,"hasSpread": this["status"],"iconStatus": this["status"],"oThreshold": this["threshold"],"isActive": false,"height": null,"marginTop": 0,"switcher": false,"gapTopClass": "c-gap-inner-top","gapBottomClass": "c-gap-inner-bottom","btnFeedbackTop": 0.1,"btnFeedbackBottom": 0.1,"useTransition": false,"delay": ((this["transition"])?(280):(0)),"typeHeightButtonShow": true,"noFoldButtonShow": true,"oFoldMask": this["foldMask"],"hasButtonSlot": false,"curStatus": false,"animateHeight": 0,"isAnimate": false};
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
            
            obj._scopeId = "data-a-5d143b62";

            module.exports = obj;

            
        });
    