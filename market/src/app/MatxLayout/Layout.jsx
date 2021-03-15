import React from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { setLayoutSettings } from "app/redux/actions/LayoutActions"
import { withStyles, ThemeProvider } from "@material-ui/core/styles"
import Scrollbar from "react-perfect-scrollbar"
import { classList } from "utils"
import { renderRoutes } from "react-router-config"
import { MatxSuspense } from "matx"
import { useRoutes } from "@dact/core"
import themes from "./themes"
import LayoutTopbar from "./Layout/LayoutTopbar"
import LayoutSidenav from "./Layout/LayoutSidenav"
import { useSetLayoutOnResize, useSetLayoutOnRouteChange } from "./LayoutHooks"

const styles = (theme) => {
  return {
    layout: {
      backgroundColor: theme.palette.background.default,
    },
  }
}

const Layout = (props) => {
  let { layout, classes, setLayoutSettings, user } = props

  useSetLayoutOnResize(layout, setLayoutSettings)
  useSetLayoutOnRouteChange(props.location, setLayoutSettings)
  const routes = useRoutes()
  const availableRoutes = routes.filter((route) => !route.auth || user.token)

  let layoutClasses = {
    [classes.layout]: true,
    [`layout sidenav-${
      layout.showBars ? layout.leftSidebar.mode : "close"
    } theme-light flex`]: true,
    "topbar-fixed": true,
  }

  return (
    <div className={classList(layoutClasses)}>
      {layout.showBars && (
        <ThemeProvider theme={themes.leftSidebar}>
          <LayoutSidenav />
        </ThemeProvider>
      )}

      <div className="content-wrap position-relative">
        {layout.showBars && (
          <ThemeProvider theme={themes.topbar}>
            <LayoutTopbar fixed={true} className="elevation-z8" />
          </ThemeProvider>
        )}

        <Scrollbar className="scrollable-content">
          <div className="content">
            <MatxSuspense>{renderRoutes(availableRoutes)}</MatxSuspense>
          </div>
        </Scrollbar>
      </div>
    </div>
  )
}

Layout.propTypes = {
  layout: PropTypes.object.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  layout: state.layout,
  user: state.user,
  setLayoutSettings: PropTypes.func.isRequired,
})

export default withRouter(
  withStyles(styles, { withTheme: true })(
    connect(mapStateToProps, { setLayoutSettings })(Layout),
  ),
)
