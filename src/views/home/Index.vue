<template>
  <div><h2>首页组件</h2></div>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import request from "../../utils/request";

const url = "/api/weixin/nav/list/";
const body = {};
const data = {};
onMounted(() => {
  request(url, { body, data }).then((res) => {
    console.log("请求返回的数据：", res);
  });
});
</script>

<style lang="less" scoped></style>
