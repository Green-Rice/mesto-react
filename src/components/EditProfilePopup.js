import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    const [name, setName] = useState()
    const [description, setDescription] = useState()


    const handlerInputUserName = (event) => {
        setName(event.target.value)
    }
    const handlerInputUserDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        console.log('111')
        event.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            onClose={props.onClose}
            isOpen={props.isOpen}
            name="edit"
            title="Редактировать профиль"
            submit="Сохранить"
            onSubmit={handleSubmit}>
            <>
                <input
                    id="name-input"
                    value={name}
                    name="user_name"
                    className="popup__input popup__input_type_name "
                    type="text"
                    placeholder="Имя"
                    required minLength="2"
                    maxLength="40"
                    onChange={handlerInputUserName} />

                <span className="popup__input-error name-input-error"></span>

                <input
                    id="bio-input"
                    value={description}
                    name="biography"
                    className="popup__input popup__input_type_description"
                    type="text"
                    placeholder="О тебе"
                    required minLength="2"
                    maxLength="200"
                    onChange={handlerInputUserDescription} />

                <span className="popup__input-error bio-input-error ">Необходимо заполнить пол</span>
            </>
        </PopupWithForm>
    )
}
export default EditProfilePopup;