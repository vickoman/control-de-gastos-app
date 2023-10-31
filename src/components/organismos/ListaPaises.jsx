import styled from "styled-components";
import {v, InputBucadorLista, ConvertirCapitalize, Device, BtnCerrar } from '../../index';
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
                <span>Busca tu pais</span>
                <BtnCerrar funcion={setState} />
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

const Container = styled.div`
  margin-top: 15px;
  position: absolute;
  top: 88%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
 
  padding: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  z-index: 3;
  @media ${() => Device.tablet} {
    width: 400px;
  }

  .titulo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.body};
  }
`;
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
`;