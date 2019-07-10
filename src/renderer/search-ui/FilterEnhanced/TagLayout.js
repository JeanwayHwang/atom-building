
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"c-row c-line-bottom c-filter-tag-layout c-row-tile"},[_vm._l((_vm.tagList),function(item,index){return [(item.type === 'order')?(_c('div',{key:index,staticClass:"WA_LOG_TAB c-span1 c-filter-tag-item",on:{"click":function($event){_vm.handleFilterTagClick({
                index: index,
                item: item
            })}}},[_c('span',{staticClass:"c-line-clamp1",style:({
                    'font-weight': item.defaultValue || item.defaultValue === '' ? 'bold' : '',
                    'color': item.defaultValue || item.defaultValue === '' ? _vm.selectedColor : _vm.unselectedColor
                })},[_vm._v("\n                "+_vm._s(item.defaultValue || item.defaultValue === '' ? item.text : item.originText)+"\n            ")]),_vm._v(" "),(item.type === 'order')?(_c('span',{staticClass:"c-filter-tag-item-icon-order"},[_c('span',{staticClass:"\n                        c-gap-inner-left-small\n                        c-filter-tag-item-icon-wrapper\n                        c-filter-tag-item-icon-wrapper-up\n                    "},[_c('i',{staticClass:"c-filter-tag-item-icon c-filter-tag-item-icon-up",style:({
                            'border-color': item.defaultValue === item.options[0].value
                                ? _vm.arrowSelectedBorderColor
                                : _vm.arrowUnselectedBorderColor
                        })})]),_vm._v(" "),_c('span',{staticClass:"\n                        c-gap-inner-left-small\n                        c-filter-tag-item-icon-wrapper\n                        c-filter-tag-item-icon-wrapper-down\n                    "},[_c('i',{staticClass:"c-filter-tag-item-icon",style:({
                            'border-color': item.defaultValue === item.options[1].value
                                ? _vm.arrowSelectedBorderColor
                                : _vm.arrowUnselectedBorderColor
                        })})])])):(_vm._e())])):(_c('div',{key:index,staticClass:"WA_LOG_TAB c-span1 c-filter-tag-item",class:{
                'c-filter-tag-item-bold': (index === _vm.curTagIndex
                    || item.selected
                    || (item.defaultValue
                    || item.defaultValue === ''
                ))
            },style:({
                color: (index === _vm.curTagIndex
                    || item.selected
                    || (item.defaultValue
                    || item.defaultValue === ''
                ))
                    ? _vm.selectedColor
                    : _vm.unselectedColor
            }),on:{"click":function($event){_vm.handleFilterTagClick({
                index: index,
                item: item
            })}}},[_c('span',{staticClass:"c-filter-tag-item-text c-line-clamp1"},[_vm._v("\n                "+_vm._s((item.defaultValue || item.defaultValue === '')
                        ? item.text
                        : item.originText)+"\n            ")]),_vm._v(" "),_c('i',{staticClass:"c-gap-left-small c-filter-tag-item-icon",class:{
                    'c-filter-tag-item-icon-current-selected': index === _vm.curTagIndex
                },style:({
                    'border-color': (index === _vm.curTagIndex
                        || item.selected
                        || (item.defaultValue
                        || item.defaultValue === ''
                    ))
                        ? _vm.arrowSelectedBorderColor
                        : _vm.arrowUnselectedBorderColor
                })})]))]}),_vm._v(" "),_vm._t("default")],2)},
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  methods: {
    // tag 点击
    handleFilterTagClick: function handleFilterTagClick(obj) {
      // 行为；打开浮层：open；关闭浮层：close；不打开也不关闭（排序浮层）则为空字符串
      var action = ''; // 如果是排序类型

      if (obj.item.type === 'order') {
        var selectedIndex = 0;
        obj.item.options.forEach(function (option, optionIndex) {
          // 如果默认值和选项的值相等
          if (obj.item.defaultValue === option.value) {
            selectedIndex = optionIndex;
          }
        }); // 将默认值置为另一个值

        this.$set(obj.item, 'defaultValue', obj.item.options[(selectedIndex + 1) % 2].value); // 当前改变项的数据

        var currentChange = {
          type: obj.item.type,
          index: obj.item.index,
          result: _defineProperty({}, obj.item.key, obj.item.defaultValue)
        }; // 触发确认

        this.store.confirmAction(currentChange); // 当前有 tag 被选中时，触发取消事件

        if (this.store.state.curTagIndex !== -1) {
          action = 'close'; // 关闭底部区域

          this.store.closeBottomLayoutAction(false, {
            index: obj.item.index,
            type: obj.item.type
          });
        }
      } // 其他类型
      else {
          // 如果本次选中的项和上次选中的项相同
          if (this.curTagIndex === obj.index) {
            // 关闭底部区域
            action = 'close';
            this.store.closeBottomLayoutAction(false, {
              index: obj.item.index,
              type: obj.item.type
            }); // 触发标签点击回调事件

            this.$emit('tagitemclick', {
              index: obj.index,
              action: action
            });
            return;
          } // 如果本次选中的项和上次选中的项不同
          // 当前有 tag 被选中时，相当于取消，恢复数据


          if (this.store.state.curTagIndex !== -1) {
            // 恢复数据
            this.store.recoveryData();
          } // 保存本次选中项索引


          this.store.setCurTagIndexAction(obj.index); // 设置底部数据

          this.store.setBottomDataAction(obj.item);
          action = 'open';
        } // 触发标签点击回调事件


      this.$emit('tagitemclick', {
        index: obj.index,
        action: action
      });
    }
  },
  computed: {
    // 箭头被选中时的 border-color
    arrowSelectedBorderColor: function arrowSelectedBorderColor() {
      return this.selectedColor + ' transparent transparent';
    },
    // 箭头未被选中时的 border-color
    arrowUnselectedBorderColor: function arrowUnselectedBorderColor() {
      return this.unselectedColor + ' transparent transparent';
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"store": {"type": Object},"tagList": {"type": Array},"transition": Boolean,"curTagIndex": {"type": Number,"default": -1},"selectedColor": {"type": String,"default": "#333"},"unselectedColor": {"type": String,"default": "#666"},"maskZIndex": {"type": Number,"default": 299}};
            obj.components = {"c-icon": require("../Icon/Icon")};

            
            

            


            
            obj.data = function () {
                return {};
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
            
            obj._scopeId = "data-a-5fc7cbaa";

            module.exports = obj;

            
        });
    