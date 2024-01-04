import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import ServiceType from '../types/Service';

function Services() {
  const { serviceList, setServiceList } = useContext(GlobalContext);

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
                <span>{service.password}</span>
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
