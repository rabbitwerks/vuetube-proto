<template>
  <div class="app-container--shell">
    <main-container />
  </div>
</template>

<script>
import './assets/main.css';

import Main_Container from './views/Main';


export default {
  name: 'app',
  components: {
    'main-container': Main_Container
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
}
</script>
