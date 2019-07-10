
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)},
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
 * @file Lottie
 * @author wangkai37
 * @doc https://airbnb.io/lottie/#/web
 */
var _default = {
  mounted: function mounted() {
    this.init(this.option);
  },
  methods: {
    /**
     * 初始化，返回 animation instance
     *
     * @public
     * @param {Object} option 动效配置
     */
    init: function init(option) {
      var _this = this;

      // 异步加载 lottie js，因为 mounted 才能拿到 dom，所以没有必要一开始就加载

      /* eslint-disable fecs-no-require */
      require(['lottie-web'], function (lottie) {
        _this.lottie = lottie;
        option.container = _this.$el;
        _this.animationIns = _this.lottie.loadAnimation(option);
        /**
         * 动画实例加载完成事件，在这里可以拿到动画实例 animationIns
         *
         * @event ready
         * @property {object} param1 参数1
         * @property {object} param1.animationIns 动画实例
         */

        _this.$emit('ready', {
          animationIns: _this.animationIns
        });
      });
      /* eslint-enable fecs-no-require */

    },

    /**
     * 得到 animation instance
     *
     * @public
     * @return {Object} animationIns
     */
    getAnimationIns: function getAnimationIns() {
      return this.animationIns;
    },

    /**
     * 得到 lottie 对象
     *
     * @public
     * @return {Object} lottie
     */
    getLottie: function getLottie() {
      return this.lottie;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"option": {"type": Object,"required": true}};
            obj.components = {};

            
            

            


            
            obj.data = function () {
                return {"lottie": null,"animationIns": null};
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
    