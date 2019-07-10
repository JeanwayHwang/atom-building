
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"data-module":"c-fe"}},[_c('c-filter-frame',{ref:"filterFrame",staticClass:"filter",attrs:{"options":_vm.mSelections,"horizontal-transition":false,"opacity-transition":false,"row-tile":_vm.rowTile,"stop-scroll-through":_vm.stopScrollThrough,"show-mask":_vm.showMask,"z-index":_vm.zIndex,"primary-color":_vm.primaryColor,"background-color":"#fff"},on:{"taglayoutclick":_vm.handleTagLayoutClick,"maskclick":_vm.handleMaskClick}},[_c('div',{slot:"tagLayout"},[_vm._t("tagLayout")],2),_vm._v(" "),_vm._l((_vm.mSelections),function(selection,selectionIndex){return [(selection.type === 'list')?(_c('c-cascader',{key:selectionIndex,ref:"cascader",refInFor:true,attrs:{"column":selection.column,"column-overflow":_vm.cascaderColumnOverflow,"options":selection.options,"default-value":selection.defaultValue,"default-value-type":selection.defaultValueType,"ins":selection,"stop-scroll-through":_vm.stopScrollThrough,"selected-color":_vm.primaryColor,"deep-copy":false},on:{"itemclick":function($event){_vm.handleCascaderItemClick({
                    item: $event,
                    selection: selection
                })}}})):((selection.type === 'multi')?(_c('div',{key:selectionIndex,ref:'multiWrapper' + selectionIndex,refInFor:true,staticClass:"multi__1kbyr",style:([
                    {
                        'max-height': _vm.multiMaxHeight + 'px'
                    }
                ]),on:{"touchstart":function($event){_vm.handleMultiTouchStart({
                    e: $event,
                    selectionIndex: selectionIndex
                })},"touchmove":function($event){_vm.handleMultiTouchMove({
                    e: $event,
                    selectionIndex: selectionIndex
                })}}},[_c('div',{ref:'multi' + selectionIndex,refInFor:true,staticClass:"multi-inner__1wirr",style:([
                        {
                            'max-height': _vm.multiMaxHeight + 'px'
                        },
                        selection.hideBtnLayout
                            ? {
                                'padding-bottom': '.1rem'
                            }
                            : {
                                'padding-bottom': '.8rem'
                            }
                    ])},[_vm._l((selection.options),function(option,optionIndex){return [(option.type === 'radio'
                                || option.type === 'checkbox'
                            )?(_c('c-spread-tags',{key:selectionIndex + ' ' + optionIndex,ref:"spreadTag",refInFor:true,staticClass:"c-gap-inner-top-small",attrs:{"options":option.options,"force-check":option.forceCheck,"label":option.label,"size":option.size,"type":option.type,"default-value":option.defaultValue,"spread-opts":{
                                show: option.noSpread
                                    ? false
                                    : option.options.length > 3,
                                spread: option.noSpread
                            },"ins":option,"primary-color":_vm.primaryColor,"margin-inner":"0 1px"},on:{"itemclick":function($event){_vm.handleSpreadTagsItemClick({
                                tagItem: $event,
                                option: option,
                                optionIndex: optionIndex,
                                selection: selection
                            })},"spreadchange":function($event){_vm.handleSpreadChange({
                                params: $event,
                                option: option,
                                optionIndex: optionIndex,
                                selection: selection,
                                selectionIndex: selectionIndex
                            })}}})):((option.type === 'rangeInput')?(_c('c-range-input',{key:selectionIndex + ' ' + optionIndex,ref:"rangeInput",refInFor:true,staticClass:"c-gap-inner-top-small",attrs:{"options":option.options,"label":option.label,"type":option.type,"force-check":option.forceCheck,"default-value":option.defaultValue,"spread-opts":{
                                show: option.noSpread
                                    ? false
                                    : option.options.length > 3,
                                threshold: 2,
                                paddingBottom: '.05rem',
                                touchableFeedbackBottom: -.05
                            },"ins":option,"unit":option.input.unit,"error-tips":option.input.errorTips,"min":option.input
                                ? option.input.min
                                : {},"max":option.input
                                ? option.input.max
                                : {},"primary-color":_vm.primaryColor,"margin-inner":"0 1px"},on:{"change":function($event){_vm.handleRangeInputChange({
                                value: $event.value,
                                type: $event.type,
                                option: option,
                                optionIndex: optionIndex,
                                selection: selection
                            })},"spreadchange":function($event){_vm.handleSpreadChange({
                                params: $event,
                                option: option,
                                optionIndex: optionIndex,
                                selection: selection,
                                selectionIndex: selectionIndex
                            })}}})):(_vm._e()))]})],2),_vm._v(" "),(!selection.hideBtnLayout)?(_c('c-btn-layout',{staticClass:"btn-layout__tH-7u",attrs:{"primary-color":_vm.primaryColor,"border-bottom":"1px solid #fff"},on:{"click":function($event){_vm.handleBtnLayoutClick({
                        btnLayoutObj: $event,
                        selection: selection,
                        selectionIndex: selectionIndex
                    })}}})):(_vm._e())],1)):((selection.type === 'custom')?(_c('div',{key:selectionIndex},[_vm._t('custom' + selectionIndex)],2)):(_vm._e())))]})],2)],1)},
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

