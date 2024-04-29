import React, { useEffect, useState } from "react";
import axios from "axios";
import "./chat.css";
import LogoSearch from "../../component/LogoSearch/LogoSearch";
import ChatBox from "../../component/ChatBox/ChatBox";
import "../../App.css";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const getChats = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/user");
      setChats(response.data); // Assuming response contains an array of chat data
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div className="Chat">
      {/* leftside */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h1>
            <b>chats</b>
          </h1>
          {/* <div className="divider px-3"></div> */}
          <div className="Chat-list">
            {chats.map((chat) => (
              <div className="userChat" key={chat.id}>
                <img
                  src="https://w7.pngwing.com/pngs/470/131/png-transparent-computer-icons-user-profile-avatar-avatar-heroes-desktop-wallpaper-share-icon-thumbnail.png"
                  alt="user avatar"
                />
                <div className="userChatInfo">
                  <span>{chat.user_id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* rightside */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          {/* <NavIcons /> */}
        </div>
        <ChatBox chat currentUser setSendMessage receivedMessage />
      </div>
    </div>
  );
};

export default Chats;
