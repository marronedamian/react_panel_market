import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PasswordInput } from "@dact/core"
import { resetPassword } from "../../redux/actions/LoginActions"
import RegistrationForm from "./RegistrationForm"

class ResetPassword extends Component {
  state = {
    password: "",
  }

  handleChange = (event) => {
    event.persist()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleFormSubmit = () => {
    const token = (new URLSearchParams(this.props.location.search)).get("token")
    this.props.resetPassword(this.state.password, token)
  }

  render() {
    let { password } = this.state

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
  resetPassword: PropTypes.func.isRequired,
  login: state.login,
})

export default withRouter(connect(mapStateToProps, { resetPassword })(ResetPassword))
