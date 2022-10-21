<template>
  <form @submit.prevent="signIn">
    <h4>Sign In</h4>
    <input type="text" placeholder="Please enter your user name adress:" v-model="userName">
    <input type="text" placeholder="Please enter your email adress:" v-model="email">
    <input type="password" placeholder="Please enter your password adress:" v-model="password"/>
    <button>Sign in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const userName = ref('');
        const email = ref('');
        const password = ref('');

        const signIn = () => {
            console.log("userName : " + userName.value , "email : " + email.value, "password : " + password.value);
        }

        return {userName, email, password, signIn}
    }
}
</script>

<style>

</style>