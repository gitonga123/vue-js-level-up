import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.store({
    state: {
        products: [
            { name: 'Banana Skin', price: 200 },
            { name: 'Shinny Star', price: 40 },
            { name: 'Green Shells', price: 60 },
            { name: 'Red Shells', price: 80 }
        ]
    }
});

export default store;
