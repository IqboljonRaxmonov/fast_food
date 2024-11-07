<template>
    <v-carousel show-arrows="hover" hide-delimiter-background v-if="true"> <!--cycle-->
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
    </v-carousel>
    <v-sheet class="mx-auto" max-width="100%">
        <v-slide-group show-arrows>
            <v-slide-group-item v-for="n in 12" :key="n" v-slot="{ isSelected, toggle }">
                <v-btn :color="isSelected ? 'darkreader' : undefined" class="ma-2" rounded @click="toggle">
                    Options {{ n }}
                </v-btn>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script>
export default {
    name: 'Home',
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