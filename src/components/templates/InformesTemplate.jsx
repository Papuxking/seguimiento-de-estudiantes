import React, { useState } from 'react';
import styled from 'styled-components';
import TablaProgreso from '../moleculas/tablaProgreso';
import Modal from 'react-bootstrap/Modal';
import DropPDF from '../moleculas/dropPDF';

export function InformesTemplate() {
  const [files, setFiles] = useState([]);

  const handleFileDrop = (file) => {
    setFiles([...files, file]);
  };

  return (
    <Container>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial', width: '75%' }}
      >
        <Modal.Dialog>
          <Modal.Header />
          <Modal.Body>
            <div>
              <h1>Lista de informes</h1>
            </div>
            <div>
              <TablaProgreso files={files} />
            </div>
          </Modal.Body>
          <Modal.Footer />
        </Modal.Dialog>
      </div>

      <div
        className="modal show"
        style={{ display: 'block', position: 'initial', width: '75%' }}
      >
        <Modal.Dialog>
          <Modal.Header />
          <Modal.Body>
            <div>
              <h1>Subir informe</h1>
            </div>
            <div>
              <DropPDF onFileDrop={handleFileDrop} />
            </div>
          </Modal.Body>
          <Modal.Footer />
        </Modal.Dialog>
      </div>
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
