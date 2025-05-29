import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="card">
      <h5>{product.name}</h5>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => onEdit(product)}>Editar</button>
      <button onClick={() => onDelete(product._id)}>Eliminar</button>
    </div>
  );
};

export default ProductCard;
