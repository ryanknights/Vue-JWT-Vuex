<template>
  <div class="posts-list">
  	<div class="alert alert-warning" v-if="!posts.length">
  		No Posts To Display
  	</div>
    <table class="table table-striped" v-if="posts.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts">
          <td>{{ post._id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>
            <a href="#" @click.prevent="remove(post._id)" class="btn btn-danger">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'posts-list',
  methods: {
    ...mapActions({
      removePost: 'posts/removePost',
      setFeedback: 'feedback/setFeedback'
    }),
    remove(id) {
      this.removePost(id)
        .then(() => this.setFeedback({message: 'Post removed', type: 'success'}))
        .catch((error) => this.setFeedback({message: error.data, type: 'warning'}));
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    })
  }
}
</script>

<style scoped>

</style>
