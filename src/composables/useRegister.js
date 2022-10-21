import { ref } from 'vue';
import 'firebase/compat/auth';
import { auth } from '@/firebase/config';

const errors = ref(null);

const signUp = async (email, password, userName) => {
    errors.value = null;
    try {
        const res = await auth.createUserWithEmailAndPassword(email,password);

        if(!res) {
            throw new Error('Register Failed');
        }
        await res.user.updateProfile({displayName:userName})
        errors.value = null;
        return res;
    } catch (error) {
        errors.value  = error.message;
    }
}

const useRegister = () => {

    return {errors, signUp}
}

export default useRegister;