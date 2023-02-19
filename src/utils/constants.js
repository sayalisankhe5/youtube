const API_KEY = "AIzaSyA9SEopuzyFP-3i7Mlj9oh_fzRnNloy1Qo";

export const GET_VIDEOS_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
