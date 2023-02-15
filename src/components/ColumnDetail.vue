<template>
    <div>
        <h1>文章详情页</h1>
        <pre>{{ route }}</pre>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<style scoped>

</style>