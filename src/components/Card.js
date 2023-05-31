import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick }) => {

  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `element__like-btn ${isLiked && 'element__like-btn_active'}`
  );

  const handleClickImg = () => {
    onCardClick({
      isOpen: true,
      item: card,
    });
  }

  return (
    <article className="element">
      <img className="element__img" src={card.link} alt={card.name} onClick={handleClickImg} />
      {isOwn && <button className='element__trash element__trash_active'/>}
      <div className="element__description">
        <h2 className="element__caption">{card.name}</h2>
        <div className="element__counter">
          <button type="button" className={cardLikeButtonClassName}></button>
          <div className="element__count">{card.likes.length}</div>
        </div>
      </div>
    </article>
  )
}
export default Card;