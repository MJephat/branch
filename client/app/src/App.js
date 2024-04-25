import './App.css';
// import {Routes, Route, Navigate } from "react-router-dom";
import Chats from './pages/chat/chats';
// import {useSelector} from 'react-redux';

function App() {
    // const user = useSelector((state) => state.authReducer.authData);
  
  return (
    <>
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <div className="App">
        {/* <Routes>
          <Route
            path="/chat"
            element={user ? <Chat /> : <Navigate to="../home" />}
          />
        </Routes> */}
        <Chats />
      </div>
    </>
  );
}

export default App;
