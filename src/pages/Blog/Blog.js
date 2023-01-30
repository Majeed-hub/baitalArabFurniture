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
    <>
      <div className="main-section">
        <div className="heading">
          <h2>Blogs</h2>
        </div>
        <div className="BlogCardWrapper">
          <BlogCard id="1" title={Article1.title} content={Article1.tagline} />
          <BlogCard
            id="2"
            title={Article2.title}
            content={
              'With supporting text below as a natural lead-in to additional content.'
            }
          />
          <BlogCard
            id="3"
            title={Article3.title}
            content={
              'With supporting text below as a natural lead-in to additional content.'
            }
          />
          <BlogCard
            id="4"
            title={Article4.title}
            content={
              'With supporting text below as a natural lead-in to additional content.'
            }
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
