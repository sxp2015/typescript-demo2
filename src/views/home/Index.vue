<template>
  <div class="container">
    <ColumnListVue :list="testData"></ColumnListVue>
  </div>
</template>

<script setup lang="ts">
import ColumnListVue from "../../components/ColumnList.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { IColumnProps } from "../../types/columnList";

const testData: IColumnProps[] = [
  {
    id: 1,
    title: "测试标题数据1",
    description: "测试描述方面的内容1，需要多一点文本，才能测试出效果",
    avatar:
      "https://dog.ceo/img/dog-api-logo.svg",
  },
  {
    id: 2,
    title: "测试标题数据2",
    description: "测试描述方面的内容2，需要多一点文本，才能测试出效果",
    avatar:
      "https://dog.ceo/img/dog-api-logo.svg",
  },
];

</script>

<style scoped></style>
