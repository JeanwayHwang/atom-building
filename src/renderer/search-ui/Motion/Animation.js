
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrapper",staticClass:"wrapper"},[_vm._t("default")],2)},
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

var _animations = _interopRequireDefault(require("./animations"));

var _Flip = _interopRequireDefault(require("./Flip"));

var _promise = _interopRequireDefault(require("@searchfe/promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  mounted: function mounted() {
    this.flip = new _Flip["default"]();
  },
  methods: {
    first: function first(el) {
      if (!el) {
        el = this.$slots["default"][0].elm;
      }

      return this.flip.first(el);
    },
    last: function last(el) {
      if (!el) {
        el = this.$slots["default"][0].elm;
      }

      return this.flip.last(el);
    },
    play: function play() {
      var _this = this;

      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var el = this.$slots["default"][0].elm;
      var flipKey = 'flip';
      var options = Object.assign({}, this.options || {}, opt);
      var animationObjs = [];

      if (this.animations) {
        Object.keys(this.animations).forEach(function (key) {
          if (_animations["default"][key]) {
            var config = Object.assign({}, _this.animations[key] || {}, conf);

            if (key === flipKey) {
              config.delta = _this.flip.delta;
            }

            var animation = _animations["default"][key](el, config, options);

            animationObjs.push(animation);
          }
        });
      }

      if (this.animationObjs) {
        this.cancel();
      }

      this.animationObjs = animationObjs;
      return _promise["default"].all(animationObjs.map(function (_ref) {
        var promise = _ref.promise;
        return promise;
      }));
    },
    resume: function resume() {
      if (!this.animationObjs) {
        return false;
      }

      this.animationObjs.forEach(function (_ref2) {
        var animation = _ref2.animation;

        // fix 部分 anroid 机重复 play() 动画不执行的 bug
        if (animation.playState === 'running') {
          return;
        }

        animation.pause();
        setTimeout(function () {
          animation.play();
        }, 0);
      });
      return true;
    },
    pause: function pause() {
      if (!this.animationObjs) {
        return false;
      }

      this.animationObjs.forEach(function (_ref3) {
        var animation = _ref3.animation;
        animation.pause();
      });
      return true;
    },
    cancel: function cancel() {
      if (!this.animationObjs) {
        return false;
      }

      this.animationObjs.forEach(function (_ref4) {
        var animation = _ref4.animation;
        animation.cancelFix();
      });
      return true;
    }
  }
};
exports["default"] = _default;
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"animations": {"type": Object,"required": true},"options": {"type": Object,"default": function () { return {}; }}};
            obj.components = {};

            
            

            


            
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
            
            obj._scopeId = "data-a-37131aca";

            module.exports = obj;

            
        });
    