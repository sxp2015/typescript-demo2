<template>
  <nav
    class="navbar navbar-dark justify-content-between mb-4 px-4 navbar-expand-lg bg-body-tertiary"
    style="background-color: #087360"
  >
    <a class="navbar-brand">
      <img
        src="https://t3.lw05.cn/static/images/index/logo.png"
        alt="Greensward"
        width="30"
        height="30"
      /><span class="fs-6 mx-2">Greensward</span></a
    >
    <ul  class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link href="/login" class="btn btn-outline-light">注册</router-link>
      </li>
      <li class="list-inline-item">
        <router-link href="/login" class="btn btn-outline-light">登陆</router-link>
      </li>
    </ul>
    <ul  class="list-inline mb-0">
      <li class="list-inline-item">
        <!-- <a href="#" class="btn btn-outline-light">你好: {{ user.userName }}</a> -->
        <!-- <div class="dropdown">
          <button
            class="btn btn-success dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            你好: {{ user.userName }}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div> -->
        <DropDown :title="title"></DropDown>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { IUserProps } from "../types/userProps";
import {  PropType, ref } from "vue";
import DropDown from "./DropDown.vue";



const userProps = defineProps({
  user: {
    type: Object as PropType<IUserProps>,
    required: true,
  },
});

const title = `你好 ${userProps.user.userName}`;

</script>

<style scoped></style>
