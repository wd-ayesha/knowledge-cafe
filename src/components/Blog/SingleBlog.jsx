import React from "react";

const SingleBlog = ({ blog }) => {
  console.log(blog);
  return (
    <div className="ml-24 mt-16">
      <div className="card w-4/5  shadow-xl">
        <figure>
          <img src={blog.coverImage} alt="Cover Image" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex">
              <div className="w-10 rounded-full mr-4">
                <img src={blog.author.image} />
              </div>
              <div>
                <h3>{blog.author.name}</h3>
                <p>{blog.published}</p>
              </div>
            </div>
            <div className="flex">
              <p className="mr-2">{blog.readTime} min read</p>
              <i className="fa fa-bookmark mt-1"></i> 
            </div>
          </div>
          <h2 className="card-title">{blog.title}</h2>
          <div className="text-left underline">
            <a className="">Mark as Read</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
