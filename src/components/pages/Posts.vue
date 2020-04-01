<template>
  <div class="posts">
    <h1 class="display-4">Posts</h1>
    <posts-list></posts-list>
    <add-post></add-post>
  </div>
</template>

<script>

import PostsList from '../PostsList.vue';
import AddPost from '../AddPost.vue';
import store from '../../store/store';

export default {
  name: 'posts',
  components: {
    PostsList,
    AddPost,
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.posts.posts.length) {
      next();
    } else {
      store.dispatch('posts/getPosts')
        .then(next)
        .catch((error) => store.dispatch('feedback/setFeedback', { message: error.data, type: 'warning' }));
    }
  },
};
</script>

<style scoped>

</style>
