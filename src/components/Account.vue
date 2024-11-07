<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                v-bind="props"></v-list-item>

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
    }),
}
</script>