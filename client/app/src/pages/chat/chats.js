import React from 'react'
import "./chat.css"
import LogoSearch from "../../component/LogoSearch/LogoSearch"
// import { useSelector} from "react-redux";
// import { userChats } from '../../api/ChatRequest';
import NavIcons from '../../component/NavIcons/NavIcons';
import ChatBox from '../../component/ChatBox/ChatBox';
import useGetChats from '../../Hook/useGetChats';
import Chat from './Chat';
import "../../App.css";


const Chats = () => {
  const{loading, chats}=useGetChats();
  console.log("conversation:", chats);
 
  return (
    <div className="Chat">
      {/* leftside */}
      {/* <div className="Left-side-chat"> */}
      <div className='border-r border-slate-500 p-4 flex flex-col'>

        <LogoSearch />
        {/* <div className="Chat-container"> */}
        <div className="py-2 flex flex-col overflow-auto">
          {/* <h3>Chats</h3> */}
          <div className="divider px-3"></div>
          <div className="Chat-list">
            <div className="py-2 flex flex-col overflow-auto">
              {chats.map((chat, idx) => (
                <Chat
                  key={chat._id}
                  chat={chat}
                  lastIdx={idx === chat.length - 1}
                />
              ))}
              {loading ? (
                <span className="loading-spinner mx-auto"></span>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* rightside */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
        </div>
        <ChatBox chat currentUser setSendMessage receivedMessage />
      </div>
    </div>
  );
}

export default Chats;