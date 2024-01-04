import React, { useContext, useState } from 'react';
import GlobalContext from '../context/GlobalContext';

function Services() {
  const { serviceList, setServiceList } = useContext(GlobalContext);
  const [showPasswords, setShowPasswords] = useState(true);

  const deleteService = (index: number) => {
    const filteredList = serviceList.filter((_, i) => i !== index);
    setServiceList(filteredList);
  };

  return (
    <section>
      {serviceList.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <>
          <label htmlFor="showPasswords">
            Esconder Senhas
            <input
              type="checkbox"
              name="showPasswords"
              id="showPasswords"
              checked={ !showPasswords }
              onChange={ () => setShowPasswords(!showPasswords) }
            />
          </label>
          {serviceList.map((service, index) => (
            <article key={ service.service }>
              <div>
                <a href={ service.url }>{service.service}</a>
              </div>
              <div>
                <span>Login: </span>
                <span>{service.login}</span>
              </div>
              <div>
                <span>Senha: </span>
                <span>{showPasswords ? service.password : '******'}</span>
              </div>
              <button
                type="button"
                data-testid="remove-btn"
                onClick={ () => deleteService(index) }
              >
                Deletar
              </button>
            </article>
          ))}
        </>
      )}
    </section>
  );
}

export default Services;
