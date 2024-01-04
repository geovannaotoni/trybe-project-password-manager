import React from 'react';

function Form() {
  return (
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
      <button type="button">
        Cancelar
      </button>
    </form>
  );
}

export default Form;
