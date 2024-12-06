import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length > 5 && /\S+@\S+\.\S+/.test(formData.email)) {
      setMessage(`Gracias ${formData.name}, nos pondremos en contacto con usted en breve por correo electrónico.`);
      onSubmit?.(formData); // Llama a un callback si se proporciona
    } else {
      setMessage("Por favor verifique su información.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre y Apellidos"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Form;
