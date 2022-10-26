<template>
  <form @submit.prevent="register">
    <h4>Sign Up</h4>
    <input type="text" placeholder="Please enter your user name adress:" v-model="userName">
    <input type="text" placeholder="Please enter your email adress:" v-model="email">
    <input type="password" placeholder="Please enter your password adress:" v-model="password"/>
    <button>Sign Up</button>
  </form>
  <div class="error">
    {{errors}}
  </div>
</template>

<script>
import { ref } from 'vue';
import useRegister from '../composables/useRegister';
export default {
    setup() {
        const userName = ref('');
        const email = ref('');
        const password = ref('');
        const { errors, signUp} = useRegister();
        const register = async () => {
            // console.log("userName : " + userName.value , "email : " + email.value, "password : " + password.value);
            await signUp(email.value, password.value, userName.value);
            // console.log(error);
        }

        return {userName, email, password, register, errors}
    }
}
</script>

<style>

</style>