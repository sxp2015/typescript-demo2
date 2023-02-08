<template>
  <div>
    <Teleport to="#modal">
      <div id="center" v-if="props.isOpen">
        <div class="title"><span>这是一个模态框</span></div>
        <el-button type="primary" @click="buttonClick">
            <span class="btnClose">关闭模态框</span>
        </el-button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["close-modal"]);

const buttonClick = () => {
  emit("close-modal");
};
</script>

<style scoped>
#center {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  background: rgb(209, 238, 221);
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
  text-align: center;
  color: black;
}
.title{
    margin-top: 60px;
}


</style>
