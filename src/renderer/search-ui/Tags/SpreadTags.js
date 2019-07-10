
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spread-tag"},[(_vm.label
            && !_vm.spreadOpts.show
        )?(_c('div',{staticClass:"c-gap-inner-top c-gap-inner-bottom"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")])):(_vm._e()),_vm._v(" "),_c('c-spread',{attrs:{"top-btn":{
            isShow: _vm.spreadOpts.show,
            leftText: _vm.label,
            spreadText: '',
            foldText: '',
            paddingTop: _vm.spreadOpts.paddingTop,
            paddingBottom: _vm.spreadOpts.paddingBottom,
            touchableFeedbackTop: _vm.spreadOpts.touchableFeedbackTop,
            touchableFeedbackBottom: _vm.spreadOpts.touchableFeedbackBottom
        },"bottom-btn":{
            isShow: false
        },"spread":_vm.spreadOpts.spread,"threshold":_vm.spreadOpts.threshold},on:{"spreadbtnclick":_vm.handleSpreadBtnClick,"change":_vm.handleSpreadChange}},[_vm._t("default"),_vm._v(" "),_vm._l((_vm.rowNum),function(row,rowIndex){return _c('c-row',{key:rowIndex,class:[
                rowIndex !== 0
                    ? 'c-gap-inner-top'
                    : ''
            ]},[_vm._l((_vm.options),function(option,optionIndex){return (
                    optionIndex >= rowIndex * _vm.column
                        && optionIndex < (rowIndex + 1) * _vm.column
                )?(_c('c-span',{key:rowIndex + '_' + optionIndex,attrs:{"col":_vm.col}},[_c('c-tag-item',{style:([
                        _vm.marginInner
                            ? {
                                margin: _vm.marginInner
                            }
                            : {}
                    ]),attrs:{"text":option.text,"icon":option.icon,"type":_vm.type,"size":_vm.size,"theme":_vm.theme,"selected":option.selected,"force-check":_vm.forceCheck,"selected-color":_vm.primaryColor},on:{"click":function($event){_vm.handleTagItemClick(
                        {
                            e: $event,
                            option: option,
                            optionIndex: optionIndex
                        }
                    )}}})],1)):(_vm._e())}),_vm._v(" "),(
                    rowIndex == (_vm.rowNum - 1)
                        && (_vm.options.length % _vm.column) !== 0
                )?(_vm._l(((_vm.column - (_vm.options.length % _vm.column))),function(placeholder,placeholderIndex){return _c('c-span',{key:rowIndex + '_' + placeholderIndex,attrs:{"col":_vm.col}})})):(_vm._e())],2)})],2)],1)},
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
    // 设置默认值
    this.init();
  },
  methods: {
    init: function init() {
      // 设置默认值
      this.setDefaultValue(this.defaultValue); // 如果外部实例 ins 存在

      if (this.ins) {
        // 把 vnode 挂载到外部实例上去
        this.ins.vnode = this;
      }
    },
    // 设置默认值
    setDefaultValue: function setDefaultValue(defaultValue) {
      var _this = this;

      // 如果没有默认值
      if (!defaultValue) {
        this.options.forEach(function (option, optionIndex) {
          _this.$set(option, 'selected', false);
        });
      } // 单选


      if (this.type === 'radio') {
        this.options.forEach(function (option, optionIndex) {
          if (option.value === defaultValue) {
            _this.$set(option, 'selected', true);
          } else {
            _this.$set(option, 'selected', false);
          }
        });
      } // 多选
      else if (this.type === 'checkbox') {
          var defaultValueArr = defaultValue.split(',').map(function (item) {
            return item.trim();
          });
          this.options.forEach(function (option, optionIndex) {
            _this.$set(option, 'selected', false);

            if (defaultValueArr.indexOf(option.value) !== -1) {
              _this.$set(option, 'selected', true);
            }
          });
        }
    },
    // 展开收起按钮点击事件
    handleSpreadBtnClick: function handleSpreadBtnClick(obj) {
      /**
       * 展开收起按钮点击事件
       *
       * @event spreadbtnclick
       * @property {boolean} lastSpread 上一次展开收起的状态，true 展开，false 收起
       */
      this.$emit('spreadbtnclick', obj);
    },
    // 展开收起改变事件（点击后的 nextTick）
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
    // 标签项点击事件
    handleTagItemClick: function handleTagItemClick(obj) {
      var _this2 = this;

      // 单选
      if (this.type === 'radio') {
        this.options.forEach(function (option, optionIndex) {
          _this2.$set(option, 'selected', false);
        });
        this.$set(obj.option, 'selected', true);
      } // 多选
      else {
          if (!obj.option.selected) {
            this.$set(obj.option, 'selected', true);
          } else {
            this.$set(obj.option, 'selected', false);
          }
        }

      var selectedArr = [];
      var valueArr = [];
      this.options.forEach(function (item, index) {
        if (item.selected) {
          selectedArr.push(index);
          valueArr.push(item.value);
        }
      });
      var valueStr = valueArr.join(',');
      /**
       * click event.
       *
       * @event itemclick
       * @property {object} param1 选项
       * @property {number} param1.indexnumber 选项的索引
       * @property {function} param1.typestring 选项的类型
       * @property {function} param1.selectedArrarray 选中项索引的数组
       * @property {function} param1.valueArrarray 选中项值的数组
       * @property {function} param1.valueStrstring 选中项值的字符串，以','分隔
       * @property {function} param1.clickItemobject 被点击的项
       */

      this.$emit('itemclick', {
        e: obj.e,
        index: obj.optionIndex,
        clickItem: obj.option,
        type: this.type,
        selectedArr: selectedArr,
        valueArr: valueArr,
        valueStr: valueStr
      });
    }
  },
  computed: {
    // 计算行数
    rowNum: function rowNum() {
      return Math.ceil(this.options.length / (12 / this.col));
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"label": String,"type": {"type": String,"default": "radio"},"defaultValue": String,"spreadOpts": {"type": Object,"default": function () { return {"show": true,"spread": false,"threshold": 1}; }},"col": {"type": Number,"default": 4},"size": {"type": String,"default": "large"},"theme": {"type": String,"default": "gray"},"options": {"type": Array,"default": function () { return []; }},"forceCheck": {"type": Boolean,"default": false},"marginInner": {"type": String,"default": ""},"ins": Object,"primaryColor": String};
            obj.components = {"c-spread": require("../SpreadEnhanced/Spread"),"c-tag-item": require("../Tags/TagItem"),"c-row": require("../Row/Row"),"c-span": require("../Row/Span")};

            
            

            


            
            obj.data = function () {
                return {"column": (12/this["col"])};
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
    