import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardEstudiante({ student }) {  // Recibir el estudiante como prop
  if (!student) {
    return <div>Selecciona un estudiante para ver sus detalles.</div>;
  }

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
        <ListGroup.Item>Fecha de aprobación: {student.fechaAprobacion}</ListGroup.Item>
        <ListGroup.Item>Observaciones: {student.observacion}</ListGroup.Item>



      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardEstudiante;
