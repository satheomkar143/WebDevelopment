const videoList = document.querySelector(".video-list-table")

const API_KEY = "AIzaSyBW14OVGNMXXNRyMCjFbiGKj4VQnzrDAGU";
const VIDEO_HTTP = "https://www.googleapis.com/youtube/v3/videos?";
const CHANNEL_HTTP = "https://www.googleapis.com/youtube/v3/channels?";

fetch(
  VIDEO_HTTP +
    new URLSearchParams({
      key: API_KEY,
      part: "snippet",
      chart: "mostPopular",
      maxResult: 50,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
  fetch(
    CHANNEL_HTTP +
      new URLSearchParams({
        key: API_KEY,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      video_data.channelThumbnail =
        data.items[0].snippet.thumbnails.default.url;
      // console.log(video_data)
      makeVideoCard(video_data);
    });
};

const makeVideoCard = (data) => {
  let count = 0
//   card = `
//   <tr>
//   <td>${count+1}</td>
//   <td id="${count}"><img src="${data.snippet.thumbnails.high.url}" alt=""></td>
//   <td id="name0">${data.snippet.title}</td>
// </tr>  
//   `;

  card = `
   <div class="dataDiv" id="${count}" onclick="show()">
   <h1>${count}</h1>
  <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
    <h4 class="title">${data.snippet.title}</h4>
</div> 
  `
  videoList.innerHTML += card;
};




{
  /* <div class="video-div">
      <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
      <div class="content">
        <img src="" class="channel-icon" alt="">
        <div class="info">
        <h4 class="title">${data.snippet.title}</h4>
        <p class="channel-name"></p>
        </div>
      </div>
    </div> */
}
