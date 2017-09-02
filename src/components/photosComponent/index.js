import React, { Component } from 'react'
import AprilImageCards from '../aprilPhotos/aprilImageCards'
import JoyceImageCards from '../joycePhotos/joyceImageCards'
import WinnyImageCards from '../winnyPhotos/winnyImageCards'

import MostPrivateAprilCards from '../aprilPhotos/mostPrivateAprilCards'
import Restricted from './restricted'

class Photos extends Component {
  render() {
    const status = this.props.location.state
    if (status) {
      return(
        <div className="april-photo-container">

          {status.userInputPassword === 'apple' || status.userInputPassword === 'pineapple' ?
            <AprilImageCards /> :
              <Restricted name="April"/>
            }

          {status.userInputPassword === 'pineapple' ?
            <MostPrivateAprilCards /> :
              <Restricted name="More Privated April"/>
            }

          {status.userInputPassword === 'joy' ?
            <JoyceImageCards /> :
              <Restricted name="Joyce"/>
            }

          {status.userInputPassword === 'winner' ?
            <WinnyImageCards /> :
              <Restricted name="Winny"/>
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

export default Photos
