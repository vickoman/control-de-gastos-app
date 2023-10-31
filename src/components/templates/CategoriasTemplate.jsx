import styled from "styled-components";
import {useState} from 'react';
import { Header, ContentFiltros, BtnDesplegable } from '../../index';
export function CategoriasTemplate() {
    const [state, setState] = useState();
    return (
        <Container>
            <header className="header" >
                <Header stateConfig={{state: state, setState: () => setState(!state)}} />
            </header>
            <section className="tipo">
                <ContentFiltros>
                    <BtnDesplegable bgcolor="green" />
                </ContentFiltros>
            </section>
            <section className="area2"></section>
            <section className="main"></section>
        </Container>
    );
}

const Container =styled.div`
    height: 100vh;
    padding: 15px;
    width: 100%;
    background: ${({theme}) => theme.bgTotal};
    color: ${({theme}) => theme.text};
    display: grid;
    grid-template:
            "header" 100px
            "tipo" 100px
            "area2" 50px
            "main" auto;

    .header {
        grid-area: header;
        background: rgba(103, 93, 241, 0.14);
        display: flex;
        align-items: center;
    }

    .tipo {
        grid-area: tipo;
        background: rgba(229, 67, 26, 0.14);
        display: flex;
        align-items: center;
    }

    .area1 {
        grid-area: area2;
        background: rgba(79, 46, 38, 0.14);
        display: flex;
        align-items: center;
    }

    .main {
        grid-area: main;
        background: rgba(230, 215, 211, 0.14);
        display: flex;
        align-items: center;
    }
`