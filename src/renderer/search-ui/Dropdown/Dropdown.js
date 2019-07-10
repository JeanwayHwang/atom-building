
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-dropdown c-gap-bottom-small dropdown__F-e_Q",class:{
        'c-dropdown-disable': _vm.disabled,
        'c-dropdown-focus': _vm.focus,
        'c-gap-top-small': !_vm.label
    },attrs:{"data-module":"c-dd","rl-type":"stop"}},[(_vm.label)?(_c('label',[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")])):(_vm._e()),_vm._v(" "),_c('select',{directives:[{name:"voice-provider",rawName:"a-voice-provider:select",value:(_vm.selectProvider),expression:"selectProvider",arg:"select"}],style:([
            _vm.innerValue === undefined
                ? {
                    color: '#999'
                }
                : {},
            _vm.direction !== 'ltr'
                ? {
                    direction: _vm.direction
                }
                : {},
            _vm.disabled
                ? {
                    color: '#dbdbdb'
                }
                : {},
            _vm.noBorder
                ? {
                    border: 'none',
                    color: '#555'
                }
                : {}
        ]),attrs:{"disabled":_vm.disabled,"name":_vm.name,"voice-tag":_vm.label,"voice-action":"select"},on:{"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false},"change":_vm.handleChange}},[(_vm.options && _vm.options.length > 0)?([(_vm.innerValue === undefined)?(_c('option',{attrs:{"voice-config":'select.item:' + _vm.label,"value":"","selected":""}},[_vm._v("\n                请选择\n            ")])):(_vm._e()),_vm._v(" "),_vm._l((_vm.options),function(item,index){return _c('option',{key:index,attrs:{"voice-config":'select.item:' + item.text},domProps:{"value":item.value,"selected":_vm.innerValue !== undefined && _vm.innerValue === item.value}},[_vm._v("\n                "+_vm._s(item.text)+"\n            ")])})]):((_vm.optGroup && _vm.optGroup.length > 0)?(_vm._l((_vm.optGroup),function(optGroupItem,optGroupIndex){return _c('optgroup',{key:optGroupIndex,attrs:{"label":optGroupItem.label}},_vm._l((optGroupItem.options),function(option,optionIndex){return _c('option',{key:optionIndex,domProps:{"value":option.value}},[_vm._v("\n                    "+_vm._s(option.text)+"\n                ")])}))})):(_vm._e()))],2),_vm._v(" "),_c('c-arrow',{staticClass:"dropdown-arrow__11Txd",attrs:{"direction":_vm.focus
            ? 2
            : 1,"color":_vm.disabled
            ? '#dbdbdb'
            : '#555',"animation":""}})],1)},
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

/**
 * @file 下拉选择框组件
 * @author cxtom (chenxiao07@baidu.com)
 * @changer wangkai37<wangkai37@baidu.com>
 */
var _default = {
  computed: {
    selectedIndex: {
      get: function get() {
        return this.getSelectedIndex(this.innerValue);
      },
      set: function set(index) {
        if (this.options[index]) {
          this.innerValue = this.options[index].value;
        }
      }
    }
  },
  watch: {
    value: function value(v) {
      this.innerValue = v;
    },
    innerValue: function innerValue(v) {
      // 如果是静默
      if (this.silent) {
        return;
      } // 选项


      if (this.options && this.options.length > 0) {
        this.$emit('change', {
          target: this,
          value: v,
          selectedIndex: this.getSelectedIndex(v)
        });
      } // 选项组 optGroup
      else if (this.optGroup && this.optGroup.length > 0) {
          var optGroupSelectedIndex = -1;
          var selectedIndex = -1;
          this.optGroup.forEach(function (optItem, optIndex) {
            optItem.options.forEach(function (option, optionIndex) {
              if (option.value === v) {
                selectedIndex = optionIndex;
                optGroupSelectedIndex = optIndex;
              }
            });
          });
          /**
           * 单选类型时选择后的改变事件
           *
           * @event change
           * @property {object} param1.target 当前组件实例
           * @property {number|string} param1.value 改变后的值
           * @property {number} param1.optGroupSelectedIndex 改变后的选中的组索引
           * @property {number} param1.selectedIndex 改变后的选中的项索引
           */

          this.$emit('change', {
            target: this,
            value: v,
            optGroupSelectedIndex: optGroupSelectedIndex,
            selectedIndex: selectedIndex
          });
        }
    }
  },
  methods: {
    selectProvider: function selectProvider(action) {
      return {
        current: String(this.selectedIndex)
      };
    },
    getSelectedIndex: function getSelectedIndex(v) {
      for (var i = 0, len = this.options.length; i < len; i++) {
        if (this.options[i].value === v) {
          return i;
        }
      }
    },
    handleChange: function handleChange(e) {
      this.innerValue = e.target.value;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"dropdown":"dropdown__F-e_Q","dropdownArrow":"dropdown-arrow__11Txd"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"disabled": {"type": Boolean,"default": false},"value": [Number,String],"options": {"type": Array,"default": function () { return []; }},"optGroup": {"type": Array,"default": function () { return []; }},"label": String,"name": String,"direction": {"type": String,"default": "ltr"},"noBorder": {"type": Boolean,"default": false},"silent": {"type": Boolean,"default": false}};
            obj.components = {"c-arrow": require("../AnimateIcon/Arrow")};

            
            

            


            
            obj.data = function () {
                return {"focus": false,"innerValue": this["value"]};
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
            
            obj._scopeId = "data-a-afeeb15a";

            module.exports = obj;

            
        });
    