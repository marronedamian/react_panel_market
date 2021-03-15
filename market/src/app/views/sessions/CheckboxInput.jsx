import React from "react"
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core"
import { ValidatorComponent, ValidatorForm } from "@dact/core"

ValidatorForm.addValidationRule("isChecked", (value) => value)

class CheckboxInput extends ValidatorComponent {
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
      // Custom props
      label,
      name,
      value,
      onChange,
      ...rest
    } = this.props

    const { isValid } = this.state

    return (
      <FormControl error={error || !isValid} component="fieldset" {...rest}>
        <FormControlLabel
          control={<Checkbox checked={value} onChange={onChange} name={name} />}
          label={label}
        />
        {(!isValid || error) && (
          <FormHelperText>
            {(!isValid && this.getErrorMessage()) || helperText}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
}

export default CheckboxInput
