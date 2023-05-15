import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Fotter";

function App() {
  return (
    <>
      <div class="page">
      <Header />
      <Main />
      <Footer />


  {/* // ПОПАП ПРОФИЛЯ */}
        <div class="popup popup_type_edit">
          <div class="popup__content">
            <button type="button" class="popup__close"></button>

            <h3 class="popup__title">Редактировать профиль</h3>

            <form name="edit_form" class="popup__form" novalidate>
              <input id="name-input" name="user_name" class="popup__input popup__input_type_name " type="text"
                placeholder="Имя" required minlength="2" maxlength="40" />
              <span class="popup__input-error name-input-error"></span>

              <input id="bio-input" name="biography" class="popup__input popup__input_type_description" type="text"
                placeholder="О тебе" required minlength="2" maxlength="200" />
              <span class="popup__input-error bio-input-error ">Необходимо заполнить пол</span>

              <button class="popup__submit" type="submit" disabled>Сохранить</button>
            </form>
          </div>
        </div>
  {/* // ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ */}
        <div class="popup popup_type_add">
          <div class="popup__content">
            <button type="button" class="popup__close"></button>

            <h3 class="popup__title">Новое место</h3>

            <form name="edit_form" class="popup__form" novalidate>
              <div class="popup__container">
                <input id="name-card" name="name" class="popup__input popup__input_type_title" type="text"
                  placeholder="Название" required minlength="2" maxlength="30" />
                <span class="popup__input-error name-card-error popup__input-error_active"></span>
              </div>

              <div class="popup__container">
                <input id="link-card" name="link" class="popup__input popup__input_type_link" type="url"
                  placeholder="Ссылка на картинку" required />
                <span class="popup__input-error link-card-error"></span>

              </div>
              <button class="popup__submit" type="submit" disabled>Создать</button>

            </form>
          </div>
        </div>
  {/* // ПОПАП ОТКРЫТИЯ КАРТОЧКИ */}
        <div class="popup popup_type_review">
          <div class="popup__view">
            <button type="button" class="popup__close"></button>
            <img class="popup__img"
              src="https://avatars.mds.yandex.net/i?id=65fc6c1c9001dc0dd85f0d14bd52438f1433e6b5-8177627-images-thumbs&n=13"
              alt="" />
            <h3 class="popup__description">Имя карточки</h3>
          </div>
        </div>

  {/* // ПОПАП УДАЛЕНИЯ КАРТОЧКИ */}
        <div class="popup popup_type_confirm">
          <div class="popup__content">
            <button type="button" class="popup__close"></button>

            <form class="popup__form">
              <h3 class="popup__title popup__title_confirm">Вы уверены?</h3>
              <button class="popup__submit popup__submit_confirm" type="submit" >Да</button>
            </form>

          </div>
        </div>

  {/* // ПОПАП РЕДАКТИРОВАНИЯ АВАТАРА UPDATE AVATAR */}
        <div class="popup popup_type_update-avatar">
          <div class="popup__content">
            <button type="button" class="popup__close"></button>

            <h3 class="popup__title">Обновить аватар</h3>

            <form name="edit_form" class="popup__form" novalidate>

              <div class="popup__container">
                <input id="avatar-link" name="link" class="popup__input popup__input_type_link" type="url"
                  placeholder="Ссылка на изображение" required />
                <span class="popup__input-error avatar-link-error"></span>
              </div>
              <button class="popup__submit" type="submit" >Сохранить</button>

            </form>
          </div>
        </div>

  {/* // ТЕМПЛЕЙ ЭЛЕМЕНТ */}
        <template class="template-element">
          <article class="element">
            <img class="element__img" src="#" alt="картинка" />
            <button type="button" class="element__trash"></button>
            <div class="element__description">
              <h2 class="element__caption"></h2>
              <div class="element__counter">
                <button type="button" class="element__like-btn"></button>
                <div class="element__count">0</div>
              </div>
            </div>
          </article>
        </template>
      </div>
    </>
  );
}

export default App;
