<template>
  <div 
    :class="panelIsOpen ? 'shell--opened' : 'shell-collasped'"
    class="manage-playlists--shell flex-1">

    <!-- REUSABLE COMPONENT - PANEL HEADER -->
    <div class="panel-header--outer flexbox-space-between align-center">
      <span class="panel-header--text">My Playlists</span>
      <div 
        @click="panelIsOpen = !panelIsOpen" 
        class="collapse-icon--outer pointer">
        <span v-if="panelIsOpen">hide</span>
        <span v-else>show</span>
      </div>
    </div>

    <div class="manage-playlists--outer">

      <!-- ############### PLAYLISTS LIST ############### -->
      <div class="manage-playlists--inner" v-if="panelIsOpen">
        <ul class="playlists--wrapper">
          <li 
            v-for="playlist in allPlaylists" 
            :key="playlist.id"
            class="playlists--item--outer flexbox flexdir-col">

            <!-- ############### TITLE BAR ############### -->
            <div class="pl-item title-bar--outer flexbox flex-align-center">
              <div class="pl-item title-bar--inner flexbox flex-1 flex-align-center">
                <div class="title-bar--title flex-1 flexbox flex-align-center">
                  {{ playlist.title }}
                </div>
                <div 
                  class="title-bar--favorite-toggle" 
                  @click="playlist.isFavoritePlaylist = !playlist.isFavoritePlaylist"
                  :class=" playlist.isFavoritePlaylist ? 'accent' : 'action' ">

                </div>
              </div>
            </div>

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
      </div>

    </div>

  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      panelIsOpen: true
    }
  },
  computed: {
    allPlaylists() {
      return this.$store.getters.allPlaylists_GET;
    }
  }
}
</script>

<style scoped>
.manage-playlists--shell {
  background-color: var(--shell);
  padding: 1rem;
  padding-top: 0;
}
.shell--opened {
  min-height: 3rem;
}
.shell--collapsed {
  min-height: 0rem;
}
.manage-playlists--outer {
  height: calc(100% - 3rem);
  background-color: var(--dark);
  overflow-y: scroll;
}


.panel-header--outer {
  height: 3rem;
  padding: 0 1rem;
  background-color: var(--primary);
}
.panel-header--text {
  font-size: 1.75rem;
  font-weight: 700;
}


.playlists--wrapper {
  list-style: none;
}

.playlists--item--outer {
  padding: 0 1rem;
  border-bottom: 1px solid #fff;
  background-color: var(--secondary);
}







.pl-item.title-bar--inner {
  height: 4rem;
}
.title-bar--title {
  height: 2rem;
  margin-right: 1rem; 
  padding-left: .25rem;
  background-color: var(--shell);          
}

.title-bar--favorite-toggle {
  height: 2rem;
  width: 2rem;
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
