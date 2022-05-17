import React from "react";

export const Cards = ({ cards, loading }) => {
  if (loading) {
    return (
      <div>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
          <h2 className="cargandoLinea">Cargando...</h2>;
        </div>
      </div>
    );
  }

  return (
    <ul className="cardList">
      {cards.map((card) => (
        <li key={card.id} className="card">
          {card.name} <br /> by {card.artist} <br />
          <img
            src={`https://art.hearthstonejson.com/v1/render/latest/esES/256x/${card.id}.png`}
            alt={"N/A"}
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
