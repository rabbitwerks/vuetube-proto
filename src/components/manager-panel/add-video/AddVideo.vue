<template>
  <div
    :class="panelIsOpen ? 'shell--opened' : 'shell-collasped' "
    class="add-video--shell">

    <div class="add-video--outer">

      <!-- REUSABLE COMPONENT - PANEL HEADER -->
      <div class="panel-header--outer flexbox-space-between align-center">
        <span class="panel-header--text">Add Video</span>

        <div 
          @click="panelIsOpen = !panelIsOpen" 
          class="collapse-icon--outer pointer">
          <span v-if="panelIsOpen">hide</span>
          <span v-else>show</span>
        </div>

      </div>

      <!-- ADD VIDEO PARENT COMPONENT -->
      <div class="add-video--inner flexbox flexdir-col" v-if="panelIsOpen">

        <!-- ADD VIDEO COMPONENT -->
        <video-url />

        <!-- PLAYLIST SELECT COMPONENT -->
        <playlist-select />

        <!-- PREVIEW VIDEO COMPONENT -->
        <preview-video
          :rawVideoData="rawVideoData_GET"
        />

        <!-- NEW PLAYLIST COMPONENT -->
        <new-playlist v-if="creatingNewPlaylist" />

      </div>
    </div>
  </div>
</template>

<script>
import VideoURL from './video-url/VideoURL';
import PlaylistSelect from './playlist-select/PlaylistSelect';
import PreviewVideo from './preview-video/PreviewVideo';
import NewPlaylist from './new-playlist/NewPlaylist';

import { mapGetters } from 'vuex';
 


export default {
  components: {
    'video-url': VideoURL,
    'playlist-select': PlaylistSelect,
    'preview-video': PreviewVideo,
    'new-playlist': NewPlaylist,
  },
  data() {
    return {
      panelIsOpen: true,
      // videoURL: '',
      // selectedPlaylist: '', ...,

      // will be generated when user inputs valid URL to add video;
      // fetch video data, display preview;
      // if ERROR: no resource found, throw User Message: err
      creatingNewPlaylist: false,
    }
  },
  computed: {
    ...mapGetters(['rawVideoData_GET']),
  },
}
</script>

<style scoped>
.add-video--shell {
  padding: 1rem;
  background-color: var(--shell);
}
.shell--opened {
  min-height: 15rem;
}
.shell--collapsed {
  min-height: 0rem;
}
.add-video--outer {
  height: 100%;
  background-color: var(--dark);
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

.add-video--inner {
  padding: 1rem;
}


.add-video--button:active {
  background-color: var(--action--active);
}


</style>

