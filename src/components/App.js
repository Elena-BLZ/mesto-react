import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import React, { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null); //{name, link}

  const [currentUser, setCurrentUser] = React.useState();

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCardsData(res);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
  }, []);

  function handleCardLike(id, isLiked) {
    api.changeLikeCardStatus(id, isLiked).then((newCard) => {
      setCardsData((state) => state.map((c) => (c._id === id ? newCard : c)));
    });
  }

  function handleCardDelete(id) {
    api.deleteCard(id).then(() => {
      setCardsData((state) => state.filter((c) => c._id !== id));
    });
  }

  useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(`Ошибка.....: ${err}`));
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

  function handleUpdateUser({ name, description }) {
    api.editProfile(name, description).then(() => {
      setCurrentUser((state) => {
        return { ...state, name: name, about: description };
      });
      closeAllPopups();
    });
  }

  function handleUpdateAvatar(avatar) {
    api.editAvatar(avatar.link).then(() => {
      setCurrentUser((state) => {
        return { ...state, avatar: avatar.link };
      });
      closeAllPopups();
    });
  }

  function handleAddPlaceSubmit({ place, link }) {
    api.addCard(place, link).then((newCard) => {
      setCardsData([newCard, ...cardsData]);
    });
    closeAllPopups();
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
            cards={cardsData}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

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
