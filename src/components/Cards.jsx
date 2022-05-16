import React from "react";

export const Cards = ({ cards, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
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
    </div>
  );
};

export default Cards;
