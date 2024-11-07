<template>
    <v-card color="grey-lighten-4" height="50px" rounded="0" flat>
        <v-toolbar density="compact">
            <v-list-item lines="two" prepend-avatar="../../image.png">
            </v-list-item>
            <v-tabs slider-color="teal-lighten-3" show-arrows>
                <v-tab v-for="(item, i) in items" :key="i" :text="item.title" :value="'tab-' + i"></v-tab>
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
                <Account v-if="login" />
                <v-avatar color="info px-4 align-center text-center" @click="loading = !loading"  v-else>
                    <v-icon icon="mdi-account-circle"></v-icon>
                </v-avatar>
            </v-btn>
            <v-btn icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useHeaderStore } from '@/store/header';

const store = useHeaderStore();

const items = ref([
  { title: 'Menu' },
  { title: 'Filiallar' },
  { title: 'Biz haqimizda' },
  { title: "Bog'lanish" },
]);

onMounted(()=>{
    store.getData()
})

const login = ref(false);
const all_sum = store.sum;
const loading = ref(true);
</script>