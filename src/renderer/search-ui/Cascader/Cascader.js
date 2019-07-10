
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"cascader",staticClass:"cascader__1A6uD",attrs:{"data-module":"c-cd"}},_vm._l((_vm.math_ceil(_vm.column)),function(columnItem,columnIndex){return _c('div',{key:columnIndex,ref:"column",refInFor:true,staticClass:"column__24SKZ",class:[
            columnIndex == 1
                ? _vm.$style.column1
                : ''
        ],style:([
            {
                overflow: _vm.columnOverflow
            },
            columnIndex != 0
                ? {
                    'background-color': '#fff'
                }
                : {}
        ]),on:{"touchstart":function($event){_vm.handleTouchStart({
            e: $event,
            columnIndex: columnIndex
        })},"touchmove":function($event){_vm.handleTouchMove({
            e: $event,
            columnIndex: columnIndex
        })}}},[(_vm.list[columnIndex] && _vm.list[columnIndex].options)?(_vm._l((_vm.list[columnIndex].options),function(option,optionIndex){return _c('div',{key:optionIndex,staticClass:"option__2mj_n c-font-normal c-gap-inner-top c-gap-inner-bottom c-line-bottom WA_LOG_BTN",style:([
                    {
                        color: _vm.defaultColor
                    },
                    _vm.column == 1
                        ? {
                            'background-color': '#fff'
                        }
                        : {},
                    _vm.column > 1 && columnIndex > 0
                        ? {
                            'background-color': '#fff',
                            'border-color': '#fff'
                        }
                        : {},
                    _vm.column > 1 && columnIndex == 1 && option.selected
                        ? {
                            'box-shadow': '-1px 0 0 0 #eee'
                        }
                        : {},
                    option.selected
                        ? {
                            'background-color': '#fff',
                            'color': _vm.selectedColor,
                            'font-weight': 'bold'
                        }
                        : {}
                ]),on:{"click":function($event){_vm.handleOptionClick({
                    column: _vm.column,
                    columnIndex: columnIndex,
                    option: option,
                    optionIndex: optionIndex,
                    options: _vm.list[columnIndex].options
                })}}},[_c('div',[_c('span',{staticClass:"c-line-clamp1",class:[
                            (_vm.column == 1 && option.selected)
                                ||
                                (_vm.column == 2 && columnIndex > 0 && option.selected)
                                ? 'c-gap-inner-right-large'
                                : ''
                        ]},[_vm._v("\n                        "+_vm._s(option.text)+"\n                    ")]),_vm._v(" "),(
                            (_vm.column == 1 && option.selected)
                                ||
                                (_vm.column == 2 && columnIndex > 0 && option.selected)
                        )?(_c('c-icon',{staticClass:"icon__3aSz9",attrs:{"type":"check"}})):(_vm._e())],1),_vm._v(" "),(option.extend)?(_c('div',{staticClass:"c-font-small c-line-clamp1 c-color-gray"},[_vm._v("\n                    "+_vm._s(option.extend)+"\n                ")])):(_vm._e())])})):(_vm._e())],2)}))},
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

