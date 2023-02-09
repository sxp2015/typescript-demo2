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
  <hr />
  <el-descriptions title="用户信息">
    <el-descriptions-item label="用户名">张三</el-descriptions-item>
    <el-descriptions-item label="电话">18100000000</el-descriptions-item>
    <el-descriptions-item label="城市">苏州</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small" @click="onClickName">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address"
      >湖南省郴州市临武县</el-descriptions-item
    >
    <el-descriptions-item>{{ url }}</el-descriptions-item>
  </el-descriptions>
  <el-button type="primary"  @click="onClickName">点击</el-button>
  <h4>{{ numArray.map((item) => ({ numItem: item })) }}</h4>

  <div v-text="someWords">


  </div>

  <div >输入的内容：{{ test1 }}</div>

<el-input v-model='test1' type="text"></el-input>

<div>数值增加：{{ count }}</div>  <div>双倍显示{{ dubble }}</div>
<el-button type="primary" @click="increase"> 👍点击+1 </el-button>


</template>

<script lang="ts" setup>
import { onMounted ,ref,computed} from "vue";
import request from "../../utils/request";


const numArray: number[] = [1, 2, 3, 5];
const someWords:string = '这是一段文本内容，使用V-text展示出来'
const url = "/api/weixin/nav/list/";
const body = {};
const data = {};
const test1 = ref('响应式文字');
const count = ref(0)

const dubble = computed(() => {
  return count.value*2
})

const onClickName = () => {
  console.log('点击了xxx')
}

const increase = () => {
  count.value++
}
onMounted(() => {
  request(url, { body, data }).then((res) => {
    console.log("请求返回的数据：", res);
  });
});


</script>

<style lang="less" scoped></style>
