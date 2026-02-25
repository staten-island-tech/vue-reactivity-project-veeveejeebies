<template>
  <button @click="toggle">Show More</button>
  <h1 v-if="awesome"> </h1>
  <h1 v-else>Show Less</h1>

  <form action="submit" @submit.prevent>  </form>
</template>

<script>
 import { ref } from 'vue'

const displays = ref(true)

function toggle() {
  displays.value = !displays.value
}
</script>

<style  scoped>

</style>