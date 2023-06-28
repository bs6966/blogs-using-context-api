import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="bg-black text-white items-center flex justify-center">
      <Header />

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <h2>
        Blogs Tagged <span>#{tag}</span>
      </h2>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
