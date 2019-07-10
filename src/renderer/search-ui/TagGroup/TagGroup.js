
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[(!_vm.isAuto && _vm.column !== 5)?(_c('section',{staticClass:"c-tag-group-grid"},_vm._l((_vm.rowNum),function(item1,index1){return _c('section',{key:index1,staticClass:"c-row c-tag-group"},[_vm._l((_vm.list),function(item,index){return [(index >= index1 * _vm.columnNum && index < (index1 + 1) * _vm.columnNum)?(_c('div',{key:index,staticClass:"c-gap-top c-gap-inner-bottom-small c-tap-span",class:['c-span' + _vm.col],attrs:{"rl-type":"stop"}},[(_vm.type === 'radio')?(_c('div',{staticClass:"c-color c-font-normal c-tag c-gap-inner-left c-gap-inner-right",class:{
                            'c-tag-selected-radio': item.selected === true,
                            'c-color-gray': item.isNegative === true || _vm.disable
                        },attrs:{"aria-checked":item.selected},on:{"click":function($event){_vm.handleRadioClick(index, $event)}}},[_c('div',{staticClass:"c-tag-wrapper c-line-clamp1",class:[
                                !_vm.disable ? 'WA_LOG_BTN' : ''
                            ]},[_vm._v("\n                            "+_vm._s(item.text)+"\n                            "),_vm._v(" "),(item.number)?(_c('span',[(item.number <= 999)?(_c('span',[_vm._v("\n                                    ("+_vm._s(item.number)+")\n                                ")])):(_c('span',[_vm._v("\n                                    (999+)\n                                ")]))])):(_vm._e())])])):(_vm._e()),_vm._v(" "),(_vm.type === 'checkbox')?(_c('div',{staticClass:"c-color c-font-normal c-tag c-line-clamp1",class:{
                            'c-tag-selected-checkbox': item.selected === true,
                            'c-color-gray': item.isNegative === true || _vm.disable
                        },attrs:{"aria-checked":item.selected},on:{"click":function($event){_vm.handleCheckBoxClick(index, $event)}}},[_c('div',{staticClass:"c-tag-wrapper c-line-clamp1 c-gap-inner-left c-gap-inner-right",class:[
                                !_vm.disable ? 'WA_LOG_BTN' : ''
                            ]},[(item.selected === true)?(_c('section',[_c('div',{staticClass:"c-tag-checkbox-triangle"}),_vm._v(" "),_c('c-icon',{staticClass:"c-tag-checkbox-check",attrs:{"type":"check"}})],1)):(_vm._e()),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.text))]),_vm._v(" "),(item.number)?(_c('span',[(item.number <= 999)?(_c('span',[_vm._v("("+_vm._s(item.number)+")")])):(_c('span',[_vm._v("(999+)")]))])):(_vm._e())])])):(_vm._e())])):(_vm._e())]}),_vm._v(" "),(index1 == (_vm.rowNum - 1) && (_vm.list.length % _vm.columnNum) !== 0)?(_vm._l(((_vm.columnNum - (_vm.list.length % _vm.columnNum))),function(item2,index2){return _c('div',{key:index2,class:['c-span' + _vm.col]})})):(_vm._e())],2)}))):(_c('section',{ref:"tagGroupAutoScrollerWrapper",class:{
            'c-tag-group-auto-scroller-wrapper': _vm.allowScroll,
            'c-tag-group-auto-scroller-wrapper-shadow': _vm.allowScroll,
            'c-row-tile': _vm.allowScroll
        },attrs:{"rl-type":_vm.allowScroll ? 'stop' : null}},[_c('div',{staticClass:"c-tag-group-auto-scroller-class",class:{
                'c-tag-group-auto-scroller': _vm.allowScroll
            }},[_c('div',{staticClass:"c-tag-group-auto-list-class",class:{
                    'c-tag-group-auto-list': _vm.allowScroll
                },style:({
                    'margin-right': _vm.column === 5 ? '-.05rem' : ''
                })},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,ref:"tagGroupAutoScrollerListItem",refInFor:true,staticClass:"c-tag-auto-wrapper c-gap-inner-bottom-small",class:{
                        'c-gap-top': !_vm.allowScroll,
                        'c-gap-inner-right-middle': _vm.column !== 5 && index !== _vm.list.length - 1,
                        'c-gap-inner-right-small': _vm.column === 5
                    },style:({
                        width: _vm.column === 5 ? (100 / _vm.column + '%') : 'auto'
                    }),attrs:{"rl-type":"stop"}},[(_vm.type === 'radio')?(_c('div',{staticClass:"c-color c-font-normal c-tag c-line-clamp1 c-tag-auto c-gap-inner-left c-gap-inner-right",class:{
                            'c-tag-selected-radio': item.selected === true,
                            'c-color-gray': item.isNegative === true || _vm.disable
                        },on:{"click":function($event){_vm.handleRadioClick(index, $event)}}},[_c('div',{staticClass:"c-tag-wrapper c-line-clamp1",class:[
                                !_vm.disable ? 'WA_LOG_BTN' : ''
                            ]},[_vm._v("\n                            "+_vm._s(item.text)+"\n                            "),_vm._v(" "),(item.number)?(_c('span',[(item.number <= 999)?(_c('span',[_vm._v("\n                                    ("+_vm._s(item.number)+")\n                                ")])):(_c('span',[_vm._v("\n                                    (999+)\n                                ")]))])):(_vm._e())])])):(_vm._e()),_vm._v(" "),(_vm.type === 'checkbox')?(_c('div',{staticClass:"c-color c-font-normal c-tag c-line-clamp1",class:{
                            'c-tag-selected-checkbox': item.selected === true,
                            'c-color-gray': item.isNegative === true || _vm.disable
                        },on:{"click":function($event){_vm.handleCheckBoxClick(index, $event)}}},[_c('div',{staticClass:"c-tag-wrapper c-line-clamp1 c-tag-auto c-gap-inner-left c-gap-inner-right",class:[
                                !_vm.disable ? 'WA_LOG_BTN' : ''
                            ]},[(item.selected === true)?(_c('section',[_c('div',{staticClass:"c-tag-checkbox-triangle"}),_vm._v(" "),_c('c-icon',{staticClass:"c-tag-checkbox-check",attrs:{"type":"check"}})],1)):(_vm._e()),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.text))]),_vm._v(" "),(item.number)?(_c('span',[(item.number <= 999)?(_c('span',[_vm._v("("+_vm._s(item.number)+")")])):(_c('span',[_vm._v("(999+)")]))])):(_vm._e())])])):(_vm._e())])}))])]))])},
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

