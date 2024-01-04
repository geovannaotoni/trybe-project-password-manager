import React, { ChangeEvent, useState } from 'react';

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [inputs, setInputs] = useState({
    service: '',
    login: '',
    password: '',
    url: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formIsValid = () => {
    const { service, login, password } = inputs;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,16}$/;
    const isValid = (
      service.length > 0
      && login.length > 0
      && passwordRegex.test(password)
    );
    return isValid;
  };

  return (
    showForm ? (
      <form>
        <label htmlFor="service">
          Nome do Serviço
          <input
            type="text"
            id="service"
            name="service"
            value={ inputs.service }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="login">
          Login
          <input
            type="text"
            id="login"
            name="login"
            value={ inputs.login }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            name="password"
            value={ inputs.password }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="url">
          URL
          <input
            type="text"
            id="url"
            name="url"
            value={ inputs.url }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <button
          type="button"
          onClick={ () => {} }
          disabled={ !formIsValid() }
        >
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
