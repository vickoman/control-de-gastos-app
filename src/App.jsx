import { MyRoutes } from "./index";
import { createContext, useState } from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { Light, Dark, AuthContextProvider } from "./index";
import { ThemeProvider } from 'styled-components'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")
  const themeStyle = theme==="light" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MyRoutes />
            {/* <ReactQueryDevtools initialIsOpen={true} /> */}
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
