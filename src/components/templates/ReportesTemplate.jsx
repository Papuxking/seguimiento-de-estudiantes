import React, { useState } from 'react';
import styled from "styled-components";
import GridComplexExample from "../moleculas/grid.jsx";
import ModalReporte from "../moleculas/modalReporte.jsx";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Create styles

export function ReportesTemplate() {
  const [formData, setFormData] = useState({
    fecha: '',
    nombreEstudiante: '',
    modalidad: '',
    tema: '',
    fechaAprobacion: '',
    porcentajeAvance: '',
    actividades: [
      { fecha: '', actividad: '' },
    ],
    tutor: '',
  });

  const [showPDF, setShowPDF] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleActivityChange = (index, e) => {
    const { name, value } = e.target;
    const newActivities = formData.actividades.slice();
    newActivities[index][name] = value;
    setFormData({
      ...formData,
      actividades: newActivities,
    });
  };

  const addActivity = () => {
    setFormData({
      ...formData,
      actividades: [...formData.actividades, { fecha: '', actividad: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPDF(true);
  };

  return (
    <Container>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial', width: '75%' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Datos</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <GridComplexExample
              formData={formData}
              handleChange={handleChange}
              handleActivityChange={handleActivityChange}
              addActivity={addActivity}
              handleSubmit={handleSubmit}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowPDF(false)}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>

      {showPDF && (
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <ModalReporte {...formData} />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

export default ReportesTemplate;
