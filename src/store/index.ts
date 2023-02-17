import { createStore } from "vuex";
import { testData, testPost } from "../types/testData";
import { GlobalDataProps } from "../types/globalDatas";

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPost,
    user: { isLogin: false, userName: "UserAccount", columnId: 2 },
  },
  mutations: {
    login(state, isLogin) {
      //拿出并解构仓库数据，重新赋值
      state.user = {
        ...state.user,
        isLogin: isLogin,
        userName: "Sunny Sun",
        columnId: 1,
      };
    },
    createPosts(state, newPost) {
      if (newPost) {
        state.posts.push(newPost);
      }
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
