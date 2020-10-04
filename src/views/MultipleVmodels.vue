<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        >
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm leading-5 text-gray-600">
          Or
          <a
            href="#"
            class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            start your 14-day free trial
          </a>
        </p>
      </div>
      <InviteForm
        v-model:name="inviteName"
        v-model:email="inviteEmail"
      />
      <div class="mt-6">
        <div>{{ inviteName }}</div>
        <div>{{ inviteEmail }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import InviteForm from '../components/InviteForm.vue';

export default {
  name: 'MultipleVmodels',
  components: {
    InviteForm,
  },
  setup() {
    const inviteName = ref('');
    const inviteEmail = ref('');
    return {
      inviteName,
      inviteEmail,
    };
  },
};
</script>

<style scoped>

</style>
