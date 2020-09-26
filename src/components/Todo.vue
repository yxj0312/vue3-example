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
          <input
            v-model="todoFromInput"
            type="text"
            class="w-full border border-gray-500 rounded placeholder-gray-600 px-2 py-3"
            placeholder="What needs to be done?"
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

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
  },
};
</script>

<style scoped>

</style>
