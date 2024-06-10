import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

const Estudiantes = () => {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudentData = async () => {
    try {
      const { data, error } = await supabase
      .from('Estudiantes')
      .select('*') ;

      if (error) {
        setError(error);
      } else {
        setStudentData(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {studentData.length > 0? (
        studentData.map(student => (
          <StudentCard key={student.id_estudiante} student={student} />
        ))
      ) : (
        <div>No hay estudiantes registrados.</div>
      )}
    </div>
  );
};

const StudentCard = React.memo(({ student }) => {
  return (
    <div style={styles.card}>
      <h2>{student.nombre} {student.apellido}</h2>
      <p><strong>Carrera:</strong> {student.carrera}</p>
      <p><strong>Tema:</strong> {student.tema}</p>
      <p><strong>Fecha de Aprobación:</strong> {student.fechaAprobacion}</p>
      <p><strong>Estado:</strong> {student.estado}</p>
      <p><strong>Observación:</strong> {student.observacion}</p>
      {student.foto && student.foto.url? (
        <img src={student.foto.url} alt="Foto del estudiante" style={styles.image} />
      ) : (
        <p>No hay foto disponible</p>
      )}
    </div>
  );
});

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default Estudiantes;