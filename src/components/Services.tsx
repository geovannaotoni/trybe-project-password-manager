import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function Services() {
  const { serviceList } = useContext(GlobalContext);
  return (
    <section>
      {serviceList.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <>
          {serviceList.map((service) => (
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
                <span>{service.password}</span>
              </div>
            </article>
          ))}
        </>
      )}
    </section>
  );
}

export default Services;
