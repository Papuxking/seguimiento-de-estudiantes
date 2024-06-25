import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Modal from 'react-bootstrap/Modal';

// Define styles
const styles = StyleSheet.create({

  page: {
    padding: 40,
    fontSize: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subHeader: {
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    margin: '10px 0',
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
  },
  tableColHeaderActividad: {
    width: '75%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: 5,
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    padding: 5,
  },
  tableColActiviti: {
    width: '75%',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    padding: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
});

const InformeDocument = () => (
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
        <Text><Text style={styles.bold}>FECHA:</Text> 18/07/2023</Text>
        <Text><Text style={styles.bold}>NOMBRE DEL ESTUDIANTE:</Text> DANIELA ESTEFANÍA GARCÍA CHERRES</Text>
        <Text><Text style={styles.bold}>MODALIDAD DE TITULACIÓN:</Text> PROYECTO DE INVESTIGACIÓN</Text>
        <Text><Text style={styles.bold}>TEMA DEL TRABAJO DE TITULACIÓN:</Text> “APLICACIÓN MÓVIL USANDO TECNOLOGÍAS MULTIPLAFORMA PARA LA DIFUSIÓN Y BÚSQUEDA DE ARRIENDOS UNIVERSITARIOS EN LOS ALREDEDORES DE LA UNIVERSIDAD TÉCNICA DE AMBATO CAMPUS HUACHI”</Text>
        <Text><Text style={styles.bold}>FECHA DE APROBACIÓN DE LA PROPUESTA DEL PERFIL DEL TRABAJO DE TITULACIÓN POR EL CONSEJO DIRECTIVO:</Text> 17/03/2023</Text>
        <Text><Text style={styles.bold}>PORCENTAJE DE AVANCE DE ACUERDO AL CRONOGRAMA:</Text> 100 %</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Fecha</Text>
          <Text style={styles.tableColHeaderActividad}>Actividad</Text>
        </View>
        {[
          ['01-07-2023', 'Implementación de la función de geolocalización.'],
          ['03-07-2023', 'Implementación de la función comentarios'],
          ['05-07-2023', 'Implementación del mapa en la aplicación móvil usando la API de Google Maps.'],
          ['10-07-2023', 'Elaboración de la Fase 4: estabilización y Fase 5: pruebas de funcionalidad'],
          ['12-07-2023', 'Redacción de las conclusiones y recomendaciones.'],
          ['14-07-2023', 'Redacción del resumen ejecutivo y abstract.'],
          ['14-07-2023', 'Elaboración de las diapositivas para la defensa del proyecto.'],
          ['16-07-2023', 'Correcciones de las conclusiones y recomendaciones'],
        ].map(([date, activity], index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCol}>{date}</Text>
            <Text style={styles.tableColActiviti}>{activity}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text>ING. MG. HERNÁN FABRICIO NARANJO ÁVALOS</Text>
        <Text>TUTOR TRABAJO TITULACIÓN</Text>
      </View>
    </Page>
  </Document>
);

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal.Dialog style={{ display: 'contents'}}>
        <Modal.Header>
          <Modal.Title>Reporte</Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <InformeDocument />
          </PDFViewer>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;
