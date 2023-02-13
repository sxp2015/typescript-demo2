<template>
  <div>
    <form class="validate-form-container">
      <slot name="default"></slot>
      <div class="submit-area d-grid gap-2" @click.prevent="submitForm">
        <slot name="submit">
          <button type="submit" class="btn btn-primary">提交</button>
        </slot>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {onUnmounted,onMounted,toRefs} from 'vue'
//导入事件监听器
import mitt from "mitt";
//导出创建的监听器给子组件使用
const emitter = mitt();

 defineExpose({emitter})
//创建一个函数发送测试数据
const callback = (test: string) => {
  console.log("callback....print..", test);
};

// onMounted(() => {
//     emitter.on('form-item-created',callback)
// })
// //添加到监听器中

// onUnmounted(() => {
//     emitter.off('form-item-created',callback)
// })
//验证表单结果
const validateFormResult = true;

//定义事件名称
const emit = defineEmits(["form-submit"]);

//定义函数触发自定义事件
const submitForm = () => {
  emit("form-submit", validateFormResult);
};
</script>

<style scoped></style>
