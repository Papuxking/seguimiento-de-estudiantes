import React, { useState } from "react";
import styled from "styled-components";
import { CardDatosEmpresa } from "../../index.js";
import FormEstudiante from '../moleculas/FormEstudiante.jsx';
import ListEstudiantes from '../moleculas/ListEstudiantes.jsx';
import Buscar from '../moleculas/Buscar.jsx';
import CardEstudiante from '../moleculas/CardEstudiante.jsx';
import { AutoComplete } from "antd";
import { supabase } from '../../supabase/supabaseClient';

export function HomeTemplate({ data }) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = async (value) => {
    // Aquí puedes implementar la lógica de búsqueda, por ejemplo, hacer una consulta a Supabase
    // Filtrar datos simulando una búsqueda local
    const { data: estudiantes, error } = await supabase
      .from('Estudiantes')
      .select('*')
      .ilike('nombre', `%${value}%`); // Busca coincidencias en el nombre
    
    if (error) {
      console.error('Error buscando estudiantes:', error);
      return;
    }

    setFilteredData(estudiantes);
  };

  return (
    <Container style={{ height: '120vh' }}>

      <Section1 style={{ display: 'flex', justifyContent: 'center', height: 'fit-content' }}>
        <CardEstudiante student={selectedStudent} />
      </Section1>

      <Section2>
        <h1>Buscar Estudiantes</h1>
        <Buscar onSearch={handleSearch} />
      </Section2>

      <Section3 style={{ height: 'fit-content' }}>
        <h1>Agregar Estudiante</h1>
        <FormEstudiante />
      </Section3>

      <Section4 style={{ height: 'fit-content' }}>
        <ListEstudiantes onSelectStudent={setSelectedStudent} data={filteredData.length ? filteredData : null} />
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
