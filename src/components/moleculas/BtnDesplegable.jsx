import styled from "styled-components";
import {v} from '../../index';
export function BtnDesplegable({text, bgcolor, textcolor, funcion}) {
    return (
        <Container 
            $bgcolor={bgcolor}
            $textcolor={textcolor}
            >
            <span className="containerText">
                {<v.iconoFlechabajo />}
                <h6>{text}</h6>
            </span>
        </Container>
    );
}

const Container =styled.div`
    display:flex;
    background: ${(props) => props.$bgcolor};
    color: ${(props) => props.$textcolor};
    font-weight: 500;
    font-size: 23px;
    padding: 0.9rem 2.3rem;
    border-radius: 50px;
`