<template>
    <div>
        <ul v-for="column in list" :key="column.id">
            <li>
                <img :src="column.avatar" :alt="column.title">
                <h5>{{ column.title }}</h5>
                <p>
                    {{ column.description }}
                </p>
                <a href="#">进入专栏</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {defineProps,reactive,toRefs,PropType} from 'vue'
import { IColumnProps } from '../types/columnList';

const ColumnProps =  defineProps({
    list: {
        type: Array as PropType<IColumnProps[]>,
        required: true,
    }
})


</script>

<style scoped>

</style>