<template>
  <div class="container">
    <global-head :user="testUserProps"> ></global-head>

  </div>
</template>

<script setup lang="ts">

import GlobalHead from "../../components/GlobalUserProps.vue";
import { IUserProps } from "../../types/userProps";
import {reactive,toRefs} from  'vue'


const testUserProps: IUserProps = reactive({
  isLogin: false,
  userName: 'Sunny',
  userID: 5709
})

const userPropsRef = toRefs(testUserProps)


</script>

<style scoped></style>
