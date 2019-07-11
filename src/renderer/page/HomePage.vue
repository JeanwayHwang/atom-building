<template>
    <div class="home-page" @click="closeTplList">
        <!-- 顶部导航Tab -->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409EFF">
            <el-menu-item index="1">新模板DIY</el-menu-item>
            <el-menu-item index="2">新模板信息</el-menu-item>
            <el-menu-item index="3">现有卡片查询</el-menu-item>
            <el-menu-item index="4">卡片二维码工具</el-menu-item>
        </el-menu>
        <div class="main-wrap">
            <!-- 搭建&预览区-->
            <div class="wrapper" v-show="activeIndex == 1">
                <div class="edit-wrap">
                    <div class="add-more-wrap">
                        <el-button class="add-more" type="primary" icon="el-icon-circle-plus-outline" @click.stop="showTplList">添加模块</el-button>
                    </div>
                    <div class="template-list" :class="{'showTplBox': showTplBox}">
                        <el-row type="flex" class="row-bg" justify="space-around">
                            <el-col :span="6"><el-button type="primary" size="mini" plain>框架</el-button></el-col>
                            <el-col :span="6"><el-button type="primary" size="mini" plain>摘要</el-button></el-col>
                            <el-col :span="6"><el-button type="primary" size="mini" plain>按钮</el-button></el-col>
                            <el-col :span="6"><el-button type="primary" size="mini" plain>文本</el-button></el-col>
                            <el-col :span="6"><el-button type="primary" size="mini" plain>章节</el-button></el-col>
                            <el-col :span="6"><el-button type="primary" size="mini" plain>正文</el-button></el-col>
                            <el-col :span="6"><el-button type="primary" size="mini" plain>图文</el-button></el-col>
                            <el-col :span="6"><el-button type="primary" size="mini" plain>运营位</el-button></el-col>
                        </el-row>
                    </div>
                </div>
                <div class="preview-wrap">
                    <Preview></Preview>
                </div>
            </div>
            <!-- 基本信息区 -->
            <card-info v-show="activeIndex == 2"></card-info>
            <!-- 现有卡片查询区 -->
            <div class="search-wrap" v-show="activeIndex == 3">
                <el-button type="primary" plain class="go2wiki-btn" @click="go2Wiki">现有小说卡片一览</el-button>
                <iframe src="http://soy.baidu-int.com:8905/templateList?searchwd=%E5%B0%8F%E8%AF%B4" frameborder="0" class="iframe-box"></iframe>
            </div>
            <iframe src="https://www.qr-code-generator.com" frameborder="0" v-if="activeIndex == 4" class="iframe-box2"></iframe>
        </div>
    </div>
</template>

<script>
import { ipcRenderer, shell } from 'electron';
import Preview from '../component/Preview';
import CardInfo from '../component/CardInfo';

  export default {
    name: 'home-page',
    components: { Preview, CardInfo },
    data: () => {
        return {
            activeIndex: '1',
            showTplBox: false
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            this.activeIndex = key;
        },
        go2Wiki() {
            shell.openExternal('http://wiki.baidu.com/pages/viewpage.action?pageId=697094633');
        },
        showTplList() {
            this.showTplBox = true;
        },
        closeTplList() {
            this.showTplBox = false;
        }
    },
  }
</script>

<style lang="scss">
.home-page {
    width: 100%;
    height: 600px;
}
.main-wrap {
    width: 100%;
    height: 539px;
    position: relative;
}
.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}
.edit-wrap {
    width: auto;
    flex-grow: 1;
    height: 100%;
    position: relative;
    .add-more-wrap {
        width: 100%;
        padding: 20px 0;
        text-align: center;
        .add-more {
          display: inline-block;
        }
    }
    .template-list {
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        bottom: -60px;
        transition: bottom 0.5s;
    }
    .showTplBox {
        bottom: 0;
    }
  .row-bg {
      padding: 10px 10px;
      background-color: #f9fafc;
  }
}
.preview-wrap {
    flex-grow: 0;
    width: 360px;
    height: 100%;
    border-left: solid 1px #eee;
}
.search-wrap {
    width: 100%;
    height: 100%;
    position: relative;
}
.go2wiki-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 99;
}
.iframe-box {
    width: 111%;
    height: 111%;
    position: absolute;
    left: 0;
    top: 0;
    padding-left: 30px;
    box-sizing: border-box;
    transform: scale(0.9);
    transform-origin: 0 0;
}
.iframe-box2 {
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
