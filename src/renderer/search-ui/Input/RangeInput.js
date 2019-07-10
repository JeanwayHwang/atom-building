
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"range-input"},[_c('c-spread-tags',{ref:"spreadTag",attrs:{"options":_vm.options,"label":_vm.label,"spread-opts":_vm.spreadOpts,"force-check":_vm.forceCheck,"margin-inner":_vm.marginInner,"primary-color":_vm.primaryColor},on:{"itemclick":_vm.handleItemClick,"spreadchange":_vm.handleSpreadChange}},[_c('div',[_c('c-row',{staticClass:"input-row c-gap-bottom-small"},[_c('c-span',[_c('c-input',{ref:"minInput",attrs:{"value":_vm.minValue,"right-text":_vm.unit,"is-show-close-icon":_vm.unit
                            ? false
                            : true,"padding-right":_vm.unit
                            ? '.3rem'
                            : '',"placeholder":_vm.min.placeholder,"primary-color":_vm.primaryColor,"padding-wrapper":"0 1px"},on:{"change":function($event){_vm.handleInputChange({
                            value: $event.value,
                            type: 'min'
                        })}}})],1),_vm._v(" "),_c('span',{staticClass:"split-line__PSGeW"}),_vm._v(" "),_c('c-span',[_c('c-input',{ref:"maxInput",attrs:{"value":_vm.maxValue,"right-text":_vm.unit,"is-show-close-icon":_vm.unit
                            ? false
                            : true,"padding-right":_vm.unit
                            ? '.3rem'
                            : '',"placeholder":_vm.max.placeholder,"primary-color":_vm.primaryColor,"padding-wrapper":"0 1px"},on:{"change":function($event){_vm.handleInputChange({
                            value: $event.value,
                            type: 'max'
                        })}}})],1)],1),_vm._v(" "),(_vm.isShowErrorTips && _vm.errorTips)?(_c('div',{staticClass:"c-color-red c-gap-bottom",style:({
                    'text-align': 'center'
                })},[_vm._v("\n                "+_vm._s(_vm.errorTips)+"\n                "),(_vm.errmsg)?(_c('span',{staticClass:"errmsg__22Fn3"},[_vm._v("\n                    "+_vm._s(_vm.errmsg)+"\n                ")])):(_vm._e())])):(_vm._e())],1)])],1)},
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
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      // 如果外部实例 ins 存在
      if (this.ins) {
        // 把 vnode 挂载到外部实例上去
        this.ins.vnode = this;
      } // 处理数据


      this.options.forEach(function (option, optionIndex) {
        // 去除 value 里的所有空格
        option.value = option.value.replace(/ /g, '');
      }); // 处理默认值

      this.setDefaultValue(this.defaultValue);
    },
    // 展开收起状态改变后触发的回调
    handleSpreadChange: function handleSpreadChange(obj) {
      /**
       * 展开收起状态改变后触发的回调
       *
       * @event spreadchange
       * @property {boolean} spread 是否展开
       * @property {string} type 当前展开收起的类型
       * @property {number} height 当前高度
       * @property {number} diffHeight 相较于上一次变化的高度，主要用来配合外侧元素动态计算高度
       */
      this.$emit('spreadchange', obj);
    },
    // 选项点击事件
    handleItemClick: function handleItemClick(obj) {
      var value = obj.clickItem.value;

      if (value) {
        var valueArr = value.split(',').map(function (item) {
          return item.trim();
        });

        if (valueArr.length === 2) {
          this.minValue = valueArr[0];
          this.maxValue = valueArr[1];
        }
      }
    },
    // 输入框改变事件
    handleInputChange: function handleInputChange(obj) {
      // 隐藏错误提示
      this.hideErrorTips();
      /**
       * 改变事件
       *
       * @event change
       * @property {string} param1.value 值
       * @property {string} param1.type 类型：min（最小值）；max（最大值）
       */

      this.$emit('change', obj); // 最小值

      if (obj.type === 'min') {
        this.mMinValue = obj.value;
      } // 最大值
      else if (obj.type === 'max') {
          this.mMaxValue = obj.value;
        } // 更新下面的 Tags


      this.updateTags();
    },
    // 更新 Tags
    updateTags: function updateTags() {
      var _this = this;

      var minMaxStr = this.mMinValue + ',' + this.mMaxValue;
      this.options.forEach(function (option, optionIndex) {
        if (minMaxStr === option.value) {
          _this.$set(option, 'selected', true);
        } else {
          _this.$set(option, 'selected', false);
        }
      });
    },

    /**
     * 处理默认值
     *
     * @public
     * @param {string} defaultValue 默认值，多个时用`,`分隔
     */
    setDefaultValue: function setDefaultValue(defaultValue) {
      // 处理默认值
      if (defaultValue) {
        // 按 , 分隔
        var defaultValueArr = defaultValue.split(',').map(function (item) {
          return item.trim();
        });

        if (defaultValueArr.length > 0) {
          // 设置最小值
          this.minValue = defaultValueArr[0];

          if (defaultValueArr.length > 1) {
            // 设置最大值
            this.maxValue = defaultValueArr[1];
          }
        }
      } else {
        this.reset();
      }
    },

    /**
     * 检查是否有输入框错误的问题，返回值 err 为错误对象；err.errno 错误代码，err.errmsg 错误信息；对照关系如下表
     *   | errno | errmsg |
     *   | --- | --- |
     *   | 0 | |
     *   | 1 | 最小值不是数字 |
     *   | 2 | 最大值不是数字 |
     *   | 3 | 最小值大于最大值 |
     *   | 4 | 最小值为负数 |
     *   | 5 | 最大值为负数 |
     *
     * @public
     * @return {Object} err 错误对象；
     */
    check: function check() {
      var err = {
        // 错误码
        errno: 0,
        // 错误信息
        errmsg: ''
      };

      if (isNaN(this.mMinValue)) {
        err.errno = 1;
        err.errmsg = '最小值不是数字';
      } else if (isNaN(this.mMaxValue)) {
        err.errno = 2;
        err.errmsg = '最大值不是数字';
      } else if (Number(this.mMinValue, 10) > Number(this.mMaxValue, 10)) {
        err.errno = 3;
        err.errmsg = '最小值大于最大值';
      } // 负数校验
      // 不允许传负数时
      else if (!this.allowMinus) {
          if (this.mMinValue < 0) {
            err.errno = 4;
            err.errmsg = '最小值为负数';
          } else if (this.mMaxValue < 0) {
            err.errno = 5;
            err.errmsg = '最大值为负数';
          }
        } // 如果有错误，显示错误提示


      if (err.errno !== 0) {
        this.errmsg = err.errmsg;
        this.showErrorTips();
      } // 隐藏错误提示
      else {
          this.errmsg = '';
          this.hideErrorTips();
        }

      return err;
    },

    /**
     * 重置
     *
     * @public
     */
    reset: function reset() {
      // 注：设置值也会触发 input 的 change 事件
      this.minValue = '';
      this.maxValue = '';
      this.mMinValue = '';
      this.mMaxValue = '';
      this.$refs.minInput.setValue('');
      this.$refs.maxInput.setValue('');
    },
    // 显示错误提示
    showErrorTips: function showErrorTips() {
      this.isShowErrorTips = true;
    },
    // 隐藏错误提示
    hideErrorTips: function hideErrorTips() {
      this.isShowErrorTips = false;
    }
  },
  watch: {
    minValue: function minValue(newVal, oldVal) {
      this.mMinValue = newVal;
    },
    maxValue: function maxValue(newVal, oldVal) {
      this.maxValue = newVal;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"splitLine":"split-line__PSGeW","errmsg":"errmsg__22Fn3"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"label": String,"defaultValue": String,"unit": String,"allowMinus": {"type": Boolean,"default": false},"errorTips": {"type": String,"default": "错误提示："},"min": {"type": Object,"default": function () { return {"placeholder": ""}; }},"max": {"type": Object,"default": function () { return {"placeholder": ""}; }},"ins": Object,"spreadOpts": {"type": Object,"default": function () { return {"show": true,"spread": false,"threshold": 2,"paddingBottom": ".05rem","touchableFeedbackBottom": -0.05}; }},"options": {"type": Array,"default": function () { return []; }},"forceCheck": {"type": Boolean,"default": false},"marginInner": {"type": String,"default": ""},"primaryColor": String};
            obj.components = {"c-row": require("../Row/Row"),"c-span": require("../Row/Span"),"c-input": require("../Input/Input"),"c-spread-tags": require("../Tags/SpreadTags")};

            
            

            


            
            obj.data = function () {
                return {"minValue": "","maxValue": "","mMinValue": "","mMaxValue": "","isShowErrorTips": false,"errmsg": ""};
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
    