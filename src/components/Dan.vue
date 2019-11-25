<template>
<div id="daniel">
    <ul>
        <li v-for="(daniel, key) in daniels" v-bind:key="key" @click="daniel.show = !daniel.show">
            <h2>{{ daniel.name }} </h2>
            <h3 v-show="daniel.show">{{ daniel.relationship }}</h3>
        </li>
    </ul>
    <button v-if="daniels.length > 0" v-on:click="deleteNinja">Delete Member</button>
</div>
</template>

<script>
export default {
    props: { 
        daniels: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        deleteNinja: function() {
            this.daniels.shift(); 
        }
    }
}
</script>

<style scoped>
#daniel{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>