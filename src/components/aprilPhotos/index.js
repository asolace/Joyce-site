import React, { Component } from 'react'
import { Alert } from 'reactstrap';
import AprilImageCards from './aprilImageCards'
import MostPrivateAprilCards from './mostPrivateAprilCards'

class AprilPhotos extends Component {
  render() {
    const status = this.props.location.state
    if (status) {
      return(
        <div className="april-photo-container">
          <AprilImageCards />
          {status.userInputPassword === 'head' ?
            <MostPrivateAprilCards /> :
              <div className="restricted-alert">
                <Alert color="danger">
                  <strong>Restricted!</strong>
                  <br />
                  Higher Access Clearance is required.
                </Alert>
              </div>
             }
        </div>
      )
    } else {
      return(
        <div className="unauth-april-photos">
          You sneaky deaky... You're not allowed to see my privite photos!
        </div>
      )
    }

  }
}

export default AprilPhotos
