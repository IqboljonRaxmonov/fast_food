<template>
    <Header />
    <RouterView/>
    <!-- <Footer /> -->
</template>

<script>
// import Footer from './../layouts/Footer.vue';
import Header from './../layouts/Header.vue';

export default {
    name: 'Main',
    components: { Header },
    data: () => ({
        //
    }),
}
</script>