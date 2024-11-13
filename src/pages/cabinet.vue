<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const cards = ['Today']
const links = [
    ['mdi-account-multiple', 'Mijozlar'],
    ['mdi-folder', 'Kategoriyalar'],
    ['mdi-package-variant', 'Maxsulotlar'],
    ['mdi-clipboard-list', 'Buyurtmalar'],
    ['mdi-cash-register', 'Chegirmalar'],
    ['mdi-gavel', 'Huquqlar']
]
const rail = ref(true);
const drawer = ref(true);
const govToHomePage=()=>{
    if(!rail){
        router.push('/cabinet');
    }
}
</script>
<template>
    <v-card>
        <v-navigation-drawer permanent v-model="drawer"
        :rail="rail" @click="rail = false">
            <v-list-item class="pa-4" prepend-avatar="../../image.png" @click="govToHomePage">
                <v-list-item-title class="font-weight-bold text-h6 text-white">MaxWay</v-list-item-title>
                <template v-slot:append>
                    <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                </template>
            </v-list-item>

            <v-divider></v-divider>

            <v-list>
                <v-list-item v-for="[icon, text] in links" :key="icon" :prepend-icon="icon" :title="text"
                    link></v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="pa-2" @click="$router.push('/')">
                    <v-btn block color="purple-lighten-3">
                        Chiqish
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-app-bar>
            <v-app-bar-title>Application</v-app-bar-title>
        </v-app-bar>

        <v-main>
        </v-main>
    </v-card>
</template>

<!-- <template>
    <v-card>
        <v-layout>
            <v-navigation-drawer expand-on-hover permanent>
                <v-list>
                    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                        subtitle="sandra_a88@gmailcom" title="Sandra Adams"></v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me"
                        value="shared"></v-list-item>
                    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 250px"></v-main>
        </v-layout>
    </v-card>
</template> -->
