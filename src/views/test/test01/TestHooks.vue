<template>
  <div>
    <div>
      <h1>Ref-X座标：{{ RefX }} | Ref-Y座标：{{ RefY }}</h1>
    </div>

    <div>
      <h1>
        Reacitive-X 座标：{{ ReacitiveX }} Reacitive-Y 座标：{{ ReacitiveY }}
      </h1>
    </div>
    <h3 v-if="loadding">Loading....~!</h3>
    <el-button type="primary" @click="openModal">打开对话框</el-button>
    <img v-if="loaded" :src="dog_result?.message" />
    <img
      v-if="loaded"
      :src="item.url"
      v-for="item in cat_result"
      :key="item.id"
    />

    <TestDefineComponent :is-open="modalIsOpen" @close-modal="onModalCloseClick"></TestDefineComponent>
  
  <h1>测试异步加载组件</h1>

  </div>
</template>

<script setup lang="ts">
import TestDefineComponent from "./TestDefineComponent.vue";
import {
  useMousePositionByReactive,
  useMousePositionByRef,
} from "../hooks/testHooks";

import {
  useURLLoaderByReactive,
  useURLLoaderByRef,
} from "../hooks/testURLLoader";

import { watch,ref} from "vue";
interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}

const { x: ReacitiveX, y: ReacitiveY } = useMousePositionByReactive();
const { x: RefX, y: RefY } = useMousePositionByRef();
const dog_url = "https://dog.ceo/api/breeds/image/random";
const cat_url = "https://api.thecatapi.com/v1/images/search?limit=1";
const {
  result: dog_result,
  loadding,
  loaded,
} = useURLLoaderByRef<DogResult>(dog_url);


const { result: cat_result } = useURLLoaderByRef<CatResult[]>(cat_url);

watch(
  dog_result,
  () => {
    if (dog_result.value) {
      console.log("dog_result:", dog_result.value.message);
    }
    if (cat_result.value) {
      console.log("cat_results:", cat_result.value[0].url);
    }
  },
  { immediate: true }
);

//初始值
const modalIsOpen = ref(false)
//按钮点击动作的函数
const openModal = () => { modalIsOpen.value = true }
//触发子组件的函数
const onModalCloseClick = () => {
  modalIsOpen.value=false
}


</script>

<style scoped>

</style>
