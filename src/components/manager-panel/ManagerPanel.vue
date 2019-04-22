<template>
  <div class="manager--outer">
    <add-video></add-video>
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
