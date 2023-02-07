<template>
  <div>
    <div class="demo-collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="测试模块化响应式 Ref" name="1">
          <router-link to="/test/hooks"
            ><el-button type="primary">立即查看</el-button></router-link
          >
        </el-collapse-item>

        <el-collapse-item title="测试模块化响应式 Reactive" name="2">
          <router-link to="/test/hooks"
            ><el-button type="primary">立即查看</el-button></router-link
          >
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeName = ref("1");
</script>

<style scoped></style>
