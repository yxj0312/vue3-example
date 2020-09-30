import {
  reactive, toRefs, onMounted, onUnmounted,
} from 'vue';

export default function useMousePositionReactive() {
  const pos = reactive({
    x: 0,
    y: 0,
  });

  function update(e) {
    pos.x = e.pageX;
    pos.y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return toRefs(pos);
}
