import React from "react"
import { Link as MuiLink } from "@material-ui/core"
import { Link as RouterLink } from "react-router-dom"

const DactLink = ({ to, text, ...otherProps}) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      {...otherProps}
    >
      {text}
    </MuiLink>
  )
}

export default DactLink
