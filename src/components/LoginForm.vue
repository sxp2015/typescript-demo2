<template>
  <div class="root">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col"></div>
        <div class="col">
          <h2 class="text-center fw-bold">后台登陆</h2>
          <form>
            <div class="mb-3">
              <label class="form-label">邮箱地址：</label>
              <ValidateInput :rules="emailRules" v-model="testInputValue" ></ValidateInput>
            {{ testInputValue }}
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >登陆密码：</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">记住我</label>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">提交</button>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EmailRuleProps } from "../types/userProps";
import ValidateInput from "./ValidateInput.vue";
import {ref} from 'vue'
const testInputValue = ref('adf@qq.com')
const emailRules: EmailRuleProps[] = [
  { type: "required", message: "邮箱地址不能为空" },
  { type: "email", message: "邮箱格式不正确" },
];
</script>

<style scoped>
.row {
  height: 500px;
}

/* .container-fluid{
    background-color: #087360;
} */
</style>
