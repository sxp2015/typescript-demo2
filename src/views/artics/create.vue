<template>
  <div class="container">
    <GlobalHead :user="UserProps"></GlobalHead>
    <div class="create-post-page">
      <h4>新建文章</h4>
      <ValidateForm @formSubmit="onFormSubmit">
        <div class="mb-2">
          <label class="form-label">文章标题：</label>
          <ValidateInput
            tag="input"
            :rules="titleRules"
            v-model="titleVal"
            type="text"
            placeholder="请输入文章标题"
          ></ValidateInput>
        </div>
        <div class="mb-2">
          <label class="form-label">文章详情：</label>
          <ValidateInput
            rows="6"
            tag="textarea"
            :rules="contentRules"
            v-model="contentVal"
            type="textarea"
            placeholder="请输入文章内容"
          ></ValidateInput>
        </div>
        <template #submit>
          <button class="btn btn-primary btn-large" type="submit">
            发表文章
          </button>
        </template>
      </ValidateForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import ValidateForm from "../../components/ValidateForm.vue";
import ValidateInput from "../../components/ValidateInput.vue";
import GlobalHead from "../../components/GlobalUserProps.vue";
import { RuleProps, UserProps } from "../../types/globalDatas";
import { computed, ref, reactive, toRefs } from "vue";
import store from "../../store";

const titleRules: RuleProps[] = [
  {
    type: "required",
    message: "文章标题不能为空",
  },
];
const titleVal = ref("");

const contentRules: RuleProps[] = [
  {
    type: "required",
    message: "文章内容不能为空",
  },
];
const contentVal = ref("");

const UserProps: UserProps = reactive({
  isLogin: store.state.user.isLogin,
  userName: store.state.user.userName,
  userID: store.state.user.userID,
});
const userPropsRef = toRefs(UserProps);
const onFormSubmit = () => {};
</script>

<style scoped>
button[type="submit"] {
  background-color: #087360;
}
</style>
