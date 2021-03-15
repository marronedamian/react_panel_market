import React from "react"
import MuiPhoneNumber from "material-ui-phone-number"
import { ValidatorComponent } from "react-material-ui-form-validator"

class PhoneInput extends ValidatorComponent {
  renderValidatorComponent() {
    const {
      error,
      errorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      containerProps,
      ...rest
    } = this.props
    const { isValid } = this.state
    return (
      <MuiPhoneNumber
        {...rest}
        error={!isValid || error}
        helperText={(!isValid && this.getErrorMessage()) || helperText}
      />
    )
  }
}

export default PhoneInput
