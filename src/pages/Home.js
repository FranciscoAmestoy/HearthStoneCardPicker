import React from "react";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="tituloHome">
        <h1>
          Te doy la bienvenida a <br />
          HearthStone Card Picker!
        </h1>
      </div>
      <div className="parrafoHome">
        <p>
          <br />
          Una app hecha en React con el objetivo de probar el uso de APIs de
          terceros, concretamente, <br /><br />{" "}
          <a className="enlaceH" href="https://hearthstonejson.com/">
          <p className="yellow">HearthStone</p><p className="red">Json</p>
          </a> <p className="tinyText">(Click para visitar el enlace)</p>
        </p>
      </div>
    </div>
  );
};

export default Home;
