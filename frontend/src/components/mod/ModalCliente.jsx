import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const ModalCliente = ({ onClose, onSuccess, clienteEdit }) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    telephone: "",
    birthdate: "",
  });

  useEffect(() => {
    if (clienteEdit) {
      setForm({
        ...clienteEdit,
        birthdate: clienteEdit.birthdate ? clienteEdit.birthdate.split("T")[0] : "",
      });
    } else {
      setForm({
        name: "",
        lastName: "",
        email: "",
        address: "",
        telephone: "",
        birthdate: "",
      });
    }
  }, [clienteEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (clienteEdit) {
        await axios.put(`http://localhost:4000/api/customers/${clienteEdit._id}`, form);
        Swal.fire("Actualizado", "Cliente actualizado correctamente", "success");
      } else {
        await axios.post("http://localhost:4000/api/registerClients", form);
        Swal.fire("Creado", "Cliente registrado correctamente", "success");
      }
      onSuccess();
    } catch (err) {
      console.error("Error al guardar cliente:", err);
      Swal.fire("Error", "No se pudo guardar el cliente", "error");
    }
  };

  return (
    <Modal show onHide={onClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{clienteEdit ? "Editar Cliente" : "Registrar Cliente"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name="name" value={form.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control name="lastName" value={form.lastName} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" name="birthdate" value={form.birthdate} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Dirección</Form.Label>
            <Form.Control name="address" value={form.address} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control name="telephone" value={form.telephone} onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalCliente;