import React, { useEffect, useState } from 'react';
import SingleBlog from '../Blog/SingleBlog';


const Blogs = ({handleSpentTime}) => {
   const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch("data.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
    },[])
    return (
        <div>
            { blogs.map((blog) => (
               <SingleBlog
               handleSpentTime={handleSpentTime} 
               blog={blog}
               ></SingleBlog> 
            ))}     
        </div>
    );
};

export default Blogs;