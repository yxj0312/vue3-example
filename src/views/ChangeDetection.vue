<template>
  <div class="container flex flex-col items-center justify-between">
    <div>
      <button
        class="rounded-b p-2 m-2 border-2 border-blue-600 bg-green-300 text-white"
        @click="addFieldToObject"
      >
        Add field to Object
      </button>
      <button
        class="rounded-b p-2 m-2 border-2 border-blue-600 bg-green-300 text-white"
        @click="deleteFieldFromObject"
      >
        Delete field from Object
      </button>
      <!--      <button-->
      <!--        class="rounded-b p-2 m-2 border-2 border-blue-600 bg-green-300 text-white"-->
      <!--        @click="useSetToAddField"-->
      <!--      >-->
      <!--        Use Set to Add field-->
      <!--      </button>-->
      <div>{{ personObject }}</div>
      <button
        class="rounded-b p-2 m-2 border-2 border-blue-600 bg-green-300 text-white"
        @click="changeArrayUsingIndex"
      >
        Change Array using index
      </button>
      <button
        class="rounded-b p-2 m-2 border-2 border-blue-600 bg-green-300 text-white"
        @click="changeArrayLength"
      >
        Change Array length
      </button>
      <button
        class="rounded-b p-2 m-2 border-2 border-blue-600 bg-green-300 text-white"
        @click="pushToArray"
      >
        Push to Array
      </button>
      <div>{{ peopleArray }}</div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  name: 'ChangeDetection',
  setup() {
    const personObject = reactive({
      name: 'Andre',
    });

    function addFieldToObject() {
      personObject.age = 36;
    }

    function deleteFieldFromObject() {
      delete personObject.age;
    }

    const peopleArray = ref([
      'Andre', 'Bob', 'Sally',
    ]);

    function changeArrayUsingIndex() {
      peopleArray.value[0] = 'Aaron';
    }

    function changeArrayLength() {
      peopleArray.value.length = 1;
    }

    function pushToArray() {
      peopleArray.value.push('William');
    }

    return {
      personObject,
      addFieldToObject,
      deleteFieldFromObject,
      peopleArray,
      changeArrayLength,
      changeArrayUsingIndex,
      pushToArray,
    };
  },

  // Some Detection in vue2 won't work in vue 3, like $set.
  // data() {
  //   return {
  //     personObject: {
  //       name: 'Andre',
  //     },
  //     peopleArray: [
  //       'Andre', 'Bob', 'Sally',
  //     ],
  //   };
  // },
  // methods: {
  //   addFieldToObject() {
  //     this.personObject.age = 36;
  //   },
  //   deleteFieldFromObject() {
  //     delete this.personObject.age;
  //   },
  //   useSetToAddField() {
  //     this.$set(this.personObject, 'height', '6ft');
  //   },
  //   changeArrayUsingIndex() {
  //     this.peopleArray[0] = 'Aazon';
  //   },
  //   changeArrayLength() {
  //     this.peopleArray.length = 1;
  //   },
  //   pushToArray() {
  //     this.peopleArray.push('William');
  //   },
  // },
};
</script>

<style scoped>

</style>
