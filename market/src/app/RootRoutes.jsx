import React from "react"
import { Redirect } from "react-router-dom"
import dactRoutes from "./views/dact/DactRoutes"
import sessionRoutes from "./views/sessions/SessionRoutes"
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees"

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
]

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />,
  },
]

const routes = [
  ...sessionRoutes,
  ...dactRoutes,
  ...pageLayoutRoutes,
  ...redirectRoute,
  ...errorRoute,
]

export default routes
