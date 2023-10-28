import styled from "styled-components";
import { useAuthStore, UserAuth } from "../index";

export function Home() {
    const{ signOut } = useAuthStore()
    const { user } = UserAuth();
    return (
        <Container>
            <h1>Home {user.name}</h1>
            <img src={user.avatar_url} />
            <button onClick={signOut}>Cerrar</button>
        </Container>
    );
}

const Container =styled.div`
    color: black;
    height: 100vh;
`