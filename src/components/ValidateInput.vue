<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag === 'input'"
      type="text"
      class="form-control"
      :class="{ 'is-invalid': InputRef.error }"
      :value="InputRef.val"
      @input="updateValue"
      @blur="validateInput"
      v-bind="$attrs"
    />

    <textarea
      v-else
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
// 导入事件监听器
import { RuleProps,Base } from "../types/globalDatas";
import { PropType, toRefs, reactive, ref, watch, onMounted } from "vue";
import emitter from "../utils/emitter";


//邮箱正则表达式
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

//密码正则表达式至少六个字符，至少一个字母和一个数字
const passwrodReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

type EmailProps = RuleProps[];

type TagType = "input" | "textarea";

const props = defineProps({
  rules: {
    type: Array as PropType<EmailProps>,
  },
  tag: {
    type: String as PropType<TagType>,
    default: "input",
  },
  modelValue: {
    type: String,
  },
});

const InputRef: Base = reactive({
  val: props.modelValue || "",
  error: false,
  message: "",
});

const validateInput = () => {
  if (props.rules) {
    const allPassed = props.rules.every((rule) => {
      let passed = null; //临时变量
      InputRef.message = rule.message; //把错误消息重赋值
      switch (rule.type) {
        case "required":
          passed = InputRef.val.trim() !== "";
          break;

        case "email":
          passed = emailReg.test(InputRef.val.trim());
          break;

        case "password":
          passed = passwrodReg.test(InputRef.val.trim());
          break;
        default:
          break;
      }
      return passed;
    });
    InputRef.error = !allPassed;
    return allPassed;
  }
  return true;
};

const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  // 定义输入的值
  const targetValue = (e.target as HTMLInputElement).value;
  //赋值
  InputRef.val = targetValue;

  //console.log("InputRef.val=", InputRef.val);

  //发送事件
  emit("update:modelValue", targetValue);
};

onMounted(() => {
  emitter.emit("formcreatedItem", validateInput);
});
</script>

<style scoped></style>
