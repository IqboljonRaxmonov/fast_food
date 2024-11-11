<script setup>
import { ref } from 'vue';
import { useLoginStore } from '@/store/login-dialog';

const loginStore = useLoginStore()

const username = ref("")
const password = ref("")
const show = ref(false)
const errorMessage = ref('')

const login = async () => {
  await loginStore.login('loginStore/loginAction', { username: username.value, password: password.value })
    .then(() => {
      errorMessage.value = ""
    })
    .catch(responseErrorMessage => {
      errorMessage.value = responseErrorMessage;
    });
};

</script>

<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="loginStore.dialog" max-width="600">
      <v-card title="Tizimga kirish" class="text-center">
        <v-card-text>
          <v-form style="margin: 0 auto;width: 100%;" class="mb-5">
            <v-text-field autofocus color="light-green" label="Логин" name="username" prepend-icon="mdi-account"
              type="text" v-model="username"></v-text-field>

            <v-text-field id="password" color="light-green" label="Парол" name="password" prepend-icon="mdi-lock"
              :type="show ? 'text' : 'password'" v-model="password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show" @keyup.enter="login"></v-text-field>
          </v-form>
        </v-card-text>

        <div class="text-red" type="text">{{ errorMessage }}</div>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Yopish" variant="plain" @click="loginStore.dialog = false"></v-btn>
          <v-btn color="primary" text="Kirish" variant="tonal" @click="login"></v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>