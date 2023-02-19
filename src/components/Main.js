import { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import VideoListContainer from "./VideoListContainer";
import { GET_VIDEOS_API_URL } from "../utils/constants";

const Main = () => {
  return (
    <div className="p-2 m-2">
      <ButtonList />
      <VideoListContainer />
    </div>
  );
};

export default Main;
