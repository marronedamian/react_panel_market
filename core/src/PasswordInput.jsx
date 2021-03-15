import React from "react"
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"

ValidatorForm.addValidationRule("isStrong", (value) =>
  /(?=^.{8,}$)((?=.*\w)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]))^.*/g.test(value),
)

const PasswordInput = (props) => <TextValidator {...props} type="password" />

export default PasswordInput
