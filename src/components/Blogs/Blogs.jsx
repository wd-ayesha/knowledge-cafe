import React, { useEffect, useState } from 'react';
import SingleBlog from '../Blog/SingleBlog';


const Blogs = ({handleSpentTime, handleBookmark}) => {
   const [blogs, setBlogs] = useState([]);
  

    useEffect( () => {
        fetch("data.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
    },[]);

    

    return (
        <div>
            { blogs.map((blog) => (
               <SingleBlog
                key={blog.id}
               blog={blog}
               handleSpentTime={handleSpentTime}
               handleBookmark={handleBookmark}
               ></SingleBlog> 
            ))}     
        </div>
    );
};

export default Blogs;