
import { defineStore } from 'pinia';
import axios from '@/axios';

export const useLoginStore = defineStore('login-dialog', {
    state: () => ({
        dialog: false
    }),
    actions: {
        login(state, params) {
            params.grant_type = process.env.VUE_APP_GRANT_TYPE;
            params.client_id = process.env.VUE_APP_CLIENT_ID;
            params.client_secret = process.env.VUE_APP_CLIENT_SECRET;
            return new Promise((resolve, reject) => {
                axios.post(process.env.VUE_APP_OAUTH_URL, params)
                    .then(response => {
                        localStorage.setItem('loginToken', response.data.token);
                        this.dialog = false;
                        resolve();
                    })
                    .catch(error => {
                        // Remove tokens from local storage on failure
                        axios.defaults.headers.common['Authorization'] = null;
                        localStorage.removeItem('loginToken');
                        localStorage.removeItem('user');
                        
                        // Check for a response message and reject with it, or use a default error message
                        const responseErrorMessage = error.response && error.response.data && error.response.data.message
                            ? error.response.data.message
                            : "Login yoki parol xato!";
                        
                        reject(responseErrorMessage); // Pass the error message to the calling function
                    });
            });
        },
        
    }
});
