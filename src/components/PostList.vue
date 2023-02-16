<template>
  <div class="container">
    <div class="post-list">
      <article class="card mb-3" v-for="post in list" :key="post.id">
        <div class="card-body">
          <h4>{{ post.title }}</h4>
          <div class="row my-3 align-items-center">
            <div v-if=" post.image" class="col-3">
              <img :src="post.image" :alt="post.title" class="rounded-lg w-50 h-50" />
            </div>
            <p :class="{'col-9':post.image}">{{ post.content }}</p>
          </div>
          <span class="text-muted">{{ post.createdAt }}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { PostProps } from "../types/globalDatas";
const PostList = defineProps({
  list: {
    type: Array as PropType<PostProps[]>,
    required: true,
  },
});
</script>

<style scoped></style>
