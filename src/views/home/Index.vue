<template>
  <div class="container">
    <global-head :user="userInfo"> ></global-head>
    <column-list :list="list"></column-list>
  </div>
</template>

<script setup lang="ts">



import ColumnList from "../../components/ColumnList.vue";
import GlobalHead from "../../components/GlobalUserProps.vue";
import { UserProps } from "../../types/globalDatas";
import {toRefs,computed} from  'vue'
import store from "../../store";


const list = computed(() => store.state.columns)
const userInfo= computed(()=>store.state.user)

const userInfoRef = toRefs(userInfo)


</script>

<style scoped></style>
