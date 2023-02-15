<template>
    <div>
        <global-head :user="testUserProps"></global-head>
        <column-list :list="testData"></column-list>
    </div>
</template>

<script setup lang="ts">
import {testData,testPost } from '../../types/testData'
import { IUserProps } from '../../types/userProps';
import GlobalHead from '../../components/GlobalUserProps.vue';
import ColumnList from '../../components/ColumnList.vue';
import {reactive} from 'vue'

const testUserProps: IUserProps = reactive({
  isLogin: false,
  userName: 'Sunny',
  userID: 5709
})

</script>

<style scoped>

</style>