<template>
  <div class="container">
    <global-head :user="UserProps"> ></global-head>
    <column-list :list="list"></column-list>
  </div>
</template>

<script setup lang="ts">

import ColumnList from "../../components/ColumnList.vue";
import GlobalHead from "../../components/GlobalUserProps.vue";
import { UserProps } from "../../types/globalDatas";
import {reactive,toRefs,computed} from  'vue'
import store from "../../store";


const list = computed(() => store.state.columns)
const UserProps: UserProps = reactive({
  isLogin: store.state.user.isLogin,
  userName: store.state.user.userName,
  userID: store.state.user.userID
})

const userPropsRef = toRefs(UserProps)


</script>

<style scoped></style>
