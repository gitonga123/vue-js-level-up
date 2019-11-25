<template>
    <div id="app">
        <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
        <!-- <app-daniels v-bind:daniels="daniels"></app-daniels> -->
        <form-helper>
            <div slot="form-header">
                <h3>This is the title of the form</h3>
                <p>Information about the form</p>
            </div>
            <div slot="form-fields">
                <input type="text" name="user_name" placeholder="username" required>
                <input type="password" name="password" placeholder="Password" required>
            </div>
            <div slot="form-controls">
                <input type="button" value="Submit" @click="submitForm">
            </div>
        </form-helper>
        <app-footer v-bind:title_footer="title"></app-footer>
    </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
//import Daniels from "./components/Dan";
import formHelper from './components/formHelper'

export default {
    name: "app",
    components: {
        "app-header": Header,
        "app-footer": Footer,
        //"app-daniels": Daniels,
        "form-helper": formHelper
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
            title: "Leaning Vue",
            formHelper: "This is the form helper details"
        }
    },
    methods: {
        updateTitle: function(updatedTitle) {
            this.title = updatedTitle;
        },
        submitForm: function() {
            alert('Form submitted');
        }
    }
};
</script>

<style scoped>
h1 {
    color: purple;
}
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
