import React from 'react'

export default function ImagePopup() {
  return (
    <div className="popup popup_type_picture">
    <div className="popup__container popup__container_type_picture">
      <button className="popup__close-btn button" type="button" aria-label="Закрыть">
      </button>
      <figure className="popup__figure">
        <img className="popup__picture"></img>
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </div>
  </div>
  )
}
