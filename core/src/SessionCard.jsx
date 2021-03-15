import React from "react"
import { Card, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.darkBackground,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
  },
  card: {
    width: "100%",
    maxWidth: "800px",
    height: "fit-content",
    borderRadius: "12px !important",
    position: "relative",
    margin: theme.spacing(3),
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const SessionCard = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.card}>{children}</Card>
    </div>
  )
}

export default SessionCard
