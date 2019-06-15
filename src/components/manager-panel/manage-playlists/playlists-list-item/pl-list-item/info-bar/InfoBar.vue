<template>
  <div class="pl-item info-bar--outer">
    <div class="playlist-description">
      {{ description }}
    </div>
    <div class="playlist-details--outer flexbox-space-between flexgap-2">
 
      <DetailBox 
        label="Date Created"
        :data="playlistDetails.dateCreated"
      />
      <DetailBox 
        label="Completed Videos"
        :data="playlistDetails.completedVideos"
      />
      <DetailBox 
        label="Total Videos"
        :data="playlistDetails.totalVideos"
      />
    </div>
  </div>
</template>

<script>
import DetailBox from './DetailBox.vue';

export default {
  components: {
    DetailBox
  },
  props: ['description', 'playlistDetails']
}
</script>

<style scoped>
.playlist-description {
  height: 1.25rem;
  margin-bottom: .5rem;
  padding-left: .25rem;
  background-color: var(--shell);
}

.playlist-details--outer {
  height: 1.25rem;
  margin-bottom: 1rem;
}

</style>
