import { create } from "zustand";
import {
  BuscarEstudiante,
  EditarEstudiante,
  EliminarEstudiante,
  InsertarEstudiante,
  MostrarEstudiante,
} from "../index";
export const useEstudianteStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  dataestudiante: [],
  estudianteItemSelect: [],
  parametros: {},
  mostrarEstudiante: async (p) => {
    const response = await MostrarEstudiante(p);
    set({ parametros: p });
    set({ dataestudiante: response });
    set({ estudianteItemSelect: response[0] });
    return response;
  },
  selectEstudiante: (p) => {
    set({ estudianteItemSelect: p });
  },
  insertarEstudiante: async (p) => {
    await InsertarEstudiante(p);
    const { mostrarEstudiante } = get();
    const { parametros } = get();
    set(mostrarEstudiante(parametros));
  },
  eliminarEstudiante: async (p) => {
    await EliminarEstudiante(p);
    const { mostrarEstudiante } = get();
    const { parametros } = get();
    set(mostrarEstudiante(parametros));
  },
  editarEstudiante: async (p) => {
    await EditarEstudiante(p);
    const { mostrarEstudiante } = get();
    const { parametros } = get();
    set(mostrarEstudiante(parametros));
  },
  buscarEstudiante: async (p) => {
    const response = await BuscarEstudiante(p);
    set({ dataestudiante: response });
  },
}));
