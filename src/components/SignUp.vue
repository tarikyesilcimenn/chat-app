<template>
    <form @submit.prevent="signIn">
      <h4>Sign Up</h4>
      <input type="text" placeholder="Please enter your email adress:" v-model="email">
      <input type="password" placeholder="Please enter your password adress:" v-model="password"/>
      <button>Sign up</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue'
  export default {
      setup() {
          const email = ref('');
          const password = ref('');
  
          const signIn = () => {
          }
  
          return {email, password, signIn}
      }
  }
  </script>
  
  <style>
  
  </style>