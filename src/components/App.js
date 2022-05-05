import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import React from 'react';
import ImagePopup from './ImagePopup';




function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null); //{name, link}

  function handleCardClick (card) {
    setSelectedCard (card);
  }

  function handleEditAvatarClick () {
    setisEditAvatarPopupOpen (true);

  }
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen (true);
  }
  function handleAddPlaceClick () {
    setisAddPlacePopupOpen (true);
  }

  function closeAllPopups () {
    setisEditAvatarPopupOpen (false);
    setIsEditProfilePopupOpen (false);
    setisAddPlacePopupOpen (false);
    setSelectedCard (null);
  }

  const forms = {
    EditAvatarForm:  (
      <form className="edit-frm edit-frm_type_avatar" name="avatar-frm" noValidate>
        <h2 className="edit-frm__heading">Обновить аватар</h2>
        <input type="url" className="edit-frm__item edit-frm__item_type_link" name="avatar"
          placeholder="Ссылка на аватар" required></input>
        <span id="avatar-error" className="edit-frm__error-message"></span>
        <button className="edit-frm__save-btn" type='submit'>Сохранить</button>
      </form>
    ),
    EditProfileForm:   (
      <form className="edit-frm edit-frm_type_profile" name="edit-profile-frm" noValidate>
      <h2 className="edit-frm__heading">Редактировать профиль</h2>
      <input type="text" className="edit-frm__item edit-frm__item_type_name" name="name" placeholder="Как вас зовут?"
        required minLength="2" maxLength="40"></input>
      <span id="name-error" className="edit-frm__error-message"></span>
      <input type="text" className="edit-frm__item edit-frm__item_type_description" name="description"
        placeholder="Еще немного о себе." required minLength="2" maxLength="200"></input>
      <span id="description-error" className="edit-frm__error-message"></span>
      <button className="edit-frm__save-btn button" type='submit'>Сохранить</button>
    </form>
    ),
    AddPlaceForm: (
      <form className="edit-frm edit-frm_type_element" name="add-element-frm" noValidate>
      <h2 className="edit-frm__heading">Новое место</h2>
      <input type="text" className="edit-frm__item edit-frm__item_type_place" name="place"
        placeholder="Название" required minLength="2" maxLength="30"></input>
      <span id="place-error" className="edit-frm__error-message"></span>
      <input type="url" className="edit-frm__item edit-frm__item_type_link" name="link"
        placeholder="Ссылка на картинку" required></input>
      <span id="link-error" className="edit-frm__error-message"></span>
      <button className="edit-frm__save-btn" type='submit'>Создать</button>
    </form>
    )
  };


  return (
  <div className="page">
   <div className="page__container">
     <Header />
     <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
     <Footer />
     <PopupWithForm isOpen={isEditProfilePopupOpen} name='profile' children = {forms.EditProfileForm} onClose = {closeAllPopups}/>
     <PopupWithForm isOpen={isAddPlacePopupOpen} name='element' children = {forms.AddPlaceForm} onClose = {closeAllPopups}/>
     <PopupWithForm isOpen={isEditAvatarPopupOpen} name='avatar' children = {forms.EditAvatarForm} onClose = {closeAllPopups}/>
     <ImagePopup card ={selectedCard} onClose={closeAllPopups}/>
  </div>

  

  
   
   
   </div>
  );
}

export default App;
