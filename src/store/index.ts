import { createStore } from "vuex";
import { testData, testPost } from "../types/testData";
import { GlobalDataProps } from "../types/globalDatas";

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPost,
    user: { isLogin: false },
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, userName: "登陆成功的用户" };
    },
  },
  getters: {},
  actions: {},
});
export default store;
