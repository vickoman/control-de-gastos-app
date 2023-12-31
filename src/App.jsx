import { createContext, useState } from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { MyRoutes, Light, Dark, AuthContextProvider, Sidebar, Device, Menuhambur, useUsuariosStore, Login, SpinnerLoader } from "./index";
import { useLocation } from 'react-router-dom';
import { ThemeProvider, styled } from 'styled-components';
import { useQuery } from "@tanstack/react-query";

export const ThemeContext = createContext(null);

function App() {
  const { mostrarUsuarios, datausuarios } = useUsuariosStore();
  const { pathname } = useLocation();
  const theme =datausuarios?.tema==="0"?"light":"dark"
  const themeStyle = theme==="light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoading, error } = useQuery(["mostrar usuarios"], () =>
    mostrarUsuarios()
  );

  if (isLoading ) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <h1>Error..</h1>;
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {pathname!=='/login'? (
              <Container className={(sidebarOpen ? "active" : "")}>
                <div className="contentSidebar">
                  <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
                </div>
                <div className="contentMenuHambur">
                  <Menuhambur />
                </div>
                <Containerbody>
                  <MyRoutes />
                </Containerbody>
              </Container>
            ) : (<Login />)}
            <ReactQueryDevtools initialIsOpen={true} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container =styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background:${({theme}) => theme.bgtotal};
  transition: 0.3s ease-in-out;
  
  .contentSidebar {
    display: none;
  }
  .contentMenuHambur {
    display: block;
  }
  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;

    &.active {
      grid-template-columns: 220px 1fr;
    }
    .contentSidebar {
      display: initial;
    }
    .contentMenuHambur {
      display: none;
    }

  }
`
const Containerbody = styled.div`
  width: 100%;
  grid-column: 1;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`
export default App
