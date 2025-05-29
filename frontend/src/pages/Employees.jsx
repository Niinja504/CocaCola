import React from "react";
import useDataEmployee from "../hooks/useDataEmployee";
import ModalEmpleado from "../components/mod/ModalEmpleado"; 

const Employees = () => {
  const {
    empleados,
    eliminarEmpleado,
    showRegister,
    setShowRegister,
    empleadoEdit,
    setEmpleadoEdit,
    handleSuccess,
    handleCloseModal
  } = useDataEmployee();

  return (
    <div className="container">
      <h1>Empleados</h1>
      <button onClick={() => setShowRegister(true)} className="btn btn-primary">
        Añadir Empleado
      </button>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>DUI</th>
            <th>ISS</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.telephone}</td>
              <td>{emp.dui}</td>
              <td>{emp.issnumber}</td>
              <td>
                <button onClick={() => { setEmpleadoEdit(emp); setShowRegister(true); }} className="btn btn-warning btn-sm">Editar</button>
                <button onClick={() => eliminarEmpleado(emp._id)} className="btn btn-danger btn-sm mx-2">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showRegister && (
        <ModalEmpleado
          onClose={handleCloseModal}
          onSuccess={handleSuccess}
          empleadoEdit={empleadoEdit}
        />
      )}
    </div>
  );
};

export default Employees;