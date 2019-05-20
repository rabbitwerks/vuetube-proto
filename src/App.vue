<template>
  <div class="app-container--shell">
    <Main-Container />
  </div>
</template>

<script>
import './assets/main.css';

import Main_Container from './views/Main';


export default {
  name: 'Application',
  components: {
    'Main-Container': Main_Container
  },
}
</script>
