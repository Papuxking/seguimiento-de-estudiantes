import {supabase} from "../index"
import Swal from "sweetalert2"
export async function InsertarEstudiante(p) {
    const {error} = await supabase.rpc("insertarestudiante",p)
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
      .from("estudiante")
      .select()
      .eq("id_empresa", p.id_empresa)
      .order("id", { ascending: true });
    return data;
  
}
export async function EliminarEstudiante(p) {
 
    const { error } = await supabase
      .from("estudiante")
      .delete()
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error.message);
    }

}
export async function EditarEstudiante(p) {
    const { error } = await supabase
      .from("estudiante")
      .update(p)
      .eq("id", p.id);
    if (error) {
      alert("Error al editar estudiante", error.message);
    }

}
export async function BuscarEstudiante(p) {
    const { data} = await supabase
    .from("estudiante")
    .select()
    .eq("id_empresa", p.id_empresa)
    .ilike("descripcion","%"+p.descripcion+"%")
    return data;
}