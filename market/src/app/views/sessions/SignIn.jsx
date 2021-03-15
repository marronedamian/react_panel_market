import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { TextValidator, PasswordInput } from "@dact/core"
import { login } from "../../redux/actions/LoginActions"
import RegistrationForm from "./RegistrationForm"

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = (event) => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleFormSubmit = (event) => {
    this.props.login(this.state)
  }
  
  render() {
    let { email, password } = this.state

    return (
      <RegistrationForm
        onSubmit={this.handleFormSubmit}
        actionLabel="Entrar"
        loading={this.props.loginState.loading}
        error={this.props.loginState.error}
        leftLink={{
          text: "Registrarse",
          to: "/session/signup",
        }}
        rightLink={{
          text: "Recuperar contraseña",
          to: "/session/forgot-password",
        }}
      >
        <TextValidator
          className="mb-6 w-full"
          variant="outlined"
          label="Correo electrónico"
          onChange={this.handleChange}
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
          className="mb-3 w-full"
          label="Contraseña"
          variant="outlined"
          onChange={this.handleChange}
          name="password"
          value={password}
          validators={["required", "isStrong"]}
          errorMessages={[
            "Este campo es obligatorio",
            "La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula y 1 número",
          ]}
        />
      </RegistrationForm>
    )
  }
}

const mapStateToProps = (state) => ({
  login: PropTypes.func.isRequired,
  loginState: state.login,
})

export default connect(mapStateToProps, { login })(SignIn)
