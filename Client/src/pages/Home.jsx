import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <div className="w-full bg-[#f5f4f7]">
      <Navbar />
      <Header/>
      <BlogList/>
    </div>
  );
};

export default Home;
