<template>
    <div>
        <!-- <add-blog></add-blog> -->
        <list-blogs></list-blogs>
        <list-blogs-title></list-blogs-title>
    </div>
</template>

<script>

// import addBlog from './components/addBlog';
import listBlogs from './components/listBlogs';
import listBlogsTitle from './components/listBlogsTitle';

export default {
    components: {
        // 'add-blog': addBlog
        'list-blogs': listBlogs,
        'list-blogs-title': listBlogsTitle
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
