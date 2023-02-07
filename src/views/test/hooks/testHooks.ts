import { reactive, onMounted, onUnmounted, toRefs, ref } from "vue";

function useMousePositionByReactive() {
  interface IPosition {
    x: number;
    y: number;
  }
  const Position: IPosition = reactive({
    x: 0,
    y: 0,
  });

  //reactive 方法
  const updatePosition = (e: MouseEvent) => {
    Position.x = e.pageX;
    Position.y = e.pageY;
  };
  // reactive 方法 要使用响应式 toRefs
  const RefPosition = toRefs(Position);

  onMounted(() => {
    document.addEventListener("click", updatePosition);
  });

  onUnmounted(() => {
    document.removeEventListener("click", updatePosition);
  });

  return { ...RefPosition };
}

function useMousePositionByRef() {
  const x = ref(0);
  const y = ref(0);

  //reactive 方法
  const updatePosition = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    document.addEventListener("click", updatePosition);
  });

  onUnmounted(() => {
    document.removeEventListener("click", updatePosition);
  });

  return { x, y };
}
export { useMousePositionByReactive, useMousePositionByRef };
