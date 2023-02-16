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
import emitter from "../utils/emitter";

// inferred as Emitter<Events>

type ValidateFunc = () => boolean | undefined;
//导出创建的监听器给子组件使用
const emit = defineEmits(["formSubmit"]);

let funcArr: ValidateFunc[] = [];
//emitter.on('formItemCreated', (e) => {}); // 'e' has inferred type 'string'
//导入事件监听器
const callback = (func?: ValidateFunc): void => {
  if (func) {
    funcArr.push(func);
  }
};

emitter.on('formcreatedItem', val=> callback(val) );

//添加到监听器中

onUnmounted(() => {
  emitter.off("formcreatedItem");
  funcArr = [];
});

//定义事件名称

//定义函数触发自定义事件
const submitForm = () => {
  //const result = funcArr.every(res => res());
  const result = funcArr.map((func) => func()).every((res) => res);
  console.log("funcArr==", funcArr);
  console.log("result===", result);
  emit("formSubmit", result);
};
//创建一个函数发送测试数据


</script>

<style scoped>
button[type="submit"] {
  background-color: #087360;
}
</style>
