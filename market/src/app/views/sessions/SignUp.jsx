import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { register } from "../../redux/actions/LoginActions"
import { PhoneInput, TextValidator, PasswordInput } from "@dact/core"
import RegistrationForm from "./RegistrationForm"
import CheckboxInput from "./CheckboxInput"

class SignUp extends Component {
  state = {
    codCountry: "51",
    phone: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    legalAgreement: true,
  }

  handleFormSubmit = () => {
    const user = {
      ...this.state,
      phone: parseInt(this.state.phone, 10),
      codCountry: parseInt(this.state.codCountry, 10)
    }
    this.props.register(user)
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      email,
      password,
      legalAgreement,
    } = this.state

    return (
      <RegistrationForm
        onSubmit={this.handleFormSubmit}
        actionLabel="Registrarse"
        loading={this.props.login.loading}
        error={this.props.login.error}
        leftLink={{
          text: "Entrar",
          to: "/session/signin",
        }}
        rightLink={{
          text: "Recuperar contraseña",
          to: "/session/forgot-password",
        }}
      >
        <TextValidator
          className="mb-6 w-full"
          variant="outlined"
          label="Nombre"
          onChange={(e) => this.setState({ firstName: e.target.value })}
          type="text"
          name="firstName"
          value={firstName}
          validators={["required"]}
          errorMessages={["Este campo es obligatorio"]}
        />
        <TextValidator
          className="mb-6 w-full"
          variant="outlined"
          label="Apellidos"
          onChange={(e) => this.setState({ lastName: e.target.value })}
          type="text"
          name="lastName"
          value={lastName}
          validators={["required"]}
          errorMessages={["Este campo es obligatorio"]}
        />
        <PhoneInput
          className="mb-6 w-full"
          variant="outlined"
          label="Teléfono"
          placeholder="Teléfono"
          defaultCountry="pe"
          onlyCountries={["pe"]}
          type="tel"
          name="phone"
          disableCountryCode
          autoFormat={false}
          onChange={(phone, { dialCode }) => {
            this.setState({ phone, codCountry: dialCode })
          }}
          value={phone}
          validators={["required"]}
          errorMessages={["Este campo es obligatorio"]}
        />
        <TextValidator
          className="mb-6 w-full"
          variant="outlined"
          label="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
          type="email"
          name="email"
          value={email}
          validators={["required", "isEmail"]}
          errorMessages={[
            "Este campo es obligatorio",
            "El correo no es válido",
          ]}
        />
        <PasswordInput
          className="mb-4 w-full"
          label="Password"
          variant="outlined"
          onChange={(e) => this.setState({ password: e.target.value })}
          name="password"
          value={password}
          validators={["required", "isStrong"]}
          errorMessages={[
            "Este campo es obligatorio",
            "La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula y 1 número",
          ]}
        />
        <CheckboxInput
          className="mb-4"
          value={legalAgreement}
          name="legalAgreement"
          onChange={() =>
            this.setState((prevState) => ({
              legalAgreement: !prevState.legalAgreement,
            }))
          }
          label="I have read and agree to the terms of service."
          validators={["isChecked"]}
          errorMessages={["Debe aceptar los términos y condiciones"]}
        />
      </RegistrationForm>
    )
  }
}

const mapStateToProps = (state) => ({
  register: PropTypes.func.isRequired,
  login: state.login,
})

export default connect(mapStateToProps, { register })(SignUp)
