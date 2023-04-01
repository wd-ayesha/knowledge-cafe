import React, { useEffect, useState } from 'react';

const SiteCart = ({ spentTime }) => {
    const [time, setTime] = useState(0);
    useEffect( () => {
        const getSpentTimeFromStorage = localStorage.getItem("spentTime");
        setTime(getSpentTimeFromStorage)
    },[spentTime]);
    return (
        <div className='mt-16'>
            <button className='btn btn-outline'>Spent time on read : {time} min</button>
           
            <div className='border mt-3 mr-5 bg-neutral-400'>
                <h3>Bookmarked Blogs : </h3>
            </div>
        </div>
    );
};

export default SiteCart;