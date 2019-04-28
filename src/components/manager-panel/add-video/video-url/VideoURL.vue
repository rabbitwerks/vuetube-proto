<template>
  <div class="input-group flexbox flexdir-col">
    <label class="input--label" for="url-input"
      >Video URL
    </label>
    <input 
      type="text" 
      id="url-input"
      class="input--text"
    /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
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
