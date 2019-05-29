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
         <PlaylistsList />
      </div>

    </div>

  </div>
</template>


<script>
import PlaylistsList from './playlists-list/PlaylistsLists';

import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      panelIsOpen: true
    }
  },
  components: {
    PlaylistsList
  },
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


</style>
