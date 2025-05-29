import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Error al obtener productos:', err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setProductToEdit(null);
    setShowForm(true);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setShowForm(true);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.error('Error al eliminar producto:', err);
    }
  };

  const handleSaveProduct = async (product) => {
    try {
      if (productToEdit) {
        const res = await axios.put(`http://localhost:4000/api/products/${productToEdit._id}`, product);
        setProducts(products.map((p) => (p._id === res.data._id ? res.data : p)));
      } else {
        const res = await axios.post('http://localhost:4000/api/products', product);
        setProducts([...products, res.data]);
      }
      setShowForm(false);
    } catch (err) {
      console.error('Error al guardar producto:', err);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleAddProduct}>Agregar Producto</button>
      {showForm && (
        <ProductForm productToEdit={productToEdit} onSave={handleSaveProduct} onCancel={handleCancel} />
      )}
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;