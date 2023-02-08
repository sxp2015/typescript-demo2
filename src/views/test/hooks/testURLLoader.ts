import { reactive, ref, toRefs } from "vue";
import axios from "axios";

interface IURLLoader {
  result: any;
  loadding: boolean;
  loaded: boolean;
  error: null;
}

function useURLLoaderByReactive(url: string) {
  const URLLoader: IURLLoader = reactive({
    result: null,
    loadding: true,
    loaded: false,
    error: null,
  });
  axios
    .get(url)
    .then((rawData) => {
      URLLoader.loadding = false;
      URLLoader.loaded = true;
      URLLoader.result = rawData.data;
      URLLoader.error = null;
    })
    .catch((e) => {
      URLLoader.error = e;
      URLLoader.loadding = false;
    });

  const RefURLLoader = toRefs(URLLoader);
  return RefURLLoader;
}

function useURLLoaderByRef<T>(url: string) {
  /**因为不不知道，返回的数据是什么类型，所以使用泛型 */
  const result = ref<T | null>(null);
  const loadding = ref(true);
  const loaded = ref(false);
  const error = ref(null);

  axios
    .get(url)
    .then((rawData) => {
      loadding.value = false;
      loaded.value = true;
      result.value = rawData.data;
      error.value = null;
    })
    .catch((e) => {
      error.value = e;
      loadding.value = false;
    });
  return {
    loadding,
    loaded,
    result,
    error,
  };
}

export { useURLLoaderByReactive, useURLLoaderByRef };
