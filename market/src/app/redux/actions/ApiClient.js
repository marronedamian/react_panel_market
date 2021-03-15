import axios from "axios"

class ApiClient {
  constructor(serverUrl = "https://dev.dact.pe/dactapi", fetcher = axios) {
    this.serverUrl = serverUrl
    this.fetcher = fetcher
  }

  async post(url, data) {
    const response = await this.fetcher.post(`${this.serverUrl}${url}`, data)
    return response.data
  }

  async register(user) {
    return this.post("/usersmarket/register", user)
  }

  async login(credentials) {
    return this.post("/auth/authenticateusermarket", credentials)
  }

  async requestPasswordReset(email) {
    return this.post("/usersmarket/generaterecoverpassword", { email })
  }

  async resetPassword(newPassword, token) {
    return this.post("/usersmarket/recoverpassword", { newPassword, token })
  }
}

export default ApiClient
