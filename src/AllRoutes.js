import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio/Portfolio";
import AboutUs from "./pages/AboutUs/AboutUs";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import BlogDetail from "./pages/BlogDetail/BlogDetail";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-detail/:id" element={<BlogDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
