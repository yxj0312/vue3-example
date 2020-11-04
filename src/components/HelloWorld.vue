<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">
    count is: {{ count }}
  </button>
  <div>{{ pow(2,3) }}</div>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue';

interface Todo {
  name:string,
  isComplete: boolean
}

interface State {
  title: string,
  year: number,
  todos: Todo[]
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const count = ref(0);
    const state = reactive<State>({
      title: '',
      year: 2020,
      todos: [
        {
          name: 'Finish screencast',
          isComplete: false,
        },
        {
          name: 'Go to store',
          isComplete: false,
        },

      ],
    });

    function increment():void {
      count.value++;
    }

    function pow(x:number, y:number):number {
      return Math.pow(x, y);
    }
    return {
      count,
      increment,
      pow,
      state,
    };
  },

});
</script>
