import React from "react";
const Main = (props) => {
    return (
<main className="content">
          <section className="profile">
            <button type="button"
                    className="button profile__avatar-changes"
                    onClick={props.onEditAvatar}>

              <img className="profile__img" src="<%=require('./images/Jac.jpg')%>" alt="аватар" />
            </button>
            <div className="profile__info">
              <div className="profile__wrapper">
                <h1 className="profile__user-name">Жак-Ив Кусто</h1>
                <button type="button" className="profile__edit-button"
                onClick={props.onEditProfile}>

                </button>
              </div>

              <p className="profile__description">Исследователь океана</p>
            </div>

            <button type="button"
                    className="profile__add-button"
                    onClick={props.onAddPlace}>
                    </button>

          </section>

          <section className="elements"></section>
        </main>
    )
}
export default Main;