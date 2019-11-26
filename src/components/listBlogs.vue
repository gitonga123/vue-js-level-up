<template>
    <div v-theme:column="'narrow'" id="list-blogs">
        <h1>All blog Articles</h1>
        <div v-for="(blog, key) in blogs" class="single-blog" :key="key">
            <h3 v-rainbow>{{ blog.title }}</h3>
            <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: []
        };
    },
    methods: {},
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            this.blogs = data.body.slice(0, 10);
        }).catch((error) => {
            error;
        });
    },
};
</script>

<style scoped>
#list-blogs {
    max-width: 800px;
    margin: 0% auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eeeeee;
}
</style>
