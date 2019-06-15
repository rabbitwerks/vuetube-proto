<template>
  <ul class="playlists--wrapper">
    <Playlist--ListItem
      v-for="(playlist) in allPlaylists_GET"
      :key="playlist._id"
      :playlist="playlist"
      @click="loadPlaylist(playlist._id)"
    />

    <!-- ############### END OF PLAYLISTS ############### -->


  </ul>
</template>

<script>
import Playlist_ListItem from './pl-list-item/Playlist_ListItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'Playlist--ListItem': Playlist_ListItem
  },
  computed: {
    ...mapGetters([
      'allPlaylists_GET',
    ]),
  },
}
</script>

<style scoped>

.playlists--wrapper {
  list-style: none;
}


.end-of-playlists--outer {
  height: 6rem;
}

.end-of-playlists--inner {
  color: var(--text-light);
  padding: .25rem 2rem;
  border-bottom: 2px solid var(--secondary);
}
</style>
