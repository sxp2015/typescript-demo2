<template>
  <div>
    <h2>延时出结果异步</h2>
    <img :src="state.message" alt="" />
    <el-button type="primary" @click="getRawData">获取图片</el-button>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, reactive,toRefs } from "vue";
import axios from "axios";

// 数据长什么样
interface DogResult {
  message: string;
  status: string;
}

// 定义初始数据值和类型
const state:DogResult = reactive({
  message: "",
  status: "",
});

// 把它们变成响应式
const RefState = toRefs(state)

// 写方法和逻辑
const getRawData = async () => {
  await axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
    // 拿到回来的数据，重新赋值
    return state.message = res.data.message
  });
};


</script>

<style scoped></style>