var _domUtil = require("../util/domUtil");

var _deviceUtil = require("../util/deviceUtil");

var _orientationMixin = _interopRequireDefault(require("../util/orientationMixin"));

var _stopScrollThroughMixin = _interopRequireDefault(require("../util/stopScrollThroughMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// dom 操作
// 设备信息
// 屏幕翻转 mixin
// 阻止滚动穿透 mixin
var _default = {
  mixins: [_orientationMixin["default"], _stopScrollThroughMixin["default"]],
  mounted: function mounted() {
    this.mounted = true; // 设置 multi 最大高度

    this.setMultiMaxHeight();
  },
  render: function render() {
    // 第一次 render
    if (!this.renderCount) {
      this.renderCount = 0;
      this.init(this.mSelections);
    }

    this.renderCount++;
    return this.$super.render();
  },
  watch: {
    selections: function selections(newVal, oldVal) {
      this.mSelections = newVal;
    }
  },
  methods: {
    /**
     * 初始化，可在主动修改数据时主动调用该方法
     *
     * @param {Array} selections 筛选数据
     * @public
     */
    init: function init(selections) {
      var _this = this;

      if (!selections) {
        selections = this.mSelections;
      } // 遍历所有 selection


      selections.forEach(function (selection, selectionIndex) {
        // 设置原始 text
        selection.originText = selection.text; // 级联类型

        if (selection.type === 'list') {
          // 因为 selection 会变，所以需要把 selection 单独拿出来记住
          var originSelection = selection; // 因为 selection 会变，所以需要把 colum 单独拿出来

          var column = selection.column; // 特殊递归；找出相等的选项

          for (var i = 0; i < column; i++) {
            // 先设置一个初始值
            var selectedOption = null;

            for (var j = 0; j < selection.options.length; j++) {
              // 找到选中项
              if (selection.options[j].value === selection.defaultValue) {
                selectedOption = selection.options[j];
              }
            } // 如果有选中的选项


            if (selectedOption) {
              // 递归；比较特殊的递归方式
              selection = selectedOption; // 设置 Tag 文案

              _this.setTagText(originSelection, selectedOption);
            }
          }
        } // 复合类型
        else if (selection.type === 'multi') {
            // 安排一下
            _this.processMultiSelection(selection);
          } // 排序类型
          else if (selection.type === 'order') {
              // 默认值存在 并且 options 存在
              if ((selection.defaultValue || selection.defaultValue === '') && selection.options) {
                // 遍历选项
                selection.options.forEach(function (option, optionIndex) {
                  // 找出选项相同的项
                  if (option.value === selection.defaultValue) {
                    // 设置文案
                    selection.text = option.text; // 设置加粗

                    selection.selected = true; // 设置方向

                    selection.direction = optionIndex === 0 ? 'up' : 'down';
                  }
                });
              }
            }
      }); // 依次调用子组件的 init()

      this.$nextTick(function () {
        if (_this.$refs.filterFrame) {
          _this.$refs.filterFrame.init();
        }

        var refCascaders = _this.$refs.cascader;

        if (refCascaders) {
          refCascaders.forEach(function (cascader, cascaderIndex) {
            cascader.init();
          });
        }

        var spreadTags = _this.$refs.spreadTag;

        if (spreadTags) {
          spreadTags.forEach(function (spreadTag, spreadTagIndex) {
            spreadTag.init();
          });
        }

        var rangeInputs = _this.$refs.rangeInput;

        if (rangeInputs) {
          rangeInputs.forEach(function (rangeInput, rangeInputIndex) {
            rangeInput.init();
          });
        }
      });
    },
    // 设置 multi 最大高度
    setMultiMaxHeight: function setMultiMaxHeight() {
      if (this.$refs.filterFrame.$el.getBoundingClientRect) {
        // 计算出当前筛选的 dom 距离屏幕底部的距离
        this.toBottomDistance = (0, _domUtil.getScreenHeight)() - this.$refs.filterFrame.$el.getBoundingClientRect().top;
      }

      if (this.multiOpts.maxHeight <= 1) {
        this.multiMaxHeight = ((0, _domUtil.getScreenHeight)() - 44) * this.multiOpts.maxHeight;
      } else {
        this.multiMaxHeight = this.multiOpts.maxHeight;
      } // 取个整


      this.multiMaxHeight = Math.floor(this.multiMaxHeight);
    },
    // 横竖屏切换监听
    mediaQueryOrientationListenerMixin: function mediaQueryOrientationListenerMixin(mediaQueryList) {
      var _this2 = this;

      if (mediaQueryList.matches) {// 竖屏
      } else {} // 横屏
        // 设置 multi 最大高度


      setTimeout(function () {
        _this2.setMultiMaxHeight();
      }, 500);
    },

    /**
     * 设置 selectedIndex
     *
     * @param {number} selectedIndex 需要设置的索引
     */
    setSelectedIndex: function setSelectedIndex(selectedIndex) {
      this.$refs.filterFrame.setSelectedIndex(selectedIndex);
    },
    // Tag Layout 点击
    handleTagLayoutClick: function handleTagLayoutClick(obj) {
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
      this.$emit('taglayoutclick', obj);
      this.setMultiMaxHeight(); // *** 取消还原数据的功能
      // 如果是打开浮层

      if (obj.selectedIndex !== -1 && obj.lastSelectedIndex === -1) {
        // 备份筛选项数据
        this.bakSelections();
      } // 如果再次点击当前 tag 收起浮层，并且 tag 的类型不为排序类型
      else if (obj.selectedIndex === -1 && obj.lastSelectedIndex !== -1 && obj.type !== 'order') {
          // 取消
          this.cancel();
        } // 级联类型


      if (obj.type === 'list') {
        // *** 兼容低版本浏览器
        this.compatibleLowChromeCoreBrower(obj.direction);
      } // 复合类型
      else if (obj.type === 'multi') {} // 排序类型
        else if (obj.type === 'order') {
            // 触发确定事件
            this.confirm();
          }
    },
    // 蒙层点击
    handleMaskClick: function handleMaskClick(obj) {
      /**
       * 蒙层阴影点击
       *
       * @event maskclick
       * @property {object} param1 事件参数
       * @property {number} param1.selectedIndex 选中项的索引
       */
      this.$emit('maskclick', obj); // *** 兼容低版本浏览器

      this.compatibleLowChromeCoreBrower('down'); // *** 取消

      this.cancel();
    },
    // TODO: 兼容低内核浏览器
    compatibleLowChromeCoreBrower: function compatibleLowChromeCoreBrower(direction) {
      var _this3 = this;

      // *** 兼容；如果是低版本内核
      // 修复 Android 低版本浏览器，内核内部 dom overflow: scroll 会影响外层 dom overflow: hidden 的问题
      if ((0, _deviceUtil.isIosSmall)() || (0, _deviceUtil.isLowChrome)()) {
        // 打开浮层
        if (direction === 'up') {
          this.cascaderColumnOverflow = 'hidden'; // 动效做完后改回 auto

          setTimeout(function () {
            _this3.cascaderColumnOverflow = 'auto';
          }, 400);
        } // 关闭浮层
        else if (direction === 'down') {
            this.cascaderColumnOverflow = 'hidden';
          }
      }
    },
    // 级联项点击
    handleCascaderItemClick: function handleCascaderItemClick(obj) {
      /**
       * 级联类型项点击
       *
       * @event cascaderitemclick
       * @property {object} param1 事件参数
       * @property {object} param1.item 点击的级联项
       * @property {object} param1.section 当前筛选项
       */
      this.$emit('cascaderitemclick', obj); // 只有一列

      if (parseInt(obj.item.column, 10) === 1) {
        // 设置标签的文案
        this.setTagText(obj.selection, obj.item.option); // 确定

        this.confirm();
      } // 多列
      else {
          // 做高度变化动效
          this.$refs.filterFrame.setHeight(obj.item.height); // 如果是最后一列

          if (parseInt(obj.item.column, 10) === obj.item.columnIndex + 1) {
            // 设置标签的文案
            this.setTagText(obj.selection, obj.item.option, obj.item.previousOption); // 确定

            this.confirm();
          }
        }
    },
    // 设置标签的文案
    setTagText: function setTagText(selection, option, previousOption) {
      // 值存在或者为空字符串
      if (option.value || option.value === '') {
        // 设置 text
        selection.text = option.text; // 设置加粗

        selection.selected = true;
      } // 如果有上一级的文案
      else if (previousOption) {
          // 设置 text
          selection.text = previousOption.text; // 设置不加粗

          selection.selected = true;
        } // 值为 undefined 或者为 null
        else {
            // 设置 text
            selection.text = selection.originText; // 设置不加粗

            selection.selected = false;
          }
    },
    // 展开收起改变事件（点击后的 nextTick）
    handleSpreadChange: function handleSpreadChange(obj) {
      var multiWrapper = this.$refs['multiWrapper' + obj.selectionIndex][0]; // 拿到之前的高度

      var oldHeight = multiWrapper.offsetHeight; // 计算出新的高度

      var newHeight = oldHeight + obj.params.diffHeight; // 拿到当前展开收起的状态

      var spread = obj.params.spread; // 展开；只有展开的时候才计算，因为收起的时候会有减法，不准确

      if (spread) {
        // 保存收起高度
        obj.selection.foldHeight = oldHeight; // 保存展开高度

        obj.selection.spreadHeight = newHeight; // 如果展开高度大于最大高度

        if (obj.selection.spreadHeight > this.multiMaxHeight) {
          // 将展开高度设置为最大高度
          obj.selection.spreadHeight = this.multiMaxHeight;
        }
      } // 只有在没有占满最大高度的时候才主动设置 Content 的高度


      if (obj.selection.foldHeight < this.multiMaxHeight) {
        // 设置高度
        this.$refs.filterFrame.setHeight(spread ? obj.selection.spreadHeight : obj.selection.foldHeight);
      }
    },
    // 选项点击
    handleSpreadTagsItemClick: function handleSpreadTagsItemClick(obj) {
      // 设置对应 key 的值
      obj.option.defaultValue = obj.tagItem.valueStr;
      obj.e = obj.tagItem.e;
      /**
       * 复合类型，二级项点击
       *
       * @event spreadtagsitemclick
       * @property {object} param1 事件参数
       * @property {object} param1.option 点击的一级选项
       * @property {number} param1.optionIndex 点击的一级选项的索引
       * @property {object} param1.section 当前筛选项的实例
       * @property {object} param1.tagItem 点击的二级选项
       */

      this.$emit('spreadtagsitemclick', obj); // 如果是单选，并且传入了隐藏按钮栏的标识，直接确定

      if (obj.option.type === 'radio' && obj.selection.hideBtnLayout) {
        this.confirm();
      }
    },
    // 范围输入框改变
    handleRangeInputChange: function handleRangeInputChange(obj) {
      // 按 , 分隔
      var defaultValueArr = obj.option.defaultValue ? obj.option.defaultValue.split(',').map(function (item) {
        return item.trim();
      }) : []; // 如果没有最小值，设置最小值

      if (!obj.option.minValue && defaultValueArr.length > 0) {
        obj.option.minValue = defaultValueArr[0];
      } // 如果没有最大值，设置最大值


      if (!obj.option.maxValue && defaultValueArr.length > 1) {
        obj.option.maxValue = defaultValueArr[1];
      } // 设置最小值


      if (obj.type === 'min') {
        obj.option.minValue = obj.value;
      } // 设置最大值


      if (obj.type === 'max') {
        obj.option.maxValue = obj.value;
      } // 设置值


      obj.option.defaultValue = obj.option.minValue + ',' + obj.option.maxValue; // 如果是 ','，需要特殊处理一下

      if (!obj.option.minValue && !obj.option.maxValue) {
        obj.option.defaultValue = '';
      }
    },
    // 按钮栏点击
    handleBtnLayoutClick: function handleBtnLayoutClick(obj) {
      // 重置
      if (obj.btnLayoutObj.index === 0) {
        /**
         * 复合类型，重置按钮点击
         *
         * @event spreadtagsitemclick
         * @property {object} param1 事件参数
         * @property {object} param1.btnLayoutObj 按钮栏相关的值
         * @property {object} param1.section 当前筛选项的实例
         * @property {number} param1.sectionIndex 当前筛选项的索引
         */
        this.$emit('btnresetclick', obj);
        this.reset(obj.selection.options);
      } // 确定
      else if (obj.btnLayoutObj.index === 1) {
          // 复合
          if (obj.selection.type === 'multi') {
            var isOk = true;
            obj.selection.options.forEach(function (option, optionIndex) {
              // 范围输入时需要校验输入值
              if (option.type === 'rangeInput') {
                var err = option.vnode.check();

                if (err.errno !== 0) {
                  isOk = false;
                }
              }
            });
            isOk && this.confirm();
          }
        }
    },
    // 处理 multi 类型数据
    processMultiSelection: function processMultiSelection(selection) {
      if (!selection) {
        return;
      } // 遍历


      for (var i = 0; i < selection.options.length; i++) {
        var option = selection.options[i]; // 如果有默认值

        if (option.defaultValue) {
          // 设置加粗
          selection.selected = true;
          return;
        }
      } // 设置不加粗


      selection.selected = false;
    },
    // 重置
    reset: function reset(options) {
      var _this4 = this;

      options.forEach(function (option, optionIndex) {
        // 清空默认值
        option.defaultValue = ''; // radio / checkbox

        if ((option.type === 'radio' || option.type === 'checkbox') && option.options) {
          option.options.forEach(function (option2, option2Index) {
            _this4.$set(option2, 'selected', false);
          });
        } // 范围输入
        else if (option.type === 'rangeInput') {
            // 调用 vnode 的 reset 方法
            option.vnode.reset();
          }
      });
    },
    // 确定
    confirm: function confirm() {
      // 关闭浮层
      this.$refs.filterFrame.close(); // 兼容；如果是低版本内核；修复 Android 低版本浏览器内核 内部 dom overflow: scroll 会影响外层 dom overflow: hidden 的问题；

      if ((0, _deviceUtil.isIosSmall)() || (0, _deviceUtil.isLowChrome)()) {
        // 设置级联列的 overflow 为 hidden
        this.cascaderColumnOverflow = 'hidden';
      } // 计算最后要传出的参数


      var allResults = {};
      this.mSelections.forEach(function (selection, selectionIndex) {
        // 级联
        if (selection.type === 'list') {
          var selectedData = selection.vnode.getSelectedData();
          Object.keys(selectedData).forEach(function (key, keyIndex) {
            allResults[key] = selectedData[key];
          });
        } // 复合
        else if (selection.type === 'multi') {
            // 该 selection 是否被加粗；默认不加粗
            var selected = false;
            selection.options.forEach(function (option, optionIndex) {
              // 放入键值对
              allResults[option.key] = option.defaultValue || '';

              if (option.defaultValue) {
                // 加粗
                selected = true;
              }
            }); // 设置加粗

            selection.selected = selected;
          } // 排序
          else if (selection.type === 'order') {
              // 箭头向上
              if (selection.direction === 'up') {
                // 设置文案
                if (selection.options && selection.options[0]) {
                  selection.text = selection.options[0].text;
                  selection.defaultValue = selection.options[0].value;
                }
              } // 箭头向下
              else if (selection.direction === 'down') {
                  // 设置文案
                  if (selection.options && selection.options[1]) {
                    selection.text = selection.options[1].text;
                    selection.defaultValue = selection.options[1].value;
                  }
                } // 放入键值对


              allResults[selection.key] = selection.defaultValue || '';
            }
      });
      this.$emit('change', {
        allResults: allResults
      });
    },
    // 取消
    cancel: function cancel() {
      // 遍历筛选项
      this.mSelections.forEach(function (selection, selectionIndex) {
        // 如果是复合
        if (selection.type === 'multi') {
          // 遍历项
          selection.options.forEach(function (option, optionIndex) {
            // 从备份中还原
            option.defaultValue = option.defaultValueBak || ''; // 单选/多选

            if (option.type === 'radio' || option.type === 'checkbox') {
              option.vnode && option.vnode.setDefaultValue(option.defaultValue);
            } // 范围输入
            else if (option.type === 'rangeInput') {
                option.vnode && option.vnode.setDefaultValue(option.defaultValue);
              }
          });
        }
      });
    },

    /**
     * 关闭蒙层
     */
    close: function close() {
      this.$refs.filterFrame.close();
    },
    handleMultiTouchStart: function handleMultiTouchStart(obj) {
      if (!this.stopScrollThrough) {
        return;
      }

      this.handleTouchStartStopScrollThroughMixin(obj.e);
    },
    handleMultiTouchMove: function handleMultiTouchMove(obj) {
      if (!this.stopScrollThrough) {
        return;
      }

      var multi = this.$refs['multi' + obj.selectionIndex][0];
      this.handleTouchMoveStopScrollThroughMixin(obj.e, multi);
    },
    // 备份筛选项数据
    bakSelections: function bakSelections() {
      // 遍历筛选项
      this.mSelections.forEach(function (selection, selectionIndex) {
        // 如果是复合
        if (selection.type === 'multi') {
          // 遍历项
          selection.options.forEach(function (option, optionIndex) {
            // 备份值
            option.defaultValueBak = option.defaultValue || '';
          });
        }
      });
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"multi":"multi__1kbyr","multiInner":"multi-inner__1wirr","btnLayout":"btn-layout__tH-7u"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"selections": {"type": Array,"default": function () { return []; },"required": true},"multiOpts": {"type": Object,"default": function () { return {"maxHeight": 0.7}; }},"rowTile": {"type": Boolean,"default": true},"stopScrollThrough": {"type": Boolean,"default": true},"showMask": {"type": Boolean,"default": true},"zIndex": [Number,String],"primaryColor": String};
            obj.components = {"c-filter-frame": require("../FilterEnhanced/FilterFrame"),"c-cascader": require("../Cascader/Cascader"),"c-spread-tags": require("../Tags/SpreadTags"),"c-range-input": require("../Input/RangeInput"),"c-btn-layout": require("../Button/BtnLayout")};

            
            

            


            
            obj.data = function () {
                return {"mSelections": this["selections"],"multiMaxHeight": 999999,"cascaderColumnOverflow": "auto","toBottomDistance": 0};
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
    