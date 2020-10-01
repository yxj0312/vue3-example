import { ref } from 'vue';

export default function useToggle() {
  const isVisible = ref(true);

  function toggleVisible() {
    isVisible.value = !isVisible.value;
  }
  return {
    isVisible, toggleVisible,
  };
}
