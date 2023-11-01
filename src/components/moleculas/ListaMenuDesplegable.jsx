import styled from "styled-components";
import {ItemDesplegable, v} from '../../index';
export function ListaMenuDesplegable({data, top, funcion}) {
    return (
        <Container $top={top}>
            {data.map((item, idx) => {
                return (
                    <ItemDesplegable 
                        key={idx} 
                        item={item} 
                        funcion={() => funcion(item)}
                        />
                )
            })}
        </Container>
    );
}

const Container =styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    background: ${({theme})=> theme.bg3};
    border-radius: 22px;
    top: ${(props) => props.$top};
    box-shadow: ${() => v.boxshadowGray};
`