import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const useDataEmployee = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [empleados, setEmpleados] = useState([]);
  const [empleadoEdit, setEmpleadoEdit] = useState(null);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/employee");
      setEmpleados(res.data); 
    } catch (err) {
      console.error("Error al obtener empleados:", err);
    }
  };

  const eliminarEmpleado = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Esta acción eliminará al empleado!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:4000/api/employee/${id}`);
        Swal.fire('¡Eliminado!', 'El empleado ha sido eliminado.', 'success');
        fetchEmployees();
      } catch (err) {
        console.error("Error al eliminar empleado:", err);
        Swal.fire('Error', 'No se pudo eliminar al empleado.', 'error');
      }
    }
  };

  const handleCloseModal = () => {
    setShowRegister(false);
    setEmpleadoEdit(null);
  };

  const handleSuccess = () => {
    fetchEmployees();
    handleCloseModal();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    showRegister,
    setShowRegister,
    empleados,
    setEmpleados,
    empleadoEdit,
    setEmpleadoEdit,
    fetchEmployees,
    eliminarEmpleado,
    handleCloseModal,
    handleSuccess
  };
};

export default useDataEmployee;
