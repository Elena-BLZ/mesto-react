import React from "react";

export default function Card({name, link, likes, id, onCardClick}) {

  const card = {
    name: name,
    link: link,
  }
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
          className="element__del-btn button"
          type="button"
          aria-label="Удалить"
        ></button>
      </div>
      <div className="element__info">
        <h2 className="element__name">{name}</h2>
        <button
          className="element__like-btn button"
          type="button"
          aria-label="По нраву мне"
        ></button>
        <span className="element__like-count">{likes.length}</span>
      </div>
    </article>
  );
}
