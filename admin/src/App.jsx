import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { SessionCard, CssBaseline, RouterProvider } from "@dact/core"
import { ThemeProvider } from "@material-ui/core/styles"
import Store from "./Store"
import themes from "./themes"
import routes from "./RootRoutes"

const App = () => (
  <RouterProvider routes={routes}>
    <ReduxProvider store={Store}>
      <ThemeProvider theme={themes.main}>
        <CssBaseline />
        <SessionCard>Hola mundo!</SessionCard>
      </ThemeProvider>
    </ReduxProvider>
  </RouterProvider>
)

export default App
