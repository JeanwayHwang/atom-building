
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"c-navs-common-content",class:{'c-navs-common-content-sub': _vm.type === 'navSub'},style:({
        'background-color': _vm.backgroundColor,
        'font-size': _vm.$platform === 'pc' ? '14px' : '15px',
        'height': _vm.$platform === 'pc' ? '38px' : '2.6667em'
    }),attrs:{"voice-action":"switch","role":"tablist"}},[_vm._l((_vm.labelList),function(label,index){return _c('li',{key:index,staticClass:" c-color-gray-a",class:{
            'c-navs-common-selected': index === _vm.selectedIndex,
            'c-navs-scroll-select-bottom': index === _vm.selectedIndex && !_vm.bottomAnimation,
            'WA_LOG_TAB': !label.url,
            'c-navs-common-li-disable-event': _vm.disableEvent
        },attrs:{"data-nolog":!_vm.isOpenLog,"data-log":_vm.logContent.logList&&_vm.logContent.logList[index]?_vm.logContent.logList[index]:null,"data-module":label.dataModule ? label.dataModule : '',"aria-selected":index === _vm.selectedIndex,"role":"tab"},on:{"click":function($event){_vm.itemClick(index)},"touchstart":function($event){_vm.touchNav(index)}}},[_c('c-link',{staticClass:"c-navs-common-full-height c-navs-common-span-clamp",attrs:{"url":label.url,"params":label.params,"voice-config":'switch.item:' + label.txt}},[_c('div',{staticClass:"c-navs-common-full-height"},[(_vm.disableEvent)?(_c('span',{ref:"labels",refInFor:true,staticClass:"c-navs-common-span-animation",style:([
                        _vm.activeIndex === _vm.selectedIndex
                            ? index === _vm.selectedIndex
                                ? {
                                    'color': _vm.selectedColor,
                                    'border-bottom-color': _vm.selectedColor,
                                    'font-weight': 'bold',
                                    'opacity': 1
                                } : {
                                    color: _vm.itemStyle.color,
                                    opacity: 0.7
                                }
                            : index === _vm.activeIndex
                                ? {
                                    'color': _vm.selectedColor,
                                    'opacity': 1,
                                    'font-weight': 'bold'
                                } : _vm.selectedIndex === index
                                    ? {
                                        'color': _vm.itemStyle.color,
                                        'border-bottom-color': _vm.selectedColor,
                                        'font-weight': 400,
                                        'opacity': 0.7

                                    } : {
                                        color: _vm.itemStyle.color,
                                        opacity: 0.7
                                    },
                        {
                            height: _vm.$platform === 'pc' ? '38px' : '2.6667em'
                        }
                    ])},[_vm._v("\n                    "+_vm._s(label.txt)+"\n                ")])):(_c('span',{ref:"labels",refInFor:true,style:([
                        index === _vm.selectedIndex
                            ? {
                                'color': _vm.selectedColor,
                                'border-bottom-color': _vm.selectedColor
                            } : {
                                color: _vm.itemStyle.color,
                                opacity: _vm.itemStyle.opacity
                            },
                        {
                            height: _vm.$platform === 'pc' ? '38px' : '2.6667em'
                        }
                    ])},[_vm._v("\n                    "+_vm._s(label.txt)+"\n                ")]))])])],1)}),_vm._v(" "),_c('div',{ref:"bottomBar",staticClass:"c-navs-common-bottom"})],2)},
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
    var _this = this;

    this.$root.$on('attach', function () {
      if (_this.disableEvent) {
        _this.activeIndex = _this.selectedIndex;
      }
    });

    if (this.type === 'navSub') {
      return;
    }

    this.isDownGrade = !this.supportAnimation();
    this.$nextTick(function () {
      if (!_this.$refs.labels) {
        return;
      }

      _this.position = _this.getPosition(_this.$refs.labels[_this.selectedIndex]);

      _this.animationInit();
    });
    this.$refs.bottomBar && this.$refs.bottomBar.addEventListener('transitionend', this.animationDone, false);
  },
  watch: {
    selectedIndex: function selectedIndex(value, old) {
      if (this.type === 'navSub' || this.isDownGrade) {
        return;
      }

      this.animationInit();
      this.animation(value);
    },
    labelList: function labelList(newVal, oldVal) {
      var _this2 = this;

      this.$nextTick(function () {
        var selectedIndex = _this2.selectedIndex; // 如果选项索引超出了数组的最大长度，则取数组的最大长度

        if (_this2.selectedIndex >= _this2.labelList.length) {
          selectedIndex = _this2.labelList.length - 1;
        }

        _this2.move(selectedIndex);
      });
    }
  },
  methods: {
    itemClick: function itemClick(index) {
      this.$emit('clickItem', index);
    },
    touchNav: function touchNav(index) {
      if (this.disableEvent) {
        this.$emit('clickItem', index);
        this.activeIndex = index;
      }
    },
    getPosition: function getPosition(dom) {
      if (!dom || !dom.offsetParent) {
        return {
          left: null,
          right: null
        };
      }

      var parentDom = dom.offsetParent;
      var left = dom.offsetLeft + parentDom.offsetLeft;
      var right = left + dom.offsetWidth;
      return {
        left: left,
        right: right
      };
    },
    // 判断具体手机型号是否进行降级处理
    supportAnimation: function supportAnimation() {
      var ua = navigator.userAgent.toLowerCase();
      var version = ua.match(/zte\sn939st/);

      if (version) {
        return false;
      }

      return true;
    },
    animationInit: function animationInit() {
      var _this$position = this.position,
          left = _this$position.left,
          right = _this$position.right;
      this.bottomAnimation = true;
      this.$refs.bottomBar && this.$refs.bottomBar.setAttribute('style', "\n                height: 2px;\n                background-color: ".concat(this.selectedColor, ";\n                left: ").concat(left, "px;\n                width: ").concat(right - left, "px;\n            "));
    },
    animation: function animation(value) {
      var _this3 = this;

      var _this$position2 = this.position,
          oldLeft = _this$position2.left,
          oldRight = _this$position2.right;
      this.position = this.getPosition(this.$refs.labels[value]);
      var _this$position3 = this.position,
          left = _this$position3.left,
          right = _this$position3.right;
      this.$nextTick(function () {
        var scaleX = (right - left) / (oldRight - oldLeft);
        var tranX = (right + left - oldRight - oldLeft) / 2;
        _this3.$refs.bottomBar && _this3.$refs.bottomBar.setAttribute('style', "\n                    height: 2px;\n                    background-color: ".concat(_this3.selectedColor, ";\n                    left: ").concat(oldLeft, "px;\n                    width: ").concat(oldRight - oldLeft, "px;\n                    transition: transform .24s cubic-bezier(0.4, 0, 0.2, 1);\n                    -webkit-transition: -webkit-transform .24s cubic-bezier(0.4, 0, 0.2, 1);\n                    transform: translate3d(").concat(tranX, "px, 0, 0) scaleX(").concat(scaleX, ") ;\n                    -webkit-transform: translate3d(").concat(tranX, "px, 0, 0) scaleX(").concat(scaleX, ") ;\n                    transform-origin: 50% 0 0;\n                    -webkit-transform-origin: 50% 0 0;\n                "));
      });
    },
    animationDone: function animationDone() {
      var _this4 = this;

      this.bottomAnimation = false;
      this.$nextTick(function () {
        _this4.$refs.bottomBar && _this4.$refs.bottomBar.setAttribute('style', '');
      });
    },
    move: function move(selectedIndex) {
      this.position = this.getPosition(this.$refs.labels[selectedIndex]);
      var _this$position4 = this.position,
          left = _this$position4.left,
          right = _this$position4.right;
      this.$refs.bottomBar && this.$refs.bottomBar.setAttribute('style', "\n                height: 2px;\n                background-color: ".concat(this.selectedColor, ";\n                left: ").concat(left, "px;\n                width: ").concat(right - left, "px;\n            "));
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"labelList": {"type": Array,"required": true},"selectedIndex": {"type": Number,"default": 0},"selectedColor": {"type": String,"default": "#333"},"itemStyle": {"type": Object,"default": function () { return {"color": "#666","opacity": "1"}; }},"type": {"type": String,"default": "nav"},"backgroundColor": {"type": String,"default": "#fff"},"isOpenLog": {"type": Boolean,"default": true},"logContent": {"type": Object,"default": function () { return {}; }},"feedbackColor": {"type": String,"default": "rgba(0,0,0,.08)"},"disableEvent": {"type": Boolean,"default": false}};
            obj.components = {"c-link": require("../Link/Link")};

            
            

            


            
            obj.data = function () {
                return {"botttomStyle": "","bottom1Style": "","bottom2Style": "","activeIndex": this["selectedIndex"],"position": {"left": 0,"right": 0},"isDownGrade": false,"bottomAnimation": false};
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
            
            obj._scopeId = "data-a-63d527a9";

            module.exports = obj;

            
        });
    