import Table from 'react-bootstrap/Table';

function TablaProgreso({ files }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Aprobado</th>
          <th>Avance</th>
          <th>Revisar</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{file.name}</td>
            <td>10%</td>
            <td><a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">Ver PDF</a></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablaProgreso;
