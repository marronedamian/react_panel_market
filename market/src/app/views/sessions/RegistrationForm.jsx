import React, { useEffect } from "react"
import {
  makeStyles,
  Button,
  CircularProgress,
  FormLabel,
} from "@material-ui/core"
import { ValidatorForm, SessionCard } from "@dact/core"
import { useClearLogin } from "../../redux/actions/LoginActions"
import DactLink from "./DactLink"

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  errorMessage: {
    marginBottom: theme.spacing(3),
  },
  buttonWrapper: {
    position: "relative",
    marginTop: theme.spacing(1),
  },
  submit: {
    width: "100%",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: theme.spacing(2),
  },
  leftLink: {
    marginRight: theme.spacing(3),
  },
  logo: {
    margin: theme.spacing(3, 0),
    height: "60px",
  }
}))

const RegistrationForm = (props) => {
  const {
    onSubmit,
    children,
    leftLink,
    rightLink,
    actionLabel,
    loading,
    error,
  } = props

  const clear = useClearLogin()
  useEffect(() => {
    return clear
  }, [clear]);

  const classes = useStyles()

  return (
    <SessionCard>
      <img
        className={classes.logo}
        src="/assets/images/logo_color.png"
        alt="dact"
      />
      <ValidatorForm onSubmit={onSubmit} className={classes.form}>
        {error && (
          <FormLabel error className={classes.errorMessage} component="p">
            {error}
          </FormLabel>
        )}
        {children}
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.submit}
            variant="contained"
            color="primary"
            disabled={loading}
            type="submit"
          >
            {actionLabel}
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
        <div className={classes.linkWrapper}>
          <DactLink
            to={leftLink.to}
            text={leftLink.text}
            className={classes.leftLink}
          />
          <DactLink to={rightLink.to} text={rightLink.text} />
        </div>
      </ValidatorForm>
    </SessionCard>
  )
}

export default RegistrationForm
