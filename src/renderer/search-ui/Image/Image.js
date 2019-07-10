
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-img-wrapper",attrs:{"aria-label":_vm.title ? _vm.title : '图片',"role":"img"}},[_c('div',{staticClass:"c-img c-img-item",class:[
            _vm.loadingImageTypeMap[_vm.defaultImageType]
                ? _vm.imgClassName + 'loading'
                : '',
            _vm.imgClassName + _vm.type,
            {
                'c-img-type-round': _vm.isRound
            },
            _vm.$platform !== 'pc'
                ? {
                    'c-img-radius-tl': _vm.borderRadius && _vm.borderRadius.tl,
                    'c-img-radius-tr': _vm.borderRadius && _vm.borderRadius.tr,
                    'c-img-radius-bl': _vm.borderRadius && _vm.borderRadius.bl,
                    'c-img-radius-br': _vm.borderRadius && _vm.borderRadius.br
                }
                : {}
        ],style:([
            {
                'background-color': _vm.backgroundColor,
                'overflow': 'hidden'
            },
            _vm.src && _vm.complete
                ? {
                    background: 'none'
                }
                : {},
            _vm.paddingBottom
                ? {
                    paddingBottom: _vm.paddingBottom + '%'
                }
                : {},
            _vm.loadingImageTypeMap[_vm.defaultImageType]
                ? {
                    backgroundImage: _vm.bgImageBaseUrl
                        + 'loading-'
                        + _vm.loadingImageTypeMap[_vm.defaultImageType]
                        + _vm.bgImageBasePostfix
                }
                : {},
            _vm.isBackgroundImage && _vm.src
                ? {
                    background: 'no-repeat center',
                    backgroundImage: _vm.finalLazy
                        ? null
                        : 'url(' + _vm.src + ')',
                    backgroundSize: _vm.backgroundSize,
                    backgroundPosition: _vm.backgroundPosition
                }
                : {},
            _vm.isBackgroundImage && !_vm.src
                ? {
                    backgroundImage: 'url(' + _vm.defaultImageSrc + ')',
                    backgroundSize: 'auto',
                    backgroundPosition: 'center'
                }
                : {},
            _vm.defaultImageSrc && !_vm.isBackgroundImage
                ? {
                    backgroundImage: 'url(' + _vm.defaultImageSrc + ')',
                    backgroundSize: 'auto',
                    backgroundPosition: 'center'
                }
                : {},
            !_vm.isShowDefaultImage
                ? {
                    'background-image': 'none'
                }
                : {},
            _vm.border
                ? {
                    border: _vm.border
                }
                : {},
            _vm.borderRadius
                ? {
                    'border-top-left-radius': _vm.borderRadius.tl ? _vm.borderRadius.tlRadius : null,
                    'border-top-right-radius': _vm.borderRadius.tr ? _vm.borderRadius.trRadius : null,
                    'border-bottom-left-radius': _vm.borderRadius.bl ? _vm.borderRadius.blRadius : null,
                    'border-bottom-right-radius': _vm.borderRadius.br ? _vm.borderRadius.brRadius : null
                }
                : {}
        ]),attrs:{"data-bgimagedelaysrc":(_vm.finalLazy && _vm.src && _vm.isBackgroundImage) ? _vm.src : null}},[(_vm.progressive && _vm.src && _vm.imgLoaded && !_vm.finalLazy && !_vm.error)?(_c('img',{ref:"img",staticClass:"c-img-img",class:[
                _vm.blur
                    ? 'c-img-progressive-blur'
                    : 'c-img-progressive'
            ],style:([
                _vm.borderRadius
                    ? {
                        'border-top-left-radius': _vm.borderRadius.tl ? _vm.borderRadius.tlRadius : null,
                        'border-top-right-radius': _vm.borderRadius.tr ? _vm.borderRadius.trRadius : null,
                        'border-bottom-left-radius': _vm.borderRadius.bl ? _vm.borderRadius.blRadius : null,
                        'border-bottom-right-radius': _vm.borderRadius.br ? _vm.borderRadius.brRadius : null
                    }
                    : {}
            ]),attrs:{"src":_vm.src},on:{"load":_vm.onLoad,"error":_vm.onError}})):(_vm._e()),_vm._v(" "),(!_vm.progressive)?([(_vm.src && !_vm.error && !_vm.isBackgroundImage)?(_c('img',_vm._b({ref:"img",staticClass:"c-img-img",style:([
                    _vm.borderRadius
                        ? {
                            'border-top-left-radius': _vm.borderRadius.tl ? _vm.borderRadius.tlRadius : null,
                            'border-top-right-radius': _vm.borderRadius.tr ? _vm.borderRadius.trRadius : null,
                            'border-bottom-left-radius': _vm.borderRadius.bl ? _vm.borderRadius.blRadius : null,
                            'border-bottom-right-radius': _vm.borderRadius.br ? _vm.borderRadius.brRadius : null
                        }
                        : {}
                ]),on:{"load":_vm.onLoad,"error":_vm.onError}},'img',( _obj = {}, _obj[_vm.finalLazy ? 'data-imagedelaysrc' : 'src'] = _vm.src, _obj )))):((!_vm.src && _vm.defaultImageType && _vm.defaultImageTypeMap[_vm.type])?(_c('div',{staticClass:"c-img-img",class:[
                    _vm.imgClassName + 'default'
                ],style:([
                    _vm.isRound ? {borderRadius: '50%'} : {},
                    {backgroundImage: _vm.bgImageBaseUrl + _vm.defaultImageType + '_' + _vm.type + _vm.bgImageBasePostfix}
                ])})):((_vm.isBackgroundImage && !_vm.finalLazy)?(_c('img',{staticClass:"c-img-img",style:({
                    width: '100%',
                    height: '100%',
                    opacity: 0
                }),attrs:{"src":_vm.src},on:{"load":_vm.onLoad,"error":_vm.onError}})):(_vm._e())))]):(_vm._e()),_vm._v(" "),_vm._t("default"),_vm._v(" "),(
                _vm.lbPillOpts.text
                    || _vm.lbPillOpts.icon
            )?(_c('c-image-mask',{staticClass:"c-img-mask-lb",class:{
                'c-img-mask-lb-gap-large': _vm.lbPillOpts.gapSize == 12
            },attrs:{"text":_vm.lbPillOpts.text,"icon":_vm.lbPillOpts.icon}})):(_vm._e()),_vm._v(" "),(_vm.showNum || _vm.showNum === '0' || _vm.icon)?(_c('c-image-mask',{staticClass:"c-img-mask",class:{'c-img-mask-gap-large': _vm.maskgapSize == 12},attrs:{"icon":_vm.icon,"pill-big-text":_vm.pillBigText,"text":_vm.showNum}})):(_vm._e()),_vm._v(" "),(_vm.circleMaskText || _vm.circleMaskIcon)?(_c('c-image-mask',{staticClass:"c-img-circle-mask",attrs:{"size":_vm.circleMaskSize ? _vm.circleMaskSize : (_vm.gridSize >= 12 ? 'large' : 'small'),"icon":_vm.circleMaskIcon,"text":_vm.circleMaskText,"type":"circle"}})):(_vm._e()),_vm._v(" "),(_vm.info)?(_c('p',{staticClass:"c-img-text"},[_vm._v("\n            "+_vm._s(_vm.info)+"\n        ")])):(_vm._e()),_vm._v(" "),(_vm.hackWhiteStroke)?(_c('div',{staticClass:"c-img-hack-white-stroke"})):(_vm._e())],2),_vm._v(" "),(_vm.title)?(_c('c-text-line',{attrs:{"clamp":_vm.titleClamp,"align":_vm.titleAlign,"fix-height":!!_vm.titleFixHeight,"text":_vm.title}})):(_vm._e()),_vm._v(" "),(_vm.subTitle)?(_c('c-text-line',{staticClass:"c-gray",attrs:{"clamp":_vm.subTitleClamp,"align":_vm.subTitleAlign,"fix-height":!!_vm.subTitleFixHeight,"text":_vm.subTitle}})):(_vm._e())],1)},
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
 * @file 图片组件
 * @author cxtom <cxtom2008@gmail.com>
 */
