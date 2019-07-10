
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {
var _obj, _obj$1, _obj$2;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-image-viewer-img-wrapper__2Dfyt"},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.isLoading && !_vm.isSecondScreenShow),expression:"isLoading && !isSecondScreenShow"}],ref:"loading",staticClass:"c-image-viewer-img-loading__2vgcO",style:({
            width: _vm.innerWidth + 'px',
            height: _vm.innerHeight + 'px'
        })},[_c('c-loading',{staticClass:"c-image-viewer-img-loading-content__y0HxY",attrs:{"type":"2","text-logo-style":"dark"}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.isError && !_vm.isSecondScreenShow),expression:"isError && !isSecondScreenShow"}],ref:"error",staticClass:"c-image-viewer-img-error__3slLF",style:({
            width: _vm.innerWidth + 'px',
            height: _vm.innerHeight + 'px'
        })},[_c('div',{staticClass:"c-image-viewer-img-error-content__1yeGN"},[_c('div',{staticClass:"c-image-viewer-img-error-icon__3-O1v"},[_c('svg',{attrs:{"viewBox":"0 0 235 180","xmlns":"http://www.w3.org/2000/svg"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd","opacity":"0.2"}},[_c('g',{attrs:{"transform":"translate(-504.000000, -966.000000)","fill":"#DCDCDC"}},[_c('g',{attrs:{"transform":"translate(383.000000, 966.000000)"}},[_c('g',{attrs:{"transform":"translate(121.000000, 0.000000)"}},[_c('path',{attrs:{"id":"Fill-1","d":"M184.235319,73.9520958 C196.521,73.9520958 206.480583,\n                                        64.0191605 206.480583,51.7665844 C206.480583,39.5140083 196.521,\n                                        29.5808383 184.235319,29.5808383 C171.949873,29.5808383 161.990291,\n                                        39.5140083 161.990291,51.7665844 C161.990291,64.0191605 171.949873,\n                                        73.9520958 184.235319,73.9520958 L184.235319,73.9520958 Z M0,14.5937428 C0,\n                                        6.53311318 6.5142981,0 14.7312313,0 L51.4065268,0 L40.3907925,\n                                        47.500288 L88.1254079,76.7311453 L66.0939394,113.269775 L117.500466,\n                                        147.115249 L88.1254079,113.269775 L121.171445,73.0772592 L80.781585,\n                                        36.5386296 L106.484732,0 L220.261543,0 C228.391072,0 235,6.54030313 235,\n                                        14.5937428 L235,165.40625 C235,173.466879 228.463793,179.999992 220.297903,\n                                        179.999992 L14.7020965,179.999992 C6.59354463,180.00811 0.01188698,\n                                        173.475925 0,165.40625 L0,14.5937428 Z"}})])])])])])]),_vm._v(" "),_c('p',[_vm._v("图片找不到啦~")])])]),_vm._v(" "),_c('transition',{attrs:{"css":false,"appear":"","mode":"in-out"},on:{"before-leave":_vm.beforeLeave,"leave":_vm.leave,"after-leave":_vm.afterLeave}},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.animationEnd && !_vm.isLeaving),expression:"animationEnd && !isLeaving"}],ref:"img",staticClass:"c-image-viewer-img__2qZwW",class:( _obj = {}, _obj[_vm.$style.hidden] = !_vm.isReady, _obj ),style:(_vm.imgStyle)},[(_vm.isShowLeaveImg)?(_c('div',{staticClass:"bg__2HIrW",class:( _obj$1 = {}, _obj$1[_vm.$style.bgCenter] = _vm.imageClipType === 'center', _obj$1[_vm.$style.bgTopCenter] = _vm.imageClipType === 'top center', _obj$1 ),style:({
                    backgroundImage: 'url(' + _vm.imgSrc + ')'
                })})):((_vm.imgSrc)?(_c('img',{attrs:{"src":_vm.imgSrc},on:{"error":function($event){_vm.onLoadError(_vm.imgSrc)},"load":function($event){_vm.onLoadSuccess(_vm.imgSrc)}}})):(_vm._e()))])]),_vm._v(" "),_c('transition',{attrs:{"css":false,"appear":"","mode":"in-out"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter,"after-enter":_vm.afterEnter}},[(!_vm.animationEnd)?(_c('div',{staticClass:"c-image-viewer-img__2qZwW"},[(_vm.isShowEnterImg && _vm.imgSrc)?(_c('div',{staticClass:"bg__2HIrW",class:( _obj$2 = {}, _obj$2[_vm.$style.bgCenter] = _vm.imageClipType === 'center', _obj$2[_vm.$style.bgTopCenter] = _vm.imageClipType === 'top center', _obj$2 ),style:({
                    backgroundImage: 'url(' + _vm.imgSrc + ')'
                })})):((_vm.imgSrc)?(_c('img',{attrs:{"src":_vm.imgSrc}})):(_vm._e()))])):(_vm._e())])],1)},
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

