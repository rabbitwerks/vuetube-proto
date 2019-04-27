<template>
  <div class="manager--outer flexbox flexdir-col">
    <add-video></add-video>
    <div class="playlist-manager">

    </div>
  </div>
</template>

<script>
import AddVideo from './add-video/AddVideo';

export default {
components: {
  'add-video': AddVideo,
}
}
</script>

<style scoped>
.manager--outer {
  height: 100%;
}
</style>
