<template>
  <div class="add-video--shell">

    <div class="add-video--outer">

      <!-- REUSABLE COMPONENT - PANEL HEADER -->
      <div class="panel-header--outer flexbox-space-between align-center">
        <span class="panel-header--text">Add Video</span>
        <div class="collapse-icon--outer pointer">
          <span>hide</span>
          <!-- <span>show</span> -->
        </div>
      </div>

      <!-- ADD VIDEO PARENT COMPONENT -->
      <div class="add-video--inner flexbox flexdir-col">

        <!-- ADD VIDEO COMPONENT -->
        <video-url />

        <!-- PLAYLIST SELECT COMPONENT -->
        <playlist-select />

        <!-- PREVIEW VIDEO COMPONENT -->
        <preview-video
          :videoPreview="videoPreview"
          v-if="videoPreview.isShowingPreview"
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
      videoPreview: {
        isShowingPreview: false,
        title: 'Vue.js Basics - Episode 02',
        channel: 'RabbitWerks Javascript',
        truncDescrip: 'This video is going to talk about all the cool stuff we can do with Vue. We will only be displaying 2 lines of the description here.',
        thumbnail: 'https://i.ytimg.com/vi/pmOvwfRMXy0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAEUX-bHrWzZaYpQOwpwWVGEsTZww'
      },
      creatingNewPlaylist: true,
    }
  },
}
</script>

<style scoped>
.add-video--shell {
  padding: 1rem;
  background-color: var(--shell);
  min-height: 15rem;
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

