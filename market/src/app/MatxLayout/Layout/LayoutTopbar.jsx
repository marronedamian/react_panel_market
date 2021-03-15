import React from "react"
import { makeStyles, Typography } from "@material-ui/core"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { classList } from "utils"
import { logout } from "app/redux/actions/LoginActions"
import NotificationBar from "../SharedCompoents/NotificationBar"
import UserMenu from "./UserMenu"
import SidebarToggleButton from "./SidebarToggleButton"

const useStyles = makeStyles((theme) => ({
  topbar: {
    "& .topbar-hold": {
      backgroundColor: theme.palette.primary.main,
      height: "80px",
      "&.fixed": {
        boxShadow: theme.shadows[8],
        height: "64px",
      },
    },
  },
  topbarSide: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: `${theme.palette.common.white} !important`,
    marginLeft: theme.spacing(2),
  },
}))

const LayoutTopbar = ({ title, fixed, logout }) => {
  const classes = useStyles()

  return (
    <div className={`topbar ${classes.topbar}`}>
      <div className={classList({ "topbar-hold": true, fixed: fixed })}>
        <div className="flex justify-between items-center h-full">
          <div className={classes.topbarSide}>
            <SidebarToggleButton />
            {title && (
              <Typography variant="h5" component="h1" className={classes.title}>
                {title}
              </Typography>
            )}
          </div>
          <div className={classes.topbarSide}>
            <NotificationBar />
            <UserMenu handleSignOut={logout} />
          </div>
        </div>
      </div>
    </div>
  )
}

LayoutTopbar.propTypes = {
  logout: PropTypes.func.isRequired,
  title: PropTypes.string,
}

const mapStateToProps = (state) => ({
  logout: PropTypes.func.isRequired,
  title: state.layout.title,
})

export default connect(mapStateToProps, { logout })(LayoutTopbar)
