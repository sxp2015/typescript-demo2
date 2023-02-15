<template>
  <div class="container">
    <global-head :user="testUserProps"> ></global-head>
    <column-list :list="list"></column-list>
  </div>
</template>

<script setup lang="ts">
import { GlobalDataProps } from "../../types/globalDatas";
import ColumnList from "../../components/ColumnList.vue";
import GlobalHead from "../../components/GlobalUserProps.vue";
import { IUserProps } from "../../types/userProps";
import {reactive,toRefs,computed} from  'vue'
import store from "../../store";

const list = computed(() => store.state.columns)
const testUserProps: IUserProps = reactive({
  isLogin: false,
  userName: 'Sunny',
  userID: 5709
})

const userPropsRef = toRefs(testUserProps)


</script>

<style scoped></style>
