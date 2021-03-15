import React, { useContext } from "react"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"

export const history = createBrowserHistory()

const routeContext = React.createContext([])

export const RouterProvider = ({ children, routes }) => (
  <routeContext.Provider value={{ routes }}>
    <Router history={history}>{children}</Router>
  </routeContext.Provider>
)

export const useRoutes = () => useContext(routeContext).routes
