<script setup>
import { reactive } from 'vue'

const items = reactive([
    { title: 'Shaxsiy kabinet' },
    { title: 'Sozlamalar' }
])

</script>

<template>
    <div class="text-center">
        <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    
                </v-btn>
            </template>

            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>