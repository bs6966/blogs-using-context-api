import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="mt-[20px]">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-md">{post.title}</span>
      </NavLink>
      <p className="mt-[5px]">
        By <span>{post.author}</span>on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold">{post.category} </span>
        </NavLink>
      </p>
      <p>Posted on {post.date} </p>
      <p className="mt-[15px] mb-[px]">{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`tags/${tag.replaceAll(" ", "-")}`}>
            <span className="px-2 text-blue-400 font-bold mt-[5px]">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