var _stopScrollThroughMixin = _interopRequireDefault(require("../util/stopScrollThroughMixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// dom 操作
// 阻止滚动穿透 mixin
var _default = {
  mixins: [_stopScrollThroughMixin["default"]],
  mounted: function mounted() {
    this.init(this.options);
  },
  methods: {
    /**
     * 初始化，可在主动修改数据时主动调用该方法
     *
     * @param {Array} options 筛选数据
     * @public
     */
    init: function init(options) {
      if (!options) {
        options = this.options;
      } // 这里要把 list 重新初始化下


      this.list = [{
        options: options
      }]; // 深复制下

      this.deepCopy && this.$set(this.list[0], 'options', JSON.parse(JSON.stringify(options))); // 如果外部实例 ins 存在

      if (this.ins) {
        // 把 vnode 挂载到外部实例上去
        this.ins.vnode = this;
      } // 如果默认值存在


      if (this.defaultValue !== undefined) {
        if (this.defaultValueType === 'combine') {
          // 设置默认值；combine；这种遍历方式适合默认值设置在一起用逗号区分的情况
          this.setDefaultValueCombine(this.defaultValue, this.list[0].options);
        } else {
          // 设置默认值；separate；这种遍历方式适合每一级单独设置默认值的情况
          this.setDefaultValueSeparate(this.defaultValue, this.list[0].options);
        }
      }
    },
    // otpion 点击事件
    handleOptionClick: function handleOptionClick(obj) {
      var _this = this;

      // 只有一列
      if (parseInt(obj.column, 10) === 1) {
        // TODO: 设置选中项
        // 清空所有项
        obj.options.forEach(function (option, optionIndex) {
          _this.$set(option, 'selected', false);
        }); // 设置选中项

        this.$set(obj.option, 'selected', true); // TODO: 触发最后一列点击事件

        this.emitLastColumnItemClickEvent(obj);
      } // 多列
      else {
          // TODO: 设置选中项
          // 清空所有项
          obj.options.forEach(function (option, optionIndex) {
            _this.$set(option, 'selected', false);
          }); // 设置选中项

          this.$set(obj.option, 'selected', true); // TODO: 设置子选项
          // 如果选中的 otpion 还有子 options 存在

          if (obj && obj.option && obj.option.options) {
            // 设置子 options
            this.$set(this.list, obj.columnIndex + 1, {
              options: obj.option.options
            }); // 在切换前一层级的 option 时，后一层级的需要进行清空操作

            this.clearColumn(obj.columnIndex + 2);
          } // 如果选中的 option 没有有子 options
          else {
              // 清除列
              this.clearColumn(obj.columnIndex + 1);
            } // TODO: 设置之前项
          // 如果列数不是第0列，那么它一定有之前项


          if (obj.columnIndex !== 0) {
            this.list[obj.columnIndex - 1].options.forEach(function (option, optionIndex) {
              if (option.selected) {
                // 设置之前项
                obj.previousOption = option;
                obj.previousOptionIndex = optionIndex;
                obj.previousColumnIndex = obj.columnIndex - 1;
                return;
              }
            });
          } // TODO: 如果是最后一列


          if (parseInt(obj.column, 10) === obj.columnIndex + 1) {
            /* eslint-disable max-len */
            // TODO: 清空所有选中项除了当前选中的项
            this.clearAllSelectedExceptCurSelected(this.options, obj.columnIndex, 0, obj.optionIndex, obj.option.value, obj.option.text);
            /* eslint-enable max-len */
            // TODO: 触发最后一列点击事件

            this.emitLastColumnItemClickEvent(obj);
          }
        } // 之前的高度


      var heightBefore = this.$refs.cascader.offsetHeight;
      this.$nextTick(function () {
        // 计算级联高度
        var height = _this.getHeight(); // 需要传递的参数
        // vnode 实例


        obj.vnode = _this; // 高度

        obj.height = height; // 触发事件，这里事件触发放在 nextTick 里是因为需要在事件的参数里带上高度字段

        /**
         * 项点击事件
         *
         * @event itemclick
         * @property {object} param1 点击项信息
         * @property {number} param1.column 列数
         * @property {number} param1.columnIndex 当前列数的索引
         * @property {number} param1.optionIndex 当前选中项索引
         * @property {Object} param1.option 当前选中项
         * @property {Object[]} param1.options 当前列选中项数组
         * @property {Object} param1.vnode 级联选择器`vnode`实例
         * @property {number} param1.height 级联选择器高度
         */

        _this.$emit('itemclick', obj); // 给每一列设置高度


        _this.$refs.column.forEach(function (columnItem, columnIndex) {
          _this.setHeight(columnItem, height, heightBefore);
        });
      });
    },
    // 触发最后一列项点击事件
    emitLastColumnItemClickEvent: function emitLastColumnItemClickEvent(obj) {
      /**
       * 最后一列项点击事件
       *
       * @event lastcolumnitemclick
       * @property {object} param1 同`itemclick`事件
       */
      this.$emit('lastcolumnitemclick', obj);
    },
    // 清除列（包括起始和结束列）
    clearColumn: function clearColumn(startColumnIndex, endColumnIndex) {
      var _this2 = this;

      // 默认 endColumnIndex 为 column - 1
      if (!endColumnIndex) {
        endColumnIndex = this.column - 1;
      } // 遍历 list


      this.list.forEach(function (listItem, listIndex) {
        // 如果 listIndex > 选中的列 +1 && listIndex < 总列数
        if (listIndex >= startColumnIndex && listIndex <= endColumnIndex) {
          // 清空该列的数据
          _this2.$set(_this2.list, listIndex, null);
        }
      });
    },

    /**
     * 清空所有选中项除了当前选中的项
     *
     * @param {Array} options 选项数组
     * @param {number} columnIndex 改变的列的索引
     * @param {number} curColumnIndex 当前递归的列的索引
     * @param {number} selectedOptionIndex 当前选中项的索引
     * @param {string} selectedOptionValue 当前选中项的值
     * @param {string} selectedOptionText 当前选中项的显示文案
     */

    /* eslint-disable max-len */
    clearAllSelectedExceptCurSelected: function clearAllSelectedExceptCurSelected(options, columnIndex, curColumnIndex, selectedOptionIndex, selectedOptionValue, selectedOptionText) {
      var _this3 = this;

      /* eslint-enable max-len */
      // 如果 options 不存在，或者不是数组，直接返回
      if (!options || !(options instanceof Array)) {
        return;
      } // 遍历


      options.forEach(function (option, optionIndex) {
        // 如果在同一层级
        if (curColumnIndex === columnIndex) {
          /* eslint-disable max-len */
          // 如果遍历到的选项和当前选项不是同一个选项时，除了索引要比较，显示文案和值也要比较
          if (optionIndex !== selectedOptionIndex || option.value !== selectedOptionValue || option.text !== selectedOptionText) {
            // 选中态置为 false
            _this3.$set(option, 'selected', false);
          }
          /* eslint-enable max-len */

        } else {
          // 层级 +1 后递归
          _this3.clearAllSelectedExceptCurSelected(option.options, columnIndex, curColumnIndex + 1, selectedOptionIndex, selectedOptionValue, selectedOptionText);
        }
      });
    },
    // 得到高度
    getHeight: function getHeight() {
      return this.$refs.cascader ? this.$refs.cascader.offsetHeight : 0;
    },
    // 设置高度
    setHeight: function setHeight(dom, height, heightBefore) {
      // 清除动效
      (0, _domUtil.clearDomTransition)(dom); // 设置高度

      dom.style.height = heightBefore + 'px'; // 强制触发视图更新

      dom.offsetHeight; // 添加动效

      (0, _domUtil.addDomTransition)(dom, this.transitionOpts.heightTransition); // 设置高度

      dom.style.height = height + 'px'; // 动效结束后重新设置高度

      setTimeout(function () {
        dom.style.height = 'auto';
      }, 300);
    },
    // 设置默认值；combine
    setDefaultValueCombine: function setDefaultValueCombine(defaultValue, options, count, defaultValueArr) {
      var _this4 = this;

      if (count === undefined) {
        count = 0;
      }

      if (!options) {
        return;
      }

      if (!defaultValueArr) {
        defaultValueArr = defaultValue.split(',').map(function (item) {
          return item.trim();
        });
      } // 遍历找出值相等的项


      options.forEach(function (option, optionIndex) {
        // 如果值相等
        if (option.value === defaultValueArr[count]) {
          // 设置选中
          _this4.$set(option, 'selected', true); // 如果选中的 otpion 还有子 options 存在


          if (option && option.options) {
            // 级数加1
            count++; // 设置子 options

            _this4.$set(_this4.list, count, {
              options: option.options
            }); // 递归


            _this4.setDefaultValueCombine(option.defaultValue, option.options, count, defaultValueArr);
          }
        }
      });
    },
    // 设置默认值；separate
    setDefaultValueSeparate: function setDefaultValueSeparate(defaultValue, options, count) {
      var _this5 = this;

      if (count === undefined) {
        count = 0;
      }

      if (!options) {
        return;
      } // 遍历找出值相等的项


      options.forEach(function (option, optionIndex) {
        // 如果值相等
        if (option.value === defaultValue) {
          // 设置选中
          _this5.$set(option, 'selected', true); // 如果选中的 otpion 还有子 options 存在


          if (option && option.options) {
            // 级数加1
            count++; // 设置子 options

            _this5.$set(_this5.list, count, {
              options: option.options
            }); // 递归


            _this5.setDefaultValueSeparate(option.defaultValue, option.options, count);
          }
        } else {
          // 设置不选中
          _this5.$set(option, 'selected', false);
        }
      });
    },
    // 获得选中的数据
    getSelectedData: function getSelectedData() {
      var selectedData = {}; // 递归

      this.getSelectedDataRecursion(this.options, this.ins ? this.ins.key : '', selectedData);
      return selectedData;
    },
    // 获得选中的数据；递归
    getSelectedDataRecursion: function getSelectedDataRecursion(options, key, selectedData) {
      var _this6 = this;

      options.forEach(function (option, optionIndex) {
        // 如果选中
        if (option.selected) {
          // 设置对应键值对
          selectedData[key] = option.value; // 级联

          if (option.options) {
            // 递归
            _this6.getSelectedDataRecursion(option.options, option.key, selectedData);
          } // 直接返回代表只取一个


          return selectedData;
        }
      });
      return selectedData;
    },
    // TODO: 解决浮层滚动穿透的问题
    // 列触摸开始
    handleTouchStart: function handleTouchStart(obj) {
      if (this.stopScrollThrough) {
        this.handleTouchStartStopScrollThroughMixin(obj.e);
      }
    },
    // 列触摸滑动
    handleTouchMove: function handleTouchMove(obj) {
      if (this.stopScrollThrough) {
        this.handleTouchMoveStopScrollThroughMixin(obj.e, this.$refs.column[obj.columnIndex]);
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"cascader":"cascader__1A6uD","column":"column__24SKZ","column1":"column1__1dlyd","option":"option__2mj_n","icon":"icon__3aSz9"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"column": {"type": [Number,String],"default": 1},"columnOverflow": {"type": String,"default": "auto"},"defaultValue": String,"defaultValueType": {"type": String,"default": "separate"},"ins": Object,"defaultColor": {"type": String,"default": "#666"},"selectedColor": {"type": String,"default": "#333"},"options": Array,"transitionOpts": {"type": Object,"default": function () { return {"heightTransition": "height .3s cubic-bezier(0.4, 0.0, 0.2, 1)"}; }},"stopScrollThrough": {"type": Boolean,"default": false},"deepCopy": {"type": Boolean,"default": true}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"list": [{"options": this["options"]}],"height": "auto"};
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
    