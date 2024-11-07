<template>
    <v-footer class="bg-grey-lighten-1 align-center">
        <v-row class="align-center text-center">
            <div class="bg-teal d-flex w-100 align-center px-4">
                <v-btn v-for="item in items" :key="item.title" class="mx-2" color="white" rounded="xl" variant="text">
                    {{ item.title }}
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" size="small" variant="plain"></v-btn>
            </div>

            <div class="px-4 py-2 bg-black text-center w-100 text-white">
                {{ currentYear }} — <strong>Fast food</strong>
            </div>
        </v-row>
    </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { title: "Home" },
  { title: "Menu" },
  { title: "Contact" },
  { title: "About" }
]);

const icons = ref(["mdi-facebook", "mdi-twitter", "mdi-instagram"]);

const currentYear = ref(new Date().getFullYear());


</script>
<style scoped>
.bg-grey-lighten-1 {
    background-color: #f5f5f5 !important;
}

.bg-teal {
    background-color: #009688 !important;
}

.bg-black {
    background-color: #000 !important;
}

.text-white {
    color: #fff !important;
}
</style>