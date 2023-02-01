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
    </section>
  );
};

export default Blog;
