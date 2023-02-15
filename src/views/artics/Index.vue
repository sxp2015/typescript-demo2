<template>
    <div>
        <global-head :user="testUserProps"></global-head>
        <column-list :list="testData"></column-list>
    </div>
</template>

<script setup lang="ts">
import { IColumnProps } from '../../types/columnList';
import { IUserProps } from '../../types/userProps';
import GlobalHead from '../../components/GlobalUserProps.vue';
import ColumnList from '../../components/ColumnList.vue';
import {reactive} from 'vue'

const testUserProps: IUserProps = reactive({
  isLogin: false,
  userName: 'Sunny',
  userID: 5709
})
const testData: IColumnProps[] = [
  {
    id: 1,
    title: "测试标题数据1",
    description: "测试描述方面的内容1，需要多一点文本，才能测试出效果",
    avatar:
      "https://t3.lw05.cn/static/images/index/logo.png",
  },
  {
    id: 2,
    title: "测试标题数据2",
    description: "测试描述方面的内容2，需要多一点文本，才能测试出效果",
    avatar:
      "https://t3.lw05.cn/static/images/index/logo.png",
  },
  {
    id: 3,
    title: "测试标题数据3",
    description: "测试描述方面的内容3，需要多一点文本，才能测试出效果",
    avatar:
      "https://t3.lw05.cn/static/images/index/logo.png",
  },
  {
    id: 4,
    title: "测试标题数据4",
    description: "测试描述方面的内容4，需要多一点文本，才能测试出效果",
    avatar:
      "https://t3.lw05.cn/static/images/index/logo.png",
  },
];
</script>

<style scoped>

</style>