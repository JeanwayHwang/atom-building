<template>
    <div class="home-page">
        <!-- 顶部导航Tab -->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409EFF">
            <el-menu-item index="1">模板搭建</el-menu-item>
            <el-menu-item index="2">基本信息</el-menu-item>
            <el-menu-item index="3">现有卡片查询</el-menu-item>
            <el-menu-item index="4">生成卡片二维码</el-menu-item>
        </el-menu>
        <div class="main-wrap">
            <!-- 搭建&预览区-->
            <div class="wrapper" v-show="activeIndex == 1">
                <div class="edit-wrap"></div>
                <div class="preview-wrap">
                    <Preview></Preview>
                </div>
            </div>
            <!-- 基本信息区 -->
            <card-info v-show="activeIndex == 2"></card-info>
            <!-- 现有卡片查询区 -->
            <div class="search-wrap" v-show="activeIndex == 3">
                <el-button type="primary" plain class="go2wiki-btn" @click="go2Wiki">现有小说卡片一览</el-button>
                <iframe src="http://soy.baidu-int.com:8905" frameborder="0" class="iframe-box"></iframe>
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
            activeIndex: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            this.activeIndex = key;
        },
        go2Wiki() {
            shell.openExternal('http://wiki.baidu.com/pages/viewpage.action?pageId=697094633');
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
    flex: 1;
    height: 100%;
    position: relative;
}
.preview-wrap {
    flex: 1;
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
