import styled from 'styled-components';
import { useState } from 'react';
import {
    Header,
    ContentFiltros,
    BtnDesplegable,
    useOperaciones,
    ListaMenuDesplegable,
    DataDesplegableTipo,
    BtnFiltro,
    v,
    RegistrarCategorias,
    TablaCategorias,
} from '../../index';
export function CategoriasTemplate({ data }) {
    const [openRegistro, SetopenRegistro] = useState(false);
    const [accion, setAccion] = useState('');
    const [dataSelect, setdataSelect] = useState([]);
    const [state, setState] = useState();
    const [stateTipo, setStateTipo] = useState();
    const { colorCategoria, tituloBtnDes, bgCategoria, setTipo } =
        useOperaciones();

    function cambiarTipo(p) {
        setTipo(p);
        setStateTipo(!stateTipo);
        setState(false);
    }

    function cerrarDesplegables() {
        setStateTipo(false);
        setState(false);
    }

    function openTipo() {
        setStateTipo(!stateTipo);
        setState(false);
    }

    function openUser() {
        setState(!state);
        setStateTipo(false);
    }

    function nuevoRegistro(){
        SetopenRegistro(!openRegistro);
        setAccion("Nuevo")
        setdataSelect([])
    }
    return (
        <Container onClick={cerrarDesplegables}>
            {openRegistro && <RegistrarCategorias dataSelect={dataSelect} onClose={()=>SetopenRegistro(!openRegistro)} accion={accion}/>}
            <header className="header">
                <Header stateConfig={{ state: state, setState: openUser }} />
            </header>
            <section className="tipo">
                <div onClick={(e) => e.stopPropagation()}>
                    <ContentFiltros>
                        <BtnDesplegable
                            textcolor={colorCategoria}
                            bgcolor={bgCategoria}
                            text={tituloBtnDes}
                            funcion={openTipo}
                        />
                        {stateTipo && (
                            <ListaMenuDesplegable
                                data={DataDesplegableTipo}
                                top="112%"
                                funcion={(p) => cambiarTipo(p)}
                            />
                        )}
                    </ContentFiltros>
                </div>
            </section>
            <section className="area2">
                <ContentFiltro>
                    <BtnFiltro
                        bgcolor={bgCategoria}
                        textcolor={colorCategoria}
                        icono={<v.agregar />}
                    />
                </ContentFiltro>
            </section>
            <section className="main">
                <TablaCategorias data={data} SetopenRegistro={SetopenRegistro} setdataSelect={setdataSelect} setAccion={setAccion} />
            </section>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    padding: 15px;
    width: 100%;
    background: ${({ theme }) => theme.bgTotal};
    color: ${({ theme }) => theme.text};
    display: grid;
    grid-template:
        'header' 100px
        'tipo' 100px
        'area2' 50px
        'main' auto;

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

    .area2 {
        grid-area: area2;
        background: rgba(79, 46, 38, 0.14);
        display: flex;
        align-items: center;
        justify-content: end;
    }

    .main {
        grid-area: main;
        /* background: rgba(230, 215, 211, 0.14); */
    }
`;

const ContentFiltro = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
