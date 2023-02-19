import { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const getMessages = setInterval(() => {
      console.log("polling");
    }, 2000);

    return () => {
      clearInterval(getMessages);
    };
  }, []);

  return (
    <div className="p-2 ml-2 border border-black w-full h-[600px] rounded-lg">
      <ChatMessage name={"Sayu"} message="Hello" />
    </div>
  );
};

export default LiveChat;
