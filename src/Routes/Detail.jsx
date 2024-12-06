import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import userPic from "../images/doctor.jpg";


const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setDentist(data));
  }, [id]);

  return (
    <div className={`${state.theme} container`}>
      {dentist ? (
        <>
          <div>
          <img className="user-pic" src={userPic} alt="" />
          <h1>{dentist.name}</h1>
          <p>Email: {dentist.email}</p>
          <p>Celular: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;
