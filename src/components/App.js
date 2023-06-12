import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Header from "./Header";
import Footer from "./Fotter";
import Main from "./Main";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';


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


  //запрос данных о пользователе с серва
  useEffect(() => {
    api.getUserInfo().then(data => {
      setCurrentUser(data)
    })
      .catch(err => { console.log(err) })
  }, []);

  //Запрос карточек с серва
  useEffect(() => {
    api.getStarterCards().then(card => {
      setCards(card)
    })
      .catch(err => { console.log(err) })
  }, []);

  //обработчик аватара профиля
  function handleUpdateAvatar({ avatar }) {
    api.setUserAvatar({ avatar }).then(newImgAvatar => {
      setCurrentUser(newImgAvatar)
      closeAllPopups()
    })
      .catch(err => { console.log(err) })
  }


  //обработчик форм профиля
  function handleUpdateUser({ name, about }) {
    api.patchUserInfo({ name, about }).then(userData => {
      setCurrentUser(userData)
      closeAllPopups()
    })
      .catch(err => { console.log(err) })
  }

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
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({
      isOpen: false,
      item: {},
    })
  }
  //добавление карточки
  function handleAddPlaceSubmit({ name, link }) {
    api.addCardToServer({ name, link }).then(newCard => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
      .catch(err => { console.log(err) })
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

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
        />

        {/* //Попап Профиля */}

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
          onClose={closeAllPopups}
        />

        {/* //Попап Карточки */}

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onAddPlace={handleAddPlaceSubmit}
          onClose={closeAllPopups}
        />

        {/* //Попап Картинки */}

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </CurrentUserContext.Provider>
    </>
  );
}
export default App;