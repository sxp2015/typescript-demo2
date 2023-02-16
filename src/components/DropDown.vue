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
      <li><router-link class="dropdown-item" :to="{name:'create'}">新建文章</router-link></li>
      <li><a class="dropdown-item" href="#">编辑资料</a></li>
      <li><a class="dropdown-item" href="#">退出登陆</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch,computed } from "vue";
import { useClickOutSide } from "../hooks/useClickOutSide";
import store from "../store";
const userInfo = computed(()=>store.state.user )
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
