import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";
import Card from "./Card";

const Main = ({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onClose,
  onCardLike
}) => {

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getStarterCards().then((data) => {
      setCards(data)
    })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <button type="button"
          className="button profile__avatar-changes"
          onClick={onEditAvatar}>

          <img className="profile__img" src={currentUser.avatar} alt={currentUser.name} />
        </button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__user-name">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button"
              onClick={onEditProfile}>
            </button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>

        <button type="button"
          className="profile__add-button"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onClose={onClose}
            {...card}
            onCardLike={onCardLike}
          ></Card>
        ))}

      </section>
    </main>
  )
}
export default Main;