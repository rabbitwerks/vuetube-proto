<template>
  <div class="preview--outer" v-if="videoPreview.isShowingPreview">
    <label class="preview--label"
      >Video Preview
    </label>
    <div class="preview--inner secondary flexbox flexgap-1">
      
      <div class="preview--thumbnail--outer flexbox align-end">
        <img :src="videoPreview.thumbnail" alt="preview thumbnail" class="preview--thumbnail">
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
            {{ videoPreview.truncDescrip }}            
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 1. extract hardcoded data to parent cmp data
// 2. pass in as props object

export default {
  props: {
    videoPreview: {
      type: Object,
    }
  }

}
</script>


<style scoped>
/*
  3. Bring over styles from parent and scope them. 
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
  margin-bottom: -.25rem;
  font-size: .8rem;
}
.preview--description--outer {
  margin-top: .25rem;
  font-size: .65rem;
  background-color: #fff;
  padding: .15rem;
  height: 2rem;
}
</style>
