<template>
  <div class="bg-gray-200 min-h-screen antialiased text-gray-800">
    <div class="container mx-auto lg:px-64 pt-8">
      <Todo title="ToDo List with the Composition API" />
      <br>
      <TodoRef title="ToDo List with the Composition API: Refs" />
    </div>
  </div>
</template>

<script>
import Todo from '../components/Todo.vue';
import TodoRef from '../components/TodoRef.vue';

export default {
  name: 'TodoView',
  components: {
    TodoRef,
    Todo,
  },
};
</script>
