<template>
  <div class="new-playlist--outer">
    <div class="input-group flexbox flexdir-col">
      <label class="input--label" for="new-playlist--title-input"
        >New Playlist Title
      </label>
      <input type="text" id="new-playlist--title-input"/>
    </div>
    <div class="input-group flexbox flexdir-col">
      <label class="input--label" for="new-playlist--title-input"
        >New Playlist Description
      </label>
      <textarea 
        id="new-playlist--title-input"
        class="input-textarea" 
        rows="3">
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
    }
  }
}
</script>

<style scoped>
.new-playlist--outer > .input-group {
  margin-bottom: .5rem;
}
</style>
