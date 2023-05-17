import React from "react";
const PopupWithForm = (props) => {



    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__content">

                <button type="button" className="popup__close"></button>
                <h3 className="popup__title">{props.title}</h3>

                <form name={`${props.name}__form`}
                 className="popup__form"
                 novalidate>
                    console.log({props.children});
                     {props.children}
                    <button className="popup__submit"
                     type="submit"
                     disabled>Сохранить</button>

                </form>
            </div>
        </div>
    )
}
export default PopupWithForm