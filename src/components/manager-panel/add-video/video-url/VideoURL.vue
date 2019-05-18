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
import API_KEY from '../../../../../env.js';
import Endpoints, { SEARCH_VIDEO_URL } from '../../../../endpoints.js';
import isValidURL from 'url-validation';

export default {
  data() {
    return {
      url: '',
      extractedVideoID: '',
      tempVideoData: {},
    }
  },
  watch: {
    url() {
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
      }
    },
    extractedVideoID() {
      // fetch data - first param, search url from endpoints.js
      // we will want to extract this out to a backend endpoint
      // the backend would hold our sensitive credentials 
      fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${this.extractedVideoID}&part=snippet,contentDetails,status,statistics,player`)
        .then(res => res.json())
        .then(videoData => {
          this.tempVideoData = videoData.items[0];

          // refactor for passing data to Vuex Store
          this.$emit('videoDataLoaded', [this.tempVideoData, console.log('custom event "videoDataLoaded" from: ', this.$options._componentTag)]);
        })
        .catch(error => console.log(error));
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
