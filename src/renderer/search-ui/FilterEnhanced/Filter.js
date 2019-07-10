
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"c-filter"},[(_vm.getList)?(_c('tag-layout',{attrs:{"tag-list":_vm.getList,"transition":_vm.transition,"mask-z-index":_vm.maskZIndex,"cur-tag-index":_vm.state.curTagIndex,"selected-color":_vm.primaryColor,"store":_vm.store},on:{"tagitemclick":_vm.handleTagItemClick}},[_vm._t("default")],2)):(_vm._e()),_vm._v(" "),(_vm.state.bottomData)?(_c('c-mask',{attrs:{"top":_vm.maskTop,"mask-z-index":_vm.maskZIndex,"transition":_vm.transition},on:{"click":_vm.handleMaskClick}})):(_vm._e()),_vm._v(" "),_c('div',{staticClass:"wrapper",class:{
            'c-row-tile': _vm.transition
        }},[_c('transition',{attrs:{"name":_vm.transition ? 'bottom-animation' : null},on:{"enter":_vm.enter}},[(_vm.state.bottomData)?(_c('bottom-layout',{attrs:{"transition":_vm.transition,"mask-z-index":_vm.maskZIndex,"bottom-data":_vm.state.bottomData,"primary-color":_vm.primaryColor,"multi-height":_vm.multiHeight,"multi-max-height":_vm.multiMaxHeight,"custom-height":_vm.customHeight,"custom-max-height":_vm.customMaxHeight,"hide-custom-bottom-btn":_vm.hideCustomBottomBtn,"list-layer-max-height":_vm.listLayerMaxHeight,"store":_vm.store}},[_vm._t("customLayout")],2)):(_vm._e())],1)],1)],1)},
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

var _store = _interopRequireDefault(require("./store.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  mounted: function mounted() {
    // 每个 Filter 组件对应一个自己的 store 实例
    this.store = new _store["default"](); // 设置 vm

    this.store.setRootVM(this); // 为空判断

    if (!this.selections) {
      return;
    } // 深复制模板传入的数据


    var listCopy = JSON.parse(JSON.stringify(this.selections)); // 记录 tagIndex，这个将是 tag 的唯一标识

    listCopy.forEach(function (tagItem, index) {
      tagItem.index = index;
    }); // 修改 store 里的值

    this.store.setListAction(listCopy);
    this.isNew = false;
  },
  methods: {
    // 数据变化
    onChange: function onChange(obj) {
      this.$emit('change', obj);
    },
    // 取消事件
    onCancel: function onCancel(obj) {
      this.$emit('cancel', obj);
    },
    // 蒙层打开
    onMaskOpen: function onMaskOpen() {
      this.$emit('maskopen');
    },
    // 蒙层关闭
    onMaskClose: function onMaskClose() {
      this.$emit('maskclose');
    },
    // 自定义确认
    onCustomConfirm: function onCustomConfirm() {
      this.$emit('customConfirm');
    },
    // 自定义重置
    onCustomReset: function onCustomReset() {
      this.$emit('customReset');
    },
    // Bottom 蒙层点击事件
    handleMaskClick: function handleMaskClick(e) {
      this.store.closeBottomLayoutAction(false, {
        index: this.state.bottomData.index,
        type: this.state.bottomData.type
      });
    },
    // 标签项点击事件
    handleTagItemClick: function handleTagItemClick(obj) {
      this.$emit('tagitemclick', obj);
    },
    // 主动关闭浮层
    closeFloatLayer: function closeFloatLayer() {
      this.store.closeBottomLayoutAction(false);
    },
    // 捕获 enter 事件，解决 iOS 低版本内核浏览器上滑动到首屏之外下方筛选布局被蒙层遮挡的问题；参考：https://cn.vuejs.org/v2/guide/transitions.html
    enter: function enter(el, done) {},
    // 多选项点击事件
    handleCheckboxClick: function handleCheckboxClick(obj) {
      this.$emit('checkboxclick', obj);
    }
  },
  watch: {
    // 监听 list 变化
    selections: function selections(newList, oldList) {
      var listCopy = JSON.parse(JSON.stringify(newList)); // 记录 tagIndex，这个将是 tag 的唯一标识

      listCopy.forEach(function (tagItem, index) {
        tagItem.index = index;
        tagItem.originText = tagItem.text;
      }); // 修改 store 里的值

      this.store.setListAction(listCopy);
      this.isNew = true;
    }
  },
  computed: {
    // 该计算属性是为了同步服务器渲染
    getList: function getList() {
      var vm = this;

      if (!this.state.list) {
        return;
      }

      var listCopy = this.state.list;
      listCopy.forEach(function (item, index) {
        if (vm.isNew) {
          // 记录原始 text
          item.originText = item.text;
        } // list


        if (item.type === 'list') {
          var tagItem = item;
          var column = item.column; // 因为 item 会变，所以需要把 colum 单独拿出来
          // 找出 checked 的选项，设置默认 curSelectedIndex

          for (var i = 0; i < column; i++) {
            // 先设置一个初始值
            var option = null;

            for (var j = 0; j < item.options.length; j++) {
              // 如果被选中了，就设置 index
              if (item.options[j].value === item.defaultValue) {
                option = item.options[j];
              }
            } // 如果是最后一列
            // if (i === column - 1 && option) {


            if (option && (option.value || option.value === '')) {
              tagItem.text = option.text;
            } // 有选项就把 item 赋值给它，层级递归


            if (option) {
              item = option;
            }
          }
        } // multi


        if (item.type === 'multi') {
          item.selected = false;
          item.options.forEach(function (listItem) {
            if (listItem.defaultValue && listItem.defaultValue !== ',') {
              item.selected = true;
            } // 如果默认值是空字符串 ''，则需要遍历选项，看选项中是否有空字符串 ''


            if (listItem.defaultValue === '') {
              listItem.options.forEach(function (option, optionIndex) {
                if (option.value === '') {
                  item.selected = true;
                  return true;
                }
              });
            }
          });
        } // order


        if (item.type === 'order') {
          var _tagItem = item;
          item.options.forEach(function (option, optionIndex) {
            if (option.value === _tagItem.defaultValue) {
              _tagItem.text = option.text;
              return;
            }
          });
        }
      });
      vm.isNew = false;
      return listCopy;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"selections": {"type": [Array,String]},"primaryColor": {"type": String},"multiHeight": String,"multiMaxHeight": {"type": String,"default": "70%"},"customHeight": String,"customMaxHeight": {"type": String,"default": "70%"},"hideCustomBottomBtn": {"type": Boolean,"default": false},"listLayerMaxHeight": {"type": String},"transition": {"type": Boolean,"default": false},"maskTop": String,"maskZIndex": {"type": Number,"default": 299}};
            obj.components = {"tag-layout": require("./TagLayout"),"bottom-layout": require("./BottomLayout"),"c-mask": require("./Mask")};

            
            

            


            
            obj.data = function () {
                return {"state": {"list": this["selections"],"bottomData": null,"curTagIndex": -1},"store": null,"isNew": true};
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
            
            obj._scopeId = "data-a-51a02eee";

            module.exports = obj;

            
        });
    