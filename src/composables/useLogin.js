import { ref } from 'vue';
import 'firebase/compat/auth';
import { auth } from '@/firebase/config';

const errors = ref(null);

const signIn = async (email, password) => {
    errors.value = null;
    try {
        const res = await auth.signInWithEmailAndPassword(email,password);

        if(!res) {
            throw new Error('Login Failed');
        }
        errors.value = null;
        return res;
    } catch (error) {
        errors.value  = error.message;
    }
}

const useLogin = () => {

    return {errors, signIn}
}

export default useLogin;