<template>
    <Header />
    <RouterView/>
    <!-- <LoginDialog/> -->
    <!-- <Footer /> -->
</template>

<script>
// import Footer from './../layouts/Footer.vue';
// import LoginDialog from '@/dialogs/login-dialog.vue';
import Header from './../layouts/Header.vue';

export default {
    name: 'Main',
    components: { Header },
    data: () => ({
        //
    }),
}
</script>