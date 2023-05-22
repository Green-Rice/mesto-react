import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Fotter";
import { useState } from 'react';
import PopupWithForm from "./PopupWithForm.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      >
      </Main>
      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name="avatar"
        title="Обновить аватар"

        submit="Сохранить">
        <div className="popup__container">
          <input id="avatar-link" name="link" className="popup__input popup__input_type_link" type="url"
            placeholder="Ссылка на изображение" required />
          <span className="popup__input-error avatar-link-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name="edit"
        title="Редактировать профиль"
        submit="Сохранить">

        <input id="name-input" name="user_name" className="popup__input popup__input_type_name " type="text"
          placeholder="Имя" required minlength="2" maxlength="40" />
        <span className="popup__input-error name-input-error"></span>

        <input id="bio-input" name="biography" className="popup__input popup__input_type_description" type="text"
          placeholder="О тебе" required minlength="2" maxlength="200" />
        <span className="popup__input-error bio-input-error ">Необходимо заполнить пол</span>

      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name="add"
        title="Новое место"
        submit="Создать">

        <div className="popup__container">
          <input id="name-card" name="name" className="popup__input popup__input_type_title" type="text"
            placeholder="Название" required minlength="2" maxlength="30" />
          <span className="popup__input-error name-card-error popup__input-error_active"></span>
        </div>

        <div className="popup__container">
          <input id="link-card" name="link" className="popup__input popup__input_type_link" type="url"
            placeholder="Ссылка на картинку" required />
          <span className="popup__input-error link-card-error"></span>

        </div>

      </PopupWithForm>





      {/* // ПОПАП ПРОФИЛЯ */}
      <div className="popup popup_type_edit">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>

          <h3 className="popup__title">Редактировать профиль</h3>

          <form name="edit_form" className="popup__form" novalidate>
            <input id="name-input" name="user_name" className="popup__input popup__input_type_name " type="text"
              placeholder="Имя" required minlength="2" maxlength="40" />
            <span className="popup__input-error name-input-error"></span>

            <input id="bio-input" name="biography" className="popup__input popup__input_type_description" type="text"
              placeholder="О тебе" required minlength="2" maxlength="200" />
            <span className="popup__input-error bio-input-error ">Необходимо заполнить пол</span>

            <button className="popup__submit" type="submit" disabled>Сохранить</button>
          </form>
        </div>
      </div>
      {/* // ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ */}
      <div className="popup popup_type_add">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>

          <h3 className="popup__title">Новое место</h3>

          <form name="edit_form" className="popup__form" novalidate>
            <div className="popup__container">
              <input id="name-card" name="name" className="popup__input popup__input_type_title" type="text"
                placeholder="Название" required minlength="2" maxlength="30" />
              <span className="popup__input-error name-card-error popup__input-error_active"></span>
            </div>

            <div className="popup__container">
              <input id="link-card" name="link" className="popup__input popup__input_type_link" type="url"
                placeholder="Ссылка на картинку" required />
              <span className="popup__input-error link-card-error"></span>

            </div>
            <button className="popup__submit" type="submit" disabled>Создать</button>

          </form>
        </div>
      </div>
      {/* // ПОПАП ОТКРЫТИЯ КАРТОЧКИ */}
      <div className="popup popup_type_review">
        <div className="popup__view">
          <button type="button" className="popup__close"></button>
          <img className="popup__img"
            src="https://avatars.mds.yandex.net/i?id=65fc6c1c9001dc0dd85f0d14bd52438f1433e6b5-8177627-images-thumbs&n=13"
            alt="" />
          <h3 className="popup__description">Имя карточки</h3>
        </div>
      </div>

      {/* // ПОПАП УДАЛЕНИЯ КАРТОЧКИ */}
      <div className="popup popup_type_confirm">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>

          <form className="popup__form">
            <h3 className="popup__title popup__title_confirm">Вы уверены?</h3>
            <button className="popup__submit popup__submit_confirm" type="submit" >Да</button>
          </form>

        </div>
      </div>

      {/* // ПОПАП РЕДАКТИРОВАНИЯ АВАТАРА UPDATE AVATAR */}
      <div className="popup popup_type_update-avatar">
        <div className="popup__content">
          <button type="button" className="popup__close"></button>

          <h3 className="popup__title">Обновить аватар</h3>

          <form name="edit_form" className="popup__form" novalidate>

            <div className="popup__container">
              <input id="avatar-link" name="link" className="popup__input popup__input_type_link" type="url"
                placeholder="Ссылка на изображение" required />
              <span className="popup__input-error avatar-link-error"></span>
            </div>
            <button className="popup__submit" type="submit" >Сохранить</button>

          </form>
        </div>
      </div>


      {/* // ТЕМПЛЕЙ ЭЛЕМЕНТ */}
      <template className="template-element">
        <article className="element">
          <img className="element__img" src="#" alt="картинка" />
          <button type="button" className="element__trash"></button>
          <div className="element__description">
            <h2 className="element__caption"></h2>
            <div className="element__counter">
              <button type="button" className="element__like-btn"></button>
              <div className="element__count">0</div>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
