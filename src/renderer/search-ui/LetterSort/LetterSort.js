
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"letter-sort-slide-fade"}},[_c('div',{directives:[{name:"show",rawName:"a-show",value:(_vm.isOpen),expression:"isOpen"}],ref:"letterSortWrap",staticClass:"c-letter-sort-wrap",style:({
            top: _vm.top ? _vm.top : 0,
            bottom: _vm.bottom ? _vm.bottom : 0,
            paddingBottom: _vm.top && !_vm.bottom ? _vm.top : 0,
            height: _vm.bottom ? 'auto' : '100%',
            zIndex: _vm.zIndex
        })},[_c('ul',{ref:"sideBar",staticClass:"c-letter-sort-sidebar c-font-small c-color-gray",style:({
                zIndex: _vm.zIndex
            }),on:{"touchstart":function($event){_vm.moveBarStart($event)},"touchmove":function($event){_vm.moveBar($event)},"touchend":function($event){_vm.moveBarEnd($event)},"contextmenu":function($event){_vm.stopMenu($event)}}},_vm._l((_vm.letterData),function(item,index){return _c('li',{key:index,ref:_vm.sideBarList,refInFor:true,staticClass:"c-letter-sort-sidebar-label WA_LOG_BTN",style:({
                    color: _vm.currentIndex === index ? _vm.isSelectedListColor : _vm.defaultColor
                }),attrs:{"data-index":index},on:{"click":function($event){_vm.clickBar(index, item.label)}}},[_vm._v("\n                "+_vm._s(item.label)+"\n            ")])})),_vm._v(" "),_c('section',{ref:"letterSortContentWrapper",staticClass:"c-letter-sort-main-content-wrapper",on:{"scroll":function($event){_vm.scrollFn($event)}}},[_c('div',{ref:"letterSortContent",staticClass:"c-letter-sort-main-content"},_vm._l((_vm.letterData),function(item,index){return _c('div',{key:index,ref:"letterItemDom",refInFor:true,staticClass:"c-letter-sort-main-content-inner"},[(index === 0 && item.isDiy)?(_c('div',[_vm._t("diyContent")],2)):(_c('div',[_c('div',{staticClass:"c-letter-sort-item-title c-font-small c-color"},[_vm._v(_vm._s(item.label))]),_vm._v(" "),_c('div',{staticClass:"c-letter-sort-item-list c-font-medium c-color-link"},[_c('ul',{staticClass:"c-letter-sort-item-ul"},_vm._l((item.item),function(value,key){return _c('li',{key:key,staticClass:"c-gap-inner-top\n                                        c-gap-inner-bottom\n                                        c-letter-sort-item-list-border\n                                        WA_LOG_OTHER\n                                    ",on:{"click":function($event){_vm.clickItem(key,value,index)}}},[_c('c-touchable-feedback',{attrs:{"left":-.17,"right":-.17,"top":-.1,"bottom":-.1,"background-color":"rgba(0,0,0,.05)"}},[_c('c-link',{staticClass:"c-color-link",attrs:{"url":value.url,"params":value.params}},[_vm._t("cont",[_vm._v("\n                                                "+_vm._s(value.name)+"\n                                            ")],{$index:index,$key:key})],2)],1)],1)}))])]))])}))]),_vm._v(" "),_c('c-letter-sort-toast',{attrs:{"letter-name":_vm.letterName,"color":_vm.color,"is-display":_vm.isDisplay}})],1)])},
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
  created: function created() {
    // 初始化raf兼容函数
    this.compatibleRaf();
  },
  mounted: function mounted() {
    // 初始化获取DOM节点
    this.letterSortContentWrapperDom = this.$refs.letterSortContentWrapper;
    this.letterSortContentDom = this.$refs.letterSortContent;
    this.isAndroidBaiduApp = this.isAndroidBaidu();

    if (!this.letterData.length) {
      this.letterData.length = 0;
    }

    if (this.isOpen) {
      this.getOffsetArr();
    }
  },
  updated: function updated() {
    // 仅执行一次，避免每次滚动获取DOM scrollTOP
    if (this.isNew) {
      this.isNew = false;
      this.getOffsetArr();
    }
  },
  watch: {
    // 监听浮层是否显示
    isOpen: function isOpen(newVal, curVal) {
      if (newVal !== curVal) {
        this.isNew = true;
      }
    }
  },
  methods: {
    getOffsetArr: function getOffsetArr() {
      this.letterSortContentDomItemLen = this.letterData.length;
      this.letterSortContentDomItem = this.$refs.letterItemDom;
      this.letterSortContentDomItemOffsetArr = [];

      for (var i = 0; i < this.letterSortContentDomItemLen; i++) {
        // 遍历每个元素距离父级元素的top
        this.letterSortContentDomItemOffsetArr.push(this.letterSortContentDomItem[i].offsetTop);
      }
    },
    stopMenu: function stopMenu(event) {
      event.preventDefault();
    },
    // 判断安卓机型
    isAndroidBaidu: function isAndroidBaidu() {
      var ua = navigator.userAgent.toLowerCase();
      var isAndroid = ua.indexOf('android') > -1;
      return isAndroid;
    },
    compatibleRaf: function compatibleRaf() {
      var lastTime = 0;
      var vendors = ['webkit', 'moz'];

      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
          var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
          }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }

      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
      }
    },
    // 节流函数
    throttle: function throttle() {
      if (!this.ticking) {
        window.requestAnimationFrame(this.scrollFn);
        this.ticking = true;
      }

      this.scrollFn();
    },
    scrollFn: function scrollFn() {
      // 获得当前滚动位置
      var letterSortContentWrapperDomTop = this.letterSortContentWrapperDom.scrollTop;
      var selectIndex = -1; // 在数组里遍历找当前滚动位置，及时退出循环

      this.letterSortContentDomItemOffsetArr.forEach(function (item, index) {
        if (letterSortContentWrapperDomTop >= item) {
          selectIndex = index;
          return;
        }
      }); // 当不一样才设置index值，节省运算成本

      if (this.currentIndex !== selectIndex) {
        this.currentIndex = selectIndex;
      }
    },
    // 定时关闭Toast
    setTime: function setTime() {
      var vm = this;

      if (vm.timer) {
        clearTimeout(vm.timer);
        vm.timer = null;
      }

      vm.timer = setTimeout(function () {
        vm.isDisplay = false;
      }, 500);
    },
    // 仅大部分安卓手机支持震动API，震动效果因机型不一致
    shake: function shake() {
      if (navigator.vibrate) {
        navigator.vibrate(50);
      } else if (navigator.webkitVibrate) {
        navigator.webkitVibrate(50);
      }
    },
    // 抛出事件
    clickItem: function clickItem(key, value, index) {
      /**
       * 列表项点击事件
       *
       * @event clickItem
       * @property {number} param1.listIndex 列表项索引
       * @property {number} param1.itemIndex 列表项子元素的索引
       * @property {object} param1.valueObj 子元素的值
       * @property {boolean} param1.isOpen 组件显示状态
       */
      this.$emit('clickItem', {
        listIndex: index,
        itemIndex: key,
        valueObj: value,
        isOpen: this.isOpen
      });
    },
    // 字母点击事件
    clickBar: function clickBar(index, value) {
      var _this = this;

      this.setTime();
      this.shake(); // scrolltop会导致scoll事件,需要异步延迟设置currentIndex

      setTimeout(function () {
        _this.currentIndex = index;
      }, 0);
      this.isDisplay = true;
      this.letterName = this.letterData[index].label;
      var letterSortContentDomItem = this.$refs.letterItemDom[index];
      this.letterSortContentWrapperDom.scrollTop = letterSortContentDomItem.offsetTop;
      /**
       * 字母点击事件
       *
       * @event clickLetter
       * @property {number} param1.letterIndex 点击索引
       * @property {object} param1.value 点击元素的值
       */

      this.$emit('clickLetter', {
        letterIndex: index,
        value: value
      });
    },
    // 开始触摸；开始计算移动距离
    moveBarStart: function moveBarStart(event) {
      var touch = event.targetTouches[0];
      this.startY = touch.pageY;
    },
    // 字母列表touchmove事件
    moveBar: function moveBar(event) {
      var _this2 = this;

      if (!this.isMove) {
        return;
      }

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      } // touchmove 轮询器，主要是为了判断当前是否是滑动停止但手指没有抬起的事件


      if (!this.touchmoveInterval) {
        // 清空touchmove次数
        this.touchmoveCount = 0;
        this.touchmoveInterval = setInterval(function () {
          if (_this2.touchmoveCount === 0) {
            // 触发停止滑动但是手指还没有离开时事件
            _this2.handleStopTouchMoveAndStillTouch();
          } // 清空touchmove次数


          _this2.touchmoveCount = 0;
        }, this.touchmoveIntervalTime);
      } // 会阻塞主线程


      if (this.isAndroidBaiduApp) {
        this.setTop(event);
      } else {
        var timer = setTimeout(function () {
          _this2.setTop(event, _this2.touchmoveCount); // 主动触发视图更新


          _this2.handleUpdateCount++;
        }, 0); // 维护 timer 数组

        this.touchmoveTimerArr.push(timer);
      }

      event.preventDefault();
    },
    setTop: function setTop(event, count) {
      var touch = event.changedTouches[0];
      this.endY = touch.pageY; // 会阻塞主线程

      var elem = document.elementFromPoint(touch.pageX, touch.pageY);

      if (!(elem && elem.nodeName.toLowerCase() === 'li' && elem.dataset)) {
        return;
      } // 如果字母没有改变，则不重新设置 scrollTop


      if (this.index === elem.dataset.index) {
        return;
      } // 计算 touchmove 次数


      if (count) {
        this.touchmoveCount++;
      } // 展现相应提示


      this.isDisplay = true;
      this.index = elem.dataset.index;

      if (this.index) {
        this.letterName = this.letterData[this.index].label;
        var top = this.$refs.letterItemDom[this.index].offsetTop;
        this.letterSortContentWrapperDom.scrollTop = top;
      }

      this.currentIndex = parseInt(this.index, 10);
    },
    // touchend时关闭提示
    moveBarEnd: function moveBarEnd(event) {
      // 清除轮询器句柄
      if (this.touchmoveInterval) {
        clearInterval(this.touchmoveInterval);
        this.touchmoveInterval = null;
      } // 清空异步队列


      this.clearTouchmoveTimerArr();
      this.distanceY = this.endY - this.startY; // 判断是否是移动

      if (this.startY !== Math.abs(this.distanceY) && Math.abs(this.distanceY) > 0) {
        this.setTime();
      }
      /**
       * 字母`touchend`事件
       *
       * @event handleTouchEnd
       */


      this.$emit('handleTouchEnd');
    },
    // 清空异步队列
    clearTouchmoveTimerArr: function clearTouchmoveTimerArr() {
      while (this.touchmoveTimerArr.length > 0) {
        var item = this.touchmoveTimerArr[0];

        if (item) {
          clearTimeout(item);
          item = null;
        }

        this.touchmoveTimerArr.splice(0, 1);
      }
    },
    // 停止滑动但是手指还没有离开时
    handleStopTouchMoveAndStillTouch: function handleStopTouchMoveAndStillTouch() {
      // 清除轮询器句柄
      if (this.touchmoveInterval) {
        clearInterval(this.touchmoveInterval);
        this.touchmoveInterval = null;
      } // 清空异步队列


      this.clearTouchmoveTimerArr(); // 主动触发视图更新

      this.handleUpdateCount++;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"letterData": {"type": Array,"default": function () { return []; },"required": true},"color": {"type": String,"default": "rgba(0, 0, 0, .8)","required": false},"top": {"type": String,"required": false},"bottom": {"type": String,"required": false},"isOpen": {"type": Boolean,"default": false,"required": false},"isMove": {"type": Boolean,"default": false,"required": false},"zIndex": {"type": String,"default": "500","required": false}};
            obj.components = {"c-row": require("../Row/Row"),"c-icon": require("../Icon/Icon"),"c-link": require("../Link/Link"),"c-divider": require("../Divider/Divider"),"c-touchable-feedback": require("../TouchableFeedback/TouchableFeedback"),"c-letter-sort-toast": require("./LetterSortToast")};

            
            

            


            
            obj.data = function () {
                return {"letterName": "A","defaultColor": "#999","isSelectedListColor": ((this["color"])?(this["color"]):("#000")),"isDisplay": false,"ticking": false,"index": 0,"timer": null,"currentIndex": -1,"letterSortContentDom": null,"letterSortContentWrapperDom": null,"startY": 0,"endY": 0,"distanceY": 0,"letterSortContentDomItemLen": 0,"letterSortContentDomItemOffsetArr": [],"transformLastTop": 0,"touchmoveTimerArr": [],"handleUpdateCount": 1,"touchmoveInterval": null,"touchmoveIntervalTime": 100,"touchmoveCount": 0,"isAndroidBaiduApp": false,"isNew": false};
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
            
            obj._scopeId = "data-a-84a65b3a";

            module.exports = obj;

            
        });
    