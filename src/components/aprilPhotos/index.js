import React, { Component } from 'react'
import AprilImageCards from './aprilImageCards'

class AprilPhotos extends Component {
  render() {
    if (this.props.location.state) {
      return(
        <div className="april-photo-container">
          <AprilImageCards />
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
