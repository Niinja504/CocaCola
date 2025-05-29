import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const ModalEmpleado = ({ onClose, onSuccess, empleadoEdit }) => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    birthday: '',
    email: '',
    address: '',
    password: '',
    telephone: '',
    dui: '',
    issnumber: '',
    hireDate: '',
  });

  useEffect(() => {
    if (empleadoEdit) {
      setForm({
        ...empleadoEdit,
        birthday: empleadoEdit.birthday?.split('T')[0] || '',
        hireDate: empleadoEdit.hireDate || '',
      });
    } else {
      setForm({
        name: '',
        lastName: '',
        birthday: '',
        email: '',
        address: '',
        password: '',
        telephone: '',
        dui: '',
        issnumber: '',
        hireDate: '',
      });
    }
  }, [empleadoEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (empleadoEdit) {
        await axios.put(`http://localhost:4000/api/registerEmployees/${empleadoEdit._id}`, form);
        Swal.fire('Actualizado', 'Empleado actualizado correctamente', 'success');
      } else {
        await axios.post('http://localhost:4000/api/registerEmployees', form);
        Swal.fire('Creado', 'Empleado registrado correctamente', 'success');
      }
      onSuccess();
    } catch (err) {
      console.error("Error al guardar empleado:", err);
      Swal.fire('Error', 'No se pudo guardar el empleado', 'error');
    }
  };

  return (
    <Modal show onHide={onClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{empleadoEdit ? 'Editar Empleado' : 'Registrar Empleado'}</Modal.Title>
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
            <Form.Control type="date" name="birthday" value={form.birthday} onChange={handleChange} required />
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
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name="password" value={form.password} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control name="telephone" value={form.telephone} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>DUI</Form.Label>
            <Form.Control name="dui" value={form.dui} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>ISS</Form.Label>
            <Form.Control name="issnumber" value={form.issnumber} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Fecha de contratación</Form.Label>
            <Form.Control name="hireDate" type="date" value={form.hireDate} onChange={handleChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Cancelar</Button>
          <Button variant="success" type="submit">Guardar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalEmpleado;
