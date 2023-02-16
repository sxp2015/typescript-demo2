<template>
  <div class="root">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col"></div>
        <div class="col">
          <h2 class="text-center fw-bold">后台登陆</h2>
          <ValidateForm @formSubmit="onFormSubmit">
            <div class="mb-3">
              <label class="form-label">邮箱地址：</label>
              <ValidateInput :rules="emailRules" v-model="emailValue" placeholder="请输入邮箱地址" ref="inputRef">
              </ValidateInput>
            {{ emailValue }}
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >登陆密码：</label
              >
              <ValidateInput type="password" placeholder="至少6个字符,至少1个字母和1个数字" :rules="passwordRules" v-model="passwordValue" ></ValidateInput>

            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">记住我</label>
            </div>
            <!-- <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">提交</button>
            </div> -->
            
            
          
          </ValidateForm>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EmailRuleProps,PasswordRuleProps } from "../types/userProps";
import ValidateInput from "./ValidateInput.vue";
import ValidateForm from "./ValidateForm.vue";
import { ref } from 'vue'
import router from "../router";
import store from "../store";

const emailValue = ref('')
const passwordValue = ref('')
const inputRef = ref<any>()

const emailRules: EmailRuleProps[] = [
  { type: "required", message: "邮箱地址不能为空" },
  { type: "email", message: "邮箱格式不正确" },
];

const passwordRules: PasswordRuleProps[] = [
  { type: "required", message: "密码不能为空" },
  { type: "password", message: "密码输入不符合要求" },
];

const onFormSubmit = (result: boolean) => {
  if (result) {
    router.push('/')
    store.commit('login')
  }
  console.log('inputRef...',inputRef.value)
  console.log("onFormSubmit...父组件收到的内容是：", result)
}

</script>

<style scoped>
.row {
  height: 500px;
}

/* .container-fluid{
    background-color: #087360;
} */
</style>
