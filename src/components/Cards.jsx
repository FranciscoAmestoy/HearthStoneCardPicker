import { React, useState } from "react";

export const Cards = ({ cards, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
    <div>
      <div>
        <input
          type="text"
          className="searchBar"
          placeholder="Buscar Nombre Carta"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <ul className="cardList">
        {cards
          .filter((card) => {
            if (searchTerm === "") {
              return card;
            } else if (
              card.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return card;
            }
          })
          .map((card) => (
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
