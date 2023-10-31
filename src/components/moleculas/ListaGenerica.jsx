import styled from "styled-components";
import { Device, v, BtnCerrar } from '../../index';
export function ListaGenerica({data, setState, funcion}) {
    function seleccionar(p) {
        funcion(p);
        setState();
    }
    return (
        <Container>
            <section className="contentClose">
                <BtnCerrar funcion={setState}/>
            </section>
            <section className="contentItems">
                {
                    data.map((item, idx) => {
                        return (
                            <ItemContainer key={idx} onClick={()=>seleccionar(item)}>
                                <span>{item.icono}</span>
                                <span>{item.descripcion}</span>
                            </ItemContainer>
                        )
                    })
                }
            </section>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  bottom: 88%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index:3;
  @media ${() => Device.tablet} {
    width: 400px;
  }
`;
const ItemContainer = styled.div`
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