# Vuetube Worklog

---

### 5/12/19

- validating video url
- extracting the videoID from the url
- store videoID value in state/Vuex
- will make api call from vuex

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
  
### 5/17/19

- fetch request built
  - need to extract api to backend
  - using custom eent to pass data up to parent
    - will refactor to vuex store soon.
    - want to demo using custom events
  -
