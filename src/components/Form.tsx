import React, { ChangeEvent, useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';

function Form() {
  const [showForm, setShowForm] = useState(false);
  const [inputs, setInputs] = useState({
    service: '',
    login: '',
    password: '',
    url: '',
  });
  const { serviceList, setServiceList } = useContext(GlobalContext);

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

  const passwordChecker = (regex: RegExp) => {
    return regex.test(inputs.password)
      ? 'valid-password-check'
      : 'invalid-password-check';
  };

  const registerService = () => {
    const { service, login, password, url } = inputs;
    const newService = {
      service,
      login,
      password,
      url,
    };
    setServiceList([...serviceList, newService]);
    setShowForm(false);
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
        <div>
          <p className={ `${passwordChecker(/.{8,}/)}` }>
            Possuir 8 ou mais caracteres
          </p>
          <p className={ `${passwordChecker(/^.{0,16}$/)}` }>
            Possuir até 16 caracteres
          </p>
          <p className={ `${passwordChecker(/^(?=.*[a-zA-Z])(?=.*\d).+$/)}` }>
            Possuir letras e números
          </p>
          <p className={ `${passwordChecker(/[@#$%^&+=!]/)}` }>
            Possuir algum caractere especial
          </p>
        </div>
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
          onClick={ registerService }
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
