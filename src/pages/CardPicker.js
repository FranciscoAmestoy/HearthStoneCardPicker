import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import CardsTable from "../components/CardsTable";
import Pagination from "../components/Pagination";
import listView from "../images/listView.png";
import picView from "../images/picView.png";

const CardPicker = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(36);
  const [totalCards, setTotalCards] = useState(0);
  const [viewType, setViewType] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      await delay(1500);
      const url = "https://api.hearthstonejson.com/v1/121569/esES/cards.json";
      const response = await fetch(url);
      const responseJSON = await response.json();
      setCards(responseJSON);
      setTotalCards(responseJSON.length);
      setLoading(false);
    };
    fetchCards();
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="cardPickerContainer">
      <div>
        <h3 className="tituloCardPicker">
          A continuación encontrarás la lista completa de <br /> cartas
          HearthStone:
        </h3>
        <div className="filterControls">
          <button>
            <img
              src={picView}
              alt="picView"
              onClick={() => setViewType(false)}
            />
          </button>
          <button>
            <img
              src={listView}
              alt="listView"
              onClick={() => setViewType(true)}
            />
          </button>
        </div>
        <div className="paginationContainer">
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={totalCards}
            paginate={paginate}
          />
        </div>
      </div>
      <div className="cardListContainer">
        {viewType ? (
          <CardsTable cards={currentCards} loading={loading} />
        ) : (
          <Cards cards={currentCards} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default CardPicker;
