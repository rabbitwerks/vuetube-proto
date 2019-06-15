<template>
  <li
    @click="loadPlaylist(playlist._id)"
    class="playlists--item--outer flexbox flexdir-col">

    <!-- ############### TITLE BAR ############### -->
    <TitleBar
      :_id="playlist._id"
      :title="playlist.title"
      :isFavoritePlaylist="playlist.isFavoritePlaylist"
    />

    <!-- ############### INFO BAR ############### -->
    <InfoBar 
      :description="playlist.description"
      :playlistDetails="playlist.playlistDetails"
    />
  </li>
</template>

<script>
import TitleBar from './title-bar/TitleBar';
import InfoBar from './info-bar/InfoBar';

export default {
  components: {
    TitleBar,
    InfoBar,
  },
  props: ['playlist'],
  methods: {
    loadPlaylist(id) {
      console.log('playlist: ', id)
    }
  }
}
</script>

<style scoped>
.playlists--item--outer {
  padding: 0 1rem;
  border-bottom: 1px solid var(--dark);
  background-color: var(--secondary);
}
.playlists--item--outer:hover {
  background-color: var(--secondary--hover);
}
</style>
