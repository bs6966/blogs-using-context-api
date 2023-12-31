import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className="bg-black text-white flex items-center justify-center">
      <Header />

      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <br />
      <h2>
        Blogs on <span>{category}</span>
      </h2>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
