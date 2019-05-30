<template>
  <ul class="playlists--wrapper">
    <li
      v-for="(playlist) in allPlaylists_GET"
      :key="playlist._id"
      @click="loadPlaylist(playlist._id)"
      class="playlists--item--outer flexbox flexdir-col">

      <!-- ############### TITLE BAR ############### -->
      <TitleBar
        :_id="playlist._id"
        :title="playlist.title"
        :isFavoritePlaylist="playlist.isFavoritePlaylist"
      />

      <!-- ############### INFO BAR ############### -->
      <div class="pl-item info-bar--outer">
        <div class="playlist-description">
          {{ playlist.description }}
        </div>
        <div class="playlist-details--outer flexbox-space-between flexgap-2">
          <!-- THIS WILL BE A V-FOR LOOP -->
          <div class="detail--box accent flex-1 flexbox flex-align-center">
            <span class="detail--text">
              Date Created: {{ playlist.details.dateCreated }}
            </span>
          </div>
          <div class="detail--box accent flex-1 flexbox flex-align-center">
            <span class="detail--text">
              Completed Videos: {{ playlist.details.completedVideos }}
            </span>
          </div>
          <div class="detail--box accent flex-1 flexbox flex-align-center">
            <span class="detail--text">
              Total Videos: {{ playlist.details.totalVideos }}
            </span>
          </div>
        </div>
      </div>
    </li>

    <!-- ############### END OF PLAYLISTS ############### -->
    <div class="pl-item end-of-playlists--outer flexbox-space-center flexdir-col">
      <span class="end-of-playlists--inner">
        End of Playlists
      </span>
    </div>

  </ul>
</template>

<script>
import TitleBar from './title-bar/TitleBar';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    TitleBar,
  },
  computed: {
    ...mapGetters([
      'allPlaylists_GET',
    ]),
  },
  methods: {
    ...mapActions([
      'toggleAsFavoritePlaylist_ACTION'
    ]),
    loadPlaylist(id) {
      console.log('playlist: ', id)
    }
  }
}
</script>

<style scoped>

.playlists--wrapper {
  list-style: none;
}

.playlists--item--outer {
  padding: 0 1rem;
  border-bottom: 1px solid var(--dark);
  background-color: var(--secondary);
}
.playlists--item--outer:hover {
  background-color: var(--secondary--hover);
}


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
.detail--box {
  padding-left: .25rem;
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
