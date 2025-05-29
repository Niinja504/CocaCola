import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useDataClient = () => {
  const [clientes, setClientes] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [clienteEdit, setClienteEdit] = useState(null);

  const fetchClientes = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/customers"); 
      setClientes(res.data);
    } catch (err) {
      console.error("Error al obtener clientes:", err);
    }
  };

  const eliminarCliente = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Esta acción eliminará al cliente!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/api/customers/${id}`);
        Swal.fire('¡Eliminado!', 'El cliente ha sido eliminado.', 'success');
        fetchClientes();
      } catch (err) {
        console.error("Error al eliminar cliente:", err);
        Swal.fire('Error', 'No se pudo eliminar el cliente.', 'error');
      }
    }
  };

  const handleCloseModal = () => {
    setShowRegister(false);
    setClienteEdit(null);
  };

  const handleSuccess = () => {
    fetchClientes();
    handleCloseModal();
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return {
    clientes,
    eliminarCliente,
    showRegister,
    setShowRegister,
    clienteEdit,
    setClienteEdit,
    handleCloseModal,
    handleSuccess,
  };
};

export default useDataClient;