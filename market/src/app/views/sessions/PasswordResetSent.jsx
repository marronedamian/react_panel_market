import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded"
import { useLocation } from "react-router-dom"
import { SessionCard } from "@dact/core"
import DactLink from "./DactLink"

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: theme.spacing(2),
    color: theme.palette.success.dark,
    fontSize: "40px",
  },
  text: {
    textAlign: "center",
  },
}))

const PasswordResetSent = () => {
  const classes = useStyles()
  const { state } = useLocation()

  return (
    <SessionCard>
      <CheckCircleRoundedIcon className={classes.icon} />
      <Typography
      variant="subtitle1"
      component="p"
      className={classes.text}
      >
        {state?.email ? (
          <>
          {"Hemos mandado un correo a "}
          <b>{state.email}</b>
          {" con las instrucciones para recuperar la contraseña. "}
          </>
        ) : (
          "Te hemos mandado un correo con las instrucciones para recuperar la contraseña. "
        )}
        <DactLink to="/session/signin" text="Entrar" />
      </Typography>
    </SessionCard>
  )
}

export default PasswordResetSent
