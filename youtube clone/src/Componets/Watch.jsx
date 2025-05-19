import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { closeSideBar } from "../Store/toggleSideBarSlice";
import ChatContainer from "./ChatContainer";
import { updateLiveChat } from "../Store/ChatSlice";
import store from "../Store/Store";
import { generateRandomName, generateRandomText } from "../Utilis/helper";

const Watch = () => {
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.Chat.message);
  const [newChatMsg, setNewChatMsg] = useState();

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        updateLiveChat({
          name: generateRandomName(),
          text: generateRandomText(20),
        })
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  function addNewChat(e) {
    
      e.preventDefault()


    dispatch(
      updateLiveChat({
        name: "Uddashay Kumar Gupta",
        text: newChatMsg,
      })
    );

    setNewChatMsg("");
  }

  // console.log(searchParam.get('v'))
  return (
    <>
 
      <div className="WatchMain">
        <div>
          <iframe
            className="youtubeclip"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="LiveChatTextContainer">
          <div className="liveChatContainer">
            <h2 className="liveChatText">Live Chat</h2>
            {chatMessage.map((data, index) => (
              <ChatContainer key={index} data={data} />
            ))}
          </div>
          <form className="liveChatInputContainer" onSubmit={(e)=> addNewChat(e)}>
            <input
              className="liveChatInput"
              value={newChatMsg}
              onChange={(e) => setNewChatMsg(e.target.value)}
            />
            <button className="liveChatButton" type="submit">
              Submit
            </button>
          </form>
           ̰ ̰
        </div>
      </div>
    </>
  );
};

export default Watch;
