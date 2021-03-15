import React from "react"

const pageLayoutRoutes = [
  {
    path: "/page-layouts/user-profile",
    component: React.lazy(() => import("./UserProfile")),
    layout: {
      title: "Perfil",
    },
    exact: true,
    auth: true,
  },
]

export default pageLayoutRoutes
