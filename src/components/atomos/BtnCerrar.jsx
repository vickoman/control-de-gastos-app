import styled from "styled-components";
import {v} from '../../index';
export function BtnCerrar({funcion}) {
    return (
        <Container>
            <span className="close" onClick={funcion}>{<v.iconocerrar />}</span>
        </Container>
    );
}

const Container =styled.div`
    .close {
            cursor: pointer;
            font-size: 25px;
            transition: all 0.2s;

            &:hover {
                color: ${() => v.colorselector};
                transform: scale(1.2);
            }
        }
`