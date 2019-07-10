
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scroll-auto__3snh_",style:([
        _vm.rowTile
            ? {
                'margin-left': '-.17rem',
                'margin-right': '-.17rem'
            }
            : {}
    ]),on:{"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove,"touchend":_vm.handleTouchEnd,"touchcancel":_vm.handleTouchCancel}},[(_vm.isDownGrade)?(_c('div',{ref:"downGradeWrapper",staticClass:"down-grade-wrapper"},[_c('div',{ref:"downGradeScroller",staticClass:"down-grade-scroller__2haj7"},_vm._l((_vm.slotsCount),function(item,index){return _c('div',{key:index,ref:"downGradeItem",refInFor:true,staticClass:"down-grade-item__qJKG2"},[_vm._t('slot' + index)],2)}))])):(_c('div',{staticClass:"scroller__1YRg2",style:([
            _vm.rowTile
                ? {
                    'padding-left': '.17rem',
                    'padding-right': '.17rem'
                }
                : {}
        ])},_vm._l((_vm.row),function(i,rowIndex){return _c('div',{key:rowIndex,staticClass:"row__2hMcT"},_vm._l((_vm.column),function(j,columnIndex){return _c('div',{key:columnIndex,staticClass:"item__VIF-L",style:([
                    _vm.rowTile && columnIndex === _vm.column - 1
                        ? {
                            'padding-right': '.17rem'
                        }
                        : {}
                ])},[_vm._t('slot' + (_vm.sortOrder === 'horizontal'
                        ? (columnIndex + rowIndex * _vm.column)
                        : (rowIndex + columnIndex * _vm.row)
                    ))],2)}))})))])},
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

var _userAgent = _interopRequireDefault(require("@searchfe/user-agent"));

var _betterScroll = _interopRequireDefault(require("@baidu/better-scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  mounted: function mounted() {
    this.iOSVersion = _userAgent["default"].iOSVersion()[0]; // iOS 9 以下进行降级

    if (this.iOSVersion <= 9) {
      this.downGrade();
    }
  },
  render: function render() {
    var _this = this;

    this.column = 0;
    var vnodes = this.$slots["default"];

    if (vnodes && vnodes.length) {
      vnodes.forEach(function (vnode, index) {
        // 放入指定 slot
        _this.$slots['slot' + index] = [vnode];
      }); // 设置 slots 个数

      this.slotsCount = vnodes.length;
      this.column = Math.ceil(this.slotsCount / this.row);
    }

    return this.$super.render();
  },
  methods: {
    // 降级处理
    downGrade: function downGrade() {
      var _this2 = this;

      this.$nextTick(function () {
        // 计算出总宽度
        var totalWidth = 0;

        _this2.$refs.downGradeItem.forEach(function (item, index) {
          totalWidth += item.offsetWidth;
        }); // 手动设置 scroller 的宽度


        var downGradeScroller = _this2.$refs.downGradeScroller;
        downGradeScroller.style.width = totalWidth + 10 + 'px'; // 设置 better-scroll

        var downGradeWrapper = _this2.$refs.downGradeWrapper;
        _this2.bscroll = new _betterScroll["default"](downGradeWrapper, {
          bindToWrapper: true,
          // 将 touchmove 事件绑定至 dom 而非全局
          scrollX: true,
          scrollY: false,
          momentum: true,
          disableMouse: true,
          disablePointer: true,
          eventPassthrough: true,
          scrollbars: false,
          snap: false
        });

        _this2.bscroll.on('scrollEnd', function (obj) {
          /**
           * 滑动结束事件
           *
           * @event scrollend
           */
          _this2.$emit('scrollend');
        });
      });
    },
    handleTouchStart: function handleTouchStart(e) {
      if (!e) {
        return;
      }

      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
      this.endX = e.touches[0].clientX;
      this.endY = e.touches[0].clientY;
    },
    handleTouchMove: function handleTouchMove(e) {
      if (!e) {
        return;
      }

      this.endX = e.touches[0].clientX;
      this.endY = e.touches[0].clientY;
    },
    handleTouchEnd: function handleTouchEnd(e) {
      if (Math.abs(this.endX - this.startX) > 30) {
        /**
         * 滑动结束事件
         *
         * @event scrollend
         */
        this.$emit('scrollend');
      }
    },
    handleTouchCancel: function handleTouchCancel(e) {
      this.handleTouchEnd(e);
    }
  },
  computed: {
    isDownGrade: function isDownGrade() {
      this.iOSVersion = _userAgent["default"].iOSVersion()[0];

      if (this.iOSVersion <= 9) {
        return true;
      }

      return false;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"scrollAuto":"scroll-auto__3snh_","downGradeScroller":"down-grade-scroller__2haj7","downGradeItem":"down-grade-item__qJKG2","scroller":"scroller__1YRg2","row":"row__2hMcT","item":"item__VIF-L"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"row": {"type": Number,"default": 1},"sortOrder": {"type": String,"default": "horizontal"},"rowTile": {"type": Boolean,"default": true}};
            obj.components = {};

            
            

            


            
            obj.data = function () {
                return {"startX": 0,"startY": 0,"endX": 0,"endY": 0,"iOSVersion": null,"bscroll": null};
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
    