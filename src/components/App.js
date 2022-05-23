import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import React,  {useState, useEffect, useContext} from "react";
import ImagePopup from "./ImagePopup";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import {api} from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null); //{name, link}

  const [currentUser, setCurrentUser] = React.useState();


  useEffect(() => {
    api.getProfile()
    .then (res => {
      setCurrentUser(res);
    }).catch(err => console.log(`Ошибка.....: ${err}`));
  }, []); 

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name="profile"
          formName="edit-profile-frm"
          title="Редактировать профиль"
          buttonText="Сохранить"
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="edit-frm__item edit-frm__item_type_name"
            name="name"
            placeholder="Как вас зовут?"
            required
            minLength="2"
            maxLength="40"
          ></input>
          <span id="name-error" className="edit-frm__error-message"></span>
          <input
            type="text"
            className="edit-frm__item edit-frm__item_type_description"
            name="description"
            placeholder="Еще немного о себе."
            required
            minLength="2"
            maxLength="200"
          ></input>
          <span
            id="description-error"
            className="edit-frm__error-message"
          ></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          name="element"
          formName="add-element-frm"
          title="Новое место"
          buttonText="Создать"
          onClose={closeAllPopups}
        >
          <input
            type="text"
            className="edit-frm__item edit-frm__item_type_place"
            name="place"
            placeholder="Название"
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
            required
          ></input>
          <span id="link-error" className="edit-frm__error-message"></span>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          name="avatar"
          formName="avatar-frm"
          title="Обновить аватар"
          buttonText="Сохранить"
          onClose={closeAllPopups}
        >
          <input
            type="url"
            className="edit-frm__item edit-frm__item_type_link"
            name="avatar"
            placeholder="Ссылка на аватар"
            required
          ></input>
          <span id="avatar-error" className="edit-frm__error-message"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button
              className="popup__close-btn button"
              type="button"
              aria-label="Закрыть"
            ></button>
            <form
              className="edit-frm edit-frm_type_confirm"
              name="confirm-frm"
              noValidate
            >
              <h2 className="edit-frm__heading">Вы уверены?</h2>
              <button className="edit-frm__save-btn button" type="submit">
                Да
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
