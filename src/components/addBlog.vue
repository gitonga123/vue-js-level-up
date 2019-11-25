<template>
    <div id="add-blog">
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
            <input type="button" value="save blog" v-on:click="submitForm()">
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
        </div>
        <div></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: []
      },
    }
  },
  methods: {
    submitForm: function() {
      //
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
