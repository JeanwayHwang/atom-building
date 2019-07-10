<template>
  <div id="wrapper">
    <div class="edit-wrap">
      <!-- 顶部导航Tab -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">模板搭建</el-menu-item>
        <el-menu-item index="2">基本信息</el-menu-item>
        <el-menu-item index="3">现有卡片查询</el-menu-item>
      </el-menu>
      <!-- 基本信息区 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>新建卡片日志填写</span>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="FE">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="PM">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="卡片简介（迭代日志用）">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="三级单">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="preview-wrap">
      <Preview></Preview>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron';
const shell = require('electron').shell;
import Preview from './Preview';

  export default {
    name: 'home-page',
    components: { Preview },
    data: () => {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        if (key === '3') {
          shell.openExternal('http://soy.baidu-int.com:8905');
        }
        console.log(this.activeIndex);
      }
    },
  }
</script>

<style lang="scss">

#wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.edit-wrap {
  flex: 1;
  height: 100%;
}
.preview-wrap {
  flex: 1;
  height: 100%;
  border-left: solid 1px #ccc;
}
</style>
