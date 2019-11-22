<template>
    <div id="app">
        <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <app-daniels v-bind:daniels="daniels"></app-daniels>
        <app-footer v-bind:title_footer="title"></app-footer>
    </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Daniels from "./components/Dan";

export default {
    name: "app",
    components: {
        "app-header": Header,
        "app-footer": Footer,
        "app-daniels": Daniels,
    },
    data() {
        return {
            daniels: [
                { name: "Elias Gitonga", relationship: "Grandfather", show: false },
                { name: "Caroline Kanana", relationship: "Grandmother", show: false },
                { name: "Daniel Mutwiri", relationship: "Father", show:false },
                { name: "Ann Mutwiri", relationship: "Mother", show: false},
                { name: "Bryan Muriiki", relationship: "Uncle", show: false },
                { name: "JoyWendy Gitonga", relationship: "Aunt", show: false },
                { name: "Stephanie Mutwiri", relationship: "daughter", show: false }
            ],
            title: "Leaning Vue"
        }
    },
    methods: {
        updateTitle: function(updatedTitle) {
            this.title = updatedTitle;
        }
    }
};
</script>

<style scoped>
h1 {
    color: purple;
}
</style>
