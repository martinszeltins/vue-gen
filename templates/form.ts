import { reactive } from 'vue'
import MyCustomForm from '@/types/myCustomForm'
import { required } from '@vuelidate/validators'

export function useMyCustomForm() {
    const defaultFormValues: MyCustomForm = {
        name: '',
    }
    
    const myCustomForm = reactive<MyCustomForm>({ ...defaultFormValues })
    
    const myCustomFormRules = {
        name: { required },
    }
    
    const resetForm = () => {
        for (const [key] of Object.entries(myCustomForm)) {
            // @ts-ignore
            myCustomForm[key] = defaultFormValues[key]
        }
    }
    
    return $$({ myCustomForm, defaultFormValues, myCustomFormRules, resetForm })
}
