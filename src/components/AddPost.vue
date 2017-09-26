<template>
  <div class="add-post">
  	<h3>Add Post</h3>
    <div class="row">
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="post.title">
          </div>          
          <div class="form-group">
            <label for="content">Content</label>
            <input type="text" class="form-control" id="content" placeholder="Enter content" v-model="post.content">
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="add(post)">Add Post</button>
        </form>
      </div>
    </div>    
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Posts from '../services/Posts';

export default {
  name: 'add-post',
  data () {
    return {
      post: {
        title: '',
        content: ''
      }
    }
  },  
  computed: {
    ...mapGetters({
    	isLoading: 'isLoading',
    })
  },
  methods: {
    ...mapActions({
      getPosts: 'getPosts',
      setFeedback: 'feedback/setFeedback',
      addPost: 'addPost'
    }),
    add(post) {
      this.addPost(post)
        .then(() => this.post = {title: '', content: ''})
        .then(() => this.setFeedback({message: 'Post added', type: 'success'}))
        .catch(error => this.setFeedback({message: error.data, type: 'warning'}));
    }
  }
}
</script>

<style scoped>

</style>
