<template>
  <div class="detail--box accent flex-1 flexbox flex-align-center">
    <span class="detail--text flexbox-space-between">
      <span class="label">{{ label }}:</span>
      <span class="data">{{ data }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: ['label', 'data']
}
</script>

<style scoped>
.detail--box {
  padding: 0 .25rem;
}
</style>
