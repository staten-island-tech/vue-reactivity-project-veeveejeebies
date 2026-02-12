<template>
  <div class="container">
    <h1>Cookie Clicker</h1>
    <h2>{{ count }}</h2>
    <img @click="increment" src="/cookie.png" alt="" />
    <button>reset</button>
  </div>
</template>

<script setup>

import { reactive, ref } from 'vue'
const user = reactive({ username: '', password: '' })
const loggedIn = ref(false) 
function login(user) {
    console.log(user)
    loggedIn.value = true   
}
</script>

<style scoped></style>
