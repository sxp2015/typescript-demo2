<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': InputRef.error }"
      :value="InputRef.val"
      @input="updateValue"
      @blur="validateInput"
    />

    <span v-if="InputRef.error" class="invalid-feedback">{{
      InputRef.message
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { EmailRuleProps, IEmail } from "../types/userProps";
import { PropType, toRefs, reactive, ref, watch } from "vue";
import { tabBarProps } from "element-plus";

const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
type RuleProps = EmailRuleProps[];

const props = defineProps({
  rules: {
    type: Array as PropType<RuleProps>,
  },
  modelValue: {
    type: String,
  },
});

const InputRef: IEmail = reactive({
  val: props.modelValue || "",
  error: false,
  message: "",
});

const InputRefs = toRefs(InputRef);

const validateInput = () => {
  if (props.rules) {
    const allPassed = props.rules.every((rule) => {
      let passed = true; //临时变量
      InputRef.message = rule.message; //把错误消息重赋值
      switch (rule.type) {
        case "required":
          passed = InputRef.val.trim() !== "";
          break;

        case "email":
          passed = emailReg.test(InputRef.val);
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

const updateValue = (e: KeyboardEvent) => {
  // 定义输入的值
  const targetValue = (e.target as HTMLInputElement).value;
  //赋值
  InputRef.val = targetValue;

  //发送事件
  emit("update:modelValue", targetValue);
};
</script>

<style scoped></style>
