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
      const UIP = status.userInputPassword
      return(
        <div className="april-photo-container">

          {UIP === 'apple' || UIP === 'pineapple' || UIP === 'jackster' ?
            <AprilImageCards /> :
              <Restricted name="April"/>
            }

          {UIP === 'pineapple' || UIP === 'jackster' ?
            <MostPrivateAprilCards /> :
              <Restricted name="More Privated April"/>
            }

          {UIP === 'joy' || UIP === 'jackster' ?
            <JoyceImageCards /> :
              <Restricted name="Joyce"/>
            }

          {UIP === 'winner' || UIP === 'jackster' ?
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
