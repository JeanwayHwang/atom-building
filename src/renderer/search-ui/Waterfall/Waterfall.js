
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-infinite-scroll',{ref:"infiniteScroll",attrs:{"mode":_vm.mode,"load-btn-show":_vm.loadBtnShow,"load-btn-text":_vm.loadBtnText,"loading-text":_vm.loadingText,"load-end-text":_vm.loadEndText,"load-fail-text":_vm.loadFailText,"buffer-height-px":_vm.infiniteScrollBottomDistance},on:{"load":_vm.handleLoad}},[_c('div',{slot:"loadBtnSlot"},[_vm._t("loadBtnSlot")],2),_vm._v(" "),_c('div',{ref:"waterfall",staticClass:"waterfall__3BeF9",style:({
            paddingLeft: _vm.gapOpts.outside + 'px',
            paddingRight: _vm.gapOpts.outside + 'px'
        })},_vm._l((_vm.column),function(columnItem,columnIndex){return _c('div',{key:columnIndex,ref:"column",refInFor:true,staticClass:"column__3XM7_",style:([
                {
                    paddingLeft: _vm.gapOpts.inside / 2 + 'px',
                    paddingRight: _vm.gapOpts.inside / 2 + 'px'
                },
                columnIndex === 0
                    ? {
                        paddingLeft: 0
                    }
                    : {},
                columnIndex === _vm.column - 1
                    ? {
                        paddingRight: 0
                    }
                    : {}
            ])},[_vm._l((_vm.imgListData),function(imgItem,imgIndex){return [(imgItem && !imgItem.async && imgIndex % _vm.column === columnIndex)?(_c('div',{key:imgIndex + '_' + columnIndex,staticClass:"img-item-wrapper"},[_c('img-item',{attrs:{"index":imgIndex,"data":imgItem,"is-u-i-webview":_vm.isUIWebview,"margin-bottom":_vm.gapOpts.bottom,"border-radius":_vm.borderRadius},on:{"click":_vm.handleImgClick}})],1)):(_vm._e()),_vm._v(" "),(imgItem && imgItem.async && imgItem.columnIndex === columnIndex)?(_c('div',{key:imgIndex + '_' + columnIndex,staticClass:"img-item-wrapper"},[_c('img-item',{attrs:{"index":imgIndex,"data":imgItem,"is-u-i-webview":_vm.isUIWebview,"margin-bottom":_vm.gapOpts.bottom,"border-radius":_vm.borderRadius},on:{"click":_vm.handleImgClick}})],1)):(_vm._e())]})],2)}))])},
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
 * @file Waterfall
 * @author wangkai37(wangkai37@baidu.com)
 */
