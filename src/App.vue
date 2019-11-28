<template>
    <div>
        <router-view>
            <add-blog></add-blog>
            <list-blogs></list-blogs>
        </router-view>
    </div>
</template>

<script>

import addBlog from './components/addBlog';
import listBlogs from './components/listBlogs';

export default {
    components: {
        'add-blog': addBlog,
        'list-blogs': listBlogs
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
