import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useDataProduct = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [productos, setProductos] = useState([]);
  const [productoEdit, setProductoEdit] = useState(null);

  // Obtener productos
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/products");
      console.log("Productos obtenidos:", res.data);
      setProductos(res.data);
    } catch (err) {
      console.error("Error al obtener productos:", err);
    }
  };

  // Eliminar producto con confirmación
  const eliminarProducto = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Esta acción eliminará el producto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/api/products/${id}`);
        Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
        fetchProducts();
      } catch (err) {
        console.error("Error al eliminar producto:", err);
        Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
      }
    }
  };

  // Cierra el modal y limpia el estado
  const handleCloseModal = () => {
    console.log("Modal cerrado");
    setShowRegister(false);
    setProductoEdit(null);
  };

  // Se llama después de agregar o editar un producto
  const handleSuccess = () => {
    console.log("handleSuccess llamado: recargando productos y cerrando modal");
    fetchProducts();
    handleCloseModal();
  };

  // Inicializa productos
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    showRegister,
    setShowRegister,
    productos,
    setProductos,
    productoEdit,
    setProductoEdit,
    fetchProducts,
    eliminarProducto,
    handleCloseModal,
    handleSuccess
  };
};

export default useDataProduct;