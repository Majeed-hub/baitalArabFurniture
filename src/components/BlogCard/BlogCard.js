import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

export const BlogCard = ({ id, title, content }) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: '20rem',
        backgroundColor: '#FAF8F1',
        height: '290px',
        display: 'inline-block',
        margin: '7px',
        padding: '15px',
        position:"relative",
      }}
      className="blogCard"
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text" style={{ fontSize: '25px' }}>
          {content}
        </p>
        <Link className="btn btnViewMore" to={`/blog-detail/${id}`} style={{position:"absolute",bottom:"20px"}}>
          Read More
        </Link>
        {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
      </div>
    </div>
  );
};

export default BlogCard;
