import { createStore } from "vuex";
import { testData, testPost } from "../types/testData";
import { GlobalDataProps } from "../types/globalDatas";

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPost,
    users: { isLogin: false },
  },
  mutations: {},
});
export default store;
