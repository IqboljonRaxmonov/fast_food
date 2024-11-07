<template>
    <Header />
    <!-- <AdminAccount v-if="login && user.rule == 'admin'"/>
    <Home v-else/> -->
    <!-- <Footer /> -->
</template>

<script>
import Account from './Account.vue';
import AdminAccount from './AdminAccount.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import Home from './Home.vue';

export default {
    name: 'Main',
    components: { Account, AdminAccount, Home, Header, Footer },
    data: () => ({
        login: false,
        user:{
            rule: 'admin'
        }
    }),
}
</script>