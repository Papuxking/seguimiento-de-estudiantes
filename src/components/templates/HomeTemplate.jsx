import React from "react";
import styled from "styled-components";
import { CardDatosEmpresa } from "../../index.js";

export function HomeTemplate() {
  return (
    <Container>

      <Section1>

      </Section1>


      <Section2>
        
      </Section2>


      <Section3 >

      </Section3>


      <Section4>
      <CardDatosEmpresa 
        titulo="Nombre" 
        valor="S/."
        img ={"https://img.freepik.com/foto-gratis/estilo-anime-celebrando-dia-san-valentin_23-2151258005.jpg"}
        />
      </Section4>


      <Section5>

      </Section5>


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
