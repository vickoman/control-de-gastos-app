import { create } from "zustand";
import { MostratCategoria,InsertarCategoria, EditarCategoria, EliminarCategoria } from "../index";

export const useCategoriasStore = create((set, get) => ({

    dataCategoria: [],
    mostrarCategorias: async (p) => {
        const response = await MostratCategoria(p);
        set({dataCategoria: response});
        return response;
    },
    insertarCategorias: async(p) => {
        await InsertarCategoria(p);
        const {mostrarCategorias} = get();
        set(mostrarCategorias(p));
    },
    eliminarCategoria: async(p) => {
        await EliminarCategoria(p);
        const {mostrarCategorias} = get();
        set(mostrarCategorias(p));
    },
    editarCategoria: async(p) => {
        await EditarCategoria(p);
        const {mostrarCategorias} = get();
        set(mostrarCategorias(p));
    }
}))