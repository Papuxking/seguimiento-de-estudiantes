import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { supabase } from '../../supabase/supabaseClient';

function CardEstudiante({ student, onDeleteSuccess }) {
  const [editMode, setEditMode] = useState(false);
  const [editedStudent, setEditedStudent] = useState({});

  if (!student) {
    return <div>Selecciona un estudiante para ver sus detalles.</div>;
  }

  const handleEliminarEstudiante = async () => {
    try {
      const { data, error } = await supabase
        .from('Estudiantes')
        .delete()
        .eq('id_estudiante', student.id_estudiante);
      if (error) throw error;
      console.log('Estudiante eliminado correctamente');
      onDeleteSuccess();
    } catch (error) {
      console.error('Error al eliminar estudiante:', error.message);
    }
  };

  const handleEditarEstudiante = () => {
    setEditMode(true);
    setEditedStudent({
      ...student,
      fechaAprobacion: new Date(student.fechaAprobacion).toISOString().substr(0, 10),
    });
  };

  const handleGuardarCambios = async () => {
    try {
      const { data, error } = await supabase
        .from('Estudiantes')
        .update(editedStudent)
        .eq('id_estudiante', editedStudent.id_estudiante);
      if (error) throw error;
      console.log('Estudiante actualizado correctamente');
      setEditMode(false);
    } catch (error) {
      console.error('Error al guardar cambios:', error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedStudent({
      ...editedStudent,
      [name]: value,
    });
  };

  return (
    <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Card.Body style={{ flex: 'initial' }}>
        <Card.Title>{student.nombre} {student.apellido}</Card.Title>
        <Card.Text>
          {student.carrera}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Tema: {student.tema}</ListGroup.Item>
        <ListGroup.Item>Fecha de aprobación: {student.fechaAprobacion}</ListGroup.Item>
        <ListGroup.Item>Estado: {student.estado}</ListGroup.Item>
        <ListGroup.Item>Observaciones: {student.observacion}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {!editMode && (
          <input
            className="btn btn-primary"
            type="button"
            value="Editar"
            onClick={handleEditarEstudiante}
          />
        )}
        <a style={{ paddingLeft: '30px' }}></a>
        <input
          className="btn btn-danger"
          type="button"
          value="Eliminar"
          onClick={handleEliminarEstudiante}
        />
        {editMode && (
          <Card.Body style={{ flex: 'initial' }}>
            <input
              type="text"
              name="nombre"
              value={editedStudent.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
            />{' '}
            <input
              type="text"
              name="apellido"
              value={editedStudent.apellido}
              onChange={handleInputChange}
              placeholder="Apellido"
            />{' '}
            <input
              type="text"
              name="carrera"
              value={editedStudent.carrera}
              onChange={handleInputChange}
              placeholder="Carrera"
            />{' '}
            <input
              type="text"
              name="tema"
              value={editedStudent.tema}
              onChange={handleInputChange}
              placeholder="Tema"
            />{' '}
            <input
              type="date"
              name="fechaAprobacion"
              value={editedStudent.fechaAprobacion}
              onChange={handleInputChange}
            />{' '}
            <select
              name="estado"
              value={editedStudent.estado}
              onChange={handleInputChange}
            >
              <option value="Activo">Activo</option>
              <option value="Graduado">Graduado</option>
              <option value="Retirado">Retirado</option>
            </select>{' '}
            <input
              type="text"
              name="observacion"
              value={editedStudent.observacion}
              onChange={handleInputChange}
              placeholder="Observaciones"
            />{' '}
            <button className="btn btn-success" onClick={handleGuardarCambios}>
              Guardar
            </button>
          </Card.Body>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardEstudiante;
