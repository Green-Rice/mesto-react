import React from "react";

const Card = (card) => {

    const handleCardClick =() =>{
        setSelectedCard(true)
    }


    return(
        <article className="element">
              <img className="element__img" src={card.link} alt={card.name} />
              <button type="button" className="element__trash"></button>
              <div className="element__description">
                <h2 className="element__caption">{card.name}</h2>
                <div className="element__counter">
                  <button type="button" className="element__like-btn"></button>
                  <div className="element__count">{card.likes.length}</div>
                </div>
              </div>
            </article>
    )
}

export default Card;