import "../fake-db"
import "../styles/_app.scss"
import React from "react"
import { Provider as ReduxProvider } from "react-redux"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline, RouterProvider } from "@dact/core"
import routes from "./RootRoutes"
import Store from "./redux/Store"
import Layout from "./MatxLayout/Layout"
import themes from "./MatxLayout/themes"

const App = () => (
  <ReduxProvider store={Store}>
    <RouterProvider routes={routes}>
      <ThemeProvider theme={themes.main}>
        <CssBaseline />
          <Layout />
      </ThemeProvider>
    </RouterProvider>
  </ReduxProvider>
)

export default App
