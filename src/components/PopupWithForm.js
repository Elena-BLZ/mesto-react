import React from 'react'

export default function PopupWithForm({ isOpen, name, children, onClose }) {  
    const className = `popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`;
  return (
    <div className={className}>
      <div className="popup__container">
        <button onClick={onClose} className="popup__close-btn button" type="button" aria-label="Закрыть">
        </button>
        {children}
        </div>
    </div>
  )
}
