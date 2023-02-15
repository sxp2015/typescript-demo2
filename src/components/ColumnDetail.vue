<template>
  <div cclass="container">
    <div class="column-detail-page w-75 mx-auto">
      <div class="my-5 text-center"><h3 class="fw-bold">文章详情页</h3></div>
      <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
        <div class="col-3 text-center">
          <img
            :src="column?.avatar"
            :alt="column?.title"
            class="rounded-circle w-50 h-50"
          />
        </div>
        <div class="col-9">
          <h4>{{ column?.title }}</h4>
          <p class="text-muted">{{ column?.description }}</p>
        </div>
      </div>
        <div>
      <h2>6G网络要来了：5G是高铁 6G就是飞机</h2>
      <p>
        近日6G技术大会正式召开，目前5G行业应用持续深化，全球6G研发也已提速。从2月1日起，工信部优化调整微波通信系统频率，将进一步满足5G基站等高容量信息传输(微波回传)场景需求，并为我国5G、工业互联网以及未来6G等预留频谱资源。
        中国电信表示，在5G大带宽、低时延、大连接的基础上，6G时代的用户将拥有更加炫酷的全新体验，网络速度将提升到几十Gbps至Tbps，有力支撑沉浸式XR业务。
        6G网络要来了：5G是高铁 6G就是飞机
      </p>
    </div>
    </div>
  
    <PostList :list="list"></PostList>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import PostList from "./PostList.vue";
import { testData, testPost, ColumnProps, PostProps } from "../types/testData";
import { reactive, toRefs, ref } from "vue";
const route = useRoute();
const currentId = +route.params.id; // + 符号是为了让字符串变数字类型，好在下面比较
//拿到用户点击的专栏
const column = testData.find((c) => c.id === currentId);

//过滤出，用户点击的文章所属的专栏
const list = testPost.filter((post) => post.columnId === currentId);
</script>

<style scoped></style>
