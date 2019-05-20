<template>
  <div class="preview--outer" v-if="togglePreviewDisplay">
    <label class="preview--label"
      >Video Preview
    </label>
    <div class="preview--inner secondary flexbox flexgap-1">
      
      <div class="preview--thumbnail--outer flexbox align-end">
        <img :src="videoPreview.thumbnail.url" alt="preview thumbnail" class="preview--thumbnail">
      </div>

      <div class="preview--details">
        <div class="preview--video-title">
          {{ videoPreview.title }}
        </div>
        <div class="preview--channel-title">
          {{ videoPreview.channel }}
        </div>
        <div class="preview--description--outer flexbox flex-align-center">
          <span class="preview--description--inner">
            {{ videoPreview.truncatedDesc() }}            
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 1. extract hardcoded data to parent cmp data
// 2. pass in as props object
// 3. toggle display if loaded
// 4. 

export default {
  props: {
    rawVideoData: {
      type: Object,
    }
  },
  computed: {
    togglePreviewDisplay() {
      // checks object for properties or if empty object
      // will return true is yes, false if no
      if (Object.keys(this.rawVideoData).length) {
        return true
      } else {
        return false
      }
    },
    videoPreview() {
      const previewData = {
        title: this.rawVideoData.snippet.title,
        description: this.rawVideoData.snippet.description,
        truncatedDesc: () => {
          return this.rawVideoData.snippet.description.slice(0, 255) + '...';
        },
        thumbnail: this.rawVideoData.snippet.thumbnails.standard,
        channel: this.rawVideoData.snippet.channelTitle,
      };

      return previewData;
    }
  }

}
</script>


<style scoped>
/*
  Bring over styles from parent and scope them. 
*/ 

.preview--label {
  margin-bottom: .25rem;
  font-size: 1.25rem;
  color: var(--text-light);
}
.preview--inner {
  margin-top: .25rem;
  padding: .5rem;
}
.preview--thumbnail {
  width: 8rem;
  background: #fff;
}
.preview--details {
  width: 100%;
}
.preview--video-title {
  font-size: 1.3rem;
  border-bottom: 2px solid black;
}
.preview--channel-title {
  margin-top: .15rem;
  margin-bottom: .25rem;
  font-size: .9rem;
}
.preview--description--outer {
  margin-top: .25rem;
  font-size: .65rem;
  background-color: #fff;
  padding: .15rem;
  height: 3rem;
}
.preview--description--inner {
  line-height: .9rem;
}
</style>
