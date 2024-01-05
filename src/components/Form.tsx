import React, { ChangeEvent, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
  const [showPassword, setShowPassword] = useState(false);

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
    clearInputs();

    Swal.fire({
      title: 'Serviço cadastrado com sucesso',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      background: '#272A37',
      color: '#fff',
    });
  };

  const clearInputs = () => {
    setInputs({
      service: '',
      login: '',
      password: '',
      url: '',
    });
  };

  return (
    showForm ? (
      <form
        className="rounded-md p-7
        gap-4 items-center
        grid grid-cols-2"
        style={ { backgroundColor: '#1E2029' } }
      >
        <div className="w-96 flex flex-col">
          <label
            htmlFor="service"
            className="text-gray-300 flex flex-col pb-1"
          >
            Nome do Serviço
            <input
              type="text"
              id="service"
              name="service"
              value={ inputs.service }
              onChange={ (e) => handleChange(e) }
              className="rounded-md bg-gray-500 p-2 text-white mt-1"
            />
          </label>
          <label
            htmlFor="login"
            className="text-gray-300 flex flex-col  pb-1"
          >
            Login
            <input
              type="text"
              id="login"
              name="login"
              value={ inputs.login }
              onChange={ (e) => handleChange(e) }
              className="rounded-md bg-gray-500 p-2 text-white mt-1"
            />
          </label>
          <label
            htmlFor="password"
            className="text-gray-300 flex flex-col pb-1"
          >
            Senha
            <div className="flex justify-between bg-gray-500 rounded-md">
              <input
                type={ showPassword ? 'text' : 'password' }
                id="password"
                name="password"
                value={ inputs.password }
                onChange={ (e) => handleChange(e) }
                className="rounded-md bg-gray-500 p-2 text-white mt-1"
              />
              <button
                type="button"
                data-testid="show-hide-form-password"
                onClick={ () => setShowPassword(!showPassword) }
                className="rounded-md bg-gray-500 p-2 text-white mt-1 pr-3"
              >
                { showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </label>
          <label
            htmlFor="url"
            className="text-gray-300 flex flex-col pb-1"
          >
            URL
            <input
              type="text"
              id="url"
              name="url"
              value={ inputs.url }
              onChange={ (e) => handleChange(e) }
              className="rounded-md bg-gray-500 p-2 text-white mt-1"
            />
          </label>
          <div className="flex justify-between p-5">
            <button
              type="button"
              onClick={ () => setShowForm(false) }
              className="text-blue-500 font-bold"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={ registerService }
              disabled={ !formIsValid() }
              className="rounded-full bg-blue-500 py-2 px-7
              hover:bg-opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Cadastrar
            </button>
          </div>
        </div>
        <div className="flex flex-col m-auto">
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
      </form>
    ) : (
      <button
        type="button"
        onClick={ () => setShowForm(true) }
        className="rounded-full bg-blue-500 py-2 px-7 hover:bg-opacity-90"
      >
        Cadastrar nova senha
      </button>
    )
  );
}

export default Form;
