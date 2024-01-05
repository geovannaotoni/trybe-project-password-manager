import React, { useContext, useState } from 'react';
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';
import { FaTrash, FaLink } from 'react-icons/fa';
import { IoIosUnlock } from 'react-icons/io';
import GlobalContext from '../context/GlobalContext';

function Services() {
  const { serviceList, setServiceList } = useContext(GlobalContext);
  const [showPasswords, setShowPasswords] = useState(true);

  const deleteService = (index: number) => {
    const filteredList = serviceList.filter((_, i) => i !== index);
    setServiceList(filteredList);
  };

  return (
    <div className="flex flex-col w-full px-10 items-center">
      {serviceList.length === 0 ? (
        <p className="text-gray-600 font-roboto text-xl pt-10">
          Nenhuma senha cadastrada...
        </p>
      ) : (
        <>
          <label
            htmlFor="showPasswords"
            className="text-blue-300 font-bold text-lg w-full flex justify-end pb-5"
          >
            <div className="flex items-center cursor-pointer py-1">
              Esconder Senhas
              <button
                onClick={ () => setShowPasswords(!showPasswords) }
                className="mr-2 pl-3 text-2xl"
              >
                {showPasswords ? <LiaToggleOffSolid /> : <LiaToggleOnSolid />}
              </button>
              <input
                type="checkbox"
                name="showPasswords"
                id="showPasswords"
                checked={ showPasswords }
                onChange={ () => {} }
                style={ { display: 'none' } }
              />
            </div>
          </label>
          <section className="flex gap-5 w-full justify-center flex-wrap">
            {serviceList.map((service, index) => (
              <article
                key={ service.service }
                className="bg-gray-600 rounded-md py-4 px-6 mb-4
                flex flex-col gap-2 w-64"
              >
                <div className="flex items-center justify-between">
                  <IoIosUnlock className="text-blue-200" />
                  <a
                    href={ service.url }
                    className="flex items-center gap-2
                    text-blue-300 font-bold text-lg underline"
                  >
                    {service.service}
                    <FaLink className="text-base" />
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Login </span>
                  <span>{service.login}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Senha </span>
                  <span>{showPasswords ? service.password : '******'}</span>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    data-testid="remove-btn"
                    onClick={ () => deleteService(index) }
                    className="text-red-400 pt-1"
                  >
                    <FaTrash />
                  </button>
                </div>
              </article>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default Services;
