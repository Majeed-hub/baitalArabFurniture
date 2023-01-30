import React from 'react';
import { Link } from 'react-router-dom';
// import Sofa from '../../Assests/images/sofa1.png';
import './ProductCard.css';

export const ProductCard = ({ title, content }) => {
  return (
    <div class="productCard">
      <div class="productCardBody">
        <h3 class="productCardTitle">{title}</h3>
        <p class="productCardText">{content}</p>
        <Link className="btn btnViewMore" to={`/product`}>
          View More
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
