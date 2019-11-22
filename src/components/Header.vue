<template>
    <header>
        <h1 @click="changeTitle">{{ title }}</h1>
    </header>
</template>

<script>

import {bus} from '../main';

export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            //
        }
    },
    methods: {
        changeTitle: function() {
            this.title = "Learning Vue 101";
            bus.$emit('titleChanged', "Learning Vue 101");
        }
    }
};
</script>

<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>
