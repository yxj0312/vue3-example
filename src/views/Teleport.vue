<template>
  <div
    class="border-2 opacity-25"
  >
    <button @click="isVisible = true">
      Show modal
    </button>
  </div>
  <teleport to="#modal-target">
    <Modal
      v-if="isVisible"
      @emit-closed="isVisible = false"
    >
      This is the modal. Lore mEst velox particula, cesaris.
      Assimilation at the moon was the beauty of nuclear flux,
      acquired to an extraterrestrial processor.Lore mEst velox particula, cesaris.
      Assimilation at the moon was the beauty of nuclear flux,
      acquired to an extraterrestrial processor.Lore mEst velox particula, cesaris.
      Assimilation at the moon was the beauty of nuclear flux,
      acquired to an extraterrestrial processor.Lore mEst velox particula, cesaris.
      Assimilation at the moon was the beauty of nuclear flux,
      acquired to an extraterrestrial processor.
    </Modal>
  </teleport>
</template>
<script>
import Modal from '../components/Modal.vue';

export default {
  name: 'Teleport',
  components: { Modal },
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>

<style scoped>

</style>
