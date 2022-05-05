import React from 'react'

export default function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  

  return (
    <>
    <main classNameName="page__content">
      <section className="profile page__profile">
        <img src="#" alt="Аватар" className="profile__avatar"></img>
        <button onClick={onEditAvatar} className="profile__avatar-btn" type="button" aria-label="Редактировать аватар"></button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name"></h1>
            <button onClick={onEditProfile} className="profile__edit-btn button" type="button" aria-label="Редактировать профиль"></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button onClick={onAddPlace} className="profile__add-btn button" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements">
      </section>

    </main>

    

    

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


  </>
  )
}
