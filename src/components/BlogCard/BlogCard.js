import React, { Component } from 'react';

export const BlogCard = ({id, title , content}) => {
    return (
      <div
        class="card"
        style={{
          width: "18rem",
          backgroundColor: "#FAF8F1",
          height: "250px",
          display: "inline-block",
          margin:"7px"
        }}
      >
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
}

export default BlogCard;