
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"a-show",value:(!_vm.data.error),expression:"!data.error"}],staticClass:"img-wrapper__1Cdzp",class:[
        _vm.borderRadius.tl
            ? _vm.$style.imgWrapperRadiusTl
            : '',
        _vm.borderRadius.tr
            ? _vm.$style.imgWrapperRadiusTr
            : '',
        _vm.borderRadius.bl
            ? _vm.$style.imgWrapperRadiusBl
            : '',
        _vm.borderRadius.br
            ? _vm.$style.imgWrapperRadiusBr
            : ''
    ],style:([
        {
            'background-color': _vm.data.color,
            'margin-bottom': _vm.marginBottom + 'px'
        },
        _vm.data.width && _vm.data.height
            ? {
                'height': '0',
                'padding-bottom': _vm.math_floor(1 / (_vm.data.width / _vm.data.height) * 100) + '%'
            }
            : {
                'background-color': 'inherit'
            }
        ,
        _vm.data.async
            ? {
                'height': '0',
                'padding-bottom': 1 / _vm.data.whScale * 100 + '%'
            }
            : {}
    ]),attrs:{"aria-label":((_vm.data.name ? _vm.data.name : '图片') + ".图集.共" + (_vm.data.text) + "张")},on:{"click":_vm.handleClick}},[_c('img',{staticClass:"img__2oPHp img-progressive__zML_R",style:([
            {
                opacity: _vm.isUIWebview
                    ? '.99'
                    : '1'
            }
        ]),attrs:{"src":_vm.data.src},on:{"load":_vm.handleLoad}}),_vm._v(" "),(_vm.data && (_vm.data.text || _vm.data.icon || _vm.data.pillBigText))?(_c('c-img-mask',{directives:[{name:"show",rawName:"a-show",value:(_vm.loaded),expression:"loaded"}],staticClass:"img-mask__3BSbr img-progressive__zML_R",attrs:{"type":_vm.data.type,"size":_vm.data.size,"icon":_vm.data.icon,"text":_vm.data.text,"pill-big-text":_vm.data.pillBigText}})):(_vm._e())],1)},
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
 * @file ImgItem
 * @author wangkai37(wangkai37@baidu.com)
 */
var _default = {
  methods: {
    handleClick: function handleClick() {
      this.$emit('click', this.data);
    },
    handleLoad: function handleLoad() {
      this.loaded = true;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"imgWrapper":"img-wrapper__1Cdzp","imgWrapperRadiusTl":"img-wrapper-radius-tl__bA0Nc","img":"img__2oPHp","imgMask":"img-mask__3BSbr","imgProgressive":"img-progressive__zML_R"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"data": Object,"defaultPlaceholderImgColor": {"type": String,"default": "#efefef"},"isUIWebview": {"type": Boolean,"default": false},"index": Number,"type": {"type": Number,"default": 1},"marginBottom": {"type": Number,"default": 2},"borderRadius": {"type": Object,"default": function () { return {"tl": false,"tr": false,"bl": false,"br": false}; }}};
            obj.components = {"c-img-mask": require("../Image/ImageMask")};

            
            

            


            
            obj.data = function () {
                return {"loaded": false};
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
    