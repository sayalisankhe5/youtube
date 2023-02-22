import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import LiveChat from "./LiveChat";
import CommentsContainer from "./CommentsContainer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  //console.log(searchParams.get("id"));
  return (
    <div className="w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("id")}
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
