import React from "react"

const commonSettings = {
  showBars: true,
}

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: React.lazy(() => import("./Analytics")),
    auth: true,
    exact: true,
    layout: {
      ...commonSettings,
      title: "Dashboard",
    },
  },
  {
    path: "/ordenes",
    component: React.lazy(() => import("../CRUD/CrudTable")),
    auth: true,
    exact: true,
    layout: {
      ...commonSettings,
      title: "Ordenes",
    },
  },
  {
    path: "/productos",
    component: React.lazy(() =>
      import("matx/components/MatxLoading/MatxLoading"),
    ),
    auth: true,
    exact: true,
    layout: {
      ...commonSettings,
      title: "Productos",
    },
  },
  {
    path: "/sucursales",
    component: React.lazy(() => import("./Analytics")),
    exact: true,
    auth: true,
    layout: {
      ...commonSettings,
      title: "Sucursales",
    },
  },
  {
    path: "/empresas",
    component: React.lazy(() => import("./Analytics")),
    exact: true,
    auth: true,
    layout: {
      ...commonSettings,
      title: "Empresas",
    },
  },
  {
    path: "/categorias",
    component: React.lazy(() => import("./Analytics")),
    exact: true,
    auth: true,
    layout: {
      ...commonSettings,
      title: "Categorias",
    },
  },
]

export default dashboardRoutes
