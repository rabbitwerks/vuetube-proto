<template>
  <div class="manager--outer flexbox flexdir-col">
    <AddVideo />
    <ManagePlaylists />
  </div>
</template>

<script>
import AddVideo from './add-video/AddVideo';
import ManagePlaylists from './manage-playlists/ManagePlaylists';

export default {
components: {
  AddVideo,
  ManagePlaylists,
}
}
</script>

<style scoped>
.manager--outer {
  height: 100%;
}
</style>
