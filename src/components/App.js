import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Fotter";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';


function App() {
  // Нач стейт юзера
  const [currentUser, setCurrentUser] = useState({});
  //Стейты попапов
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    item: {},
  });

  useEffect(() => {
    api.getUserInfo().then(data => {
      setCurrentUser(data)
    })
    .catch(err => { console.log(err) })
  })

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    // api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
    //     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    // });
}




  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({
      isOpen: false,
      item: {},
    })
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={setSelectedCard}
          onClose={closeAllPopups}
          onCardLike={handleCardLike}
        >
        </Main>
        <Footer />

        {/* //Попап Аватара */}

        <PopupWithForm
          onClose={closeAllPopups}
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

        {/* //Попап Профиля */}

        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          name="edit"
          title="Редактировать профиль"
          submit="Сохранить">

          <input id="name-input" name="user_name" className="popup__input popup__input_type_name " type="text"
            placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error name-input-error"></span>

          <input id="bio-input" name="biography" className="popup__input popup__input_type_description" type="text"
            placeholder="О тебе" required minLength="2" maxLength="200" />
          <span className="popup__input-error bio-input-error ">Необходимо заполнить пол</span>

        </PopupWithForm>

        {/* //Попап Карточки */}

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="add"
          title="Новое место"
          submit="Создать">

          <div className="popup__container">
            <input id="name-card" name="name" className="popup__input popup__input_type_title" type="text"
              placeholder="Название" required minLength="2" maxLength="30" />
            <span className="popup__input-error name-card-error popup__input-error_active"></span>
          </div>

          <div className="popup__container">
            <input id="link-card" name="link" className="popup__input popup__input_type_link" type="url"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-card-error"></span>
          </div>

        </PopupWithForm>
        {/* //Попап Картинки */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups}>
        </ImagePopup>
      </CurrentUserContext.Provider>
    </>
  );
}
export default App;