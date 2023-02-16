<template>
  <div class="container">
    <global-head :user="UserProps"> ></global-head>
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
import router from "../../router";

const list = computed(() => store.state.columns)
const UserProps: IUserProps = reactive({
  isLogin: store.state.user.isLogin,
  userName: store.state.user.userName,
  userID: store.state.user.userID
})

const userPropsRef = toRefs(UserProps)


</script>

<style scoped></style>
