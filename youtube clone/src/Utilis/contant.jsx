

const apiKey ='AIzaSyDjqt3598GY9BwkfHawVdew6xpIOtudCEQ'
const oAuthClient = '944564050942-m7q2d4jv041pj0c0vfrjvq93ep9292tf.apps.googleusercontent.com'


export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const youtubeAPI =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${apiKey}`