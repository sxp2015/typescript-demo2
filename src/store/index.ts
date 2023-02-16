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
      //拿出并解构仓库数据，重新赋值
      state.user = { ...state.user, isLogin: true, userName: "登陆成功的用户" };
    },
  },
  getters: {
    getColumnById: (state) => (currentId: number) => {
      return state.columns.find((item) => item.id === currentId);
    },
    getPostByCid: (state) => (colmnId: number) => {
      return state.posts.filter((item) => item.columnId === colmnId);
    },
  },
  actions: {},
});
export default store;
