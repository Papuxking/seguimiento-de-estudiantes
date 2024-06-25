import styled from "styled-components";
import Estudiantes from "../../supabase/Estudiantes";

import Grid from "../moleculas/grid.jsx";
import ModalReporte from "../moleculas/modalReporte.jsx";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



// Create styles

export function ReportesTemplate() {
  return (
    <Container>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial', width: '75%' }}
      >
        <Modal.Dialog >
          <Modal.Header closeButton>
            <Modal.Title>Datos</Modal.Title>
          </Modal.Header>

          <Modal.Body >
            <Grid></Grid>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>


      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <ModalReporte></ModalReporte>
      </div>
    </Container>



  )
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