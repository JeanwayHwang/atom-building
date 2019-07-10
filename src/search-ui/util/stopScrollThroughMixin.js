/**
 * @file 滚动穿透 mixin
 * @author wangkai37<waka931124@gmail.com>
 */

export default {
    methods: {
        // touch start
        handleTouchStartStopScrollThroughMixin(e) {
            this.startY = e.touches[0].clientY;
        },
        // touch move
        handleTouchMoveStopScrollThroughMixin(e, el) {
            this.touchMoveEvent = e;
            // 0 代表该没有滚动区域；1 代表有滚动区域且滚动到了最上面；2 代表滚动到底部了且滚动到了最下面；3 代表滚动在滚动区域
            this.status = 3;
            // 拿到需要滚动的 dom
            const currentY = e.touches[0].clientY;
            if (el.scrollTop === 0) {
                // 如果内容小于容器则同时禁止上下滚动
                this.status = el.offsetHeight >= el.scrollHeight
                    ? 0
                    : 1;
            }
            else if (el.scrollTop + el.offsetHeight + 1 >= el.scrollHeight) {
                // 已经滚到底部了只能向上滚动
                this.status = 2;
            }
            if (this.status !== 3) {
                // 判断当前的滚动方向；10 为向上；01 为向下
                this.direction = currentY - this.startY > 0
                    ? 1
                    : 2;
                // 没有滚动区域
                if (this.status === 0) {
                    e.cancelable && e.preventDefault();
                }
                // 已经滑到最上了还滑
                else if (this.status === 1 && this.direction === 1) {
                    e.cancelable && e.preventDefault();
                }
                // 已经滑到最下了还滑
                else if (this.status === 2 && this.direction === 2) {
                    e.cancelable && e.preventDefault();
                }
            }
        }
    }
};
