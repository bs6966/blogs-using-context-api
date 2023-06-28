import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Spinner.css";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  //consume from context
  const { posts, loading } = useContext(AppContext);
  console.log(posts);
  return (
    <div className="w-11/12 max-w-[650px] py-6 h-scr flex flex-col gap-y-7 mt-[65px] mb-[70px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Posts Found</div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Blogs;
