<template>
  <div class="border-2 font-black bg-blue-500-g">
    <div class="container">
      <p>
        <slot />
      </p>
      <div>
        <button @click="emitClosed">
          Close Modal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  emits: ['emit-closed'],
  methods: {
    emitClosed() {
      this.$emit('emit-closed');
    },
  },
};
</script>