var _default = {
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.$refs.img && _this.$refs.img.complete || _this.defaultImageType && !_this.src) {
        _this.onLoad();
      }
    });

    if (this.progressive && this.src) {
      this.loadImg();
    }
  },
  methods: {
    onLoad: function onLoad(e) {
      if (this.complete) {
        return;
      }

      this.complete = true;
      /**
       * 图片加载完成事件，当使用背景图片的时候不支持
       *
       * @event load
       * @property {Event} param1 透传事件对象
       */

      this.$emit('load', e);
    },
    loadImg: function loadImg() {
      var _this2 = this;

      var img = new Image();

      img.onload = function () {
        _this2.imgLoaded = true;
      };

      img.src = this.src;
    },
    onError: function onError(e) {
      this.complete = false;
      this.error = true;
      /**
       * 图片加载错误事件，当使用背景图片的时候不支持
       *
       * @event error
       * @property {Event} param1 透传事件对象
       */

      this.$emit('error', e);
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"src": String,"type": {"type": String,"default": "s"},"paddingBottom": {"type": [String,Number]},"isBackgroundImage": {"type": Boolean,"default": false},"backgroundSize": {"type": String,"default": "cover"},"backgroundPosition": {"type": String},"lazy": {"type": Boolean,"default": false},"noAutoLazy": {"type": Boolean,"default": false},"isRound": {"type": Boolean,"default": false},"borderRadius": {"type": Object,"default": function () { return {"tl": true,"tr": true,"bl": true,"br": true}; }},"border": {"type": String},"progressive": {"type": Boolean,"default": false},"blur": {"type": Boolean,"default": false},"backgroundColor": {"type": String,"default": "#f7f7f7"},"isShowDefaultImage": {"type": Boolean,"default": true},"defaultImageSrc": {"type": String},"defaultImageType": String,"title": String,"titleClamp": {"type": [Number,String],"default": 2},"titleAlign": {"type": String,"default": "center"},"titleFixHeight": {"type": Boolean,"default": false},"subTitle": String,"subTitleClamp": {"type": [Number,String],"default": 1},"subTitleAlign": {"type": String,"default": "center"},"subTitleFixHeight": {"type": Boolean,"default": false},"hackWhiteStroke": {"type": Boolean,"default": false},"pillBigText": {"type": [Number,String],"default": ""},"showNum": {"type": [Number,String],"default": ""},"iconType": {"type": String,"default": ""},"lbPillOpts": {"type": Object,"default": function () { return {"text": "","icon": "","gapSize": null}; }},"maskgapSize": {"type": [Number,String],"default": ""},"gridSize": {"type": [String,Number],"default": 4},"circleMaskSize": String,"circleMaskIcon": String,"circleMaskText": String,"info": String};
            obj.components = {"c-text-line": require("../TextLine/TextLine"),"c-image-mask": require("./ImageMask")};

            
            obj.name = "c-img";

            
    var computed = obj.computed || {};
    computed["icon"] = function () { return ((this["iconType"])?(this["iconType"]):("")); };
computed["finalLazy"] = function () { return ((this["lazy"]||(((!this["noAutoLazy"])&&this["$root"]["atomRenderFlags"])&&(this["$root"]["atomRenderFlags"]["fp"]===0)))&&(this["$root"]["cardReadyFlag"]!==true)); };
    obj.computed = computed;



            
            obj.data = function () {
                return {"imgClassName": "c-img-","complete": false,"error": false,"defaultImageTypeMap": {"s": "s","y": "y"},"imgLoaded": false,"bgImageBaseUrl": "url(/se/static/atom/../Image/asset/","bgImageBasePostfix": ".png?v0.1)","loadingImageTypeMap": {"hotel": "hotel","travel": "travel","traffic": "traffic","app": "app","finance": "finance","food": "food","game": "game","goods": "goods","learn": "learn","medical": "medical","music": "music","news": "news","novel": "novel","pro": "pro","recruit": "recruit","sport": "sport","ticket": "ticket","video": "video"}};
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
            
            obj._scopeId = "data-a-7baa2038";

            module.exports = obj;

            
        });
    