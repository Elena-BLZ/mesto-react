import React from 'react'

export default function Main() {
  return (
    <main classNameName="page__content">
      <section className="profile page__profile">
        <img src="#" alt="Аватар" className="profile__avatar"></img>
        <button  className="profile__avatar-btn" type="button" aria-label="Редактировать аватар"></button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name"></h1>
            <button className="profile__edit-btn button" type="button" aria-label="Редактировать профиль"></button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button className="profile__add-btn button" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements">
      </section>

    </main>
  )
}
