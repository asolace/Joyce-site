import React, { Component } from 'react'
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, FormFeedback, Label, Input
} from 'reactstrap';

class Home extends Component {
  state = {
    modal: false,
    userInputPassword: '',
    formStatus: '',
    passwordPlaceholder: 'My Password'
  }

  toggleModal = () => this.setState({ modal: !this.state.modal })
  onPassChange = event => this.setState({ userInputPassword: event.target.value })

  submitPassword = () => {
    if (this.state.userInputPassword === 'boogerbutt') {
      console.log('correct pass')
    } else {
      this.setState({
        formStatus: 'danger',
        passwordPlaceholder: 'My Correct Password!'
      })
    }
  }

  render() {
    return (
      <div className="home-container">
        <Button onClick={this.toggleModal} outline color="warning">Check out some of my Pictures!</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="login-modal">
            <ModalHeader toggle={this.toggleModal}>My Private Pictures!</ModalHeader>
            <ModalBody>
              Please enter password to see my private pictures...
            </ModalBody>
            <Form>
              <FormGroup color={this.state.formStatus}>
                <Label for="password">Password</Label>
                <Input type="password" id="password" placeholder={this.state.passwordPlaceholder} onChange={this.onPassChange}/>
                {this.state.formStatus ? <FormFeedback>That is NOT my password...</FormFeedback> : <div></div>}
              </FormGroup>
            </Form>

            <ModalFooter>
              <Button color="primary" onClick={this.submitPassword}>LET ME SEE!</Button>
              <Button color="secondary" onClick={this.toggleModal}>Never mind...</Button>
            </ModalFooter>
          </Modal>
      </div>
    )
  }
}

// render() {
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//     const { redirectToReferrer } = this.state
//
//     if (redirectToReferrer) {
//       return (
//         <Redirect to={from}/>
//       )
//     }
//
//     return (
//       <div>
//         <p>You must log in to view the page at {from.pathname}</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// }

export default Home
