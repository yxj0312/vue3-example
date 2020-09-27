<template>
  <div class="bg-gray-200 min-h-screen antialiased text-gray-800">
    <div class="container mx-auto lg:px-64 pt-8">
      <div class="bg-white shadow-md rounded px-8 py-8">
        <h2 class="text-2xl font-semibold">
          {{ title }}
        </h2>
        <form
          action="#"
          class="mt-4"
          @submit.prevent="addTodo"
        >
          <label>
            <input
              v-model="state.todoFromInput"
              type="text"
              class="w-full border border-gray-500 rounded placeholder-gray-600 px-2 py-3"
              placeholder="What needs to be done?"
            >
          </label>
        </form>
        <div v-if="state.todos.length">
          <ul
            class="text-2xl mt-4 space-y-6"
          >
            <li
              v-for="todo in state.todos"
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
          <div class="border-t border-gray-500 py-2 mt-6">
            Items Left: {{ itemsLeft }}
          </div>
        </div>
        <div
          v-else
          class="mt-4"
        >
          Nothing to do! Add a new item...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Todo',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const state = reactive({
      todoFromInput: '',
      todoId: 4,
      todos: [
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
      ],
    });

    const itemsLeft = computed(() => state.todos.filter((todo) => !todo.isComplete).length);

    function addTodo() {
      state.todos.push({
        id: state.todoId,
        description: state.todoFromInput,
        isComplete: false,
      });

      state.todoId += 1;
      state.todoFromInput = '';
    }

    function deleteTodo(id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    }

    return {
      state,
      itemsLeft,
      addTodo,
      deleteTodo,
    };
  },

  watch: {
    todoId(newValue, oldValue) {
      console.log(`New Value: ${newValue}`);
      console.log(`Old Value: ${oldValue}`);
    },
  },
};
</script>

<style scoped>

</style>
