<template>
    <div class="preview">
        
        <div class="download-btn-wrap">
            <el-button type="primary" round class="download-btn" @click="downloadFile">一键生成代码</el-button>
            <h3 class="download-tip">生成产物可供FE直接开始交互逻辑的开发，产物清单：</h3>
            <ul class="file-list">
                <li>index.atom（含上述样式）</li>
                <li>data_modifier.php（含基本框架）</li>
                <li>changelog.inc（含迭代日志）</li>
            </ul>
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
import { remote } from 'electron';

export default {
    name: 'preview',
    components: { cRow, cSpan, cImg, cLine, cBtn, cLink, cLabel },
    data: () => {
        return {};
    },
    mounted() {
    },
    methods: {
        downloadFile() {
            let {fe, pm, note, passport, date} = remote.getGlobal('infoModel').cardInfo || {};
            if (!fe || !pm || !note || !date)  {
                this.$confirm('您尚未填写卡片信息', '提示', {
                    confirmButtonText: '去填写',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$parent.activeIndex = '2';
                    this.$message({
                        type: 'info',
                        message: `填写完记得点保存哦`
                    });
                });
                return;
            }
            this.$alert('产物已下载到您桌面，敬请查阅', {
                confirmButtonText: '我知道了',
                type: 'success',
                callback: action => {
                    this.$message({
                        type: 'info',
                        message: `您可以继续DIY卡片模板~`
                    });
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../asset/base.css';
@import '../asset/main.css';
.preview {
    width: 100%;
    height: 100%;
    position: relative;
}
.download-btn-wrap {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 20px;
    text-align: center;
    .download-btn {
        display: inline-block;
    }
    .download-tip {
        font-size: 10px;
        line-height: 14px;
        color: #333;
        font-weight: 500;
        text-align: left;
    }
    .file-list {
        text-align: left;
        list-style: round($number: 0);
        li {
            font-size: 10px;
            line-height: 12px;
            color: #666;
        }
    }
}
</style>
