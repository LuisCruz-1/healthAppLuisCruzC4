import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import userPic from "../images/doctor.jpg"; // Imagen predeterminada

const Card = ({ id, name, username }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: { id, name, username } });
  };

  const removeFav = () => {
    dispatch({ type: "REMOVE_FAV", payload: { id } });
  };

  const isFav = state.favs.some((fav) => fav.id === id);

  return (
    <div className="card">
      <Link to={`/dentist/${id}`} className="card-link">
        <img className="user-pic" src={userPic} alt={`Foto de ${name}`} />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={isFav ? removeFav : addFav} className="favButton">
        {isFav ? (
          <>
            ⭐ Quitar de Destacados
          </>
        ) : (
          <>
            ☆ Añadir a Destacados
          </>
        )}
      </button>
    </div>
  );
};

export default Card;
