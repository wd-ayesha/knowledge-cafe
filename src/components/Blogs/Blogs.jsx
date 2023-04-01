import React, { useEffect, useState } from 'react';
import SingleBlog from '../Blog/SingleBlog';


const Blogs = () => {
   const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch("data.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data))
    },[])
    return (
        <div>
            { blogs.map((blog) => (
               <SingleBlog blog={blog}></SingleBlog> 
            ))}     
        </div>
    );
};

export default Blogs;