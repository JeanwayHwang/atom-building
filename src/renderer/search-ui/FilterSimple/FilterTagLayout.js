
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tag-layout__EF7qg",class:[
        {
            'c-line-top': _vm.border.top,
            'c-line-bottom': _vm.border.bottom
        }
    ],on:{"touchmove":_vm.handleTouchMove}},[_vm._l((_vm.options),function(option,optionIndex){return _c('tag-layout-item',{key:optionIndex,style:({
            width: 100 / _vm.options.length + '%'
        }),attrs:{"index":optionIndex,"text":option.text,"direction":option.direction,"type":option.type,"selected-color":_vm.primaryColor,"selected":option.selected},on:{"click":function($event){_vm.handleTagLayoutItemClick({
            option: option,
            optionIndex: optionIndex
        })}}})}),_vm._v(" "),_vm._t("default")],2)},
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
  methods: {
    // item 点击
    handleTagLayoutItemClick: function handleTagLayoutItemClick(obj) {
      // 如果阻止默认事件
      if (obj.option.preventDefault) {
        // 触发事件
        this.emitClick(obj);
        return;
      } // 记录上一次选中的索引


      this.lastSelectedIndex = this.selectedIndex; // 如果方向向上

      if (obj.option.direction === 'up') {
        // 改为向下
        this.$set(obj.option, 'direction', 'down'); // 如果是 order 类型

        if (obj.option.type === 'order') {
          // clear
          this.clearTagItemDirection(); // 设置选中项索引

          this.selectedIndex = obj.optionIndex;
        } // 如果是 normal 类型
        else {
            // 设置选中项索引
            this.selectedIndex = -1;
          }
      } // 如果方向向下或者为空
      else {
          // clear
          this.clearTagItemDirection(); // 改为向上

          this.$set(obj.option, 'direction', 'up'); // 设置选中项索引

          this.selectedIndex = obj.optionIndex;
        } // 触发事件


      this.emitClick(obj);
    },
    // 清空所有 tagItem 的方向
    clearTagItemDirection: function clearTagItemDirection() {
      var _this = this;

      this.options.forEach(function (option, optionIndex) {
        // 如果是正常类型
        if (option.type !== 'order') {
          // 全部置为 down
          _this.$set(option, 'direction', 'down');
        }
      });
    },
    // touchmove 事件
    handleTouchMove: function handleTouchMove(e) {
      // 阻止默认 TouchMove 事件
      if (this.preventDefaultTouchMove) {
        e.cancelable && e.preventDefault();
      }
    },
    // 触发 change 事件
    emitClick: function emitClick(obj) {
      /**
       * 改变事件，点击标签项时触发
       *
       * @event click
       * @property {number|string} param1.selectedIndex 选中索引
       * @property {number|string} param1.lastSelectedIndex 上一次的选中项索引
       * @property {string} param1.type 选中项类型
       * @property {string} param1.direction 选中项方向
       */
      this.$emit('click', {
        selectedIndex: this.selectedIndex,
        lastSelectedIndex: this.lastSelectedIndex,
        type: obj.option.type || 'normal',
        direction: obj.option.direction,
        option: obj.option
      });
    },
    // 改变 selectedIndex
    changeSelectedIndex: function changeSelectedIndex(selectedIndex) {
      this.selectedIndex = selectedIndex;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"tagLayoutWrapper":"tag-layout-wrapper__2tl_v","tagLayout":"tag-layout__EF7qg","mask":"mask__36AY3"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"options": Array,"border": {"type": Object,"default": function () { return {"top": false,"bottom": true}; }},"preventDefaultTouchMove": {"type": Boolean,"default": false},"primaryColor": String};
            obj.components = {"tag-layout-item": require("./FilterTagLayoutItem")};

            
            

            


            
            obj.data = function () {
                return {"selectedIndex": -1};
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
    