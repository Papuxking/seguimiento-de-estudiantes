import React from 'react';
import styled from 'styled-components';
import { CardDatosEmpresa } from '../../index.js';
import FormEstudiante from '../moleculas/FormEstudiante.jsx';

export function InformesTemplate() {
  return (
    <Container>
      <h1>Informes template</h1>
      <CardDatosEmpresa>
        {/* Aquí puedes agregar contenido dentro de CardDatosEmpresa si es necesario */}
      </CardDatosEmpresa>
      {/* <FormEstudiante /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Asegúrate de que los componentes se apilen verticalmente */
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
