import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { supabase } from '../../supabase/supabaseClient';

const ListEstudiantes = () => {
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
      .select('*')
      .range(data.length, data.length + 9); // Paginación de 10 en 10

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
                avatar={<Avatar src={item.foto ? item.foto.url : 'https://via.placeholder.com/40'} />}
                title={<a href="https://ant.design">{item.nombre} {item.apellido}</a>}
                description={`${item.carrera} - ${item.tema}`}
              />
              <div>
                <a
                  name=""
                  id=""
                  className="btn btn-primary"
                  href="#"
                  role="button"
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
