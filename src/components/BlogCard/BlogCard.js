import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

export const BlogCard = ({ id, title, content }) => {
  return (
    <div
      class="card"
      style={{
        width: '20rem',
        backgroundColor: '#FAF8F1',
        height: '290px',
        display: 'inline-block',
        margin: '7px',
      }}
    >
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text" style={{fontSize:"25px"}}>{content}</p>
        <Link className="btn btnViewMore" to={`/blog-detail/${id}`}>
          Read More
        </Link>
        {/* <a href="#" class="btn btn-primary">
            Go somewhere
          </a> */}
      </div>
    </div>
  );
};

export default BlogCard;
