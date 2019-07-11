<template>
    <div class="info-form">
        <h1 slot="header" class="form-title clearfix">新卡迭代日志</h1>
        <el-form ref="form" :model="cardInfo" label-width="80px">
            <el-form-item label="FE">
                <el-input v-model="cardInfo.fe" placeholder="邮箱前缀"></el-input>
            </el-form-item>
            <el-form-item label="PM">
                <el-input v-model="cardInfo.pm" placeholder="邮箱前缀"></el-input>
            </el-form-item>
            <el-form-item label="卡片简介">
                <el-input v-model="cardInfo.note" placeholder="用于前端迭代日志"></el-input>
            </el-form-item>
            <el-form-item label="三级单">
                <el-input v-model="cardInfo.passport" placeholder="选填"></el-input>
            </el-form-item>
            <el-form-item label="创建时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="cardInfo.date" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="saveCardInfo">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { remote } from 'electron';
export default {
    name: 'card-info',
    data: () => {
        return {
            cardInfo: {
                fe: '',
                pm: '',
                note: '',
                passport: '',
                date: ''
            }
        };
    },
    mounted() {},
    methods: {
        saveCardInfo() {
            let {fe, pm, note, passport, date} = this.cardInfo;
            if (fe && pm && note && date) {
                this.cardInfo.date = this.formatDate(date);
                this.$message({
                    message: '保存成功',
                    type: 'success'
                });
                remote.getGlobal('infoModel').cardInfo = this.cardInfo;
            }
            else {
                this.$message.error('请填写完整');
            }
        },
        formatDate(date) {
            const padLeft = num => {  
                if(parseInt(num) < 10){  
                    num = '0'+num;  
                }  
                return num;  
            }
            var oDate = new Date(date),  
                oYear = oDate.getFullYear(),  
                oMonth = oDate.getMonth()+1,  
                oDay = oDate.getDate(); 
            return oYear +'-'+ padLeft(oMonth) +'-'+ padLeft(oDay);
        }
    }
}
</script>

<style lang="scss">
.info-form {
    width: 400px;
    height: auto;
    position: absolute;
    left: 50%;
    top: 80px;
    margin-left: -200px;
    margin-bottom: 20px;
}
.form-title {
    text-align: center;
    font-size: 22px;
}
</style>
