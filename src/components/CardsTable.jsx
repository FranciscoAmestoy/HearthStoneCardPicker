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
          className="searchBarTable"
          placeholder="Buscar Nombre Carta"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Card Name</th>
            <th>Artist</th>
            <th>Mana Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {cards.map((card) => (
                <li>{card.id}</li>
              ))}
            </th>
            <th>
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
                  <li>{card.name}</li>
                ))}
            </th>
            <th>
              {cards.map((card) => (
                <li>{card.artist}</li>
              ))}
            </th>
            <th>
              {cards.map((card) => (
                <li>{card.cost}</li>
              ))}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cards;
