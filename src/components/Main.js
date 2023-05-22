import React, { useEffect, useState } from "react";
import { api } from "../utils/api";

const Main = (props) => {

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
    api.getStarterCards().then(data => {
      console.log(data);
      setCards(data)
    })
      .catch(err => { console.log(err) })
  }, [])


  return (

    <main className="content">
      <section className="profile">
        <button type="button"
          className="button profile__avatar-changes"
          onClick={props.onEditAvatar}>

          <img className="profile__img" src={userAvatar} alt={userName} />
        </button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__user-name">{userName}</h1>
            <button type="button" className="profile__edit-button"
              onClick={props.onEditProfile}>

            </button>
          </div>

          <p className="profile__description">{userDescription}</p>
        </div>

        <button type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}>
        </button>

      </section>

      <section className="elements">
      {/* console.log(cards); */}
        {cards.map((card, _id) => (
          <template key={_id} class="template-element">
            <article class="element">
              <img class="element__img" src={card.link} alt={card.name} />
              <button type="button" class="element__trash"></button>
              <div class="element__description">
                <h2 class="element__caption">{card.name}</h2>
                <div class="element__counter">
                  <button type="button" class="element__like-btn"></button>
                  <div class="element__count">{card.likes}</div>
                </div>
              </div>
            </article>
            </template>
        ))}

      </section>
    </main>
  )
}
export default Main;