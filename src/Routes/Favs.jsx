import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme} container`}>
      <h1>Destacados</h1>
      <div className="card-grid">
        {state.favs.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
