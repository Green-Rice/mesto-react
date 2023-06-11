import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Fotter";
import ImagePopup from './ImagePopup';
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from './EditProfilePopup';


function App() {
  // Нач стейт юзера
  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([])
  //Стейты попапов

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    item: {},
  });



  useEffect(() => {
    //запрос данных о пользователе с серва
    api.getUserInfo().then(data => {
      // console.log(data)
      setCurrentUser(data)
    })
      .catch(err => { console.log(err) })
  }, [])

  useEffect(() => {
    //Запрос карточек с серва
    api.getStarterCards().then(card => {
      setCards(card)
    })
      .catch(err => { console.log(err) })
  }, [])

  //удаление карточки
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id))
      })
      .catch(err => { console.log(err) })
  }

  //Обработка лайка
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api.setLikes(card._id).then((newCard) => {
        setCards((state) =>
          state.map((item) => (item._id === card._id ? newCard : item))
        );
      })
        .catch(err => { console.log(err) });
    } else {
      api.deleteLikes(card._id).then((newCard) => {
        setCards((state) =>
          state.map((item) => (item._id === card._id ? newCard : item))
        );
      })
        .catch(err => { console.log(err) });
    }
  }

  //Обработка попапов
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
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardDelete={handleCardDelete}
          onCardClick={setSelectedCard}
          onCardLike={handleCardLike}
          onClose={closeAllPopups}
          cards={cards}
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

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

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