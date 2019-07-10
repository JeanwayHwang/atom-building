
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {
var _obj, _obj$1;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-image-viewer-item__z0LN4",class:( _obj = {}, _obj[_vm.$style.greyBg] = _vm.isGreyBgShow, _obj )},[_c('c-image-viewer-zoom',{ref:"zoom",attrs:{"store":_vm.store,"is-ready":_vm.isTargetReady,"is-current":_vm.isCurrent,"inner-width":_vm.innerWidth,"inner-height":_vm.innerHeight,"target":_vm.zoomTarget,"has-second-screen":_vm.hasSecondScreen,"easy-swipe":_vm.easySwipe},on:{"zoom-tap":_vm.onZoomTap,"zoom-change":_vm.onZoomChange,"zoom-target-update":_vm.onZoomTargetUpdate,"zoom-swipe-down-start":_vm.onZoomSwipeDownStart,"zoom-swipe-down-move":_vm.onZoomSwipeDownMove,"zoom-swipe-down-end":_vm.onZoomSwipeDownEnd,"zoom-swipe-down-cancel":_vm.onZoomSwipeDownCancel,"zoom-swipe-up-move":_vm.onZoomSwipeUpMove}},[(_vm.obj.isSet)?(_c('c-image-viewer-img',{ref:"img",class:( _obj$1 = {}, _obj$1[_vm.$style.blackBg] = _vm.isGreyBgShow, _obj$1 ),attrs:{"item":_vm.obj.item,"is-current":_vm.isCurrent,"is-leaving":_vm.isLeaving,"is-swiping-down":_vm.isSwipingDown,"inner-width":_vm.innerWidth,"inner-height":_vm.innerHeight,"pos-y":_vm.posY,"enter-position":_vm.enterPosition,"leave-position":_vm.leavePosition,"is-zoomed":_vm.isZoomed,"swipe-up-height":_vm.swipeUpHeight,"swipe-up-y":_vm.swipeUpY,"has-second-screen":_vm.hasSecondScreen,"is-second-screen-show":_vm.isSecondScreenShow,"image-clip-type":_vm.imageClipType},on:{"enter-start":_vm.onEnterStart,"enter-end":_vm.onEnterEnd,"leave-start":_vm.onLeaveStart,"leave-end":_vm.onLeaveEnd,"recover-end":_vm.onRecoverEnd,"img-ready":_vm.onImgReady,"position-change":_vm.onImgPositionChange}})):(_vm._e())],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.isCurrent && _vm.swipeUpY < 0 && !_vm.isLeaving),expression:"isCurrent && swipeUpY < 0 && !isLeaving"}],staticClass:"c-image-viewer-item-second-screen__5_5L3",style:({'min-height': _vm.innerHeight - 138 + 'px'})},[_vm._t("secondScreen")],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.isShowAnchor && !_vm.isZoomed),expression:"isShowAnchor && !isZoomed"}],ref:"animateWrapper",staticClass:"c-image-viewer-item-animate-wrapper"},[_vm._t("anchor")],2)],1)},
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

var MIN_SWIPE_UP_DISTANCE = 10;
var _default = {
  mounted: function mounted() {
    this.zoomHeight = this.innerHeight;
  },
  watch: {
    isSwipingDown: function isSwipingDown(newVal) {
      // false到true 下拉开始
      if (newVal) {
        this.showAnchor(false);
      }
    },
    isCurrent: function isCurrent(newVal) {
      // 第二屏显示状态下翻页
      if (!newVal && this.zoomHeight !== this.innerHeight) {
        this.showAnchor(true);
        this.zoomHeight = this.innerHeight;

        _util["default"].setCss(this.$refs.zoom.$el, {
          height: ''
        });

        this.$emit('swipe-up-down');
      }
    },
    swipeUpY: function swipeUpY(newVal) {
      if (this.isCurrent) {
        if (newVal === 0) {
          this.showAnchor(true);
          this.zoomHeight = this.innerHeight;

          _util["default"].setCss(this.$refs.zoom.$el, {
            height: ''
          });
        } else {
          this.showAnchor(false);
          this.zoomHeight = this.innerHeight + 2 * newVal;

          _util["default"].setCss(this.$refs.zoom.$el, {
            height: this.zoomHeight + 'px'
          });
        }
      }
    },
    isSecondScreenShow: function isSecondScreenShow(newVal) {
      var _this = this;

      if (this.isCurrent) {
        // 显示第二屏
        if (newVal) {
          this.zoomHeight = this.swipeUpHeight;
          (0, _animate.cssAnimate)(this.$refs.zoom.$el, {
            height: this.zoomHeight + 'px'
          }, {
            ease: _animateConfig["default"].transition['ease-in-out6'],
            duration: _animateConfig["default"].duration.swipeUp
          }).then(function () {
            _this.isSecondScreenFixed = true;

            _this.$emit('swipe-up-end');
          });
        } // 隐藏第二屏
        else if (this.swipeUpY !== 0) {
            this.zoomHeight = this.innerHeight;
            (0, _animate.cssAnimate)(this.$refs.zoom.$el, {
              height: this.zoomHeight + 'px'
            }, {
              ease: _animateConfig["default"].transition['ease-in-out6'],
              duration: _animateConfig["default"].duration.swipeUp
            }).then(function () {
              _util["default"].setCss(_this.$refs.zoom.$el, {
                height: ''
              });

              _this.$emit('swipe-up-down');
            });
          }
      }

      if (!newVal) {
        this.isSecondScreenFixed = false;
      }
    }
  },
  methods: {
    onEnterStart: function onEnterStart(data) {
      var _this2 = this;

      this.$emit('enter-start', data);

      if (this.enterPosition.width) {
        this.$nextTick(function () {
          _this2.showAnchor(false);
        });
      }
    },
    onEnterEnd: function onEnterEnd(data) {
      this.$emit('enter-end', data);
      this.showAnchor(true);
    },
    onLeaveStart: function onLeaveStart(data) {
      this.$emit('leave-start', data);
      this.showAnchor(false);
    },
    onLeaveEnd: function onLeaveEnd(data) {
      this.$emit('leave-end', data);
    },
    onRecoverEnd: function onRecoverEnd() {
      this.showAnchor(true);
    },
    // 图片状态变化
    onImgReady: function onImgReady(data) {
      this.isReady = data;
    },
    onImgPositionChange: function onImgPositionChange(target) {
      if (target.el && target.position) {
        this.zoomTarget = target;
      }
    },
    // zoom相关
    onZoomTap: function onZoomTap() {
      this.$emit('zoom-tap');
    },
    onZoomChange: function onZoomChange(data) {
      this.isZoomed = data;
    },
    onZoomSwipeDownStart: function onZoomSwipeDownStart() {
      this.$emit('zoom-swipe-down-start');
    },
    onZoomSwipeDownMove: function onZoomSwipeDownMove(data) {
      this.$emit('zoom-swipe-down-move', data);
    },
    onZoomSwipeDownEnd: function onZoomSwipeDownEnd() {
      this.$emit('zoom-swipe-down-end');
    },
    onZoomSwipeDownCancel: function onZoomSwipeDownCancel() {
      this.$emit('zoom-swipe-down-cancel');
    },
    onZoomTargetUpdate: function onZoomTargetUpdate(data) {
      this.$refs.img.updateStyle(data);
    },
    onZoomSwipeUpMove: function onZoomSwipeUpMove(moveY) {
      if (moveY < -MIN_SWIPE_UP_DISTANCE) {
        this.$emit('zoom-swipe-up-end');
      }
    },
    showAnchor: function showAnchor(isShow) {
      this.isShowAnchor = isShow;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cImageViewerItem":"c-image-viewer-item__z0LN4","cImageViewerItemSecondScreen":"c-image-viewer-item-second-screen__5_5L3","greyBg":"grey-bg__1bgJE","blackBg":"black-bg__3MqFz"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"isCurrent": {"type": Boolean,"required": true},"obj": {"type": Object,"required": true},"innerWidth": {"type": Number,"required": true},"innerHeight": {"type": Number,"required": true},"posY": {"type": Object,"default": function () { return {}; }},"enterPosition": {"type": Object,"default": function () { return {}; }},"leavePosition": {"type": Object,"default": function () { return {}; }},"isLeaving": {"type": Boolean,"default": false},"isSwipingDown": {"type": Boolean,"default": false},"store": {"type": Object,"default": function () { return {}; }},"swipeUpHeight": {"type": Number,"default": 0},"swipeUpY": {"type": Number,"default": 0},"hasSecondScreen": {"type": Boolean,"default": false},"isSecondScreenShow": {"type": Boolean,"default": false},"imageClipType": {"type": String,"default": "none"},"easySwipe": {"type": Boolean,"default": false}};
            obj.components = {"c-image-viewer-zoom": require("./ImageViewerZoom"),"c-image-viewer-img": require("./ImageViewerImg")};

            
            

            
    var computed = obj.computed || {};
    computed["isTargetReady"] = function () { return (this["isReady"]&&(!this["isSecondScreenShow"])); };
computed["isGreyBgShow"] = function () { return ((this["isSecondScreenFixed"]&&(!this["isLeaving"]))&&this["isCurrent"]); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"isReady": this["isCurrent"],"isShowAnchor": true,"isZoomed": false,"zoomTarget": {},"zoomHeight": 0,"isSecondScreenFixed": false};
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
    