var _betterScroll = _interopRequireDefault(require("@baidu/better-scroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @file TagGroup 组件；标签组组件，相当于单选和多选；
 * @author wangkai37 <wangkai37@baidu.com>
 */
// 滑动动画时间
var scrollTime = 500;
var _default = {
  mounted: function mounted() {
    var _this = this;

    var vm = this; // 可滑动时

    if (this.allowScroll) {
      var $tagGroupAutoScrollerWrapper = this.$refs.tagGroupAutoScrollerWrapper; // 初始化 iScroll；添加 disableMouse: true, disablePointer: true, 否则 pc 上滑动时会卡顿不流畅

      this.iScroll = new _betterScroll["default"]($tagGroupAutoScrollerWrapper, {
        bindToWrapper: true,
        // 将 touchmove 事件绑定至 dom 而非全局
        scrollX: true,
        scrollY: false,
        click: true,
        disableMouse: true,
        disablePointer: true,
        eventPassthrough: true,
        scrollbars: false
      }); // 这里是因为：在sf 切换后中display：none情况下，触发resize事件会导致iscroll 触发refresh（），然而此时offsetheight 等取值为零，导致出错

      this.$root.$on('attach', function () {
        _this.iScroll.refresh();
      }); // 监听 scrollEnd 事件

      this.iScroll.on('scrollEnd', function () {
        /**
         * 当横滑结束时触发，主要用于日志.
         *
         * @event scrollEnd
         */
        vm.$emit('scrollEnd');
      }); // 计算选中项数组

      if (this.list && this.list.length > 0) {
        this.selectedIndexArray = [];
        this.list.forEach(function (item, index) {
          if (item.selected) {
            vm.selectedIndexArray.push(index);
          }
        });
      } // 设置默认滚动位置


      if (this.selectedIndexArray.length > 0) {
        // 单选滚动到最后一项
        if (this.type === 'radio') {
          this.scroll(this.selectedIndexArray[this.selectedIndexArray.length - 1]);
        } // 多选滚动到第0项
        else {
            this.scroll(this.selectedIndexArray[0]);
          }
      } else {
        this.scroll(0);
      }
    }
  },
  beforeDestory: function beforeDestory() {
    // 清空 iScroll 实例
    this.iScroll && this.iScroll.destory();
    this.iScroll = null;
  },
  methods: {
    // 单选按钮点击
    handleRadioClick: function handleRadioClick(index, e) {
      /**
       * 当横滑结束时触发，主要用于日志.
       *
       * @event click
       * @property {object} param1.index 当前点击的项的索引
       * @property {object} param1.e 点击事件
       */
      this.$emit('click', {
        index: index,
        e: e
      }); // 禁用点击态处理

      if (this.disable) {
        return;
      } // 可滑动时


      if (this.allowScroll) {
        // 滑动
        this.scroll(index); // 判断是否滚动到了最后

        if (index === this.list.length - 1) {
          this.isScrollToLast = true;
        } else {
          this.isScrollToLast = false;
        }
      }

      var vm = this; // 将所有置为未选中

      this.list.forEach(function (item) {
        vm.$set(item, 'selected', false);
      }); // 设置选中态
      // 直接操作索引会导致某些情况下不生效，这里修改成对象

      var item = this.list[index];
      item.selected = true;
      vm.list.splice(index, 1, item); // vm.$set(this.list, index, item);
      // 如果上一次选中的和这次的不一样

      if (this.lastIndex !== index) {
        // 触发 change 事件
        this.$emit('change', index, {
          e: e
        });
      } // 保存上一次选中的索引


      this.lastIndex = index;
    },
    // 多选按钮点击
    handleCheckBoxClick: function handleCheckBoxClick(index, e) {
      /**
       * 当横滑结束时触发，主要用于日志.
       *
       * @event click
       * @property {object} param1.index 当前点击的项的索引
       * @property {object} param1.e 点击事件
       */
      this.$emit('click', {
        index: index,
        e: e
      }); // 禁用点击态处理

      if (this.disable) {
        return;
      } // 选中态置反，这里要判断一下 selected 是否为 undefined
      // 直接操作索引会导致某些情况下不生效，这里修改成对象


      var item = this.list[index];

      if (item.selected) {
        item.selected = false;
        this.list.splice(index, 1, item);
      } else {
        item.selected = true;
        this.list.splice(index, 1, item); // 可滑动时

        if (this.allowScroll) {
          // 滑动；只有当确认的时候才滑动，取消的时候不滑动
          this.scroll(index); // 判断是否滚动到了最后

          if (index === this.list.length - 1) {
            this.isScrollToLast = true;
          } else {
            this.isScrollToLast = false;
          }
        }
      } // 选中的下标数组


      var selecteds = [];
      this.list.forEach(function (item, index) {
        if (item.selected === true) {
          selecteds.push(index);
        }
      });
      /**
       * 选项改变后的回调函数；单选返回选中项元素的下标；多选返回选中项元素们的下标数组.
       *
       * @event change
       * @property {} param1 单选：index:Number 选中项元素的下标；多选：selectArr:Array 选中项元素们的下标
       * @property {object} param2.e 点击事件
       */

      this.$emit('change', selecteds, {
        e: e
      });
    },
    // 滑动到指定位置
    scroll: function scroll(index) {
      if (index - 1 <= 0) {
        this.iScroll.scrollTo(0, 0, scrollTime);
      } else {
        this.iScroll.scrollToElement(this.$refs.tagGroupAutoScrollerListItem[index - 1], scrollTime);
      }
    },

    /**
     * 选项改变后的回调函数 单选返回选中项元素的下标 多选返回选中项元素们的下标数组
     *
     * @event setRadioIndex
     * @param {number} index 单选选中项的索引
     */
    setRadioIndex: function setRadioIndex(index) {
      var _this2 = this;

      // 将所有置为未选中
      this.list.forEach(function (item) {
        _this2.$set(item, 'selected', false);
      }); // 设置选中项

      this.$set(this.list[index], 'selected', true); // 滚动到指定位置

      this.scroll(index); // 保存上一次选中的索引

      this.lastIndex = index;
    }
  },
  watch: {
    list: function list(newVal, oldVal) {
      var _this3 = this;

      var vm = this; // 计算选中项数组

      if (newVal && newVal.length > 0) {
        vm.selectedIndexArray = [];
        newVal.forEach(function (item, index) {
          if (item.selected) {
            vm.selectedIndexArray.push(index);
          }
        });
      }

      if (this.allowScroll) {
        // 这里是为了当 props 改变的时候动态改变 iscroll 的大小
        this.$nextTick(function () {
          // 更新 iScroll
          _this3.iScroll.refresh();
        });
      }
    }
  },
  computed: {
    // 计算行数
    rowNum: function rowNum() {
      return Math.ceil(this.list.length / (12 / this.col));
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"type": {"type": String,"default": "radio"},"list": {"type": Array},"isAuto": {"type": Boolean,"default": false},"column": {"type": Number,"default": 3},"disable": {"type": Boolean,"default": false},"allowScroll": {"type": Boolean,"default": false}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {"lastIndex": -1,"col": (12/this["column"]),"columnNum": this["column"],"iScroll": null,"isScrollToLast": false,"selectedIndexArray": []};
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
            
            obj._scopeId = "data-a-dde3a5b4";

            module.exports = obj;

            
        });
    