<template>
    <div>
        <global-head :user="testUserProps"></global-head>
        <column-list :list="testData"></column-list>
    </div>
</template>

<script setup lang="ts">
import {testData} from '../../types/testData'
import { UserProps } from '../../types/globalDatas';
import GlobalHead from '../../components/GlobalUserProps.vue';
import ColumnList from '../../components/ColumnList.vue';
import {reactive} from 'vue'

const testUserProps: UserProps = reactive({
  isLogin: false,
  userName: 'Sunny',
  userID: 5709
})

</script>

<style scoped>

</style>