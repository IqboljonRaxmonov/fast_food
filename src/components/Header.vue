<template>
    <v-card>
        <v-toolbar color="black">
            <v-list-item lines="two" prepend-avatar="../../image.png">
            </v-list-item>
            <v-tabs slider-color="teal-lighten-3" show-arrows>
                <v-tab v-for="(item, i) in items" :key="i" :text="item.title" :value="'tab-' + i"></v-tab>
            </v-tabs>
            <v-spacer></v-spacer>

            <v-icon>mdi-cart</v-icon>
            <span style="color: blue;">{{ all_sum }} so'm </span>
            <Account v-if="login" />
            <v-avatar color="info px-4 align-center text-center" v-else>
                <v-icon icon="mdi-account-circle"></v-icon>
            </v-avatar>

        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        items: [
            { title: 'Menyu' },
            { title: 'Filiallar' },
            { title: 'Biz haqimizda' },
            { title: "Bog'lanish" },
        ],
        login: false,
        all_sum: 50000
    }),
}
</script>