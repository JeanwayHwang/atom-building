
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
        'horizontal-padding': _vm.horizontalPadding
    }},[_c('c-title',{staticClass:"c-rec-title",attrs:{"text":_vm.title,"icon":_vm.titleIcon,"color":_vm.titleColor}}),_vm._v(" "),(_vm.type === 'scroll' && !_vm.isDownGrade)?(_c('c-scroll-auto',{staticClass:"c-gap-top-small c-gap-bottom",attrs:{"row":2,"sort-order":"vertical"}},_vm._l((_vm.list),function(item,index){return _c('c-slink',{key:index,staticClass:"rec-scroll-item",class:[
                index > _vm.list.length - 3
                    ? ''
                    : 'c-gap-right'
            ],style:({
                'box-sizing': 'border-box'
            }),attrs:{"text":item.text,"url":item.href,"params":item.params,"type":"auto"}})}))):((_vm.type === 'vertical')?(_c('div',{staticClass:"c-gap-inner-top-small c-gap-bottom"},_vm._l((_vm.list),function(item,index){return (index < _vm.num)?(_c('div',{key:index,staticClass:"c-gap-inner-top-small c-gap-inner-bottom-small"},[_c('c-slink',{style:({
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'box-sizing': 'border-box'
                }),attrs:{"text":item.text,"url":item.href,"params":item.params,"type":"strong"}})],1)):(_vm._e())}))):(_c('div',{staticClass:"c-rec-list"},[_vm._l((_vm.list),function(rsitem,index){return [(index < _vm.num && index % 2 == 0)?(_c('div',{key:index,staticClass:"c-row c-gap-top"},[_c('div',{staticClass:"c-span6"},[_c('c-touchable-feedback',{attrs:{"open":!!rsitem.href,"is-jump":"","border-radius":"5px","background-color":"rgba(0, 0, 0, .08)"}},[_c('c-link',{staticClass:"c-rec-item c-line-clamp1",attrs:{"url":rsitem.href},on:{"click":function($event){_vm.handleItemClick({
                                index: index,
                                item: rsitem
                            })}}},[_vm._v("\n                            "+_vm._s(rsitem.text)+"\n                        ")])],1)],1),_vm._v(" "),_c('div',{staticClass:"c-span6"},[(_vm.list[index + 1])?(_c('c-touchable-feedback',{attrs:{"open":!!_vm.list[index + 1].href,"is-jump":"","border-radius":"5px","background-color":"rgba(0, 0, 0, .08)"}},[_c('c-link',{staticClass:"c-rec-item c-line-clamp1",attrs:{"url":_vm.list[index + 1].href},on:{"click":function($event){_vm.handleItemClick({
                                index: index + 1,
                                item: _vm.list[index + 1]
                            })}}},[_vm._v("\n                            "+_vm._s(_vm.list[index + 1].text)+"\n                        ")])],1)):(_vm._e())],1)])):(_vm._e())]})],2)))],1)},
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

var _userAgent = _interopRequireDefault(require("@searchfe/user-agent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  mounted: function mounted() {
    var iOSVersion = _userAgent["default"].iOSVersion()[0]; // iOS 7 降级


    if (iOSVersion <= 7) {
      this.isDownGrade = true;
    }
  },
  methods: {
    handleItemClick: function handleItemClick(obj) {
      /**
       * handleItemClick event.
       *
       * @event handleItemClick
       */
      this.$emit('itemclick', obj);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"list": {"type": Array,"required": true},"title": {"type": String,"default": "去全网搜索"},"titleIcon": {"type": String,"default": "baidu"},"titleColor": {"type": String,"default": "#999"},"num": {"type": Number,"default": 8},"type": {"type": String,"default": "normal"},"scrollOpts": {"type": Object,"default": function () { return {"row": 2,"width": "633px","wrapItemCountThreshold": 9}; }},"horizontalPadding": {"type": Boolean,"default": true}};
            obj.components = {"c-title": require("../Title/Title"),"c-link": require("../Link/Link"),"c-slink": require("../Slink/Slink"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback"),"c-scroll-auto": require("../Scroll/ScrollAuto")};

            
            

            


            
            obj.data = function () {
                return {"isDownGrade": false};
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
            
            obj._scopeId = "data-a-23c41f96";

            module.exports = obj;

            
        });
    