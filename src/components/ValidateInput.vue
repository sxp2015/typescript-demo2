<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': InputRef.error }"
      :value="InputRef.val"
      @input="updateValue"
      @blur="validateInput"
      v-bind="$attrs"
    />

    <span v-if="InputRef.error" class="invalid-feedback">{{
      InputRef.message
    }}</span>
  </div>
</template>

<script setup lang="ts">
import {
  EmailRuleProps,
  IEmail,
  IPassword,
  PasswordRuleProps,
} from "../types/userProps";
import { PropType, toRefs, reactive, ref, watch } from "vue";

//邮箱正则表达式
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

//密码正则表达式至少六个字符，至少一个字母和一个数字
const passwrodReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

type EmailProps = EmailRuleProps[];
type PasswordProps = PasswordRuleProps[];

const emailProps = defineProps({
  rules: {
    type: Array as PropType<EmailProps>,
  },
  modelValue: {
    type: String,
  },
});


const InputRef: IEmail = reactive({
  val: emailProps.modelValue || "",
  error: false,
  message: "",
});


const InputRefs = toRefs(InputRef);


const validateInput = () => {
  if (emailProps.rules) {
    const allPassed = emailProps.rules.every((rule) => {
      let passed = true; //临时变量
      InputRef.message = rule.message; //把错误消息重赋值
      switch (rule.type) {
        case "required":
          passed = InputRef.val.trim() !== "";
          break;

        case "email":
          passed = emailReg.test(InputRef.val);
          break;

        case "password":
          passed = passwrodReg.test(InputRef.val);
          break;
        default:
          break;
      }
      return passed;
    });
    InputRef.error = !allPassed;
  }
};

const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  // 定义输入的值
  const targetValue = (e.target as HTMLInputElement).value;
  //赋值
  InputRef.val = targetValue;

  //发送事件
  emit("update:modelValue", targetValue);
};
</script>

<style scoped></style>
