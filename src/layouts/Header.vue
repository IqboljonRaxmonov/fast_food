<script setup>
import { onMounted, ref } from 'vue';
import { useHeaderStore } from '@/store/header';
import { useLoginStore } from '@/store/login-dialog';
import LoginDialog from '@/dialogs/login-dialog.vue';
import { useRouter } from 'vue-router';

const hesderStore = useHeaderStore();
const loginStore = useLoginStore();
const router = useRouter();

const navItems = ref([
    { title: 'Menu', path: '/menu' },
    { title: 'Filiallar', path: '/branch' },
    { title: 'Biz haqimizda', path: '/about' },
    { title: "Bog'lanish", path: '/contact' },
]);

const languages = ref([
    { name: "UZ", code: 'UZ' },
    { name: 'RU', code: 'RU' },
    { name: 'ENG', code: 'US' },
]);

const selectedLanguage = ref('UZ');
const cartTotal = hesderStore.sum;
const login = ref(!!localStorage.getItem('loginToken'));
const tab = ref(null);


function changeLang() {
    // 
}

const showLoginPage = () => {
    if(login.value){
        router.push('/cabinet');
    }else{
        loginStore.dialog = true;
    }
}


onMounted(() => {
    // 
})

</script>

<template>
    <LoginDialog style="margin: 0px;" />
    <v-card color="grey-darken-4" height="64px" flat>
        <v-toolbar density="compact" class="header-toolbar">
            <!-- Logo Section -->
            <v-list-item lines="two" prepend-avatar="../../image.png" @click="$router.push('/')">
                <v-list-item-title class="font-weight-bold text-h6 text-white">MaxWay</v-list-item-title>
            </v-list-item>

            <!-- Navigation Links -->
            <v-card>
                <v-tabs v-model="tab" show-arrows slider-color="purple-lighten-2" >
                    <v-tab v-for="(item, index) in navItems" :key="index" :text="item.title" class="text-white"
                        @click="$router.push(item.path)">
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </v-card>

            <!-- Spacer to push content to the right -->
            <v-spacer></v-spacer>

            <!-- Delivery Option Section -->
            <v-btn icon color="purple-lighten-2">
                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
            <div class="delivery-option text-white text-center">
                <div style="margin-bottom: -10px;">Yetkazib berish yoki Olib ketish</div>
                <v-btn text small color="purple lighten-3 text-lowercase" style="padding: 0px;">
                    Qabul qilib olish turini tanlang
                </v-btn>
            </div>
            <!-- language Select -->
            <!-- <v-select v-model="selectedLanguage" :items="languages" item-title="name" item-value="code"
                class="language-select text-white" disabled hide-details solo flat outlined @update:model-value="changeLang">
            </v-select> -->

            <!-- Cart Button -->
            <v-btn icon color="white">
                <v-icon>mdi-cart</v-icon>
            </v-btn>
            <span variant="elevated" class="text-yellow bold" style="margin: 5px 0; word-spacing: 2px; font-size: 24px; font-weight: bold; 
                                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);">{{ cartTotal }} so'm </span>

            <!-- User Account Button -->
            <v-btn icon>
                <v-btn color="purple align-center" icon="mdi-account" @click="showLoginPage"></v-btn>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<style scoped lang="scss">
.header-toolbar {
    background-color: #1c1c1c;
    /* Dark background color */
    padding-left: 16px;
}

.text-white {
    color: #ffffff !important;
}

.delivery-option {
    margin-right: 16px;
    font-size: 14px;
}

.language-select {
    max-width: 100px;
}
</style>
