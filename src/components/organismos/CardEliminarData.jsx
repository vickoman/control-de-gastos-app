import styled from "styled-components";
import {Btnsave, v, useCategoriasStore, useUsuariosStore} from  '../../index';
import Swal from "sweetalert2";
export function CardEliminarData() {
    const {eliminarCategoriasAll} = useCategoriasStore();
    const { datausuarios } = useUsuariosStore();

    const eliminar = async() => {
        const p = {
            user_id: datausuarios.id,
        }
        Swal.fire({
            title: 'Estas seguro?',
            text: 'Una vez eliminado, No se podra recuperar!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await eliminarCategoriasAll(p);
            }
        })
    }
    return (
        <Container>
            <h3>Resetear todo</h3>
            <span>
                🐽 ADVERTENCIA!: *esta accion es irreversible, una vez ejecutada
                se eliminaran todos tus registros de movimiento incluso las categorias
                registradas. <br />
                *Se resetera tambien los saldos acumulados en tus cuentas.
            </span>
            <Btnsave titulo={'Resetear'} funcion={eliminar} bgcolor="rgba(247, 92, 92, 0.87)" />
            <div className="contentImg">
                <img src={v.logo} />
            </div>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgba(255, 99, 99, 0.87);
  height: 100%;
  background: rgb(42, 1, 1);
  background: linear-gradient(
    18deg,
    rgba(252, 69, 69, 0.12) 9%,
    rgba(252, 69, 69, 0.3) 100%
  );
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  gap: 20px;

  h2 {
    color: rgba(252, 69, 69, 0.72);
  }
  span {
    color: rgba(251, 82, 82, 0.67);
    font-size: 120%;
  }
  .contentImg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    opacity: 0.18;
    margin: 30px;
    img {
      width: 100%;
      animation: flotar 1.7s ease-in-out infinite alternate;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;