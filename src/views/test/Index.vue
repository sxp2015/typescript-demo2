<template>
  <div>
    <div class="demo-collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="测试模块化响应式 Ref" name="1">
          <router-link to="/test/hooks"
            ><el-button type="primary">立即查看</el-button></router-link
          >
        </el-collapse-item>

        <el-collapse-item title="Teleport测试" name="2">
          <router-link to="/test/teleport"
            ><el-button type="primary">立即查看</el-button></router-link
          >
        </el-collapse-item>

        <el-collapse-item title="TestSuspense测试" name="3">
          <router-link to="/test/suspense"
            ><el-button type="primary">立即跳转</el-button></router-link
          >
          <Suspense>

            <template #default>
              <TestSuspenseVue />
            </template>

            <template #fallback>
              <h3>加载中....加载中....加载中....加载中....加载中....加载中....加载中....加载中....加载中....加载中....加载中....</h3>
            </template>
          </Suspense>
       

        </el-collapse-item>
      </el-collapse>
      <p>
           
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import TestSuspenseVue from "./test01/TestSuspense.vue";
import { ref } from "vue";

const activeName = ref("1");
</script>

<style scoped></style>
