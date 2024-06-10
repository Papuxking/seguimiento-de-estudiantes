import styled from "styled-components";
import Estudiantes from "../../supabase/Estudiantes"
export function ReportesTemplate() {
  return (
    <Container>
      <div>
      <Estudiantes />
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