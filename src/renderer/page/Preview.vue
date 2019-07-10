<template>
    <div id="preview">
        <c-link>
            <c-row>
                <c-span col="4">
                    <!-- <c-img :src="bookinfo.logo" type="l"/> -->
                </c-span>
                <c-span col="8">
                    <c-line>作者：信息</c-line>
                    <c-line>
                        <span class="update-status">状态：信息</span>
                        <c-label text="连载中" type="box_orange"/>
                    </c-line>
                    <c-line>字数：564</c-line>
                    <c-line clamp="2">简介：信息信息信息</c-line>
                </c-span>
            </c-row>
        </c-link>
        <c-row>
            <c-span col="6">
                <c-btn text="好看"/>
            </c-span>
        </c-row>
        <div class="footer-wrap">
            <c-link>
                <span class="xcx-icon"></span>
                <span class="c-color-gray footer-text">度读小说 智能小程序</span>
            </c-link>
        </div>
    </div>
</template>

<script>
import cRow  from '../search-ui/Row/Row'
import cSpan  from '../search-ui/Row/Span'
import cImg  from '../search-ui/Image/Image'
import cLine  from '../search-ui/Line/Line'
import cBtn  from '../search-ui/Button/Button'
import cLink  from '../search-ui/Link/Link'
import cLabel from '../search-ui/Label/Label'

export default {
    name: 'preview',
    components: { cRow, cSpan, cImg, cLine, cBtn, cLink, cLabel },
    data: () => {
        return {};
    },
    mounted() {
    }
}
</script>

<style lang="scss">
@import '../asset/base.css';
@import '../asset/main.css';
</style>
