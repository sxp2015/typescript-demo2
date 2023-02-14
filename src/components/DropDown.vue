<template>
  <div class="dropdown" ref="dropdownRef">
    <button
      class="btn btn-success dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="toggleOpen"
    >
      {{ title }}
    </button>

    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <li><a class="dropdown-item" href="#">账号设置</a></li>
      <li><a class="dropdown-item" href="#">个人中心</a></li>
      <li><a class="dropdown-item" href="#">退出登陆</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useClickOutSide } from "../hooks/useClickOutSide";
const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const DropDownProps = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const dropdownRef = ref<null | HTMLElement>(null);
const isClickOutSide = useClickOutSide(dropdownRef);

watch(isClickOutSide, () => {
  if (isClickOutSide.value && isOpen.value) {
    isOpen.value = false;
  }
});

</script>

<style scoped></style>
