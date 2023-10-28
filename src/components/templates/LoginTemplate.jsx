import styled from "styled-components";
import { Btnsave, v } from "../../index";


export function LoginTemplate() {
    return (
        <Container>
            <div>
                <span>version 1.0</span>
                <div>
                    <img />
                </div>
                <Titulo>Manolin</Titulo>
                <p>Toma el control de tus gastos e ingresos 💰 </p>
                <ContainerBtn>
                    <Btnsave titulo="Iniciar con Google" icono={<v.iconogoogle />} />
                </ContainerBtn>
            </div>
        </Container>
    );
}

const Container =styled.div`

`

const Titulo = styled.span`
    font-size: 5rem;
    font-weight: 700;
`

const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
`