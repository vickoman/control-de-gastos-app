import styled from "styled-components";
import {useState} from 'react';
import { Header } from '../../index';
export function ConfiguracionTemplate() {
    const [state, setState] = useState();
    return (
        <Container>
            <header className="header" >
                <Header stateConfig={{state: state, setState: () => setState(!state)}} />
            </header>
            <section className="area1">
                Area 1
            </section>
            <section className="area2">
                Area 2
            </section>
            <section className="main">
                area 3
            </section>
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
            "area1" 100px
            "area2" 50px
            "main" auto;

    .header {
        grid-area: header;
        background: rgba(103, 93, 241, 0.14);
        display: flex;
        align-items: center;
    }

    .area1 {
        grid-area: area1;
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