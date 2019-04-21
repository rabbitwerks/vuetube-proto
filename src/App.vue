<template>
  <div class="app--container--shell">
    <main--container />
  </div>
</template>

<script>
import './assets/main.css';

import Main__Container from './views/Main'

import API_KEY from '../env.js';


export default {
  name: 'app',
  components: {
    'main--container': Main__Container
  },
  data() {
    return {
      data: {
        channel_id: 'UCyH4i2twA5tdJhZVcSoNZRQ',
        channelDataRaw: [],
        channelData: {
          snippet: {},
          contentDetails: {},
          statistics: {},
        }
      }
    }
  },
  // created() {
  //   const { channel_id, channelData } = this.data;
  //   // console.log('Main API', api);
  //   console.log('Channel', api.searchChannel(channel_id));
  //   // console.log('Channel Sections', api.searchChannelSections(channel_id));
  //   api.searchChannel(channel_id)
  //     .then(data => {
  //       this.data.channelDataRaw.push(data.items[0])
  //       const { snippet, contentDetails, statistics } = data.items[0];
  //       console.log(snippet)
  //       this.data.channelData.snippet = snippet;
  //       this.data.channelData.contentDetails = contentDetails;
  //       this.data.channelData.statistics = statistics;

  //     }).catch(error => console.log(error))
  // },
  
}


</script>

<style>

</style>
