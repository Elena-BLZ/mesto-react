import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [place, setPlace] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      place,
      link,
    });
    setPlace("");
    setLink("");
  }
  function handlePlaceChange(e) {
    setPlace(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  function handleClose() {
    onClose();
    setPlace("");
    setLink("");
  }
  return (
    <PopupWithForm
      isOpen={isOpen}
      name="element"
      formName="add-element-frm"
      title="Новое место"
      buttonText="Создать"
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="edit-frm__item edit-frm__item_type_place"
        name="place"
        placeholder="Название"
        value={place}
        onChange={handlePlaceChange}
        required
        minLength="2"
        maxLength="30"
      ></input>
      <span id="place-error" className="edit-frm__error-message"></span>
      <input
        type="url"
        className="edit-frm__item edit-frm__item_type_link"
        name="link"
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleLinkChange}
        required
      ></input>
      <span id="link-error" className="edit-frm__error-message"></span>
    </PopupWithForm>
  );
}
