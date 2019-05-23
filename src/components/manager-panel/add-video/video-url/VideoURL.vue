<template>
  <div class="input-group flexbox flexdir-col">
    <label class="input--label" for="url-input"
      >Video URL
    </label>
    <input
      v-model="url"
      type="text" 
      id="url-input"
      class="input--text"
    /> 
  </div>
</template>

<script>
import isValidURL from 'url-validation';

// import Vuex Helpers
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      url: '',
      extractedVideoID: '',
    }
  },
  methods: {
    ...mapActions([
      'fetchVideoData_ACTION',
      'clearFetchedVideoData_ACTION'
    ])
  },
  watch: {
    url() {
      // if no URL || cleared input - clear vuex state 'fetchedVideoData'
      if (!this.url) {
        this.clearFetchedVideoData_ACTION();
      }
      // check input for valid URL, if true, else
      if (isValidURL(this.url)) {
        // splits the url at the first '=' and gets the 2nd index value
        let videoID = this.url.split('=')[1];
        // if url includes a start time param, strip it from ID
        if (videoID.includes('&')) {
          videoID = videoID.split('&')[0];
        }
        // save processed url as videoID
        this.extractedVideoID = videoID;
      } else {
        console.log('invalid url, please check and try again');
        this.clearFetchedVideoData_ACTION();
      }
    },
    extractedVideoID() {
      this.fetchVideoData_ACTION(this.extractedVideoID);
    }
  }
}
</script>

<style scoped>
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
</style>
