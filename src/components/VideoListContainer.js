import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_VIDEOS_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoListContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(GET_VIDEOS_API_URL);
    const jsonData = await data.json();
    console.log("videos", jsonData.items);
    setVideos(jsonData.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap pt-6">
      {videos.length > 0 &&
        videos.map((video) => {
          return (
            <Link key={video.id} to={"/watch?id=" + video.id}>
              <VideoCard video={video} />;
            </Link>
          );
        })}
    </div>
  );
};

export default VideoListContainer;
