# Vuetube Worklog

---

### 5/12/19

- validating video url
- extracting the videoID from the url
- store videoID value in state/Vuex
- will make api call from vuex

---

### 5/14/19

- working out fetch request
  - youtube wont accept headers for params
  - need to send via query string
  - will need to extract to BACKEND request
- cleaned up app packages
  - removed axios
  - removed youtube-v3-api
  - removed vuex as dep
  - re-added vuex as devdep

---

### 5/17/19

- fetch request built
  - need to extract api to backend
  - using custom eent to pass data up to parent
    - will refactor to vuex store soon.
    - want to demo using custom events (forget it, too convoluted)
  - setting up Vuex

---

### 5/18/19

- action for fetching video  data
  - handled in Vuex, based on user input from video-url CMP
- muta for commiting fetched data to state
  - commiting to 'fetchedVideoData'
- getter for sending out 'fetchedVideoData' to Vue

---

### 5/19/19

- raw video data sent to PreviewVideo.vue
  - computing out the preview data from raw
  - working on thumbnail proper display
- toggling component display based on loaded data or not
