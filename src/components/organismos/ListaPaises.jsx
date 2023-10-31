import styled from "styled-components";
import {v, InputBucadorLista, ConvertirCapitalize} from '../../index';
import iso from 'iso-country-currency';
import { useState } from "react";
export function ListaPaises({ setSelect, setState }) {
    const isoCodigos = iso.getAllISOCodes();
    const [dataresult, setDataresult] = useState([]);

    function buscar(e) {
        let filtrado =  isoCodigos.filter((i) => {
            return i.countryName === ConvertirCapitalize(e.target.value);
        });
        setDataresult(filtrado);
    }

    function seleccionar(p) {
        setSelect(p)
        setState();
    }
    return (
        <Container>
            <header className="header">
                <spam>Busca tu pais</spam>
                <span className="close" onClick={setState}>{<v.iconocerrar />}</span>
            </header>
            <InputBucadorLista
                onChange={buscar}
                placeholder="Buscar..."
                />
            {dataresult.length > 0 &&
                dataresult.map((item, index) => {
                return (
                    <ItemContainer key={index} onClick={() => seleccionar(item)}>
                    <span>{item.countryName}</span>
                    <span>{item.symbol}</span>
                    </ItemContainer>
                );
            })}
        </Container>
    );
}

const Container =styled.div`
    margin-top: 10px;
    position: absolute;
    top:88%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme})=>theme.bgtotal};
    border: 3px solid #3a3a3a;
    border-radius: 10px;
    gap: 10px;
    color: ${({theme})=>theme.text};
    transition: 0.3s;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: inherit;

        .close {
            cursor: pointer;
            font-size: 25px;
            transition: all 0.2s;

            &:hover {
                color: ${() => v.colorselector};
                transform: scale(1.2);
            }
        }
    }
`
const ItemContainer = styled.section`
    gap: 10px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: ${({theme})=>theme.bgtotal};
    }
`