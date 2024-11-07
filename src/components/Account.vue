<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <div class="d-flex align-center justify-space-around">
                <v-avatar v-bind="props" v-if="image">
                    <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                </v-avatar>

                <v-avatar color="red" v-bind="props" v-else>
                    <span class="text-h5">{{username}}</span>
                </v-avatar>
            </div>
        </template>
        <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
export default {
    name: 'Account',
    data: () => ({
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
        image: true,
        username: "RI"
    }),
}
</script>