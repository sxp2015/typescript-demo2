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
import { onUnmounted, onMounted, toRefs } from "vue";
import mitt from "mitt";

type Events = {
  formItemCreated: Array<boolean>;
  callback?: () => boolean;
};

const emitter = mitt<Events>(); // inferred as Emitter<Events>

type ValidateFunc = () => boolean;
//导出创建的监听器给子组件使用
const emit = defineEmits(["formSubmit"]);

let funcArr: ValidateFunc[] = [];
//emitter.on('formItemCreated', (e) => {}); // 'e' has inferred type 'string'
//导入事件监听器
const callback = (func?: ValidateFunc) => {
  if (func) {
     funcArr.push(func);
  }
};

emitter.on("formItemCreated", (callback) =>callback);

//添加到监听器中

onUnmounted(() => {
  emitter.off("formItemCreated", (callback) => callback);
  funcArr = [];
});

//定义事件名称

//定义函数触发自定义事件
const submitForm = () => {
  //const result = funcArr.every(res => res());
  const result = funcArr.map((func) => func()).every(res => res);
  console.log("result===",result)
  emit("formSubmit", result);
};
//创建一个函数发送测试数据

defineExpose({ emitter });
</script>

<style scoped>
button[type='submit']{
  background-color: #087360;
}
</style>
