/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import API_KEY from '../env';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    addVideo: {
      fetchedVideoData: {},
    },
    playlists: [],

  },
  getters: {
    rawVideoData_GET: state => state.addVideo.fetchedVideoData,
  },
  mutations: {
    fetchVideoData_MUTA(state, payload) {
      state.addVideo.fetchedVideoData = payload;
    }
  },
  actions: {
    fetchVideoData_ACTION({ commit }, payload) {
      // fetch data - first param, search url from endpoints.js
      // we will want to extract this out to a backend endpoint
      // the backend would hold our sensitive credentials
      const extractedVideoID = payload;
      fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${extractedVideoID}&part=snippet,contentDetails,status,statistics,player`)
      .then(res => res.json())
      .then(videoData => {
        commit('fetchVideoData_MUTA', videoData.items[0])
      })
      .catch(error => console.error(error));
    }
  },
});

export default store;
