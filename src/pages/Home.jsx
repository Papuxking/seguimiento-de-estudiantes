import { useQuery } from "@tanstack/react-query";
import { HomeTemplate, useEstudianteStore } from "../index";
export function Home() {
  const {mostrarEstudiante,dataestudiante,buscarEstudiante,
    buscador
  } = 
  useEstudianteStore();
  const {isLoading,error} = useQuery({queryKey:["mostrar estudiante",{nombre:dataestudiante.nombre}],
    queryFn:()=>mostrarEstudiante({nombre:dataestudiante.nombre}),enabled:dataestudiante.nombre!=null
   });
   const {data:buscardata} = useQuery({
    queryKey:["buscar estudiante",{nombre:dataestudiante.nombre,
      apellido:buscador}],
    queryFn:()=>buscarEstudiante({nombre:dataestudiante.nombre,
      apellido: buscador
    }),enabled:dataestudiante.nombre!=null
   });
   if (isLoading){
    return <SpinnerLoader />;
   }
   if (error) {
    return <span>Error...</span>;
   }

  return (<HomeTemplate data={dataestudiante}/>);
}
