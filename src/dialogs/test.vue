<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const progressbar = ref(false);
const username = ref('');
const password = ref('');
const show = ref(false);
const showAlert = ref(false);
const errorMessage = ref('');
const overlay = ref(false);

const store = useStore();
const router = useRouter();

const login = async () => {
  try {
    await store.dispatch('auth/loginAction', { username: username.value, password: password.value });
  } catch (error) {
    errorMessage.value = 'Логин ёки парол нотўғри!';
    overlay.value = false;
    showAlert.value = true;
    progressbar.value = false;
    alert(errorMessage.value);
  }
};
</script>

<template>
  <!-- Template goes here -->
</template>
