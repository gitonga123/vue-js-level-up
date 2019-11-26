<template>
    <div v-theme:column="'wide'" id="list-blogs">
        <h1>All blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-for="(blog, key) in filterBlogs" class="single-blog" :key="key">
            <h3 v-rainbow>{{ blog.title|to-uppercase }}</h3>
            <article>{{ blog.body|snippet }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [],
            search: ''
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
    computed: {
        filterBlogs: function () {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    },
    filters: {
        toUppercase(value) {
            return value.toUpperCase();
        },
        snippet(value) {
            return value.slice(0, 100) + '...';
        }
    },
    directives: {
        'rainbow': {
            bind(el, binding, vnode) {
                el.style.color = "#" + Math.random().toString().slice(2, 8);
                binding;
                vnode;
            }
        },
        'theme': {
            bind(el, binding, vnode) {
                if (binding.value == 'wide') {
                    el.style.maxWidth = '1500px';
                } else if (binding.value == 'narrow') {
                    el.style.maxWidth = '750px';
                }
                if (binding.arg == 'column') {
                    el.style.background = "#ddd";
                    el.style.padding = "20px";
                }
                vnode;
            }
        }
    }
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
