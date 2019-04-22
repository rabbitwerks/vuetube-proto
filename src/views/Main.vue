<template>
  <div class="main--container--outer flexbox flexdir-col">
    <navbar />
    <div class="main--container flexbox">
      <manager--panel class="flex-10" />
      <content--panel class="flex-15" />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/nav/Navbar';
import ManagerPanel from '../components/manager-panel/ManagerPanel';
import ContentPanel from '../components/content-panel/ContentPanel';


export default {
  components: {
    'navbar': Navbar,
    'manager--panel': ManagerPanel,
    'content--panel': ContentPanel
  }

}
</script>

<style scoped>
.main--container--outer {
  height: 100%;
  background-color: #212121;
}
.main--container {
  height: 100%;
}
</style>
