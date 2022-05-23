import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {
  const currentUser = useContext(CurrentUserContext);
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

  function handleCardDelete (id) {
    api.deleteCard (id).then (()=>{
      setCardsData((state)=>state.filter(c=>
         c._id!==id));
    })

  }

  return (
    <main className="page__content">
      <section className="profile page__profile">
        <img
          src={currentUser && currentUser.avatar}
          alt="Аватар"
          className="profile__avatar"
        ></img>
        <button
          onClick={onEditAvatar}
          className="profile__avatar-btn"
          type="button"
          aria-label="Редактировать аватар"
        ></button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser && currentUser.name}</h1>
            <button
              onClick={onEditProfile}
              className="profile__edit-btn button"
              type="button"
              aria-label="Редактировать профиль"
            ></button>
          </div>
          <p className="profile__description">
            {currentUser && currentUser.about}
          </p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-btn button"
          type="button"
          aria-label="Добавить"
        ></button>
      </section>
      <section className="elements">
        {cardsData.map((card) => {
           const cardId = card._id;
          return (
          <Card
            key={cardId}
            ownerId={card.owner._id}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cardData = {card}
          />
        )})}
      </section>
    </main>
  );
}
