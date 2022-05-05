import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import React from 'react'




function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

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
  }

  const forms = {
    EditAvatarForm:  (
      <form className="edit-frm edit-frm_type_avatar" name="avatar-frm" novalidate>
        <h2 className="edit-frm__heading">Обновить аватар</h2>
        <input type="url" className="edit-frm__item edit-frm__item_type_link" name="avatar"
          placeholder="Ссылка на аватар" required></input>
        <span id="avatar-error" className="edit-frm__error-message"></span>
        <button className="edit-frm__save-btn" type='submit'>Сохранить</button>
      </form>
    ),
    EditProfileForm:   (
      <form className="edit-frm edit-frm_type_profile" name="edit-profile-frm" novalidate>
      <h2 className="edit-frm__heading">Редактировать профиль</h2>
      <input type="text" className="edit-frm__item edit-frm__item_type_name" name="name" placeholder="Как вас зовут?"
        required minlength="2" maxlength="40"></input>
      <span id="name-error" className="edit-frm__error-message"></span>
      <input type="text" className="edit-frm__item edit-frm__item_type_description" name="description"
        placeholder="Еще немного о себе." required minlength="2" maxlength="200"></input>
      <span id="description-error" className="edit-frm__error-message"></span>
      <button className="edit-frm__save-btn button" type='submit'>Сохранить</button>
    </form>
    ),
    AddPlaceForm: (
      <form className="edit-frm edit-frm_type_element" name="add-element-frm" novalidate>
      <h2 className="edit-frm__heading">Новое место</h2>
      <input type="text" className="edit-frm__item edit-frm__item_type_place" name="place"
        placeholder="Название" required minlength="2" maxlength="30"></input>
      <span id="place-error" className="edit-frm__error-message"></span>
      <input type="url" className="edit-frm__item edit-frm__item_type_link" name="link"
        placeholder="Ссылка на картинку" required></input>
      <span id="link-error" className="edit-frm__error-message"></span>
      <button className="edit-frm__save-btn" type='submit'>Создать</button>
    </form>
    )
  };


  return (
  <div class="page">
   <div className="page__container">
     <Header />
     <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
     <Footer />
     <PopupWithForm isOpen={isEditProfilePopupOpen} name='profile' children = {forms.EditProfileForm} onClose = {closeAllPopups}/>
     <PopupWithForm isOpen={isAddPlacePopupOpen} name='element' children = {forms.AddPlaceForm} onClose = {closeAllPopups}/>
     <PopupWithForm isOpen={isEditAvatarPopupOpen} name='avatar' children = {forms.EditAvatarForm} onClose = {closeAllPopups}/>
  </div>

  

  <template className="element-template">
    <article className="element">
      <div className="element__photo-container">
        <img className="element__photo button"></img>
        <button className="element__del-btn button" type="button" aria-label="Удалить"></button>
      </div>
      <div className="element__info">
        <h2 className="element__name"></h2>
        <button className="element__like-btn button" type="button" aria-label="По нраву мне"></button>
        <span className="element__like-count">1</span>
      </div>
    </article>
  </template>
   
   
   </div>
  );
}

export default App;
