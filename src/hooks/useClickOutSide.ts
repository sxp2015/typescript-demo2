import { ref, onMounted, onUnmounted, Ref } from "vue";
/**
 // 方案一：在Button 和Ul列表中，使用鼠标移动进入和进出事件
 *     @mouseenter="mouseEnterHandle"
    @mouseleave="mouseLeaveHandle"
 * 
const mouseLeaveHandle = () => {
  isOpen.value = false;
};
const mouseEnterHandle = () => {
  isOpen.value = true;
};
 * 
 * 
 * ***/

//方案二： 处理点击空白处，隐藏下拉列表
// const Handler = (e: MouseEvent) => {
//   if (dropdownRef.value) {
//     if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
//       isOpen.value = false;
//     }
//   }
// };

// onMounted(() => {
//   document.addEventListener("click", Handler);
// });
// onUnmounted(() => {
//   document.removeEventListener("click", Handler);
// });

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false);
  const Handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutSide.value = false;
      } else {
        isClickOutSide.value = true;
      }
    }
  };

  onMounted(() => {
    document.addEventListener("click", Handler);
  });
  onUnmounted(() => {
    document.removeEventListener("click", Handler);
  });

  return isClickOutSide;
};

export { useClickOutSide };
