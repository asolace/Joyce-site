import React from 'react'
import { Alert } from 'reactstrap';

const Restricted = props => {
  return (
    <div className="restricted-alert">
      <Alert color="danger">
        <strong>Restricted!</strong>
        <br />
        Different password is required to see <strong>{props.name}</strong> pictures.
      </Alert>
    </div>
  )
}

export default Restricted
