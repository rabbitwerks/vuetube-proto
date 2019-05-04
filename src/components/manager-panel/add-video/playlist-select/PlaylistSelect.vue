<template>
  <div class="input-group flexbox flexdir-col">
    <label class="input--label" for="playlist-dropdown"
      >Select Playlist
    </label>
    <div class="add-to-playlist--group flexbox flexgap-2">

      <select
        v-model="playlistSelector" 
        id="playlist-dropdown" 
        class="flex-5">
        <option 
          v-for="playlist in playlists" 
          :key="playlist._id" 
          :value="playlist"
          >{{ playlist.title }}
        </option>
      </select>

      <button 
        class="
          button action pointer
          add-video--button flex-1
        "
        @click="addVideo(selectedPlaylist)"
        >Add
      </button>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // required: step 1: playlist array
      playlists: [
        {
          _id: 0,
          title: 'Vue.js Basics',
        },
        {
          _id: 1,
          title: 'Modern Javascript Learning',
        },
        {
          _id: 2,
          title: 'Tech Talks',
        },
        {
          _id: 3,
          title: 'React Native Basics',
        },
      ],
      // required: step 2: selectedPlaylist data property
      // set this dynamically via v-model
      selectedPlaylist: ''
    }
  },
  computed: {
    // required: step 3: set up computed property to v-model through
    // v-modeled property, gets/sets selectedPlaylist value
    playlistSelector: {
      get() { return this.selectedPlaylist },
      set(value) { this.selectedPlaylist = value }
    }
  },
  methods: {
    addVideo(selectedPlaylist) {
      if (selectedPlaylist.title === 'Create New Playlist') {
        console.log('creating new playlist')
      } else {
        console.log('added')
      }
    }
  },
  mounted() {
    // required: step 4:
    // sets the default selected playlist as the first playlist in the array
    // adds the CREATE PLAYLIST array entry on VM mount
    this.selectedPlaylist = this.playlists[0];
    this.playlists.push({
      _id: null,
      title: 'Create New Playlist'
    })
  }
}
</script>

<style scoped>
.input-group {
  width: 100%;
  margin-bottom: .75rem;
}
.input--label {
  margin-bottom: .25rem;
  font-size: 1.25rem;
  color: var(--text-light);
}
.add-video--button:active {
  background-color: var(--action--active);
}
</style>
