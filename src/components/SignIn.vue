<template>
    <form @submit.prevent="login">
      <h4>Sign In</h4>
      <input type="text" placeholder="Please enter your email adress:" v-model="email">
      <input type="password" placeholder="Please enter your password adress:" v-model="password"/>
      <button>Sign In</button>
    </form>
    <div class="error">
      {{errors}}
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import useLogin from '@/composables/useLogin';
  export default {
      setup( props, context ) {
          const email = ref('');
          const password = ref('');
          const { errors, signIn} = useLogin();
          const login = () => {
            signIn(email.value, password.value);
            context.emit('login')
          }
  
          return { email, password, login, errors }
      }
  }
  </script>
  
  <style>
  
  </style>