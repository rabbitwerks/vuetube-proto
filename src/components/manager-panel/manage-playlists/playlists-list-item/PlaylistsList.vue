<template>
  <ul class="playlists--wrapper">
    <Playlist--ListItem
      v-for="(playlist) in allPlaylists_GET"
      :key="playlist._id"
      :playlist="playlist"
      @click="loadPlaylist(playlist._id)"
    />
    <EndOfPlaylists />
  </ul>
</template>

<script>
import Playlist_ListItem from './pl-list-item/Playlist_ListItem.vue';
import EndOfPlaylists from './end-of-playlists/EndOfPlaylists.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    'Playlist--ListItem': Playlist_ListItem,
    EndOfPlaylists,
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
</style>
