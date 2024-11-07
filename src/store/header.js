
import { defineStore } from 'pinia';

export const useHeaderStore = defineStore('header', {
  state: () => ({
    sum: 500000
  }),
  actions: {
    increment() {
      this.count++;
    },
    async getData(){
        console.log('bdrbdr')
    }
  }
});
