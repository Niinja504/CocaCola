import React from "react";
import useDataClient from "../hooks/useDataClient";
import ModalCliente from "../components/mod/ModalCliente";

const Clients = () => {
  const {
    clientes,
    eliminarCliente,
    showRegister,
    setShowRegister,
    clienteEdit,
    setClienteEdit,
    handleSuccess,
    handleCloseModal,
  } = useDataClient();

  return (
    <div className="container">
      <h1>Clientes</h1>
      <button onClick={() => setShowRegister(true)} className="btn btn-primary">
        Añadir Cliente
      </button>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cli) => (
            <tr key={cli._id}>
              <td>{cli.name}</td>
              <td>{cli.lastName}</td>
              <td>{cli.email}</td>
              <td>{cli.telephone}</td>
              <td>{cli.address}</td>
              <td>
                <button
                  onClick={() => {
                    setClienteEdit(cli);
                    setShowRegister(true);
                  }}
                  className="btn btn-warning btn-sm"
                >
                  Editar
                </button>
                <button
                  onClick={() => eliminarCliente(cli._id)}
                  className="btn btn-danger btn-sm mx-2"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showRegister && (
        <ModalCliente
          onClose={handleCloseModal}
          onSuccess={handleSuccess}
          clienteEdit={clienteEdit}
        />
      )}
    </div>
  );
};

export default Clients;
