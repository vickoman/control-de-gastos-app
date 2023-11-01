import styled from "styled-components";
import {useState} from 'react';
import { Header, Selector, v, ListaPaises, useUsuariosStore, ListaGenerica, TemasData, Btnsave } from '../../index';
export function ConfiguracionTemplate() {
    const { datausuarios, editarTemaModenaUser } = useUsuariosStore();
    const [select, setSelect] = useState(false);
    const [selectTema, setSelectTema] = useState([]);
    const [state, setState] = useState(false);
    const [stateListaPaises, setStateListaPaises] = useState(false);
    const [stateListaTemas, setStateListaTemas] = useState(false);
    const moneda = select.symbol ? select.symbol : datausuarios.moneda;
    const pais = select.countryName ? select.countryName : datausuarios.pais;
    const paisSeleccionadp = `🐽   ${moneda} ${pais}`;

    // Tema
    const iconodb = datausuarios.tema === "0" ? "☀️" : "🌑";
    const temadb = datausuarios.tema === "0" ? "light" : "dark";
    const temainicial = selectTema.descripcion ? selectTema.descripcion : temadb;
    const iconoinicial = selectTema.icono ? selectTema.icono : iconodb;
    const temaSeleccionado = iconoinicial + " " + temainicial;

    const editar = async() => {
        const themeElegido = selectTema.descripcion === "light" ? "0" : "1";
        const p = {
            tema: themeElegido,
            moneda: moneda,
            pais: pais,
            id: datausuarios.id
        }
        await editarTemaModenaUser(p);
    }

    return (
        <Container>
            <header className="header" >
                <Header stateConfig={{state: state, setState: () => setState(!state)}} />
            </header>
            <section className="area2">
                <h1>AJUSTES</h1>
                <ContentCard>
                    <span>Moneda:</span>
                    <Selector 
                        state={stateListaPaises}
                        color={v.colorselector}
                        text1={paisSeleccionadp}
                        callback={() => setStateListaPaises(!stateListaPaises)} />
                    {
                        stateListaPaises && (
                            <ListaPaises 
                                setSelect={(p) => setSelect(p)}
                                setState={() => setStateListaPaises(!stateListaPaises)}
                            />
                        )
                    }
                </ContentCard>
                <ContentCard>
                    <span>Tema:</span>
                    <Selector 
                        text1={temaSeleccionado}
                        color={v.colorselector}
                        state={stateListaTemas}
                        callback={() => setStateListaTemas(!stateListaTemas)} />

                    {
                        stateListaTemas && (
                            <ListaGenerica 
                                data={TemasData} 
                                setState={() => setStateListaTemas(!stateListaTemas)}
                                funcion={setSelectTema} />
                        )
                    }
                </ContentCard>

                <Btnsave titulo="Guardar preferencias" bgcolor={v.colorselector} icono={<v.iconoguardar />} funcion={editar} />
            </section>
        </Container>
    );
}

const Container =styled.div`
    min-height: 100vh;
    padding: 15px;
    width: 100%;
    background: ${({ theme }) => theme.bgtotal};
    color: ${({ theme }) => theme.text};
    display: grid;
    grid-template:
        "header" 100px
        "area2" auto;

    .header {
        grid-area: header;
        /* background-color: rgba(103, 93, 241, 0.14); */
        display: flex;
        align-items: center;
    }

    .area1 {
        grid-area: area1;
        background: rgba(229, 67, 26, 0.14);
        display: flex;
        align-items: center;
    }

    .area2 {
        grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: start;
        gap: 30px;
        align-self: center;
        h1 {
        font-size: 3rem;
        }
    }

    .main {
        grid-area: main;
        background: rgba(230, 215, 211, 0.14);
        display: flex;
        align-items: center;
    }
`

const ContentCard = styled.div`
    display: flex;
    text-align: start;
    align-items: center;
    gap: 20px;
    position: relative;
    width: 100%;
    justify-content: center;
`