var _userAgent = _interopRequireDefault(require("@searchfe/user-agent"));

var _versionsCompare = _interopRequireDefault(require("versions-compare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 裁剪类型
var ClipType = {
  NONE: 'none',
  CENTER: 'center',
  TOP_CENTER: 'top center',
  OTHER: 'other'
};
var _default = {
  beforeMount: function beforeMount() {
    if (this.isCurrent && this.animationEnd) {
      this.$emit('enter-start');
    } // IOS 8+，进场动画支持剪裁


    if (this.imageClipType !== ClipType.NONE && this.imageClipType !== ClipType.OTHER && _userAgent["default"].isIOS() && (0, _versionsCompare["default"])(_userAgent["default"].iOSVersion(), [8, 0]) >= 0) {
      this.isShowEnterImg = true;
    } // 裁剪情况下, 安卓手百10.12以下退场降级


    this.leaveDownGrade = this.imageClipType !== ClipType.NONE && _userAgent["default"].isAndroid() && _userAgent["default"].isBaiduBox() && (0, _versionsCompare["default"])(_userAgent["default"].baiduBoxVersion(), [10, 12]) < 0;
  },
  mounted: function mounted() {
    this.resetImgPosition();

    if (this.isCurrent && this.animationEnd) {
      this.$emit('enter-end');
    }
  },
  watch: {
    item: function item(newVal) {
      this.isLoading = true;
      this.isError = false;
      this.resetImgPosition();
    },
    innerHeight: function innerHeight(newVal) {
      this.resetImgPosition();
    },
    imgPosition: function imgPosition(newVal) {
      this.imgStyle = this.getImgStyle();
      this.emitPositionChangeEvent();
    },
    posY: function posY(newVal) {
      if (!this.isCurrent || !this.isSwipingDown && this.item.isAd) {
        return;
      }

      this.swipeDown();
    },
    isSwipingDown: function isSwipingDown(newVal) {
      var _this = this;

      // true到false 恢复大图
      if (!newVal) {
        this.$emit('recover-start'); // 图片没有显示

        if (!this.isReady) {
          this.$refs.loading.style.opacity = 1;
          this.$refs.error.style.opacity = 1;
          return;
        }

        (0, _animate.cssAnimate)(this.$refs.img, {
          transform: 'none'
        }, {
          duration: _animateConfig["default"].duration.swipeDownCancel,
          ease: _animateConfig["default"].transition['ease-out']
        }).then(function () {
          _this.$emit('recover-end');

          _this.$emit('img-ready', _this.isReady);
        });
      } else {
        // 下拉过程中防止其他操作
        this.$emit('img-ready', false);
      }
    },
    isReady: function isReady(newVal) {
      this.$emit('img-ready', newVal);
    },
    isCurrent: function isCurrent(newVal) {
      if (!newVal) {
        // 没有放大时恢复默认样式
        if (!this.isZoomed) {
          _util["default"].setCss(this.$refs.img, {
            top: this.imgPosition.top + 'px',
            bottom: ''
          });
        }
      }
    },
    swipeUpY: function swipeUpY(newVal) {
      if (this.isCurrent) {
        if (newVal === 0) {
          if (!this.isZoomed) {
            _util["default"].setCss(this.$refs.img, {
              top: this.imgPosition.top + 'px',
              bottom: ''
            });
          }
        } else {
          _util["default"].setCss(this.$refs.img, {
            top: '',
            bottom: Math.max(0, this.imgPosition.top + newVal) + 'px'
          });
        }
      }
    },
    isSecondScreenShow: function isSecondScreenShow(newVal) {
      var _this2 = this;

      if (this.isCurrent) {
        var config = {
          ease: _animateConfig["default"].transition['ease-in-out6'],
          duration: _animateConfig["default"].duration.swipeUp
        };
        var targetPosition = Object.assign({}, this.imgPosition); // 显示第二屏

        if (newVal) {
          // transform 动画
          // 图片放大时
          if (this.isZoomed) {
            _util["default"].setCss(this.$refs.img, {
              position: 'fixed',
              bottom: '',
              top: this.$refs.img.getBoundingClientRect().top + 'px'
            });

            var _targetPosition = Object.assign({}, this.imgPosition);

            if (this.imgPosition.height > this.swipeUpHeight) {
              _targetPosition.top = this.swipeUpHeight - this.imgPosition.height;
            } else {
              _targetPosition.top = (this.swipeUpHeight - this.imgPosition.height) / 2;
            }

            (0, _animate.scaleImage)(this.$refs.img, _targetPosition, function () {
              _util["default"].setCss(_this2.$refs.img, {
                position: '',
                top: '',
                bottom: Math.max(0, (_this2.swipeUpHeight - _this2.imgPosition.height) / 2) + 'px'
              });

              _this2.emitPositionChangeEvent();
            }, config);
          } // bottom 动画
          else {
              (0, _animate.cssAnimate)(this.$refs.img, {
                bottom: Math.max(0, (this.swipeUpHeight - this.imgPosition.height) / 2) + 'px'
              }, config).then(function () {
                _this2.emitPositionChangeEvent();
              });
            }
        } // 隐藏第二屏
        else if (this.swipeUpY !== 0) {
            // transform 动画性能优化
            _util["default"].setCss(this.$refs.img, {
              position: 'fixed',
              bottom: '',
              top: this.$refs.img.getBoundingClientRect().top + 'px'
            });

            (0, _animate.scaleImage)(this.$refs.img, targetPosition, function () {
              _util["default"].setCss(_this2.$refs.img, {
                position: ''
              });

              _this2.emitPositionChangeEvent();
            }, config);
          }
      }
    }
  },
  methods: {
    // 图片位置相关
    resetImgPosition: function resetImgPosition() {
      var _this3 = this;

      if (this.item.width && this.item.height) {
        this.updateImgPosition();
      } // 不传图片宽高时，需要获取图片真实宽高
      else {
          var item = this.item;

          _util["default"].loadImg(item).then(function (imgEl) {
            if (item === _this3.item && imgEl) {
              item.width = imgEl.naturalWidth;
              item.height = imgEl.naturalHeight;

              _this3.updateImgPosition();
            }
          });
        }
    },
    updateImgPosition: function updateImgPosition() {
      var options = {
        innerWidth: this.innerWidth,
        innerHeight: this.innerHeight,
        width: this.item.width,
        height: this.item.height,
        isOneScreen: this.hasSecondScreen
      };
      var pos = (0, _animate.layoutImage)(options);
      this.imgPosition = {
        width: pos.width,
        height: pos.height,
        left: pos.left,
        top: pos.top
      };
      this.isLongImage = pos.isLongImage;
      this.isSmallImage = pos.isSmallImage;
    },
    getImgStyle: function getImgStyle() {
      var _this4 = this;

      var style = {};
      Object.keys(this.imgPosition).forEach(function (prop) {
        style[prop] = _this4.imgPosition[prop] + 'px';
      });
      return style;
    },
    emitPositionChangeEvent: function emitPositionChangeEvent() {
      this.$emit('position-change', {
        el: this.$refs.img,
        position: this.imgPosition,
        isLongImage: this.isLongImage,
        isSmallImage: this.isSmallImage
      });
    },
    // 进场动画
    beforeEnter: function beforeEnter(el) {
      if (!this.isCurrent) {
        return;
      } // 有动画


      if (this.enterPosition.width) {
        var _this$enterPosition = this.enterPosition,
            left = _this$enterPosition.left,
            top = _this$enterPosition.top,
            width = _this$enterPosition.width,
            height = _this$enterPosition.height;
        el.style.left = left + 'px';
        el.style.top = top + 'px';
        el.style.width = width + 'px';
        el.style.height = height + 'px'; // 动画降级时不用fixed定位

        if (!_util["default"].animationDowngrade) {
          el.style.position = 'fixed';
        }
      } // 没有动画，图片渐显
      else {
          el.style.opacity = 0;
        }
    },
    enter: function enter(el, done) {
      if (!this.isCurrent) {
        done();
        return;
      } // 有动画


      if (this.enterPosition.width) {
        // 对进场动画图片特殊处理
        if (!this.item.width || !this.item.height) {
          var defaultWidth = this.enterPosition.width;
          var defaultHeight = this.enterPosition.height; // 宽图

          if (defaultWidth / defaultHeight >= this.innerWidth / this.innerHeight) {
            defaultHeight = this.innerWidth * defaultHeight / defaultWidth;
            defaultWidth = this.innerWidth;
          } // 高图
          else {
              defaultWidth = this.innerHeight * defaultWidth / defaultHeight;
              defaultHeight = this.innerHeight;
            }

          this.item.width = defaultWidth;
          this.item.height = defaultHeight;
        } // 放大


        var options = {
          innerWidth: this.innerWidth,
          innerHeight: this.innerHeight,
          width: this.item.width,
          height: this.item.height,
          isOneScreen: this.hasSecondScreen
        };

        var _layoutImage = (0, _animate.layoutImage)(options),
            left = _layoutImage.left,
            top = _layoutImage.top,
            width = _layoutImage.width,
            height = _layoutImage.height; // flip 动画


        (0, _animate.flip)(el, {
          left: left,
          top: top,
          width: width,
          height: height
        }, {
          easing: 'ease-in-out',
          duration: _animateConfig["default"].duration.enter,
          isClip: this.isShowEnterImg
        }).then(function () {
          done();
        });
      } // 没有动画，图片渐显
      else {
          (0, _animate.cssAnimate)(el, {
            opacity: 1
          }, {
            duration: _animateConfig["default"].duration.enter,
            ease: 'linear'
          }).then(function () {
            done();
          });
        }

      this.$emit('enter-start');
    },
    afterEnter: function afterEnter(el) {
      if (!this.isCurrent) {
        return;
      }

      this.animationEnd = true;
      this.$emit('enter-end');
    },
    // 退场动画
    beforeLeave: function beforeLeave(el) {
      if (!this.isCurrent) {
        return;
      } // 记录当前位置


      var _el$getBoundingClient = el.getBoundingClientRect(),
          left = _el$getBoundingClient.left,
          top = _el$getBoundingClient.top,
          width = _el$getBoundingClient.width,
          height = _el$getBoundingClient.height; // 发送事件


      this.$emit('leave-start'); // 有动画

      if (this.leavePosition.width && this.isReady && !this.leaveDownGrade) {
        _util["default"].setCss(el, {
          position: 'fixed',
          left: left + 'px',
          top: top + 'px',
          width: width + 'px',
          height: height + 'px',
          transform: 'none'
        });

        if (this.imageClipType !== ClipType.NONE && this.imageClipType !== ClipType.OTHER) {
          this.isShowLeaveImg = true;
        }
      }
    },
    leave: function leave(el, done) {
      if (!this.isCurrent) {
        done();
        return;
      } // 有动画


      if (this.leavePosition.width && this.isReady && !this.leaveDownGrade) {
        var _this$leavePosition = this.leavePosition,
            left = _this$leavePosition.left,
            top = _this$leavePosition.top,
            width = _this$leavePosition.width,
            height = _this$leavePosition.height; // flip 动画

        (0, _animate.flip)(el, {
          left: left,
          top: top,
          width: width,
          height: height
        }, {
          duration: _animateConfig["default"].duration.leave,
          easing: 'ease-in-out',
          isClip: this.isShowLeaveImg
        }).then(function () {
          done();
        });
      } // 没有动画，图片渐隐
      else if (this.isReady) {
          (0, _animate.cssAnimate)(el, {
            opacity: 0
          }, {
            duration: _animateConfig["default"].duration.leave,
            ease: 'linear'
          }).then(function () {
            done();
          });
        } // 没有动画，直接关闭
        else {
            done();
          }
    },
    afterLeave: function afterLeave(el) {
      if (!this.isCurrent) {
        return;
      }

      this.$emit('leave-end');
    },
    // 下拉退场
    swipeDown: function swipeDown() {
      // 图片没有显示
      if (!this.isReady) {
        this.$refs.error.style.opacity = 0;
        this.$refs.loading.style.opacity = 0;
        return;
      }

      var _this$posY = this.posY,
          y = _this$posY.deltaY,
          x1 = _this$posY.startX,
          y1 = _this$posY.startY,
          x2 = _this$posY.endX,
          y2 = _this$posY.endY;
      var scale = 1;

      if (y > 0) {
        var distance = y; // 计算方法: 418 / (1 - 0.3) = distance / (1 - scale)

        scale = Math.max(0.3, 1 - distance * 0.7 / 418);
      } // 计算公式
      // (x1 - x0) / width = (x2 - (x0 + moveX)) / (width * scale)
      // (y1 - y0) / height = (y2 - (y0 + moveY)) / (height * scale)
      // moveX =  (x2 - x0) - scale * (x1 - x0)
      // moveY =  (y2 - y0) - scale * (y1 - y0)


      var moveX = x2 - this.imgPosition.left - scale * (x1 - this.imgPosition.left);
      var moveY = y2 - this.imgPosition.top - scale * (y1 - this.imgPosition.top);

      _util["default"].setCss(this.$refs.img, {
        transform: "translate3d(".concat(moveX, "px, ").concat(moveY, "px, 0) scale(").concat(scale, ", ").concat(scale, ")")
      });
    },
    // 图片加载状态
    onLoadError: function onLoadError(imgSrc) {
      if (this.imgSrc !== imgSrc) {
        return;
      }

      this.isError = true;
      this.isLoading = false;
    },
    onLoadSuccess: function onLoadSuccess(imgSrc) {
      if (this.imgSrc !== imgSrc) {
        return;
      }

      this.isError = false;
      this.isLoading = false;
    },
    // 更新样式接口
    updateStyle: function updateStyle(_ref) {
      var props = _ref.props;

      if (props) {
        this.imgStyle = Object.assign({}, this.imgStyle, props);
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cImageViewerImgWrapper":"c-image-viewer-img-wrapper__2Dfyt","cImageViewerImg":"c-image-viewer-img__2qZwW","bg":"bg__2HIrW","bgCenter":"bg-center__1Baep","bgTopCenter":"bg-top-center__2lY-T","hidden":"hidden__3jzkt","cImageViewerImgLoading":"c-image-viewer-img-loading__2vgcO","cImageViewerImgError":"c-image-viewer-img-error__3slLF","cImageViewerImgLoadingContent":"c-image-viewer-img-loading-content__y0HxY","cImageViewerImgErrorContent":"c-image-viewer-img-error-content__1yeGN","cImageViewerImgErrorIcon":"c-image-viewer-img-error-icon__3-O1v"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"isCurrent": {"type": Boolean,"required": true},"item": {"type": Object,"required": true},"innerWidth": {"type": Number,"required": true},"innerHeight": {"type": Number,"required": true},"posY": {"type": Object,"default": function () { return {}; }},"enterPosition": {"type": Object,"default": function () { return {}; }},"leavePosition": {"type": Object,"default": function () { return {}; }},"isLeaving": {"type": Boolean,"default": false},"isSwipingDown": {"type": Boolean,"default": false},"isZoomed": {"type": Boolean,"default": false},"swipeUpHeight": {"type": Number,"default": 0},"swipeUpY": {"type": Number,"default": 0},"hasSecondScreen": {"type": Boolean,"default": false},"isSecondScreenShow": {"type": Boolean,"default": false},"imageClipType": {"type": String,"default": "none"}};
            obj.components = {"c-loading": require("../Loading/Loading")};

            
            

            
    var computed = obj.computed || {};
    computed["imgSrc"] = function () { return this["item"]["src"]; };
computed["isReady"] = function () { return ((!this["isLoading"])&&(!this["isError"])); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"isLoading": (!this["isCurrent"]),"isError": false,"isLongImage": false,"isSmallImage": false,"isShowEnterImg": false,"isShowLeaveImg": false,"imgPosition": {},"imgStyle": {},"animationEnd": (!(this["isCurrent"]&&(this["enterPosition"]["width"]>0))),"leaveDownGrade": false};
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
    