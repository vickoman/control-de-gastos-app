import styled from "styled-components";
import { CategoriasTemplate, useCategoriasStore, useUsuariosStore } from '../index';
import { useQuery } from "@tanstack/react-query";
export function Categorias() {
    const { dataCategoria, mostrarCategorias } = useCategoriasStore();
    const { datausuarios } = useUsuariosStore();

    const { isLoading, error } = useQuery(["Mostar Categorias", datausuarios.id], ()=> mostrarCategorias({user_id: datausuarios.id, tipo: 'i'}))
    if (isLoading) {
        return <h1>Cargando...</h1>;
    }
    if (error) {
        return <h1>Error...</h1>;
    }
    console.log(dataCategoria);
    return (
        <Container>
            {
                dataCategoria.map((item, idx) => {
                    return(
                        <h1>{item.descripcion}</h1>
                    )
                })
            }
            <CategoriasTemplate />
        </Container>
    );
}

const Container =styled.div`
    height: 100vh;
`