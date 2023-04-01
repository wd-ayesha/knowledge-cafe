import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const SiteCart = ({ spentTime, bookMark, count}) => {
    const [time, setTime] = useState(spentTime);
    const[bookMarked, setBookMarked] = useState([bookMark]);

    useEffect( () => {
        const getSpentTimeFromStorage = localStorage.getItem("spentTime");
        if(getSpentTimeFromStorage){
            setTime(getSpentTimeFromStorage)
        }
        else{
            setTime(0);
        }
        
    },[spentTime]);
   
    useEffect(() => {
        const getBookMark = JSON.parse(localStorage.getItem("bookmark"));

        if(getBookMark){
            setBookMarked(JSON.parse(getBookMark));
        }
        else{
            setBookMarked("Why to Learn New Technologies")
        }
    },[bookMark]);

    const handleTostify = ()=>{
        toast("Wow so easy!");
    }
    
    return (
        <div className='mt-16'>
            <button onClick={handleTostify} className='btn btn-outline'>Spent time on read : {time} min</button>
           
            <div className='border mt-3 mr-5 bg-neutral-100'>
                <h3>Bookmarked Blogs : {count}</h3>
                <h4>{bookMarked}</h4>
            </div>
        </div>
    );
};

export default SiteCart;