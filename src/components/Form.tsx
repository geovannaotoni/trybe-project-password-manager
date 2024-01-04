import React, { useState } from 'react';

function Form() {
  const [showForm, setShowForm] = useState(false);

  return (
    showForm ? (
      <form>
        <label htmlFor="service">
          Nome do Serviço
          <input type="text" id="service" />
        </label>
        <label htmlFor="login">
          Login
          <input type="text" id="login" />
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" id="password" />
        </label>
        <label htmlFor="url">
          URL
          <input type="text" id="url" />
        </label>
        <button type="button">
          Cadastrar
        </button>
        <button
          type="button"
          onClick={ () => setShowForm(false) }
        >
          Cancelar
        </button>
      </form>
    ) : (
      <button
        type="button"
        onClick={ () => setShowForm(true) }
      >
        Cadastrar nova senha
      </button>
    )
  );
}

export default Form;
