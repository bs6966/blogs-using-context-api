import React from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-black text-white">
      <Header />
      <div className="flex justify-center items-center">
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
