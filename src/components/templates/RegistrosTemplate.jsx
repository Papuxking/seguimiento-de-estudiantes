import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormEstudiante from '../moleculas/FormEstudiante.jsx';
import ListEstudiantes from '../moleculas/ListRegistros.jsx';
import Buscar from '../moleculas/Buscar.jsx';
import CardEstudiante from '../moleculas/CardEstudiante.jsx';
import { supabase } from '../../supabase/supabaseClient';

export function RegistrosTemplate() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data: estudiantes, error } = await supabase
        .from('Estudiantes')
        .select('*');

      if (error) {
        console.error('Error fetching estudiantes:', error);
      } else {
        setStudents(estudiantes);
      }
    };

    fetchStudents();
  }, []);

  const handleSearch = async (value) => {
    if (!value) {
      setFilteredData([]);
      return;
    }

    const { data: estudiantes, error } = await supabase
      .from('Estudiantes')
      .select('*')
      .or(`nombre.ilike.%${value}%,apellido.ilike.%${value}%,carrera.ilike.%${value}%,tema.ilike.%${value}%,observacion.ilike.%${value}%`);
    
    if (error) {
      console.error('Error buscando estudiantes:', error);
    } else {
      setFilteredData(estudiantes);
    }
  };

  const handleStudentAdded = async (newStudent) => {
    const { data: estudiantes, error } = await supabase
      .from('Estudiantes')
      .select('*');
    if (error) {
      console.error('Error fetching estudiantes:', error);
    } else {
      setStudents(estudiantes);
    }
  };



  return (
    <Container>
      {/* <Section1 style={{ display: 'flex', justifyContent: 'center', height: 'fit-content' }}>
        <CardEstudiante student={selectedStudent} />
        {/* <CardDatosEmpresa 
        titulo="Nombre" 
        valor="S/."
        img ={"https://img.freepik.com/foto-gratis/estilo-anime-celebrando-dia-san-valentin_23-2151258005.jpg"}
        /> 
      </Section1> 
*/}
      <Section2>
        <h1>Registros</h1>
        <Buscar onSearch={handleSearch} />
      </Section2>

      <Section4 style={{ height: 'fit-content' }}>
        <ListEstudiantes 
          onSelectStudent={setSelectedStudent} 
          data={filteredData.length ? filteredData : students} 
        />
      </Section4>
      <Section3 style={{display: "flex", justifyContent: "center"}}>
        <CardEstudiante student={selectedStudent} />
        </Section3>
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
  border: 2px solid #;
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
