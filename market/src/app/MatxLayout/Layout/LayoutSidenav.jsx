import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { setLayoutSettings } from "app/redux/actions/LayoutActions"
import { withRouter } from "react-router-dom"
import Sidenav from "../SharedCompoents/Sidenav"
import { isMdScreen } from "utils"
import SidenavHeader from "./SidenavHeader"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    "& .sidenav": {
      "& .sidenav__hold": {
        opacity: "1 !important",
        "&::after": {
          background: theme.palette.primary.main,
          opacity: 0.96,
        },
        "& .nav-item:not(.badge)": {
          color: theme.palette.text.primary,
        },
        "& .nav-item": {
          "&.active, &.active:hover": {
            background: theme.palette.secondary.main,
          },
          "& .icon-text::after": {
            background: theme.palette.text.primary,
          },
        },
      },
    },
  },
}))

const LayoutSidenav = (props) => {
  useEffect(() => {
    return props.history.listen(() => {
      if (isMdScreen()) {
        props.setLayoutSettings({ leftSidebar: { mode: "close" } })
      }
    })
  })
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className="sidenav">
        <div
          className="sidenav__hold"
          style={{
            backgroundImage: "url(/assets/images/sidebar/sidebar-bg-dark.jpg)",
          }}
        >
          <SidenavHeader />
          <Sidenav />
        </div>
      </div>
    </div>
  )
}

LayoutSidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
})

export default withRouter(
  connect(mapStateToProps, { setLayoutSettings })(LayoutSidenav),
)
