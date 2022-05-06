import React, {useState, useEffect} from 'react';
import { api } from '../utils/Api';
import Card from './Card';

export default function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cardsData, setCardsData] = useState([]);
 
  useEffect(() => {

    api.getProfile()
    .then (res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    }).catch(err => console.log(`Ошибка.....: ${err}`));

    api.getInitialCards()
    .then(
      res => {
        setCardsData(res);
      })
    .catch(err => console.log(`Ошибка.....: ${err}`))
  }, []); 

  return (
    
    <main className="page__content">
      <section className="profile page__profile">
        <img src={userAvatar} alt="Аватар" className="profile__avatar"></img>
        <button onClick={onEditAvatar} className="profile__avatar-btn" type="button" aria-label="Редактировать аватар"></button>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} className="profile__edit-btn button" type="button" aria-label="Редактировать профиль"></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-btn button" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements">
      {
        cardsData.map((card) => (
          <Card name={card.name} link={card.link} likes={card.likes} key={card.id} onCardClick={onCardClick}/>
        ))
      }      
      </section>
    </main>
  
  )
}
