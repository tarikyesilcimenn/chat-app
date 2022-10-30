<template>
  <div class="home container">
    <h2>TY Chat-App</h2>
    <div v-if="member">
      <SignUp @register="chatStart"/>
      <p>Click to <span @click="member=false">Sign In</span></p>
    </div>
    <div v-else>
      <SignIn @login="chatStart"/>
      <p>Click to <span @click="member=true">Register</span></p>
    </div>
  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue'
import SignIn from '../components/SignIn.vue'
import { ref } from 'vue' 
import { useRouter } from 'vue-router'
export default {
  name: 'HomeView',
  components: {
    SignUp,
    SignIn
    
  },
  setup() {
    const member = ref(true);
    const router = useRouter();

    const chatStart = () => {
      router.push({name: 'ChatRoom'})
    }

    return {member, chatStart}
  }
  
}
</script>
<style scoped>
  .home{
    text-align: left;
    padding: 20px 50px;
  }
</style>
