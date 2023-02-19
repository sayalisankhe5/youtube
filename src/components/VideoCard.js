const VideoCard = (props) => {
  return (
    <div className="p-2 mx-2 mb-10   h-64 w-64">
      <img
        className="w-full rounded-lg"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div>
        <h1 className="font-bold">{props.video.snippet.title}</h1>
        <h1>{props.video.snippet.channelTitle}</h1>
        {/* <h1>{props.video.statistics.viewCount} views</h1> */}
      </div>
    </div>
  );
};

export default VideoCard;
