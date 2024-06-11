import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { supabase } from '../../supabase/supabaseClient';

function CardEstudiante({ student, onDeleteSuccess }) {
  if (!student) {
    return <div>Selecciona un estudiante para ver sus detalles.</div>;
  }

  const handleEliminarEstudiante = async () => {
    try {
      const { data, error } = await supabase
        .from('Estudiantes')
        .delete()
        .eq('id_estudiante', student.id_estudiante); // Suponiendo que 'id' es el campo único del estudiante en tu tabla
      if (error) throw error;
      console.log('Estudiante eliminado correctamente');
      onDeleteSuccess(); // Llama a la función para actualizar el estado de la lista de estudiantes u otra acción necesaria
    } catch (error) {
      console.error('Error al eliminar estudiante:', error.message);
    }
  };

  return (
    <Card style={{ width: '15rem', display: 'flex', alignItems: 'center'}}>
      <Card.Body style={{flex: 'initial'}}>
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
        <input
          className="btn btn-primary"
          type="button"
          value="Editar"
        />
        <a style={{paddingLeft:'30px'}}></a>
        <input
          className="btn btn-danger"
          type="button"
          value="Eliminar"
          onClick={handleEliminarEstudiante}
        />
      </Card.Body>
    </Card>
  );
}

export default CardEstudiante;
