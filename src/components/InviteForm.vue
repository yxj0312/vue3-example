<template>
  <form
    class="mt-8"
    action=""
  >
    <div class="rounded-md shadow-sm">
      <div>
        <input
          aria-label="Name"
          name="name"
          type="text"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
          placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none
          focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          placeholder="Name"
          :value="name"
          @input="event => $emit('update:name', event.target.value)"
        >
      </div>
      <div class="-mt-px">
        <input
          aria-label="Email address"
          name="email"
          type="email"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border
          border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md
          focus:outline-none focus:shadow-outline-blue
          focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
          placeholder="Email address"
          :value="email"
          @input="event => $emit('update:email', event.target.value)"
        >
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: 'InviteForm',
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
