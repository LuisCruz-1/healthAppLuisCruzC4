import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Form from "../Components/Form";

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${state.theme} container`}>
      <h1>Contáctanos</h1>
      <Form />
    </div>
  );
};

export default Contact;
