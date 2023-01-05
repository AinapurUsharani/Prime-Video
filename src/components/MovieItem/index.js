import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {EachImage} = props
  const {thumbnailUrl, videoUrl} = EachImage

  return (
    <li className="list-item">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="pop-container">
            <button
              type="button"
              onClick={() => close()}
              className="close-button"
              data-testid="closeButton"
            >
              <IoMdClose size="32" />
            </button>

            <ReactPlayer url={videoUrl} controls="false" className="video" />
          </div>
        )}
      </Popup>
    </li>
  )
}

export default MovieItem
