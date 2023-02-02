import React from 'react';
import './Blog.css';
import BlogCard from '../../components/BlogCard/BlogCard';
import {
  Article1,
  Article2,
  Article3,
  Article4,
} from '../BlogDetail/Data/BlogData';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="heading">
        <h1>Blogs</h1>
      </div>
      <div className="BlogCardWrapper">
        <BlogCard
          id="1"
          content={"The Top Trends in Furniture Design for 2023"}
        />
        <BlogCard
          id="2"
          content={"5 Reasons Why Investing in Custom Furniture is Worth it"}
        />
        <BlogCard
          id="3"
          content={
            "The Environmental Impact of Furniture Production and How Our Factory is Making a Difference"
          }
        />
        <BlogCard
          id="4"
          content={"The Importance of Craftsmanship in Furniture Making"}
        />
      </div>
    </section>
  );
};

export default Blog;
