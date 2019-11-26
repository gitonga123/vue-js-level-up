<template>
    <div id="add-blog">
        <div v-if="!submitted">
            <h2>Add a new Blog Post</h2>
            <form>
                <label for="title"></label>
                <input v-model.lazy="blog.title" type="text" id="title" name="title" required />
                <label for="content"></label>
                <textarea
                    v-model.lazy="blog.content"
                    name="blog_content"
                    id="content"
                    cols="30"
                    rows="10">
                </textarea>
                <div id="checkboxes">
                  <label>Ninjas</label>
                  <input type="checkbox" value="ninjas" v-model="blog.categories" />
                  <label>Wizards</label>
                  <input type="checkbox" value="wizards" v-model="blog.categories">
                  <label>Mario</label>
                  <input type="checkbox" value="mario" v-model="blog.categories">
                  <label>Cheese</label>
                  <input type="checkbox"  value="cheese" v-model="blog.categories">
                </div>
                <label for="author">Author:</label>
                <select name="author" id="author" v-model="blog.author">
                  <option v-for="(author, author_key) in authors" :key="author_key">{{ author }}</option>
                </select>
                <button @click.prevent="saveBlog">Add Blog</button>
            </form>
            <div id="preview">
              <h3>Preview Blog</h3>
              <p>Blog title: <span id="preview-text">{{ blog.title }}</span></p>
              <p>Blog content:</p>
              <p>{{ blog.content }}</p>
              <p>Blog Categories:</p>
              <ul>
                <li v-for="(item, index) in blog.categories" :key="index">
                  {{ item }}
                </li>
              </ul>
              <p>Author: <span id="preview-text">{{ blog.author }}</span></p>
            </div>
            <div></div>
        </div>
        <div v-else>
          <h3>Thanks for adding your post</h3>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['', 'The Net Ninja', 'The Angular Avenger', 'The Vue Vindicator', 'The spell check', 'Mediator the Author'],
      submitted: false
    }
  },
  methods: {
    saveBlog: function() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then((data) => {
        data;
        this.submitted = true;
      }).catch((error) => {
        error;
      });
    }
  },
};
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
#preview-text {
  font-weight: bold;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
