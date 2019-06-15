<template>
  <div class="title-bar--outer flexbox flex-align-center">
    <div class="title-bar--inner flexbox flex-1 flex-align-center">
      <div class="title-bar--title flex-1 flexbox flex-align-center">
        {{ title }}
      </div>
      <div 
        class="title-bar--favorite-toggle" 
        @click.stop="toggleAsFavoritePlaylist_ACTION(_id)"
        :class=" isFavoritePlaylist ? 'accent' : 'action' ">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    _id: {
      type: [Number, String],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isFavoritePlaylist: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    ...mapActions(['toggleAsFavoritePlaylist_ACTION'])
  }
}
</script>

<style scoped>
.title-bar--inner {
  height: 4rem;
}
.title-bar--title {
  height: 2rem;
  margin-right: 1rem; 
  padding-left: .25rem;
  background-color: var(--shell);          
}
.title-bar--favorite-toggle {
  height: 2rem;
  width: 2rem;
}
</style>
