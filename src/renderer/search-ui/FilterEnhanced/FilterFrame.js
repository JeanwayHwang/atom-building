
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"filter-frame-wrapper",style:([
        _vm.rowTile
            ? {
                'margin-left': '-.17rem',
                'margin-right': '-.17rem'
            }
            : {}
    ])},[_c('div',{staticClass:"filter-frame__SoQHc",style:([
            {
                'z-index': _vm.mZIndex
            }
        ])},[_c('c-tag-layout',{ref:"tagLayout",attrs:{"options":_vm.options,"prevent-default-touch-move":_vm.stopScrollThrough && _vm.selectedIndex !== -1,"primary-color":_vm.primaryColor},on:{"click":_vm.handleTagLayoutClick}},[_vm._t("tagLayout")],2),_vm._v(" "),_c('div',{staticClass:"content-wrapper__3kZmE",style:({
                'background-color': _vm.backgroundColor
            })},[_c('c-content',{ref:"content",attrs:{"selected-index":_vm.selectedIndex,"horizontal-transition":_vm.horizontalTransition,"opacity-transition":_vm.opacityTransition,"transition-opts":_vm.transitionOpts,"vertical-transition":""}},_vm._l((_vm.options),function(option,optionIndex){return (option.type !== 'order')?(_c('div',{key:optionIndex},[_vm._t('filterFrameItem' + optionIndex)],2)):(_vm._e())}))],1),_vm._v(" "),(_vm.showMask)?(_c('c-mask',{ref:"mask",on:{"click":_vm.handleMaskClick}})):(_vm._e())],1)])},
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
  // render
  render: function render() {
    var _this = this;

    var vnodes = this.$slots["default"];

    if (vnodes && vnodes.length) {
      vnodes.forEach(function (vnode, index) {
        // 放入指定 slot
        _this.$slots['filterFrameItem' + index] = vnode;
      }); // 设置 slots 长度

      this.slotsCount = vnodes.length;
    }

    return this.$super.render();
  },
  mounted: function mounted() {
    this.mounted = true;
  },
  methods: {
    init: function init() {
      this.$refs.content.init();
    },
    // Tag 项点击
    handleTagLayoutClick: function handleTagLayoutClick(obj) {
      // 将 option 参数改名，改为 selection 参数
      obj.selection = obj.option; // 触发 change 事件

      /**
       * 上方标签项点击
       *
       * @event taglayoutclick
       * @property {object} param1 事件参数
       * @property {string} param1.direction 方向
       * @property {number} param1.lastSelectedIndex 上一次被选中的索引
       * @property {object} param1.option 被选中的选项
       * @property {number} param1.selectedIndex 选中项的索引
       * @property {object} param1.selection 当前筛选项的实例
       * @property {string} param1.type 筛选项类型
       */

      this.$emit('taglayoutclick', obj); // 如果阻止默认事件

      if (obj.option.preventDefault) {
        return;
      } // 设置选中项


      this.selectedIndex = obj.selectedIndex; // 排序类型

      if (obj.type === 'order') {
        // 关闭蒙层
        this.close();
      } // 普通类型
      else {
          // 如果是关闭蒙层
          if (this.selectedIndex === -1) {
            // 关闭蒙层
            this.close();
          } // 如果是打开蒙层
          else {
              // 清除 z-index timeout
              if (this.cancelZIndexTimeout) {
                clearTimeout(this.cancelZIndexTimeout);
                this.cancelZIndexTimeout = null;
              } // 设置 z-index


              this.mZIndex = this.zIndex;
            }
        }
    },
    // 蒙层点击
    handleMaskClick: function handleMaskClick() {
      /**
       * 蒙层阴影点击
       *
       * @event maskclick
       * @property {object} param1 事件参数
       * @property {number} param1.selectedIndex 选中项的索引
       */
      this.$emit('maskclick', {
        selectedIndex: this.selectedIndex
      });
      this.close();
    },

    /**
     * 主动关闭蒙层
     *
     * @public
     */
    close: function close() {
      // 如果不是 order 类型
      if (this.options[this.selectedIndex] && this.options[this.selectedIndex].type !== 'order') {
        // 手动设置方向
        this.options[this.selectedIndex].direction = 'down';
      } // 设置为 -1


      this.selectedIndex = -1; // 主动改变 FilterTagLayout 里的 selectedIndex

      this.$refs.tagLayout.changeSelectedIndex(-1); // 取消 z-index

      this.cancelZIndex();
    },
    // 取消 z-index
    cancelZIndex: function cancelZIndex() {
      var _this2 = this;

      // 清除 z-index timeout
      if (this.cancelZIndexTimeout) {
        clearTimeout(this.cancelZIndexTimeout);
        this.cancelZIndexTimeout = null;
      }

      this.cancelZIndexTimeout = setTimeout(function () {
        // 设置 z-index
        _this2.mZIndex = 'auto';
      }, 240);
    },

    /**
     * 设置内容高度，带动效
     *
     * @public
     * @param {number} height 高度
     */
    setHeight: function setHeight(height) {
      this.$refs.content.setHeight(height);
    },

    /**
     * 设置 selectedIndex
     *
     * @param {number} selectedIndex 需要设置的索引
     */
    setSelectedIndex: function setSelectedIndex(selectedIndex) {
      var option = this.options[selectedIndex];
      var obj = {
        optionIndex: selectedIndex,
        option: option
      };
      this.$refs.tagLayout.handleTagLayoutItemClick(obj);
    }
  },
  watch: {
    selectedIndex: function selectedIndex(newVal, oldVal) {
      if (newVal === -1 && oldVal !== -1) {
        this.$refs.mask && this.$refs.mask.hide();
      } else if (newVal !== -1 && oldVal === -1) {
        this.$refs.mask && this.$refs.mask.show();
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"filterFrame":"filter-frame__SoQHc","contentWrapper":"content-wrapper__3kZmE"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"options": Array,"zIndex": {"type": [Number,String],"default": 1},"rowTile": {"type": Boolean,"default": true},"horizontalTransition": {"type": Boolean,"default": false},"opacityTransition": {"type": Boolean,"default": false},"transitionOpts": {"type": Object,"default": function () { return {"downTransition": "all .3s cubic-bezier(0.42, 0, 0.52, 1)","upTransition": "all .16s cubic-bezier(0.46, 0, 1, 1)","heightTransition": "height .3s cubic-bezier(0.4, 0.0, 0.2, 1)","horizontalTransition": "left .24s cubic-bezier(.18,.74,.78,.96),opacity .5s cubic-bezier(.18,0,.26,1)","opacityTransition": "opacity .08s cubic-bezier(0,0,1,1)"}; }},"backgroundColor": {"type": String,"default": "#fff"},"stopScrollThrough": {"type": Boolean,"default": true},"showMask": {"type": Boolean,"default": true},"primaryColor": String};
            obj.components = {"c-tag-layout": require("../FilterSimple/FilterTagLayout"),"c-mask": require("../Mask/Mask"),"c-icon": require("../Icon/Icon"),"c-content": require("../Content/Content")};

            
            

            


            
            obj.data = function () {
                return {"selectedIndex": -1,"mounted": false,"mZIndex": "auto"};
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
    