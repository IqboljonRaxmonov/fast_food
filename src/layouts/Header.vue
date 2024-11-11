<script setup>
import { onMounted, ref } from 'vue';
import { useHeaderStore } from '@/store/header';
import { useLoginStore } from '@/store/login-dialog';
import LoginDialog from '@/dialogs/login-dialog.vue';
import AccountTooltip from '@/components/header/account-tooltip.vue';

const hesderStore = useHeaderStore();
const loginStore = useLoginStore()

const items = ref([
    { title: 'Menu', path: '/menu' },
    { title: 'Filiallar', path: '/branch' },
    { title: 'Biz haqimizda', path: '/about' },
    { title: "Bog'lanish", path: '/contact' },
]);
const login = ref(localStorage.getItem('token') ? true : false)

const showLoginPage = () => {
  loginStore.dialog = true;
}

onMounted(() => {
    // login.value = localStorage.getItem('token') ? true : false
})

const all_sum = hesderStore.sum;

</script>
<template>
    <LoginDialog />
    <v-card color="grey-lighten-4" height="50px" rounded="0" flat>
        <v-toolbar density="compact">
            <v-list-item lines="two" prepend-avatar="../../image.png" @click="$router.push('/')">
            </v-list-item>
            <v-tabs slider-color="teal-lighten-3" show-arrows>
                <v-tab v-for="(item, i) in items" :key="i" :text="item.title" :value="'tab-' + i"
                    @click="$router.push(`${item.path}`)"></v-tab>
            </v-tabs>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-badge :content="all_sum" inline></v-badge>
            </v-btn>

            <v-btn icon>
                <!-- <Account v-if="login" /> -->
                <v-avatar color="info px-4 align-center text-center" @click="showLoginPage">
                    <v-icon icon="mdi-account-circle" v-if="login"></v-icon>
                    <AccountTooltip v-else/>
                </v-avatar>
            </v-btn>
            <v-btn icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>