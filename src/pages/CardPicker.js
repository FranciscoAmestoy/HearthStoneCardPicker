import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";

const CardPicker = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(36);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const url = "https://api.hearthstonejson.com/v1/121569/esES/cards.json";
      const response = await fetch(url);
      const responseJSON = await response.json();
      setCards(responseJSON);
      setLoading(false);
    };
    fetchCards();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <div className="cardPickerContainer">
      <div className="tituloCardPicker">
        <h3>
          A continuación encontrarás la lista completa de cartas HearthStone:
        </h3>
      </div>
      <Cards cards={currentCards} loading={loading} />
    </div>
  );
};

export default CardPicker;
