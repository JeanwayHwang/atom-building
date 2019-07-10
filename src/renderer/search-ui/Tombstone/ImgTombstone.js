
        define(function (require, exports, module) {

            // render function
            var _module1 = {
                exports: {}
            };

            (function (module, exports) {
module.exports = {
render: function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"img-tombstone__2W5jR",style:([
        {
            padding: '0 1px'
        },
        _vm.rowTile
            ? {
                padding: '0'
            }
            : {}
    ])},_vm._l((_vm.column),function(columnItem,columnIndex){return _c('div',{key:columnIndex,staticClass:"img-tombstone-column__2Z04_",style:([
            {
                paddingLeft: '1px',
                paddingRight: '1px'
            },
            columnIndex === 0 && _vm.rowTile
                ? {
                    paddingLeft: '0',
                    paddingRight: '1px'
                }
                : {},
            columnIndex === _vm.column - 1 && _vm.rowTile
                ? {
                    paddingLeft: '1px',
                    paddingRight: '0'
                }
                : {}
        ])},_vm._l((_vm.list),function(item,index){return (index % _vm.column === columnIndex)?(_c('c-img-tombstone-item',{key:index,attrs:{"wh-scale":item.whScale,"index":index}})):(_vm._e())}))}))},
staticRenderFns: []
}

})(_module1, _module1.exports)

            /* get script output data */
            var _module2 = {
                exports: {}
            };
            (function (module, exports) {
    "use strict";
            })(_module2, _module2.exports);

            var obj = _module2.exports.default || _module2.exports;

            var cssModules = {"$style":{"imgTombstone":"img-tombstone__2W5jR","imgTombstoneColumn":"img-tombstone-column__2Z04_"}};

            obj.render = obj.render || _module1.exports.render;

            obj.staticRenderFns = _module1.exports.staticRenderFns;

            obj.props = {"column": {"type": Number,"default": 2},"type": {"type": String,"default": "waterfall"},"rowTile": {"type": Boolean,"default": false},"listWaterfall": {"type": Array,"default": function () { return [{"whScale": 1.29},{"whScale": 1.96},{"whScale": 1.65},{"whScale": 1.1},{"whScale": 1.1},{"whScale": 1.65},{"whScale": 1.65},{"whScale": 1.1},{"whScale": 1.29},{"whScale": 1.96},{"whScale": 1.47},{"whScale": 1.1}]; }},"listSame": {"type": Array,"default": function () { return [{"whScale": 0.75},{"whScale": 0.75},{"whScale": 0.75},{"whScale": 0.75},{"whScale": 0.75},{"whScale": 0.75},{"whScale": 0.75},{"whScale": 0.75}]; }}};
            obj.components = {"c-img-tombstone-item": require("./ImgTombstoneItem")};

            
            

            


            
            obj.data = function () {
                return {"list": (((this["type"]==="waterfall"))?(this["listWaterfall"]):(this["listSame"]))};
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
    