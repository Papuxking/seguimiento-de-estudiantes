import { supabase } from '../supabase/supabaseClient';
import Swal from "sweetalert2"
export async function InsertarEstudiante(p) {
    const {error} = await supabase.rpc("insertarEstudiante",p)
    if(error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            footer: '<a href="">Agregue una nueva descripcion</a>',
          });
    }
}

export async function MostrarEstudiante(p) {
 
    const { data } = await supabase
      .from("Estudiantes")
      .select()
      .eq("id_estudiante", p.id_estudiante)
      .order("nombre", { ascending: true });
    return data;
  
}
export async function EliminarEstudiante(p) {
 
    const { error } = await supabase
      .from("Estudiantes")
      .delete()
      .eq("id_estudiante", p.id);
    if (error) {
      alert("Error al eliminar", error.message);
    }

}
export async function EditarEstudiante(p) {
    const { error } = await supabase
      .from("Estudiantes")
      .update(p)
      .eq("id_estudiante", p.id);
    if (error) {
      alert("Error al editar estudiante", error.message);
    }

}
export async function BuscarEstudiante(p) {
    const { data} = await supabase
    .from("Estudiantes")
    .select()
    .eq("nombre", p.nombre)
    .ilike("apellido","%"+p.apellido+"%")
    return data;
}