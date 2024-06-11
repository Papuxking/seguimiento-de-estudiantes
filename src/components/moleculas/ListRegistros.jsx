import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { supabase } from '../../supabase/supabaseClient';

const ListEstudiantes = ({ onSelectStudent, data: filteredData }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    const { data: estudiantes, error } = await supabase
      .from('Estudiantes')
      .select('*');
      //.range(data.length, data.length + 9); 

    if (error) {
      console.error('Error fetching estudiantes:', error);
      setLoading(false);
      return;
    }

    setData([...data, ...estudiantes]);
    setLoading(false);

    if (estudiantes.length < 10) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  useEffect(() => {
    if (filteredData) {
      setData(filteredData);
      setHasMore(false);
    }
  }, [filteredData]);

  const getAlertClass = (estado) => {
    switch (estado) {
      case 'Activo':
        return 'alert alert-success';
      case 'Graduado':
        return 'alert alert-warning';
      case 'Retirado':
        return 'alert alert-danger';
      default:
        return 'alert alert-secondary';
    }
  };

  const getAlertText = (estado) => {
    switch (estado) {
      case 'Activo':
        return 'Activo';
      case 'Graduado':
        return 'Graduado';
      case 'Retirado':
        return 'Retirado';
      default:
        return 'Desconocido';
    }
  };

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 500,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={
          <Skeleton
            avatar
            paragraph={{ rows: 1 }}
            active
          />
        }
        endMessage={<Divider plain>Es todo, no hay más 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id_estudiante}>
              <List.Item.Meta
                avatar={<Avatar src={item.foto ? item.foto.url : 'https://img.icons8.com/external-kmg-design-flat-kmg-design/32/external-student-avatar-kmg-design-flat-kmg-design.png'} />}
                title={<a>{item.nombre} {item.apellido}</a>}
                description={`${item.carrera} - ${item.tema}`}
              />
              <div style={{ paddingRight: '10px' }}>
                <div className={getAlertClass(item.estado)} role="alert">
                  <strong>{getAlertText(item.estado)}</strong>
                </div>
              </div>
              <div>
                <a
                  name=""
                  id=""
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  onClick={() => onSelectStudent(item)}  // Llamar a la función pasada cuando se hace clic
                >Revisar</a>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ListEstudiantes;
