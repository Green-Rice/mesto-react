import React from "react";
function Main() {
    return (
<main class="content">
          <section class="profile">
            <button type="button" class="button profile__avatar-changes">
              <img class="profile__img" src="<%=require('./images/Jac.jpg')%>" alt="аватар" />
            </button>
            <div class="profile__info">
              <div class="profile__wrapper">
                <h1 class="profile__user-name">Жак-Ив Кусто</h1>
                <button type="button" class="profile__edit-button"></button>
              </div>

              <p class="profile__description">Исследователь океана</p>
            </div>

            <button type="button" class="profile__add-button"></button>
          </section>

          <section class="elements"></section>
        </main>
    )
}
export default Main;