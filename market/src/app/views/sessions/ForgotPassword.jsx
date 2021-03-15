import React, { Component } from "react"
import { TextValidator } from "@dact/core"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { requestResetPassword } from "../../redux/actions/LoginActions"
import RegistrationForm from "./RegistrationForm"

class ForgotPassword extends Component {
  state = {
    email: "",
  }

  handleChange = (event) => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleFormSubmit = () => {
    this.props.requestResetPassword(this.state.email)
  }

  render() {
    let { email } = this.state

    return (
      <RegistrationForm
        onSubmit={this.handleFormSubmit}
        actionLabel="Recuperar contraseña"
        loading={this.props.login.loading}
        error={this.props.login.error}
        leftLink={{
          text: "Entrar",
          to: "/session/signin",
        }}
        rightLink={{
          text: "Registrarse",
          to: "/session/signup",
        }}
      >
        <TextValidator
          className="mb-6 w-full"
          variant="outlined"
          label="Correo"
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
      </RegistrationForm>
    )
  }
}

const mapStateToProps = (state) => ({
  requestResetPassword: PropTypes.func.isRequired,
  login: state.login,
})

export default connect(mapStateToProps, { requestResetPassword })(ForgotPassword)
