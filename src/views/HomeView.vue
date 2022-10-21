<template>
  <div class="home container">
    <h2>TY Chat-App</h2>
    <div v-if="member">
      <SignUp/>
      <p>Click to <span @click="member=false">Register</span></p>
    </div>
    <div v-else>
      <SignIn/>
      <p>Click to <span @click="member=true">Sign Up</span></p>
    </div>
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import { ref } from 'vue' 

export default {
  name: 'HomeView',
  components: {
    SignUp,
    SignIn
    
  },
  setup() {
    const member = ref(true);

    return {member}
  }
  
}
</script>
<style scoped>
  .home{
    text-align: left;
    padding: 20px 50px;
  }
</style>
