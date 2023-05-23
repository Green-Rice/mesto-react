import React, { useEffect, useState } from "react";
import { api } from "../utils/api";
import Card from "./Card";

const Main = ({
   onEditAvatar,
   onEditProfile,
   onAddPlace,
   onCardClick,
   onClose
  }) => {

  const [userName, setUserName] = useState()
  const [userDescription, setUserDescription] = useState()
  const [userAvatar, setUserAvatar] = useState()

  const [cards, setCards] = useState([])

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
      .catch(err => { console.log(err) })
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

          <img className="profile__img" src={userAvatar} alt={userName} />
        </button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__user-name">{userName}</h1>
            <button type="button" className="profile__edit-button"
              onClick={onEditProfile}>

            </button>
          </div>

          <p className="profile__description">{userDescription}</p>
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
            ></Card>
          ))}

      </section>
    </main>
  )
}
export default Main;