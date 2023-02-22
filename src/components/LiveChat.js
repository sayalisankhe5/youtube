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
    <>
      <div className="p-2 ml-2 border border-black w-full h-[500px] rounded-lg">
        <h1 className="font-bold border border-black bg-gray-200">Live Chat</h1>
        <ChatMessage name={"Sayu"} message="Hello" />
      </div>
    </>
  );
};

export default LiveChat;
