import { useEffect, useCallback } from "react"
import { matchRoutes } from "react-router-config"
import { useRoutes } from "@dact/core"
import { isMdScreen } from "utils"

export const useSetLayoutOnRouteChange = (location, setLayout) => {
  const routes = useRoutes()

  useEffect(() => {
    const matched = matchRoutes(routes, location.pathname)[0]

    const changes =
      matched && matched.route.layout
        ? {
            title: null,
            ...matched.route.layout,
          }
        : {
            title: null,
          }

    setLayout(changes)
  }, [routes, location, setLayout])
}

export const useSetLayoutOnResize = ({ showBars }, setLayout) => {
  const listenWindowResize = useCallback(() => {
    if (showBars) {
      let mode = isMdScreen() ? "close" : "full"
      setLayout({ leftSidebar: { mode } })
    }
  }, [showBars, setLayout])

  useEffect(() => {
    listenWindowResize()

    if (window) {
      window.addEventListener("resize", listenWindowResize)
    }
    return () => {
      if (window) {
        window.removeEventListener("resize", listenWindowResize)
      }
    }
  }, [listenWindowResize])
}
