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
  onFormSubmit = event => {
    event.preventDefault()
    this.submitPassword()
  }

  submitPassword = () => {
    if (this.state.userInputPassword === 'apple' || 'pineapple') {
      this.props.history.push({
        pathname: '/aprilphotos',
        state: {
          isAuth: true,
          userInputPassword: this.state.userInputPassword
        }
      })
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
            <Form onSubmit={this.onFormSubmit}>
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

export default Home
