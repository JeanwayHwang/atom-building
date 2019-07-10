/**
 * @file 屏幕翻转 mixin
 * @author wangkai37<waka931124@gmail.com>
 */

export default {
    mounted() {
        this.addOrientationListenerMixin();
    },
    activated() {
        this.addOrientationListenerMixin();
    },
    deactivated() {
        this.removeOrientationListenerMixin();
    },
    beforeDestory() {
        this.removeOrientationListenerMixin();
    },
    methods: {
        addOrientationListenerMixin() {
            // 横竖屏变化监听；媒体查询 js api 参考：
            // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia
            // https://aotu.io/notes/2017/01/31/detect-orientation/index.html
            // https://caniuse.com/#search=matchmedia
            if (!window.matchMedia) {
                return;
            }
            this.mediaQueryList = window.matchMedia('(orientation: portrait)');
            this
                .mediaQueryList
                .addListener(this.mediaQueryOrientationListenerMixin);
        },
        removeOrientationListenerMixin() {
            if (!window.matchMedia) {
                return;
            }
            // 移除横竖屏变化监听
            this
                .mediaQueryList
                .removeListener(this.mediaQueryOrientationListenerMixin);
        },
        mediaQueryOrientationListenerMixin(mediaQueryList) {
            if (mediaQueryList && mediaQueryList.matches) {
                // 竖屏
            }
            else {
                // 横屏
            }
        }
    }
};
