import React from "react";

export default function PopupWithForm({
  isOpen,
  name,
  formName,
  title,
  buttonText,
  onClose,
  children,
}) {
  const className = `popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`;
  return (
    <div className={className}>
      <div className="popup__container">
        <button
          onClick={onClose}
          className="popup__close-btn button"
          type="button"
          aria-label="Закрыть"
        ></button>
        <form
          className={`edit-frm edit-frm_type_${name}`}
          name={formName}
          noValidate
        >
          <h2 className="edit-frm__heading">{title}</h2>
          {children}
          <button className="edit-frm__save-btn" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
