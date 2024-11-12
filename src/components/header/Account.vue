<script setup>
import { ref } from 'vue'

const items = ref([
    { title: 'Shaxsiy kabinet' }
])

const username = ref("RI")
</script>
<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <div class="d-flex align-center justify-space-around">
                <v-avatar color="purple" v-bind="props">
                    <span class="text-h6">{{ username }}</span>
                </v-avatar>
                <v-menu>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </template>
        <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title @click="$router.push('/cabinet')">{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>