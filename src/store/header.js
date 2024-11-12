
import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    sum: 0,
    dialog: false
  }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
