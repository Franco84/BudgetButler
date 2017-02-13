import React, {Component} from 'react'

export default class UserSignUp extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
      event.preventDefault()
      const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input ref="name" />
        <input ref="email" />
        <input type="password" ref="userPassword" />
        <input type="password" ref="passwordConfirmation" />
        <button type="submit">Submit</button>
        </form>
      </div>
    )
  }

}
