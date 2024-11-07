<template>
    <v-sheet class="mx-auto" width="300">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          label="First name"
        ></v-text-field>
  
        <v-text-field
          v-model="lastName"
          :rules="lastNameRules"
          label="Last name"
        ></v-text-field>
  
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet>
  </template>
  <script>
  export default {
      name: 'Login',
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