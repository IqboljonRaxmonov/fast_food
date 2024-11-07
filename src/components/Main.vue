<template>
    <v-card>
        <v-toolbar color="black">
            <v-list-item lines="two" prepend-avatar="../../image.png">
            </v-list-item>
            <v-tabs slider-color="teal-lighten-3" show-arrows>
                <v-tab v-for="i in 10" :key="i" :text="'Item ' + i" :value="'tab-' + i"></v-tab>
        </v-tabs>
            <v-spacer></v-spacer>

            <v-btn icon="mdi-magnify"></v-btn>
            <Account/>
        </v-toolbar>
    </v-card>
    <v-card>
        <v-tabs bg-color="teal-darken-3" slider-color="teal-lighten-3" show-arrows>
            <v-tab v-for="i in 10" :key="i" :text="'Item ' + i" :value="'tab-' + i"></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
import Account from './Account.vue';

export default {
    name: 'Main',
    components: { Account },
    data: () => ({
        // 
    }),
}
</script>