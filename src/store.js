/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import API_KEY from '../env';
import { SEARCH_VIDEO_URL } from './endpoints.js';

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
    },
    clearFetchedVideoData_MUTA(state) {
      state.addVideo.fetchedVideoData = {};
    }
  },
  actions: {
    fetchVideoData_ACTION({ commit }, payload) {
      // fetch data - first param, search url from endpoints.js
      // we will want to extract this out to a backend endpoint
      // the backend would hold our sensitive credentials
      const extractedVideoID = payload;
      fetch(`${SEARCH_VIDEO_URL}?key=${API_KEY}&id=${extractedVideoID}&part=snippet,contentDetails,status,statistics,player`)
      .then(res => res.json())
      .then(videoData => {
        commit('fetchVideoData_MUTA', videoData.items[0])
      })
      .catch(error => {
        commit('clearFetchedVideoData_MUTA');
        console.error(error);
      });
    },
    clearFetchedVideoData_ACTION({commit}) {
      commit('clearFetchedVideoData_MUTA');
    }
  },
});

export default store;
