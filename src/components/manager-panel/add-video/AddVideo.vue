<template>
  <div class="add-video--shell">

    <div class="add-video--outer">

      <div class="panel-header--outer flexbox-space-between align-center">
        <span class="panel-header--text">Add Video</span>
        <div class="collapse-icon--outer pointer">
          <span>hide</span>
          <!-- <span>show</span> -->
        </div>
      </div>

      <div class="add-video--inner">

        <div class="input-group flexbox flexdir-col">
          <label class="input-label" for="url-input">Video URL</label>
          <input type="text" class="input-text" id="url-input"/>
        </div>

        <div class="input-group flexbox flexdir-col">

          <label class="input-label" for="playlist-dropdown">Select Playlist</label>
          <div class="add-to-playlist--group flexbox flexgap-2">

            <select id="playlist-dropdown" class="input-text flex-5">
              <option value="playlist00">Vue Basics</option>
              <option value="playlist01">Modern Javascript</option>
              <option value="playlist02">My First Playlist</option> 
              <option value="new-playlist">My First Playlist</option> 
            </select>

            <button class="button action add-video--button flex-1">Add</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panelIsOpen: true,
      videoURL: '',
      playlist: '',
    }
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
  margin-bottom: 1rem;
}
.input-group:last-of-type {
  width: 100%;
  margin-bottom: .25rem;
}
.input-label {
  margin-bottom: .25rem;
  font-size: 1.25rem;
  color: #f7f7f7;
}
.input-text {
  height: 2rem;
  padding: .25rem;
  font-size: 1.25rem;
  font-family: 'Cuprum';
}
</style>

