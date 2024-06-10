import React, { useState } from "react";
import styled from "styled-components";
import { CardDatosEmpresa } from "../../index.js";
import FormEstudiante from '../moleculas/FormEstudiante.jsx';
import ListEstudiantes from '../moleculas/ListEstudiantes.jsx';
import Buscar from '../moleculas/Buscar.jsx';
import CardEstudiante from '../moleculas/CardEstudiante.jsx';
import { AutoComplete } from "antd";

export function HomeTemplate({data}) {
  const [selectedStudent, setSelectedStudent] = useState(null);  // Estado para el estudiante seleccionado

  return (
    <Container style={{ height: '120vh' }}>

      <Section1 style={{ display: 'flex', justifyContent: 'center', height: 'fit-content' }}>
        <CardEstudiante student={selectedStudent} />  {/* Pasar el estudiante seleccionado como prop */}
      </Section1>

      <Section2>
        <h1>Buscar Estudiantes</h1>
        <Buscar />
      </Section2>

      <Section3 style={{ height: 'fit-content' }}>
        <h1>Agregar Estudiante</h1>
        <FormEstudiante />
      </Section3>

      <Section4 style={{ height: 'fit-content' }}>
        <ListEstudiantes onSelectStudent={setSelectedStudent} />  {/* Pasar la función para actualizar el estudiante seleccionado */}
      </Section4>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "section1 section2 section3"
    "section1 section4 section3"
    "section1 section4 section5";
  grid-gap: 10px;
  padding: 10px;
  height: 100vh;
`;

const Section = styled.div`
  border: 2px solid #00f;
`;

const Section1 = styled(Section)`
  grid-area: section1;
`;

const Section2 = styled(Section)`
  grid-area: section2;
`;

const Section3 = styled(Section)`
  grid-area: section3;
`;

const Section4 = styled(Section)`
  grid-area: section4;
`;

const Section5 = styled(Section)`
  grid-area: section5;
`;
