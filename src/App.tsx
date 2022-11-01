import NavBar from "components/navbar/NavBar"
import React from "react"
import { StyledEngineProvider } from "@mui/material/styles"

import Home from "components/Home/Home"

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <NavBar />
            <Home />
        </StyledEngineProvider>
    )
}

export default App
