import React from "react";
const PopupWithForm = (props) => {
    const checkIsOpen = props.isOpen
    ? `popup popup_type_${props.name} popup_is-opened`
    : `popup popup_type_${props.name}`;



    return (
        <div className={checkIsOpen}>
            <div className="popup__content">

                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <h3 className="popup__title">{props.title}</h3>

                <form name={`${props.name}__form`}
                 className="popup__form"
                 novalidate>
                     {props.children}
                    <button className="popup__submit"
                     type="submit"
                     disabled>{props.submit}</button>

                </form>
            </div>
        </div>
    )
}
export default PopupWithForm