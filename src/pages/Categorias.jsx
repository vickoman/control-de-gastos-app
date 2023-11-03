import styled from "styled-components";
import { CategoriasTemplate, useCategoriasStore, useUsuariosStore, useOperaciones } from '../index';
import { useQuery } from "@tanstack/react-query";
export function Categorias() {
    const { dataCategoria, mostrarCategorias } = useCategoriasStore();
    const { datausuarios } = useUsuariosStore();
    const { tipo } = useOperaciones();

    const { isLoading, error } = useQuery(["Mostar Categorias", tipo], ()=> mostrarCategorias({user_id: datausuarios.id, tipo}))

    return (
        <Container>
            <CategoriasTemplate data={dataCategoria} />
        </Container>
    );
}

const Container =styled.div`
    height: 100vh;
`