<template>
  <div class="bg-white shadow-md rounded px-8 py-8">
    <h2 class="text-2xl font-semibold">
      {{ title }}
    </h2>
    <div class="space-x-4">
      <button
        class="px-2 py-2 rounded bg-blue-500 text-white"
        @click="toggleItemsLeft"
      >
        Toggle Items left
      </button>
      <button
        class="px-2 py-2 rounded bg-blue-500 text-white"
        @click="toggleMousePosition"
      >
        Toggle Mouse Position
      </button>
    </div>
    <form
      action="#"
      class="mt-4"
      @submit.prevent="addTodo"
    >
      <label>
        <input
          v-model="todoFromInput"
          type="text"
          class="w-full border border-gray-500 rounded placeholder-gray-600 px-2 py-3"
          placeholder="What needs to be done?"
        >
      </label>
    </form>
    <div v-if="todos.length">
      <ul
        class="text-2xl mt-4 space-y-6"
      >
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="flex items-center justify-between"
        >
          <div class="flex items-center">
            <label>
              <input
                v-model="todo.isComplete"
                type="checkbox"
              >
            </label>
            <div
              class="ml-4"
              :class="{'line-through' : todo.isComplete}"
            >
              {{ todo.description }}
            </div>
          </div>
          <button @click="deleteTodo(todo.id)">
            &times;
          </button>
        </li>
      </ul>
      <div
        v-show="isItemsLeftVisible"
        class="border-t border-gray-500 py-2 mt-6"
      >
        Items Left: {{ itemsLeft }}
      </div>
      <div
        v-show="isMousePositionVisible"
        class="border-t border-gray-500 py-2 mt-1"
      >
        <div>x: {{ x }}</div>
        <div>y: {{ y }}</div>
      </div>
      <div
        v-show="isMousePositionVisible"
        class="border-t border-gray-500 py-2 mt-1"
      >
        <div>x: {{ mouseX }}</div>
        <div>y: {{ mouseY }}</div>
      </div>
    </div>
    <div
      v-else
      class="mt-4"
    >
      Nothing to do! Add a new item...
    </div>
  </div>
</template>

<script>
import {
  computed, onMounted, watch, ref, onUnmounted,
} from 'vue';
import useMousePositionReactive from '../functions/useMousePositionReactive';
import useToggle from '../functions/useToggle';

export default {
  name: 'TodoRef',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isItemsLeftVisible = ref(true);

    function toggleItemsLeft() {
      isItemsLeftVisible.value = !isItemsLeftVisible.value;
    }

    const { isVisible: isMousePositionVisible, toggleVisible: toggleMousePosition } = useToggle();

    const { x: mouseX, y: mouseY } = useMousePositionReactive();
    const x = ref(0);
    const y = ref(0);

    function update(e) {
      x.value = e.pageX;
      y.value = e.pageY;
    }

    onMounted(() => {
      window.addEventListener('mousemove', update);
    });

    onUnmounted(() => {
      window.removeEventListener('mousemove', update);
    });

    const todoFromInput = ref('');
    const todoId = ref(4);
    const todos = ref([
      {
        id: 1,
        description: 'Finish Screencast',
        isComplete: false,
      },
      {
        id: 2,
        description: 'Learn Vue 3',
        isComplete: false,
      },
      {
        id: 3,
        description: 'Paint Wall',
        isComplete: false,
      },
    ]);

    const itemsLeft = computed(() => todos.value.filter((todo) => !todo.isComplete).length);

    onMounted(() => {
      // eslint-disable-next-line no-console
      console.log('Todo mounted');
      // eslint-disable-next-line no-console
      console.log(props.title);
    });

    function addTodo() {
      todos.value.push({
        id: todoId.value,
        description: todoFromInput.value,
        isComplete: false,
      });

      todoId.value += 1;
      todoFromInput.value = '';
    }

    function deleteTodo(id) {
      todos.value = todos.value.filter((todo) => todo.id !== id);
    }

    watch(
      () => todoId.value,
      (newValue, oldValue) => {
        // eslint-disable-next-line no-console
        console.log(`New Value: ${newValue}`);
        // eslint-disable-next-line no-console
        console.log(`Old Value: ${oldValue}`);
      },
    );

    return {
      todoFromInput,
      todoId,
      todos,
      itemsLeft,
      addTodo,
      deleteTodo,
      x,
      y,
      mouseX,
      mouseY,
      isItemsLeftVisible,
      toggleItemsLeft,
      isMousePositionVisible,
      toggleMousePosition,
    };
  },
};
</script>
