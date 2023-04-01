import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import Navbar from "./components/Header/Navbar";
import Blogs from './components/Blogs/Blogs';
import SiteCart from './components/SideCart/SiteCart';
import { useState } from "react";
import Qna from "./components/Qna/Qna";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [spentTime, setSpentTime] = useState([]);

  const handleSpentTime = (time) => {
    const previousSpentTime = JSON.parse(localStorage.getItem("spentTime"));
    if(previousSpentTime){
      const sum = parseInt(previousSpentTime) + parseInt(time);
      localStorage.setItem("spentTime", sum);
      setSpentTime(sum);
    }
    else{
      localStorage.setItem("spentTime", time);
      setSpentTime(time);
    }
  };
  
  return (
    <div className="App">
      <Navbar />
      <div className="main grid grid-cols-3">
        <div className="blog-container col-span-2">
          <Blogs handleSpentTime={handleSpentTime}
          ></Blogs>
        </div>
        <div className="sideCart col-span-1">
          <SiteCart spentTime={spentTime} />
        </div>
      </div>
      <Qna />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
