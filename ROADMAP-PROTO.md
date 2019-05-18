# Vuetube Roadmap

_a Vue infused Youtube project_

## Feature Concepts

- Video URL Input
- Playlists List
- Individual Playlist
- Video Display Grid
- Video Item Display

## Development Stories

### **As a Developer:**

> State Management
* [ ] I want to have a globally accessible state store. [functionality] [state-mgmt]
  * [ ] I want to use Vuex to handle app state. [state-mgmt]
    * [ ] I want Vuex to be modularized to feature specific modules. [state-mgmt]

> Add Video
* [ ] I want to have CMP for users to add video urls to playlists. [feature]
  * [ ] I want a Text-Input for users to add the URL. [feature]
    * [ ] I want to have URL validation. [functionality]
      * [ ] If URL is valid [TRUE]
        * [ ] Fetch associated video data from Youtube. [functionality]
        * [ ] Display preview cmp with video data. [feature] [visual]
      * [ ] If URL is invalid [FALSE]
        * [ ] Generate an error message for the user. [feature] [visual]
  * [ ] I want a Select-Input for choosing which playlist to add the video to.
    * [ ] Each option will be for a specific playlist.
    * [ ] ?Last/First? option will be for creating a new playlist and adding the video to it.
  * [ ] I want a button for the user to click, which will add the loaded video into the selected playlist.
    * [ ] Button should contain text "ADD".

> Node.js Backend
* [ ] I want to have a Backend built in Node.js
  * [ ] This will keep API credentials secure and hidden.
  * [ ] I want backend endpoints for each feature

### **As a User:**

> Playlists
* [ ] I want to be able to see a list of my created playlists. [feature] [visual]
  * [ ] I want see my vuetube stats on each playlist. [visual]
    * [ ] I want to see what date each playlist was created. [visual]
    * [ ] I want to see how many videos are in the playlist. [visual]
    * [ ] I want to see how many videos ive marked as 'watched' in each playlist. [visual]

> Playlist
* [ ] I want to create a playlist of Youtube videos I like. [feature]
  * [ ]  I want to be able to add video URLs to a list that I can access. [action]
    * [ ] I want to see a preview of the video URL so I know its the correct video. [visual]
    * [ ] I want to be able to mark whether I've watched it yet or not. [action] [visual]
    * [ ] I want to be able to remove videos from the playlist. [action]
  * [ ] I want to be able to give this playlist a custom name. [feature] [action] [visual]
    * [ ] I want to be able to edit the playlist name. [action]
  * [ ] I want to be able to delete the playlist, after confirmation. [action] [visual]

> Video Grid
* [ ] I want to see a grid of my added videos [feature] [visual]
  * [ ] Each video grid item should display the video thumbnail, title, channel and "favorite" icon [feature] [visual]
    * [ ] I want each video grid item to display the video thumbnail [visual]
    * [ ] I want each video grid item to show the title of the video [visual]
    * [ ] I want each video grid item to show the name of the channel [visual]
    * [ ] I want each video grid item to have the "Favorite" icon [visual]
      * [ ] I want to be able to toggle the "Favorite" status of the video [feature] [action]
  * [ ] I want the grid to be able to display videos from a selected playlist only [visual]

> Video Item
* [ ] I want to watch the video in-app. [feature]
  * [ ] I want to see a title bar for the video
    * [ ] I want to see how many views the video has [visual]
    * [ ] I want to see how many likes the video has [visual]
    * [ ] I want to be able to open the video in youtube [action]


### 0.1 > PROTOTYPE

- * [x] Init Vue.js Project [app]
  - * [x] Basic layout design [app]
    - * [x] Add Video [cmp]
      - * [x] Video URL Input [cmp]
      - * [x] Vuetube Playlist Dropdown [cmp]
        - * [x] Add to Existing Playlist [cmp]
          - * [x] Video Info Preview [cmp]
        - * [x] Add to New Playlist [cmp]
          - * [x] New Playlist Title [cmp]
          - * [x] New Playlist Description [cmp]
    * [ ] Manage Playlists [cmp]
    * [ ] Playlist [cmp]
    * [ ] Video Grid [cmp]
      * [ ] Grid Item [reusable_cmp]
    * [ ] Video View [cmp]
      * [ ] Video Thumbnail / Start Screen [cmp]
        * [ ] Toggleable Favorite Icon [slot/cmp]
      * [ ] Video Title Bar [cmp]
        * [ ] Title [reusable_cmp]
        * [ ] Views [reusable_cmp]
        * [ ] Likes [reusable_cmp]
        * [ ] Youtube Link [reusable_cmp]
      * [ ] Channel Info Bar [cmp]
        * [ ] Mystery Component
      * [ ] Video Description [cmp]
    * [ ] Markdown Notes Editor [cmp]
      * [ ] Read/Write Toggle Switch [cmp]
      * [ ] Read Panel [slot/cmp]
      * [ ] Write Panel[slot/cmp]


  * [ ] RW Flexbox Util Lib
  * [ ] Youtube API
    * [ ] Checking for Lib
    * [ ] Might use Vanilla [no wrapper pkg]

0. Full Markup?
1. Skeleton Markup!
2. Componentize 
3. Styles Transfer
4. Props?
5. Data
6. Methods
7. Computed
8. Watchers..?
9. Link to Parent
10. Parent State?
10.5 VUEX STATE!
11. Clean Up Component Code
12. Repeat

### Playlist Object Sketch

```js
const playlistObject = {
  _id: Number,
  title: String,
  description: String,
  dateCreated: Date,
  totalVideos: Number,
  completedVideos: Number,
  isFavoritePlaylist: Boolean,
}
```

### Video Object Sketch

```js 
const videoObject = {
  video_id: String,
  videoURL: String,
  title: String,
  description: String,
  thumbnailSource: String,
  videoStats: Object {
    views: Number,
    likes: Number,
  },
  channel: String,
  userStats: {
    isFavoriteVideo: Boolean,
    hasCompleted: Boolean,
  }
}
```

### User Message Object Sketch

```js
const userMessageObject = {
  type: String: ['error', 'success', 'info'],
  message: String
}
```
