
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-img',{staticClass:"c-video-thumbnail",attrs:{"src":_vm.img,"type":_vm.imgType,"show-num":_vm.formatTime,"icon-type":_vm.maskIconType,"default-image-type":_vm.defaultImageType,"maskgap-size":_vm.showColDefined,"show-txt":_vm.showTxt,"circle-mask-icon":_vm.icon,"circle-mask-text":_vm.icontxt,"circle-mask-size":_vm.showColDefined == 12 ? 'large' : 'small',"lazy":_vm.lazy,"border-radius":_vm.imgBorderRadius,"aria-hidden":"true"},nativeOn:{"click":function($event){_vm.$emit('click', $event)}}})},
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
 * @file 视频图片
 * @author guoyong <guoyong03@baidu.com>
 */
var _default = {
  computed: {
    formatTime: function formatTime() {
      if (!this.duration || !parseInt(this.duration, 10) || this.showTxt) {
        return this.showTxt;
      }

      this.duration = parseInt(this.duration, 10);

      if (this.duration > 3600 * 24) {
        // 大于24小时直接显示小时
        return parseInt(this.duration / 3600, 10) + '小时';
      }

      var minute = parseInt(this.duration / 60, 10);
      var second = this.duration % 60;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;
      return minute + ':' + second;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"img": String,"imgType": String,"duration": [String,Number],"icontypeDefined": {"type": String,"default": "video_play3"},"icontxt": String,"showColDefined": [String,Number],"showTxt": [String,Number],"maskIconType": String,"defaultImageType": String,"lazy": {"type": Boolean,"default": false},"imgBorderRadius": {"type": Object}};
            obj.components = {"c-img": require("../Image/Image"),"c-icon": require("../Icon/Icon")};

            
            

            
    var computed = obj.computed || {};
    computed["icon"] = function () { return ((this["icontypeDefined"])?(this["icontypeDefined"]):("video_play3")); };
    obj.computed = computed;



            
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
            
            

            module.exports = obj;

            
        });
    