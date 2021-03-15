import React from "react"
import { Icon, MenuItem, makeStyles } from "@material-ui/core"
import { MatxMenu } from "matx"
import { Link } from "react-router-dom"

const useStyles = makeStyles(() => ({
  menuItem: {
    display: "flex",
    alignItems: "center",
    minWidth: 185,
  },
}))

const UserMenu = ({ handleSignOut }) => {
  const classes = useStyles()
  return (
    <MatxMenu
      menuButton={
        <img
          className="mx-2 align-middle circular-image-small cursor-pointer"
          src="/assets/images/face-6.jpg"
          alt="user"
        />
      }
    >
      <MenuItem>
        <Link className={classes.menuItem} to="/page-layouts/user-profile">
          <Icon> person </Icon>
          <span className="pl-4"> Profile </span>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleSignOut} className={classes.menuItem}>
        <Icon> power_settings_new </Icon>
        <span className="pl-4"> Logout </span>
      </MenuItem>
    </MatxMenu>
  )
}

export default UserMenu
