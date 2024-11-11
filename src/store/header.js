
import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    sum: 500000,
    dialog: false
  }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
