<script setup>
import Header from './../layouts/Header.vue';
import Footer from './Footer.vue';

</script>
<template>
    <Header />
    <v-divider></v-divider>
    <RouterView />
    <Footer />
</template>