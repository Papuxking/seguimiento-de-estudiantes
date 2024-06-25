import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample({ formData, handleChange, handleActivityChange, addActivity, handleSubmit }) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="fecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" value={formData.fecha} onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="nombreEstudiante">
            <Form.Label>Nombre del Estudiante</Form.Label>
            <Form.Control type="text" value={formData.nombreEstudiante} onChange={handleChange} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="modalidad">
          <Form.Label>Modalidad de Titulación</Form.Label>
          <Form.Control type="text" value={formData.modalidad} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tema">
          <Form.Label>Tema del Trabajo de Titulación</Form.Label>
          <Form.Control type="text" value={formData.tema} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="fechaAprobacion">
          <Form.Label>Fecha de Aprobación</Form.Label>
          <Form.Control type="date" value={formData.fechaAprobacion} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="porcentajeAvance">
          <Form.Label>Porcentaje de Avance</Form.Label>
          <Form.Control type="text" value={formData.porcentajeAvance} onChange={handleChange} />
        </Form.Group>

        {formData.actividades.map((activity, index) => (
          <Row className="mb-3" key={index}>
            <Form.Group as={Col} controlId={`fechaActividad${index}`}>
              <Form.Label>Fecha de Actividad</Form.Label>
              <Form.Control type="date" name="fecha" value={activity.fecha} onChange={(e) => handleActivityChange(index, e)} />
            </Form.Group>

            <Form.Group as={Col} controlId={`actividad${index}`}>
              <Form.Label>Actividad</Form.Label>
              <Form.Control type="text" name="actividad" value={activity.actividad} onChange={(e) => handleActivityChange(index, e)} />
            </Form.Group>
          </Row>
        ))}

        <Button variant="secondary" onClick={addActivity}>Añadir Actividad</Button>

        <Form.Group className="mb-3" controlId="tutor">
          <Form.Label>Tutor</Form.Label>
          <Form.Control type="text" value={formData.tutor} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Generar PDF</Button>
      </Form>
    </div>
  );
}

export default GridComplexExample;
