import Header from './Header';
import Footer from './Footer';
import Main from './Main';



function App() {
  return (
  <div class="page">
   <div className="page__container">
     <Header />
     <Main />
     <Footer />
   
    
    
  </div>

  <div className="popup popup_type_profile">
    <div className="popup__container">
      <button className="popup__close-btn button" type="button" aria-label="Закрыть">
      </button>
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
    </div>
  </div>
  <div className="popup popup_type_element">
    <div className="popup__container">
      <button className="popup__close-btn button" type="button" aria-label="Закрыть">
      </button>
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
    </div>
  </div>
  <div className="popup popup_type_confirm">
    <div className="popup__container">
      <button className="popup__close-btn button" type="button" aria-label="Закрыть">
      </button>
      <form className="edit-frm edit-frm_type_confirm" name="confirm-frm" novalidate>
        <h2 className="edit-frm__heading">Вы уверены?</h2>
        <button className="edit-frm__save-btn button" type='submit'>Да</button>
      </form>
    </div>
  </div>
  <div className="popup popup_type_avatar">
    <div className="popup__container">
      <button className="popup__close-btn button" type="button" aria-label="Закрыть">
      </button>
      <form className="edit-frm edit-frm_type_avatar" name="avatar-frm" novalidate>
        <h2 className="edit-frm__heading">Обновить аватар</h2>
        <input type="url" className="edit-frm__item edit-frm__item_type_link" name="avatar"
          placeholder="Ссылка на аватар" required></input>
        <span id="avatar-error" className="edit-frm__error-message"></span>
        <button className="edit-frm__save-btn" type='submit'>Сохранить</button>
      </form>
    </div>
  </div>
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
