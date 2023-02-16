<template>
  <div class="container">
    <div class="row">
      <div v-for="column in list" :key="column.id" class="col-4 mb-4">
        <div class="card h-100 shadow-sm" style="width: 21.8rem">
          <div class="card-body text-center">
            <img
              :src="column.avatar"
              class="card-img-top rounded-circle border border-light w-25"
              :alt="column.title"
            />
            <h5 class="card-title">{{ column.title }}</h5>
            <p class="card-text text-left">{{ column.description }}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">项目一</li>
            </ul>
            <!--路由写法一-->
            <router-link
              :to="{ name: 'columnDetail', params: { id: column.id } }"
              class="btn btn-outline-success text-decoration-none text-bg-success"
              >进入专栏（一）</router-link
            >
            <router-link
              :to="`/column/${column.id}`"
              class="btn btn-outline-success text-decoration-none text-bg-success"
              >进入专栏（二）</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, PropType } from "vue";
import { IColumnProps } from "../types/columnList";

const ColumnProps = defineProps({
  list: {
    type: Array as PropType<IColumnProps[]>,
    required: true,
  },
});
</script>

<style scoped></style>
