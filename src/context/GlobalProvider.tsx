import { ReactElement, useState } from 'react';
import GlobalContext from './GlobalContext';
import ServiceType from '../types/Service';

type Props = {
  children: ReactElement;
};

function GlobalProvider({ children }: Props) {
  const [serviceList, setServiceList] = useState<ServiceType[]>([]);

  const contextValue = {
    serviceList,
    setServiceList,
  };

  return (
    <GlobalContext.Provider value={ contextValue }>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
