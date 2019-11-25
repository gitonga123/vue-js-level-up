<template>
    <div>
        <add-blog></add-blog>
    </div>
</template>

<script>

import addBlog from './components/addBlog';

export default {
    components: {
        'add-blog': addBlog
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
};
</script>

<style>
body {
    margin: 0%;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
