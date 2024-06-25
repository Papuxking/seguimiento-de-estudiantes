import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Modal from 'react-bootstrap/Modal';

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    lineHeight: 1.5,
  },
  subHeader: {
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 10,
    lineHeight: 1.5,
  },
  table: {
    display: 'table',
    width: 'auto',
    margin: '10px 0',
    lineHeight: 1.5,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: 5,
    lineHeight: 1.5,
  },
  tableColHeaderActividad: {
    width: '75%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: 5,
    lineHeight: 1.5,
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    padding: 5,
    lineHeight: 1.5,
  },
  tableColActiviti: {
    width: '75%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    padding: 5,
    lineHeight: 1.5,
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'heavy',
    fontSize: 12,
  },
  signatureSection: {
    marginTop: 20,
    textAlign: 'center', // Centra el contenido del contenedor
  },
});

const InformeDocument = ({
  fecha,
  nombreEstudiante,
  modalidad,
  tema,
  fechaAprobacion,
  porcentajeAvance,
  actividades,
  tutor,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>ANEXO 5</Text>
        <Text>INFORME MENSUAL DEL AVANCE DEL TRABAJO DE TITULACIÓN</Text>
      </View>
      <View style={styles.subHeader}>
        <Text>UNIVERSIDAD TÉCNICA DE AMBATO</Text>
        <Text>FACULTAD DE INGENIERÍA EN SISTEMAS, ELECTRÓNICA E INDUSTRIAL</Text>
        <Text>CARRERA DE TECNOLOGÍAS DE LA INFORMACIÓN</Text>
      </View>
      <View style={styles.section}>
        <Text><Text style={styles.bold}>FECHA:</Text> {fecha}</Text>
        <Text><Text style={styles.bold}>NOMBRE DEL ESTUDIANTE:</Text> {nombreEstudiante}</Text>
        <Text><Text style={styles.bold}>MODALIDAD DE TITULACIÓN:</Text> {modalidad}</Text>
        <Text><Text style={styles.bold}>TEMA DEL TRABAJO DE TITULACIÓN:</Text> {tema}</Text>
        <Text><Text style={styles.bold}>FECHA DE APROBACIÓN DE LA PROPUESTA DEL PERFIL DEL TRABAJO DE TITULACIÓN POR EL CONSEJO DIRECTIVO:</Text> {fechaAprobacion}</Text>
        <Text><Text style={styles.bold}>PORCENTAJE DE AVANCE DE ACUERDO AL CRONOGRAMA:</Text> {porcentajeAvance}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Fecha</Text>
          <Text style={styles.tableColHeaderActividad}>Actividad</Text>
        </View>
        {actividades.map(({ fecha, actividad }, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCol}>{fecha}</Text>
            <Text style={styles.tableColActiviti}>{actividad}</Text>
          </View>
        ))}
      </View>
      <View style={styles.signatureSection}>
        <Text> </Text>
        <Text> </Text>
        <Text>_______________________________________</Text>
        <Text>{tutor}</Text>
        <Text>TUTOR TRABAJO TITULACIÓN</Text>
      </View>
    </Page>
  </Document>
);

const StaticExample = () => {
  // Data for the document
  const data = {
    fecha: "18/07/2023",
    nombreEstudiante: "DANIELA ESTEFANÍA GARCÍA CHERRES",
    modalidad: "PROYECTO DE INVESTIGACIÓN",
    tema: "“APLICACIÓN MÓVIL USANDO TECNOLOGÍAS MULTIPLAFORMA PARA LA DIFUSIÓN Y BÚSQUEDA DE ARRIENDOS UNIVERSITARIOS EN LOS ALREDEDORES DE LA UNIVERSIDAD TÉCNICA DE AMBATO CAMPUS HUACHI”",
    fechaAprobacion: "17/03/2023",
    porcentajeAvance: "100 %",
    actividades: [
      { fecha: "01-07-2023", actividad: "Implementación de la función de geolocalización." },
      { fecha: "03-07-2023", actividad: "Implementación de la función comentarios" },
      { fecha: "05-07-2023", actividad: "Implementación del mapa en la aplicación móvil usando la API de Google Maps." },
      { fecha: "10-07-2023", actividad: "Elaboración de la Fase 4: estabilización y Fase 5: pruebas de funcionalidad" },
      { fecha: "12-07-2023", actividad: "Redacción de las conclusiones y recomendaciones." },
      { fecha: "14-07-2023", actividad: "Redacción del resumen ejecutivo y abstract." },
      { fecha: "14-07-2023", actividad: "Elaboración de las diapositivas para la defensa del proyecto." },
      { fecha: "16-07-2023", actividad: "Correcciones de las conclusiones y recomendaciones" },
    ],
    tutor: "ING. MG. HERNÁN FABRICIO NARANJO ÁVALOS",
  };

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog style={{ display: 'contents' }}>
        <Modal.Header>
          <Modal.Title>Reporte</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <InformeDocument {...data} />
          </PDFViewer>
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default StaticExample;
