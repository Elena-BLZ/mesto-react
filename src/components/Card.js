import React, { useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

//<Card name={card.name} link={card.link} likes={card.likes} key={card.id} onCardClick={onCardClick}/>
export default function Card({name, link, likes, ownerId, id, onCardClick}) {

  const currentUser = useContext(CurrentUserContext);

  const card = {
    name: name,
    link: link,
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = ownerId === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `element__del-btn button ${!isOwn && 'element__del-btn_hidden'}`
  ); 

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = likes.some(i => i._id === currentUser._id);

  // // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (`element__like-btn button ${isLiked && 'element__like-btn_active'}`);



  function handleClick() {
    onCardClick(card);
  }  
  return ( 
    <article className="element">
      <div className="element__photo-container">
        <img
          onClick={handleClick}
          className="element__photo button"
          src={link}
          alt={name}
        ></img>
        <button
          className={cardDeleteButtonClassName}
          type="button"
          aria-label="Удалить"
        ></button>
      </div>
      <div className="element__info">
        <h2 className="element__name">{name}</h2>
        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="По нраву мне"
        ></button>
        <span className="element__like-count">{likes.length}</span>
      </div>
    </article>
  );
}
