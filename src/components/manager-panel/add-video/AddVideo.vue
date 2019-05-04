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
        <div class="preview--outer" v-if="0">
          <label class="preview--label"
            >Video Preview
          </label>
          <div class="preview--inner secondary flexbox flexgap-1">
            
            <div class="preview--thumbnail--outer flexbox align-end">
              <img src="https://i.ytimg.com/vi/pmOvwfRMXy0/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAEUX-bHrWzZaYpQOwpwWVGEsTZww" alt="" class="preview--thumbnail">
            </div>

            <div class="preview--details">
              <div class="preview--video-title">
                Vue.js Basics - Episode 02
              </div>
              <div class="preview--channel-title">
                RabbitWerks Javascript
              </div>
              <div class="preview--description--outer">
                <span class="preview--description--inner">
                  This video is going to talk about all the cool stuff we can do with Vue. We will only be displaying 2 lines of the description here.
                </span>
              </div>
            </div>
          </div>

        </div>

        <!-- NEW PLAYLIST COMPONENT -->
        <div class="new-playlist--outer" v-if="1">
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


export default {
  data() {
    return {
      panelIsOpen: false,
      videoURL: '',
      playlist: '',
      videoPreview: {
        isShowingPreview: true,
        title: '',
      }
    }
  },
  components: {
    'video-url': VideoURL,
    'playlist-select': PlaylistSelect,
  }
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
.input--label, .preview--label {
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


.preview--inner {
  margin-top: .25rem;
  padding: .5rem;
}
.preview--thumbnail {
  width: 8rem;
  background: #fff;
}
.preview--details {
  width: 100%;
}
.preview--video-title {
  font-size: 1.3rem;
  border-bottom: 2px solid black;
}
.preview--channel-title {
  margin-top: .15rem;
  margin-bottom: -.25rem;
  font-size: .8rem;
}
.preview--description--outer {
  margin-top: .25rem;
  font-size: .65rem;
  background-color: #fff;
  padding: .15rem;
  height: 2rem;
}
</style>

