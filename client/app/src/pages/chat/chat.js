import React from 'react'
import "./chat.css"
import LogoSearch from "../../component/LogoSearch/LogoSearch"
// import { useSelector} from "react-redux";
// import { userChats } from '../../api/ChatRequest';
import NavIcons from '../../component/NavIcons/NavIcons';
import ChatBox from '../../component/ChatBox/ChatBox';

const Chat = () => {
    // const {user} = useSelector((state)=> state.authReducer.authData);
    // console.log(user)
    // const [ chat, setChats] = useState([]);

    
    // useEffect(()=>{
    //     const getChats = async()=>{
    //         try {
    //             const {data } =await userChats(data.user._id)
    //             setChats(data)
    //         } catch (error) {
    //             console.log(error);
                
    //         }
    //     }
    // })


    
  return (
    <div className="Chat">
      {/* leftside */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h3>Chats</h3>
          <div className="Chat-list">conversations</div>
        </div>
      </div>

      {/* rightside */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
        </div>
        <ChatBox
          chat
          currentUser
          setSendMessage
          receivedMessage
        />
      </div>
    </div>
  );
}

export default Chat;