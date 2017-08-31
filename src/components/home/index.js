import React, { Component } from 'react'
import {
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

class Home extends Component {
  state = {
    modal: false,
  }

  toggleModal = () => this.setState({ modal: !this.state.modal })

  submitPassword = () => {

  }

  render() {
    return (
      <div className="home-container">
        <Button onClick={this.toggleModal} outline color="warning">Check out some of my Pictures!</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
            <ModalBody>
              Please enter password to see my private pictures...
            </ModalBody>
            <Form>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
            </Form>

            <ModalFooter>
              <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
      </div>
    )
  }
}

export default Home