var _default = {
  mounted: function mounted() {
    this.attach(); // 计算列

    this.calculateColumn(); // 判断是否是 UIWebview

    this.judgeIsUIWebview();
  },
  methods: {
    attach: function attach() {
      // 获得浏览器高度
      this.getBrowserHeight(); // 计算距离顶部的距离

      this.getWaterfallTop();
    },
    detach: function detach() {},
    handleLoad: function handleLoad(obj) {
      /**
       * 选项卡改变时触发.
       *
       * @event load
       */
      this.$emit('load', obj);
    },
    reset: function reset() {
      this.$refs.infiniteScroll.reset();
    },
    // 获取浏览器内页面可用高度
    getBrowserHeight: function getBrowserHeight() {
      this.browserHeight = window.innerHeight;
    },
    // 计算距离顶部的距离
    getWaterfallTop: function getWaterfallTop() {
      this.waterfallTop = this.getElementTop(this.$refs.waterfall);
    },
    // 获取 dom 绝对位置的纵坐标
    getElementTop: function getElementTop(element) {
      // 对象解构
      var actualTop = element.offsetTop,
          current = element.offsetParent;

      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }

      return actualTop;
    },
    // 判断 UIWebview
    judgeIsUIWebview: function judgeIsUIWebview() {
      // 如果是 iOS 的手百和 UC，则为 UIWebview
      if (this.isIOS() && (this.isBaiduApp() || this.isUC())) {
        this.isUIWebview = true;
      }
    },
    // 计算列
    calculateColumn: function calculateColumn() {
      var _this = this;

      // 列宽
      this.columnWidth = this.$refs.column[0].offsetWidth; // 不传宽高

      if (this.type === 1) {
        this.$refs.column.forEach(function (columnDom, columnIndex) {
          var columnItem = {
            // 初始高度设置为距离顶部的距离
            height: _this.waterfallTop
          };
          var items = columnDom.querySelectorAll('.img-item-wrapper'); // nodelist 在 android 浏览器上没有 forEach 方法，所以用 for 循环

          for (var i = 0; i < items.length; i++) {
            // dom item
            var domItem = items[i]; // 真正的 imgList 里的 index

            var imgItemIndex = _this.column * i + columnIndex; // TODO: 处理同步数据
            // 这里赋值一些同步数据所欠缺的数据

            var imgItem = _this.imgListData[imgItemIndex]; // 记录索引

            imgItem.index = imgItemIndex; // 记录列高

            imgItem.columnHeight = columnItem.height; // 真实宽度

            imgItem.realWidth = _this.columnWidth; // 真实高度；高度

            imgItem.realHeight = domItem.offsetHeight; // 如果没有高度和宽度传入，赋值宽高

            if (!(imgItem.width && imgItem.height)) {
              imgItem.width = imgItem.realWidth;
              imgItem.height = imgItem.realHeight;
            } // 宽高比


            imgItem.whScale = _this.columnWidth / imgItem.realHeight; // 这里 +2 是因为有一个 margin-bottom: 2px；这里需要在记录到项以后，再加到列高度里

            columnItem.height += imgItem.realHeight + 2; // 这里直接复制 vnode 实例会导致无限加载不触发
            // this.$set(this.imgListData, imgItemIndex, imgItem);
          } // 把每一列放进去


          _this.columnArr.push(columnItem);
        });
      }
    },
    // 得到最小列索引
    getMinColumnIndex: function getMinColumnIndex() {
      var minIndex = 0;
      var height = this.columnArr[minIndex].height;
      this.columnArr.forEach(function (columnItem, index) {
        if (columnItem.height < height) {
          height = columnItem.height;
          minIndex = index;
        }
      });
      return minIndex;
    },
    // 处理 diffImgList
    handleDiffImgList: function handleDiffImgList(obj) {
      var _this2 = this;

      this.diffImgList.forEach(function (imgItem, index) {
        var imgIndex = obj.oldLength + index; // 计算宽高

        _this2.getImgWidthHeight(imgItem.src, function (width, height, error) {
          // 如果加载错误
          if (error) {
            // 增加加载错误标识
            imgItem.error = true;
          } // 索引 index


          imgItem.index = imgIndex; // 异步

          imgItem.async = true; // 宽度

          imgItem.width = width; // 高度

          imgItem.height = height; // 宽高比

          imgItem.whScale = width / height; // 真实宽度

          imgItem.realWidth = _this2.columnWidth;
          imgItem.realHeight = Math.ceil(_this2.columnWidth / imgItem.whScale); // 真实高度
          // 如果没有颜色，使用默认颜色

          if (!imgItem.color) {
            imgItem.color = _this2.defaultPlaceholderImgColor;
          }

          _this2.diffCount++; // 数量++
          // 在整个 diffImgList 都加载完以后统一添加到 vm 里，避免每一次都添加造成的卡顿问题

          if (_this2.diffCount === _this2.diffImgList.length) {
            _this2.afterAllDiffImgLoaded();

            _this2.imgListData = _this2.imgListData.concat(_this2.diffImgList); // 重置数量

            _this2.diffCount = 0; // 加载完成

            _this2.isLoadingImg = false; // 记录旧长度；旧长度等于之前的旧长度加上新增的长度

            _this2.oldImgListLength += _this2.diffImgList.length;
          }
        });
      });
    },
    // 在所有 diffImg 加载完毕后
    afterAllDiffImgLoaded: function afterAllDiffImgLoaded() {
      var _this3 = this;

      this.diffImgList.forEach(function (imgItem, index) {
        // 最小列高度
        var minColumnIndex = _this3.getMinColumnIndex(); // 在图片里设置放到哪一列的标志


        imgItem.columnIndex = minColumnIndex; // 列高度

        imgItem.columnHeight = _this3.columnArr[minColumnIndex].height; // 这里如果不做处理，有可能获取不到 realHeight，因为是异步回调

        if (_this3.diffImgList[index].realHeight) {
          _this3.columnArr[minColumnIndex].height += imgItem.realHeight; // 列高度++
        } else {// 获取不到 realHeight
          }
      });
    },
    // 得到图片的宽高；为了保证兼容性，统一使用回调的方式
    getImgWidthHeight: function getImgWidthHeight(imgSrc, callback) {
      var image = new Image();
      image.src = imgSrc;

      image.onload = function () {
        callback(image.width, image.height);
      };

      image.onerror = function () {
        callback(0, 0, true);
      };
    },
    // 得到当前滚动到顶部的位置
    getScrollTop: function getScrollTop(el) {
      if (!el) {
        el = window;
      }

      var hasScrollTop = 'scrollTop' in el;
      return hasScrollTop ? el.scrollTop : el.pageYOffset;
    },
    handleImgClick: function handleImgClick(obj) {
      /**
       * imgclick event.
       *
       * @event imgclick
       * @property {object} param1 图片对象
       * @property {number} param1.index 当前图片在数组中的索引
       * @property {function} param1.success 加载成功指令
       * @property {function} param1.complete 加载到尾部指令
       * @property {function} param1.fail 加载失败指令
       */
      this.$emit('imgclick', obj);
    },
    // iOS
    isIOS: function isIOS() {
      return /(iphone|ipod|ipad)/.test(navigator.userAgent.toLowerCase());
    },
    // 手百
    isBaiduApp: function isBaiduApp() {
      return /baiduboxapp/i.test(navigator.userAgent.toLowerCase());
    },
    // UC
    isUC: function isUC() {
      return /ucbrowser/i.test(navigator.userAgent.toLowerCase());
    }
  },
  watch: {
    // 监测 imgList 的变化
    imgList: function imgList(newVal, oldVal) {
      // 如果不是在加载中；这里用 isLoadingImg 是为了做一个保护，因为无限滚动加载的完成事件是暴露到最外层的，在自测时发现会有同时请求多组数据，由于获取图片宽高不是同步的，需要在回调之后执行；如果不做保护会导致数据加载混乱，所以这里做了处理
      if (!this.isLoadingImg) {
        // 设置加载中状态
        this.isLoadingImg = true; // 记录旧长度

        if (!this.oldImgListLength) {
          this.oldImgListLength = oldVal.length;
        } // 得到 diffImgList；从旧长度开始截起


        this.diffImgList = newVal.slice(this.oldImgListLength, newVal.length); // 处理 diffImgList

        this.handleDiffImgList({
          oldLength: this.oldImgListLength
        });
      }
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"waterfall":"waterfall__3BeF9","column":"column__3XM7_"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"imgList": {"type": Array},"column": {"type": Number,"default": 2},"type": {"type": Number,"default": 1},"defaultPlaceholderImgColor": {"type": String,"default": "#efefef"},"loadingText": {"type": String,"default": "正在加载..."},"loadEndText": {"type": String,"default": "到底了 没有更多内容了"},"loadFailText": {"type": String,"default": "加载失败 点击重新加载"},"mode": {"type": String,"default": "scroll"},"loadBtnShow": {"type": Boolean,"default": true},"loadBtnText": {"type": String,"default": "展开更多"},"gapOpts": {"type": Object,"default": function () { return {"outside": 2,"inside": 2,"bottom": 2}; }},"borderRadius": {"type": Object}};
            obj.components = {"img-item": require("./ImgItem"),"c-infinite-scroll": require("../InfiniteScroll/InfiniteScroll"),"c-img-mask": require("../Image/ImageMask")};

            
            

            


            
            obj.data = function () {
                return {"imgListData": this["imgList"],"diffImgList": [],"diffCount": 0,"infiniteScrollBottomDistance": 1000,"lazyLoadFixDistance": 1000,"columnWidth": 0,"columnArr": [],"oldImgListLength": 0,"isLoadingImg": false,"isUIWebview": false,"waterfallTop": 0,"browserHeight": 0,"scrollTop": 0,"lazyLoadIndex": 0};
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
    