<template>
  <div>
    <h2>延时出结果异步</h2>
    <h1>result:{{ result }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";

export default defineComponent({
  setup() {
    return new Promise((resolve) => {
        setTimeout(() => {
        return resolve({
          result: 100,
        });
      }, 3000);
    });
  },
});
</script>

<style scoped></style>
