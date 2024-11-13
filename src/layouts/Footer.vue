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

<template>
    <v-footer class="fixed-footer px-0 mx-0">
      <v-row class="align-center text-center">
        <div class="bg-purple-lighten-2 d-flex w-100 align-center px-4">
          <v-btn v-for="item in items" :key="item.title" class="mx-2" color="white" rounded="xl" variant="text">
            {{ item.title }}
          </v-btn>
  
          <v-spacer></v-spacer>
  
          <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" size="small" variant="plain"></v-btn>
        </div>
  
        <div class="px-4 py-2 bg-black text-center w-100 text-white">
          {{ currentYear }} — <strong>MaxWay</strong>
        </div>
      </v-row>
    </v-footer>
  </template>
  
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
  
  /* Fixed Footer Styling */
  .fixed-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
  </style>
  