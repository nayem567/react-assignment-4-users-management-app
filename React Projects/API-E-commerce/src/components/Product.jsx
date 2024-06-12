import React from "react";
import './product.module.css';

const Product = (props) => {
  const { id, title, price, category, description, image } = props;

  const handleRemove = () =>{
    props.onRemoveProduct(title);
  }

  return (
    <article>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p className="category">{category}</p>
      <p>{description}</p>
      <button onClick={handleRemove}>Remove Item</button>
    </article>
  );
};

export default Product;
