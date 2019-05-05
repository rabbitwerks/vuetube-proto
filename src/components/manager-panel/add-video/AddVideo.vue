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
        <div class="new-playlist--outer" v-if="!videoPreview.isShowingPreview">
          <div class="input-group flexbox flexdir-col">
            <label class="input--label" for="new-playlist--title-input"
              >New Playlist Title
            </label>
            <input type="text" id="new-playlist--title-input"/>
          </div>
          <div class="input-group flexbox flexdir-col">
            <label class="input--label" for="new-playlist--title-input"
              >New Playlist Description
            </label>
            <textarea 
              id="new-playlist--title-input"
              class="input-textarea" 
              rows="3">
            </textarea>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import VideoURL from './video-url/VideoURL';
import PlaylistSelect from './playlist-select/PlaylistSelect';
import PreviewVideo from './preview-video/PreviewVideo';


export default {
  components: {
    'video-url': VideoURL,
    'playlist-select': PlaylistSelect,
    'preview-video': PreviewVideo
  },

  data() {
    return {
      panelIsOpen: false,
      videoURL: '',
      selectedPlaylist: '',


      // will be generated when user inputs valid URL to add video;
      // fetch video data, display preview;
      // if ERROR: no resource found, throw User Message: err
      videoPreview: {
        isShowingPreview: true,
        title: 'Vue.js Basics - Episode 02',
        channel: 'RabbitWerks Javascript',
        truncDescrip: 'This video is going to talk about all the cool stuff we can do with Vue. We will only be displaying 2 lines of the description here.',
        thumbnail: 'https://i.ytimg.com/vi/pmOvwfRMXy0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAEUX-bHrWzZaYpQOwpwWVGEsTZww'
      }
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

.input-group {
  width: 100%;
  margin-bottom: .75rem;
}
.input-group:last-of-type {
  width: 100%;
  margin-bottom: .25rem;
}
.input--label {
  margin-bottom: .25rem;
  font-size: 1.25rem;
  color: var(--text-light);
}
.input-textarea {
  padding: .1rem;
  font-family: var(--font);
  resize: vertical;
}
.new-playlist--outer > .input-group {
  margin-bottom: .5rem;
}


.add-video--button:active {
  background-color: var(--action--active);
}


</style>

